import { groups, standalone, meta } from './data/index.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function src(s) {
  return s
    ? `<span class="src">${esc(s)}</span>`
    : `<span class="nosrc">source missing</span>`;
}

/* collect all sections flat for routing */
const allSections = [
  ...groups.flatMap(g => g.sections),
  ...standalone
];

/* ---------- block renderers ---------- */

const renderers = {
  prose: (b) => `<div class="blk">${b.heading ? `<h3>${esc(b.heading)}</h3>` : ''}
    ${b.paras.map(p => `<p class="prose">${p}</p>`).join('')}</div>`,

  stats: (b) => `<div class="blk">${b.heading ? `<h3>${esc(b.heading)}</h3>` : ''}
    <div class="stats">${b.items.map(i => `
      <div class="stat">
        <div class="v">${esc(i.value)}</div>
        <div class="l">${esc(i.label)}</div>
        <span class="s">${src(i.source)}</span>
      </div>`).join('')}</div></div>`,

  table: (b) => `<div class="blk">${b.heading ? `<h3>${esc(b.heading)}</h3>` : ''}
    <table><thead><tr>${b.columns.map(c => `<th>${esc(c)}</th>`).join('')}
    <th>Source</th></tr></thead><tbody>
    ${b.rows.map(r => `<tr>${r.cells.map(c => `<td>${c}</td>`).join('')}
      <td>${src(r.source)}</td></tr>`).join('')}
    </tbody></table></div>`,

  list: (b) => `<div class="blk">${b.heading ? `<h3>${esc(b.heading)}</h3>` : ''}
    <ul class="bullets">${b.items.map(i =>
      `<li>${i.text} ${src(i.source)}</li>`).join('')}</ul></div>`,

  timeline: (b) => `<div class="blk">${b.heading ? `<h3>${esc(b.heading)}</h3>` : ''}
    <ul class="tl">${b.items.map(i => `<li>
      <span class="when">${esc(i.when)}</span>
      <span class="what">${i.what} ${src(i.source)}</span></li>`).join('')}</ul></div>`,

  reading: (b) => `<div class="reading"><span class="tag">our reading</span>
    ${b.paras.map(p => `<p>${p}</p>`).join('')}</div>`,

  gap: (b) => `<div class="gap"><span class="tag">${esc(b.tag || 'gap')}</span>
    <p>${b.text}</p></div>`,

  source: (b) => `<div class="source-block"><span class="tag">source</span>
    <p>${b.text}</p></div>`
};

function renderBlocks(blocks) {
  return blocks.map(b => {
    const fn = renderers[b.type];
    return fn ? fn(b) : `<div class="gap"><p>Unknown block type: ${esc(b.type)}</p></div>`;
  }).join('');
}

/* ---------- routing ---------- */

function parseHash() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { sectionId: parts[0] || null, tabId: parts[1] || null, subtabId: parts[2] || null };
}

function resolve() {
  const { sectionId, tabId, subtabId } = parseHash();
  const section = allSections.find(s => s.id === sectionId) || allSections[0];
  const tab = section.tabs.find(t => t.id === tabId) || section.tabs[0];
  let subtab = null;
  if (tab.subtabs) {
    subtab = tab.subtabs.find(st => st.id === subtabId) || tab.subtabs[0];
  }
  return { section, tab, subtab };
}

function render() {
  const { section, tab, subtab } = resolve();

  $('sectionTitle').textContent = section.title;
  $('sectionSummary').textContent = section.summary || '';

  /* highlight active nav item */
  document.querySelectorAll('.nav-item').forEach(el => {
    el.setAttribute('aria-current', el.dataset.section === section.id ? 'true' : 'false');
  });

  /* ensure the group containing this section is expanded */
  const parentGroup = document.querySelector(`.nav-item[data-section="${section.id}"]`)?.closest('.nav-group');
  if (parentGroup) parentGroup.open = true;

  /* primary tabs */
  $('tabBar').innerHTML = section.tabs.map(t => `
    <button class="tab" role="tab" data-tab="${esc(t.id)}"
      aria-selected="${t.id === tab.id}">${esc(t.title)}</button>`).join('');

  $('tabBar').querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = section.tabs.find(x => x.id === btn.dataset.tab);
      if (t && t.subtabs) {
        location.hash = `#/${section.id}/${t.id}/${t.subtabs[0].id}`;
      } else {
        location.hash = `#/${section.id}/${btn.dataset.tab}`;
      }
    });
  });

  /* subtabs */
  if (tab.subtabs && subtab) {
    $('subtabBar').innerHTML = tab.subtabs.map(st => `
      <button class="subtab" role="tab" data-subtab="${esc(st.id)}"
        aria-selected="${st.id === subtab.id}">${esc(st.title)}</button>`).join('');
    $('subtabBar').hidden = false;
    $('subtabBar').querySelectorAll('.subtab').forEach(btn => {
      btn.addEventListener('click', () => {
        location.hash = `#/${section.id}/${tab.id}/${btn.dataset.subtab}`;
      });
    });
    $('content').innerHTML = renderBlocks(subtab.blocks || []);
  } else {
    $('subtabBar').innerHTML = '';
    $('subtabBar').hidden = true;
    $('content').innerHTML = renderBlocks(tab.blocks || []);
  }

  window.scrollTo(0, 0);
  closeNav();
}

/* ---------- sidebar ---------- */

function navFor(s) {
  const firstTab = s.tabs[0];
  const hash = firstTab.subtabs
    ? `#/${s.id}/${firstTab.id}/${firstTab.subtabs[0].id}`
    : `#/${s.id}/${firstTab.id}`;
  return `<button class="nav-item" data-section="${esc(s.id)}" data-hash="${hash}">${esc(s.title)}</button>`;
}

function buildNav() {
  let html = '';
  groups.forEach(g => {
    html += `<details class="nav-group" open>
      <summary class="nav-group-title">${esc(g.title)}</summary>
      <div class="nav-group-items">
        ${g.sections.map(s => navFor(s)).join('')}
      </div>
    </details>`;
  });
  standalone.forEach(s => { html += navFor(s); });
  $('sectionNav').innerHTML = html;

  $('sectionNav').querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = btn.dataset.hash; });
  });
}

function openNav() {
  document.body.classList.add('nav-open');
  $('scrim').hidden = false;
  $('menuToggle').setAttribute('aria-expanded', 'true');
}
function closeNav() {
  document.body.classList.remove('nav-open');
  $('scrim').hidden = true;
  $('menuToggle').setAttribute('aria-expanded', 'false');
}

$('menuToggle').addEventListener('click', () => {
  document.body.classList.contains('nav-open') ? closeNav() : openNav();
});
$('scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

/* ---------- boot ---------- */

$('brandMeta').textContent = `v${meta.version} · updated ${meta.updated}`;
buildNav();
window.addEventListener('hashchange', render);
render();

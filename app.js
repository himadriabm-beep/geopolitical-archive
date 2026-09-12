import { sections, meta } from './data/index.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* A figure without a source must never render as a clean finding. */
function src(s) {
  return s
    ? `<span class="src">${esc(s)}</span>`
    : `<span class="nosrc">source missing</span>`;
}

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
  return { sectionId: parts[0] || null, tabId: parts[1] || null };
}

function resolve() {
  const { sectionId, tabId } = parseHash();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  const tab = section.tabs.find(t => t.id === tabId) || section.tabs[0];
  return { section, tab };
}

function render() {
  const { section, tab } = resolve();

  $('sectionTitle').textContent = section.title;
  $('sectionSummary').textContent = section.summary || '';

  document.querySelectorAll('.nav-item').forEach(el => {
    el.setAttribute('aria-current', el.dataset.section === section.id ? 'true' : 'false');
  });

  $('tabBar').innerHTML = section.tabs.map(t => `
    <button class="tab" role="tab" data-tab="${esc(t.id)}"
      aria-selected="${t.id === tab.id}">${esc(t.title)}</button>`).join('');

  $('tabBar').querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      location.hash = `#/${section.id}/${btn.dataset.tab}`;
    });
  });

  $('content').innerHTML = renderBlocks(tab.blocks || []);
  window.scrollTo(0, 0);
  closeNav();
}

/* ---------- sidebar ---------- */

function buildNav() {
  $('sectionNav').innerHTML = sections.map(s => `
    <button class="nav-item" data-section="${esc(s.id)}">${esc(s.title)}</button>`).join('');
  $('sectionNav').querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = sections.find(x => x.id === btn.dataset.section);
      location.hash = `#/${s.id}/${s.tabs[0].id}`;
    });
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

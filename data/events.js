/* ---------------------------------------------------------------
   SECTION: Events 2016–2026

   Tab 1 is the master table — all fifteen events in one place,
   with a pointer to where the detail lives. Some have their own
   tab here; some are covered better in Chokepoints or Regional
   blocs; some are not yet researched and say so.

   The remaining tabs are the security shocks, researched
   September 2026. Economic and maritime shocks follow in later
   passes.

   Deliberate omission: the original table carried Geopolitical,
   Geoeconomic, Trade, Energy, Response and Bilateral columns.
   Most of the invented figures lived in those cells. Impact
   analysis now lives in the event tabs where it can carry
   sources.
   --------------------------------------------------------------- */

export const events = {
  id: 'events',
  title: 'Events 2016–2026',
  summary: 'Fifteen events that shaped the decade, and where the detail on each one sits.',
  tabs: [

    /* ---------------- MASTER TABLE ---------------- */
    {
      id: 'all-fifteen',
      title: 'All fifteen',
      blocks: [
        {
          type: 'table',
          heading: 'Security and conflict',
          columns: ['Event', 'Date', 'Detail lives in'],
          rows: [
            { cells: ['Galwan Valley clash', 'June 2020', 'Own tab &mdash; Events'], source: 'USCC / Vajiram &amp; Ravi' },
            { cells: ['Afghanistan Taliban takeover', 'August 2021', 'Own tab &mdash; Events'], source: 'MEA / ORF' },
            { cells: ['Ukraine&ndash;Russia war', 'February 2022 onward', 'Own tab &mdash; Events'], source: 'Multiple' },
            { cells: ['Israel&ndash;Palestine war', 'October 2023 onward', 'Partially in Chokepoints &rarr; Bab el-Mandeb &amp; Suez; not yet researched in its own right'], source: 'Carra Globe, Jul 2026' },
            { cells: ['Syria &mdash; fall of Assad', 'December 2024', 'Own tab &mdash; Events'], source: 'CRS RL33487' }
          ]
        },
        {
          type: 'table',
          heading: 'Maritime and chokepoint',
          columns: ['Event', 'Date', 'Detail lives in'],
          rows: [
            { cells: ['Suez blockage &mdash; Ever Given', 'March 2021', 'Chokepoints &rarr; Bab el-Mandeb &amp; Suez'], source: 'Established in Chokepoints' },
            { cells: ['Red Sea Houthi attacks', 'November 2023 onward', 'Chokepoints &rarr; Bab el-Mandeb &amp; Suez'], source: 'Established in Chokepoints' },
            { cells: ['Strait of Hormuz closure', '28 February 2026', 'Chokepoints &rarr; Strait of Hormuz; Lenses &rarr; Fault lines'], source: 'CRS R45281' }
          ]
        },
        {
          type: 'table',
          heading: 'Economic and trade',
          columns: ['Event', 'Date', 'Detail lives in'],
          rows: [
            { cells: ['US&ndash;China trade war and semiconductor decoupling', '2018 onward', 'Partially in Chokepoints &rarr; Taiwan Strait; the supply chain layer is not yet migrated'], source: 'TrendForce / Counterpoint' },
            { cells: ['COVID-19 pandemic', '2020&ndash;2022', 'Not yet researched'], source: 'Gap' },
            { cells: ['UK&ndash;EU Brexit', '2016&ndash;2020', 'Partially in Regional blocs &rarr; European Union; India&ndash;UK FTA in Lenses &rarr; India'], source: 'Established in Lenses' },
            { cells: ['RCEP entry into force', 'January 2022', 'Regional blocs &rarr; RCEP'], source: 'Established in Regional blocs' },
            { cells: ['Iran nuclear deal collapse and sanctions', '2018 onward', 'Partially in Chokepoints &rarr; Strait of Hormuz; not yet researched in its own right'], source: 'Gap' }
          ]
        },
        {
          type: 'table',
          heading: 'Institutional and regional',
          columns: ['Event', 'Date', 'Detail lives in'],
          rows: [
            { cells: ['Quad revival and institutionalisation', '2017&ndash;2021', 'Security &rarr; The Quad; Lenses &rarr; Overlapping memberships'], source: 'Established in Security' },
            { cells: ['Sri Lanka economic crisis and Hambantota', '2022 onward', 'Not yet researched &mdash; the neighbourhood country files remain the largest open gap'], source: 'Gap' },
            { cells: ['Saudi Arabia&ndash;Iran thaw, China-brokered', 'March 2023', 'Not yet researched'], source: 'Gap' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Four of the fifteen are already covered better elsewhere in this archive than a dedicated tab would manage, and three are not yet researched at all. That is the honest state of Stage 3 and it is recorded here rather than papered over with a full grid.',
            'The pointers matter more than they look. An archive that holds the same claim in two places will drift, and then there is no way to tell which entry is current. One home per fact, with signposts, is the only structure that survives years of editing.'
          ]
        }
      ]
    },

    /* ---------------- GALWAN ---------------- */
    {
      id: 'galwan',
      title: 'Galwan, 2020',
      blocks: [
        {
          type: 'timeline',
          heading: 'The clash and its resolution',
          items: [
            { when: 'Apr&ndash;May 2020', what: 'Chinese troop deployments at multiple locations in Eastern Ladakh trigger a military standoff.', source: 'Vajiram &amp; Ravi' },
            { when: '5&ndash;6 May 2020', what: 'Indian and Chinese patrols clash on the northern bank of Pangong Tso, with fistfights, stone-throwing and nail-studded clubs.', source: 'ETV Bharat, Jun 2025' },
            { when: '6 Jun 2020', what: 'Corps Commanders meet at Chushul-Moldo and agree on de-escalation and disengagement.', source: 'Vajiram &amp; Ravi' },
            { when: '15&ndash;16 Jun 2020', what: 'An Indian patrol encounters Chinese troops at Patrolling Point 14. Around 600 soldiers fight with stones and iron rods. At least 20 Indian soldiers die &mdash; the deadliest incident between the two in nearly 45 years.', source: 'USCC, 2 Jul 2020 / CBC' },
            { when: 'Jul 2020', what: 'Troops disengage from Galwan, PP15 and the Hot Springs/Gogra area.', source: 'ETV Bharat' },
            { when: 'Aug 2020', what: 'India occupies strategic heights on the Kailash Range, strengthening its position in the Chushul sector.', source: 'Vajiram &amp; Ravi' },
            { when: 'Feb 2021', what: 'China acknowledges four deaths &mdash; eight months after the clash, and extremely rare for the PLA. Independent reports suggest higher figures.', source: 'CBC / Hindustan Times, Feb 2021' },
            { when: 'Feb 2021', what: 'Disengagement from the north and south banks of Pangong Tso.', source: 'ETV Bharat' },
            { when: '30 Oct 2024', what: 'Disengagement completed at Demchok and Depsang, the last friction points. Patrolling resumes to PP10&ndash;13 in Depsang and Charding Nullah in Demchok.', source: 'ETV Bharat / Vajiram &amp; Ravi' }
          ]
        },
        {
          type: 'list',
          heading: 'Casualty figures — the disagreement, as found',
          items: [
            { text: 'India confirmed 20 deaths.', source: 'USCC, Jul 2020' },
            { text: 'China acknowledged four deaths in February 2021, having denied any casualties for eight months.', source: 'CBC, Feb 2021' },
            { text: 'Asian News International reported 43 Chinese deaths.', source: 'ANI via USCC, Jul 2020' },
            { text: 'Other independent reports suggest 35&ndash;40.', source: 'ETV Bharat, Jun 2025' },
            { text: 'Patrolling arrangements now limit patrols to roughly 14&ndash;15 soldiers, twice monthly, with coordinated schedules to prevent face-offs.', source: 'Vajiram &amp; Ravi' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The casualty spread is worth showing rather than resolving. India\u2019s figure is official and confirmed. China\u2019s is official, eight months late, and widely regarded as understated. The 35&ndash;43 range comes from Indian media and independent research. There is no neutral count, and an archive that picks one is choosing a side rather than reporting a fact.',
            'Structurally, the more important date is 30 October 2024, not June 2020. Full disengagement took four years and 21 rounds of Corps Commander talks. Both sides then built the 2026 normalisation \u2014 direct flights, Nathu La reopening, relaxed investment rules \u2014 on top of a settlement that restored patrolling rights without resolving the underlying boundary.',
            'Read alongside the India&ndash;China figures in Lens 4, the sequence is clear: the border was stabilised and the economic asymmetry widened. Record trade of $151.1bn came with a record deficit of $112.16bn. Galwan changed the security relationship permanently and the trade relationship not at all.'
          ]
        }
      ]
    },

    /* ---------------- AFGHANISTAN ---------------- */
    {
      id: 'afghanistan',
      title: 'Afghanistan, 2021',
      blocks: [
        {
          type: 'timeline',
          heading: 'From estrangement to structured engagement',
          items: [
            { when: 'Aug 2021', what: 'The Taliban take Kabul following the US-led withdrawal. India closes its embassy.', source: 'Reuters / Al Jazeera' },
            { when: '23 Jun 2022', what: 'India deploys a technical team to its Kabul embassy, restoring a limited mission for trade, medical support and humanitarian aid.', source: 'MEA press release, 23 Jun 2022' },
            { when: '2023', what: 'The Afghan embassy in New Delhi shuts; consulates in Mumbai and Hyderabad continue limited services.', source: 'Al Jazeera, Oct 2025' },
            { when: 'Nov 2024', what: 'MEA Joint Secretary J. P. Singh meets Muttaqi and Defence Minister Yaqoob &mdash; the most senior publicly acknowledged Indian contact to that point.', source: 'The Diplomat, Jul 2026' },
            { when: '8 Jan 2025', what: 'Foreign Secretary Vikram Misri meets Muttaqi in Dubai, facilitated by the UAE. A diplomatic milestone.', source: 'The Diplomat, Jul 2026' },
            { when: 'May 2025', what: 'First ministerial-level call: Jaishankar speaks with Muttaqi and appreciates his condemnation of the Pahalgam attack.', source: 'NewsOnAir, Oct 2025' },
            { when: '9&ndash;16 Oct 2025', what: 'Muttaqi visits India &mdash; the first Taliban ministerial visit since 2021, enabled by a temporary UN travel-ban exemption. India announces it will fully reopen the Kabul embassy and accredit Islamic Emirate diplomats. Neither side mentions appointing an ambassador.', source: 'ORF, Oct 2025 / Al Jazeera' },
            { when: 'Oct 2025', what: 'Pakistani strikes on Kabul and Durand Line clashes coincide with the visit. A fragile ceasefire is secured on 19 October, mediated by Qatar, Turkey and Saudi Arabia.', source: 'ICWA, Feb 2026' },
            { when: '19&ndash;25 Nov 2025', what: 'Taliban Minister of Industry and Commerce Noorudin Azizi visits India with a trade delegation.', source: 'The Diplomat, Jul 2026' },
            { when: 'Jan 2026', what: 'Mufti Noor Ahmad Noor arrives in New Delhi as charg&eacute; d\u2019affaires of the Afghan embassy.', source: 'The Diplomat, Jul 2026' },
            { when: 'Feb 2026', what: 'The Afghan government welcomes India\u2019s budget allocation for Kabul.', source: 'Wion via ICWA, 2 Feb 2026' }
          ]
        },
        {
          type: 'list',
          heading: 'The recognition question',
          items: [
            { text: 'Russia is the only country to have formally recognised the Taliban administration.', source: 'Reuters / Al Jazeera, Oct 2025' },
            { text: 'Around a dozen countries including China, Russia, Iran, Pakistan and T&uuml;rkiye operate embassies in Kabul.', source: 'Al Jazeera, Oct 2025' },
            { text: 'All Indian official communications referred to Muttaqi simply as the &ldquo;Afghan foreign minister&rdquo;. At the Jaishankar meeting neither the former republic\u2019s tricolour nor the Emirate\u2019s white banner was displayed.', source: 'ORF, Oct 2025' },
            { text: 'Jaishankar affirmed India\u2019s full commitment to Afghan sovereignty, territorial integrity and independence, and thanked Muttaqi for inviting Indian companies to explore mining opportunities.', source: 'Al Jazeera, Oct 2025' },
            { text: 'India sent earthquake relief to Kunar province via Chabahar.', source: 'NewsOnAir, Oct 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The flag detail at the Jaishankar meeting is the most precise illustration of Indian statecraft in this archive. Displaying the republic\u2019s flag would have denied the Taliban\u2019s control; displaying the Emirate\u2019s would have conferred recognition. India displayed neither and held the meeting anyway. The substance proceeded while the symbolism was suspended.',
            'The driver is Pakistan, and the timing makes it explicit. Pakistani strikes on Kabul landed during Muttaqi\u2019s Delhi visit. India\u2019s outreach accelerated after Pakistan upgraded its own Taliban ties, and deepened further as Islamabad\u2019s relationship with Kabul collapsed. Afghanistan is being contested as a strategic space, and India is winning access without paying the recognition price Russia paid.',
            'Worth noting what this costs analytically: engagement of this kind is cheap to begin and hard to reverse. India now has an accredited Taliban charg&eacute; d\u2019affaires in Delhi, a functioning embassy in Kabul, a budget line and mining interest. None of that formally recognises the Emirate, and all of it would be difficult to unwind.'
          ]
        }
      ]
    },

    /* ---------------- UKRAINE ---------------- */
    {
      id: 'ukraine',
      title: 'Ukraine, 2022',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The single most consequential event in this archive for India, though not for the reasons usually cited. Its effects run through energy, the dollar, the tariff relationship with Washington, and the EU accession question. Those threads live in Lenses; what follows is the India-specific record.'
          ]
        },
        {
          type: 'timeline',
          heading: 'India\u2019s energy position, before and after',
          items: [
            { when: 'Before Feb 2022', what: 'Russian crude accounts for around 2% of India\u2019s supply basket.', source: 'Kpler via ThePrint' },
            { when: 'FY2025', what: 'Russian crude reaches about 35% of total imports; import value grew at 96% CAGR across FY20&ndash;FY25.', source: 'Rubix Industry Insights' },
            { when: 'Aug 2025', what: 'The US adds a 25% punitive tariff over Russian crude on top of an existing 25% reciprocal tariff &mdash; 50% total, the highest on any US trading partner.', source: 'White House executive order, 6 Aug 2025' },
            { when: 'Nov 2025', what: 'US sanctions on Rosneft and Lukoil prompt Indian refiners to diversify toward the Middle East.', source: 'Kpler via ThePrint' },
            { when: 'Dec 2025&ndash;Feb 2026', what: 'Russia\u2019s share falls below 25% for the first time in two years; West Asia reaches ~59%, the highest since August 2022.', source: 'Kpler' },
            { when: '6 Feb 2026', what: 'The punitive tariff is removed by executive order. The joint statement contains no Indian commitment on Russian oil.', source: 'CNBC, 25 Feb 2026' },
            { when: 'Jun 2026', what: 'Following the Hormuz closure, Russian imports reach a record 2.6 million bpd &mdash; 54% of India\u2019s total.', source: 'OilPrice, citing Kpler and Vortexa' }
          ]
        },
        {
          type: 'list',
          heading: 'Second-order effects traced elsewhere in this archive',
          items: [
            { text: 'Rupee settlement: the Special Rupee Vostro Account mechanism was introduced in July 2022, five months after the invasion.', source: 'RBI A.P. (DIR Series) Circular No. 10, 11 Jul 2022' },
            { text: 'EU enlargement: Ukraine applied on 28 February 2022, received candidate status on 23 June 2022, and had seven of 33 chapters open by July 2026.', source: 'European Commission' },
            { text: 'NATO: the war produced Finnish accession in 2023, Swedish accession in 2024, and the Hague 5% spending pledge in 2025.', source: 'NATO' },
            { text: 'Russia\u2019s exclusion from the G7 predates the 2022 invasion, dating to 2014.', source: 'Established in Economic forums' },
            { text: 'The US Senate has passed the Sanctioning Russia and Iran Act of 2026, allowing tariffs of up to 100% on countries among the top five importers of Russian oil and gas.', source: 'The Hindu, Aug 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The conventional framing is that India profited from discounted Russian crude. The four-year record shows something more constrained: India moved from 2% to 35% dependence on a single supplier, which is the opposite of the diversification its own energy doctrine calls for.',
            'The December 2025 to February 2026 reduction proves India can move when the incentive is large enough \u2014 a 25% tariff removed in exchange. The June 2026 reversal to a record 54% proves how little of that was structural. The Middle Eastern alternatives all sat behind a strait that closed.',
            'The live risk is the Sanctioning Russia and Iran Act. India has just demonstrated that it reduces Russian crude under tariff pressure and restores it under supply pressure. If both pressures apply simultaneously \u2014 a 100% tariff threat while Hormuz remains closed \u2014 there is no established playbook, and this is the most consequential open question in the archive for 2026&ndash;27.'
          ]
        }
      ]
    },

    /* ---------------- SYRIA ---------------- */
    {
      id: 'syria',
      title: 'Syria, 2024',
      blocks: [
        {
          type: 'timeline',
          heading: 'From Assad\u2019s fall to delisting',
          items: [
            { when: '8 Dec 2024', what: 'Opposition forces announce the liberation of Damascus after an eleven-day offensive, ending more than five decades of family rule.', source: 'Legal Service India, Aug 2026' },
            { when: 'Jan 2025', what: 'Ahmed al-Sharaa, leader of Hay\u2019at Tahrir al-Sham, is declared transitional president.', source: 'House of Commons Library' },
            { when: 'Mar 2025', what: 'An interim constitutional declaration comes into effect.', source: 'House of Commons Library' },
            { when: '2025', what: 'The US lifts its broader sanctions programme and repeals the Caesar Act; the UK lifts sanctions on a dozen Syrian entities following earlier removals on banks and oil companies.', source: 'The Hindu, Aug 2026 / AP, Jul 2025' },
            { when: 'Oct 2025', what: 'The SDF agrees to integrate into the Syrian National Army within three consolidated divisions.', source: 'Manara Magazine, Feb 2026' },
            { when: 'Nov 2025', what: 'UN Security Council Resolution 2799, US-sponsored, removes al-Sharaa and interim interior minister Anas Khattab from the ISIL and Al-Qaida sanctions list. HTS itself remains listed as of February 2026.', source: 'CRS RL33487' },
            { when: 'Jan 2026', what: 'Al-Sharaa and Kurdish forces leader Mazloum Abdi sign a ceasefire after clashes in which government troops seized most Kurdish-held territory.', source: 'Manara Magazine, Feb 2026' },
            { when: '8 Jul 2026', what: 'Trump notifies Congress of intent to rescind the State Sponsor of Terrorism designation, beginning a 45-day review.', source: 'The Hindu, Aug 2026' },
            { when: '25 Aug 2026', what: 'Syria is removed from the US State Sponsors of Terrorism list, a designation first imposed on 29 December 1979. Targeted sanctions remain on former-regime figures and specific groups.', source: 'The Hindu, 26 Aug 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'The scale of what remains',
          columns: ['Measure', 'Figure'],
          rows: [
            { cells: ['Reconstruction needs', 'Nearly $216 billion, World Bank estimate'], source: 'World Bank via CRS RL33487' },
            { cells: ['In need of humanitarian or protection assistance', '15.6 million as of May 2026'], source: 'CRS IF11930, Jun 2026' },
            { cells: ['Refugees in regional countries', '3.6 million'], source: 'CRS IF11930, Jun 2026' },
            { cells: ['Internally displaced', '5.9 million'], source: 'CRS IF11930, Jun 2026' },
            { cells: ['UN humanitarian appeal', '$3.2 billion, 29% funded as of December 2025'], source: 'House of Commons Library' }
          ]
        },
        {
          type: 'list',
          heading: 'India\u2019s engagement',
          items: [
            { text: 'Suresh Kumar, MEA Joint Secretary for West Asia and North Africa, visited Syria in July 2025.', source: 'ORF, Jan 2026' },
            { text: 'India announced an Arab ministerial meeting for February 2026, to be attended by Syrian Foreign Minister Asaad al-Shaibani.', source: 'ORF, Jan 2026' },
            { text: 'Russia and Iran, formerly Assad\u2019s key backers, established relations with the new government shortly after his fall.', source: 'ORF, Jan 2026' },
            { text: 'Reconstruction is framed by external actors, India included, as a strategic investment rather than only a humanitarian one.', source: 'ORF, Jan 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The speed of rehabilitation is the striking fact. A leader whose organisation was UN-listed was delisted by Security Council resolution within eleven months of taking power, hosted in Washington within a year, and had his country removed from a 1979 terrorism designation within twenty months. Whatever else this demonstrates, it shows that terrorism designations are revisable when the strategic case changes \u2014 quickly.',
            'India\u2019s response follows the Afghanistan template closely: officials engage, ministerial contact is arranged through a multilateral format rather than a bilateral visit, and recognition language stays deliberately unremarkable. The same playbook, applied to a different post-conflict government, within the same eighteen months.',
            'For forecasting, the $216 billion reconstruction figure against a humanitarian appeal 29% funded is the number to hold. Reconstruction at that scale requires capital that is not currently committed by anyone, which means the competition for reconstruction contracts described in the Indian commentary is, for now, a competition for something that does not yet exist.'
          ]
        }
      ]
    }

  ]
};

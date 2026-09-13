/* ---------------------------------------------------------------
   SECTION: Security

   Four groupings, one per tab. Stage 1 migration, audited against
   the sourcing rules: founding facts and membership are stable
   reference data; every share statistic carries its source, and
   where sources disagree the disagreement is shown rather than
   resolved by picking a favourite.
   --------------------------------------------------------------- */

export const security = {
  id: 'security',
  title: 'Security',
  summary: 'NATO, the Quad, the SCO and AUKUS — the four groupings where the organising logic is defence.',
  tabs: [

    /* ---------------- NATO ---------------- */
    {
      id: 'nato',
      title: 'NATO',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Founded', '1949, North Atlantic Treaty'], source: 'NATO' },
            { cells: ['Members', '32'], source: 'NATO' },
            { cells: ['Most recent accessions', 'Finland 2023, Sweden 2024'], source: 'NATO' },
            { cells: ['Headquarters', 'Brussels'], source: 'NATO' },
            { cells: ['Core principle', 'Article 5 collective defence'], source: 'NATO' },
            { cells: ['2026 summit', 'Ankara, T&uuml;rkiye, 7&ndash;8 July 2026; Albania to follow'], source: 'Hague Summit Declaration / CSIS' }
          ]
        },
        {
          type: 'prose',
          heading: 'The Hague spending commitment',
          paras: [
            'At the 2025 summit in The Hague, allies committed to investing 5% of GDP annually on defence by 2035. The figure splits into two categories: at least 3.5% of GDP for core defence requirements and NATO Capability Targets, and up to 1.5% for critical infrastructure protection, network defence, civil preparedness and resilience, innovation and the defence industrial base. <span class="src">NATO, Hague Summit Declaration</span>',
            'This replaced the 2014 Wales pledge of 2% of GDP, itself a response to Russia\u2019s annexation of Crimea. Wales also asked allies to devote at least 20% of defence expenditure to major equipment and associated R&amp;D. <span class="src">NATO</span>',
            'All 32 members signed up except Spain, which received an exemption. National roadmaps showing a credible incremental path were due by mid-2026, with a collective review of progress scheduled for 2029 and the final deadline at 2035. <span class="src">Hague Summit Declaration</span>'
          ]
        },
        {
          type: 'list',
          heading: 'Where spending actually stands',
          items: [
            { text: 'European allies and Canada increased combined defence expenditure by nearly 20% in real terms in 2025 compared with 2024.', source: 'NATO, Jun 2026' },
            { text: 'All allies now exceed the previous 2% of GDP target.', source: 'Atlantic Council, Apr 2026' },
            { text: 'For the first time in recorded NATO history, a European ally &mdash; Norway &mdash; has surpassed the United States in defence spending per capita.', source: 'Atlantic Council, Apr 2026' },
            { text: 'Poland pushed defence spending to 4.7% of GDP ahead of the Hague summit.', source: 'Wikipedia / Hague summit reporting' },
            { text: 'Disputes over Iran and Greenland have raised transatlantic tensions ahead of the Ankara summit.', source: 'Atlantic Council, Apr 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The number that matters in the 5% pledge is not 5% but 1.5%. Splitting the target into core defence and a loosely defined resilience category gives every member a compliance route that need not involve a single additional soldier or platform. Infrastructure, cyber, civil preparedness and industrial base spending are all things governments were doing anyway and can now book against the pledge.',
            'That makes the headline figure a weaker predictor of actual military capability than the old 2% was, and it is why the 3.5% core component is the line to track rather than the composite. Watch the mid-2026 national roadmaps for how creatively members define the 1.5%.',
            'The Norway per-capita datapoint is the genuinely novel one. NATO\u2019s internal politics have rested for seventy years on the premise that the US carries a disproportionate load. If that premise erodes even at the margins, the burden-sharing argument that has shaped every summit since Wales loses some of its force.'
          ]
        }
      ]
    },

    /* ---------------- QUAD ---------------- */
    {
      id: 'quad',
      title: 'The Quad',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Members', 'Australia, India, Japan, United States'], source: 'Britannica' },
            { cells: ['Origins', '2004 tsunami core group; Abe\u2019s 2007 &ldquo;Confluence of the Two Seas&rdquo; address to India\u2019s Parliament'], source: 'Britannica' },
            { cells: ['Revival', 'November 2017, Manila, ahead of the ASEAN Summit'], source: 'Vajiram &amp; Ravi' },
            { cells: ['First leaders\u2019 summit', 'Virtual, March 2021 &mdash; joint statement &ldquo;The Spirit of the Quad&rdquo;'], source: 'Vajiram &amp; Ravi' },
            { cells: ['Structure', 'No treaty, no secretariat, no decision-making body'], source: 'Vajiram &amp; Ravi' }
          ]
        },
        {
          type: 'timeline',
          heading: 'Where the Quad actually is, 2025&ndash;26',
          items: [
            { when: 'Nov 2025', what: 'Exercise Malabar hosted by the US at Guam, with Australia participating. Malabar began in 1992 as an India&ndash;US bilateral, became trilateral with Japan in 2015, and quadrilateral with Australia in 2020.', source: 'NewsOnAir / ORF' },
            { when: 'Nov 2025', what: 'First structured four-nation air engagement: India hosts Cope India, with Japan and Australia participating as observers &mdash; Australia\u2019s first.', source: 'The Tribune, Oct 2025' },
            { when: '2025', what: 'The leaders\u2019 summit that India was scheduled to host did not take place.', source: 'Britannica, Jul 2026' },
            { when: 'May 2026', what: '11th Foreign Ministers\u2019 Meeting held in New Delhi &mdash; Wong, Jaishankar, Motegi and Rubio &mdash; announcing maritime and energy-security initiatives amid tensions in the Strait of Hormuz and South China Sea.', source: 'Britannica / Drishti IAS, May 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The missed 2025 leaders\u2019 summit is the most important fact on this page and the easiest to skip past. The Quad\u2019s entire claim to have been institutionalised rests on the leader-level annual cadence established in 2021. A skipped year, in the country that was due to host, is evidence that the cadence was never load-bearing.',
            'The foreign ministers still met, and the exercises still ran. That tells you what the Quad currently is: a working-level maritime and technology coordination mechanism that convenes leaders when the politics allow, rather than a standing architecture that survives bad bilateral weather.',
            'For the archive\u2019s India thread, this cuts against the v3.0 framing of the Quad as India\u2019s firmest anchor. The trade friction of 2025&ndash;26 &mdash; a 50% US tariff, half of it punitive over Russian crude &mdash; shows the relationship that underwrites the Quad is itself negotiable. An alignment that can be disrupted by a tariff dispute is a partnership, not an alliance, and India has been careful never to call it one.'
          ]
        }
      ]
    },

    /* ---------------- SCO ---------------- */
    {
      id: 'sco',
      title: 'SCO',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Predecessor', 'Shanghai Five, formed 1996 &mdash; China, Kazakhstan, Kyrgyzstan, Russia, Tajikistan'], source: 'EPFL concept graph' },
            { cells: ['Founded', 'June 2001, Shanghai, with Uzbekistan joining the five'], source: 'EPFL concept graph' },
            { cells: ['Members (10)', 'Belarus, China, India, Iran, Kazakhstan, Kyrgyzstan, Pakistan, Russia, Tajikistan, Uzbekistan'], source: "Russia's Pivot to Asia, 2026" },
            { cells: ['Accessions', 'India and Pakistan 2017, Iran July 2023, Belarus 2024'], source: 'EPFL / SCO reporting' },
            { cells: ['Institutions', 'Secretariat in Beijing; Regional Anti-Terrorist Structure (RATS) in Tashkent'], source: 'Pakistan MoFA' },
            { cells: ['Chair 2026&ndash;27', 'Pakistan, taking over from Kyrgyzstan'], source: 'GSRRA, 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'Share statistics — sources disagree, shown as found',
          columns: ['Measure', 'Figure', 'Attributed to'],
          rows: [
            { cells: ['Share of world population', '~45%', 'Centre for Peace Studies'], source: 'ICPS, Aug 2026' },
            { cells: ['Share of world population', '42%', "Russia's Pivot to Asia"], source: "Russia's Pivot to Asia, 2026" },
            { cells: ['Share of world population', 'more than 40%', 'GSRRA'], source: 'GSRRA, 2026' },
            { cells: ['Nominal GDP share', '~23%', 'Centre for Peace Studies'], source: 'ICPS, Aug 2026' },
            { cells: ['Nominal GDP share', 'over 23%', 'Global Research'], source: 'Global Research, Sep 2026' },
            { cells: ['GDP share at PPP', '~36%', 'Centre for Peace Studies'], source: 'ICPS, Aug 2026' },
            { cells: ['GDP share at PPP', '36% (~$80tn), population ~3.4bn', "Russia's Pivot to Asia"], source: "Russia's Pivot to Asia, 2026" },
            { cells: ['Share of world landmass', '~25%', 'Centre for Peace Studies / Global Research'], source: 'ICPS / Global Research, 2026' }
          ]
        },
        {
          type: 'list',
          heading: 'Bishkek, September 2026',
          items: [
            { text: 'The 26th Council of Heads of State met at Bishkek on 1 September 2026, marking the organisation\u2019s 25th anniversary, chaired by Kyrgyz President Sadyr Japarov.', source: 'Global Research, Sep 2026' },
            { text: 'Attendance included Lukashenko, Modi, Pezeshkian, Tokayev, Sharif, Putin, Rahmon and Mirziyoyev, alongside UN Secretary-General Ant&oacute;nio Guterres.', source: 'Global Research, Sep 2026' },
            { text: 'The summit adopted the Bishkek Declaration plus agreements covering security, connectivity, transport, digital cooperation, climate, health and humanitarian affairs.', source: 'GSRRA, 2026' },
            { text: 'A proposed SCO Development Bank remains under negotiation rather than agreed.', source: 'GSRRA, 2026' },
            { text: 'The SCO Development Strategy to 2035 was identified at the Tianjin summit in September 2025.', source: 'ICPS, Aug 2026' },
            { text: 'Pakistan chaired RATS during 2025&ndash;26 and holds permanent chairmanship of the Special Working Group on Poverty Alleviation.', source: 'GSRRA, 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The spread in the share statistics is worth dwelling on rather than averaging away. Population estimates run from 40% to 45% and GDP from 23% nominal to 36% at PPP &mdash; and which figure a source chooses tells you what it is arguing. PPP-based GDP maximises the bloc\u2019s apparent weight; nominal minimises it. Advocacy outlets reach for the first, sceptics for the second, and both are technically accurate.',
            'This is the mechanism by which v3.0 went wrong across the whole archive. When a range exists, picking the most impressive end and dropping the attribution produces something that reads as fact and functions as argument. Showing the range is the fix.',
            'On substance: the undelivered Development Bank is the tell. The SCO has been discussing a financing arm for well over a decade without agreeing one, because China would inevitably dominate it and Russia and India both know it. The organisation convenes reliably and commits to very little that requires pooled money.'
          ]
        }
      ]
    },

    /* ---------------- AUKUS ---------------- */
    {
      id: 'aukus',
      title: 'AUKUS',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Announced', 'September 2021 &mdash; Australia, United Kingdom, United States'], source: 'CRS RL32418' },
            { cells: ['Pillar 1', 'Nuclear-powered attack submarine pathway for Australia'], source: 'CRS RL32418' },
            { cells: ['Pillar 2', 'AI, cyber, quantum, autonomous and uncrewed systems'], source: 'Navy Lookout, Oct 2025' },
            { cells: ['Enabling legislation', 'FY2024 NDAA, 22 December 2023, sections 1351&ndash;1354'], source: 'CRS RL32418' }
          ]
        },
        {
          type: 'prose',
          heading: 'What Pillar 1 actually commits to',
          paras: [
            'Three elements: rotational deployment of four US and one UK attack submarine from a port in Western Australia; sale of three to five Virginia-class boats to Australia with replacements built for the US Navy; and US and UK assistance for Australia to build a further three to five submarines of a new UK&ndash;Australian design, reaching a planned eight-boat force. <span class="src">CRS RL32418, Jan 2026</span>'
          ]
        },
        {
          type: 'timeline',
          heading: 'Trajectory',
          items: [
            { when: '2023', what: 'Australian personnel begin embedding with US and UK navies and industrial bases; US submarine port visits to Australia increase.', source: 'CRS RL32418' },
            { when: 'Feb&ndash;Oct 2025', what: 'Australia pays $500m in February and $525m in July toward the US submarine industrial base, reaching $1bn by October; a $3bn contribution to the UK industrial base is also committed.', source: 'CRS RL32418' },
            { when: 'Jun 2025', what: 'The Pentagon initiates a review of Pillar 1 under Undersecretary Elbridge Colby, testing alignment with the America First agenda.', source: 'Navy Lookout / CRS' },
            { when: 'Dec 2025', what: 'Following the review, administration officials publicly affirm support for AUKUS including Pillar 1. Details of the review were not disclosed.', source: 'CRS RL32418' },
            { when: 'Jan 2026', what: 'CRS reports 41 Virginia-class boats procured through FY2025 at roughly $5.0bn each; actual production has never reached 2.0 per year and has run at about 1.1&ndash;1.2 since 2022.', source: 'CRS RL32418, 26 Jan 2026' },
            { when: '30 May 2026', what: 'Announced in Singapore: the one newly built Virginia-class boat is removed from Australia\u2019s pathway and replaced by a third drawn from the existing US Navy fleet. All three are now second-hand.', source: 'Army Recognition, Jun 2026' },
            { when: '30 May 2026', what: 'Pillar 2 efforts elevated around autonomous underwater capabilities &mdash; uncrewed vehicles, sensors and payloads for seabed surveillance and infrastructure protection.', source: 'Army Recognition, Jun 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The May 2026 revision preserves the boat count and quietly changes what a boat is. Three second-hand hulls instead of two plus one new means Australia\u2019s capability through the 2030s is now governed by remaining reactor life and platform age rather than by build schedule. The headline commitment is intact; the underlying asset is older.',
            'The cause is visible one line up in the timeline. At 1.1&ndash;1.2 boats a year against a two-per-year procurement rate, the US industrial base cannot simultaneously replace its own hulls and build new ones for Australia. Something had to give, and what gave was the newness of Australia\u2019s boats rather than the political commitment.',
            'For India, the read-across is about supply rather than alignment. AUKUS demonstrates that even a treaty-adjacent partnership with the United States cannot conjure industrial capacity that does not exist. Any Indian planning that assumes US platforms arriving on schedule should be discounted by the same constraint.'
          ]
        }
      ]
    }

  ]
};

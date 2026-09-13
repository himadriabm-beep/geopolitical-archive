/* ---------------------------------------------------------------
   SECTION: Supply chains

   The sector-by-sector vulnerability layer, migrated from the
   September 2026 draft and rebuilt on sources.

   Cross-references rather than duplicates: the Taiwan Strait
   concentration figures live in Chokepoints; the rare earth
   cliff dating lives in Lenses -> Fault lines. This section
   carries the sector view and points at both.
   --------------------------------------------------------------- */

export const supplyChains = {
  id: 'supply-chains',
  title: 'Supply chains',
  summary: 'Where the single points of failure sit, sector by sector, and what India has built against them.',
  tabs: [

    /* ---------------- PHARMACEUTICALS ---------------- */
    {
      id: 'pharmaceuticals',
      title: 'Pharmaceuticals',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The most important finding in this section, and the one that runs against the intuitive model of how industrial policy works.'
          ]
        },
        {
          type: 'table',
          heading: 'The dependency',
          columns: ['Measure', 'Position'],
          rows: [
            { cells: ['Critical APIs', 'China accounted for 70% or more of India\u2019s total imports in both FY2023-24 and FY2024-25, with limited reduction between the two periods'], source: 'Department of Pharmaceuticals, tabled in Parliament &mdash; PIB, 10 Mar 2026' },
            { cells: ['Antibiotics', '87% of India\u2019s imports come from China'], source: 'ORF, Dec 2025' },
            { cells: ['Import growth 2019-20 to 2023-24', 'Bulk drug and intermediate imports rose from ~&#8377;24,172 crore to ~&#8377;37,722 crore'], source: 'ORF, Dec 2025' },
            { cells: ['Chinese share of that', 'Rose from &#8377;16,443 crore to over &#8377;27,000 crore &mdash; pushing China\u2019s value share above 70%'], source: 'ORF, Dec 2025' },
            { cells: ['High-dependence APIs', '53 APIs carry 90% import dependence; 35 have started production in India'], source: 'ORF, Dec 2025' }
          ]
        },
        {
          type: 'table',
          heading: 'What the PLI scheme produced',
          columns: ['Measure', 'Result'],
          rows: [
            { cells: ['Cumulative investment', '&#8377;4,709 crore against a committed &#8377;3,938.5 crore'], source: 'Govt of India, Aug 2025' },
            { cells: ['Domestic capacity', 'Created for 26 APIs, key starting materials and intermediates by June 2025'], source: 'Govt of India, Aug 2025' },
            { cells: ['Capacity volume', '~56,800 tonnes per annum across 28 of 41 identified critical products'], source: 'PIB, Mar 2026' },
            { cells: ['Sales', '&#8377;1,962 crore, including &#8377;479 crore of exports'], source: 'Govt of India, Aug 2025' },
            { cells: ['Imports avoided', '&#8377;1,483 crore'], source: 'Govt of India, Aug 2025' }
          ]
        },
        {
          type: 'list',
          heading: 'And what happened anyway',
          items: [
            { text: 'Volumes of certain APIs imported from China rose 30&ndash;45% in specific intervals after the scheme launched.', source: 'Indrastra, Jun 2026' },
            { text: 'Chinese suppliers frequently met that demand by cutting prices 40&ndash;50%.', source: 'Indrastra, Jun 2026' },
            { text: 'Trade data indicates the expanded Indian production has predominantly been exported rather than used to displace Chinese imports into India\u2019s own formulation industry.', source: 'ORF, Dec 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Capacity was built and pointed at export markets, because that is where the margin sits. Meanwhile Chinese suppliers cut prices to defend the Indian market, which they could afford and new Indian entrants could not. Both things happened at once, and the net effect on dependency was close to zero.',
            'The policy implication is that the lever is demand-side, not supply-side. Subsidising capacity does not substitute imports unless Indian formulators face a cost or procurement reason to buy Indian APIs. Until that changes, capacity creation and import substitution will keep diverging, and the PLI numbers will keep looking like success while the dependency figures keep looking like failure.',
            'This is also the clearest example in the archive of why sourced figures matter more than directionally-correct ones. The v3.1 draft said 65% and falling to 40% by 2027. The real numbers are 70%-plus and not falling. Both versions describe a dependency; only one describes the actual situation.'
          ]
        }
      ]
    },

    /* ---------------- SEMICONDUCTORS ---------------- */
    {
      id: 'semiconductors',
      title: 'Semiconductors',
      blocks: [
        {
          type: 'prose',
          paras: [
            'Concentration figures and the Taiwan contingency live in Chokepoints &rarr; Taiwan Strait. This tab covers what India has built and what it does and does not address.'
          ]
        },
        {
          type: 'table',
          heading: 'India Semiconductor Mission',
          columns: ['Measure', 'Position'],
          rows: [
            { cells: ['Framework', 'Established December 2021 under a &#8377;76,000 crore programme, funding up to 50% of project cost'], source: 'ISM / India Briefing' },
            { cells: ['Approved investment', '~&#8377;1,65,685 crore across six states'], source: 'Aug 2026 reporting' },
            { cells: ['Facilities', '12 commercial facilities approved; 3 operational and producing'], source: 'Aug 2026 reporting' },
            { cells: ['Operational', 'Micron ATMP Sanand (28 Feb 2026); CG Semi; Kaynes Semicon OSAT Sanand (31 Mar 2026)'], source: 'ISM timeline' },
            { cells: ['First front-end fab', 'Tata&ndash;PSMC Dholera: &#8377;91,000 crore (~$11bn), 300mm, 50,000 wafers per month, 28nm'], source: 'Tata Sons' },
            { cells: ['Fab timeline', 'First silicon targeted December 2026; completion targeted 2028'], source: 'ISM / MeitY' },
            { cells: ['Equipment partner', 'Tata Electronics&ndash;ASML agreement signed 16 May 2026'], source: 'India Briefing' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Dholera targets 28nm &mdash; the workhorse node for automotive controllers, industrial sensors, power management and display drivers. Nothing in the approved Indian pipeline touches the sub-5nm range where TSMC\u2019s position is effectively unchallenged.',
            'That is a defensible choice rather than a failure. 28nm covers the volume demand of India\u2019s actual industrial base, and competing at the leading edge would require capital and an ecosystem that do not exist. But it means India\u2019s exposure to a Taiwan contingency is essentially unchanged by the Mission, and will remain so through the decade.',
            'The two facts are often conflated in commentary: India is building semiconductor capacity, and India is reducing its semiconductor risk. Only the first is true.'
          ]
        }
      ]
    },

    /* ---------------- RARE EARTHS ---------------- */
    {
      id: 'rare-earths',
      title: 'Rare earths',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The 10 November 2026 expiry and the IEA exposure figures live in Lenses &rarr; Fault lines. This tab covers the structure of the dependency.'
          ]
        },
        {
          type: 'table',
          heading: 'Where the control actually sits',
          columns: ['Control point', 'China\u2019s share'],
          rows: [
            { cells: ['Rare earth refining and processing', '~90%'], source: 'Multi-institutional analysis, 2026' },
            { cells: ['Rare earth production (mining)', '~70%'], source: 'Informed Clearly, Jun 2026' },
            { cells: ['Rare earth reserves held', '~35%'], source: 'Informed Clearly, Apr 2026' },
            { cells: ['Tungsten refining', '~80%'], source: 'Multi-institutional analysis, 2026' },
            { cells: ['Antimony production', '~60%'], source: 'Multi-institutional analysis, 2026' }
          ]
        },
        {
          type: 'list',
          heading: 'Market and policy state',
          items: [
            { text: 'Global reserves stood at 85 million tonnes as of January 2026, with China, Brazil, Australia, Russia and Vietnam holding 78.6 million tonnes combined.', source: 'EBC Financial, Apr 2026' },
            { text: 'Chinese exports of less-processed rare earths fell to 4,392 tonnes in December 2025, 15.8% below the 2025 monthly average of 5,215 tonnes.', source: 'S&amp;P Global, Jan 2026' },
            { text: 'In early 2026 China imposed new export controls on dual-use items heading to Japan.', source: 'S&amp;P Global, Jan 2026' },
            { text: 'Yttrium has seen roughly a fifteen-fold price increase, with no near-term engineering substitute for yttrium-based thermal barrier coatings.', source: 'Discovery Alert, Aug 2026' },
            { text: 'In February 2026 the United States hosted an inaugural Critical Minerals Ministerial with 54 nations; European licensing approval rates had fallen below 25%.', source: 'Informed Clearly, Apr 2026' },
            { text: 'In May 2026 Australia ordered six Chinese shareholders in Northern Minerals to divest within two weeks.', source: 'Mining.com via Discovery Alert' },
            { text: 'The Quad launched a Critical Minerals Initiative Framework in May 2026, with a $20bn mobilisation target that is not committed funding.', source: 'US State Department / Stimson Center, May 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The gap between 35% of reserves and 90% of processing is the whole story. This is not a resource endowment, it is an industrial position &mdash; built over decades in the capital-intensive, environmentally costly stage that other countries chose not to occupy.',
            'That has a consequence people routinely miss: opening a mine elsewhere does not break the dependency, because the ore still has to be processed. Australia\u2019s divestment order and the 54-nation ministerial are both upstream measures against a midstream chokepoint. The binding constraint is refining capacity, and refining capacity takes the better part of a decade to build.'
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'India\u2019s own rare earth position remains unresearched &mdash; import dependency, IREL production against national demand, and the status of any Critical Minerals Mission. The v3.1 draft asserted figures here; they were removed rather than replaced. This is the largest open gap in this section.'
        }
      ]
    },

    /* ---------------- ENERGY ---------------- */
    {
      id: 'energy',
      title: 'Energy',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The full crude trajectory lives in Lenses &rarr; India\u2019s positioning and Events &rarr; Ukraine. What belongs here is the supply chain reading: energy is the sector where India has the most suppliers and, as 2026 demonstrated, not the most resilience.'
          ]
        },
        {
          type: 'table',
          heading: 'Concentration, within twelve months',
          columns: ['Point in time', 'Position'],
          rows: [
            { cells: ['Before February 2022', 'Russian crude ~2% of India\u2019s basket'], source: 'Kpler via ThePrint' },
            { cells: ['December 2025 &ndash; February 2026', 'Russia below 25% for the first time in two years; West Asia at ~59%'], source: 'Kpler' },
            { cells: ['March 2026', 'OPEC\u2019s share falls to 29%, the lowest ever recorded; Angolan imports nearly triple to 327,000 bpd'], source: 'Kpler via Discovery Alert' },
            { cells: ['June 2026', 'Russia at a record 2.6 million bpd, 54% of total imports'], source: 'OilPrice, citing Kpler and Vortexa' },
            { cells: ['Storage cover', '~144 million barrels onshore, roughly 30 days at 2025 import levels'], source: 'Vortexa, Mar 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'A single supplier\u2019s share moved roughly thirty points inside twelve months, in both directions. That is the number that should govern how this archive thinks about supply chain resilience generally.',
            'India has many crude suppliers. The count was never the constraint. What bound was routes: the Middle Eastern alternatives India diversified into all sat behind the Strait of Hormuz, so a single chokepoint event undid the diversification in weeks.',
            'The metric worth building is route-adjusted concentration &mdash; not how many countries supply an input, but how many independent physical corridors it can arrive through. On a vendor count, India\u2019s energy supply looks robust. On a route count, it looks like it behaved in 2026. That metric does not exist yet and is the reason the resilience scorecard has not been rebuilt.'
          ]
        }
      ]
    }

  ]
};

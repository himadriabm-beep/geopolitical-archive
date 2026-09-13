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

,


    /* ---------------- HORMUZ ---------------- */
    {
      id: 'hormuz',
      title: 'Route · Hormuz',
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '20.3 mb/d', label: 'Oil transiting daily, 2024', source: 'Univ. of Wisconsin Law, Mar 2026' },
            { value: '~25%', label: 'Share of world seaborne oil trade, 2025', source: 'IEA' },
            { value: '~20%', label: 'Share of global LNG trade', source: 'IEA' },
            { value: '21 miles', label: 'Width at narrowest point', source: 'Univ. of Wisconsin Law, Mar 2026' }
          ]
        },
        {
          type: 'prose',
          heading: 'The February 2026 closure',
          paras: [
            'On 28 February 2026, US and Israeli forces struck Iran. Within 48 hours the strait had effectively closed. Maersk, MSC, CMA CGM and Hapag-Lloyd all suspended transits, and over 150 tankers anchored outside rather than risk passage. <span class="src">Carra Globe, Jul 2026</span>',
            'QatarEnergy declared force majeure, directly affecting European supply — Europe draws 12&ndash;14% of its LNG from Qatar. <span class="src">Carra Globe, Jul 2026</span>',
            'Under normal conditions the passage also carries up to a third of internationally traded fertiliser raw materials, which is what makes a closure a multi-sector event rather than a contained energy one. <span class="src">IEA / UNCTAD via Discovery Alert</span>'
          ]
        },
        {
          type: 'list',
          heading: 'Status through 2026',
          items: [
            { text: 'Only five vessels transited the strait on 25 August 2026, all under the Iranian Unilateral Scheme.', source: 'Kpler, Aug 2026' },
            { text: 'Saudi Arabia\u2019s East-West Pipeline has absorbed part of the displaced volume, routing crude across the Arabian Peninsula to Red Sea terminals at Yanbu.', source: 'Discovery Alert, Jun 2026' },
            { text: 'The UAE\u2019s ADCOP line carries Abu Dhabi crude to Fujairah on the Gulf of Oman, bypassing the strait entirely.', source: 'Discovery Alert, Jun 2026' },
            { text: 'Indications emerged in August 2026 that Iran and Oman were nearing a pact to coordinate passage through the channel.', source: 'Global Trade Magazine, Aug 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The two bypass pipelines matter less than their combined capacity suggests. Both terminate on the Red Sea or Gulf of Oman, which means the traffic they rescue from Hormuz is handed straight to the corridor the Houthis were attacking. The mitigation and the second failure point are the same geography.',
            'Watch the Iran&ndash;Oman passage arrangement closely. If transit becomes something granted rather than guaranteed under maritime law, the strait converts from a commercial passage into a politically stratified toll road, and every energy-importing country\u2019s risk model needs rewriting.'
          ]
        }
      ]
    },

    /* ---------------- BAB EL-MANDEB & SUEZ ---------------- */
    {
      id: 'bab-el-mandeb-suez',
      title: 'Route · Bab el-Mandeb & Suez',
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '~9 mb/d', label: 'Crude through Bab el-Mandeb', source: 'Global Trade Magazine, Aug 2026' },
            { value: '10\u201312%', label: 'Share of global seaborne oil trade', source: 'Global Trade Magazine, Aug 2026' },
            { value: '1,340', label: 'Suez transits, July 2026 (+27% YoY)', source: 'Bloomberg via Ukragroconsult' },
            { value: '$505m', label: 'Suez revenue, July 2026 (+42% YoY)', source: 'Bloomberg via Ukragroconsult' }
          ]
        },
        {
          type: 'prose',
          heading: 'Recovery, and what is driving it',
          paras: [
            'Bab el-Mandeb ranks as the third-busiest oil chokepoint after Hormuz and Malacca. <span class="src">Global Trade Magazine, Aug 2026</span> The Houthis resumed attacks on Red Sea shipping from 28 February 2026, reversing the gains made since the October 2025 ceasefire. <span class="src">Carra Globe, Jul 2026</span>',
            'Despite that, Suez traffic has been recovering, and July 2026 revenue was the highest monthly level since December 2023. Part of the recovery is redirection rather than genuine normalisation: some Saudi exports have been rerouted north through the Red Sea following the Hormuz closure. <span class="src">Ukragroconsult, Sep 2026</span>',
            'The Suez Canal Authority forecasts annual revenue of $5.8&ndash;6 billion for 2026, against $4.1 billion in 2025. <span class="src">SCA via Ukragroconsult</span>'
          ]
        },
        {
          type: 'table',
          heading: 'Traffic against baseline, late August 2026',
          columns: ['Measure', 'Position'],
          rows: [
            { cells: ['Red Sea northern chokepoint, week of 24&ndash;30 Aug', '290 ships &mdash; 36% below normal, but 30% above 2025'], source: "Lloyd's List Intelligence, 3 Sep 2026" },
            { cells: ['Bab el-Mandeb', 'Down 15% post-blockade'], source: "Lloyd's List Intelligence, 3 Sep 2026" },
            { cells: ['Cape of Good Hope diversion', 'Adds 6,000&ndash;11,000 nautical miles and 10&ndash;14 days on Asia&ndash;Europe'], source: 'ISDO, Jul 2026' },
            { cells: ['Cost of that diversion', 'Up to ~$1m per trip in fuel alone'], source: 'ISDO, Jul 2026' }
          ]
        },
        {
          type: 'prose',
          heading: 'Carrier posture',
          paras: [
            'MSC has declared partial resumption of Suez services on the Asia&ndash;Europe route, and Maersk and Hapag-Lloyd have rerouted a Gemini network service back through the Red Sea. A return to normalcy is considered plausible by the end of 2026, though some services may keep looping around Africa to absorb surplus capacity. <span class="src">Vespucci Maritime via Global Trade Magazine, Aug 2026</span>'
          ]
        },
        {
          type: 'reading',
          paras: [
            'The significant pattern of 2026 is not that a chokepoint closed &mdash; that has happened before &mdash; but that the standard mitigation for each corridor was the other corridor, and both were degraded simultaneously from 28 February.',
            'What has emerged instead is a dual-route equilibrium, in which operators deliberately hold capacity on both Suez and Cape routings and accept the efficiency loss as the price of resilience. If that persists it is a structural change in shipping economics rather than a temporary crisis premium &mdash; and it makes the CKU Railway and IMEC corridor cases considerably stronger than they looked in 2024.'
          ]
        }
      ]
    },

    /* ---------------- MALACCA ---------------- */
    {
      id: 'malacca',
      title: 'Route · Malacca',
      blocks: [
        {
          type: 'list',
          heading: 'What is established',
          items: [
            { text: 'Malacca ranks as the second-busiest oil chokepoint globally, ahead of Bab el-Mandeb and behind Hormuz.', source: 'Global Trade Magazine, Aug 2026' }
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'Malacca\u2019s throughput volumes, container share, and India\u2019s specific exposure have not been researched. The earlier draft asserted a 25% global trade share and a 40% India&ndash;Europe dependency. Neither was sourced, and both have been removed rather than carried forward.'
        },
        {
          type: 'reading',
          paras: [
            'Worth noting why this gap matters more than it looks. Malacca is the one major chokepoint where India sits outside the disruption but inside the consequences: it carries the China&ndash;Gulf energy flow, which is precisely the dependency that shapes Chinese behaviour in the Indian Ocean. Research here feeds the sphere-of-influence layer as much as this one.'
          ]
        }
      ]
    },

    /* ---------------- TAIWAN STRAIT ---------------- */
    {
      id: 'taiwan-strait',
      title: 'Route · Taiwan Strait',
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '72.5%', label: 'TSMC share of global foundry market, Q2 2026', source: 'TrendForce, Sep 2026' },
            { value: '~73%', label: 'Same quarter, broader market definition', source: 'Counterpoint, Q2 2026' },
            { value: '66 pts', label: 'Gap to Samsung, second place', source: 'Counterpoint, Q2 2026' },
            { value: '+29%', label: 'Pure-play foundry market growth YoY, Q2 2026', source: 'Counterpoint, Q2 2026' }
          ]
        },
        {
          type: 'prose',
          paras: [
            'The two trackers disagree on the exact share and agree on direction: every measure shows TSMC pulling further ahead. <span class="src">TheStreet, 11 Sep 2026</span> Taiwan\u2019s 2nm production began ramping in H2 2025 and contributed revenue for the first time in Q2 2026. <span class="src">TrendForce, Sep 2026</span>'
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'Maritime trade volume through the Taiwan Strait itself has not been researched. The semiconductor concentration above is well sourced; the shipping exposure is not. A previously asserted figure of 92% of 3nm+ capacity has been removed &mdash; it appears in trade press without primary sourcing, and the reliable number is the overall foundry share shown above.'
        },
        {
          type: 'reading',
          paras: [
            'This tab sits in the chokepoints section rather than the supply chain one on purpose. The Taiwan Strait is the only chokepoint on this list where the critical cargo is not what passes through it but what is manufactured beside it. A blockade does not need to stop a single ship to remove the world\u2019s advanced logic supply.',
            'India\u2019s exposure here is unchanged by the Semiconductor Mission. Dholera targets 28nm, which is the right node for India\u2019s industrial base and no answer at all to this particular risk.'
          ]
        }
      ]
    },

    /* ---------------- HOW TARIFFS AND SANCTIONS WORK ---------------- */
    {
      id: 'tariffs-how',
      title: 'Tariffs & sanctions · how they work',
      blocks: [
        {
          type: 'prose',
          paras: [
            'Trade coercion belongs in a supply chain section because it is a chokepoint created by policy rather than geography. A strait closes because of a war; a tariff line closes because of a signature. The effect on a supply chain is the same, and the reversal times differ enormously.'
          ]
        },
        {
          type: 'prose',
          heading: 'The founding cautionary tale',
          paras: [
            'The Smoot-Hawley Tariff Act, signed 17 June 1930, raised duties on more than 20,000 imported goods, lifting average duties on imports to 53% &mdash; the highest in American history and roughly a third above the previous schedule. <span class="src">Utah History, 1995 / Britannica</span> Some 25 nations raised their own duties in retaliation. <span class="src">Utah History, 1995</span> US exports fell from $7 billion in 1929 to $2.5 billion in 1932. <span class="src">Corporate Finance Institute</span>',
            'The modern quantitative finding is more specific than the folklore. Countries that retaliated with their own tariffs reduced imports from the United States by 28&ndash;32% on average; countries that merely protested reduced them by 15&ndash;23%. <span class="src">Cato Institute research brief</span> Economic historians generally hold that Smoot-Hawley did not cause the Great Depression but contributed significantly to its depth and international scope, with estimates attributing roughly 20&ndash;25% of the trade decline to the Act. <span class="src">Explaining History / EBSCO</span>',
            'The institutional consequence outlasted the economics. After 1934 US trade strategy reversed toward lowering tariffs, and in 1947 the United States led the creation of the GATT explicitly to prevent a repeat of 1930s-style trade wars. <span class="src">Explaining History</span>'
          ]
        },
        {
          type: 'table',
          heading: 'The legal instruments in use today',
          columns: ['Authority', 'Origin', 'What it permits'],
          rows: [
            { cells: ['IEEPA', 'International Emergency Economic Powers Act, 50 U.S.C. §§1701 et seq.', 'Regulating economic transactions including imports, in response to declared emergencies over unusual and extraordinary threats to national security, foreign policy or the economy'], source: 'CRS R48549' },
            { cells: ['Section 232', 'Trade Expansion Act of 1962', 'Tariffs on national-security grounds. Used in 2018 for steel and aluminium, and again in 2025 for automotive, timber, heavy vehicles, semiconductors and copper'], source: 'C.H. Robinson' },
            { cells: ['Section 122', 'Trade Expansion Act of 1962', 'A global tariff of up to 15% for a maximum of 150 days, to address balance-of-payments deficits'], source: 'C.H. Robinson' },
            { cells: ['Section 301', 'Trade Act of 1974', 'Country-specific tariffs in response to unfair practices &mdash; the basis of the 2018 China action on technology transfer and intellectual property'], source: 'US trade.gov' },
            { cells: ['Section 338', 'Tariff Act of 1930', 'Additional duties to offset discrimination against US commerce &mdash; revived in 2026 against Canada'], source: 'US trade.gov / Wiley' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The instrument determines the durability, and this is the analytically important point. An emergency power can be exercised overnight and struck down by a court. A Section 232 national-security finding requires an investigation and survives litigation far better. Section 122 carries a hard 150-day expiry written into the statute.',
            'For anyone modelling supply chain risk, the legal basis of a trade barrier predicts its half-life better than its headline rate does. A 50% tariff under a contested emergency authority is a weaker constraint on investment decisions than a 15% tariff under a national-security finding, because only one of them can be relied upon to still exist in three years.',
            'There is also a live empirical dispute worth recording rather than resolving. One strand of analysis argues Trump-era tariffs did not reduce global trade volumes &mdash; UNCTAD data to 2025 shows continued growth, slower and more volatile &mdash; and that the bulk of the cost of discriminatory tariffs falls on the country imposing them, so retaliation raises domestic costs rather than shifting them abroad. <span class="src">Intereconomics, 2026</span> The Smoot-Hawley evidence points the other way, with retaliators suffering larger export losses than protesters. Both findings can hold: retaliation may be individually costly and still collectively rational as deterrence.'
          ]
        }
      ]
    },

    /* ---------------- US TARIFF REGIME 2025-26 ---------------- */
    {
      id: 'tariff-regime',
      title: 'US tariff regime · 2025–26',
      blocks: [
        {
          type: 'prose',
          paras: [
            'Four legal bases in eighteen months. The instability is the story more than any individual rate.'
          ]
        },
        {
          type: 'timeline',
          heading: 'Chronology',
          items: [
            { when: '20 Jan 2025', what: 'Trump takes office. The America First Trade Policy memorandum directs a review of all trade relationships to identify non-reciprocal arrangements.', source: 'CRS R48549 / Wiley' },
            { when: '4 Feb 2025', what: 'A 10% tariff on Chinese goods takes effect under IEEPA, following a declared emergency over illegal immigration and illicit drugs. Canada and Mexico tariffs postponed 30 days.', source: 'Wiley' },
            { when: '4 Mar 2025', what: 'Tariffs take effect on Canada, Mexico and China.', source: 'Wiley' },
            { when: '2 Apr 2025', what: '&ldquo;Liberation Day&rdquo; &mdash; sweeping IEEPA reciprocal tariffs on 80+ countries at rates from 10% to 41%, declared in response to persistent trade deficits.', source: 'CRS R48549 / tariffstool' },
            { when: '9&ndash;10 Apr 2025', what: 'An additional 50% on all Chinese imports takes the reciprocal rate on China to 125%. A 90-day pause is announced for other partners. China and Canada announce retaliatory tariffs.', source: 'Tax Foundation' },
            { when: '12 May 2025', what: 'The US and China announce a 90-day mutual reduction from 125% to 10%, after months of tit-for-tat escalation.', source: 'CRS R48549' },
            { when: '30 May 2025', what: 'The Court of International Trade strikes down the IEEPA tariffs; the Federal Circuit grants a temporary stay.', source: 'Wiley' },
            { when: '1 Aug 2025', what: 'Canada\u2019s rate is raised from 25% to 35%.', source: 'Marketplace' },
            { when: '6&ndash;7 Aug 2025', what: 'Reciprocal rates take effect across the schedule. India faces 50% &mdash; 25% reciprocal plus 25% punitive over Russian crude, the highest on any US trading partner. Brazil faces 10% reciprocal plus a separate 40% Brazil-specific IEEPA tariff.', source: 'Geodis / White House executive order' },
            { when: '29 Aug 2025', what: 'The Federal Circuit, sitting en banc, affirms the CIT ruling 7&ndash;4, with the mandate stayed for a Supreme Court appeal.', source: 'tariffstool' },
            { when: '17 Nov 2025', what: 'Switzerland\u2019s reciprocal rate is lowered from 39% to 15%. New exemptions on food and agricultural products worth about $51.5bn at 2024 import levels.', source: 'Tax Foundation' },
            { when: '17 Nov 2025', what: 'The US and China agree a one-year extension of the tariff reduction through 10 November 2026, expanded to cover other actions. US fentanyl-related tariffs on China fall from 20% to 10%; China removes some retaliatory tariffs.', source: 'CRS R48549 / Wiley' },
            { when: '2&ndash;6 Feb 2026', what: 'India\u2019s rate is cut to 18%, then the punitive 25% component is removed by executive order.', source: 'Bloomberg / CNBC' },
            { when: '20 Feb 2026', what: 'The Supreme Court rules 6&ndash;3 in Learning Resources v. Trump, consolidated with V.O.S. Selections, that IEEPA does not authorise the President to impose tariffs. The Liberation Day reciprocal tariffs and the fentanyl tariffs on China, Mexico and Canada are permanently invalidated.', source: 'Atlantic Council / tariffstool' },
            { when: '20 Feb 2026', what: 'The same day, a 10% global tariff is signed under Section 122, which carries a statutory 150-day limit.', source: 'tariffstool' },
            { when: '24 Feb 2026', what: 'All IEEPA tariffs &mdash; fentanyl, reciprocal, Russian oil and Brazil &mdash; are terminated. Customs and Border Protection begins processing court-mandated refunds.', source: 'C.H. Robinson / Atlantic Council' },
            { when: 'Mar 2026', what: 'New Section 301 investigations are launched against multiple countries. Section 232 steel and aluminium rates remain at 50%.', source: 'tariffstool' },
            { when: '24 Jul 2026', what: 'Section 122 hits its 150-day limit and expires. A Section 301 forced-labor tariff replaces it: 10% for standard-tier economies, 12.5% for a 46-economy list including China, Vietnam and Thailand.', source: 'tariffstool' },
            { when: '8 Sep 2026', what: 'Proclamations modify Section 338 actions in response to Canada\u2019s additional retaliation, adding and removing products from 15 September and prohibiting importation of certain Canadian products from 29 September.', source: 'Wiley' }
          ]
        },
        {
          type: 'table',
          heading: 'How the world responded',
          columns: ['Response type', 'Jurisdictions'],
          rows: [
            { cells: ['Retaliated with counter-tariffs', 'Canada, China, Hong Kong'], source: 'Global Trade Alert, 2025' },
            { cells: ['Threatened retaliation', 'Brazil, China, European Union, France, India, Japan, Ivory Coast, United Kingdom'], source: 'Global Trade Alert, 2025' },
            { cells: ['Offsetting domestic measures', 'Australia, Canada, Chile, China, Chinese Taipei, Colombia, EU, France, Indonesia, Japan, Malaysia, Portugal, South Korea, South Africa, Spain, Thailand, UK, Vietnam &mdash; eighteen in total'], source: 'Global Trade Alert, 2025' },
            { cells: ['WTO dispute settlement', 'China filed two disputes against IEEPA measures &mdash; one on the drug-trafficking tariffs, one on the reciprocal tariffs &mdash; apparently seeking a ruling on IEEPA\u2019s compatibility with multilateral trade agreements'], source: 'CEBRI Journal' },
            { cells: ['Sectoral subsidy', 'South Korea pledged KRW 7 trillion in 2025 and KRW 4 trillion in 2026 for semiconductors, anticipating item-specific US tariffs'], source: 'Global Trade Alert, 15 Apr 2025' },
            { cells: ['Prepared but unused', 'The EU prepared retaliatory measures on approximately &euro;100 billion of US goods, to be deployed if negotiations failed'], source: 'Global Trade Alert, 6 May 2025' },
            { cells: ['Negotiated frameworks', 'Bilateral framework agreements announced with multiple partners from May 2025, including Argentina (13 Nov 2025) and Cambodia (26 Oct 2025)'], source: 'CRS R48549' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Count the response categories and the picture inverts the usual framing. Three jurisdictions actually retaliated. Eight threatened. Eighteen quietly subsidised their own industries instead. The dominant global response to trade coercion was not counter-coercion but domestic compensation &mdash; which is a far more consequential shift, because subsidies persist after tariffs are lifted.',
            'India appears in the threatened-retaliation column and never moved to the retaliated column. Given that India carried the highest rate imposed on any partner, that restraint is the clearest available evidence of the posture described in Lenses &rarr; Overlapping memberships: absorb, decline to be forced, and wait. It worked. The punitive component was removed in February 2026 without a reciprocal commitment appearing in the joint statement.',
            'The Supreme Court ruling deserves more weight than it usually gets in geopolitical analysis. A domestic court invalidated the legal basis for the entire reciprocal tariff structure, refunds began flowing, and the administration rebuilt the same wall on different statutory foundations within days. For partner countries the practical lesson was not that US tariffs are reversible but that the instrument is substitutable &mdash; which removes the value of waiting for litigation and increases the value of building alternatives.',
            'That is the link to Synthesis &rarr; The unanimity trap. The parallel-institution response documented there &mdash; rupee vostro accounts, AfCFTA, new corridors, the NDB &mdash; has usually been read as a response to governance exclusion at the IMF and Security Council. The 2025&ndash;26 tariff sequence suggests trade coercion is the more immediate driver. Eighteen jurisdictions building domestic capacity, South Korea putting KRW 11 trillion into semiconductors, India concluding four major trade agreements in eighteen months: these are parallel-building responses to a single actor\u2019s unilateral leverage, and they will not unwind when the tariffs do.'
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'Not established: the current effective rates by country under the Section 301 structure beyond the 10% and 12.5% tiers; the value of refunds processed after the Supreme Court ruling; and whether the 10 November 2026 expiry of the US&ndash;China one-year arrangement will be extended again. That date sits alongside the rare earth cliff of the same month.'
        }
      ]
    }

  ]
};

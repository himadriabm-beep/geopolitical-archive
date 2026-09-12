/* ---------------------------------------------------------------
   SECTION: Chokepoints

   Block types available:
     prose     { heading?, paras: [html strings] }
     stats     { heading?, items: [{ value, label, source }] }
     table     { heading?, columns: [...], rows: [{ cells:[...], source }] }
     list      { heading?, items: [{ text, source }] }
     timeline  { heading?, items: [{ when, what, source }] }
     reading   { paras: [...] }              <- analysis, no source, renders amber
     gap       { tag?, text }                <- open question, renders dashed

   Rule: any item with a source field left empty renders a red
   "source missing" flag instead of a clean figure. That is deliberate.
   --------------------------------------------------------------- */

export const chokepoints = {
  id: 'chokepoints',
  title: 'Chokepoints',
  summary: '2026 was the year two of the three Middle East corridors closed at once.',
  tabs: [

    /* ---------------- HORMUZ ---------------- */
    {
      id: 'hormuz',
      title: 'Strait of Hormuz',
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
      title: 'Bab el-Mandeb & Suez',
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
      title: 'Strait of Malacca',
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
      title: 'Taiwan Strait',
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
    }

  ]
};

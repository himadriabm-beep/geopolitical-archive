/* ---------------------------------------------------------------
   SECTION: Regional blocs

   AU, ASEAN, EU, RCEP. Completes the Stage 1 migration —
   fourteen groupings across four sections.

   Two corrections to the v1.0 material are carried here:
   ASEAN's membership count, and the assumed cost to India of
   staying out of RCEP.
   --------------------------------------------------------------- */

export const regional = {
  id: 'regional',
  title: 'Regional blocs',
  summary: 'African Union, ASEAN, European Union and RCEP — where geography rather than alignment sets the membership.',
  tabs: [

    /* ---------------- AFRICAN UNION ---------------- */
    {
      id: 'african-union',
      title: 'African Union',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Members', '55 member states'], source: 'AfCFTA Secretariat' },
            { cells: ['Development blueprint', 'Agenda 2063, &ldquo;The Africa We Want&rdquo; &mdash; a 50-year framework built on seven aspirations'], source: 'Africa Center, Mar 2026' },
            { cells: ['Chair 2026', 'President &Eacute;variste Ndayishimiye of Burundi, succeeding Angola\u2019s Jo&atilde;o Louren&ccedil;o'], source: 'IIJD, Jul 2026 / African Union, Feb 2026' },
            { cells: ['39th Summit', 'Addis Ababa, February 2026; theme of sustainable water availability and sanitation'], source: 'African Union, Feb 2026' },
            { cells: ['G20 status', 'Permanent member since 2023'], source: 'African Union, Apr 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'AfCFTA',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Approved', '18th ordinary Session of the Assembly, Addis Ababa, January 2012'], source: 'African Union' },
            { cells: ['In force', '30 May 2019; operational from 2021'], source: 'AfCFTA Secretariat / Africa Center' },
            { cells: ['Coverage', 'All 55 AU member states in a single market of about 1.4 billion people'], source: 'AfCFTA Secretariat, Aug 2026' },
            { cells: ['Combined GDP', 'Approximately US$3.4 trillion'], source: 'AfCFTA Secretariat, Aug 2026' },
            { cells: ['Standing', 'Largest free trade area in the world by number of participating countries'], source: 'AfCFTA Secretariat, Aug 2026' },
            { cells: ['Secretariat', 'Accra, Ghana'], source: 'AfCFTA Secretariat' }
          ]
        },
        {
          type: 'list',
          heading: 'G20 engagement priorities',
          items: [
            { text: 'Following AU inclusion in the G20, the Assembly agreed priorities to guide engagement over three years: fast-tracking Agenda 2063; reform of international financial institutions; enhancing agricultural output; a just energy transition; trade and investment for AfCFTA rollout; improving Africa\u2019s credit rating; and investment in vaccine manufacturing and pandemic response.', source: 'African Union, Apr 2026' },
            { text: 'An AU G20 Retreat hosted by Equatorial Guinea in April 2026 assessed lessons from the 2025 South African presidency and examined US 2026 priorities to identify areas for strategic leverage.', source: 'African Union, Apr 2026' },
            { text: 'Louren&ccedil;o\u2019s closing reflections named Sudan and DR Congo conflicts and terrorism in the Sahel and Horn as the binding constraints on development, and reaffirmed AU rejection of unconstitutional changes of government.', source: 'African Union, Feb 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The AfCFTA and the G20 seat are usually cited together as evidence of African institutional arrival. They are doing very different work. AfCFTA is a continental instrument the AU controls; the G20 seat is a chair at someone else\u2019s table, and 2026 demonstrated exactly how conditional that is.',
            'The priority list reads differently in that light. Improving Africa\u2019s credit rating and reforming the international financial institutions are both attempts to change terms set elsewhere. Agricultural output and AfCFTA rollout are things the continent can advance regardless of who chairs the G20. The second pair is where the AU\u2019s actual agency sits, and it is the less-reported half.'
          ]
        }
      ]
    },

    /* ---------------- ASEAN ---------------- */
    {
      id: 'asean',
      title: 'ASEAN',
      blocks: [
        {
          type: 'table',
          heading: 'Reference — membership corrected to eleven',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Established', '8 August 1967, Bangkok Declaration'], source: 'ASEAN Main Portal' },
            { cells: ['Founders', 'Indonesia, Malaysia, Philippines, Singapore, Thailand'], source: 'ASEAN Main Portal' },
            { cells: ['Accessions', 'Brunei 1984, Vietnam 1995, Laos and Myanmar 1997, Cambodia 1999'], source: 'ASEAN Main Portal' },
            { cells: ['Timor-Leste', 'Joined 26 October 2025 as the 11th member &mdash; the first expansion since 1999'], source: 'ASEAN Main Portal / NewsOnAir, Oct 2025' },
            { cells: ['Chair 2026', 'Philippines, from 1 January, theme &ldquo;Navigating Our Future, Together&rdquo;'], source: 'ASEAN Main Portal / PCO' },
            { cells: ['48th Summit', 'Cebu, Philippines, 8 May 2026'], source: 'ASEAN, Chair&rsquo;s Statement, May 2026' },
            { cells: ['Combined population', '670 million'], source: 'Philippine Embassy New Delhi, Jan 2026' },
            { cells: ['Combined GDP', 'US$3.8 trillion; projected fourth-largest economy in the world by 2030 if treated collectively'], source: 'Philippine Embassy New Delhi, Jan 2026' }
          ]
        },
        {
          type: 'list',
          heading: '2026 developments',
          items: [
            { text: 'The Cebu Protocol, adopted 8 May 2026, is a charter amendment formalising Timor-Leste\u2019s membership &mdash; the first amendment to the ASEAN Charter since its signing in 2007.', source: 'Wikipedia, 2026 ASEAN Summits' },
            { text: 'The Philippines hosts as chair after Myanmar, next in the alphabetical rotation, was skipped because of the ongoing civil war.', source: 'Wikipedia, 2026 ASEAN Summits' },
            { text: 'On 14 May 2026 leaders began a progressive rapprochement of Myanmar into ASEAN\u2019s legal affairs, the first such engagement since the 2021 coup and the country\u2019s exclusion for failing to implement the five-point consensus.', source: 'Wikipedia, 2026 ASEAN Summits' },
            { text: '2026 marks the 50th anniversary of the 1976 Treaty of Amity and Cooperation.', source: 'Asia News Network, Feb 2026' },
            { text: 'Chairmanship agenda items include maritime cooperation, the Cambodia&ndash;Thailand border conflict, AI policy building on Malaysia\u2019s 2025 regional AI leadership, and Timor-Leste\u2019s assimilation.', source: 'Asia News Network, Feb 2026' },
            { text: 'ASEAN is India\u2019s fourth-largest trading partner, having displaced the EU, with total trade above US$47 billion in April&ndash;June 2022-23.', source: 'GTRI via Chanakya University, 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Our v1.0 recorded ASEAN at ten members. It has eleven. Timor-Leste acceded in October 2025 and the Charter was amended in May 2026 to formalise it \u2014 the first amendment in nearly two decades. That is a straightforward factual correction, and it is the kind that quietly propagates: any calculation of ASEAN population, GDP or voting weight built on ten members is now wrong.',
            'The Myanmar sequence is the more interesting item. ASEAN skipped Myanmar in the chair rotation and simultaneously began readmitting it to legal proceedings, as Naypyidaw ran engineered elections to legitimise a pseudo-civilian government. Both moves are consistent with the organisation\u2019s consensus norm: no member is expelled, and no member is fully restored until the others quietly decide the cost of exclusion exceeds its value.',
            'For the archive\u2019s India thread, the trade figure is the one to carry forward. ASEAN displacing the EU as India\u2019s fourth-largest partner happened without India joining RCEP \u2014 which bears directly on the next tab.'
          ]
        }
      ]
    },

    /* ---------------- EUROPEAN UNION ---------------- */
    {
      id: 'eu',
      title: 'European Union',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Members', '27'], source: 'Euronews, Feb 2026' },
            { cells: ['Accession rule', 'Each step requires unanimous backing of all members; the accession treaty must be ratified by all 27 national parliaments'], source: 'Euronews, Feb 2026' },
            { cells: ['Key enlargement partners', 'Montenegro, Albania, Moldova, Ukraine &mdash; all with target dates between 2026 and 2028 for completing negotiations'], source: 'ICDS, Feb 2026' },
            { cells: ['Other candidates', 'Laggards: North Macedonia, Kosovo, Bosnia and Herzegovina. Backslider: Serbia. Outsiders: T&uuml;rkiye and Georgia'], source: 'ICDS, Feb 2026' }
          ]
        },
        {
          type: 'timeline',
          heading: 'Ukraine accession',
          items: [
            { when: '28 Feb 2022', what: 'Ukraine applies for membership.', source: 'European Commission' },
            { when: '23 Jun 2022', what: 'Candidate status granted by unanimous agreement of all 27 member states.', source: 'European Commission' },
            { when: '25 Jun 2024', what: 'First intergovernmental conference formally launches accession negotiations.', source: 'European Commission' },
            { when: 'Sep 2025', what: 'Screening process completed.', source: 'European Commission' },
            { when: 'H2 2025', what: 'The Commission and the Danish presidency adopt a &ldquo;frontloading&rdquo; strategy &mdash; driving technical reforms as though formal talks were underway, until unanimity came within reach. An informal ministerial in Lviv in December, without Hungary, endorses a 10-point reform plan for 2026.', source: 'IP Quarterly, Apr 2026' },
            { when: 'Feb 2026', what: 'Zelenskyy\u2019s demand for accession by 1 January 2027 prompts Commission work on new integration models. Orb&aacute;n states Ukraine\u2019s 2027 accession is &ldquo;not up for debate&rdquo;.', source: 'Euronews, Feb 2026 / ICDS' },
            { when: 'Apr 2026', what: 'The threat of a Hungarian veto recedes substantially following Orb&aacute;n\u2019s landslide election defeat.', source: 'IP Quarterly, Apr 2026' },
            { when: '15 Jun 2026', what: 'The first negotiating cluster (fundamentals) opens, agreed by all member states.', source: 'European Commission / European Council' },
            { when: '14 Jul 2026', what: 'Cluster 6 (External Relations) opens at the third Accession Conference, taking chapters opened to seven of 33. Commissioner Kos calls it a &ldquo;Super Tuesday&rdquo;, with Montenegro, Moldova and Albania conferences the same day &mdash; nothing comparable since 2002.', source: 'New Union Post, Jul 2026' }
          ]
        },
        {
          type: 'list',
          heading: 'Constraints',
          items: [
            { text: 'Moldova\u2019s process is tied to Ukraine\u2019s through the EU\u2019s &ldquo;package approach&rdquo;, linking the dossiers because of shared eastern partnership origins and simultaneous 2022 candidacy.', source: 'IP Quarterly, Apr 2026' },
            { text: 'Eurobarometer polling makes the French the least supportive of further enlargement among the EU-27, at 43% in favour and 48% against.', source: 'DGAP, Mar 2026' },
            { text: 'Accession by 1 January 2027 is considered impossible under regular enlargement procedures; a two-stage process based on a &ldquo;Nominated Member State&rdquo; proposal has been advocated as the workaround.', source: 'ICDS, Feb 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Seven of 33 chapters open, zero closed, and a target date of January 2027. The arithmetic does not work under existing procedure, which is why the substantive action is in the Commission\u2019s search for a legal workaround rather than in the negotiation itself.',
            'The Orb&aacute;n defeat in April 2026 removed the single most-cited obstacle, and it is worth noticing what did not then happen. Accession did not accelerate to match the political timetable. The unanimity requirement was never only about Hungary: French public opinion runs against enlargement, and any of 27 parliaments can stop a treaty at ratification. Removing the loudest veto reveals how many quiet ones remain.',
            'This is the same structural pattern as the UNSC and IMF reform traps, in a more sympathetic setting. A body that requires unanimity to change its own membership is a body whose existing members individually control the outcome, and geopolitical urgency does not alter that arithmetic. It only makes the workarounds more creative.'
          ]
        }
      ]
    },

    /* ---------------- RCEP ---------------- */
    {
      id: 'rcep',
      title: 'RCEP',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Members', '15 &mdash; the ten ASEAN states plus Australia, China, Japan, New Zealand and South Korea'], source: 'CRS IN11200' },
            { cells: ['India\u2019s withdrawal', 'Announced November 2019 at the 3rd RCEP Summit, on the sidelines of the ASEAN Summit in Thailand'], source: 'CRS IN11200' },
            { cells: ['Negotiating status at withdrawal', '15 of the original 16 had concluded text-based negotiations for all 20 chapters and essentially all market access issues'], source: 'CRS IN11200, Nov 2019' },
            { cells: ['India\u2019s position', 'Indicated at the time that it might consider rejoining'], source: 'CRS IN11200' },
            { cells: ['Overlap', 'Seven RCEP members are also members of the CPTPP'], source: 'CRS IN11200' }
          ]
        },
        {
          type: 'list',
          heading: 'Why India withdrew',
          items: [
            { text: 'Stated concerns spanned adverse trade balance, the dairy sector, economic slowdown, prior experience with FTAs, the China factor, data localisation and rules of origin, alongside ASEAN members\u2019 experience with the China FTA.', source: 'JICEP, 2024' },
            { text: 'Tariff reductions from 35% to zero in dairy and steel would have exposed those sectors to Australian and New Zealand competition.', source: 'Ensure IAS, Mar 2026' },
            { text: 'Jaishankar has argued that trade deals led to deindustrialisation in sectors such as electronics and light manufacturing.', source: 'Outlook Business via Chanakya University, 2024' }
          ]
        },
        {
          type: 'table',
          heading: 'What actually happened',
          columns: ['Finding', 'Detail'],
          rows: [
            { cells: ['Trade effect of non-participation', 'Post-implementation review finds trade between India and the RCEP member countries would not have changed materially had India joined'], source: 'JICEP, 2024' },
            { cells: ['Reason', 'Bilateral trade agreements with Japan, Malaysia, Singapore, Thailand, South Korea and ASEAN were already in place'], source: 'JICEP, 2024' },
            { cells: ['Trade diversion', 'By not joining, India avoided trade diversion'], source: 'Sundaram 2022, via Chanakya University' },
            { cells: ['Deficits among members', 'ASEAN states collectively run a large and growing trade deficit with China, reaching around $164 billion in 2024'], source: 'Ensure IAS, Mar 2026' },
            { cells: ['India\u2019s China deficit', 'Expected to reach US$106 billion in 2025-26'], source: 'Ensure IAS, Mar 2026' },
            { cells: ['India&ndash;ASEAN trade', 'ASEAN has become India\u2019s fourth-largest trading partner, displacing the EU'], source: 'GTRI via Chanakya University, 2024' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'This is the second substantive correction in this section, and it runs against the consensus view we recorded. Our Stage 3 material treated India\u2019s RCEP withdrawal as producing competitive disadvantage in Southeast Asia. The post-implementation scholarship does not support that: India already held bilateral FTAs with Japan, Korea, Singapore, Malaysia, Thailand and ASEAN collectively, so RCEP membership would have added little market access it did not have.',
            'What RCEP would have added is tariff elimination against China, with which India runs a deficit heading toward $106 billion. The ASEAN members who did join now run a collective deficit with China around $164 billion. The counterfactual India avoided is visible in its neighbours\u2019 accounts.',
            'The honest formulation is that the withdrawal protected India from a deficit it could not have absorbed, at the cost of a value-chain integration it has not replaced. Both halves are true, and the archive previously carried only the second. The literature remains genuinely divided \u2014 other work argues India lost export potential and value-chain access \u2014 so this should be recorded as a contested question rather than settled in either direction.'
          ]
        }
      ]
    }

  ]
};

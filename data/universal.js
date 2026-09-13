/* ---------------------------------------------------------------
   SECTION: Universal forums

   UNSC, UNGA, G77. Stage 1 migration, audited.

   These are the three bodies where membership is near-universal
   or open by qualification rather than invitation, which makes
   them the venues where numerical majorities exist and
   structural vetoes neutralise them.
   --------------------------------------------------------------- */

export const universal = {
  id: 'universal',
  title: 'Universal Forums',
  summary: 'The Security Council, the General Assembly and the G77 — where the Global South has the numbers and not the leverage.',
  tabs: [

    /* ---------------- UNSC ---------------- */
    {
      id: 'unsc',
      title: 'UN Security Council',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Composition', '15 members &mdash; five permanent with veto, ten elected'], source: 'UN News, May 2026' },
            { cells: ['Permanent five', 'China, France, Russia, United Kingdom, United States'], source: 'UN Charter Article 23' },
            { cells: ['Elected terms', 'Two years, staggered so five seats turn over annually; no immediate re-election'], source: 'UN Charter Chapter V / LegalClarity' },
            { cells: ['Election threshold', 'Two-thirds majority of the 193-member General Assembly, by secret ballot'], source: 'UN media' },
            { cells: ['Binding force', 'Under Article 25 every member state must accept and carry out Council decisions &mdash; the only UN body whose resolutions carry the force of international law'], source: 'UN Charter Article 25 / LegalClarity' }
          ]
        },
        {
          type: 'table',
          heading: 'Elected members, 2026',
          columns: ['Term ending', 'Members'],
          rows: [
            { cells: ['End of 2026', 'Denmark, Greece, Pakistan, Panama, Somalia'], source: 'LegalClarity, Jun 2026' },
            { cells: ['End of 2027', 'Bahrain, Colombia, DR Congo, Latvia, Liberia'], source: 'LegalClarity, Jun 2026' }
          ]
        },
        {
          type: 'timeline',
          heading: 'Elections and paralysis',
          items: [
            { when: 'Jun 2025', what: 'The General Assembly elects Bahrain, Colombia, DR Congo, Latvia and Liberia for 2026&ndash;27, replacing Algeria, Guyana, Sierra Leone, Slovenia and South Korea. All five ran without competition, though each still required a two-thirds vote. Latvia joins for the first time.', source: 'CIVICUS Lens, Feb 2026' },
            { when: '2025', what: 'Permanent members cast vetoes blocking action on Gaza and Ukraine.', source: 'CIVICUS Lens, Feb 2026' },
            { when: 'Jan 2026', what: 'An emergency Council meeting on Venezuela exposes familiar paralysis, as Trump asserts his &ldquo;Board of Peace&rdquo; as a potential replacement forum.', source: 'CIVICUS Lens, Feb 2026' },
            { when: 'May 2026', what: 'Guterres calls reform &ldquo;absolutely essential&rdquo;, noting that only one Asian country holds a permanent seat though the continent contains half the world\u2019s population, and that no African or Latin American country is represented.', source: 'UN News, May 2026' },
            { when: '3 Jun 2026', what: 'Austria, Portugal, Trinidad and Tobago, Zimbabwe and Kyrgyzstan elected for 2027&ndash;28, each clearing the 127-vote threshold. Kyrgyzstan beat the Philippines in a runoff; the three-way race for two European seats was bitterly fought.', source: 'PassBlue, Jun 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The contrast between the 2025 and 2026 elections is the most informative thing here. In 2025 all five seats were uncontested. In 2026 two European seats drew a three-way fight and an Asian seat went to a runoff. Regional groups usually agree clean slates in advance, which means the &ldquo;competitive and highly selective process&rdquo; the UN describes is frequently neither. When a contest does break out, it signals that a regional bloc has stopped being able to settle its own order internally.',
            'On reform: the Secretary-General now advocates expansion openly, and the legitimacy argument is unanswerable on the numbers. But Charter amendment requires ratification by two-thirds of members including all five permanent members. Every P5 state must therefore vote to dilute its own position.',
            'This is structurally identical to the IMF quota trap documented in the de-dollarisation layer: the body with the power to reform is composed of those who lose from reform. India\u2019s permanent-seat campaign, and point one of the ten-point roadmap from the Delhi summit, run into the same wall. That is worth stating plainly in the archive rather than treating each campaign as though it might succeed on its merits.'
          ]
        }
      ]
    },

    /* ---------------- UNGA ---------------- */
    {
      id: 'unga',
      title: 'UN General Assembly',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Membership', '193 member states'], source: 'UN media' },
            { cells: ['81st session', 'Opens 8 September 2026, closes 7 September 2027'], source: 'UN, un.org/en/ga/81' },
            { cells: ['President, 81st session', 'Khalilur Rahman, Bangladesh'], source: 'UN, un.org/en/ga/81' },
            { cells: ['2026 programme budget', '$3.45 billion, approved by the Fifth Committee'], source: 'UN Press, Dec 2025' }
          ]
        },
        {
          type: 'prose',
          heading: 'The UN80 Initiative',
          paras: [
            'Launched by Guterres around the organisation\u2019s eightieth anniversary, UN80 aims to make the UN more agile and integrated through efficiencies, mandate review, structural change and programme realignment, organised across three workstreams. <span class="src">CFR, Sep 2025 / IISD, Jan 2026</span>',
            'Workstream 1 delivered common administrative platforms for Secretariat entities by duty station, starting with New York and Bangkok, and consolidated payroll processing into a single global team across three locations. <span class="src">UN Press, Oct 2025</span> Guterres told the Fifth Committee that these measures affect about 15% of resource requirements, with 85% of proposed resources remaining indispensable. <span class="src">UN Press, Oct 2025</span>'
          ]
        },
        {
          type: 'table',
          heading: 'Proposal against outcome — worth keeping distinct',
          columns: ['Stage', 'Figure'],
          rows: [
            { cells: ['Reported plan, September 2025', 'Trim the $3.7bn Secretariat budget by 20%, potentially ~6,900 job cuts from a 35,000-person workforce'], source: 'CFR, Sep 2025' },
            { cells: ['Revised estimates', 'More than $500 million in reductions'], source: 'UN80 Initiative' },
            { cells: ['Budget as approved, December 2025', '$3.45bn &mdash; roughly 15% reduction in financial resources and nearly 19% cut in staffing'], source: 'UN Press, Dec 2025' },
            { cells: ['Posts abolished', '2,900 staff positions'], source: 'IISD, Jan 2026, citing UN Controller Chandru Ramanathan' }
          ]
        },
        {
          type: 'list',
          heading: 'The arrears problem',
          items: [
            { text: 'The UN ended 2024 with $760 million in arrears.', source: 'UN Press, Dec 2025' },
            { text: 'As of 1 December 2025, $709 million of that remained outstanding.', source: 'UN Press, Dec 2025' },
            { text: 'A further $877 million of 2025 dues had not been received, bringing total arrears to $1.586 billion.', source: 'IISD, Jan 2026' },
            { text: 'The 2026 budget was prepared in under six weeks, which the Controller described as exceptionally challenging.', source: 'UN Press, Dec 2025' },
            { text: 'Programmes directly supporting least developed countries, landlocked developing countries, small island developing states and African development were protected from the reductions.', source: 'UN Press, Oct 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The proposal-versus-outcome table matters more than either figure alone. A 20% cut and 6,900 job losses was reported in September 2025; what passed in December was roughly 15% of resources and 2,900 posts. Citing the September figure today would be citing a plan, not a result. This is the same failure mode as the share statistics, in a different disguise \u2014 a real number from a real source that describes something that did not happen.',
            'The substantive point for the archive: the multilateral reform debate usually assumes an institution with capacity that needs redirecting. The UN is losing nearly a fifth of its staff while carrying $1.586 billion in arrears. Arguments about giving the Global South a larger voice in UN governance are, right now, arguments about a larger share of a shrinking body.',
            'That does not make the reform case weaker, but it changes what winning looks like. A permanent Security Council seat in a UN with diminished operational capacity is a different prize from one in the UN of 2005.'
          ]
        }
      ]
    },

    /* ---------------- G77 ---------------- */
    {
      id: 'g77',
      title: 'G77',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Founded', '15 June 1964, Geneva, by 77 non-aligned nations via the Joint Declaration of the Seventy-Seven Countries at UNCTAD'], source: 'Wikipedia / G77.org' },
            { cells: ['Members', '134 member states; the original name retained for historical continuity'], source: 'UNOSSC, Jan 2026 / G77.org' },
            { cells: ['Headquarters', 'United Nations Headquarters'], source: 'Wikipedia' },
            { cells: ['Chairmanship', 'Rotates annually by region &mdash; Africa, Asia-Pacific, Latin America and the Caribbean'], source: 'Egypt SIS' },
            { cells: ['Chair 2026', 'Uruguay, handed over at UN Headquarters on 14 January 2026, succeeding Iraq'], source: 'UNOSSC, Jan 2026' },
            { cells: ['Purpose', 'Collective economic interests and enhanced joint negotiating capacity within the UN system'], source: 'Wikipedia' }
          ]
        },
        {
          type: 'prose',
          heading: 'China\u2019s ambiguous position',
          paras: [
            'The coalition is conventionally styled &ldquo;the G77 and China&rdquo;. China is not a formal member but collaborates closely, supporting the group politically and financially and strengthening its negotiating capacity. <span class="src">Egypt SIS</span> The G77 counts China as a member and China has made political and financial contributions, yet the Chinese government does not consider itself one. <span class="src">World Population Review, Aug 2026</span>'
          ]
        },
        {
          type: 'list',
          heading: 'Agenda',
          items: [
            { text: 'Fairer terms in trade, investment and development finance.', source: 'Egypt SIS' },
            { text: 'Reform of the IMF, World Bank, WTO and the UN system to better represent developing countries.', source: 'Egypt SIS' },
            { text: 'Poverty eradication, climate action and technology transfer to the Global South.', source: 'Egypt SIS' },
            { text: 'Historically supportive of the New International Economic Order.', source: 'Wikipedia' },
            { text: 'The Iraq chairmanship convened a joint high-level policy dialogue with UNOSSC on Global South leadership in climate negotiations, &ldquo;From Marrakech to Bel&eacute;m&rdquo;, in July 2025.', source: 'UNOSSC, Jan 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The G77 is the largest bloc in the General Assembly and attracts a fraction of the attention BRICS does, for reasons worth naming. It has no leaders\u2019 summit cadence, a chair that rotates annually by region, and decisions taken by consensus among 134 states. It generates votes rather than headlines.',
            'But votes are what the General Assembly runs on. With 134 of 193 members, the G77 can carry any UNGA resolution it unites behind &mdash; and UNGA resolutions are non-binding. This is the clearest illustration of the pattern running through this whole section: the Global South holds decisive numerical power in precisely the body whose decisions do not bind, and no structural power in the body whose decisions do.',
            'China\u2019s position is the detail to keep an eye on. Being counted as a member by the group while declining membership itself is not an administrative untidiness; it lets China draw on Global South legitimacy in negotiations without accepting the developing-country obligations that membership implies. The same manoeuvre appears in its climate negotiating position.'
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'One source conflicts with the rest: an Egyptian government page records a handover from Egypt to Kenya in Nairobi in July 2025, which does not reconcile with the Iraq 2025 to Uruguay 2026 sequence given by UNOSSC and Wikipedia. It may refer to a regional chapter rather than the main chairmanship. Unresolved, so noted rather than smoothed over.'
        }
      ]
    }

  ]
};

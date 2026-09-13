/* ---------------------------------------------------------------
   SECTION: Synthesis

   This section contains no new research. It arranges the fourteen
   groupings already established in Security, Economic forums,
   Universal Forums and Regional blocs.

   An important distinction for this section: the FACTS in the
   tables are sourced and carry their citations. The CLUSTERING
   is ours — an analytical construct, not a finding. Where a
   grouping sits awkwardly in a cluster, that is recorded rather
   than smoothed, because the awkward cases are where the
   framework is doing least work.
   --------------------------------------------------------------- */

export const synthesis = {
  id: 'synthesis',
  title: 'Synthesis',
  summary: 'The fourteen groupings arranged four ways — by world-order vision, by binding force, by overlap, and by the constraint they share.',
  tabs: [

    /* ---------------- BY WORLD-ORDER VISION ---------------- */
    {
      id: 'world-order',
      title: 'By world-order vision',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The original Stage 1 clustering sorted the fourteen by the kind of international order each is organised to sustain or contest. It remains a useful first cut, with the caveats recorded below.'
          ]
        },
        {
          type: 'table',
          heading: 'Order-maintenance — the postwar settlement and its defence',
          columns: ['Grouping', 'Founded', 'Members', 'Instrument'],
          rows: [
            { cells: ['NATO', '1949', '32', 'Article 5 collective defence'], source: 'NATO' },
            { cells: ['G7', '1975', '7 plus EU', 'Informal consultation; no legal existence'], source: 'Banque de France / nature4climate' },
            { cells: ['EU', 'Treaty succession', '27', 'Acquis, unanimity on accession'], source: 'Euronews, Feb 2026' },
            { cells: ['AUKUS', '2021', '3', 'National enabling legislation, FY2024 NDAA'], source: 'CRS RL32418' }
          ]
        },
        {
          type: 'table',
          heading: 'Alternative order — contesting the distribution, not the system',
          columns: ['Grouping', 'Founded', 'Members', 'Instrument'],
          rows: [
            { cells: ['BRICS', '2009 (as BRIC)', '10 or 11, contested, plus 10 partners', 'Summit declarations; no treaty'], source: 'Rio Times / Geopolitical Economy Report' },
            { cells: ['SCO', '2001', '10', 'Declarations; Development Bank still unagreed'], source: "Russia's Pivot to Asia / GSRRA" }
          ]
        },
        {
          type: 'table',
          heading: 'Universal — near-total membership, contested authority',
          columns: ['Grouping', 'Founded', 'Members', 'Instrument'],
          rows: [
            { cells: ['UNSC', '1945', '15 (5 permanent)', 'Article 25 &mdash; binding on all UN members'], source: 'UN Charter / LegalClarity' },
            { cells: ['UNGA', '1945', '193', 'Resolutions, non-binding'], source: 'UN media' },
            { cells: ['G77', '1964', '134', 'Consensus positions within the UN system'], source: 'UNOSSC / G77.org' }
          ]
        },
        {
          type: 'table',
          heading: 'Regional and functional',
          columns: ['Grouping', 'Founded', 'Members', 'Instrument'],
          rows: [
            { cells: ['African Union', '&mdash;', '55', 'Agenda 2063; AfCFTA in force 2019'], source: 'AfCFTA Secretariat' },
            { cells: ['ASEAN', '1967', '11', 'ASEAN Charter, amended by Cebu Protocol 2026'], source: 'ASEAN Main Portal' },
            { cells: ['RCEP', 'Signed 2020', '15', 'Binding tariff schedules'], source: 'CRS IN11200' },
            { cells: ['QUAD', 'Revived 2017', '4', 'No treaty, no secretariat, no decision body'], source: 'Vajiram &amp; Ravi' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Two placements strain, and the strain is informative.',
            'The Quad sits in &ldquo;regional and functional&rdquo; because it has no institutional machinery, but its purpose is order-maintenance and its members are four of the Western settlement\u2019s principal beneficiaries. It is filed by form rather than intent, and the mismatch is the point: the Quad is an order-maintenance coalition that has deliberately declined to build order-maintenance institutions.',
            'The &ldquo;alternative order&rdquo; label also overstates. Neither BRICS nor the SCO proposes replacing the international system; both contest the distribution of authority within it. Every item on the Delhi ten-point roadmap \u2014 UNSC seats, IMF quota reform, a voice in standard-setting \u2014 is a request for better terms inside existing institutions. Calling that an alternative order flatters the ambition.'
          ]
        }
      ]
    },

    /* ---------------- BY BINDING FORCE ---------------- */
    {
      id: 'binding-force',
      title: 'By binding force',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The Stage 1 audit surfaced a second axis that predicts behaviour better than world-order vision does: whether a grouping can oblige a member to do something it would not otherwise do.'
          ]
        },
        {
          type: 'table',
          heading: 'Legally binding',
          columns: ['Grouping', 'What binds'],
          rows: [
            { cells: ['UNSC', 'Article 25 obliges every UN member to accept and carry out Council decisions &mdash; the only UN body whose resolutions carry the force of international law'], source: 'UN Charter Article 25 / LegalClarity' },
            { cells: ['EU', 'The acquis; accession treaties requiring ratification by all 27 national parliaments'], source: 'Euronews, Feb 2026' },
            { cells: ['NATO', 'Article 5 collective defence, by treaty'], source: 'NATO' },
            { cells: ['RCEP', 'Tariff schedules across 20 chapters'], source: 'CRS IN11200' },
            { cells: ['AfCFTA', 'In force since 30 May 2019 across 55 states'], source: 'AfCFTA Secretariat' },
            { cells: ['ASEAN', 'Charter of 2007, amended by the Cebu Protocol in 2026'], source: 'Wikipedia, 2026 ASEAN Summits' }
          ]
        },
        {
          type: 'table',
          heading: 'Politically binding only',
          columns: ['Grouping', 'Evidence from the audit'],
          rows: [
            { cells: ['NATO (spending)', 'The 5% Hague pledge is a political commitment; Spain received an exemption, and 1.5% of it covers resilience spending members were largely undertaking anyway'], source: 'Hague Summit Declaration / Wikipedia' },
            { cells: ['G7', 'No legal existence, no permanent secretariat, no official members'], source: 'nature4climate' },
            { cells: ['G20', 'No permanent secretariat; the 2026 host disinvited a member and narrowed the agenda unilaterally'], source: 'G20 Miami official / Washington Times, Nov 2025' },
            { cells: ['BRICS', 'Summit declarations; partner states sign nothing binding; membership itself unresolved for Saudi Arabia since 2023'], source: 'Rio Times, Aug 2026' },
            { cells: ['SCO', '27 documents at Bishkek; the proposed Development Bank remains under negotiation rather than agreed'], source: 'GSRRA, 2026' },
            { cells: ['QUAD', 'No treaty, no secretariat, no decision-making body; the 2025 leaders\u2019 summit simply did not occur'], source: 'Vajiram &amp; Ravi / Britannica, Jul 2026' },
            { cells: ['UNGA', 'Resolutions are non-binding'], source: 'UN media' },
            { cells: ['G77', 'Consensus positions among 134 states, expressed through non-binding resolutions'], source: 'UNOSSC / Wikipedia' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Sorted this way, the pattern that runs through the whole archive becomes visible in one view. The groupings generating the most commentary \u2014 BRICS, the Quad, the SCO, the G20 \u2014 are almost all in the lower table. The groupings that actually oblige states are older, narrower and duller.',
            'This explains several findings that looked unrelated when they emerged. The Quad could skip a leaders\u2019 summit because nothing required it. BRICS can count partner states in its economic weight because partnership carries no obligation to count against. The SCO has discussed a development bank for over a decade without agreeing one, because agreeing one would create the first genuinely binding commitment among members whose interests diverge.',
            'The practical inference for forecasting: when a non-binding grouping announces an initiative, the base rate for implementation is low, and the archive should treat announcements from these bodies as statements of intent rather than as events. When a binding grouping moves \u2014 an RCEP tariff schedule, an EU cluster opening, a Security Council resolution \u2014 something has actually changed.'
          ]
        }
      ]
    },

    /* ---------------- OVERLAPPING MEMBERSHIPS ---------------- */
    {
      id: 'overlaps',
      title: 'Overlapping memberships',
      blocks: [
        {
          type: 'table',
          heading: 'Where the major powers sit',
          columns: ['State', 'Memberships across the fourteen'],
          rows: [
            { cells: ['India', 'QUAD, BRICS (chair 2026), SCO, G20, G77, UNGA. Withdrew from RCEP in 2019. Invited to the G7 &Eacute;vian summit as a partner.'], source: 'Established across sections; G7 invitation per France Diplomatie' },
            { cells: ['China', 'BRICS, SCO, G20, RCEP, UNSC permanent seat, UNGA. Counted as a G77 member by the group while declining membership itself.'], source: 'Established across sections; G77 status per World Population Review' },
            { cells: ['Russia', 'BRICS, SCO, G20, UNSC permanent seat, UNGA. Excluded from the G7 since 2014.'], source: 'Established across sections' },
            { cells: ['United States', 'NATO, G7, G20 (chair 2026), AUKUS, QUAD, UNSC permanent seat, UNGA'], source: 'Established across sections' },
            { cells: ['Brazil', 'BRICS, G20, G77, UNGA. Invited to the G7 &Eacute;vian summit as a partner.'], source: 'Established across sections; G7 invitation per France Diplomatie' },
            { cells: ['Indonesia', 'ASEAN, RCEP, BRICS (full member since January 2025), G20, G77'], source: 'Established across sections' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'India sits in six of the fourteen and was invited to a seventh, which is the widest spread of any state here. The conventional reading is that this maximises optionality. The Stage 1 audit supports that with one significant qualification.',
            'Five of India\u2019s six memberships are in the politically-binding-only category. India holds no seat in any of the groupings that can oblige a member \u2014 no UNSC permanent seat, no EU, no NATO, and it withdrew from RCEP. Its entire multilateral position is built in venues where commitments are reversible.',
            'That is not obviously a weakness. Reversible commitments are what strategic autonomy consists of, and the 2026 record shows India using exactly that flexibility \u2014 chairing BRICS in September while attending the G7 in June, reducing Russian crude to win tariff relief and then increasing it again when Hormuz closed. But it means India\u2019s influence rests on being courted rather than on any standing entitlement, and courtship is contingent in ways membership is not.',
            'China\u2019s position is the instructive contrast. It holds one binding seat \u2014 the UNSC veto \u2014 plus binding trade commitments through RCEP, and it declines formal G77 membership while being counted in the bloc\u2019s numbers. Binding where binding pays, informal where informality pays.'
          ]
        }
      ]
    },

    /* ---------------- THE UNANIMITY TRAP ---------------- */
    {
      id: 'unanimity-trap',
      title: 'The unanimity trap',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The strongest cross-cutting finding of the Stage 1 audit, assembled here because it appeared independently in four separate places and was not visible from any one of them.'
          ]
        },
        {
          type: 'table',
          heading: 'Four instances of the same structure',
          columns: ['Institution', 'The requirement', 'The consequence'],
          rows: [
            { cells: ['UN Security Council', 'Charter amendment needs two-thirds ratification including all five permanent members', 'Every P5 state must vote to dilute its own veto. Guterres calls reform &ldquo;absolutely essential&rdquo;; the arithmetic is unchanged.'], source: 'UN Charter / UN News, May 2026' },
            { cells: ['IMF', 'Major quota reform requires an 85% threshold; the United States holds a share above 16%', 'A single member holds a structural veto over rebalancing.'], source: 'Established in the de-dollarisation layer' },
            { cells: ['European Union', 'Each accession step requires unanimity; the treaty requires ratification by all 27 national parliaments', 'Orb&aacute;n\u2019s defeat in April 2026 removed the loudest veto and did not accelerate accession. Seven of 33 chapters open, none closed.'], source: 'Euronews, Feb 2026 / IP Quarterly, Apr 2026 / New Union Post, Jul 2026' },
            { cells: ['G20', 'No charter, no membership rules, no secretariat', 'The inverse case: with no procedure to amend, the rotating host disinvited a member outright in 2026. Informality produces the same unaccountability as unanimity.'], source: 'Washington Times, Nov 2025 / CFR, Dec 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'In each case the body empowered to change its own composition is composed of those who would lose from the change. This is not a coincidence of design; it is what institutional founders do when they have the power to entrench their position, and all four of these institutions were shaped by their founders.',
            'The implication for the archive\u2019s India thread is uncomfortable and worth stating plainly. Point one of the Delhi ten-point roadmap seeks permanent UNSC seats for the Global South. Point two seeks IMF quota democratisation. Both run into the identical wall, and neither is likely to be won by making a better argument, because the obstacle is not an argument.',
            'What the 2026 evidence does suggest is where movement actually happens: outside the trapped institutions rather than within them. Rupee vostro accounts did not require IMF consent. The AfCFTA did not require G20 approval. The CKU Railway and IMEC corridors do not need Security Council authorisation. States facing a structural veto have consistently responded by building parallel infrastructure rather than by continuing to petition.',
            'That reframes the reform campaigns. Their function may be less to succeed than to establish the legitimacy deficit that justifies the parallel building \u2014 in which case failing publicly and repeatedly is not a defeat but the mechanism.'
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'The IMF row rests on figures established in the earlier de-dollarisation work rather than on IMF primary documentation, which remains the outstanding gap flagged in the Economic forums section. The quota shares and the 85% threshold should be confirmed against IMF sources before this table is relied on.'
        }
      ]
    }

  ]
};

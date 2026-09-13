/* ---------------------------------------------------------------
   SECTION: Corrections

   The record of what this archive got wrong and how it was fixed.

   This exists because an archive that silently overwrites its
   errors gives a reader no way to judge how much to trust it.
   Every entry names the original claim, what replaced it, and
   the source that forced the change.

   Note on the source column here: it cites the evidence that
   CORRECTED the claim, not the evidence that produced it. The
   original claims mostly had no source, which is why they are
   in this section.
   --------------------------------------------------------------- */

export const corrections = {
  id: 'corrections',
  title: 'Corrections',
  summary: 'What was removed, what was reversed, and what was absorbed elsewhere — recorded rather than overwritten.',
  tabs: [

    /* ---------------- WITHDRAWN FIGURES ---------------- */
    {
      id: 'withdrawn',
      title: 'Withdrawn figures',
      blocks: [
        {
          type: 'prose',
          paras: [
            'In September 2026 a set of six research layers was produced after six web searches that all returned empty. The output was presented as sourced findings. A substantial portion of the figures were estimates or reconstructions. What follows is the full accounting.'
          ]
        },
        {
          type: 'table',
          heading: 'Removed entirely — no source existed',
          columns: ['Original claim', 'Status'],
          rows: [
            { cells: ['+340% bilateral rupee trade growth', 'No source. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['7 million e-rupee users by January 2026', 'No source. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['96% of India&ndash;Russia trade settled in rupee-ruble', 'No source. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['5 million international UPI users', 'No source. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['Bilateral leverage scores: +85% US, &minus;60% China, +95% Australia', 'An analytical judgment formatted as data. No dataset scores leverage on a percentage scale. Replaced by the India&ndash;Russia crude trajectory in Lenses &rarr; India.'], source: 'Audit, Sep 2026' },
            { cells: ['Qatar supplying 65% of India\u2019s helium', 'Unverified. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['$8&ndash;10bn India regional development investment', 'Unverified. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['$18bn India&ndash;Bangladesh trade', 'Unverified. Removed.'], source: 'Audit, Sep 2026' },
            { cells: ['Semicon Mission $17.3bn FDI target', 'Unverified. Approved investment is about &#8377;1,65,685 crore across six states.'], source: 'ISM reporting, Aug 2026' },
            { cells: ['Strategic Petroleum Reserve at 1.5 years of cover', 'Unverified. Actual onshore storage is ~144 million barrels, roughly 30 days at 2025 import levels.'], source: 'Vortexa, Mar 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'Corrected — a real figure existed and differed',
          columns: ['Original claim', 'Corrected to'],
          rows: [
            { cells: ['TSMC holds 92% of 3nm+ capacity', '72.5% of the global foundry market in Q2 2026; 73% on a broader definition. A leading-edge share above 90% appears in trade press without primary sourcing.'], source: 'TrendForce / Counterpoint, Q2 2026' },
            { cells: ['China: 87% of rare earth production, 98% of processing', '~70% of production, ~90% of processing, ~35% of reserves.'], source: 'Multi-institutional analysis, 2026' },
            { cells: ['India\u2019s API dependency on China is 65%', '70% or more for a listed set of critical APIs in both FY2023-24 and FY2024-25; 87% in antibiotics.'], source: 'PIB, 10 Mar 2026 / ORF, Dec 2025' },
            { cells: ['API dependency will fall to 40% by 2027', 'Traced to a single optimistic projection and contradicted by trade data showing imports of certain APIs rose 30&ndash;45% after the PLI scheme launched.'], source: 'Indrastra, Jun 2026 / ORF, Dec 2025' },
            { cells: ['India&ndash;China deficit expected to reach $106bn in 2025-26', 'That was a projection. The outcome was a record $112.16bn on record trade of $151.1bn.'], source: 'CNBC, 12 Sep 2026' },
            { cells: ['ASEAN has 10 members', 'Eleven. Timor-Leste acceded 26 October 2025, formalised by the Cebu Protocol in May 2026.'], source: 'ASEAN Main Portal' },
            { cells: ['BRICS: 55&ndash;56% of world population, 40%+ of GDP', 'Those are partner-inclusive figures. Members alone are ~48.5% and 35&ndash;40%. The original carried no definitional caveat.'], source: 'The World Data / Geopolitical Economy Report, 2026' },
            { cells: ['UN budget cut by 20%, ~6,900 jobs', 'That was the September 2025 plan. The approved outcome was ~15% of resources and 2,900 posts.'], source: 'UN Press, Dec 2025 / IISD, Jan 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'Claims investigated and rejected',
          columns: ['Claim', 'Finding'],
          rows: [
            { cells: ['A gold-backed &ldquo;BRICS Unit&rdquo; currency launched in 2026, 40% gold and 60% currency basket', 'No primary-source basis. A private institute linked to the Russian Academy of Sciences issued 100 tokens on 31 October 2025. Not policy. The New Delhi Declaration of September 2026 contains no common-currency commitment. The claim circulates on crypto and gold-promotion sites and is associated with scams.'], source: 'Ventura Securities / Aron Groups / pmindia.gov.in' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'One entry deserves separating from the rest. An early draft asserted a Strait of Hormuz closure in March 2026 with no basis whatsoever. The strait did close, on 28 February 2026. That was a coincidence, not a finding, and it is recorded here because a lucky guess is epistemically identical to an unlucky one \u2014 the process that produced it was the same.',
            'The pattern across these three tables is worth naming. Very little was invented from nothing. Most errors were real figures used wrongly: the impressive end of a range with the attribution dropped, a partner-inclusive statistic presented as members-only, a plan reported as an outcome, a projection left standing after the result came in. Those are harder to catch than fabrication, because every component is true.'
          ]
        }
      ]
    },

    /* ---------------- REVERSED FINDINGS ---------------- */
    {
      id: 'reversed',
      title: 'Reversed findings',
      blocks: [
        {
          type: 'prose',
          paras: [
            'Distinct from wrong numbers: these are places where the analysis was contradicted by evidence, and the conclusion changed direction rather than degree.'
          ]
        },
        {
          type: 'table',
          heading: 'Analytical reversals',
          columns: ['Original position', 'Current position', 'What forced the change'],
          rows: [
            { cells: ['African Union leverage will grow following the 2025 Johannesburg G20 presidency', 'Withdrawn. The fault line concerns G20 fracture, not African ascendancy.'], source: 'The US boycotted Johannesburg, disinvited South Africa from Miami on 27 Nov 2025, and struck debt, development and inequality from the 2026 agenda &mdash; PIIE / SAIIA / CFR' },
            { cells: ['The Quad is India\u2019s firmest institutional anchor, institutionalised since 2021', 'Downgraded to a working-level coordination mechanism that convenes leaders when politics allow.'], source: 'The 2025 leaders\u2019 summit India was to host did not occur; the $20bn critical minerals figure is a target, not committed funding &mdash; Britannica / Stimson Center' },
            { cells: ['India\u2019s RCEP withdrawal produced competitive disadvantage in Southeast Asia', 'Contested. Post-implementation scholarship finds trade with RCEP members would not have changed materially, because bilateral FTAs were already in place.'], source: 'JICEP, 2024 &mdash; recorded as contested rather than flipped, since the literature is genuinely divided' },
            { cells: ['India\u2019s rupee settlement work is participation in BRICS de-dollarisation', 'Reframed as national de-risking. India is building its own rail and declining the bloc-level currency project.'], source: 'RBI Governor: de-dollarisation is not on the agenda; the effect is to de-risk trade &mdash; post-MPC briefing, 6 Dec 2024' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The African Union reversal is the most instructive, because the original forecast was reasonable. A first African G20 presidency genuinely did look like an inflection point, and the evidence for it was real.',
            'It failed because the institution was modelled as rule-governed when it has no rules. The G20 has no charter, no secretariat and no membership criteria, so a host with no procedural constraints could simply exclude a member. The generalisable lesson now sits in Synthesis &rarr; The unanimity trap: forecasts about non-binding institutions should assume anything procedurally unprotected can be reversed by one unwilling participant.',
            'The RCEP entry is deliberately not a reversal. The evidence points away from the original claim, but the literature is divided, and recording it as contested is more accurate than replacing one confident position with its opposite.'
          ]
        }
      ]
    },

    /* ---------------- ABSORBED AND RETIRED ---------------- */
    {
      id: 'absorbed',
      title: 'Absorbed and retired',
      blocks: [
        {
          type: 'prose',
          paras: [
            'Two research layers from the September 2026 draft were never migrated into this site as sections. That was deliberate, not an oversight, and it is recorded here so a future reader does not go looking for them.'
          ]
        },
        {
          type: 'table',
          heading: 'Layers retired into better-sourced homes',
          columns: ['Retired layer', 'Where its content now lives', 'Why'],
          rows: [
            { cells: ['De-dollarisation timeline', 'Lenses &rarr; De-risking, not de-dollarisation'], source: 'The replacement is built on IMF COFER, SWIFT, BIS, World Gold Council and World Bank primary data; the original carried four unsourced figures, all now withdrawn' },
            { cells: ['Bilateral power shifts', 'Lenses &rarr; India\u2019s positioning, and Events &rarr; Ukraine'], source: 'The leverage percentages were withdrawn; the India&ndash;Russia crude trajectory that replaced them is fully sourced and lives in both places by cross-reference' }
          ]
        },
        {
          type: 'table',
          heading: 'Still to be built',
          columns: ['Layer', 'Status'],
          rows: [
            { cells: ['Supply chain vulnerability by sector', 'Built as its own section'], source: 'Sep 2026' },
            { cells: ['Sphere of influence 2026&ndash;2030', 'Blocked pending research. Only the rupee-denominated EXIM credit lines and the SAARC swap framework are currently evidenced; Sri Lanka, Bangladesh and Maldives country files do not exist. Afghanistan is partially covered in Events.'], source: 'Gap' },
            { cells: ['Supply chain resilience scorecard', 'Blocked pending a metric. The vendor count was argued to be the wrong measure; route-adjusted concentration was proposed as a replacement and has not been built.'], source: 'Gap' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The reason for retiring rather than migrating is structural. An archive holding the same claim in two places will drift as one copy is updated and the other is not, and a reader then has no way to tell which is current. One home per fact, with pointers from everywhere else, is the only arrangement that survives years of editing.',
            'This is also why Events &rarr; All fifteen uses a pointer column rather than reproducing content. Four of the fifteen events are covered better elsewhere in this archive than a dedicated tab would manage.'
          ]
        }
      ]
    },

    /* ---------------- METHOD ---------------- */
    {
      id: 'method',
      title: 'How this archive is built',
      blocks: [
        {
          type: 'list',
          heading: 'The rules',
          items: [
            { text: 'Every figure carries its source. The data model enforces this &mdash; a table row or list item with an empty source field renders a red &ldquo;source missing&rdquo; flag rather than a clean number.', source: 'Structural, since v4.0' },
            { text: 'Analysis is visually separated from data. Anything in an amber-bordered &ldquo;our reading&rdquo; block is judgment, not finding, and carries no source because it has none.', source: 'Structural, since v4.0' },
            { text: 'Where sources disagree, the disagreement is shown with attribution rather than resolved by picking a favourite. See Security &rarr; SCO and Economic forums &rarr; BRICS.', source: 'Convention' },
            { text: 'Where a figure depends on a definitional choice &mdash; members versus members plus partners, nominal versus PPP &mdash; the basis is stated.', source: 'Convention' },
            { text: 'Proposals are distinguished from outcomes. See Universal Forums &rarr; UNGA for the pattern.', source: 'Convention' },
            { text: 'Unresearched questions are marked as gaps in dashed boxes rather than filled with estimates.', source: 'Convention' },
            { text: 'Corrections are recorded in this section rather than silently overwritten.', source: 'Convention' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The rules exist because of the failure documented in the first tab, and they are written into the structure rather than left as intentions. A source field that renders a red flag when empty is a constraint; a resolution to be careful is not.',
            'The honest limitation: none of this makes the archive correct. It makes the archive checkable. Every claim can be traced to something that can be verified or disputed, and everything that cannot be traced is visibly marked as judgment or as a gap. That is a lower bar than truth and a more achievable one.'
          ]
        }
      ]
    }

  ]
};

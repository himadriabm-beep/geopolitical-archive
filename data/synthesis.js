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
  summary: '',
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
    },

    /* ---------------- MEGA TRENDS ---------------- */
    {
      id: 'mega-trends',
      title: 'Mega trends',
      blocks: [
        {
          type: 'prose',
          paras: [
            'Three structural shifts were proposed for this tab. Research against the scholarly literature changed the verdict on all three: two already have canonical names and established citations, and one does not survive the volume data. What follows is the corrected version.'
          ]
        },

        {
          type: 'prose',
          heading: 'Trend 1 · Chokepoint fragility and corridor building — downgraded',
          paras: [
            'The original hypothesis was that repeated chokepoint disruption is driving structural investment in overland corridors. The disruption half is well evidenced. The causal half is not.'
          ]
        },
        {
          type: 'table',
          heading: 'The disruption is measured',
          columns: ['Measure', 'Figure'],
          rows: [
            { cells: ['Suez transits after the Houthi attacks began', '42% drop within two months; weekly container-ship transits down 67% year-on-year'], source: 'UNCTAD, Jan Hoffmann, 26 Jan 2024' },
            { cells: ['Suez Canal revenue', '$4bn in 2024, against a record $10.3bn in 2023'], source: 'Suez Canal Authority via euronews, 17 Apr 2025' },
            { cells: ['Ships transiting', '13,213 in 2024, against over 26,000 in 2023'], source: 'SCA via euronews' },
            { cells: ['Daily transit tonnage', 'From ~4.0 million tonnes in late 2023 to ~1.7 million in early 2024 &mdash; a 57.5% fall'], source: 'IMF PortWatch' },
            { cells: ['Suez share of global maritime traffic', 'From ~12% to below 9%'], source: 'Coface, 2025' }
          ]
        },
        {
          type: 'table',
          heading: 'The corridor response is marginal',
          columns: ['Corridor', 'Actual scale'],
          rows: [
            { cells: ['Middle Corridor (Trans-Caspian)', 'Caspian cargo rose 63% year-on-year in 2024 to 4.1 million tonnes; projected ~5.2 million tonnes in 2025, of which 2.5 Mt is dry cargo (96,000 TEU)'], source: 'TITR via New Silk Road Discovery' },
            { cells: ['Middle Corridor cost', '~$2,500&ndash;3,250 per FEU China&ndash;Europe'], source: 'World Bank study, Nov 2023' },
            { cells: ['Middle Corridor outlook', 'Transit container volume could reach 130,000 TEU by 2040 with investment'], source: 'EBRD' },
            { cells: ['Middle Corridor assessment', 'Obstructive governance, infrastructure gaps, climate and geopolitical risk make it &ldquo;not a permanent pathway to European markets, but a window of opportunity&rdquo;'], source: 'Carnegie Endowment, Apr 2026' },
            { cells: ['INSTC', '~26.9 million tonnes total freight in 2024, up ~19% &mdash; industry-reported rather than audited'], source: 'Russian industry data via logistics analyses' },
            { cells: ['Chabahar', 'US revoked the 2018 sanctions waiver effective 29 Sep 2025, then granted a six-month waiver running 29 Oct 2025 to 26 Apr 2026'], source: 'MEA spokesman Randhir Jaiswal, 30 Oct 2025' },
            { cells: ['IMEC', 'Design capacity ~1.5 million TEU annually; a ~$5bn Jordan&ndash;Israel rail gap remains unresolved; signed and partly under construction, not operational as a through-route'], source: 'Atlantic Council, Aug 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Set the numbers side by side and the thesis fails. Suez lost roughly 13,000 ship transits in a single year. The Middle Corridor, the most developed alternative, is projected at 5.2 million tonnes &mdash; and its 2040 container ambition is 130,000 TEU. Trade held up by rerouting around the Cape of Good Hope, not by moving onto rail.',
            'The causal direction is also wrong. Corridor projects predate the 2023&ndash;26 disruptions and are driven principally by sanctions on Russia diverting the Northern Corridor, by the Belt and Road, and by Central Asian states diversifying away from both Moscow and Beijing. Chokepoint disruption is an accelerant and a legitimating narrative, not a first-order cause.',
            'The corrected formulation: chokepoint fragility is accelerating pre-existing corridor agendas, and corridors remain marginal in absolute volume. The benchmark that would change this assessment is a sustained shift of more than 10% of China&ndash;Europe container freight to overland routes. Nothing close to that is in the data.',
            'There is no single scholarly name for this pattern. The nearest anchors are Mark Leonard\u2019s &ldquo;connectivity wars&rdquo; framing and the chokepoint effect below.'
          ]
        },

        {
          type: 'prose',
          heading: 'Trend 2 · Concentration as coercive leverage — strongly evidenced, and already named',
          paras: [
            'This has a canonical citation: Henry Farrell and Abraham Newman, &ldquo;Weaponized Interdependence: How Global Economic Networks Shape State Coercion&rdquo;, <em>International Security</em> 44:1 (Summer 2019), pp. 42&ndash;79. <span class="src">MIT Press</span> The argument is that economic networks are asymmetric, and states with jurisdiction over central nodes can exploit two mechanisms: the <em>panopticon effect</em>, gathering strategically valuable information, and the <em>chokepoint effect</em>, denying network access to adversaries. It directly challenges the liberal assumption that interdependence pacifies. Extended in Drezner, Farrell and Newman (eds.), <em>The Uses and Abuses of Weaponized Interdependence</em> (Brookings, 2021).'
          ]
        },
        {
          type: 'table',
          heading: 'The concentration, measured',
          columns: ['Node', 'Concentration'],
          rows: [
            { cells: ['Rare earths', 'China ~70% of mining, ~90% of separation and processing, ~93% of magnet manufacturing'], source: 'CSIS, 2025' },
            { cells: ['Rare earths (alternative measure)', '~91% of separation and refining, ~94% of sintered-magnet production in 2024'], source: 'IEA' },
            { cells: ['Semiconductor foundry', 'TSMC at 69.9% of the 2025 global pure-play foundry market, up from 64.4% in 2024'], source: 'TrendForce via Taipei Times, 14 Mar 2026' },
            { cells: ['Pharmaceutical APIs', 'China supplied 73.71% of India\u2019s API and bulk-drug imports in FY2024-25 &mdash; $3.20bn of ~$4.35bn'], source: 'DGCI&amp;S, Govt of India' },
            { cells: ['Specific molecules', 'Penicillins 92.87%, erythromycin 97.65% dependence in FY2024-25'], source: 'Dept of Pharmaceuticals via PIB, 10 Mar 2026' }
          ]
        },
        {
          type: 'timeline',
          heading: 'The chokepoint effect, demonstrated',
          items: [
            { when: '4 Apr 2025', what: 'First round of Chinese controls &mdash; seven medium and heavy rare earths plus permanent magnets placed under export licensing. Auto-industry disruption in the US, Europe and Japan follows within weeks.', source: 'CSIS / MOFCOM' },
            { when: '9 Oct 2025', what: 'Sweeping expansion: five new elements taking the total to twelve, dozens of pieces of refining equipment and technology, plus extraterritorial reach &mdash; any foreign-made product containing 0.1% or more Chinese-origin rare earths, or made with Chinese processing technology, requires a licence.', source: 'MOFCOM' },
            { when: '30 Oct 2025', what: 'At the Trump&ndash;Xi Busan meeting, China suspends the October controls for one year in exchange for a US suspension of the 50% ownership rule. The April controls remain in force.', source: 'CSIS' }
          ]
        },
        {
          type: 'table',
          heading: 'But does coercion work? The literature disagrees sharply',
          columns: ['Finding', 'Source'],
          rows: [
            { cells: ['34% success rate &mdash; 40 of 115 cases', 'Hufbauer, Schott &amp; Elliott, <em>Economic Sanctions Reconsidered</em>'], source: 'Canonical dataset' },
            { cells: ['~4&ndash;5% &mdash; succeeded in only 5 of 115 attempts under stricter criteria', 'Robert Pape, &ldquo;Why Economic Sanctions Do Not Work&rdquo;, <em>International Security</em> 22:2 (1997)'], source: 'Reanalysis' },
            { cells: ['~40%', 'Kirilakha et al., 2021, using the Global Sanctions Database'], source: 'Later dataset' },
            { cells: ['Sanctions succeed more against allies than adversaries', 'Daniel Drezner'], source: 'Theory' },
            { cells: ['Studies of imposed sanctions understate effectiveness, because successful coercion often ends at the threat stage', 'Selection-bias literature &mdash; Drezner; TIES dataset'], source: 'Methodological critique' }
          ]
        },
        {
          type: 'list',
          heading: 'The cost of fragmentation',
          items: [
            { text: 'Long-term global output losses from geoeconomic fragmentation range from 0.2% in mild scenarios to ~7% in severe trade fragmentation, reaching 8&ndash;12% in some countries with technological decoupling.', source: 'Aiyar et al., IMF staff, 2023' },
            { text: 'A severe two-bloc scenario is modelled at 2.3% of global GDP, with low-income countries losing more than 4%.', source: 'Bolhuis, Chen &amp; Kett, IMF Finance &amp; Development, 2023' },
            { text: 'Reshoring to 2000-level integration would cost ~4.5% of global GDP long-term; friend-shoring ~1.8%.', source: 'IMF WP 2024/122' },
            { text: 'Much apparent friend-shoring is trade rerouting through &ldquo;connector&rdquo; countries rather than genuine decoupling &mdash; China\u2019s role persists via components and FDI into the connectors. Vietnam is a partial exception.', source: 'IMF WP 2025/129' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The important nuance to preserve is that concentration creates the <em>capability</em> for coercion while the historical record shows coercion frequently failing to change target behaviour &mdash; and often accelerating the target\u2019s diversification. The October 2025 controls produced a Western rare-earth push and a suspension within three weeks.',
            'One proposition in this archive appears to have no formalised scholarly treatment: that concentration in <em>midstream processing</em> is more coercively useful than concentration in <em>upstream extraction</em>. The rare earth case supports it &mdash; China\u2019s leverage rests on 90% of separation and 93% of magnets, not 70% of mining, and the October controls deliberately targeted refining equipment and technology, mirroring the logic of US semiconductor equipment restrictions. That distinction is a genuine gap in the literature rather than something to cite.'
          ]
        },

        {
          type: 'prose',
          heading: 'Trend 3 · Reversible commitments — the theory is Lipson\u2019s, from 1991',
          paras: [
            'The proposition that states prefer informal groupings because reversibility is itself the value is not new. Charles Lipson, &ldquo;Why Are Some International Agreements Informal?&rdquo;, <em>International Organization</em> 45:4 (1991), pp. 495&ndash;538, argues that informal agreements are chosen to avoid formal and visible national pledges, to avoid the political obstacles of ratification, to reach agreements quickly and quietly, and to provide flexibility for subsequent modification or even renunciation. <span class="src">Lipson, 1991</span>',
            'The companion citation is Kenneth Abbott and Duncan Snidal, &ldquo;Hard and Soft Law in International Governance&rdquo;, <em>International Organization</em> 54:3 (2000), pp. 421&ndash;456: soft law is easier to achieve, provides strategies for dealing with uncertainty, infringes less on sovereignty, and facilitates compromise among differentiated actors. <span class="src">Abbott &amp; Snidal, 2000</span>'
          ]
        },
        {
          type: 'list',
          heading: 'What the evidence does and does not support',
          items: [
            { text: 'Informal international organisations founded with non-binding instruments constitute roughly one-third of operating IOs.', source: 'Roger &amp; Rowan, Journal of Conflict Resolution, 2023' },
            { text: 'Informal IOs are NOT systematically more minilateral than formal ones &mdash; the two subtypes have similar membership profiles. This punctures the intuitive &ldquo;informal equals small and reversible&rdquo; assumption.', source: 'Roger &amp; Rowan, 2023' },
            { text: 'Multilateral treaty-making has stagnated, but the scholarship attributes this primarily to great-power gridlock rather than a universal preference for reversibility. States still regularly seek multilateral treaties.', source: 'Leiden Journal of International Law analysis' },
            { text: 'The G5/G7 became durable and valuable despite originating as non-binding informal forums &mdash; informality did not prevent institutionalisation or real coordination.', source: 'Fioretos, Review of International Political Economy, 2019' },
            { text: 'Minilateral cooperation reflects the narrow interests of dominant players and lacks the internal checks, voice opportunities and independent secretariats of treaty-based bodies.', source: 'Patrick, Global Summitry Project' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The theory is strongly evidenced; the trend is only moderately so. Treaty stagnation is real but is a gridlock story rather than a preference story, and Roger and Rowan undercut the assumption that informal bodies are distinctively small or flexible in membership.',
            'A clean time series showing declining treaty registrations could not be sourced, and this archive should not assert one. That is a thin evidence base and is marked as such.'
          ]
        },

        {
          type: 'prose',
          heading: 'The unanimity trap, reassessed',
          paras: [
            'The pattern identified in the previous tab already exists in the literature under several names, and this archive should cite them rather than present the observation as novel.'
          ]
        },
        {
          type: 'table',
          heading: 'Existing names for the mechanism',
          columns: ['Concept', 'Citation', 'Claim'],
          rows: [
            { cells: ['Gridlock', 'Hale, Held &amp; Young, <em>Gridlock: Why Global Cooperation Is Failing When We Need It Most</em> (Polity, 2013)', 'Institutional inertia and self-reinforcing gridlock as a systemic pathology arising partly from the past success of postwar institutions'], source: 'Closest general framing' },
            { cells: ['Contested multilateralism', 'Morse &amp; Keohane, <em>Review of International Organizations</em> 9 (2014), pp. 385&ndash;412', 'Dissatisfied coalitions combine threats of exit, voice, and the creation of alternative institutions &mdash; via regime shifting or competitive regime creation'], source: 'The AIIB/NDB dynamic exactly' },
            { cells: ['Regime complexity', 'Alter &amp; Meunier, <em>Perspectives on Politics</em> 7:1 (2009)', 'Nested, partially overlapping and parallel international regimes that are not hierarchically ordered'], source: 'Structural framing' },
            { cells: ['The reform-by-amendment vise', 'Michigan Journal of International Law on UN Charter Article 108', 'The same P5 countries can prevent the UN from making the changes needed to address its paralysis'], source: 'The UNSC case, almost verbatim' }
          ]
        },
        {
          type: 'table',
          heading: 'Do parallel institutions substitute, or merely supplement?',
          columns: ['Finding', 'Source'],
          rows: [
            { cells: ['The AIIB has not clearly reduced World Bank lending across developing countries; the World Bank is adapting to competition, and AIIB founders may be signalling for reform rather than defecting'], source: '&ldquo;The Impact of China\u2019s AIIB on the World Bank&rdquo;, <em>International Organization</em>' },
            { cells: ['The AIIB looks strikingly similar to peer lending institutions, co-finances with the World Bank and ADB, adopts comparable environmental and social frameworks, and has co-evolved cooperatively &mdash; not a radical departure from the status quo'], source: '<em>International Affairs</em>, 2025; Elgar Companion to the World Bank' },
            { cells: ['AIIB and NDB origins trace to frustration with slow IMF and World Bank voice reform'], source: 'Wang, <em>Development and Change</em>, 2019; Reisen, 2015' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'This cuts both ways for the thesis. Excluded states did build parallel institutions, exactly as predicted. But the parallels ended up mimicking the incumbents rather than replacing them &mdash; comparable safeguards, co-financing, similar lending patterns. Competitive pressure produced incumbent adaptation, not incumbent displacement.',
            'The defensible original contribution is narrower than first claimed: generalising the veto-point logic across the Security Council under Article 108, the IMF under its 85% threshold, and EU accession under unanimity plus 27 ratifications, as a single class of self-entrenching institution. The mechanism is documented; the generalisation across all three is the part worth keeping.'
          ]
        },

        {
          type: 'prose',
          heading: 'Two trends this archive was underweighting',
          paras: [
            'The research identified two structural shifts with stronger evidentiary bases than the corridor thesis, and both belong in a top-tier list.'
          ]
        },
        {
          type: 'table',
          heading: 'Promoted',
          columns: ['Trend', 'Evidence'],
          rows: [
            { cells: ['Normalisation of industrial policy', 'Ju&aacute;hasz, Lane &amp; Rodrik, &ldquo;The New Economics of Industrial Policy&rdquo;, <em>Annual Review of Economics</em> 16 (2024), pp. 213&ndash;242: the question has turned from whether industrial policy should be used to how it should be carried out. The IMF New Industrial Policy Observatory documents 61,000+ interventions across 60+ types via the Global Trade Alert database.'], source: 'Juh&aacute;sz, Lane &amp; Rodrik, 2024; Evenett et al., IMF WP 2024/001' },
            { cells: ['WTO Appellate Body paralysis', 'Non-functional since 11 December 2019, when the US blocked new appointments. States now &ldquo;appeal into the void&rdquo; to void panel rulings, and most disputes are now appealed this way. The MPIA stopgap excludes both the United States and India.'], source: '<em>International Affairs</em>, 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Industrial policy is the domestic-policy face of everything else in this tab. It is what weaponized interdependence looks like from inside a state that has decided it is exposed, and it connects directly to the eighteen jurisdictions that responded to US tariffs with domestic subsidy rather than retaliation.',
            'The Appellate Body paralysis is the concrete institutional core of the dispute-settlement erosion story, and it is another instance of the unanimity trap: one member blocking appointments disabled the system, and no procedure exists to route around it.',
            'Two candidates were considered and not promoted. AI governance fragmentation is real but too recent to call a decade-defining structural shift. Demographic divergence is well evidenced demographically, but its geopolitical consequences over 2016&ndash;2026 are more asserted than demonstrated &mdash; a background driver rather than a trend.'
          ]
        },
        {
          type: 'gap',
          tag: 'caveat',
          text: 'Corridor volume figures are largely industry or aggregator-reported rather than independently audited, and several 2025 numbers are forecasts rather than actuals. China\u2019s share of GLOBAL API production has no single authoritative figure &mdash; estimates run from ~20% to ~48% depending on whether measuring volume, value, exports or firm count, with ~40% most cited; the India-specific figure rests on official DGCI&amp;S data and is solid. The treaty-decline evidence is thin and no numerical claim is made here.'
        }
      ]
    }

  ]
};

/* ---------------------------------------------------------------
   SECTION: The five lenses

   Stage 2, rebuilt rather than migrated. The original five lenses
   were drafted before the sourcing discipline existed. This
   version is built on primary sources where they could be
   obtained — IMF COFER, SWIFT, BIS, World Gold Council, NATO
   annual report, World Bank annual report.

   Three lenses changed materially:
     Lens 3 reframed from "de-dollarisation" to "de-risking"
     Lens 5 had its African Union forecast withdrawn
     Lens 1 downgraded its assessment of Quad institutional solidity
   --------------------------------------------------------------- */

export const lenses = {
  id: 'lenses',
  title: 'The five lenses',
  summary: 'Overlap, asymmetry, money, India, and what actually breaks between 2026 and 2030.',
  tabs: [

    /* ---------------- LENS 1 ---------------- */
    {
      id: 'overlap',
      title: '1 · Overlapping memberships',
      blocks: [
        {
          type: 'prose',
          paras: [
            'The original lens held that simultaneous membership across rival groupings converts into leverage. The evidence supports a weaker claim: it produces optionality, which is not the same thing.'
          ]
        },
        {
          type: 'table',
          heading: 'The Quad, as a test case',
          columns: ['Measure', 'Position'],
          rows: [
            { cells: ['2025 leaders\u2019 summit', 'Did not take place'], source: 'Britannica, Jul 2026' },
            { cells: ['11th Foreign Ministers\u2019 Meeting', 'New Delhi, 26 May 2026 &mdash; all four principals attending'], source: 'US State Department / Australian Foreign Minister, May 2026' },
            { cells: ['Initiatives launched', 'Indo-Pacific Maritime Surveillance Collaboration; Quad Critical Minerals Initiative Framework'], source: 'US State Department, May 2026' },
            { cells: ['Critical minerals figure', '$20bn is a mobilisation TARGET, not committed funding'], source: 'Stimson Center, 26 May 2026' }
          ]
        },
        {
          type: 'prose',
          paras: [
            'The Stimson Center\u2019s assessment is the sharpest available: the Quad has consistently been better at announcing initiatives than delivering results, and this is described as a structural problem rather than one attributable to any particular administration. <span class="src">Stimson Center, 26 May 2026</span>'
          ]
        },
        {
          type: 'list',
          heading: 'What the overlap actually bought India',
          items: [
            { text: 'August 2025: a 25% punitive tariff was added to an existing 25% reciprocal tariff, taking the total on Indian goods to 50% &mdash; the highest of any US trading partner.', source: 'White House executive order, 6 Aug 2025' },
            { text: '2 February 2026: the rate was cut to 18%; on 6 February an executive order removed the punitive component, with Trump stating India had committed to stop importing Russian oil.', source: 'Bloomberg / CNBC / Al Jazeera, Feb 2026' },
            { text: 'The India&ndash;US joint statement contained no Indian commitment to curb Russian oil.', source: 'CNBC, 25 Feb 2026' },
            { text: 'India assumed the BRICS chairship on 1 January 2026 and hosted the New Delhi summit on 12&ndash;13 September, while the tariff negotiation ran.', source: 'pmindia.gov.in' },
            { text: 'No state among those holding overlapping memberships has yet faced a forced choice between rival blocs.', source: 'Deep research finding, Sep 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The February 2026 tariff episode is the cleanest evidence available on what overlap is worth. India absorbed the highest tariff imposed on any US partner without abandoning any membership, then recovered half of it within six months \u2014 and the joint statement recorded no reciprocal commitment. That is optionality converting into a concrete outcome.',
            'But notice the shape of it. India did not use its BRICS or SCO positions as leverage against Washington. It simply declined to be forced, and waited. Overlap functions as insulation rather than as a bargaining chip, and the distinction matters for forecasting: it predicts India absorbing pressure well, and predicts nothing about India extracting concessions.',
            'The Quad evidence pulls the same direction. A grouping that skipped a leaders\u2019 summit and announces targets rather than funding is not the anchor our v1.0 material described. It is a working-level coordination mechanism that convenes when politics allow.'
          ]
        }
      ]
    },

    /* ---------------- LENS 2 ---------------- */
    {
      id: 'asymmetry',
      title: '2 · Power asymmetries',
      blocks: [
        {
          type: 'table',
          heading: 'One member dominates every major bloc',
          columns: ['Bloc', 'Dominant member', 'Share'],
          rows: [
            { cells: ['NATO', 'United States', '~60% of alliance defence expenditure in 2025; 52% of allies\u2019 combined GDP'], source: 'NATO Secretary General Annual Report, 26 Mar 2026' },
            { cells: ['NATO', 'United States', '$838bn against $574bn for European allies and Canada combined; total above $1.4tn at constant 2021 prices'], source: 'Rutte Annual Report, Mar 2026, via Reuters' },
            { cells: ['BRICS', 'China', 'Roughly 70% of combined nominal GDP; nominal ~$22.3tn against India\u2019s ~$4.5tn'], source: 'Secondary compilations of IMF data &mdash; treat as robust but not primary' },
            { cells: ['BRICS', 'China', '19.6% of the global economy against India\u2019s 8.5% in 2025'], source: 'IMF World Economic Outlook Apr 2025, via BRICS Brazil' },
            { cells: ['BRICS (bloc total)', '&mdash;', '~40% of global GDP at PPP in 2024, ~41% in 2025'], source: 'IMF WEO Apr 2025, via BRICS Brazil' }
          ]
        },
        {
          type: 'list',
          heading: 'The trend inside NATO runs against the dominance',
          items: [
            { text: 'European allies and Canada increased defence spending 20% in real terms in 2025.', source: 'NATO Annual Report, Mar 2026' },
            { text: 'For the first time in recorded NATO history a European ally &mdash; Norway &mdash; has surpassed the United States in defence spending per capita.', source: 'Atlantic Council NATO Defense Spending Tracker, 9 Apr 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'Where asymmetry has blocked agreement',
          columns: ['Initiative', 'Status'],
          rows: [
            { cells: ['BRICS common currency', 'Putin indicated at Kazan that it is a long-term vision not under active consideration; the RBI Governor confirmed a member pitched a separate currency but no decision was taken'], source: 'Business Standard, 6 Dec 2024' },
            { cells: ['SCO Development Bank', 'Still under negotiation after more than a decade'], source: 'GSRRA, 2026' },
            { cells: ['IMF quota realignment', 'No change in relative shares since 2010; the 17th Review is set to conclude around 2028'], source: 'IMF / ResearchGate, 2025' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Put the BRICS numbers beside the NATO numbers and the symmetry is almost exact. The US is roughly 60% of NATO spending; China is roughly 70% of BRICS GDP. Both blocs are routinely described as collective actors, and both are, arithmetically, one member plus associates.',
            'The difference is what the dominant member wants. The US has spent a decade pressing allies to spend more, and in 2025 they did \u2014 by 20% in real terms, with Norway overtaking it per capita. American dominance inside NATO is declining because Washington asked for that. Chinese dominance inside BRICS shows no comparable trajectory, because nothing in the bloc\u2019s structure obliges convergence and China has no incentive to seek it.',
            'That asymmetry-of-intent is why the three blocked initiatives in the table stay blocked. A common currency, a development bank and quota realignment all require the dominant member to accept dilution. In NATO the dominant member requested dilution. Nowhere else has that happened.'
          ]
        }
      ]
    },

    /* ---------------- LENS 3 ---------------- */
    {
      id: 'de-risking',
      title: '3 · De-risking, not de-dollarisation',
      blocks: [
        {
          type: 'prose',
          paras: [
            'This lens has been renamed. The original framed India\u2019s rupee settlement work as participation in a de-dollarisation project. The primary data does not support that reading, and neither does the Reserve Bank of India.'
          ]
        },
        {
          type: 'stats',
          heading: 'The dollar\u2019s actual position',
          items: [
            { value: '56.92%', label: 'Share of allocated FX reserves, 2025 Q3', source: 'IMF COFER' },
            { value: '50.10%', label: 'Share of global payments by value, June 2026', source: 'SWIFT' },
            { value: '89%', label: 'Share of FX turnover, April 2025', source: 'BIS Triennial Survey 2025' },
            { value: '82.50%', label: 'Share of trade finance, May 2026', source: 'SWIFT' }
          ]
        },
        {
          type: 'list',
          heading: 'Important qualifications',
          items: [
            { text: 'The IMF stated that nearly all of the Q2 2025 decline was exchange-rate driven &mdash; at constant exchange rates the dollar\u2019s share would have fallen only 0.12 percentage points.', source: 'IMF Data Brief, 2 Oct 2025' },
            { text: 'Excluding intra-Eurozone payments, the dollar\u2019s payment share rises to roughly 75%.', source: 'SWIFT' },
            { text: 'From 2025 Q3 the IMF eliminated the &ldquo;unallocated&rdquo; category, so pre- and post-Q3 2025 shares are not perfectly comparable.', source: 'IMF COFER methodology note' },
            { text: 'SWIFT figures measure the SWIFT network only and undercount CIPS and alternative rails, so renminbi international usage is somewhat higher than its SWIFT share.', source: 'Methodological caveat' }
          ]
        },
        {
          type: 'stats',
          heading: 'The renminbi\u2019s actual position',
          items: [
            { value: '2.12%', label: 'Share of allocated FX reserves, 2025 Q2 — unchanged', source: 'IMF COFER, 2 Oct 2025' },
            { value: '3.10%', label: 'Share of global payments, June 2026', source: 'SWIFT' },
            { value: '5th', label: 'Rank in January 2026, down from 4th a year earlier', source: 'SWIFT / Finadium' }
          ]
        },
        {
          type: 'prose',
          heading: 'India\u2019s position, in the RBI\u2019s own words',
          paras: [
            'The rupee trade-settlement mechanism was introduced by A.P. (DIR Series) Circular No. 10 of 11 July 2022. As of early 2025, 123 correspondent banks from 30 countries had been permitted to open 156 Special Rupee Vostro Accounts with 26 authorised-dealer banks in India. <span class="src">MoS Commerce, Rajya Sabha, Feb 2025</span> Since August 2025, AD Category-I banks no longer require prior RBI approval, and non-residents may invest surplus balances in government securities. <span class="src">Drishti IAS, 2025</span>',
            'The governing statement is unambiguous: no one is talking about or thinking about de-dollarisation, and the effect is basically to de-risk trade. <span class="src">RBI Governor Shaktikanta Das, post-MPC briefing, 6 Dec 2024</span>'
          ]
        },
        {
          type: 'table',
          heading: 'Parallel finance, at scale',
          columns: ['Institution', 'Scale'],
          rows: [
            { cells: ['New Development Bank, cumulative since inception', '112 projects worth ~$37bn as of end-July 2025 (a separate profile gives $39bn across 105 projects at a different counting date)'], source: 'BRICS Expert Council / Daiwa Capital Markets, Jun 2025' },
            { cells: ['NDB local-currency lending', '~25% of portfolio, targeted to 30% in 2026 under the General Strategy 2022-2026'], source: 'Dilma Rousseff via TV BRICS, 11 Jul 2025' },
            { cells: ['NDB paid-in to subscribed capital', '~20% as of 1Q25'], source: 'Fitch, May 2025' },
            { cells: ['World Bank Group, fiscal 2025 alone', '$118.5bn in loans, grants, equity investments and guarantees'], source: 'World Bank Annual Report Financial Summary' },
            { cells: ['BRICS payment systems', 'BRICS Pay is a working concept; the RBI proposed linking BRICS CBDCs in January 2026. No fully operational cross-BRICS CBDC system in production.'], source: 'IBTimes citing RBI, Jan 2026' }
          ]
        },
        {
          type: 'prose',
          heading: 'The BRICS Unit claim is false',
          paras: [
            'The gold-backed &ldquo;BRICS Unit&rdquo; currency reported as launching in 2026 has no primary-source basis. What exists is a private research pilot: the International Research Institute for Advanced Systems, linked to the Russian Academy of Sciences, issued 100 &ldquo;Units&rdquo; on 31 October 2025, each pegged to one gram of gold on a 40% gold and 60% currency-basket design, with a Cardano-based prototype announced in December 2025. <span class="src">Deep research verification, Sep 2026</span> Sources stress it has not become official policy, and that as of July 2026 no BRICS gold-backed currency exists and none has a launch date. <span class="src">Ventura Securities / Aron Groups</span> The New Delhi Declaration of September 2026 contains no common-currency commitment. <span class="src">pmindia.gov.in</span>'
          ]
        },
        {
          type: 'prose',
          heading: 'What is actually happening instead',
          paras: [
            'Central bank gold buying reached 863 tonnes in 2025 \u2014 below the exceptional 1,000-tonne-plus years immediately preceding, but well above the 2010\u20132021 annual average of 473 tonnes. Twenty-two institutions each added roughly a tonne or more, with seven accounting for the bulk; Poland\u2019s central bank led with 102 tonnes. <span class="src">World Gold Council, Gold Demand Trends Full Year 2025</span>'
          ]
        },
        {
          type: 'reading',
          paras: [
            'The reserve diversification story is real and it is made of gold, not of new currencies. That is a far less dramatic finding than the one circulating, and it is the one the primary data supports.',
            'For the archive, this lens now has a falsifiable benchmark rather than a narrative. De-dollarisation would mean a sustained, exchange-rate-adjusted fall in the dollar\u2019s COFER share below roughly 50%, or the renminbi\u2019s payment share crossing roughly 10%. Neither is close. Until one moves, initiatives in this space should be recorded as hedging at the margin.',
            'The NDB comparison is the discipline to keep. Its entire cumulative lending since 2015 is roughly a third of what the World Bank committed in fiscal 2025 alone. Parallel institutions are real, growing and strategically significant \u2014 and they are not yet alternatives.'
          ]
        }
      ]
    },

    /* ---------------- LENS 4 ---------------- */
    {
      id: 'india',
      title: '4 · India\u2019s positioning',
      blocks: [
        {
          type: 'timeline',
          heading: 'The oil whiplash — autonomy under stress, in one sequence',
          items: [
            { when: 'Dec 2025', what: 'Russian imports fall to a two-year low as India diversifies toward the Middle East.', source: 'Kpler via Outlook Business' },
            { when: 'Feb 2026', what: 'Russian crude down to around 1 million bpd; West Asia\u2019s share reaches ~59%, the highest since August 2022.', source: 'Kpler' },
            { when: '6 Feb 2026', what: 'The punitive 25% US tariff is removed by executive order; India commits to a framework to purchase up to $500bn of US energy, aircraft, technology and coking coal over five years.', source: 'White House joint statement, Feb 2026' },
            { when: '28 Feb 2026', what: 'US and Israeli strikes on Iran; the Strait of Hormuz closes.', source: 'CRS R45281' },
            { when: 'Mar 2026', what: 'Russian crude climbs to 1.96 million bpd, a nine-month high. Washington grants a 30-day sanctions waiver to allow purchase of stranded Russian oil.', source: 'Kpler via Outlook Business' },
            { when: 'Apr 2026', what: 'India turns additionally to Venezuela &mdash; 12.4 million barrels in transit to Sikka &mdash; and to Angola.', source: 'S&amp;P Global' },
            { when: 'Jun 2026', what: 'Russian imports reach a record 2.6 million bpd, 54% of India\u2019s total crude imports.', source: 'OilPrice, citing Kpler and Vortexa' }
          ]
        },
        {
          type: 'table',
          heading: 'Trade agreements concluded, 2024–2026',
          columns: ['Agreement', 'Status'],
          rows: [
            { cells: ['India&ndash;UK FTA', 'Signed 24 July 2025; makes 90.2% of Indian exports duty-free; entry into force expected early 2026'], source: 'UK/India governments' },
            { cells: ['India&ndash;EFTA TEPA', 'In force 1 October 2025, with a $100bn EFTA investment commitment over 15 years'], source: 'Indian government' },
            { cells: ['India&ndash;EU FTA', 'Negotiations concluded 27 January 2026 at the EU&ndash;India Summit in New Delhi; von der Leyen described it as the largest such deal ever concluded by either side'], source: 'European Commission / India' },
            { cells: ['India&ndash;New Zealand', 'Signed 27 April 2026, with a $20bn investment commitment'], source: 'Indian government' },
            { cells: ['India&ndash;Oman', 'Concluded'], source: 'Indian government' }
          ]
        },
        {
          type: 'table',
          heading: 'India–China: warmer, and more lopsided',
          columns: ['Measure', 'Position'],
          rows: [
            { cells: ['Direct flights', 'Resumed late October 2025; four direct routes operating in H1 2026'], source: 'Wego' },
            { cells: ['Border trade', 'Nathu La reopened 1 August 2026, six years after suspension'], source: 'RT, Aug 2026' },
            { cells: ['Investment rules', 'India relaxed restrictions on Chinese investment in March 2026 and cleared Chinese investment in the power sector'], source: 'Reported Mar 2026' },
            { cells: ['Bilateral trade', 'Record $151.1bn in the year to March 2026'], source: 'CNBC, 12 Sep 2026' },
            { cells: ['India\u2019s deficit', 'Record $112.16bn'], source: 'CNBC, 12 Sep 2026' },
            { cells: ['Leaders', 'Modi and Xi met on the sidelines of the New Delhi BRICS summit, 12 September 2026; Modi stressed border peace'], source: 'pmindia.gov.in' },
            { cells: ['Assessment', 'Warmer but constrained by systemic distrust'], source: 'Carnegie Endowment, Jul 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The oil timeline is the most instructive sequence in the archive. Between December 2025 and February 2026 India demonstrably reduced Russian crude and converted that reduction into the removal of a punitive tariff. Four months later Russian crude hit a record 54% of imports. Both facts are true and neither cancels the other.',
            'What it shows is that India\u2019s optionality is conditional on calm. The diversification to the Middle East was real, and a single chokepoint event erased it \u2014 because the alternative suppliers all sat behind the strait that closed. Russian crude has become, in one analyst\u2019s framing, India\u2019s insurance policy against the next disruption.',
            'The China numbers cut the same way. Direct flights, border trade, relaxed investment rules \u2014 and a record $112bn deficit on record trade. Normalisation is proceeding on terms that deepen the structural imbalance rather than correcting it.',
            'The honest assessment is that strategic autonomy is working and getting harder simultaneously. India navigated the tariff shock, concluded four major trade agreements including the largest the EU has ever signed, and normalised with Beijing. It did all of that while its energy dependence on Russia reached a record and its trade deficit with China reached a record. Autonomy is being purchased, and the price is rising.'
          ]
        },
        {
          type: 'gap',
          tag: 'unresolved',
          text: 'India\u2019s participation at the G7 &Eacute;vian summit as an invited partner is recorded in the Economic forums section on French government sourcing, but the deep research pass could not confirm it independently and flagged it as unverified. Modi\u2019s attendance at the June 2025 G7 in Canada as a special invitee is confirmed. This should be resolved before the &Eacute;vian claim is relied on further.'
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'IMEC, Chabahar and INSTC implementation milestones for 2026 could not be established. These remain announced rather than demonstrably progressing, and the Hormuz closure materially undermines IMEC\u2019s premise. Also thin: the November 2025 Rosneft and Lukoil sanctions specifics, and Malabar and Cope India 2026 exercise details.'
        }
      ]
    },

    /* ---------------- LENS 5 ---------------- */
    {
      id: 'fault-lines',
      title: '5 · Fault lines 2026–2030',
      blocks: [
        {
          type: 'prose',
          heading: 'Withdrawn: the African Union leverage forecast',
          paras: [
            'The original lens predicted growing African Union leverage following the 2025 Johannesburg G20 presidency. That forecast is falsified and is withdrawn rather than softened. The United States boycotted the Johannesburg summit in November 2025; on 27 November 2025 Trump disinvited South Africa from the 2026 Miami summit and halted US payments; and the State Department set a narrow Miami agenda stripping debt, development, inequality, climate and gender. <span class="src">PIIE / SAIIA / CFR, Dec 2025</span> South Africa maintains that it remains a founding member. The resulting fault line concerns G20 fracture, not African ascendancy.'
          ]
        },
        {
          type: 'table',
          heading: 'The two hardest-dated tipping points',
          columns: ['Fault line', 'Evidence'],
          rows: [
            { cells: ['Strait of Hormuz closure', 'Iran declared the strait closed following strikes beginning 28 February 2026. A 17 June 2026 US&ndash;Iran memorandum briefly reopened it before the tanker war reignited; as of early September 2026 it remains effectively closed to normal insured commercial traffic. Iran has created a &ldquo;Persian Gulf Strait Authority&rdquo; charging per-vessel fees.'], source: 'CRS R45281 / multiple trackers' },
            { cells: ['Rare earth cliff, 10 November 2026', 'China\u2019s expanded October 2025 export controls were suspended until 10 November 2026. The April 2025 controls on seven heavy rare earths &mdash; samarium, gadolinium, terbium, dysprosium, lutetium, scandium, yttrium &mdash; remain in force throughout.'], source: 'MOFCOM/GAC Announcement No. 70, 7 Nov 2025' }
          ]
        },
        {
          type: 'stats',
          heading: 'What full implementation of the rare earth controls would put at risk',
          items: [
            { value: '$6.5tn', label: 'Annual downstream production value at risk outside China', source: 'IEA Global Critical Minerals Outlook, 16 Jul 2026' },
            { value: '>$1.5tn', label: 'Exposure for the US, and separately for Europe', source: 'IEA, Jul 2026' },
            { value: '>$3tn', label: 'Automotive sector exposure — the hardest hit', source: 'IEA, Jul 2026' }
          ]
        },
        {
          type: 'list',
          heading: 'Lower-confidence fault lines',
          items: [
            { text: 'G20 institutional erosion &mdash; the exclusion of a founding member is unprecedented and structurally damaging.', source: 'PIIE / CFR, Dec 2025' },
            { text: 'Russia&ndash;China asymmetry &mdash; the Hormuz crisis proved a windfall for Russia, while deepening its dependence on Chinese and Indian buyers.', source: 'Gulf News, 2026' },
            { text: 'Critical minerals competition, to which the Quad Critical Minerals Initiative Framework of May 2026 is a direct institutional response.', source: 'US State Department, May 2026' },
            { text: 'Taiwan contingency, EU enlargement and Ukraine accession, AI governance fragmentation, climate finance and the UN financial crisis are all genuine, but the 2026 trajectory data is thinner and they should not be overstated.', source: 'Deep research assessment, Sep 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The discipline this lens now imposes is dating. Hormuz has a start date and a live status; the rare earth suspension has an expiry date of 10 November 2026. Both are checkable. Most of what gets written about 2026&ndash;2030 fault lines is not.',
            'The African Union withdrawal is worth keeping visible rather than deleting. It was a reasonable forecast made from real evidence \u2014 a first African G20 presidency genuinely did look like an inflection point. It failed because we modelled the institution as rule-governed when it has no rules, and a host with no procedural constraints simply excluded a member. The lesson generalises: forecasts about non-binding institutions should assume that anything procedurally unprotected can be reversed by a single unwilling participant.',
            'Set a review trigger for 10 November 2026. If the rare earth suspension lapses without extension, the IEA figures above stop being hypothetical, and several other tabs in this archive need rewriting in the same week.'
          ]
        }
      ]
    }

  ]
};

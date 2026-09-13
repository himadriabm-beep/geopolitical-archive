/* ---------------------------------------------------------------
   SECTION: Economic forums

   G7, G20, BRICS. Stage 1 migration, audited.

   Note on the share statistics: these are the most contested
   numbers in the archive. Where sources disagree the disagreement
   is shown with attribution. Where a figure depends on a
   definitional choice — members only versus members plus
   partners — that choice is stated, because it accounts for most
   of the spread.
   --------------------------------------------------------------- */

export const economic = {
  id: 'economic',
  title: 'Economic forums',
  summary: 'G7, G20 and BRICS — where the organising logic is economic weight, and where the weight itself is disputed.',
  tabs: [

    /* ---------------- G7 ---------------- */
    {
      id: 'g7',
      title: 'G7',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Created', '1975, from an ad hoc gathering of finance ministers in 1973'], source: 'EPFL concept graph / Banque de France' },
            { cells: ['Members', 'Canada, France, Germany, Italy, Japan, United Kingdom, United States'], source: 'Banque de France' },
            { cells: ['European Union', 'Non-enumerated member; represented by the Presidents of the European Council and Commission'], source: 'EPFL / Consilium' },
            { cells: ['Structure', 'No legal existence, no permanent secretariat; presidency rotates annually'], source: 'nature4climate / Banque de France' },
            { cells: ['2026 presidency', 'France'], source: 'Banque de France' },
            { cells: ['52nd summit', '&Eacute;vian-les-Bains, 15&ndash;17 June 2026, H&ocirc;tel Royal'], source: 'Consilium / Wikipedia' }
          ]
        },
        {
          type: 'table',
          heading: 'Share statistics — as found, with dates',
          columns: ['Measure', 'Figure', 'Vintage'],
          rows: [
            { cells: ['Share of world population', '~10% (770 million)', 'as of 2020'], source: 'EPFL concept graph' },
            { cells: ['Share of world population', '10%', 'as of 2017'], source: 'nature4climate' },
            { cells: ['Share of global GDP', '30&ndash;43% depending on measure', 'as of 2020'], source: 'EPFL concept graph' },
            { cells: ['Share of global GDP', '46%', 'as of 2017'], source: 'nature4climate' },
            { cells: ['Share of global net wealth', 'over half, at more than $200tn', 'as of 2020'], source: 'EPFL concept graph' }
          ]
        },
        {
          type: 'list',
          heading: '&Eacute;vian, June 2026',
          items: [
            { text: 'France invited Brazil, Egypt, India, Kenya and South Korea to the summit, with these partners contributing to preparatory discussions from early in the year; Qatar, Ukraine and the UAE also appear among invited participants.', source: 'France Diplomatie / Wikipedia' },
            { text: 'Leaders issued joint statements on Ukraine, the Middle East, critical minerals and global economic imbalances.', source: 'Wikipedia / Consilium, Jun 2026' },
            { text: 'The French presidency framed its agenda around reducing excessive macroeconomic imbalances, naming predatory competition, industrial overcapacity, under-investment, over-indebtedness and deregulation as the specific threats.', source: 'France Diplomatie' },
            { text: '&Eacute;vian previously hosted the 29th G8 summit in 2003, making it the first French town to host a G7 or G8 leaders\u2019 summit twice.', source: 'Wikipedia, Jun 2026' },
            { text: 'Macron invited Modi to the summit in February 2026, noting that India would chair BRICS in the same year France chaired the G7.', source: 'NewsOnAir, Feb 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'The invitation list is the substance of this summit, not a courtesy. Brazil, Egypt, India, Kenya and South Korea were brought into preparatory discussions from the start of the year rather than flown in for a photograph on the final day. Three of those five are BRICS members or partners.',
            'Read alongside the French agenda \u2014 industrial overcapacity, predatory competition \u2014 the strategy is legible. The G7 cannot address Chinese overcapacity as a G7, because its combined leverage is insufficient and its own members are divided. Recruiting large non-aligned economies into the framing is the only route available.',
            'For India this is the year\u2019s most useful position: chairing BRICS in September and sitting as an invited partner at the G7 in June. Neither forum can treat India as belonging to the other side, which is the whole point of the posture.'
          ]
        }
      ]
    },

    /* ---------------- G20 ---------------- */
    {
      id: 'g20',
      title: 'G20',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Established', '1999, in response to the financial crises of the late 1990s'], source: 'G20 Miami 2026 official' },
            { cells: ['Composition', '19 countries plus the European Union and the African Union'], source: 'Washington Times / CBS' },
            { cells: ['African Union', 'Permanent member; joined 2023'], source: 'African Union, Apr 2026' },
            { cells: ['Structure', 'No permanent secretariat; presidency rotates annually'], source: 'G20 Miami 2026 official' },
            { cells: ['Share of global GDP', 'around 85%'], source: 'G20 website via CBS News' },
            { cells: ['Share of global trade', 'more than 75%'], source: 'G20 website via CBS News' },
            { cells: ['2026 summit', 'Trump National Doral Miami, 14&ndash;15 December 2026 &mdash; the 21st'], source: 'US State Department / Wikipedia' }
          ]
        },
        {
          type: 'timeline',
          heading: 'The 2025&ndash;26 rupture',
          items: [
            { when: 'Nov 2025', what: 'The Johannesburg summit is held under South Africa\u2019s presidency, the first on African soil. The United States boycotts it. Forty-two countries send delegations.', source: 'CFR / allAfrica' },
            { when: '27 Nov 2025', what: 'Trump announces South Africa will not be invited to the 2026 summit, citing its treatment of Afrikaners and a dispute over the handover of G20 hosting duties, and says all payments and subsidies to South Africa will stop.', source: 'Washington Times, Nov 2025' },
            { when: 'Dec 2025', what: 'Pretoria responds that it is a G20 member in its own right, states that the formal instruments of leadership were handed to a designated US Embassy official at DIRCO, and dismisses the allegations as misinformation.', source: 'allAfrica, Dec 2025' },
            { when: '1 Dec 2025', what: 'The United States assumes the presidency, narrowing the agenda to three themes: removing regulatory burdens, unlocking affordable and secure energy supply chains, and pioneering new technologies and innovation. Climate, debt, development, inequality and sustainability are dropped.', source: 'CFR / US State Department' },
            { when: 'Dec 2025', what: 'The first Sherpa meeting convenes in Washington with the African Union, EU and 18 members attending. Poland attends as the only full guest participant of the US host year.', source: 'US State Department, Dec 2025' },
            { when: 'Apr 2026', what: 'The African Union convenes a G20 Retreat in Equatorial Guinea to coordinate member states around Agenda 2063 priorities ahead of the US presidency, alongside the AU chair transition from Angola to Burundi.', source: 'African Union, Apr 2026' }
          ]
        },
        {
          type: 'list',
          heading: 'On the guest list',
          items: [
            { text: 'Treasury Secretary Scott Bessent complained that &ldquo;the G20 has become the G100&rdquo;, and the US is expected to limit the traditional practice of inviting non-members as observers.', source: 'CFR, Dec 2025' },
            { text: 'Poland, now the world\u2019s twentieth-largest economy, is the stated exception.', source: 'CFR, Dec 2025' },
            { text: 'Invited states listed for the Miami summit include Azerbaijan, Finland, Ireland, Kazakhstan, Netherlands, Norway, Poland, Qatar, Singapore, Spain, UAE, Uzbekistan and Vietnam.', source: 'Wikipedia / g20.org' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Our Lens 5 predicted growing African Union leverage off the back of the 2025 Johannesburg presidency. The opposite happened. The host was boycotted, then disinvited from the following summit, and the agenda items that Africa had spent a presidency advancing \u2014 debt, development, inequality \u2014 were struck from the 2026 programme outright. That forecast needs to be withdrawn rather than softened.',
            'The deeper point is about what kind of institution the G20 is. A body with no secretariat, no charter and no membership rules is exactly a body in which the rotating host can exclude a member. There is no procedure to appeal to, because there are no procedures. The informality that let the G20 move quickly in 2008 is the same informality that lets it fracture now.',
            'The AU\u2019s response \u2014 a retreat in Equatorial Guinea to coordinate positions before the host year begins \u2014 is the right adaptation, and it is also an admission that the continent now expects to have to work around the presidency rather than through it.'
          ]
        }
      ]
    },

    /* ---------------- BRICS ---------------- */
    {
      id: 'brics',
      title: 'BRICS',
      blocks: [
        {
          type: 'table',
          heading: 'Reference',
          columns: ['Field', 'Detail'],
          rows: [
            { cells: ['Founded', 'As BRIC in 2009 &mdash; Brazil, Russia, India, China; South Africa joined 2010'], source: 'Geopolitical Economy Report' },
            { cells: ['First expansion', '2023 Johannesburg summit'], source: 'Geopolitical Economy Report' },
            { cells: ['Core members', 'Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, UAE, Indonesia'], source: 'Rio Times / Geopolitical Economy Report' },
            { cells: ['Saudi Arabia', 'Invited at the 2023 Johannesburg summit; has not formally accepted full membership'], source: 'Rio Times, Aug 2026' },
            { cells: ['Partner category', 'Created at the 2024 Kazan summit; nine partners from 1 January 2025, Vietnam added July 2025'], source: 'Geopolitical Economy Report, Jul 2025' },
            { cells: ['Partners (10)', 'Belarus, Bolivia, Cuba, Kazakhstan, Malaysia, Nigeria, Thailand, Uganda, Uzbekistan, Vietnam'], source: 'Rio Times / Geopolitical Economy Report' },
            { cells: ['18th summit', 'New Delhi, 12&ndash;13 September 2026, under India\u2019s chairship'], source: 'Rio Times, Aug 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'Share statistics — note what each figure counts',
          columns: ['Measure', 'Figure', 'What it counts'],
          rows: [
            { cells: ['World population', '~48.5%', '11 full members'], source: 'The World Data, Apr 2026' },
            { cells: ['World population', '55.61% (4.45bn of 8.01bn)', '10 members + 10 partners (&ldquo;BRICS 20&rdquo;)'], source: 'Geopolitical Economy Report, via IMF data' },
            { cells: ['World population', '56%', '10 members + 10 partners'], source: 'The World Data, Apr 2026' },
            { cells: ['Global GDP at PPP', '35% (vs G7 at 30%)', '2024, members only'], source: 'The World Data, Apr 2026' },
            { cells: ['Global GDP at PPP', 'over 40%', '11 full members'], source: 'The World Data, Apr 2026' },
            { cells: ['Global GDP at PPP', '~41%', '10 members + 10 partners'], source: 'Rio Times, Aug 2026' },
            { cells: ['Global GDP at PPP', '43.93%', '10 members + 10 partners, IMF data'], source: 'Geopolitical Economy Report' },
            { cells: ['Global GDP, nominal', '28&ndash;30% (over $32tn)', '11 full members'], source: 'The World Data, Apr 2026' },
            { cells: ['Share of world land area', '~36%', '11 full members'], source: 'The World Data, Apr 2026' }
          ]
        },
        {
          type: 'table',
          heading: 'Internal distribution',
          columns: ['Measure', 'Detail'],
          rows: [
            { cells: ['China\u2019s share of bloc GDP', 'roughly 70%'], source: 'Statistics of the World' },
            { cells: ['China', 'Nominal ~$22.3tn; PPP ~$43.5tn &mdash; larger than all other members combined'], source: 'Barristery, Sep 2026' },
            { cells: ['India', 'Nominal ~$4.5tn; PPP ~$19.1tn &mdash; second on every measure'], source: 'Barristery, Sep 2026' },
            { cells: ['Growth, 2025', 'BRICS average 3.4% against G7 average 1.2%'], source: 'Rio Times, citing IMF' },
            { cells: ['India growth', '6.2% in 2025, 6.2% projected 2026 &mdash; fastest-growing member'], source: 'Rio Times, citing IMF' },
            { cells: ['China growth', '4.8%'], source: 'Rio Times, citing IMF' },
            { cells: ['PPP crossover', 'BRICS first surpassed the G7 in GDP at PPP in 2018'], source: 'The World Data, Apr 2026' }
          ]
        },
        {
          type: 'reading',
          paras: [
            'Three separate problems are tangled together in the BRICS numbers, and separating them is the single most useful thing this migration produces.',
            'First, the membership count is genuinely unresolved. Sources say ten or eleven depending on whether they count Saudi Arabia, which was invited in 2023 and has never formally accepted. An organisation whose own membership is ambiguous three years after an expansion is telling you something about how binding membership is.',
            'Second, the headline figures almost always count partners. The impressive numbers \u2014 56% of population, 44% of GDP at PPP \u2014 are the BRICS 20, members plus partners. Members alone are roughly 48.5% and 35\u201340%. Partners attend, sign nothing binding, and can leave without consequence. Counting them in a bloc\u2019s economic weight is a choice, and it is nearly always made silently.',
            'Third, and most important: 70% of the bloc\u2019s GDP is one member. China\u2019s economy at PPP exceeds every other member combined. Any figure describing BRICS as a counterweight to the G7 is, arithmetically, mostly a figure about China. This is why India resists a common BRICS currency and why the NDB has never scaled the way its founding documents imagined \u2014 the asymmetry inside the bloc is larger than the asymmetry between the bloc and the G7.',
            'Our v3.0 material used 55\u201356% population and 40%+ GDP without stating that these were partner-inclusive figures. That was not an invented number, but presenting it without the definitional caveat made the bloc look more consolidated than it is.'
          ]
        },
        {
          type: 'gap',
          tag: 'gap',
          text: 'Source quality here is mixed and worth flagging. Geopolitical Economy Report is openly advocacy-oriented, and Rio Times, The World Data and Barristery are secondary aggregators citing IMF figures rather than IMF publications. The underlying IMF World Economic Outlook data has not been consulted directly. For a figure this load-bearing across the archive, it should be.'
        }
      ]
    }

  ]
};

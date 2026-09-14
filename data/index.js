/* ---------------------------------------------------------------
   SECTION REGISTRY — v12.0

   Two pillars: International Geo Politics and Internal Dynamics.
   Corrections sits standalone outside both.

   The `groups` array drives the collapsible sidebar.
   The `standalone` array renders below the groups.
   --------------------------------------------------------------- */

import { worldForums } from './world-forums.js';
import { synthesis } from './synthesis.js';
import { events } from './events.js';
import { supplyChains } from './supply-chains.js';
import { ideology } from './ideology.js';
import { corrections } from './corrections.js';

export const groups = [
  {
    id: 'international',
    title: 'International Geo Politics',
    sections: [worldForums, synthesis, events, supplyChains]
  },
  {
    id: 'internal',
    title: 'Internal Dynamics',
    sections: [ideology]
  }
];

export const standalone = [corrections];

export const meta = {
  version: '12.0',
  updated: '14 Sep 2026'
};

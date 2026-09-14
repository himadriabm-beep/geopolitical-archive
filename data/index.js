/* ---------------------------------------------------------------
   SECTION REGISTRY — v13.0

   Two pillars: International Geo Politics and Internal Dynamics.
   Corrections sits standalone outside both.
   --------------------------------------------------------------- */

import { worldForums } from './world-forums.js';
import { synthesis } from './synthesis.js';
import { events } from './events.js';
import { supplyChains } from './supply-chains.js';
import { ideology } from './ideology.js';
import { governance } from './governance-internal.js';
import { economyInternal } from './economy-internal.js';
import { vision } from './vision.js';
import { securityGrid } from './security-grid.js';
import { doctrine } from './doctrine.js';
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
    sections: [ideology, governance, economyInternal, vision, securityGrid, doctrine]
  }
];

export const standalone = [corrections];

export const meta = {
  version: '14.0',
  updated: '14 Sep 2026'
};

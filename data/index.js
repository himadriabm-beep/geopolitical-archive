/* ---------------------------------------------------------------
   SECTION REGISTRY

   Left menu: World Forums, Synthesis, Events, Supply Chains,
   Corrections.

   World Forums is a wrapper importing security, economic,
   universal, regional and lenses as tabs with subtabs.

   The individual data files (security.js, economic.js etc.)
   still exist and are imported through world-forums.js.
   --------------------------------------------------------------- */

import { worldForums } from './world-forums.js';
import { synthesis } from './synthesis.js';
import { events } from './events.js';
import { supplyChains } from './supply-chains.js';
import { corrections } from './corrections.js';

export const sections = [
  worldForums,
  synthesis,
  events,
  supplyChains,
  corrections
];

export const meta = {
  version: '11.0',
  updated: '13 Sep 2026'
};

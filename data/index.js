/* ---------------------------------------------------------------
   SECTION REGISTRY

   This is the only file you edit when a NEW section is added.
   To add one:
     1. drop the new file into /data
     2. add an import line below
     3. add its name to the sections array, in menu order

   Everything else lives inside the individual data files.
   --------------------------------------------------------------- */

import { security } from './security.js';
import { economic } from './economic.js';
import { universal } from './universal.js';
import { regional } from './regional.js';
import { chokepoints } from './chokepoints.js';

export const sections = [
  security,
  economic,
  universal,
  regional,
  chokepoints
];

export const meta = {
  version: '4.4',
  updated: '13 Sep 2026'
};

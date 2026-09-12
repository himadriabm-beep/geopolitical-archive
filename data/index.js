/* ---------------------------------------------------------------
   SECTION REGISTRY

   This is the only file you edit when a NEW section is added.
   To add one:
     1. drop the new file into /data
     2. add an import line below
     3. add its name to the sections array, in menu order

   Everything else lives inside the individual data files.
   --------------------------------------------------------------- */

import { chokepoints } from './chokepoints.js';

export const sections = [
  chokepoints
];

export const meta = {
  version: '4.0',
  updated: '12 Sep 2026'
};

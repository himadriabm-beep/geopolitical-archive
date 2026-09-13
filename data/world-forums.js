/* ---------------------------------------------------------------
   SECTION: World Forums

   This is a structural wrapper. It imports the four grouping
   files and the five lenses, and arranges them as tabs with
   subtabs. No content lives here — only the reorganisation.
   --------------------------------------------------------------- */

import { security } from './security.js';
import { economic } from './economic.js';
import { universal } from './universal.js';
import { regional } from './regional.js';
import { lenses } from './lenses.js';

export const worldForums = {
  id: 'world-forums',
  title: 'World Forums',
  summary: '',
  tabs: [
    {
      id: 'security',
      title: 'Security',
      subtabs: security.tabs
    },
    {
      id: 'economic',
      title: 'Economic',
      subtabs: economic.tabs
    },
    {
      id: 'universal',
      title: 'Universal',
      subtabs: universal.tabs
    },
    {
      id: 'regional',
      title: 'Regional',
      subtabs: regional.tabs
    },
    {
      id: 'lenses',
      title: 'Lenses',
      subtabs: lenses.tabs
    }
  ]
};

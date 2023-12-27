import { renderInput } from './input/input.js';
import { renderSelectGenre } from './select-genre/select-genre.js';
import { renderSort } from './sort/sort.js';
import { fromatSection } from './formatSection/formatSection.js';

export function renderSearch() {
   const searchWrapper = document.createElement('div');
   searchWrapper.className = 'searchWrapper';

   searchWrapper.appendChild(renderInput());

   searchWrapper.appendChild(renderSelectGenre());

   searchWrapper.appendChild(renderSort());

   searchWrapper.appendChild(fromatSection());

   return searchWrapper;
}

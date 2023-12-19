import { renderInput } from './input/input.js';
import { renderSelectGenre } from './select-genre/select-genre.js';
import { renderSort } from './sort/sort.js';

export function renderSearch() {
   const searchWrapper = document.createElement('div');
   searchWrapper.className = 'searchWrapper';

   searchWrapper.appendChild(renderInput());

   searchWrapper.appendChild(renderSelectGenre());

   searchWrapper.appendChild(renderSort());

   return searchWrapper;
}

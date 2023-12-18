import { renderInput } from './input/input.js';
import { renderSelectGenre } from './select-genre/select-genre.js';
import { renderSort } from './sort/sort.js';

export function renderSearch() {
   const searchWrapper = document.createElement('div');
   searchWrapper.className = 'searchWrapper';

   const inputElement = renderInput();
   searchWrapper.appendChild(inputElement);

   const selectElement = renderSelectGenre();
   searchWrapper.appendChild(selectElement);

   const sortElement = renderSort();
   searchWrapper.appendChild(sortElement);

   return searchWrapper;
}

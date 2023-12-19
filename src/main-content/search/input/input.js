import { getSearchTherm, setSearchTherm } from '../../../data.js';
export function renderInput() {
   const searchInput = document.createElement('input');
   searchInput.className = 'searchInput';
   searchInput.placeholder = 'artist or song name';

   searchInput.value = getSearchTherm();
   searchInput.addEventListener('input', () => {
      setSearchTherm(searchInput.value);
   });

   requestAnimationFrame(() => {
      searchInput.focus();
   }, 0);

   // картинка
   const searchImg = document.createElement('img');
   searchImg.src = '../../../style/assets/images/search.svg';
   searchInput.appendChild(searchImg);

   return searchInput;
}

import { renderTytleBtn } from './tytle-btn-wrapper/tytle-btn-wrapper.js';
import { renderSearch } from './search/search.js';
import { renderPlaylists } from './section-playlist/playlists.js';

export function renderMain() {
   const mainContent = document.createElement('main');
   mainContent.className = 'mainContent';

   const mainWrapper = document.createElement('div');
   mainWrapper.className = 'mainWrapper';
   mainContent.appendChild(mainWrapper);

   const tytleBtnWrapperElement = renderTytleBtn();
   mainWrapper.appendChild(tytleBtnWrapperElement);

   const searchInputElement = renderSearch();
   mainWrapper.appendChild(searchInputElement);

   const playlistElement = renderPlaylists();
   mainWrapper.appendChild(playlistElement);

   return mainContent;
}

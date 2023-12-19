import { renderHeader } from '../header/header.js';
import { renderTytleBtn } from './tytle-btn-wrapper/tytle-btn-wrapper.js';
import { renderSearch } from './search/search.js';
import { renderPlaylistsWrapper } from './section-playlist/playlists-wrapper.js';

export function renderMain() {
   const mainContent = document.createElement('main');
   mainContent.className = 'mainContent';

   mainContent.appendChild(renderHeader());

   const mainWrapper = document.createElement('div');
   mainWrapper.className = 'mainWrapper';
   mainContent.appendChild(mainWrapper);

   mainWrapper.appendChild(renderTytleBtn());

   mainWrapper.appendChild(renderSearch());

   mainWrapper.appendChild(renderPlaylistsWrapper());

   return mainContent;
}

import { renderSectionRock } from './section-one/section-rock.js';

export function renderPlaylistsWrapper() {
   const playlistsWrapper = document.createElement('div');
   playlistsWrapper.className = 'playlistsWrapper';

   const rockElement = renderSectionRock();
   playlistsWrapper.appendChild(rockElement);

   return playlistsWrapper;
}
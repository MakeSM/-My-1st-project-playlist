import { renderSectionRock } from './section-one/section-rock.js';
import { renderSectionRap } from './section-two/section-rap.js';

export function renderPlaylistsWrapper() {
   const playlistsWrapper = document.createElement('div');
   playlistsWrapper.className = 'playlistsWrapper';

   playlistsWrapper.appendChild(renderSectionRock());

   playlistsWrapper.appendChild(renderSectionRap());

   return playlistsWrapper;
}

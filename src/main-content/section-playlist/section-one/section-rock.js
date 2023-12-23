import { renderImgRock } from './info-panale-rock/info-rock-img.js';
import { renderInfoPanelRock } from './info-panale-rock/info-panale-rock.js';
import { renderPlaylist } from '../playlist-rock/playlist.js';

export function renderSectionRock() {
   const sectionRock = document.createElement('section');
   sectionRock.className = 'sectionSong';
   sectionRock.dataset.genre = 'rock';

   sectionRock.appendChild(renderImgRock());

   sectionRock.appendChild(renderInfoPanelRock());

   sectionRock.appendChild(renderPlaylist());

   return sectionRock;
}

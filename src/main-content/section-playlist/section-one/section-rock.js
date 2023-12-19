import { renderImgRock } from './info-panale/info-rock-img.js';
import { renderInfoPanelRock } from './info-panale/info-panale-rock.js';
import { renderPlaylist } from './playlist-rock/playlist.js';

export function renderSectionRock() {
   const sectionRock = document.createElement('section');
   sectionRock.className = 'sectionRock';

   sectionRock.appendChild(renderImgRock());

   sectionRock.appendChild(renderInfoPanelRock());

   sectionRock.appendChild(renderPlaylist());

   return sectionRock;
}

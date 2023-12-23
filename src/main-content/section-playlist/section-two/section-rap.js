import { renderImgRap } from './info-panale-rap/info-rap-img.js';
import { renderInfoPanelRap } from './info-panale-rap/info-panale-rap.js';
import { renderPlaylist } from '../playlist-rock/playlist.js';

export function renderSectionRap() {
   const sectionRap = document.createElement('section');
   sectionRap.className = 'sectionSong';
   sectionRap.dataset.genre = 'rap';

   sectionRap.appendChild(renderImgRap());
   sectionRap.appendChild(renderInfoPanelRap());
   sectionRap.appendChild(renderPlaylist());

   return sectionRap;
}

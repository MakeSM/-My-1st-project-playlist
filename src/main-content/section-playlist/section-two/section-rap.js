import { renderImgRap } from './info-panale-rap/info-rap-img.js';
import { renderInfoPanelRap } from './info-panale-rap/info-panale-rap.js';
// import { renderPlaylist } from '../playlist-rock/playlist.js';
import { getSongs } from '../../../data.js';
import { renderSong } from '../playlist/song.js';

export function renderSectionRap() {
   const sectionRap = document.createElement('section');
   sectionRap.className = 'sectionSong';
   sectionRap.dataset.genre = 'rap';

   sectionRap.appendChild(renderImgRap());

   sectionRap.appendChild(renderInfoPanelRap());
   // sectionRap.appendChild(renderPlaylist());

   // renderPlaylist
   const songs = getSongs();
   const songsContainer = document.createElement('div');

   for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const songElement = renderSong(songs[i]);
      if (song.genre === 'rap') {
         songsContainer.appendChild(songElement);
      }
   }

   sectionRap.appendChild(songsContainer);

   return sectionRap;
}

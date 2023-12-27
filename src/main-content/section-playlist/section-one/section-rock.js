import { renderImgRock } from './info-panale-rock/info-rock-img.js';
import { renderInfoPanelRock } from './info-panale-rock/info-panale-rock.js';
// import { renderPlaylist } from '../playlist-rock/playlist.js';
import { getSongs } from '../../../data.js';
import { renderSong } from '../playlist/song.js';

export function renderSectionRock() {
   const sectionRock = document.createElement('section');
   sectionRock.className = 'sectionSong';
   sectionRock.dataset.genre = 'rock';

   sectionRock.appendChild(renderImgRock());

   sectionRock.appendChild(renderInfoPanelRock());

   // sectionRock.appendChild(renderPlaylist());

   //renderPlaylist;
   const songs = getSongs();
   const songsContainer = document.createElement('div');

   for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const songElement = renderSong(songs[i]);
      if (song.genre === 'rock') {
         songsContainer.appendChild(songElement);
      }
   }

   sectionRock.appendChild(songsContainer);

   return sectionRock;
}

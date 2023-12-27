import { getSongs } from '../../../data.js';
import { renderSong } from './song.js';

export function renderPlaylist() {
   const songs = getSongs();

   const songsContainer = document.createElement('div');
   const sectionsContainer = document.createElement('div');
   const sections = Array.from(document.querySelectorAll('[sectionSong]'));

   for (let i = 0; i < songs.length; i++) {
      const songElement = renderSong(songs[i]);
      const genre = songs[i].genre;
      for (let j = 0; j < sections.length; j++) {
         const section = sections[j];
         const sectionGenre = section.dataset.genre;
         if (genre === sectionGenre) {
            section.appendChild(songElement);
            break;
         }
      }
   }

   sections.forEach((section) => sectionsContainer.appendChild(section));
   songsContainer.appendChild(sectionsContainer);

   console.log();
   return songsContainer;
}

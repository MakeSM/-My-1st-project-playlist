import { getSongs } from '../data.js';
import { renderSong } from '../main-content/section-playlist/playlist-rock/song.js';

export function renderPlaylist() {
   const songs = getSongs();

   // const songsContainer = document.createElement('div');

   const songsByGenre = {};

   for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const genre = song.genre;

      if (!songsByGenre[genre]) {
         songsByGenre[genre] = [];
      }

      songsByGenre[genre].push(song);
   }

   const playlistContainer = document.createElement('div');

   for (const genre in songsByGenre) {
      const genreContainer = document.createElement('div');

      const genreSongs = songsByGenre[genre];

      for (let i = 0; i < genreSongs.length; i++) {
         const songElement = renderSong(genreSongs[i]);
         genreContainer.appendChild(songElement);
      }
      playlistContainer.appendChild(genreContainer);
   }

   return playlistContainer;
}

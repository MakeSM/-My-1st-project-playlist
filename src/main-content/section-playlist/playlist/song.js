export function renderSong(song) {
   const songContainer = document.createElement('div');
   songContainer.className = 'songContainer';

   const imgSongElement = document.createElement('img');
   imgSongElement.className = 'imgSongElement';
   imgSongElement.src = song.src;
   songContainer.appendChild(imgSongElement);

   const musicElementWrapper = document.createElement('div');
   musicElementWrapper.className = 'musicElementWrapper';

   const nameSongElement = document.createElement('div');
   nameSongElement.className = 'nameSongElement';

   const hotElement = document.createElement('img');
   hotElement.className = 'hotElement';
   hotElement.src = '../../../../style/assets/images/Rectangle 108.svg';
   if (song.hot === true) {
      nameSongElement.appendChild(hotElement);
   }

   const artistElement = document.createElement('div');
   artistElement.className = 'artistElement';
   artistElement.textContent = song.artist + '-';

   const titleElement = document.createElement('div');
   titleElement.className = 'titleElement';
   titleElement.textContent = song.title;

   nameSongElement.appendChild(artistElement);
   nameSongElement.appendChild(titleElement);

   musicElementWrapper.appendChild(nameSongElement);

   const audioElement = document.createElement('audio');
   audioElement.className = 'audioElement';
   audioElement.src = song.url;
   audioElement.controls = true;
   musicElementWrapper.appendChild(audioElement);

   songContainer.appendChild(musicElementWrapper);

   return songContainer;
}

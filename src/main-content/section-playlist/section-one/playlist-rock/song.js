export function renderSong(song) {
   const songContainer = document.createElement('div');
   songContainer.className = 'songContainer';
   songContainer.innerHTML = '' + song.artist + ' ' + song.title;

   songContainer.appendChild(document.createElement('br'));

   const audioElement = document.createElement('audio');
   audioElement.className = 'audioElement';
   audioElement.src = song.url;
   audioElement.controls = true;
   songContainer.appendChild(audioElement);

   return songContainer;
}

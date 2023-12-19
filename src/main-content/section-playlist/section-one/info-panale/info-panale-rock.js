export function renderInfoPanelRock() {
   const infoPlayListWrapper = document.createElement('div');
   infoPlayListWrapper.className = 'infoPlayListWrapper';

   const spanList = document.createElement('span');
   spanList.innerText = 'Playlist';
   spanList.className = 'spanList';
   infoPlayListWrapper.appendChild(spanList);

   const namePlayList = document.createElement('h2');
   namePlayList.innerText = 'Rock Hits';
   namePlayList.className = 'namePlayList';
   infoPlayListWrapper.appendChild(namePlayList);

   const quantityDurationTrack = document.createElement('span');
   quantityDurationTrack.innerText = '4 tracks, 11m 5s';
   quantityDurationTrack.className = 'quantityDurationTrack';
   infoPlayListWrapper.appendChild(quantityDurationTrack);

   const quantityArtists = document.createElement('div');
   quantityArtists.innerText =
      'Три Дня Дождя' + ', ' + 'Luverance' + ', ' + 'saypink!';
   quantityArtists.className = 'quantityArtists';

   infoPlayListWrapper.appendChild(quantityArtists);

   return infoPlayListWrapper;
}

export function renderTytleBtn() {
   const tytleBtnWrapper = document.createElement('div');
   tytleBtnWrapper.className = 'tytleBtnWrapper';

   const tytlePlaylist = document.createElement('h1');
   tytlePlaylist.className = 'tytlePlaylist';
   tytlePlaylist.innerText = 'My Playlists';
   tytleBtnWrapper.appendChild(tytlePlaylist);

   const btnAddPlaylist = document.createElement('button');
   btnAddPlaylist.className = 'btnAddPlaylist';
   btnAddPlaylist.innerText = 'Add Playlist';
   tytleBtnWrapper.appendChild(btnAddPlaylist);

   return tytleBtnWrapper;
}

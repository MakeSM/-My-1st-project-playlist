export function renderHeader() {
   const headerElement = document.createElement('header');

   const imageHeaderWrapper = document.createElement('div');
   imageHeaderWrapper.className = 'imageHeaderWrapper';

   const imageHeader = document.createElement('img');
   imageHeader.src = '../style/assets/images/queue_music.svg';
   imageHeaderWrapper.appendChild(imageHeader);
   headerElement.appendChild(imageHeaderWrapper);

   const titleHeader = document.createElement('h1');
   titleHeader.className = 'titleHeader';
   titleHeader.innerText = 'InPlaylist';
   headerElement.appendChild(titleHeader);

   return headerElement;
}

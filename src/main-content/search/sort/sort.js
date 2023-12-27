import { setSortDirection, getSortDirection } from '../../../data.js';

let clickCount = 0;

export function renderSort() {
   const sortButtonsContainer = document.createElement('div');
   sortButtonsContainer.className = 'sortButtonsContainer';
   sortButtonsContainer.innerText = 'Sort By: ';

   const sortButton = document.createElement('button');
   sortButton.className = 'ascSortButton';
   sortButton.innerText = 'Name';

   const img = document.createElement('img');
   img.src = '../../../../style/assets/images/Group 378.svg';
   sortButton.appendChild(img);

   const rotateImage = () => {
      if (clickCount % 2 == 0) {
         img.style.transform = 'rotate(180deg)';
      }
   };

   const ascListener = () => {
      if (clickCount % 2 == 0) {
         setSortDirection('asc');
      }
   };
   const descListener = () => {
      if (clickCount % 2 == 1) {
         setSortDirection('desc');
      }
   };

   sortButton.addEventListener('click', ascListener);
   sortButton.addEventListener('click', descListener);
   sortButton.addEventListener('click', () => {
      clickCount++;
   });

   sortButtonsContainer.appendChild(sortButton);

   if (getSortDirection() === 'asc') {
      rotateImage();
   } else if (getSortDirection() === 'desc') {
      rotateImage();
   }

   return sortButtonsContainer;
}

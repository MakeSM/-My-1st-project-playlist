export function renderSort() {
   const sortButtonsContainer = document.createElement('div');
   sortButtonsContainer.className = 'sortButtonsContainer';
   sortButtonsContainer.innerText = 'Sort By: ';

   const ascSortButton = document.createElement('button');
   ascSortButton.className = 'ascSortButton';
   ascSortButton.innerText = 'Name';

   const img = document.createElement('img');
   img.src = '../../../../style/assets/images/Group 378.svg';
   ascSortButton.appendChild(img);

   sortButtonsContainer.appendChild(ascSortButton);

   return sortButtonsContainer;
}

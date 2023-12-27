import { getSongs } from '../../../data.js';
export function renderSelectGenre() {
   const selectGenre = document.createElement('select');
   selectGenre.className = 'selectGenre';

   const selectGenreDefault = document.createElement('option');
   selectGenreDefault.value = 'default';
   selectGenreDefault.innerText = 'Genre';
   selectGenreDefault.style.display = 'none';

   selectGenre.add(selectGenreDefault);

   const selectRock = document.createElement('option');
   selectRock.value = 'rock';
   selectRock.innerText = 'rock';

   selectGenre.add(selectRock);

   const selectRap = document.createElement('option');
   selectRap.value = 'rap';
   selectRap.innerText = 'rap';

   selectGenre.add(selectRap);

   //
   selectGenre.addEventListener('change', () => {
      const selectedGenre = selectGenre.value;
      filterMusicByGenre(selectedGenre);
   });

   return selectGenre;
}

function filterMusicByGenre() {}

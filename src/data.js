let songs = [
   {
      genre: 'rock',
      artist: 'Luverance',
      title: 'Душа моя',
      duration: 2.55,
      year: 2022,
      url: '../style/assets/sound/Luverance - Душа моя.mp3',
   },
   {
      genre: 'rock',
      artist: 'Три дня дождя',
      title: 'Отпускай',
      duration: 3.27,
      year: 2022,
      url: '../style/assets/sound/Три дня дождя - Отпускай.mp3',
   },
   {
      genre: 'rock',
      artist: 'Luverance',
      title: 'Океаны',
      duration: 2.07,
      year: 2022,
      url: '../style/assets/sound/Luverance - Океаны.mp3',
   },
   {
      genre: 'rock',
      artist: 'saypink!',
      title: 'РЕБЕНОК САТАНЫ',
      duration: 2.36,
      year: 2022,
      url: '../style/assets/sound/saypink! - РЕБЕНОК САТАНЫ.mp3',
   },
];

let searchTerm = '';

let subscriber = null;
let sortDirection = null;

//publish-subscriber
export function subscribe(subscriberCallback) {
   subscriber = subscriberCallback;
}

//getter
export function getSongs() {
   const filteredSongs = songs.filter(
      (s) =>
         s.title.toLowerCase().indexOf(searchTerm) > -1 ||
         s.artist.toLowerCase().indexOf(searchTerm) > -1
   );
   return filteredSongs;
}

//setter
export function setSearchTherm(newSearchTerm) {
   searchTerm = newSearchTerm.toLowerCase().trim();
   subscriber();
}

//getter
export function getSearchTherm() {
   return searchTerm;
}
// getter/setter - инкапсуляция

/**
 * @param {'asc' | 'desc'} direction
 */
export function setSortDirection(direction) {
   sortDirection = direction;
   songs.sort((a, b) => {
      if (direction === 'asc') return a.year - b.year;
      return b.year - a.year;
   });

   subscriber();
}

export function getSortDirection() {
   return sortDirection;
}

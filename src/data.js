let songs = [
   {
      genre: 'rock',
      artist: 'Luverance',
      title: 'Душа моя',
      src: '../style/assets/images/luverance.jpg',
      duration: 2.55,
      url: '../style/assets/sound/Luverance - Душа моя.mp3',
      hot: true,
   },
   {
      genre: 'rock',
      artist: 'Три дня дождя',
      title: 'Отпускай',
      src: '../style/assets/images/otpyskai.jpg',
      duration: 3.27,
      url: '../style/assets/sound/Три дня дождя - Отпускай.mp3',
      hot: false,
   },
   {
      genre: 'rock',
      artist: 'Luverance',
      title: 'Океаны',
      src: '../style/assets/images/luverance.jpg',
      duration: 2.07,
      url: '../style/assets/sound/Luverance - Океаны.mp3',
      hot: true,
   },
   {
      genre: 'rock',
      artist: 'saypink!',
      title: 'РЕБЕНОК САТАНЫ',
      src: '../style/assets/images/saypink.jpg',
      duration: 2.36,
      url: '../style/assets/sound/saypink! - РЕБЕНОК САТАНЫ.mp3',
      hot: false,
   },
   // -----------------------------------------------------------
   {
      genre: 'rap',
      artist: 'Ghostemane',
      title: 'Andromeda',
      src: '../style/assets/images/ghostemane-a.jpg',
      duration: 2.07,
      url: '../style/assets/sound/Ghostemane - Andromeda.mp3',
      hot: true,
   },
   {
      genre: 'rap',
      artist: 'Ghostemane',
      title: 'Fed Up',
      src: '../style/assets/images/ghostemane.jpg',
      duration: 2.31,
      url: '../style/assets/sound/Ghostemane - Fed Up.mp3',
      hot: true,
   },
   {
      genre: 'rap',
      artist: 'KAIBA feat. Kamaara',
      title: 'Overdose',
      src: '../style/assets/images/kaiba.jpg',
      duration: 1.35,
      url: '../style/assets/sound/KAIBA feat. Kamaara - Overdose.mp3',
      hot: false,
   },
   {
      genre: 'rap',
      artist: 'OG Buda feat. Дора',
      title: 'Капли',
      src: '../style/assets/images/ogbuda.jpg',
      duration: 2.4,
      url: '../style/assets/sound/OG Buda, дора - Капли.mp3',
      hot: false,
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
         s.artist.toLowerCase().indexOf(searchTerm) > -1 ||
         s.genre.toLowerCase().indexOf(searchTerm) > -1
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
      if (direction === 'asc') return a.artist.localeCompare(b.artist);
      return b.artist.localeCompare(a.artist);
   });

   subscriber();
}

export function getSortDirection() {
   return sortDirection;
}

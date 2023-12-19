import { subscribe } from './data.js';
import { renderMain } from './main-content/main.js';

const rootElemnt = document.querySelector('#root');

function renderApp() {
   rootElemnt.innerHTML = '';

   rootElemnt.appendChild(renderMain());
}

renderApp();

subscribe(renderApp);

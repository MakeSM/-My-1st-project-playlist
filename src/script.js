import { renderHeader } from './header/header.js';
import { renderMain } from './main-content/main.js';

const rootElemnt = document.querySelector('#root');

function renderApp() {
   const headerElement = renderHeader();
   rootElemnt.appendChild(headerElement);

   const mainElement = renderMain();
   rootElemnt.appendChild(mainElement);
}

renderApp();

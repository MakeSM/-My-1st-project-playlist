import { renderHeader } from './header/header.js';

const rootElemnt = document.querySelector('#root');

function renderApp() {
   const headerElement = renderHeader();
   rootElemnt.appendChild(headerElement);
}

renderApp();

import { renderImgRock } from './info-panale/info-rock-img.js';
import { renderInfoPanelRock } from './info-panale/info-panale-rock.js';

export function renderSectionRock() {
   const sectionRock = document.createElement('section');
   sectionRock.className = 'sectionRock';

   const imgRockElement = renderImgRock();
   sectionRock.appendChild(imgRockElement);

   const infoPanelRockElement = renderInfoPanelRock();
   sectionRock.appendChild(infoPanelRockElement);

   return sectionRock;
}

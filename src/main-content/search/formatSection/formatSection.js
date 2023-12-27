export function fromatSection() {
   const formatSection = document.createElement('div');
   formatSection.className = 'formatSection';

   const lineFormat = document.createElement('button');
   lineFormat.className = 'format';

   formatSection.appendChild(lineFormat);

   const imgLineFormat = document.createElement('img');
   imgLineFormat.src = '../../../../style/assets/images/view_headline.svg';

   lineFormat.appendChild(imgLineFormat);

   const listFormat = document.createElement('button');
   listFormat.className = 'format';

   formatSection.appendChild(listFormat);

   const imgListFormat = document.createElement('img');
   imgListFormat.src = '../../../../style/assets/images/view_module.svg';

   listFormat.appendChild(imgListFormat);

   return formatSection;
}

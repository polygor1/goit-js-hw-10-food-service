import './changeTheme';
import createGallegy from './createGallery';
import menuDataElements from './menu.json';
import menuTemplateElement from './templates/menu.hbs';

let menu = document.querySelector('.js-menu');


createGallegy(menuDataElements, menuTemplateElement, menu);


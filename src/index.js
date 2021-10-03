import './changeTheme';
import menuDataElements from './menu.json';
import menuTemplateElement from './templates/menu.hbs';

let menu = document.querySelector('.js-menu');

function createFoodMenu(array) {
  const foodList = array.map(foodData => menuTemplateElement(foodData)).join('');
  menu.insertAdjacentHTML('beforeend', foodList);
};

createFoodMenu(menuDataElements);


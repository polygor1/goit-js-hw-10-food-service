import './changeTheme';
import menuDataElements from './menu.json';
import menuTemplateElement from './templates/menu.hbs';

let menu = document.querySelector('.js-menu');

// function createFoodMenu(array) {
//   const foodList = array.map(food => menuTemplateElement(food)).join('');
//   menu.insertAdjacentHTML('beforeend', foodList);
// };
// createFoodMenu(menuDataElements);

const foodMenu = menuDataElements.reduce((acc, item) =>
  acc + menuTemplateElement(item), "");
menu.insertAdjacentHTML("afterbegin", foodMenu);

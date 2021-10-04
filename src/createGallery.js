export default
  function createGallegy(arrayData, fragmentHTML, insertPoint) {
  insertPoint.insertAdjacentHTML("afterbegin", arrayData.reduce((acc, item) => acc + fragmentHTML(item), ""))
};

// function createFoodMenu(array) {
//   const foodList = array.map(food => menuTemplateElement(food)).join('');
//   menu.insertAdjacentHTML('beforeend', foodList);
// };
// createFoodMenu(menuDataElements);

// const foodMenu = menuDataElements.reduce((acc, item) =>
//   acc + menuTemplateElement(item), "");
// menu.insertAdjacentHTML("afterbegin", foodMenu);
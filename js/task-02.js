const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const productContainer = document.querySelector('#ingredients');
const newArray = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const itemsLi = document.createElement('li');
  itemsLi.classList.add('item');
  itemsLi.textContent = ingredients[i];
  
  newArray.push(itemsLi);
}

productContainer.append(...newArray);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemList = ingredients.map((ingredient) => {
const list = document.createElement("li");
list.classList.add("item");
list.textContent = ingredient
  const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(list)
})


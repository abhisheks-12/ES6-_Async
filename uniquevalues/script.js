"use strict";

// unique values

const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

const categories = menu.map((item) => item.category) ;
console.log(categories);
const setCategories = [...new Set(categories)];
console.log(setCategories);

// map -get all all instance
// new set - narrow down
// ['all',...] - turn it back to array

const result = document.querySelector('.result');
result.innerHTML = setCategories.map((categories) => {
  return `<button>${categories}</button>`
})
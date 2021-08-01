'use strict';

// after 1 sec first red
// after 2 sec second blue
// after 3 sec third green

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  setTimeout(() => {
    first.style.color = 'red';
    setTimeout(() => {
      second.style.color = 'blue';
      setTimeout(() => {
        third.style.color = 'green';
      }, 2000);
    }, 3000);
  }, 1000);
});

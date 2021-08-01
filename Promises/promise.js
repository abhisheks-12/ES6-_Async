'use strict';

// ******************************* Promises *********************

// consume / use promise

// pending,Rejected ,fullfilled

const value = 2;

const promise = new Promise(function (resolve, reject) {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === value) {
    resolve('You guess correctly');
    // resolve('Hello World');
  } else {
    reject('wrong number');
  }
});
console.log(promise);

promise.then(res => console.log(res)).catch(err => console.log(err));

//************************* Promises Example ************************** */

// .first red after 1 sec
// .second green after 3 sec
// .third blue after 3 sec

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red')
    .then(() => addColor(3000, '.second', 'blue'))
    .then(() => addColor(2000, '.third', 'green'))
    .catch(err => console.log(err));
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise(function (resolve, reject) {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such elemnt : ${selector}`);
    }
  });
}

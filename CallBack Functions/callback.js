'use strict';

function makeUppperCase(value) {
  console.log(value.toUpperCase());
}
// makeUppperCase('peter');

function resverseString(value) {
  console.log(value.split('').reverse().join(''));
}

function handelName(name, cb) {
  const fullName = `${name}  smith`;
  cb(fullName);
  // some more logic
}

handelName('peter', makeUppperCase);
handelName('peter', resverseString);

// How call back works in nutshell
handelName('susan', function (value) {
  console.log(value.toUpperCase());
});

// Event listner call back

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  btn.style.display = 'none';
});


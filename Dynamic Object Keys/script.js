'use strict';

// acess using .dot
const person ={
  name:'Bond'
}
console.log(person.name)
// setting age
person.age = 39;
console.log(person);


// // acessing value using square 
const items = {
  'featured-items':['item1','item2']
}
console.log(items['featured-items']);
console.log(person['name']);

let appState = 'loading';
const  keyName = 'computer';
// see carefully
const app = {
  [appState]:true
}
app[keyName] = 'Apple';
console.log(app)

const state = {
  loading : true,
  name:'',
  job:''
}

function updateState(key,value){
  state[key] = value;
}

updateState('name','jhon');
updateState('job','SE');
updateState('loading','false');
updateState('options','[]')

console.log(state);

////////////////////////////////////////////////

const load = {
  data : 'true',
  dataInfo:'',
  serverName:''
}

function loadData(obj,key,value){
  obj[key] = value;
}

loadData(load,'dataInfo','Tech');
loadData(load,'serverName','AWS');
console.log(load);
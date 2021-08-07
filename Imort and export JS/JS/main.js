//  we can us this together we can change Name also
// import { double as utilDouble , name } from "./util.js";

// here we imported seperatley
// import { name } from './util.js';

// importing from another file here we imported to 
import { Water } from './util.js';
Water();


// importing all files at same time
import * as util from './util.js';
console.log(util.double(5));
console.log(util.name)
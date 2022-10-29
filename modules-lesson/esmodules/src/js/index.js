// import {a, b, hello as c, arr} from "./modules/test.js";
// import * as fromTest from "./modules/test.js";
import num, * as fromTest from "./modules/test.js";

const { a, b, hello:c, arr } = fromTest;

console.log(a);
console.log(b);

console.log(c("John"));
console.log(arr);

console.log(num);
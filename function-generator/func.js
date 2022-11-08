"use strict";

function* username () {
	yield "a";
	yield "l";
	yield "e";
	yield "x";
}

// for (let s of username()) {
// 	console.log(s);
// }

// const some = username();

// console.log(some.next());
// console.log(some.next());
// console.log(some.next());
// console.log(some.next());
// console.log(some.next());

function* counter (n) {
	for (let i = 0; i <= n; i++) {
		yield i;
	}
}

let state = true;
const count = counter(10);
let c;

while (state) {
	c = count.next();
	if (c.done === true) state = false;
	console.log(c);
}

do {
	c = count.next();
	console.log(c);
} while (c.done === false);

// const count = counter(4);

// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
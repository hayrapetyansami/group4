"use strict";

setTimeout(() => console.log("Init"), 0);

Promise.resolve()
	.then(() => console.log("Resolved 1"))
	.then(() => console.log("Resolved 1 test"));

queueMicrotask(() => console.log("I'm here"));

Promise.resolve()
	.then(() => console.log("Resolved 2"));

Promise.resolve()
	.then(() => console.log("Resolved 3"));

console.log("Like my code here");

// microtask: Promise (then, catch, finnaly, await), queueMicrotask()
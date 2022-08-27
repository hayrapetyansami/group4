"use strict";

let i = 0;
const second = setInterval(() => {
	i++
	console.log(i);
	if (i === 100) {
		console.log("finished");
		clearInterval(second);
	}
}, 20);

const first = setTimeout(() => {
	console.log("hello dear console");
	clearTimeout(first);
}, 1985);
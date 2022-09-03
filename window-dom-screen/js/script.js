"use strict";

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(`width: ${width}, height: ${height}`);

// box.style.boxSizing = "border-box";

// btn.addEventListener("click", () => {
// 	// box.style.height = box.scrollHeight + 2 + "px";
// 	console.log(box.scrollTop);
// });

// box.addEventListener("scroll", (e) => {
// 	console.log(e.target.scrollTop);
// });

/* 
	offsetWidth: Number
	offsetHeight: Number
	offsetTop: Number
	offsetLeft: Number
	offsetParent: HTML TAG
*/

// console.log(box.getBoundingClientRect());

// const abrakadabra = window.getComputedStyle(box);
// console.log(abrakadabra.display);

// console.log(window.getComputedStyle(box).getPropertyValue("display"));
// console.log(window.getComputedStyle(box).display);

// if (abrakadabra.display === "block") {
// 	box.style.display = "flex"
// } else {
// 	box.style.display = "none"
// }

// const x = window.screenX;
// const y = window.screenY;

// console.log(x);
// console.log(y);
"use strict";

const box = document.getElementById("box");

box.addEventListener("touchmove", (e) => {
	const x = e.touches[0].pageX, 
	y = e.touches[0].pageY;
	e.target.style.cssText = `
		transform: translateX(${x}px) translateY(${y}px)
	`;
});

// box.addEventListener("touchstart", (e) => {
// console.log("Կպել ենք");
// });

// box.addEventListener("touchend", () => {
// 	console.log("Հանել ենք");
// });

// box.addEventListener("touchmove", () => {
// 	console.log("Շարժում ենք");
// });

// e.touches
// e.targetTouches
// e.changedTouches
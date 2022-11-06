"use strict";

const animeOneBtn = document.querySelector("#anim1 button");
const animeOneBox = document.querySelector("#anim1 #box-wrapper #box");
const animeTwoBtn = document.querySelector("#anim2 button");
const animeTwoImg = document.querySelector("#anim2 img");

// function customAnimation () {
// 	let x = 0;

// 	const id = setInterval(frame, 10);

// 	function frame () {
// 		if (x === 300 - 12) {
// 			clearInterval(id);
// 		} else {
// 			x++;
// 			animeOneBox.style.cssText = `
// 				top: ${x}px;
// 				left: ${x}px;
// 			`;
// 		}
// 	}
// }

// animeOneBtn.addEventListener("click", customAnimation);

let x = 0;
function reqAnimation () {
	x++;
	animeOneBox.style.cssText = `
		top: ${x}px;
		left: ${x}px;
	`;

	if (x < 300 - 12) {
		requestAnimationFrame(reqAnimation);
	}
}

// const newID = requestAnimationFrame(reqAnimation);
// cancelAnimationFrame(newID)

animeOneBtn.addEventListener("click", () => requestAnimationFrame(reqAnimation));


animeTwoBtn.addEventListener("click", newAnimate);

let animalAnimation;

function newAnimate () {
	if (!animalAnimation) {
		animalAnimation = animeTwoImg.animate([
			{filter: "hue-rotate(0deg)"},
			{filter: "hue-rotate(90deg)"},
			{filter: "hue-rotate(180deg)"},
			{filter: "hue-rotate(270deg)"},
			{filter: "hue-rotate(360deg)"},
		], {
			duration: 500,
			iterations: Infinity
		})
	} else if (animalAnimation.playState === "paused") {
		animalAnimation.play();
	} else {
		animalAnimation.pause();
	}
}

// {transform: "translateY(0px)"},
// {transform: "translateY(50px)"},
// {transform: "translateY(-50px)"},
// {transform: "translateY(0px)"},
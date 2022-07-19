"use strict";

// BOM => Browser Object Model
// DOM => Document Object Model

// old methods
const _limeID = document.getElementById("lime");
const _btns = document.getElementsByTagName("button");
const _flags = document.getElementsByClassName("flag");
const _text = document.getElementsByName("test");

/* 
console.log(
	_text[0]
	.textContent
	.trim()
	.toUpperCase()
	.slice(0, 123) 
	+ "..."
);
*/

// new and normal methods

const limeID = document.querySelector("#lime");
const limeClass = document.querySelector(".lime");
const text = document.querySelector("p");
const dataText = document.querySelector("[data-text]");
const nameText = document.querySelector("p[name=\"test\"]");
const wrapper = document.querySelector(".wrapper > .box");

const wrapperBoxes = document.querySelectorAll(".box")
const flags = document.querySelectorAll(".flag");
const btns = document.querySelectorAll("button");


console.log("NODE LIST");
for (let item in flags) {
	console.log(item);
}

console.log("________________________________________\n");

console.log("HTML Collection");
for (let item in _flags) {
	console.log(item);
}
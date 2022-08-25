"use strict";

const wrapper = document.querySelector("#wrapper");

// e.target.nodeName === "BUTTON"
// e.target.tagName === "BUTTON"
// e.target.localName === "button"
// e.target.type === "submit"

// wrapper.addEventListener("click", (e) => {
// 	if (e.target && e.target.type === "submit") {
// 		console.log(e.target);
// 	}
// });

wrapper.addEventListener("click", (e) => {
	if (e.target && e.target.matches("button")) {
		console.log(e.target);
	}
});

for (let i = 5; i <= 14; i++) {
	const elem = document.createElement("button");
	elem.textContent = i;

	if (i % 2 === 0) {
		elem.classList.add("thisClass")
	}
	wrapper.append(elem);
}
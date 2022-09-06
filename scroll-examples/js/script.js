"use strict";

const text = document.querySelector("#text_box p");
const topBtn = document.querySelector("[data-top]");
const bottomBtn = document.querySelector("[data-bottom]");
const sitv = document.querySelector("[data-sitv]");
const span = document.querySelector("span");

const topElemBtn = document.querySelector("#top");
const bottomElemBtn = document.querySelector("#bottom");

bottomBtn.addEventListener("click", () => {
	// text.scroll(0, text.scrollHeight);
	// text.scrollTo(0, text.scrollHeight);
	// text.scrollBy(0, text.scrollHeight);

	// այս գրելաձևը մենք կարող ենք օգտագործել վերևում նշված բոլոր մեթոդների դեպքում
	text.scroll({
		top: text.scrollHeight,
		behavior: "smooth"
	});
});

topBtn.addEventListener("click", () => {
	// text.scroll(0, -text.scrollHeight);
	// text.scrollTo(0, -text.scrollHeight);
	// text.scrollBy(0, -text.scrollHeight);

	// այս գրելաձևը մենք կարող ենք օգտագործել վերևում նշված բոլոր մեթոդների դեպքում
	text.scroll({
		top: -text.scrollHeight,
		behavior: "smooth"
	});
});

sitv.addEventListener("click", () => {
	// block => start, center, end
	span.scrollIntoView({
		block: "center",
		behavior: "smooth"
	});
});

/*
	elem.scrollX = READ ONLY;
	elem.scrollY = READ ONLY;
*/

window.addEventListener("scroll", () => {
	if (window.scrollY >= 500) {
		topElemBtn.style.display = "block";
		topElemBtn.addEventListener("click", () => {
			document.documentElement.scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		});
	} else {
		// topElemBtn.style.display = "";
		topElemBtn.removeAttribute("style");
	}
});

bottomElemBtn.addEventListener("click", () => {
	document.documentElement.scrollIntoView({
		block: "end",
		behavior: "smooth"
	});
});
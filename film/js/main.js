"use strict";

const poster = document.querySelector("header img");
const title = document.querySelector("title");
const advs = document.querySelectorAll("#main_promo .mp");
const films = document.querySelector("#films");

const _DB = {
	movies: [
		"Logan", "Spider-Man","The Seven Samurai",
		"Bonnie and Clyde", "Reservoir Dogs", "Doctor Zhivago",
		"The Deer Hunter", "Rocky", "Crid"
	]
};

advs.forEach(adv => adv.remove());
poster.src = "img/bg2.jpg";

if (poster.src.slice(31) === "bg1.jpg") {
	poster.alt = "Gemini Man";
} else {
	poster.alt = "Hitman's Wife's Bodyguard";
}

title.textContent = poster.alt;

_DB.movies.forEach((film, index) => {
	films.innerHTML += `
		<p>
			${index + 1}. ${film}
			<span data-rm>&#128465</span>
		</p>
	`;
});
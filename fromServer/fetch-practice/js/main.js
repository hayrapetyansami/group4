"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
	e.preventDefault();

	const formData = new FormData(this);

	fetch("server/server.php", {
		method: "POST",
		body: formData
	})
	.then(data => data.text())
	.then(data => console.log(data))
	.then(() => console.log(10 + 20))
	.catch(err => console.log(err))
	.finally(() => console.log("all is okey"))
});
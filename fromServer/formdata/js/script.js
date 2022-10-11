"use strict";
const subscribeForm = document.querySelector("form#subscribe");
const signInForm = document.querySelector("form#sign-in");

const messages = {
	waiting: "Waiting...",
	success: "Success !",
	failure: "Something is wrong. Please try again",
	notFound: "Please contact: support@chgitem.com",
	error: "Server error"
}

// without JSON
subscribeForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const message = document.createElement("p");
	message.classList.add("message");
	e.target.append(message);

	const data = new FormData(e.target);
	message.textContent = messages.waiting;

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	// request.setRequestHeader("content-type", "multipart/form-data");
	request.send(data);

	request.addEventListener("load", () => {
		if (request.status === 200) {
			message.textContent = messages.success;
		} else if (request.status === 404) {
			message.textContent = messages.notFound;
		} else if (request.status >= 500) {
			message.textContent = messages.error;
		} else {
			message.textContent = messages.failure;
		}
	});

	e.target.reset();
});

// with JSON
signInForm.addEventListener("submit", function (e) {
	e.preventDefault();

	const data = new FormData(this);
	const dataObj = {};
	data.forEach((value, key) => {
		dataObj[key] = value;
	});

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	request.setRequestHeader("content-type", "application/json");
	request.send(JSON.stringify(dataObj));

	// request.addEventListener("load", () => {
	// 	if (request.status === 200) {
	// 		console.log(request.response);
	// 	}
	// });

	e.target.reset();
});
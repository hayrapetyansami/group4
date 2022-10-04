"use strict";

// AJAX => Asyncron JavaScript and XML

const amd = document.querySelector("#amd");
const usd = document.querySelector("#usd");

amd.addEventListener("input", (e) => {
	const request = new XMLHttpRequest() // XHR

	// 1) method, 2) url, 3) async, 4) username, 5) password
	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	// status, statusText, response, readyState
	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.response);
			usd.value = (
				parseFloat(e.target.value) / parseFloat(data.value.usd)
			).toFixed(2);
		}
	});
});

usd.addEventListener("input", function () {
	const request = new XMLHttpRequest();

	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);

			amd.value = (
				parseFloat(data.value.usd) * parseFloat(this.value)
			).toFixed(2);
		}
	});
});

// const isOnline = window.navigator.onLine;
// if (isOnline) {
// 	alert('You are online');
// } else {
// 	alert('You are not online');
// }
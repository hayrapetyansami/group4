"use strict";

const elem = document.createElement("div");
document.body.append(elem);

// < 10
setInterval(() => {
	const date = new Date();
	elem.innerHTML = `
		<span>${date.getHours()}</span> :
		<span>${date.getMinutes()}</span> :
		<span>${date.getSeconds()}</span>
		<!--<span>${date.getMilliseconds()}</span>-->
	`;
}, 1000);
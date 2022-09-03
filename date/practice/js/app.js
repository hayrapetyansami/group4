"use strict";

function countDownLogic (endTime) {
	const total = Date.parse(endTime) - Date.parse(new Date());
	const days = Math.floor( total / (1000 * 60 * 60 * 24) );
	const seconds = Math.floor( (total / 1000) % 60 );
	const minutes = Math.floor( (total / 1000 / 60) % 60 );
	const hours = Math.floor( (total / (1000 * 60 * 60)) % 24);

	return {
		"total" : total,
		"days" : days,
		"seconds" : seconds,
		"minutes" : minutes,
		"hours" : hours
	}
}

function countDownIsNeedZero (n) {
	return n >= 0 && n < 10 ? `0${n}` : n;
}

function countDownCreateHTML (elementType, day, hour, minute, second) {
	const parent = document.querySelector("#count-down-app");
	parent.innerHTML = `
		<${elementType}>${day < 0 ? "00 " + " : " : day + " : "}</${elementType}>
		<${elementType}>${hour < 0 ? "00 " + " : " : hour + " : "}</${elementType}>
		<${elementType}>${minute < 0 ? "00 " + " : " : minute + " : "}</${elementType}>
		<${elementType}>${second < 0 ? "00" : second}</${elementType}>
	`;

	return elementType;
}

function countDownUpdate (elementType, endTime) {
	const timer = setInterval(() => {
		const {total, days, hours, minutes, seconds} = countDownLogic(endTime);
		countDownCreateHTML(
			elementType,
			countDownIsNeedZero(days),
			countDownIsNeedZero(hours),
			countDownIsNeedZero(minutes),
			countDownIsNeedZero(seconds)
		);

		if (total <= 0 ) {
			clearInterval(timer);
		}
	}, 1000);
}

function countDownAppInit (elementType, endTime) {
	countDownUpdate (elementType, endTime);
}

countDownAppInit("span", "2022-09-20");
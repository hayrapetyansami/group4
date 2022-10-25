"use strict";

const { persons, setRing } = require("./modules/ring");
const ui = require("./modules/ui");

setRing(persons, "Frodo");

for (const p of persons) {
	if (p.hasRing === true) {
		console.log(p);
	}
}

document.body.prepend(ui())
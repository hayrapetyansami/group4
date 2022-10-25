"use strict";

const persons = [
	{ name: "Frodo", hasRing: false },
	{ name: "Bilbo", hasRing: false },
	{ name: "Legolass", hasRing: false },
	{ name: "Sauron", hasRing: false },
	{ name: "Gendalf", hasRing: false }
];

function setRing(array, owner) {
	array.forEach(person => {
		if (person.name === owner) {
			person.hasRing = true;
		} else {
			person.hasRing = false;
		}
	});
}

module.exports = { persons, setRing };
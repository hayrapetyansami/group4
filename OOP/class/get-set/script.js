"use strict";

// GET & SET

const person = {
	name: "John Smith",
	age: 29,

	get userName () {
		return this.name
	},

	set userName (param) {
		this.name = param;
	}
}

console.log(person.userName);
person.userName = "Alex";
console.log(person.userName);
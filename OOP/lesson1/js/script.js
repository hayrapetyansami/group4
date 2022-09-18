"use strict";

const soldier = {
	healt: 100,
	armor: 150,
	damage: 50,
	run(){
		console.log("I'm running sr. !!!");
	}
};

const john = {
	name: "John Smith",
	armor: 31
}

// այս մեթոդը չենք օգտագործելու OLD
// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);
const alex = Object.create(soldier);

console.log(`JOHN ARMOR: ${john.armor}`);
console.log(`ALEX ARMOR: ${alex.armor}`);

alex.run();
john.run()
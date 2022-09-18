"use strict";

function Person (fullName, age, country) {
	this.fullName = fullName;
	this.age = age;
	this.country = country;
	this.sayHello = function () {
		console.log(`Hello dear ${fullName}`);
	};
	this.myCoutry = function () {
		console.log(`${fullName} is from ${country}`);
	};
	this.isMarried = function (state) {
		state ? 
			console.log(`${fullName} is Married`)
			: 
			console.log(`${fullName} is Single`);
	}
}

const john = new Person("John Smith", 39, "USA");
const alex = new Person("Alex Weedo", 41, "Germany");

john.isMarried(false);
alex.isMarried(true);
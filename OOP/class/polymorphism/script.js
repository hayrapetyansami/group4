"use strict";

// օրինակ 1
// առանց պոլիմորֆիզմի
function welcome () {
	console.log("Welcome to our website");
}

function hello (userName) {
	console.log(`Hello dear ${userName}`);
}

function greetings (firstName, lastName) {
	console.log(`Greetings dear ${firstName} ${lastName}`);
}

function luckyNumber (n) {
	console.log(`Lucky number is ${n}`);
}

welcome();
hello("John");
greetings("John", "Smith");
luckyNumber(9);

// պոլիմորֆիզմով
function allInOne (...params) {
	if (params.length === 0) {
		console.log("Welcome to our website");
	} else if (params.length === 1 && typeof(params[0]) === "string") {
		console.log(`Hello dear ${params[0]}`);
	} else if (params.length === 1 && typeof(params[0]) === "number") {
		console.log(`Lucky number is ${params[0]}`);
	} else if (params.length === 2 && typeof(params[0]) === "string") {
		console.log(`Greetings dear ${params[0]} ${params[1]}`);
	} else {
		console.log("Not found");
	}
}

allInOne();
allInOne("John");
allInOne("John", "Smith");
allInOne(7);

// օրինակ 2
// առանց պոլիմորֆիզմի

const data = [
	{name: "John", id: 100},
	{name: "Alex", id: 101},
	{name: "Mike", id: 102}
];

// առանց պոլիմորֆիզմի

// universal find function
// function find(key, item) {
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i][key] === item) {
// 			console.log(data[i]);
// 			break;
// 		} else if (i === data.length - 1 && data[i][key] !== item) {
// 			console.log("Not Found");
// 		}
// 	}
// }

// find("name", "John");
// find("id", 102);

function filteredName (name) {
	return data.filter(obj => obj.name === name);
}

function filteredId (id) {
	return data.filter(obj => obj.id === id);
}

console.log(filteredName("John"));
console.log(filteredId(101));

// պոլիմորֆիզմով 

function find (...args) {
	if (typeof(args[0]) === "string") {
		return data.filter(obj => obj.name === args[0]);
	} else if (typeof(args[0]) === "number") {
		return data.filter(obj => obj.id === args[0]);
	}
}

console.log(find("John"));
console.log(find(102));

// օրինակ 3 || class

class Animal {
	say() {
		console.log("rrr, I'm an animal");
	}
}

class Dog extends Animal {
	say () {
		console.log("woof, woof");
	}
}

class Cat extends Animal {
	say () {
		console.log("meow, meow");
	}
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// animal.say();
// dog.say();
// cat.say();

// հարցնում ենք արդյո՞ք dog object-ը օրինակ է նշված class-ներին
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Cat); // false
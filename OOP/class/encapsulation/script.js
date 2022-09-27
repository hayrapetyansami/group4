"use strict";

// old encapsulation method and get/set

function User (email) {
	this.email = email;
	// this._password = password;
	let pass = "Qwerty#44!+smith";

	this.say = function () {
		// console.log(`email: ${this.email}, password: ${this._password}`);
		console.log(`email: ${this.email}, password: ${pass}`);
	}

	// getter & setter imitation

	this.get = function () {
		return pass;
	}

	this.set = function (newPass) {
		pass = newPass;
	}
}

// const john = new User("john-smith@gmail.com");
// console.log(john.get()); // get
// john.set("test"); // set
// console.log(john.get()); // get

class User {
	constructor (email, password) {
		this.email = email;
		// this._password = password;
	}

	#password = "alex#777";

	say() {
		// console.log(`email: ${this.email}, password: ${this._password}`);
		console.log(`email: ${this.email}, password: ${this.#password}`);
	}

	get pass () {
		return this.#password;
	}

	set pass (newPass) {
		this.#password = newPass;
	}
}

const alex = new User("alex93@mail.ru");

// console.log(alex.#password); // error
// console.log(alex.password); // undefined
// alex.#password = "test"; // error

console.log(alex.pass);
alex.pass = "test";
console.log(alex.pass);

// static

class Main {
	static hello () {
		console.log("Hello from Main class");
	}

	static res = 55;
}

class Test extends Main {}

Main.hello();
Test.hello();

// ներքևի կոդը չի աշխատելու
// const joe = new Main();
// console.log(joe.res);
// joe.hello()


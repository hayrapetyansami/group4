// "use strict";
// function context (a, b) {
// 	console.log(this); // undefined || globalThis

// 	function calc () {
// 		console.log(this); // undefined || globalThis
// 		return a + b;
// 	}

// 	return calc();
// }

// console.log(context(4, 5)); // 9

// const obj = {
// 	num1: 21,
// 	num2: 44,
// 	num3: 65,
// 	show: function () {
// 		console.log(this); // obj

// 		// function go () {
// 		// 	console.log(this); // undefined => globalThis => Window
// 		// }
// 		// go();

// 		const go = () => {
// 			console.log(this); // obj
// 		}
// 		go();
// 	}
// }

// obj.show();

// function User (name = "empty", age = 0) {
// 	this.name = name;
// 	this.age = age;
// }

// const john = new User("John Smith", 45);
// const alex = new User("Alex Wood", 27);

// console.log(new User());
// console.log(john);
// console.log(alex);

// CALL, APPLY, BIND

// function person (city = "Yerevan", n) {
// 	console.log(`${this.fullName} from ${city}`);
// 	console.log(((this.a + this.b) * this.c) * n);
// }

// const personData = {
// 	fullName: "John Smith",
// 	a: 10,
// 	b: 20,
// 	c: 30
// }

// const arr = ["Yerevan", 2];

// person.call(personData, "NY", 2);
// person.apply(personData, arr);

// function double (n) {
// 	console.log(`n: ${n}`);
// 	console.log(`this: ${this}`);
// 	return this * n;
// }

// const sum = double.bind(2); // ստեղ double-ի THIS-ին տալիս ենք արժեք

// console.log(sum(5)); // ստեղ double-ի N-ին տալիս ենք ինչ-որ թիվ
// console.log(sum(7)); // ստեղ double-ի N-ին տալիս ենք ինչ-որ թիվ
// console.log(sum(9)); // ստեղ double-ի N-ին տալիս ենք ինչ-որ թիվ

// EVENT !== THIS
// const btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
// 	console.log(this); // HTML ELEMENT => THIS
// 	console.log(e.target); // HTML ELEMENT => EVENT
// 	this.style.background = "#f00";
// });

// btn.addEventListener("click", (e) => {
// 	// console.log(this); // window
// 	console.log(e.target);
// 	e.target.style.background = "#00f";
// });

/*
	1) եթե "use strict"-ը միացված ա, ապա մենք ստանում ենք undefined,
	հակառակ դեպքում, եթե "use strict"-ը անջատված ա, ապա THIS-ը հղվում է
	դեպի globalThis (browser-ում window || node-ում global Object)

	2) Object-ի ներսում ստեղծված մեթոդի (function) THIS-ը հղվում է դեպի այդ Object-ին։
	Եթե մեթոդը (function) լինի սլաքով (arrow), ապա նա կվերցնի իր ծնողի THIS-ը

	3) Function constructor-ի և class-ի մեջ գրված THIS-ը դա նոր ստեղծվող (new Some())
	Object-ի նախատիպն ա (prototype) KEY: VALUE

	4) arrow function-ի THIS-ը իր ծնողի THIS-ն ա, arrow function-ը չունի իր սեփական THIS-ը

	5) կոնտեքստը (this-ը) ձեռքով կապելու համար մենք օգտագործում ենք՝
	call, apply, bind

	Հիշում ենք, որ թե call-ի, թե apply-ի ու թե bind-ի առաջին արգումենտը դա THIS-ն է
	Հիշում ենք, որ Bind-ը մեզ վերադարձնում է նույն ֆունկցիան փոփոխված
*/
"use strict";

// JSON => JavaScript Object Notation
// JSON-ը չի ընդունուըմ Method կամ undefined ...
// JSON.stringify => Object-ը դարձնում է JSON (և զանգվածը)
// JSON.parse => JSON-ը դարձնում է Object (կամ զանգված)
// JSON-ը թույլ է տալիս խորացված կլոնավորում

const person = {
	name: "Hayk",
	age: 27,
	isAdult: true,
	family: {
		parents: {
			father: "Davit",
			mother: "Yelena"
		},
		siblings: {
			brother: "Tigran",
			sister: "Nelly"
		}
	}
}

const personCopy = JSON.parse(JSON.stringify(person));

person.family.siblings.brother = "Tony";
person.family.siblings.cauzen = "Evelina";

console.log(person);
console.log(personCopy);

// const obj = {
// 	country: "Armenia",
// 	city: 'Yerevan',
// 	population: 1200000,
// 	park: "Siraharneri",
// 	test: undefined,
// 	some: null,
// 	say(){
// 		return this
// 	}
// }

// const data = JSON.stringify(obj, undefined, 4); // JSON
// console.log(JSON.parse(data));

// // const arr = [1, 2, 3, undefined];
// // const toJSON = JSON.stringify(arr);
// // console.log(JSON.parse(toJSON));
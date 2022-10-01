"use strict"

const arr = [55, 17, 9, 6, 52, 31, 46, 78, 92];

// FOR EACH (value, index, array)
arr.forEach((value, index, array) => {
	console.log(`${index}: ${index} => (${array})`);
	console.log(array);
});

arr.forEach((item, index) => console.log(index, item));

// FILTER (value, index, array)
const filteredArr = arr.filter(value => value > 48);

console.log(filteredArr);
console.log(arr);

const arrForFilter = [24, "sda", true, null, undefined, "sada", 157];
const filteredArrForFilter = arrForFilter.filter(item => {
	return (
		typeof(item) === "string" || typeof(item) === "number"
	)
});
console.log(filteredArrForFilter);

// MAP (value, index, array)
const data = [2800, 3400, 4200, 4900, 5100, 5999];
const newData = data.map(value => value);

data.push(7, 8, 9, 10, 11, 12);

console.log(data);
console.log(newData);

const person = [
	{name: "John", age: 34},
	{name: "Alex", age: 31},
	{name: "Tom", age: 18},
	{name: "Alice", age: 13},
	{name: "Melica", age: 17}
];

const newPerson = person.map(obj => obj).filter(obj => obj.age >= 18);
console.log(newPerson);

// REDUCE
const prices = [800, 2800, 3400, 4200, 5800];
const sale = [250, 1290, 2410, 2999, 3556];

const all = [...prices, ...sale];

const result = all.reduce((total, current, index, arr) => {
	return total + current;
}, 0);

console.log(result); // 17000

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const newReduce = letters.reduce((result, current, index) => {
	// եթե ցանկանում ենք ուղարկել որպես Object
	return {...result, [current]: index};

	// եթե ցանկանում ենք ուղարկել որպես Array
	// return [...result, index];
}, {});

console.log(newReduce);


// SOME & EVERY || true / false
const forTest = [54, 26, 78, 95, 21, 15, 224, "15"];

// SOME === ||
const some = forTest.some(item => typeof(item) === "string");
console.log(some); // true

// EVERY === &&
const every = forTest.every(item => typeof(item) === "number");
console.log(every); // false

// CONCAT
const xArr = [2, 4, 6];
const yArr = [3, 5, 7];

const x = [].concat(xArr, yArr); // concat
const y = [...xArr, ...yArr]; // rest

console.log([].concat(xArr, yArr));
console.log(xArr.concat(yArr));
console.log(x);
console.log(y);

// FIND
const findArr = [7, 50, 42, 36, 65, 33];
const found = findArr.find(item => item > 30);
const foundIndex = findArr.findIndex(item => item === 36);
const foundLast = findArr.findLast(item => item > 35);

// console.log(found);
// console.log(foundIndex);
// console.log(foundLast);

// FILL

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
const c = [1, 2, 3, 4];

a.fill(8, 2, 3); // [ 1, 2, 8, 4 ]
b.fill(5, 1) // [ 1, 5, 5, 5 ]
c.fill(3) // [ 3, 3, 3, 3 ]
 
// console.log(a);
console.log(b);
// console.log(c);

//  ARRAY

const btns = document.querySelectorAll("button");
const toArray = Array.from(btns);

console.log(Array.isArray(btns)); // false
console.log(Array.isArray(toArray)); // true

const chgitem = Array.of(5, 10, "str", "hello", true, false, () => {}, new Date());

const chgitemFiltered = chgitem.filter(item => typeof(item) === "string" || typeof(item) === "number");

console.log(chgitemFiltered);
"use strict";

// new RegExp("pattern", "flags");

// example 1
// const answer = prompt("Type your name...");
// const reg = /n/gi;
// console.log(answer.match(reg));
// console.log(reg.test(answer));

// example 2
// const pass = prompt("Type your password...");
// console.log(pass.replace(/./g, "*"));

// example 3
// const age = prompt ("Type your age...");
// const reg = /\d{2}/g;
// console.log(age.match(reg));

// example 4
// const telNumber = "045:99:99:99";
// console.log(telNumber.replace(/:/g, "-"));

// example 5
// const username = prompt("Type your username...");
// const reg = /john/gi;
// console.log(username.match(reg));

// example 6
const str = "Hello, my name is R2D2, and i live in B3R7IN, AA3V8V9";
console.log(str.match(/\w*\d/g));
console.log(str.match(/\d/g));
console.log(str.match(/\a/g));
console.log(str.match(/\W\w{2}\W/gi));

// g - global
// i - registr
// m - multiline
// w - word
// d - digit
// D - non-digit
// W - non-word

//https://regex101.com/
const fs = require("fs");

console.log("init");

setTimeout(() => {
	console.log("Hello");
}, 1000);

setImmediate(() => {
	console.log("Immediate");
});

fs.readFile(__filename, () => {
	console.log("File Readed");
});

fs.writeFile(__dirname+"/"+"report.txt", "Hello dear report !!!", () => {
	console.log("File Writed");
});

setTimeout(() => {
	for (let i = 0; i < 5_500_000_000; i++) {}
	console.log("Done One  Million");
	Promise.resolve()
		.then(() => console.log("microtask inside loop #1"));
	process.nextTick(() => console.log("macrotask inside loop #1"));
}, 0);

Promise.resolve()
	.then(() => console.log("microtask #1"));

process.nextTick(() => console.log("macrotask #1"));
process.nextTick(() => console.log("macrotask #2"));
process.nextTick(() => console.log("macrotask #3"));
process.nextTick(() => console.log("macrotask #4"));

console.log("exit");

/*
	ցանկացած macroTask ավելի արագ է աշխատում
	քան ցանկացած microTask

	microTask => Promise(then, catch, finnaly, await)
	macroTask => nextTick()
*/
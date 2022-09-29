"use strict";

class Main {
	static hello () {
		console.log("hello from Main class");
	}
	static res = 65;
}

class Test extends Main {};

Main.hello();
Test.hello();

console.log("MAIN: " + Main.res);
console.log("TEST: " + Test.res);


// ներքևում նշված մեթոդները չեն աշխատելու
const test = new Main();
test.hello();
new Main().hello();
new Main.hello();
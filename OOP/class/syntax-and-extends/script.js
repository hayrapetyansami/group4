"use strict";

class Rectangle {
	constructor (width = 0, height = 0) {
		this.width = width;
		this.height = height;
	}
	calcArea() {
		return this.width * this.height;
	}
}

// const box = new Rectangle(10, 10);
// const long = new Rectangle(200, 15);
// const circle = new Rectangle(100, 100);

// exteds + super զույգը պարտադիր են
// class ժառանգություն
class ModifedRectangle extends Rectangle {
	constructor (width, height, text, color) {
		super(width, height);
		this.text = text;
		this.color = color;
	}
	props(){
		console.log(`text: ${this.text}, color: ${this.color}`);
	}
}

const title = new ModifedRectangle(400, 800, "Hello World !!!", "red");
title.props();
console.log(title.calcArea());
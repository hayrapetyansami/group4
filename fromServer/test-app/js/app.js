"use strict";

// NPM - Node Package Manager

const product1 = {
	id: 1,
	brand: "Xiaomi",
	model: "Note 8T",
	storage: "128GB",
	ram: "4GB",
	colors: ["Black", "Gray", "Purple"]
}

const product2 =  {
	id: 2,
	brand: "Google",
	model: "Pixel 7",
	storage: "516GB",
	ram: "12GB",
	colors: ["White", "Silver", "Brown"]
};

function toDB (url, data) {
	fetch(url, {
		method: "POST",
		headers: {
			"content-type":"application/json"
		},
		body: JSON.stringify(data)
	})
} 

toDB("http://localhost:3000/product", product1);
toDB("http://localhost:3000/product", product2);
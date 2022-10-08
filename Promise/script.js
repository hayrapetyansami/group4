"use strict";

// callback hell

// resolve => ամեն ինչ բարեհաջող է անցել
// reject => մեր խոստումը մերժվել է

console.log("Ուղարկում ենք հարցում․․․");
const serverStatus = 111;

const request = new Promise((resolve, reject) => {
	console.log("Խնդրում ենք սպասել");

	setTimeout(() => {
		const product = {
			brand: "Google",
			type: "Mobile",
			name: "Pixel 7",
			storage: "512GB",
			ram: "12GB",
			price: "1088 $"
		};

		if(serverStatus === 200) {
			resolve(product);
		} else {
			reject();
		}

	}, 1500);
});

request.then(data => {
	data.status = "Վաճառված է";
	console.log("Վճարումը հաստատվել է");
	console.log(`Շնորհավորում ենք, Դուք ձեռք եք բերել ${data.brand} բրենդի ${data.name} հեռախոսը`);
	console.log(data);
}).catch(() => {
	throw new Error("Server error");
	// console.log("Error");
}).finally(() => {
	console.log("Hello I'm an finnaly");
});

const time = (ms, state) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state) {
				resolve();
			} else {
				reject();
			}
		}, ms);
	});
}

// time(4000).then(() => console.log("4000 ms"));

Promise.all([time(1000, true), time(2000, false), time(3000, true)])
.then(() => console.log("Բոլորը աշխատել են"))
.catch(() => console.log("Տեղի է ունեցել խնդիր"));

Promise.race([time(10, true), time(2000, true), time(3000, true)])
.then(() => console.log("Race-ը աշխատեց"))
.catch(() => console.log("Տեղի է ունեցել խնդիր"));


// Օրինակ, որը ապացուցում է, որ Promise-ը նախատեսված չէ միայն setTimeout-ի համար
console.log("Before");

new Promise ((res, rej) => {
	const arr = [7, 5, 9, 8, 4, 6, 2, 0, 1, 3];

	if (Math.max(...arr) > 20) {
		res("Ամենամեծ թիվը մեծ է 20ից");
	} else {
		rej("Զանգվածի ոչ մի թիվ մեծ չէ 20ից");
	}
})
.then(resolvedData => console.log(resolvedData))
.catch(rejectedData => console.log(rejectedData))
.finally(() => console.log("Ես արդեն գիտեմ Promise"));

console.log("After");
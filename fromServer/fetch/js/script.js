"use strict";

// API => Application Programming Interface

// DOM API
// document.querySelector('selector');
// document.createElement("div")
// setTimeout()
// setInterval()

/*
	1. fetch-ի առաջին պարամետրը դա URL-ն է,
	2․ fetch-ի երկրորդ պարամետրը դա Settings-ն է Object-ի տեսքով
	3. եթե fetch API-ը մենք օգտագործում ենք GET հարցման համար, ապա որպես երկրորդ պարամետր ոչինչ չենք նշում
	4․ եթե fetch API-ը մենք օգտագործում ենք POST, PUT, DELETE և այլ հարցումների համար, ապա որպես երկրորդ պարամետր մենք ԱՆՊԱՅՄԱՆ պետք է նշենք Settings
	5. fetch API-ը մեզ վերադարձնում է Promise
*/

// const posts = "https://jsonplaceholder.typicode.com/posts/";
// const photos = "https://jsonplaceholder.typicode.com/photos/";

// const root = document.createElement("div");
// const postsList = document.createElement("div");
// const photosList = document.createElement("div");

// document.body.prepend(root);
// root.append(postsList);
// root.append(photosList)

// root.id = "root";
// postsList.id = "posts-list";
// photosList.id = "photos-list"

// let i = 1;
// const getPostsFromAPI = setInterval(() => {
// 	fetch(`${posts}${i}`)
// 	.then(data => data.json()) // JSON.parse(data)
// 	.then(data => {
// 		postsList.innerHTML += `
// 			<div style="margin-bottom: 40px">
// 				<h2>${data.title}</h2>
// 				<p>${data.body}</p>
// 			</div>
// 		`;
// 	});

// 	if (i === 10) {
// 		clearInterval(getPostsFromAPI);
// 	}
// 	i++;
// }, 1000);

// let x = 1;
// const getPhotosFromAPI = setInterval(() => {
// 	fetch(`${photos}${x}`)
// 	.then(data => data.json())
// 	.then(data => {
// 		photosList.innerHTML += `
// 			<div>
// 			<img src=${data.url} alt=${data.title} id=${data.id} style="display:block;max-width:600px;width:100%;margin-bottom:24px">
// 			</div>
// 		`;
// 	});

// 	if (x === 10) {
// 		clearInterval(getPhotosFromAPI);
// 	}

// 	x++;
// }, 1000);

const date = new Date();
const postDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

const article = {
	title: "NASA-ն շուտով Երկրի ցածր ուղեծրում հսկայական փչովի ջերմային վահան կփորձարկի",
	body: "Վերջերս NASA-ն իրականություն դարձրեց գիտաֆանտաստիկ մի տեխնոլոգիա, երբ DART առաքելության շրջանակում տիեզերանավը բախվեց աստղակերպին, որպեսզի փոխի դրա ուղեծիրը։ Նպատակն էր պարզել, թե արդյոք ապագայում մարդիկ կկարողանան Երկիր մոլորակը փրկել աստղակերպերի հնարավոր և վտանգավոր հարվածներից։ </br></br> Այժմ տիեզերական գործակալությունը նպատակ ունի փորձարկել մեծ փչովի վահան, որը մի օր կարող է օգտագործվել Մարսի և Արեգակնային համակարգի այլ մոլորակների վրա մեծ բեռներ ապահով կերպով իջեցնելու համար, ասել են ՆԱՍԱ-ում։",
	author: "Ջեննի Բզնունի",
	img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
	date: postDate
};

const body = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	headers: {
		"content-type":"application/json"
	},
	body: JSON.stringify(article)
})
.then(data => data.json())
.then(data => {
	body.insertAdjacentHTML("afterbegin", `
		<article>
			<h1>${data.title}</h1>
			</br>
			<p>${data.date}</p>
			</br>
			<img src="${data.img}" alt="${data.title}" style="display:block;max-width:600px;width:100%;">
			</br></br>
			<p>${data.body}</p>
			</br></br>
			<p>Հեղինակ՝ ${data.author}</p>
		</article>
	`);
});

















// DANGER / RECRUSION

// let counter = 1;
// function ban() {

// 	if (counter === 10) {
// 		return;
// 	}

// 	fetch(`${photos}${counter}`)
// 		.then(data => data.json())
// 		.then(data => {
// 			photosList.innerHTML += `
// 			<div>
// 				<img src=${data.url} alt=${data.title} id=${data.id} style="display:block;max-width:600px;width:100%;margin-bottom:24px">
// 			</div>
// 		`;
// 		});
// 	counter++;
// 	return ban();
// }

// ban();
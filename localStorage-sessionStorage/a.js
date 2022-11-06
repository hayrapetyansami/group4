"use strict";

localStorage.setItem("isFavorite", true); // ուղարկում ենք localStoarge-ի մեջ
localStorage.getItem("isFavorite"); // ստանում ենք localStoarge-ի մեջից
localStorage.removeItem("price"); // ջնջում ենք localStoarge-ի մեջից կոնկրետ item-ը
// localStorage.clear() // localStoarge-ի մեջից ամեն ինչ ջնջում ա
localStorage.key(0); // localStoarge-ի մեջից ստանում ենք item-ի key-ը ըստ index-ի
localStorage.length; // ստանում ենք localStoarge-ի length-ը

// console.log(Object.keys(localStorage));
// console.log(Object.values(localStorage));
// console.log(Object.entries(localStorage));

sessionStorage.setItem("exit", false);
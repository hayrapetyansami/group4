"use strict";

const lime = document.getElementById("lime"),
btns = document.querySelectorAll("button"),
flag = document.querySelector("#flags"),
flags = flag.querySelectorAll(".flag"),
wrapper = document.querySelector("#wrapper"),
boxes = wrapper.querySelectorAll(".box"),
text = document.querySelector("[data-text]");

// const css = window.document.styleSheets[0].ownerNode.style; 
// let i = 0;
// for (let cssProperty in css) {
// 	console.log(cssProperty);
// 	i++;
// }
// console.log(i);

// 1)
lime.style.width = "150px";
lime.style.height = "150px";
lime.style.marginTop = "50px";
lime.style.borderRadius = "0px 70%";
lime.style.transform = "rotatex(180deg)";

// 2) 
lime.style.cssText = `
	background: linear-gradient(
		to left bottom,
		${10 < 5 ? "purple" : "blue"},
		${5 > 10 ? "blue" : "purple"}
	);
	width: ${10 > 5 ? 350 : 250}px !important;
	height: ${10 > 5 ? 350 : 250}px !important;
	margin-top: 10px;
	border-radius: 0px 60%;
	trasnform: rotatex(90deg);
`;

// nodeList || HTMLCollection !== style
boxes.forEach(item => {
	item.textContent = `
		Hello, I'm ${50 > 0 ? "Robot" : "Junior"}
	`;
	item.style.cssText = `
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 210px;
		height: 210px;
		border-radius:  10px;
		color: #fff;
		font-size: 28px;
		font-weight: bold;
		font-family: tahoma;
		background: linear-gradient(
			to left bottom,
			${10 < 5 ? "#f0f" : "#00f"},
			${10 > 5 ? "#f0f" : "#00f"}
		);
	`;
});

const text1 = document.createElement("p"); // ստեղծում ենք P թեգ
const text2 = document.createElement("p"); // ստեղծում ենք P թեգ
text1.textContent = "Hello I'm PREPEND";
text2.textContent = "Hello I'm APPEND";

wrapper.prepend(text1) // ավելացնում եք wrapper-ի սկզբում 
// wrapper.append(text2) // ավելացնում եք wrapper-ի վերջում
wrapper.appendChild(text2); // Հին տարբերակ

const elem = document.createElement("div");
document.body.append(elem);

elem.innerHTML = `
	<h1 style="color: red; font-size: 35px; font-family: fantasy;">MR. ROBOT</h1>
	<p>How I can help u ?</p>
	<button>Start chat with Robot</button>
`;

// textContent => TEXT
// innerHTML => HTML

// lime.remove();// ջնջում ենք էլեմենտը, որի վրա կանչել ենք
// document.body.removeChild(lime); // Հին տարբերակ

// lime.before(flag); // lime-ից առաջ դիր flag-ը
document.body.insertBefore(flag, lime); // Հին տարբերակ

text.after(wrapper) // text-ից հետո դիր wrapper-ը

// lime.replaceWith(elem) // lime-ը փոխում ենք elem-ով / lime-ը ջնջվում ա
document.body.replaceChild(elem, lime); // Հին տարբերակ

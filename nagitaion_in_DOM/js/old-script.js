// console.log(document); // document !== HTML
// console.log(document.head); // <head>*</head>
// console.log(document.body); // <body>*</body>
// console.log(document.documentElement); // FULL HTML
// console.log(document.body.childNodes); // ստանում ենք և թեգերը և նոդերը
// console.log(document.body.children); // ստանում ենք միայն թեգերը

// console.log(document.body.firstChild); // առաջին երեխա => node #text
// console.log(document.body.lastChild); // վերջին երեխա => script tag

// const current = document.getElementById("current");
// console.log(current.parentNode); // first
// console.log(current.parentNode.parentNode); // first => wrapper

// const current = document.querySelector("[data-current]");
// console.log(current.previousSibling.previousSibling); // 1 հատով ստանում ենք #TEXT
// console.log(current.nextSibling.nextSibling); // // 1 հատով ստանում ենք #TEXT

// for (let elem of document.body.childNodes) {
// 	if (elem.nodeName !== "#text" && elem.nodeName !== "#comment") {
// 		console.log(elem);
// 	}
// }

/* 
	ՆՇՈՒՄՆԵՐ
	* => ԱՄԵՆ ԻՆՉ
	#text => \n = new line...  \t => tab
	#comment = HTML <!-- -->
*/
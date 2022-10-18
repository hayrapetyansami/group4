"use strict";

// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const root = document.querySelector("#root");

const title = document.createElement("h1");
const subTitle = document.createElement("p");
const form = document.createElement("form");
const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenBtnAdd = document.createElement("button");

const listsBlock = document.createElement("div");

title.textContent = "CRUD";
subTitle.textContent = "Async Application";

form.id = "app-form";
screenBlock.id = "screenBlock";
listsBlock.id = "listsBlock";
screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenBtnAdd.textContent = "ADD";
screenBtnAdd.id = "screenBtnAdd";

root.append(title, subTitle)
root.append(form);
form.append(screenBlock, listsBlock)
screenBlock.append(screenInput, screenBtnAdd);

const url = "http://localhost:8888/todo";

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch(url, {
			method: "POST",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({title: val})
		});
	}

	this.reset();
});

fetch(url)
.then(data => data.json())
.then(data => {
	data.forEach(todoObj => {
		listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<div class="listsBlock__item__content">
					<span>${todoObj.id}</span>
					<input type="text" value="${todoObj.title}" readonly>
				</div>
				<div class="buttons">
					<button data-rm>Remove</button>
					<button data-ed>Edit</button>
					<button data-sv>Save</button>
				</div>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtns = document.querySelectorAll("[data-rm]");
	const editBtns = document.querySelectorAll("[data-ed]");
	const saveBtns = document.querySelectorAll("[data-sv]");

	editBtns.forEach((btn, index) => {
		btn.addEventListener("click", function () {
			const input = this.parentElement.previousElementSibling.lastElementChild;

			input.classList.add("edit");
			input.removeAttribute("readonly");
			this.style.display = "none";
			saveBtns[index].style.display = "inline-block";
		});
	})

	function changeDB (btnArray, method) {
		btnArray.forEach(btn => {
			btn.addEventListener("click", function () {
				data.forEach(todoObj => {
					const fakeId = this.parentElement.previousElementSibling.firstElementChild.textContent;
					const forEddite = this.parentElement.previousElementSibling.lastElementChild
	
					if (parseInt(fakeId) === todoObj.id) {
						fetch(`${url}/${todoObj.id}`, {
							method: method,
							headers: {
								"content-type" : "application/json"
							},
							body: method === "PUT" ? JSON.stringify({title: forEddite.value.trim()}) : ""
						});
					}
				});
			});
		});
	}

	changeDB(removeBtns, "DELETE");
	changeDB(saveBtns, "PUT");
});

console.log("init");
// const a = 10;
try {
	console.log(a);
} catch (err) {
	// console.error(err);
	throw new Error(err + " and i don't know where is a");
}

// finally {
// 	console.log("I'm here");
// }

console.log("finish");
"use strict";

// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const root = document.querySelector("#root");
const form = document.createElement("form");

const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenBtnAdd = document.createElement("button");

const listsBlock = document.createElement("div");

form.id = "todo-form";
screenBlock.id = "screenBlock";
listsBlock.id = "listsBlock";

screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenBtnAdd.textContent = "ADD";

root.append(form);
form.prepend(screenBlock);
form.append(listsBlock)
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
				<p>
					<span>${todoObj.id}</span>
					${todoObj.title}
				</p>

				<button data-rm>Remove</button>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtnsArray = document.querySelectorAll("[data-rm]");

	removeBtnsArray.forEach(btn => {
		btn.addEventListener("click", function () {
			this.parentElement.remove();
			data.forEach(todoObj => {
				const fakeId = this.previousElementSibling.firstElementChild.textContent;

				if (parseInt(fakeId) === todoObj.id) {
					fetch(`${url}/${todoObj.id}`, {
						method: "DELETE",
						headers: {
							"content-type" : "application/json"
						}
					});
				}
			});
		});
	});
});
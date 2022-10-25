module.exports = function () {
	const root = document.createElement("div");
	const form = document.createElement("form");
	const input = document.createElement("input");
	const button = document.createElement("button");

	root.id = "root";
	form.id = "app-form";
	input.type = "text";
	input.placeholder = "Type here...";
	button.textContent = "ADD";
	button.id = "addBtn";

	root.style.cssText = `
		padding: 30px;
		background: #555;
	`;
	root.append(form);
	form.append(input, button);

	return root;
}
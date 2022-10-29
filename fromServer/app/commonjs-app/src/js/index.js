"use strict";

const UI = require("./modules/ui");
const POST = require("./modules/postMethod");
const GET = require("./modules/getMethod");
const PATCH = require("./modules/patchMethod");
const DELETE = require("./modules/deleteMethod");
const COMPLETE = require("./modules/complete");

const url = "http://localhost:8888/todos";


const { form, screenInput } = UI;
UI.start()

POST(form, screenInput, url);


async function engine () {
	await GET(url, UI);
	PATCH(
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url
	);
	DELETE(
		document.querySelectorAll(".removeBtn"),
		url
	);
	COMPLETE(
		url,
		document.querySelectorAll(".buttons input"),
		document.querySelectorAll(".listsBlockItemContent")
	)
}

engine();
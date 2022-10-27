module.exports = async function (url, ui) {
	return await fetch(url)
		.then(data => data.json())
		.then(data => data.forEach(obj => ui.toHTML(obj.id, obj.title, obj.isComplete)))
}
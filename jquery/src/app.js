import $ from 'jquery';

const px = "200px";

$("h1")
.text("Hello World !!!")
.css("color", "#cc2266")
.css("font-family", "Arial")
.on("click", function () {
	$(this).text("Hello Armenia !!!");
});

$("#box")
.css("width", px)
.css("height", px)
.css("background", "#ee0055")
.on("click", function() {
	$(this).animate({
		width: "400px"
	}, 1500, function (){
		console.log("DONE");
	})
})

$("button").on("click", function () {
	$("#box").slideToggle(2000, function () {
		console.log("I'm ready");
	})
});

$("span").each(function(index) {
	$(this).on("click", function () {
		$(this).toggleClass("hello");
		console.log($(this));
	});
});
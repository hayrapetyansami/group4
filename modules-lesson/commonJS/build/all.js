/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\nconst { persons, setRing } = __webpack_require__(/*! ./modules/ring */ \"./src/js/modules/ring.js\");\r\nconst ui = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\r\n\r\nsetRing(persons, \"Frodo\");\r\n\r\nfor (const p of persons) {\r\n\tif (p.hasRing === true) {\r\n\t\tconsole.log(p);\r\n\t}\r\n}\r\n\r\ndocument.body.prepend(ui())\n\n//# sourceURL=webpack://commonjs/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/ring.js":
/*!********************************!*\
  !*** ./src/js/modules/ring.js ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nconst persons = [\r\n\t{ name: \"Frodo\", hasRing: false },\r\n\t{ name: \"Bilbo\", hasRing: false },\r\n\t{ name: \"Legolass\", hasRing: false },\r\n\t{ name: \"Sauron\", hasRing: false },\r\n\t{ name: \"Gendalf\", hasRing: false }\r\n];\r\n\r\nfunction setRing(array, owner) {\r\n\tarray.forEach(person => {\r\n\t\tif (person.name === owner) {\r\n\t\t\tperson.hasRing = true;\r\n\t\t} else {\r\n\t\t\tperson.hasRing = false;\r\n\t\t}\r\n\t});\r\n}\r\n\r\nmodule.exports = { persons, setRing };\n\n//# sourceURL=webpack://commonjs/./src/js/modules/ring.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = function () {\r\n\tconst root = document.createElement(\"div\");\r\n\tconst form = document.createElement(\"form\");\r\n\tconst input = document.createElement(\"input\");\r\n\tconst button = document.createElement(\"button\");\r\n\r\n\troot.id = \"root\";\r\n\tform.id = \"app-form\";\r\n\tinput.type = \"text\";\r\n\tinput.placeholder = \"Type here...\";\r\n\tbutton.textContent = \"ADD\";\r\n\tbutton.id = \"addBtn\";\r\n\r\n\troot.style.cssText = `\r\n\t\tpadding: 30px;\r\n\t\tbackground: #555;\r\n\t`;\r\n\troot.append(form);\r\n\tform.append(input, button);\r\n\r\n\treturn root;\r\n}\n\n//# sourceURL=webpack://commonjs/./src/js/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
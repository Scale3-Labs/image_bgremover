/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/yocto-queue";
exports.ids = ["vendor-chunks/yocto-queue"];
exports.modules = {

/***/ "(ssr)/./node_modules/yocto-queue/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yocto-queue/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("class Node {\n\t/// value;\n\t/// next;\n\n\tconstructor(value) {\n\t\tthis.value = value;\n\n\t\t// TODO: Remove this when targeting Node.js 12.\n\t\tthis.next = undefined;\n\t}\n}\n\nclass Queue {\n\t// TODO: Use private class fields when targeting Node.js 12.\n\t// #_head;\n\t// #_tail;\n\t// #_size;\n\n\tconstructor() {\n\t\tthis.clear();\n\t}\n\n\tenqueue(value) {\n\t\tconst node = new Node(value);\n\n\t\tif (this._head) {\n\t\t\tthis._tail.next = node;\n\t\t\tthis._tail = node;\n\t\t} else {\n\t\t\tthis._head = node;\n\t\t\tthis._tail = node;\n\t\t}\n\n\t\tthis._size++;\n\t}\n\n\tdequeue() {\n\t\tconst current = this._head;\n\t\tif (!current) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._head = this._head.next;\n\t\tthis._size--;\n\t\treturn current.value;\n\t}\n\n\tclear() {\n\t\tthis._head = undefined;\n\t\tthis._tail = undefined;\n\t\tthis._size = 0;\n\t}\n\n\tget size() {\n\t\treturn this._size;\n\t}\n\n\t* [Symbol.iterator]() {\n\t\tlet current = this._head;\n\n\t\twhile (current) {\n\t\t\tyield current.value;\n\t\t\tcurrent = current.next;\n\t\t}\n\t}\n}\n\nmodule.exports = Queue;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMveW9jdG8tcXVldWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsiL1VzZXJzL2thcnRoaWtrYWx5YW5hcmFtYW4vd29yay9sYW5ndHJhY2UtY29uc3VsdGluZy9jb250ZW50L2JnLXJlbW92ZXIvZnJvbnRlbmQvbm9kZV9tb2R1bGVzL3lvY3RvLXF1ZXVlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuXHQvLy8gdmFsdWU7XG5cdC8vLyBuZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlKSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXG5cdFx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxMi5cblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cdH1cbn1cblxuY2xhc3MgUXVldWUge1xuXHQvLyBUT0RPOiBVc2UgcHJpdmF0ZSBjbGFzcyBmaWVsZHMgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxMi5cblx0Ly8gI19oZWFkO1xuXHQvLyAjX3RhaWw7XG5cdC8vICNfc2l6ZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdH1cblxuXHRlbnF1ZXVlKHZhbHVlKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcblxuXHRcdGlmICh0aGlzLl9oZWFkKSB7XG5cdFx0XHR0aGlzLl90YWlsLm5leHQgPSBub2RlO1xuXHRcdFx0dGhpcy5fdGFpbCA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2hlYWQgPSBub2RlO1xuXHRcdFx0dGhpcy5fdGFpbCA9IG5vZGU7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc2l6ZSsrO1xuXHR9XG5cblx0ZGVxdWV1ZSgpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5faGVhZDtcblx0XHRpZiAoIWN1cnJlbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9oZWFkID0gdGhpcy5faGVhZC5uZXh0O1xuXHRcdHRoaXMuX3NpemUtLTtcblx0XHRyZXR1cm4gY3VycmVudC52YWx1ZTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuX2hlYWQgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5fdGFpbCA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdGdldCBzaXplKCkge1xuXHRcdHJldHVybiB0aGlzLl9zaXplO1xuXHR9XG5cblx0KiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRsZXQgY3VycmVudCA9IHRoaXMuX2hlYWQ7XG5cblx0XHR3aGlsZSAoY3VycmVudCkge1xuXHRcdFx0eWllbGQgY3VycmVudC52YWx1ZTtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/yocto-queue/index.js\n");

/***/ })

};
;
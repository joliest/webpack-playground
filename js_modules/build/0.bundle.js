webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const bigImage = document.createElement('img');
// bigImage.src = big;

// document.body.appendChild(bigImage);

// import big from '../assets/big.jpg';
exports.default = function () {
  var smallImage = document.createElement('img');
  smallImage.src = _small2.default;

  document.body.appendChild(smallImage);
};

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "img {\n  border: 10px solid black;\n}", ""]);

// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }
]);
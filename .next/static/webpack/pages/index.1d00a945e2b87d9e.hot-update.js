"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/flat_card.js":
/*!*********************************!*\
  !*** ./components/flat_card.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/FlatCard.module.css */ \"./styles/FlatCard.module.css\");\n/* harmony import */ var _styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar FlatCard = function(props) {\n    var heading = props.heading ? props.heading.toUpperCase() : \"Insert a heading\".toUpperCase();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                height: 500,\n                width: 500,\n                src: props.source,\n                className: (_styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().hero_image)\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/flat_card.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().text),\n                children: props.text ? props.text : \"Text goes here\"\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/flat_card.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this),\n            props.url ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: props.url ? props.url : \"/\",\n                        children: props.link_text ? props.link_text : \"Link text goes here\"\n                    }, void 0, false, {\n                        fileName: \"/home/tumeloak/Documents/Code/loans/components/flat_card.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_FlatCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().arrow),\n                        children: \"→\"\n                    }, void 0, false, {\n                        fileName: \"/home/tumeloak/Documents/Code/loans/components/flat_card.js\",\n                        lineNumber: 14,\n                        columnNumber: 114\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/flat_card.js\",\n                lineNumber: 13,\n                columnNumber: 22\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tumeloak/Documents/Code/loans/components/flat_card.js\",\n        lineNumber: 5,\n        columnNumber: 13\n    }, _this);\n};\n_c = FlatCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlatCard);\nvar _c;\n$RefreshReg$(_c, \"FlatCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZsYXRfY2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFrRDtBQUVsRCxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3hCLElBQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQ0EsV0FBVyxFQUFFO0lBQzlGLHFCQUFRLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRU4seUVBQVc7OzBCQUMvQiw4REFBQ1EsS0FBSztnQkFDRkMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hDLEtBQUssRUFBRSxHQUFHO2dCQUNWQyxHQUFHLEVBQUVULEtBQUssQ0FBQ1UsTUFBTTtnQkFDakJOLFNBQVMsRUFBRU4sK0VBQWlCOzs7OztxQkFDOUI7MEJBQ0YsOERBQUNjLEdBQUM7Z0JBQUNSLFNBQVMsRUFBRU4seUVBQVc7MEJBQUdFLEtBQUssQ0FBQ2EsSUFBSSxHQUFHYixLQUFLLENBQUNhLElBQUksR0FBRyxnQkFBZ0I7Ozs7O3FCQUFLO1lBQzFFYixLQUFLLENBQUNjLEdBQUcsaUJBQUcsOERBQUNGLEdBQUM7Z0JBQUNSLFNBQVMsRUFBRU4seUVBQVc7O2tDQUNsQyw4REFBQ2tCLEdBQUM7d0JBQUNDLElBQUksRUFBRWpCLEtBQUssQ0FBQ2MsR0FBRyxHQUFHZCxLQUFLLENBQUNjLEdBQUcsR0FBRyxHQUFHO2tDQUFHZCxLQUFLLENBQUNrQixTQUFTLEdBQUdsQixLQUFLLENBQUNrQixTQUFTLEdBQUcscUJBQXFCOzs7Ozs2QkFBSztrQ0FBQSw4REFBQ0MsTUFBSTt3QkFBQ2YsU0FBUyxFQUFFTiwwRUFBWTtrQ0FBRSxHQUFNOzs7Ozs2QkFBTzs7Ozs7O3FCQUNqSixpQkFBRyw2SUFBSzs7Ozs7O2FBQ1YsQ0FDTDtDQUNKO0FBZktDLEtBQUFBLFFBQVE7QUFpQmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mbGF0X2NhcmQuanM/NGY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9GbGF0Q2FyZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBGbGF0Q2FyZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBwcm9wcy5oZWFkaW5nID8gcHJvcHMuaGVhZGluZy50b1VwcGVyQ2FzZSgpIDogXCJJbnNlcnQgYSBoZWFkaW5nXCIudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICBzcmM9e3Byb3BzLnNvdXJjZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9faW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwcm9wcy50ZXh0ID8gcHJvcHMudGV4dCA6IFwiVGV4dCBnb2VzIGhlcmVcIn08L3A+XG4gICAgICAgIHtwcm9wcy51cmwgPyA8cCBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnVybCA/IHByb3BzLnVybCA6IFwiL1wifT57cHJvcHMubGlua190ZXh0ID8gcHJvcHMubGlua190ZXh0IDogXCJMaW5rIHRleHQgZ29lcyBoZXJlXCJ9PC9hPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT4mcmFycjs8L3NwYW4+XG4gICAgICAgIDwvcD4gOiA8PjwvPn1cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsYXRDYXJkIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZsYXRDYXJkIiwicHJvcHMiLCJoZWFkaW5nIiwidG9VcHBlckNhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiSW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInNvdXJjZSIsImhlcm9faW1hZ2UiLCJwIiwidGV4dCIsInVybCIsImxpbmsiLCJhIiwiaHJlZiIsImxpbmtfdGV4dCIsInNwYW4iLCJhcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/flat_card.js\n"));

/***/ })

});
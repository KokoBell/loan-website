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

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Card = function(props) {\n    var heading = props.heading ? props.heading.toUpperCase() : \"Insert a heading\".toUpperCase();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading),\n                children: heading\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().text),\n                children: props.text ? props.text : \"Text goes here\"\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: props.url ? props.url : \"/\",\n                    children: [\n                        props.link_text ? props.link_text : \"Link text goes here\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            src: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                            lineNumber: 9,\n                            columnNumber: 111\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n        lineNumber: 5,\n        columnNumber: 13\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBOEM7QUFFOUMsSUFBTUMsSUFBSSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUNwQixJQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0MsT0FBTyxHQUFHRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxFQUFFLEdBQUcsa0JBQWtCLENBQUNBLFdBQVcsRUFBRTtJQUM5RixxQkFBUSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVOLHFFQUFXOzswQkFDL0IsOERBQUNRLEdBQUM7Z0JBQUNGLFNBQVMsRUFBRU4sd0VBQWM7MEJBQUdHLE9BQU87Ozs7O3FCQUFLOzBCQUMzQyw4REFBQ0ssR0FBQztnQkFBQ0YsU0FBUyxFQUFFTixxRUFBVzswQkFBR0UsS0FBSyxDQUFDTyxJQUFJLEdBQUdQLEtBQUssQ0FBQ08sSUFBSSxHQUFHLGdCQUFnQjs7Ozs7cUJBQUs7MEJBQzNFLDhEQUFDRCxHQUFDO2dCQUFDRixTQUFTLEVBQUVOLHFFQUFXOzBCQUNyQiw0RUFBQ1csR0FBQztvQkFBQ0MsSUFBSSxFQUFFVixLQUFLLENBQUNXLEdBQUcsR0FBR1gsS0FBSyxDQUFDVyxHQUFHLEdBQUcsR0FBRzs7d0JBQUdYLEtBQUssQ0FBQ1ksU0FBUyxHQUFHWixLQUFLLENBQUNZLFNBQVMsR0FBRyxxQkFBcUI7d0JBQUMsR0FBQztzQ0FBQSw4REFBQ0MsR0FBQzs0QkFBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7O2lDQUFLOzs7Ozs7eUJBQUk7Ozs7O3FCQUNwSDs7Ozs7O2FBQ0YsQ0FDTDtDQUNKO0FBVktmLEtBQUFBLElBQUk7QUFZViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmQuanM/NDBiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nID0gcHJvcHMuaGVhZGluZyA/IHByb3BzLmhlYWRpbmcudG9VcHBlckNhc2UoKSA6IFwiSW5zZXJ0IGEgaGVhZGluZ1wiLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PntoZWFkaW5nfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3Byb3BzLnRleHQgPyBwcm9wcy50ZXh0IDogXCJUZXh0IGdvZXMgaGVyZVwifTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICA8YSBocmVmPXtwcm9wcy51cmwgPyBwcm9wcy51cmwgOiBcIi9cIn0+e3Byb3BzLmxpbmtfdGV4dCA/IHByb3BzLmxpbmtfdGV4dCA6IFwiTGluayB0ZXh0IGdvZXMgaGVyZVwifSA8aSBzcmM9XCJcIj48L2k+PC9hPlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJwcm9wcyIsImhlYWRpbmciLCJ0b1VwcGVyQ2FzZSIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJwIiwidGV4dCIsImxpbmsiLCJhIiwiaHJlZiIsInVybCIsImxpbmtfdGV4dCIsImkiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/card.js\n"));

/***/ })

});
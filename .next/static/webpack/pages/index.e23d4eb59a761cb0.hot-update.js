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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Card = function(props) {\n    var heading = props.heading;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.heading\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.text\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: props.url,\n                    children: props.link_text ? props.link_text : \"Insert a link here\"\n                }, void 0, false, {\n                    fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tumeloak/Documents/Code/loans/components/card.js\",\n        lineNumber: 5,\n        columnNumber: 13\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBOEM7QUFFOUMsSUFBTUMsSUFBSSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUNwQixJQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0MsT0FBTztJQUM3QixxQkFBUSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVMLHFFQUFXOzswQkFDL0IsOERBQUNPLEdBQUM7MEJBQUVMLEtBQUssQ0FBQ0MsT0FBTzs7Ozs7cUJBQUs7MEJBQ3RCLDhEQUFDSSxHQUFDOzBCQUFFTCxLQUFLLENBQUNNLElBQUk7Ozs7O3FCQUFLOzBCQUNuQiw4REFBQ0QsR0FBQzswQkFDRSw0RUFBQ0UsR0FBQztvQkFBQ0MsSUFBSSxFQUFFUixLQUFLLENBQUNTLEdBQUc7OEJBQUdULEtBQUssQ0FBQ1UsU0FBUyxHQUFHVixLQUFLLENBQUNVLFNBQVMsR0FBRyxvQkFBb0I7Ozs7O3lCQUFLOzs7OztxQkFDbEY7Ozs7OzthQUNGLENBQ0w7Q0FDSjtBQVZLWCxLQUFBQSxJQUFJO0FBWVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzPzQwYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9IHByb3BzLmhlYWRpbmdcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxwPntwcm9wcy5oZWFkaW5nfTwvcD5cbiAgICAgICAgPHA+e3Byb3BzLnRleHR9PC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnVybH0+e3Byb3BzLmxpbmtfdGV4dCA/IHByb3BzLmxpbmtfdGV4dCA6IFwiSW5zZXJ0IGEgbGluayBoZXJlXCJ9PC9hPlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJwcm9wcyIsImhlYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwicCIsInRleHQiLCJhIiwiaHJlZiIsInVybCIsImxpbmtfdGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card.js\n"));

/***/ })

});
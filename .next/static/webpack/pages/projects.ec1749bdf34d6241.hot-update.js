"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projects/Projects.tsx":
/*!******************************************!*\
  !*** ./components/projects/Projects.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_content_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/content/projects */ \"./data/content/projects.ts\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectCard */ \"./components/projects/ProjectCard.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Projects(param) {\n    var overwriteProjects = param.overwriteProjects;\n    var _this = this;\n    var projectsList = overwriteProjects ? overwriteProjects : _data_content_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"grid grid-cols-1 gap-8 md:grid-cols-3 items-start\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\Projects.tsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            projectsList.map(function(item) {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProjectCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    project: item,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\Projects.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 16\n                    },\n                    __self: _this\n                }, item.id));\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"sqD min-w-[500px] mt-[500px] opacity-100 -translate-x-1/2 object-cover sm:min-w-[700px] opacity-100\",\n                style: {\n                    zIndex: \"-10\"\n                },\n                src: \"/static/doodles/hero/right-squiggle.svg\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\Projects.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"sqD min-w-[100px] mt-[50px] opacity-100 top-0 right-0 -translate-x-1/2 object-cover sm:min-w-[700px] opacity-100\",\n                style: {\n                    zIndex: \"-10\"\n                },\n                src: \"/static/doodles/hero/left-squiggle.svg\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\Projects.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDcUI7QUFLUDtTQU05QkcsUUFBUSxDQUFDLEtBQW1DLEVBQUUsQ0FBQztRQUFwQ0MsaUJBQWlCLEdBQW5CLEtBQW1DLENBQWpDQSxpQkFBaUI7O0lBQ25DLEdBQUssQ0FBQ0MsWUFBWSxHQUFHRCxpQkFBaUIsR0FBR0EsaUJBQWlCLEdBQUdILDhEQUFRO0lBQ3JFLE1BQU0sdUVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW1EOzs7Ozs7OztZQUMvREYsWUFBWSxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztnQkFDM0IsTUFBTSxzRUFBRVAsb0RBQVc7b0JBQWVRLE9BQU8sRUFBRUQsSUFBSTs7Ozs7OzttQkFBdEJBLElBQUksQ0FBQ0UsRUFBRTtZQUNsQyxDQUFDO2lGQUNBQyxDQUFHO2dCQUFDTCxTQUFTLEVBQUMsQ0FBcUc7Z0JBQUNNLEtBQUssRUFBRSxDQUFDO29CQUFDQyxNQUFNLEVBQUUsQ0FBSztnQkFBQyxDQUFDO2dCQUFFQyxHQUFHLEVBQUMsQ0FBeUM7Ozs7Ozs7O2lGQUMzTEgsQ0FBRztnQkFBQ0wsU0FBUyxFQUFDLENBQWtIO2dCQUFDTSxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFLENBQUs7Z0JBQUMsQ0FBQztnQkFBRUMsR0FBRyxFQUFDLENBQXdDOzs7Ozs7Ozs7O0FBRzlNLENBQUM7S0FYUVosUUFBUTtBQWFqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHMudHN4P2MwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCJAL2RhdGEvY29udGVudC9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCJ0eXBlc1wiO1xuaW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5cbnR5cGUgUHJvamVjdFByb3BzID0ge1xuICBvdmVyd3JpdGVQcm9qZWN0cz86IFByb2plY3RbXTtcbn07XG5cbmZ1bmN0aW9uIFByb2plY3RzKHsgb3ZlcndyaXRlUHJvamVjdHMgfTogUHJvamVjdFByb3BzKSB7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IG92ZXJ3cml0ZVByb2plY3RzID8gb3ZlcndyaXRlUHJvamVjdHMgOiBwcm9qZWN0cztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTggbWQ6Z3JpZC1jb2xzLTMgaXRlbXMtc3RhcnRcIj5cbiAgICAgIHtwcm9qZWN0c0xpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiA8UHJvamVjdENhcmQga2V5PXtpdGVtLmlkfSBwcm9qZWN0PXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPGltZyBjbGFzc05hbWU9XCJzcUQgbWluLXctWzUwMHB4XSBtdC1bNTAwcHhdIG9wYWNpdHktMTAwIC10cmFuc2xhdGUteC0xLzIgb2JqZWN0LWNvdmVyIHNtOm1pbi13LVs3MDBweF0gb3BhY2l0eS0xMDBcIiBzdHlsZT17eyB6SW5kZXg6IFwiLTEwXCIgfX0gc3JjPVwiL3N0YXRpYy9kb29kbGVzL2hlcm8vcmlnaHQtc3F1aWdnbGUuc3ZnXCIgLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3FEIG1pbi13LVsxMDBweF0gbXQtWzUwcHhdIG9wYWNpdHktMTAwIHRvcC0wIHJpZ2h0LTAgLXRyYW5zbGF0ZS14LTEvMiBvYmplY3QtY292ZXIgc206bWluLXctWzcwMHB4XSBvcGFjaXR5LTEwMFwiIHN0eWxlPXt7IHpJbmRleDogXCItMTBcIiB9fSBzcmM9XCIvc3RhdGljL2Rvb2RsZXMvaGVyby9sZWZ0LXNxdWlnZ2xlLnN2Z1wiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvamVjdHMiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RzIiwib3ZlcndyaXRlUHJvamVjdHMiLCJwcm9qZWN0c0xpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwicHJvamVjdCIsImlkIiwiaW1nIiwic3R5bGUiLCJ6SW5kZXgiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/Projects.tsx\n");

/***/ })

});
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

/***/ "./components/projects/ProjectCard.tsx":
/*!*********************************************!*\
  !*** ./components/projects/ProjectCard.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction ProjectCard(param) {\n    var project = param.project;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: project.link || project.github,\n                target: \"_blank\",\n                className: \"w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    className: \"w-full rounded-md\",\n                    src: project.img,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"w-full mt-5\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex projects-center justify-between\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.link || project.github,\n                                target: \"_blank\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                    className: \"text-lg font-bold\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: project.title\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"space-x-2\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    project.link && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/external-link.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Link Icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 20,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.github && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.github,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/github.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Github Icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 25,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.behance && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.behance,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/behance.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Behance Icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.id == 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"group relative\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                href: \"https://www.instagram.com/reel/Cqs5IvrObKQ/\",\n                                                target: \"_blank\",\n                                                rel: \"noreferrer\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"/static/icons/award.svg\",\n                                                    className: \"text-white\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    alt: \"Award Icon\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: this\n                                                })\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                className: \"hidden group-hover:block absolute bg-gray-800 text-white px-2 py-1 rounded-md text-xs mt-2\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 17\n                                                },\n                                                __self: this\n                                            })\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-fun-gray text-left text-sm\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: project.desc\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"flex flex-wrap items-center mt-2 -ml-2 list-none\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: project.tags.map(function(tag, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/projects/tag/\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.kebabCase)(tag)),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this,\n                                        children: tag\n                                    })\n                                })\n                            }, tag));\n                        })\n                    })\n                ]\n            })\n        ]\n    }, project.id));\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSztBQUNXO0FBQ2I7U0FFbkJJLFdBQVcsQ0FBQyxLQUFXLEVBQUUsQ0FBQztRQUFaQyxPQUFPLEdBQVQsS0FBVyxDQUFUQSxPQUFPOztJQUM1QixNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFvRjs7Ozs7Ozs7aUZBQ2hHQyxDQUFDO2dCQUFDQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxJQUFJTCxPQUFPLENBQUNNLE1BQU07Z0JBQUVDLE1BQU0sRUFBQyxDQUFRO2dCQUFDTCxTQUFTLEVBQUcsQ0FBb0o7Ozs7Ozs7K0ZBQ3ROTSxDQUFHO29CQUFDTixTQUFTLEVBQUMsQ0FBbUI7b0JBQUNPLEdBQUcsRUFBRVQsT0FBTyxDQUFDUSxHQUFHOzs7Ozs7Ozs7a0ZBRXBEUCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7MEZBQ3pCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBc0M7Ozs7Ozs7O2lHQUNsREMsQ0FBQztnQ0FBQ0MsSUFBSSxFQUFFSixPQUFPLENBQUNLLElBQUksSUFBSUwsT0FBTyxDQUFDTSxNQUFNO2dDQUFFQyxNQUFNLEVBQUMsQ0FBUTs7Ozs7OzsrR0FDckRHLENBQUU7b0NBQUNSLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozs4Q0FBRUYsT0FBTyxDQUFDVyxLQUFLOzs7a0dBRWpEVixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7b0NBQ3ZCRixPQUFPLENBQUNLLElBQUkseUVBQ1ZGLENBQUM7d0NBQUNDLElBQUksRUFBRUosT0FBTyxDQUFDSyxJQUFJO3dDQUFFRSxNQUFNLEVBQUMsQ0FBUTt3Q0FBQ0ssR0FBRyxFQUFDLENBQVk7Ozs7Ozs7dUhBQ3BEaEIsbURBQUs7NENBQUNhLEdBQUcsRUFBQyxDQUFpQzs0Q0FBQ0ksS0FBSyxFQUFFLEVBQUU7NENBQUVDLE1BQU0sRUFBRSxFQUFFOzRDQUFFQyxHQUFHLEVBQUMsQ0FBVzs7Ozs7Ozs7O29DQUd0RmYsT0FBTyxDQUFDTSxNQUFNLHlFQUNaSCxDQUFDO3dDQUFDQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ00sTUFBTTt3Q0FBRUMsTUFBTSxFQUFDLENBQVE7d0NBQUNLLEdBQUcsRUFBQyxDQUFZOzs7Ozs7O3VIQUN0RGhCLG1EQUFLOzRDQUFDYSxHQUFHLEVBQUMsQ0FBMEI7NENBQUNJLEtBQUssRUFBRSxFQUFFOzRDQUFFQyxNQUFNLEVBQUUsRUFBRTs0Q0FBRUMsR0FBRyxFQUFDLENBQWE7Ozs7Ozs7OztvQ0FHakZmLE9BQU8sQ0FBQ2dCLE9BQU8seUVBQ2JiLENBQUM7d0NBQUNDLElBQUksRUFBRUosT0FBTyxDQUFDZ0IsT0FBTzt3Q0FBRVQsTUFBTSxFQUFDLENBQVE7d0NBQUNLLEdBQUcsRUFBQyxDQUFZOzs7Ozs7O3VIQUN2RGhCLG1EQUFLOzRDQUFDYSxHQUFHLEVBQUMsQ0FBMkI7NENBQUNJLEtBQUssRUFBRSxFQUFFOzRDQUFFQyxNQUFNLEVBQUUsRUFBRTs0Q0FBRUMsR0FBRyxFQUFDLENBQWM7Ozs7Ozs7OztvQ0FHbkZmLE9BQU8sQ0FBQ2lCLEVBQUUsSUFBSSxDQUFDLDBFQUNiaEIsQ0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7OztpSEFDNUJDLENBQUM7Z0RBQUNDLElBQUksRUFBQyxDQUE2QztnREFBQ0csTUFBTSxFQUFDLENBQVE7Z0RBQUNLLEdBQUcsRUFBQyxDQUFZOzs7Ozs7OytIQUNuRmhCLG1EQUFLO29EQUFDYSxHQUFHLEVBQUMsQ0FBeUI7b0RBQUNQLFNBQVMsRUFBQyxDQUFZO29EQUFDVyxLQUFLLEVBQUUsRUFBRTtvREFBRUMsTUFBTSxFQUFFLEVBQUU7b0RBQUVDLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7aUhBRXBHRyxDQUFJO2dEQUFDaEIsU0FBUyxFQUFDLENBQTRGOzs7Ozs7Ozs7Ozs7Ozt5RkFPbkhpQixDQUFDO3dCQUFDakIsU0FBUyxFQUFDLENBQWlDOzs7Ozs7O2tDQUFFRixPQUFPLENBQUNvQixJQUFJOzt5RkFDM0RDLENBQUU7d0JBQUNuQixTQUFTLEVBQUMsQ0FBa0Q7Ozs7Ozs7a0NBQzdERixPQUFPLENBQUNzQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBRUMsS0FBSyxFQUFLLENBQUM7NEJBQ2pDLE1BQU0sc0VBQ0hDLENBQUU7Ozs7Ozs7K0dBQ0E1QixrREFBSTtvQ0FBQ00sSUFBSSxFQUFHLENBQWMsZ0JBQWlCLE9BQWZQLHVEQUFTLENBQUMyQixHQUFHOzs7Ozs7O21IQUN2Q3ZCLENBQUc7d0NBQUNDLFNBQVMsRUFBQyxDQUFtRjs7Ozs7OztrREFBRXNCLEdBQUc7OzsrQkFGbEdBLEdBQUc7d0JBTWhCLENBQUM7Ozs7O09BL0NrR3hCLE9BQU8sQ0FBQ2lCLEVBQUU7QUFvRHZILENBQUM7S0F0RFFsQixXQUFXO0FBd0RwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdENhcmQudHN4PzE5OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBQcm9qZWN0Q2FyZCh7IHByb2plY3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gbXgtYXV0byBmbGV4IGZsZXgtY29sIHByb2plY3RzLWNlbnRlciBtZDpwcm9qZWN0cy1zdGFydCBtZDpqdXN0aWZ5LWNlbnRlclwiIGtleT17cHJvamVjdC5pZH0+XG4gICAgICA8YSBocmVmPXtwcm9qZWN0LmxpbmsgfHwgcHJvamVjdC5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17YHctZnVsbCByZWxhdGl2ZSByb3VuZGVkLXhsIGJvcmRlci1mdW4tZ3JheSBib3JkZXIgcC0yIHRyYW5zaXRpb24gaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6b3BhY2l0eS03NSBob3Zlcjpib3JkZXItZnVuLXBpbmsgd2lsbC1jaGFuZ2UtcHJvamVjdENhcmRgfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZFwiIHNyYz17cHJvamVjdC5pbWd9IC8+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwcm9qZWN0cy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rIHx8IHByb2plY3QuZ2l0aHVifSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPntwcm9qZWN0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC0yXCI+XG4gICAgICAgICAgICB7cHJvamVjdC5saW5rICYmIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbnMvZXh0ZXJuYWwtbGluay5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGFsdD1cIkxpbmsgSWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvamVjdC5naXRodWIgJiYgKFxuICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmdpdGh1Yn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL2ljb25zL2dpdGh1Yi5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGFsdD1cIkdpdGh1YiBJY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9qZWN0LmJlaGFuY2UgJiYgKFxuICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmJlaGFuY2V9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29ucy9iZWhhbmNlLnN2Z1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gYWx0PVwiQmVoYW5jZSBJY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9qZWN0LmlkID09IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmVlbC9DcXM1SXZyT2JLUS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29ucy9hd2FyZC5zdmdcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBhbHQ9XCJBd2FyZCBJY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGdyb3VwLWhvdmVyOmJsb2NrIGFic29sdXRlIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcHgtMiBweS0xIHJvdW5kZWQtbWQgdGV4dC14cyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZnVuLWdyYXkgdGV4dC1sZWZ0IHRleHQtc21cIj57cHJvamVjdC5kZXNjfTwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBtdC0yIC1tbC0yIGxpc3Qtbm9uZVwiPlxuICAgICAgICAgIHtwcm9qZWN0LnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0YWd9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvdGFnLyR7a2ViYWJDYXNlKHRhZyl9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMSByb3VuZGVkLWxnIHRleHQtc20gYmctZnVuLXBpbmstZGFyayBweS0xIHB4LTIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS03NVwiPnt0YWd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwia2ViYWJDYXNlIiwiTGluayIsIlByb2plY3RDYXJkIiwicHJvamVjdCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwibGluayIsImdpdGh1YiIsInRhcmdldCIsImltZyIsInNyYyIsImgzIiwidGl0bGUiLCJyZWwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJlaGFuY2UiLCJpZCIsInNwYW4iLCJwIiwiZGVzYyIsInVsIiwidGFncyIsIm1hcCIsInRhZyIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/ProjectCard.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction ProjectCard(param) {\n    var project = param.project;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: project.link || project.github,\n                target: \"_blank\",\n                className: \"w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    className: \"w-full rounded-md\",\n                    src: project.img,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"w-full mt-5\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex projects-center justify-between\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.link || project.github,\n                                target: \"_blank\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                    className: \"text-lg font-bold\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: project.title\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"space-x-2\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    project.link && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/external-link.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Link Icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 20,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.github && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.github,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/github.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Github Icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 25,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.behance && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: project.behance,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/static/icons/behance.svg\",\n                                            width: 16,\n                                            height: 16,\n                                            alt: \"Behance Icon\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 17\n                                            },\n                                            __self: this\n                                        })\n                                    }),\n                                    project.id == 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"group\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                            href: \"https://www.instagram.com/reel/Cqs5IvrObKQ/\",\n                                            target: \"_blank\",\n                                            rel: \"noreferrer\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 17\n                                            },\n                                            __self: this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"/static/icons/award.svg\",\n                                                    className: \"text-white\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    alt: \"Award Icon\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: this\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    className: \"hidden group-hover:block absolute bg-gray-800 text-white px-2 py-1 rounded-md text-xs mt-2\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: this,\n                                                    children: \"La Roche Awards\"\n                                                })\n                                            ]\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-fun-gray text-left text-sm\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: project.desc\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"flex flex-wrap items-center mt-2 -ml-2 list-none\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: project.tags.map(function(tag, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/projects/tag/\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.kebabCase)(tag)),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\markh\\\\OneDrive\\\\Documentos\\\\CARRERA ORT\\\\PORTFOLIO\\\\porfolio-public\\\\porfolio-public\\\\components\\\\projects\\\\ProjectCard.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this,\n                                        children: tag\n                                    })\n                                })\n                            }, tag));\n                        })\n                    })\n                ]\n            })\n        ]\n    }, project.id));\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSztBQUNXO0FBQ2I7U0FFbkJJLFdBQVcsQ0FBQyxLQUFXLEVBQUUsQ0FBQztRQUFaQyxPQUFPLEdBQVQsS0FBVyxDQUFUQSxPQUFPOztJQUM1QixNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFvRjs7Ozs7Ozs7aUZBQ2hHQyxDQUFDO2dCQUFDQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxJQUFJTCxPQUFPLENBQUNNLE1BQU07Z0JBQUVDLE1BQU0sRUFBQyxDQUFRO2dCQUFDTCxTQUFTLEVBQUcsQ0FBb0o7Ozs7Ozs7K0ZBQ3ROTSxDQUFHO29CQUFDTixTQUFTLEVBQUMsQ0FBbUI7b0JBQUNPLEdBQUcsRUFBRVQsT0FBTyxDQUFDUSxHQUFHOzs7Ozs7Ozs7a0ZBRXBEUCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7MEZBQ3pCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBc0M7Ozs7Ozs7O2lHQUNsREMsQ0FBQztnQ0FBQ0MsSUFBSSxFQUFFSixPQUFPLENBQUNLLElBQUksSUFBSUwsT0FBTyxDQUFDTSxNQUFNO2dDQUFFQyxNQUFNLEVBQUMsQ0FBUTs7Ozs7OzsrR0FDckRHLENBQUU7b0NBQUNSLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozs4Q0FBRUYsT0FBTyxDQUFDVyxLQUFLOzs7a0dBRWpEVixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7b0NBQ3ZCRixPQUFPLENBQUNLLElBQUkseUVBQ1ZGLENBQUM7d0NBQUNDLElBQUksRUFBRUosT0FBTyxDQUFDSyxJQUFJO3dDQUFFRSxNQUFNLEVBQUMsQ0FBUTt3Q0FBQ0ssR0FBRyxFQUFDLENBQVk7Ozs7Ozs7dUhBQ3BEaEIsbURBQUs7NENBQUNhLEdBQUcsRUFBQyxDQUFpQzs0Q0FBQ0ksS0FBSyxFQUFFLEVBQUU7NENBQUVDLE1BQU0sRUFBRSxFQUFFOzRDQUFFQyxHQUFHLEVBQUMsQ0FBVzs7Ozs7Ozs7O29DQUd0RmYsT0FBTyxDQUFDTSxNQUFNLHlFQUNaSCxDQUFDO3dDQUFDQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ00sTUFBTTt3Q0FBRUMsTUFBTSxFQUFDLENBQVE7d0NBQUNLLEdBQUcsRUFBQyxDQUFZOzs7Ozs7O3VIQUN0RGhCLG1EQUFLOzRDQUFDYSxHQUFHLEVBQUMsQ0FBMEI7NENBQUNJLEtBQUssRUFBRSxFQUFFOzRDQUFFQyxNQUFNLEVBQUUsRUFBRTs0Q0FBRUMsR0FBRyxFQUFDLENBQWE7Ozs7Ozs7OztvQ0FHakZmLE9BQU8sQ0FBQ2dCLE9BQU8seUVBQ2JiLENBQUM7d0NBQUNDLElBQUksRUFBRUosT0FBTyxDQUFDZ0IsT0FBTzt3Q0FBRVQsTUFBTSxFQUFDLENBQVE7d0NBQUNLLEdBQUcsRUFBQyxDQUFZOzs7Ozs7O3VIQUN2RGhCLG1EQUFLOzRDQUFDYSxHQUFHLEVBQUMsQ0FBMkI7NENBQUNJLEtBQUssRUFBRSxFQUFFOzRDQUFFQyxNQUFNLEVBQUUsRUFBRTs0Q0FBRUMsR0FBRyxFQUFDLENBQWM7Ozs7Ozs7OztvQ0FHbkZmLE9BQU8sQ0FBQ2lCLEVBQUUsSUFBSSxDQUFDLHlFQUNiaEIsQ0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLENBQU87Ozs7Ozs7d0hBQ25CQyxDQUFDOzRDQUFDQyxJQUFJLEVBQUMsQ0FBNkM7NENBQUNHLE1BQU0sRUFBQyxDQUFROzRDQUFDSyxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7cUhBQ25GaEIsbURBQUs7b0RBQUNhLEdBQUcsRUFBQyxDQUF5QjtvREFBQ1AsU0FBUyxFQUFDLENBQVk7b0RBQUNXLEtBQUssRUFBRSxFQUFFO29EQUFFQyxNQUFNLEVBQUUsRUFBRTtvREFBRUMsR0FBRyxFQUFDLENBQVk7Ozs7Ozs7O3FIQUNsR0csQ0FBSTtvREFBQ2hCLFNBQVMsRUFBQyxDQUE0Rjs7Ozs7Ozs4REFBQyxDQUFlOzs7Ozs7Ozs7eUZBTXJJaUIsQ0FBQzt3QkFBQ2pCLFNBQVMsRUFBQyxDQUFpQzs7Ozs7OztrQ0FBRUYsT0FBTyxDQUFDb0IsSUFBSTs7eUZBQzNEQyxDQUFFO3dCQUFDbkIsU0FBUyxFQUFDLENBQWtEOzs7Ozs7O2tDQUM3REYsT0FBTyxDQUFDc0IsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUVDLEtBQUssRUFBSyxDQUFDOzRCQUNqQyxNQUFNLHNFQUNIQyxDQUFFOzs7Ozs7OytHQUNBNUIsa0RBQUk7b0NBQUNNLElBQUksRUFBRyxDQUFjLGdCQUFpQixPQUFmUCx1REFBUyxDQUFDMkIsR0FBRzs7Ozs7OzttSEFDdkN2QixDQUFHO3dDQUFDQyxTQUFTLEVBQUMsQ0FBbUY7Ozs7Ozs7a0RBQUVzQixHQUFHOzs7K0JBRmxHQSxHQUFHO3dCQU1oQixDQUFDOzs7OztPQTdDa0d4QixPQUFPLENBQUNpQixFQUFFO0FBa0R2SCxDQUFDO0tBcERRbEIsV0FBVztBQXNEcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RDYXJkLnRzeD8xOThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gUHJvamVjdENhcmQoeyBwcm9qZWN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIG14LWF1dG8gZmxleCBmbGV4LWNvbCBwcm9qZWN0cy1jZW50ZXIgbWQ6cHJvamVjdHMtc3RhcnQgbWQ6anVzdGlmeS1jZW50ZXJcIiBrZXk9e3Byb2plY3QuaWR9PlxuICAgICAgPGEgaHJlZj17cHJvamVjdC5saW5rIHx8IHByb2plY3QuZ2l0aHVifSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2B3LWZ1bGwgcmVsYXRpdmUgcm91bmRlZC14bCBib3JkZXItZnVuLWdyYXkgYm9yZGVyIHAtMiB0cmFuc2l0aW9uIGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOm9wYWNpdHktNzUgaG92ZXI6Ym9yZGVyLWZ1bi1waW5rIHdpbGwtY2hhbmdlLXByb2plY3RDYXJkYH0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWRcIiBzcmM9e3Byb2plY3QuaW1nfSAvPlxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHJvamVjdHMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QubGluayB8fCBwcm9qZWN0LmdpdGh1Yn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57cHJvamVjdC50aXRsZX08L2gzPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtMlwiPlxuICAgICAgICAgICAge3Byb2plY3QubGluayAmJiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc3RhdGljL2ljb25zL2V4dGVybmFsLWxpbmsuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBhbHQ9XCJMaW5rIEljb25cIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2plY3QuZ2l0aHViICYmIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29ucy9naXRodWIuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBhbHQ9XCJHaXRodWIgSWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvamVjdC5iZWhhbmNlICYmIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5iZWhhbmNlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbnMvYmVoYW5jZS5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGFsdD1cIkJlaGFuY2UgSWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvamVjdC5pZCA9PSAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3JlZWwvQ3FzNUl2ck9iS1EvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbnMvYXdhcmQuc3ZnXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PVwiQXdhcmQgSWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gZ3JvdXAtaG92ZXI6YmxvY2sgYWJzb2x1dGUgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBweC0yIHB5LTEgcm91bmRlZC1tZCB0ZXh0LXhzIG10LTJcIj5MYSBSb2NoZSBBd2FyZHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWZ1bi1ncmF5IHRleHQtbGVmdCB0ZXh0LXNtXCI+e3Byb2plY3QuZGVzY308L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgbXQtMiAtbWwtMiBsaXN0LW5vbmVcIj5cbiAgICAgICAgICB7cHJvamVjdC50YWdzLm1hcCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzL3RhZy8ke2tlYmFiQ2FzZSh0YWcpfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEgcm91bmRlZC1sZyB0ZXh0LXNtIGJnLWZ1bi1waW5rLWRhcmsgcHktMSBweC0yIGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNzVcIj57dGFnfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsImtlYmFiQ2FzZSIsIkxpbmsiLCJQcm9qZWN0Q2FyZCIsInByb2plY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsImxpbmsiLCJnaXRodWIiLCJ0YXJnZXQiLCJpbWciLCJzcmMiLCJoMyIsInRpdGxlIiwicmVsIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJiZWhhbmNlIiwiaWQiLCJzcGFuIiwicCIsImRlc2MiLCJ1bCIsInRhZ3MiLCJtYXAiLCJ0YWciLCJpbmRleCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/ProjectCard.tsx\n");

/***/ })

});
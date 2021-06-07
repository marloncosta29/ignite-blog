webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"./node_modules/date-fns/esm/locale/pt-BR/index.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismic-dom */ \"./node_modules/prismic-dom/dist/prismic-dom.min.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/marlon/projetos/Ignite/03-NEXT/desafio/ignite-blog/src/pages/post/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var post = _ref.post;\n  console.log({\n    post: post\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(0),\n      timeToRead = _useState[0],\n      setTimeToRead = _useState[1];\n\n  if (!post) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Carregando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 12\n    }, this);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useEffect\"])(function () {\n    var contentText = prismic_dom__WEBPACK_IMPORTED_MODULE_6__[\"RichText\"].asText(post.data.content);\n    console.log(contentText);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banner,\n      src: post.data.banner.url,\n      alt: \"banner\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: post.data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.info,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiCalendar\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(new Date(post.first_publication_date), 'dd LLL yyyy', {\n            locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiUser\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this), post.data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiClock\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this), \"4 min\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), post.data.content.map(function (content, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: content.heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postContent,\n            dangerouslySetInnerHTML: {\n              __html: prismic_dom__WEBPACK_IMPORTED_MODULE_6__[\"RichText\"].asHtml(content.body)\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Post, \"uZGyQ55GRxuJojW8xSttzkUKAmY=\");\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD80NjczIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwidGltZVRvUmVhZCIsInNldFRpbWVUb1JlYWQiLCJ1c2VFZmZlY3QiLCJjb250ZW50VGV4dCIsIlJpY2hUZXh0IiwiYXNUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJzdHlsZXMiLCJiYW5uZXIiLCJ1cmwiLCJ0aXRsZSIsImluZm8iLCJmb3JtYXQiLCJEYXRlIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsImxvY2FsZSIsInB0QlIiLCJhdXRob3IiLCJtYXAiLCJpbmRleCIsImhlYWRpbmciLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImFzSHRtbCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXVCZSxTQUFTQSxJQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUNoREMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsUUFBSSxFQUFKQTtBQUFGLEdBQVo7O0FBRGdELGtCQUVaRyxzREFBUSxDQUFDLENBQUQsQ0FGSTtBQUFBLE1BRXpDQyxVQUZ5QztBQUFBLE1BRTdCQyxhQUY2Qjs7QUFHaEQsTUFBSSxDQUFDTCxJQUFMLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0RNLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFdBQVcsR0FBR0Msb0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQlQsSUFBSSxDQUFDVSxJQUFMLENBQVVDLE9BQTFCLENBQXBCO0FBQ0FWLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSyxXQUFaO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVLLHdEQUFNLENBQUNDLE1BQXZCO0FBQStCLFNBQUcsRUFBRWIsSUFBSSxDQUFDVSxJQUFMLENBQVVHLE1BQVYsQ0FBaUJDLEdBQXJEO0FBQTBELFNBQUcsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtkLElBQUksQ0FBQ1UsSUFBTCxDQUFVSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBRUgsd0RBQU0sQ0FBQ0ksSUFBdkI7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR0MsdURBQU0sQ0FBQyxJQUFJQyxJQUFKLENBQVNsQixJQUFJLENBQUNtQixzQkFBZCxDQUFELEVBQXdDLGFBQXhDLEVBQXVEO0FBQzVEQyxrQkFBTSxFQUFFQyw2REFBSUE7QUFEZ0QsV0FBdkQsQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFBLGtDQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR3JCLElBQUksQ0FBQ1UsSUFBTCxDQUFVWSxNQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVdFO0FBQUEsa0NBQ0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFpQkd0QixJQUFJLENBQUNVLElBQUwsQ0FBVUMsT0FBVixDQUFrQlksR0FBbEIsQ0FBc0IsVUFBQ1osT0FBRCxFQUFVYSxLQUFWLEVBQW9CO0FBQ3pDLDRCQUNFO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS2IsT0FBTyxDQUFDYztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLHFCQUFTLEVBQUViLHdEQUFNLENBQUNjLFdBRHBCO0FBRUUsbUNBQXVCLEVBQUU7QUFDdkJDLG9CQUFNLEVBQUVuQixvREFBUSxDQUFDb0IsTUFBVCxDQUFnQmpCLE9BQU8sQ0FBQ2tCLElBQXhCO0FBRGU7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVVMLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVdELE9BWkEsQ0FqQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQXFDRDs7R0EvQ3VCekIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcblxuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ByaXNtaWMnO1xuXG5pbXBvcnQgY29tbW9uU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21tb24ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEZpQ2FsZW5kYXIsIEZpQ2xvY2ssIEZpVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUic7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtZG9tJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQb3N0IHtcbiAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgZGF0YToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYmFubmVyOiB7XG4gICAgICB1cmw6IHN0cmluZztcbiAgICB9O1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgfVtdO1xuICAgIH1bXTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHBvc3Q6IFBvc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH06IFBvc3RQcm9wcykge1xuICBjb25zb2xlLmxvZyh7IHBvc3QgfSk7XG4gIGNvbnN0IFt0aW1lVG9SZWFkLCBzZXRUaW1lVG9SZWFkXSA9IHVzZVN0YXRlKDApO1xuICBpZiAoIXBvc3QpIHtcbiAgICByZXR1cm4gPGgxPkNhcnJlZ2FuZG8uLi48L2gxPjtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUZXh0ID0gUmljaFRleHQuYXNUZXh0KHBvc3QuZGF0YS5jb250ZW50KTtcbiAgICBjb25zb2xlLmxvZyhjb250ZW50VGV4dCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9IHNyYz17cG9zdC5kYXRhLmJhbm5lci51cmx9IGFsdD1cImJhbm5lclwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPntwb3N0LmRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICA8dGltZT5cbiAgICAgICAgICAgIDxGaUNhbGVuZGFyIC8+XG4gICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKHBvc3QuZmlyc3RfcHVibGljYXRpb25fZGF0ZSksICdkZCBMTEwgeXl5eScsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOiBwdEJSLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90aW1lPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEZpVXNlciAvPlxuICAgICAgICAgICAge3Bvc3QuZGF0YS5hdXRob3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEZpQ2xvY2sgLz40IG1pblxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwb3N0LmRhdGEuY29udGVudC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxoMT57Y29udGVudC5oZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBSaWNoVGV4dC5hc0h0bWwoY29udGVudC5ib2R5KSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFxuICAgIFtQcmlzbWljLnByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAncG9zdCcpXSxcbiAgICB7IHBhZ2VTaXplOiAxIH1cbiAgKTtcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG4gICAgcmV0dXJuIHsgcGFyYW1zOiB7IHNsdWc6IGl0ZW0udWlkIH0gfTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHBhdGhzKTtcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwb3N0JywgU3RyaW5nKHNsdWcpLCB7fSk7XG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICBiYW5uZXI6IHtcbiAgICAgICAgdXJsOiByZXNwb25zZS5kYXRhLmJhbm5lci51cmwsXG4gICAgICB9LFxuICAgICAgYXV0aG9yOiByZXNwb25zZS5kYXRhLmF1dGhvcixcbiAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudC5tYXAoY29udCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGluZzogY29udC5oZWFkaW5nLFxuICAgICAgICAgIGJvZHk6IGNvbnQuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIH0sXG4gICAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogcmVzcG9uc2UuZmlyc3RfcHVibGljYXRpb25fZGF0ZSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

/***/ })

})
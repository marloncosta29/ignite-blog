webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"./node_modules/date-fns/esm/locale/pt-BR/index.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismic-dom */ \"./node_modules/prismic-dom/dist/prismic-dom.min.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/marlon/projetos/Ignite/03-NEXT/desafio/ignite-blog/src/pages/post/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction formattedTime(seconds) {\n  var helperDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"addSeconds\"])(new Date(0), seconds);\n  return Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(helperDate, 'mm:ss');\n}\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var post = _ref.post;\n  console.log({\n    post: post\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(0),\n      timeToRead = _useState[0],\n      setTimeToRead = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useEffect\"])(function () {\n    if (post) {\n      var contentText = [];\n      post.data.content.map(function (content) {\n        contentText.push(prismic_dom__WEBPACK_IMPORTED_MODULE_6__[\"RichText\"].asText(content.body));\n      });\n      var totalWords = contentText.join(' ').split(' ').length;\n      setTimeToRead(totalWords / 200 * 60);\n    }\n  }, [post]);\n\n  if (!post) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Carregando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banner,\n      src: post.data.banner.url,\n      alt: \"banner\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: post.data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.info,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiCalendar\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, this), Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(new Date(post.first_publication_date), 'dd LLL yyyy', {\n            locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiUser\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this), post.data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiClock\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this), formattedTime(timeToRead)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), post.data.content.map(function (content, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: content.heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postContent,\n            dangerouslySetInnerHTML: {\n              __html: prismic_dom__WEBPACK_IMPORTED_MODULE_6__[\"RichText\"].asHtml(content.body)\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 13\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Post, \"uZGyQ55GRxuJojW8xSttzkUKAmY=\");\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD80NjczIl0sIm5hbWVzIjpbImZvcm1hdHRlZFRpbWUiLCJzZWNvbmRzIiwiaGVscGVyRGF0ZSIsImFkZFNlY29uZHMiLCJEYXRlIiwiZm9ybWF0IiwiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJ0aW1lVG9SZWFkIiwic2V0VGltZVRvUmVhZCIsInVzZUVmZmVjdCIsImNvbnRlbnRUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJtYXAiLCJwdXNoIiwiUmljaFRleHQiLCJhc1RleHQiLCJib2R5IiwidG90YWxXb3JkcyIsImpvaW4iLCJzcGxpdCIsImxlbmd0aCIsInN0eWxlcyIsImJhbm5lciIsInVybCIsInRpdGxlIiwiaW5mbyIsImZpcnN0X3B1YmxpY2F0aW9uX2RhdGUiLCJsb2NhbGUiLCJwdEJSIiwiYXV0aG9yIiwiaW5kZXgiLCJoZWFkaW5nIiwicG9zdENvbnRlbnQiLCJfX2h0bWwiLCJhc0h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQzlCLE1BQUlDLFVBQVUsR0FBR0MsMkRBQVUsQ0FBQyxJQUFJQyxJQUFKLENBQVMsQ0FBVCxDQUFELEVBQWNILE9BQWQsQ0FBM0I7QUFDQSxTQUFPSSx1REFBTSxDQUFDSCxVQUFELEVBQWEsT0FBYixDQUFiO0FBQ0Q7OztBQXVCYyxTQUFTSSxJQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUNoREMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsUUFBSSxFQUFKQTtBQUFGLEdBQVo7O0FBRGdELGtCQUVaRyxzREFBUSxDQUFDLENBQUQsQ0FGSTtBQUFBLE1BRXpDQyxVQUZ5QztBQUFBLE1BRTdCQyxh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IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCc7XG5cbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcmlzbWljJztcblxuaW1wb3J0IGNvbW1vblN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tbW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBGaUNhbGVuZGFyLCBGaUNsb2NrLCBGaVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgeyBmb3JtYXQsIGFkZFNlY29uZHMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBmb3JtYXR0ZWRUaW1lKHNlY29uZHMpIHtcbiAgdmFyIGhlbHBlckRhdGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKDApLCBzZWNvbmRzKTtcbiAgcmV0dXJuIGZvcm1hdChoZWxwZXJEYXRlLCAnbW06c3MnKTtcbn1cblxuaW50ZXJmYWNlIFBvc3Qge1xuICBmaXJzdF9wdWJsaWNhdGlvbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICBkYXRhOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBiYW5uZXI6IHtcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY29udGVudDoge1xuICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgYm9keToge1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICB9W107XG4gICAgfVtdO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDogUG9zdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfTogUG9zdFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHsgcG9zdCB9KTtcbiAgY29uc3QgW3RpbWVUb1JlYWQsIHNldFRpbWVUb1JlYWRdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBvc3QpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0ID0gW107XG4gICAgICBwb3N0LmRhdGEuY29udGVudC5tYXAoY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnRUZXh0LnB1c2goUmljaFRleHQuYXNUZXh0KGNvbnRlbnQuYm9keSkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0b3RhbFdvcmRzID0gY29udGVudFRleHQuam9pbignICcpLnNwbGl0KCcgJykubGVuZ3RoO1xuICAgICAgc2V0VGltZVRvUmVhZCgodG90YWxXb3JkcyAvIDIwMCkgKiA2MCk7XG4gICAgfVxuICB9LCBbcG9zdF0pO1xuXG4gIGlmICghcG9zdCkge1xuICAgIHJldHVybiA8aDE+Q2FycmVnYW5kby4uLjwvaDE+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9IHNyYz17cG9zdC5kYXRhLmJhbm5lci51cmx9IGFsdD1cImJhbm5lclwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPntwb3N0LmRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICA8dGltZT5cbiAgICAgICAgICAgIDxGaUNhbGVuZGFyIC8+XG4gICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKHBvc3QuZmlyc3RfcHVibGljYXRpb25fZGF0ZSksICdkZCBMTEwgeXl5eScsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOiBwdEJSLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90aW1lPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEZpVXNlciAvPlxuICAgICAgICAgICAge3Bvc3QuZGF0YS5hdXRob3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEZpQ2xvY2sgLz5cbiAgICAgICAgICAgIHtmb3JtYXR0ZWRUaW1lKHRpbWVUb1JlYWQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwb3N0LmRhdGEuY29udGVudC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxoMT57Y29udGVudC5oZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBSaWNoVGV4dC5hc0h0bWwoY29udGVudC5ib2R5KSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFxuICAgIFtQcmlzbWljLnByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAncG9zdCcpXSxcbiAgICB7IHBhZ2VTaXplOiAxIH1cbiAgKTtcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG4gICAgcmV0dXJuIHsgcGFyYW1zOiB7IHNsdWc6IGl0ZW0udWlkIH0gfTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHBhdGhzKTtcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwb3N0JywgU3RyaW5nKHNsdWcpLCB7fSk7XG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEudGl0bGUsXG4gICAgICBiYW5uZXI6IHtcbiAgICAgICAgdXJsOiByZXNwb25zZS5kYXRhLmJhbm5lci51cmwsXG4gICAgICB9LFxuICAgICAgYXV0aG9yOiByZXNwb25zZS5kYXRhLmF1dGhvcixcbiAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGEuY29udGVudC5tYXAoY29udCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGluZzogY29udC5oZWFkaW5nLFxuICAgICAgICAgIGJvZHk6IGNvbnQuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIH0sXG4gICAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogcmVzcG9uc2UuZmlyc3RfcHVibGljYXRpb25fZGF0ZSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

/***/ })

})
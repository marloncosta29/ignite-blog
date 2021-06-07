webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"./node_modules/date-fns/esm/locale/pt-BR/index.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismic-dom */ \"./node_modules/prismic-dom/dist/prismic-dom.min.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/marlon/projetos/Ignite/03-NEXT/desafio/ignite-blog/src/pages/post/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var post = _ref.post;\n  console.log({\n    post: post\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(0),\n      timeToRead = _useState[0],\n      setTimeToRead = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useEffect\"])(function () {\n    if (post) {\n      var contentText = [];\n      post.data.content.map(function (content) {\n        contentText.push(prismic_dom__WEBPACK_IMPORTED_MODULE_6__[\"RichText\"].asText(content.body));\n      });\n      var totalWords = contentText.join(' ').split(' ').length;\n      console.log(contentText);\n    }\n  }, [post]);\n\n  if (!post) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Carregando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banner,\n      src: post.data.banner.url,\n      alt: \"banner\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: post.data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.info,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiCalendar\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this), Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(new Date(post.first_publication_date), 'dd LLL yyyy', {\n            locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiUser\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this), post.data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiClock\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this), \"4 min\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), post.data.content.map(function (content, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: content.heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postContent,\n            dangerouslySetInnerHTML: {\n              __html: prismic_dom__WEBPACK_IMPORTED_MODULE_6__[\"RichText\"].asHtml(content.body)\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Post, \"uZGyQ55GRxuJojW8xSttzkUKAmY=\");\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD80NjczIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwidGltZVRvUmVhZCIsInNldFRpbWVUb1JlYWQiLCJ1c2VFZmZlY3QiLCJjb250ZW50VGV4dCIsImRhdGEiLCJjb250ZW50IiwibWFwIiwicHVzaCIsIlJpY2hUZXh0IiwiYXNUZXh0IiwiYm9keSIsInRvdGFsV29yZHMiLCJqb2luIiwic3BsaXQiLCJsZW5ndGgiLCJzdHlsZXMiLCJiYW5uZXIiLCJ1cmwiLCJ0aXRsZSIsImluZm8iLCJmb3JtYXQiLCJEYXRlIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsImxvY2FsZSIsInB0QlIiLCJhdXRob3IiLCJpbmRleCIsImhlYWRpbmciLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImFzSHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdUJlLFNBQVNBLElBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQ2hEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixRQUFJLEVBQUpBO0FBQUYsR0FBWjs7QUFEZ0Qsa0JBRVpHLHNEQUFRLENBQUMsQ0FBRCxDQUZJO0FBQUEsTUFFekNDLFVBRnlDO0FBQUEsTUFFN0JDLGFBRjZCOztBQUdoREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sSUFBSixFQUFVO0FBQ1IsVUFBTU8sV0FBVyxHQUFHLEVBQXBCO0FBQ0FQLFVBQUksQ0FBQ1EsSUFBTCxDQUFVQyxPQUFWLENBQWtCQyxHQUFsQixDQUFzQixVQUFBRCxPQUFPLEVBQUk7QUFDL0JGLG1CQUFXLENBQUNJLElBQVosQ0FBaUJDLG9EQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLE9BQU8sQ0FBQ0ssSUFBeEIsQ0FBakI7QUFDRCxPQUZEO0FBR0EsVUFBTUMsVUFBVSxHQUFHUixXQUFXLENBQUNTLElBQVosQ0FBaUIsR0FBakIsRUFBc0JDLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDQyxNQUFwRDtBQUNBakIsYUFBTyxDQUFDQyxHQUFSLENBQVlLLFdBQVo7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDUCxJQUFELENBVE0sQ0FBVDs7QUFXQSxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFbUIsd0RBQU0sQ0FBQ0MsTUFBdkI7QUFBK0IsU0FBRyxFQUFFcEIsSUFBSSxDQUFDUSxJQUFMLENBQVVZLE1BQVYsQ0FBaUJDLEdBQXJEO0FBQTBELFNBQUcsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtyQixJQUFJLENBQUNRLElBQUwsQ0FBVWM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVILHdEQUFNLENBQUNJLElBQXZCO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdDLHVEQUFNLENBQUMsSUFBSUMsSUFBSixDQUFTekIsSUFBSSxDQUFDMEIsc0JBQWQsQ0FBRCxFQUF3QyxhQUF4QyxFQUF1RDtBQUM1REMsa0JBQU0sRUFBRUMsNkRBQUlBO0FBRGdELFdBQXZELENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBQSxrQ0FDRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUc1QixJQUFJLENBQUNRLElBQUwsQ0FBVXFCLE1BRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBV0U7QUFBQSxrQ0FDRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQWlCRzdCLElBQUksQ0FBQ1EsSUFBTCxDQUFVQyxPQUFWLENBQWtCQyxHQUFsQixDQUFzQixVQUFDRCxPQUFELEVBQVVxQixLQUFWLEVBQW9CO0FBQ3pDLDRCQUNFO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS3JCLE9BQU8sQ0FBQ3NCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UscUJBQVMsRUFBRVosd0RBQU0sQ0FBQ2EsV0FEcEI7QUFFRSxtQ0FBdUIsRUFBRTtBQUN2QkMsb0JBQU0sRUFBRXJCLG9EQUFRLENBQUNzQixNQUFULENBQWdCekIsT0FBTyxDQUFDSyxJQUF4QjtBQURlO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFVZ0IsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBV0QsT0FaQSxDQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBcUNEOztHQXZEdUIvQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnO1xuXG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJpc21pYyc7XG5cbmltcG9ydCBjb21tb25TdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbW1vbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgRmlDYWxlbmRhciwgRmlDbG9jaywgRmlVc2VyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1kb20nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFBvc3Qge1xuICBmaXJzdF9wdWJsaWNhdGlvbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICBkYXRhOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBiYW5uZXI6IHtcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY29udGVudDoge1xuICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgYm9keToge1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICB9W107XG4gICAgfVtdO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDogUG9zdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfTogUG9zdFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHsgcG9zdCB9KTtcbiAgY29uc3QgW3RpbWVUb1JlYWQsIHNldFRpbWVUb1JlYWRdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBvc3QpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0ID0gW107XG4gICAgICBwb3N0LmRhdGEuY29udGVudC5tYXAoY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnRUZXh0LnB1c2goUmljaFRleHQuYXNUZXh0KGNvbnRlbnQuYm9keSkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0b3RhbFdvcmRzID0gY29udGVudFRleHQuam9pbignICcpLnNwbGl0KCcgJykubGVuZ3RoO1xuICAgICAgY29uc29sZS5sb2coY29udGVudFRleHQpO1xuICAgIH1cbiAgfSwgW3Bvc3RdKTtcblxuICBpZiAoIXBvc3QpIHtcbiAgICByZXR1cm4gPGgxPkNhcnJlZ2FuZG8uLi48L2gxPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfSBzcmM9e3Bvc3QuZGF0YS5iYW5uZXIudXJsfSBhbHQ9XCJiYW5uZXJcIiAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMT57cG9zdC5kYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICA8RmlDYWxlbmRhciAvPlxuICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShwb3N0LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUpLCAnZGQgTExMIHl5eXknLCB7XG4gICAgICAgICAgICAgIGxvY2FsZTogcHRCUixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxGaVVzZXIgLz5cbiAgICAgICAgICAgIHtwb3N0LmRhdGEuYXV0aG9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxGaUNsb2NrIC8+NCBtaW5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cG9zdC5kYXRhLmNvbnRlbnQubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8aDE+e2NvbnRlbnQuaGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogUmljaFRleHQuYXNIdG1sKGNvbnRlbnQuYm9keSksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcHJpc21pYy5xdWVyeShcbiAgICBbUHJpc21pYy5wcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3Bvc3QnKV0sXG4gICAgeyBwYWdlU2l6ZTogMSB9XG4gICk7XG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcblxuICBjb25zdCBwYXRocyA9IHBvc3RzLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xuICAgIHJldHVybiB7IHBhcmFtczogeyBzbHVnOiBpdGVtLnVpZCB9IH07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhwYXRocyk7XG5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5nZXRCeVVJRCgncG9zdCcsIFN0cmluZyhzbHVnKSwge30pO1xuICBjb25zdCBwb3N0ID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgYmFubmVyOiB7XG4gICAgICAgIHVybDogcmVzcG9uc2UuZGF0YS5iYW5uZXIudXJsLFxuICAgICAgfSxcbiAgICAgIGF1dGhvcjogcmVzcG9uc2UuZGF0YS5hdXRob3IsXG4gICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhLmNvbnRlbnQubWFwKGNvbnQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhlYWRpbmc6IGNvbnQuaGVhZGluZyxcbiAgICAgICAgICBib2R5OiBjb250LmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICB9LFxuICAgIGZpcnN0X3B1YmxpY2F0aW9uX2RhdGU6IHJlc3BvbnNlLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUsXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

/***/ })

})
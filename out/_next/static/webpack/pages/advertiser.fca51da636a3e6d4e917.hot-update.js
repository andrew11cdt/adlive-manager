/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/advertiser",{

/***/ "./resources/components/toaster/index.tsx":
/*!************************************************!*\
  !*** ./resources/components/toaster/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TYPE_TO_ICON\": function() { return /* binding */ TYPE_TO_ICON; },\n/* harmony export */   \"Toaster\": function() { return /* binding */ Toaster; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ \"./resources/components/icon/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./resources/components/toaster/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/dung/adlive_FrontEnd/resources/components/toaster/index.tsx\";\n\n\n\nvar TYPE_TO_ICON = {\n  success: \"success\",\n  warning: \"attention\",\n  error: \"error\"\n};\nfunction Toaster(_ref) {\n  var handleSetToast = _ref.handleSetToast,\n      type = _ref.type,\n      message = _ref.message,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? type : _ref$title,\n      _ref$delay = _ref.delay,\n      delay = _ref$delay === void 0 ? 6000 : _ref$delay;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Toast, {\n    className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toaster), \" \").concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[type]),\n    onClose: function onClose() {\n      return handleSetToast(null);\n    },\n    show: !!message,\n    delay: delay,\n    autohide: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Toast.Header, {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().leftHead),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.AdIcon, {\n          className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon), \" \").concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[type]),\n          name: TYPE_TO_ICON[type]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n          children: title === null || title === void 0 ? void 0 : title.toUpperCase()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Toast.Body, {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n_c = Toaster;\n\nvar _c;\n\n$RefreshReg$(_c, \"Toaster\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvdG9hc3Rlci9pbmRleC50c3g/MTZhMyJdLCJuYW1lcyI6WyJUWVBFX1RPX0lDT04iLCJzdWNjZXNzIiwid2FybmluZyIsImVycm9yIiwiVG9hc3RlciIsImhhbmRsZVNldFRvYXN0IiwidHlwZSIsIm1lc3NhZ2UiLCJ0aXRsZSIsImRlbGF5Iiwic3R5bGVzIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBVU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxTQUFPLEVBQUUsU0FEaUI7QUFFMUJDLFNBQU8sRUFBRSxXQUZpQjtBQUcxQkMsT0FBSyxFQUFFO0FBSG1CLENBQXJCO0FBS0EsU0FBU0MsT0FBVCxPQU1VO0FBQUEsTUFMZkMsY0FLZSxRQUxmQSxjQUtlO0FBQUEsTUFKZkMsSUFJZSxRQUpmQSxJQUllO0FBQUEsTUFIZkMsT0FHZSxRQUhmQSxPQUdlO0FBQUEsd0JBRmZDLEtBRWU7QUFBQSxNQUZmQSxLQUVlLDJCQUZQRixJQUVPO0FBQUEsd0JBRGZHLEtBQ2U7QUFBQSxNQURmQSxLQUNlLDJCQURQLElBQ087QUFDZixzQkFDRSw4REFBQyxrREFBRDtBQUNFLGFBQVMsWUFBS0Msb0VBQUwsY0FBdUJBLDREQUFNLENBQUNKLElBQUQsQ0FBN0IsQ0FEWDtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsS0FGWDtBQUdFLFFBQUksRUFBRSxDQUFDLENBQUNFLE9BSFY7QUFJRSxTQUFLLEVBQUVFLEtBSlQ7QUFLRSxZQUFRLEVBQUUsSUFMWjtBQUFBLDRCQU9FLDhEQUFDLHlEQUFEO0FBQWMsZUFBUyxFQUFFQyxtRUFBekI7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUVBLHFFQUFqQjtBQUFBLGdDQUNFLDhEQUFDLHlDQUFEO0FBQVEsbUJBQVMsWUFBS0EsaUVBQUwsY0FBb0JBLDREQUFNLENBQUNKLElBQUQsQ0FBMUIsQ0FBakI7QUFBcUQsY0FBSSxFQUFFTixZQUFZLENBQUNNLElBQUQ7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQVEsbUJBQVMsRUFBRUksa0VBQW5CO0FBQUEsb0JBQWtDRixLQUFsQyxhQUFrQ0EsS0FBbEMsdUJBQWtDQSxLQUFLLENBQUVHLFdBQVA7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFhRSw4REFBQyx1REFBRDtBQUFBLGdCQUFhSjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQXhCZUgsTyIsImZpbGUiOiIuL3Jlc291cmNlcy9jb21wb25lbnRzL3RvYXN0ZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBBZEljb24gfSBmcm9tIFwiLi4vaWNvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcbmludGVyZmFjZSBUb2FzdGVyUHJvcHMge1xuICB0eXBlOiBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwiO1xuICBzaG93U3RhdHVzPzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlbGF5PzogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgaGFuZGxlU2V0VG9hc3Q6IEZ1bmN0aW9uO1xufVxuZXhwb3J0IGNvbnN0IFRZUEVfVE9fSUNPTiA9IHtcbiAgc3VjY2VzczogXCJzdWNjZXNzXCIsXG4gIHdhcm5pbmc6IFwiYXR0ZW50aW9uXCIsXG4gIGVycm9yOiBcImVycm9yXCIsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIFRvYXN0ZXIoe1xuICBoYW5kbGVTZXRUb2FzdCxcbiAgdHlwZSxcbiAgbWVzc2FnZSxcbiAgdGl0bGUgPSB0eXBlLFxuICBkZWxheSA9IDYwMDAsXG59OiBUb2FzdGVyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VG9hc3RcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvYXN0ZXJ9ICR7c3R5bGVzW3R5cGVdfWB9XG4gICAgICBvbkNsb3NlPXsoKSA9PiBoYW5kbGVTZXRUb2FzdChudWxsKX1cbiAgICAgIHNob3c9eyEhbWVzc2FnZX1cbiAgICAgIGRlbGF5PXtkZWxheX1cbiAgICAgIGF1dG9oaWRlPXt0cnVlfVxuICAgID5cbiAgICAgIDxUb2FzdC5IZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGVmdEhlYWR9PlxuICAgICAgICAgIDxBZEljb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaWNvbn0gJHtzdHlsZXNbdHlwZV19YH0gbmFtZT17VFlQRV9UT19JQ09OW3R5cGVdfSAvPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZT8udG9VcHBlckNhc2UoKX08L3N0cm9uZz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Ub2FzdC5IZWFkZXI+XG4gICAgICA8VG9hc3QuQm9keT57bWVzc2FnZX08L1RvYXN0LkJvZHk+XG4gICAgPC9Ub2FzdD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/components/toaster/index.tsx\n");

/***/ })

});
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TYPE_TO_ICON\": function() { return /* binding */ TYPE_TO_ICON; },\n/* harmony export */   \"Toaster\": function() { return /* binding */ Toaster; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ \"./resources/components/icon/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./resources/components/toaster/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/dung/adlive_FrontEnd/resources/components/toaster/index.tsx\";\n\n\n\nvar TYPE_TO_ICON = {\n  success: \"check-in-a-circle\",\n  warning: \"attention\",\n  error: \"x-in-a-circle\"\n};\nfunction Toaster(_ref) {\n  var handleSetToast = _ref.handleSetToast,\n      type = _ref.type,\n      message = _ref.message,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? type : _ref$title,\n      _ref$delay = _ref.delay,\n      delay = _ref$delay === void 0 ? 6000 : _ref$delay;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Toast, {\n    className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toaster), \" \").concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[type]),\n    onClose: function onClose() {\n      return handleSetToast(null);\n    },\n    show: !!message,\n    delay: delay,\n    autohide: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Toast.Header, {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().leftHead),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.AdIcon, {\n          name: TYPE_TO_ICON[type]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n          children: title === null || title === void 0 ? void 0 : title.toUpperCase()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Toast.Body, {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n_c = Toaster;\n\nvar _c;\n\n$RefreshReg$(_c, \"Toaster\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvdG9hc3Rlci9pbmRleC50c3g/MTZhMyJdLCJuYW1lcyI6WyJUWVBFX1RPX0lDT04iLCJzdWNjZXNzIiwid2FybmluZyIsImVycm9yIiwiVG9hc3RlciIsImhhbmRsZVNldFRvYXN0IiwidHlwZSIsIm1lc3NhZ2UiLCJ0aXRsZSIsImRlbGF5Iiwic3R5bGVzIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBVU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxTQUFPLEVBQUUsbUJBRGlCO0FBRTFCQyxTQUFPLEVBQUUsV0FGaUI7QUFHMUJDLE9BQUssRUFBRTtBQUhtQixDQUFyQjtBQUtBLFNBQVNDLE9BQVQsT0FNVTtBQUFBLE1BTGZDLGNBS2UsUUFMZkEsY0FLZTtBQUFBLE1BSmZDLElBSWUsUUFKZkEsSUFJZTtBQUFBLE1BSGZDLE9BR2UsUUFIZkEsT0FHZTtBQUFBLHdCQUZmQyxLQUVlO0FBQUEsTUFGZkEsS0FFZSwyQkFGUEYsSUFFTztBQUFBLHdCQURmRyxLQUNlO0FBQUEsTUFEZkEsS0FDZSwyQkFEUCxJQUNPO0FBQ2Ysc0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxhQUFTLFlBQUtDLG9FQUFMLGNBQXVCQSw0REFBTSxDQUFDSixJQUFELENBQTdCLENBRFg7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBLEtBRlg7QUFHRSxRQUFJLEVBQUUsQ0FBQyxDQUFDRSxPQUhWO0FBSUUsU0FBSyxFQUFFRSxLQUpUO0FBS0UsWUFBUSxFQUFFLElBTFo7QUFBQSw0QkFPRSw4REFBQyx5REFBRDtBQUFjLGVBQVMsRUFBRUMsbUVBQXpCO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFFQSxxRUFBakI7QUFBQSxnQ0FDRSw4REFBQyx5Q0FBRDtBQUFRLGNBQUksRUFBRVYsWUFBWSxDQUFDTSxJQUFEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFRLG1CQUFTLEVBQUVJLGtFQUFuQjtBQUFBLG9CQUFrQ0YsS0FBbEMsYUFBa0NBLEtBQWxDLHVCQUFrQ0EsS0FBSyxDQUFFRyxXQUFQO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBYUUsOERBQUMsdURBQUQ7QUFBQSxnQkFBYUo7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7S0F4QmVILE8iLCJmaWxlIjoiLi9yZXNvdXJjZXMvY29tcG9uZW50cy90b2FzdGVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uL2ljb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5pbnRlcmZhY2UgVG9hc3RlclByb3BzIHtcbiAgdHlwZTogXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIjtcbiAgc2hvd1N0YXR1cz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZWxheT86IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGhhbmRsZVNldFRvYXN0OiBGdW5jdGlvbjtcbn1cbmV4cG9ydCBjb25zdCBUWVBFX1RPX0lDT04gPSB7XG4gIHN1Y2Nlc3M6IFwiY2hlY2staW4tYS1jaXJjbGVcIixcbiAgd2FybmluZzogXCJhdHRlbnRpb25cIixcbiAgZXJyb3I6IFwieC1pbi1hLWNpcmNsZVwiLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBUb2FzdGVyKHtcbiAgaGFuZGxlU2V0VG9hc3QsXG4gIHR5cGUsXG4gIG1lc3NhZ2UsXG4gIHRpdGxlID0gdHlwZSxcbiAgZGVsYXkgPSA2MDAwLFxufTogVG9hc3RlclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFRvYXN0XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50b2FzdGVyfSAke3N0eWxlc1t0eXBlXX1gfVxuICAgICAgb25DbG9zZT17KCkgPT4gaGFuZGxlU2V0VG9hc3QobnVsbCl9XG4gICAgICBzaG93PXshIW1lc3NhZ2V9XG4gICAgICBkZWxheT17ZGVsYXl9XG4gICAgICBhdXRvaGlkZT17dHJ1ZX1cbiAgICA+XG4gICAgICA8VG9hc3QuSGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRIZWFkfT5cbiAgICAgICAgICA8QWRJY29uIG5hbWU9e1RZUEVfVE9fSUNPTlt0eXBlXX0gLz5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGU/LnRvVXBwZXJDYXNlKCl9PC9zdHJvbmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVG9hc3QuSGVhZGVyPlxuICAgICAgPFRvYXN0LkJvZHk+e21lc3NhZ2V9PC9Ub2FzdC5Cb2R5PlxuICAgIDwvVG9hc3Q+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/components/toaster/index.tsx\n");

/***/ })

});
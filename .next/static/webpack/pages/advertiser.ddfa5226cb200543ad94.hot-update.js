/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/advertiser",{

/***/ "./resources/pages-components/advertiser/screen/location-setting/index.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/location-setting/index.tsx ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LocationSetting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/button */ \"./resources/components/button/index.tsx\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/card */ \"./resources/components/card/index.tsx\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/divider */ \"./resources/components/divider/index.tsx\");\n/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/icon */ \"./resources/components/icon/index.tsx\");\n/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/typography */ \"./resources/components/typography/index.tsx\");\n/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sub-layout */ \"./resources/pages-components/sub-layout/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./resources/pages-components/advertiser/screen/location-setting/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/andrew/adlive_FrontEnd/resources/pages-components/advertiser/screen/location-setting/index.tsx\";\n\n\n\n\n\n\n\nfunction LocationSetting(_ref) {\n  var _locationData$address,\n      _this = this;\n\n  var returnPreLayout = _ref.returnPreLayout,\n      locationData = _ref.locationData;\n  {\n    console.log({\n      locationData: locationData\n    });\n  }\n\n  var addArea = function addArea(area) {};\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n    header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.default, {\n        variant: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW,\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().icon),\n        type: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_TYPE.BOLD,\n        size: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_SIZE.SMALL,\n        onClick: returnPreLayout\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_5__.AdsliveH4, {\n        children: \"Location Setting\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true),\n    content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.default, {\n        header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: locationData.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this),\n        body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.CardInput, {\n            title: \"address\",\n            value: (_locationData$address = locationData.address) === null || _locationData$address === void 0 ? void 0 : _locationData$address.description,\n            onIputChange: function onIputChange(event) {\n              console.log(event);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 17\n          }, this), locationData && locationData.areas.map(function (area) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.CardDragItem, {\n                onDelete: null,\n                onDrag: null,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  children: area.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 27\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-4\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 27\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 25\n              }, _this)]\n            }, area.recId, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 23\n            }, _this);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_1__.IconLinkButton, {\n            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.default, {\n              variant: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_VARIANT.CIRCLE_PLUS,\n              color: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_COLOR.PRIMARY,\n              type: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_TYPE.BOLD,\n              size: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_SIZE.SMALL\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 21\n            }, this),\n            title: \"ADD MORE AREA\",\n            style: {\n              padding: \"20px\"\n            },\n            onClick: addArea\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.default, {\n          body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_1__.IconLinkButton, {\n            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {\n              name: \"in-a-circle\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 21\n            }, this),\n            title: \"ADD MORE AREA\",\n            style: {\n              padding: \"20px\"\n            },\n            onClick: addArea\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n_c = LocationSetting;\n\nvar _c;\n\n$RefreshReg$(_c, \"LocationSetting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9zY3JlZW4vbG9jYXRpb24tc2V0dGluZy9pbmRleC50c3g/ZWYzYyJdLCJuYW1lcyI6WyJMb2NhdGlvblNldHRpbmciLCJyZXR1cm5QcmVMYXlvdXQiLCJsb2NhdGlvbkRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWRkQXJlYSIsImFyZWEiLCJBRFNMSVZFX0lDT05fVkFSSUFOVCIsInN0eWxlcyIsIkFEU0xJVkVfSUNPTl9UWVBFIiwiQURTTElWRV9JQ09OX1NJWkUiLCJuYW1lIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJhcmVhcyIsIm1hcCIsInJlY0lkIiwiQURTTElWRV9JQ09OX0NPTE9SIiwiU01BTEwiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGVBQVQsT0FBNEQ7QUFBQTtBQUFBOztBQUFBLE1BQWpDQyxlQUFpQyxRQUFqQ0EsZUFBaUM7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQ3pFO0FBQ0VDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLGtCQUFZLEVBQVpBO0FBQUYsS0FBWjtBQUNEOztBQUNELE1BQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVSxDQUFFLENBQTVCOztBQUNBLHNCQUNFLDhEQUFDLGdEQUFEO0FBQ0UsVUFBTSxlQUNKO0FBQUEsOEJBQ0UsOERBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUVDLGtGQURYO0FBRUUsaUJBQVMsRUFBRUMsaUVBRmI7QUFHRSxZQUFJLEVBQUVDLG9FQUhSO0FBSUUsWUFBSSxFQUFFQyxxRUFKUjtBQUtFLGVBQU8sRUFBRVQ7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUEsb0JBRko7QUFhRSxXQUFPLGVBQ0w7QUFBQSw4QkFDRSw4REFBQyxxREFBRDtBQUNFLGNBQU0sZUFBRTtBQUFBLG9CQUFNQyxZQUFZLENBQUNTO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFY7QUFFRSxZQUFJLGVBQ0Y7QUFBQSxrQ0FDRSw4REFBQyx1REFBRDtBQUNFLGlCQUFLLEVBQUMsU0FEUjtBQUVFLGlCQUFLLDJCQUFFVCxZQUFZLENBQUNVLE9BQWYsMERBQUUsc0JBQXNCQyxXQUYvQjtBQUdFLHdCQUFZLEVBQUUsc0JBQUNDLEtBQUQsRUFBVztBQUN2QlgscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxLQUFaO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBUUdaLFlBQVksSUFDWEEsWUFBWSxDQUFDYSxLQUFiLENBQW1CQyxHQUFuQixDQUF1QixVQUFDVixJQUFELEVBQVU7QUFDL0IsZ0NBQ0U7QUFBQSxzQ0FDRSw4REFBQywwREFBRDtBQUFjLHdCQUFRLEVBQUUsSUFBeEI7QUFBOEIsc0JBQU0sRUFBRSxJQUF0QztBQUFBLHVDQUNFO0FBQUEsNEJBQU1BLElBQUksQ0FBQ0s7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQUEsdUNBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQSxlQUFVTCxJQUFJLENBQUNXLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVVELFdBWEQsQ0FUSixlQXFCRSw4REFBQyw4REFBRDtBQUNFLGdCQUFJLGVBQ0YsOERBQUMscURBQUQ7QUFDRSxxQkFBTyxFQUFFViw4RUFEWDtBQUVFLG1CQUFLLEVBQUVXLHdFQUZUO0FBR0Usa0JBQUksRUFBRVQsb0VBSFI7QUFJRSxrQkFBSSxFQUFFQyxxRUFBdUJTO0FBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFTRSxpQkFBSyxFQUFDLGVBVFI7QUFVRSxpQkFBSyxFQUFFO0FBQUVDLHFCQUFPLEVBQUU7QUFBWCxhQVZUO0FBV0UsbUJBQU8sRUFBRWY7QUFYWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRjtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBeUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFDRSxjQUFJLGVBQ0YsOERBQUMsOERBQUQ7QUFDRSxnQkFBSSxlQUNGLDhEQUFDLG9EQUFEO0FBQVEsa0JBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFJRSxpQkFBSyxFQUFDLGVBSlI7QUFLRSxpQkFBSyxFQUFFO0FBQUVlLHFCQUFPLEVBQUU7QUFBWCxhQUxUO0FBTUUsbUJBQU8sRUFBRWY7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0Y7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBFRDtLQS9FdUJMLGUiLCJmaWxlIjoiLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9sb2NhdGlvbi1zZXR0aW5nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQURTTElWRUJ1dHRvbiwgeyBJY29uTGlua0J1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IENhcmQsIHsgQ2FyZERyYWdJdGVtLCBDYXJkSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaXZpZGVyXCI7XG5pbXBvcnQgQWRzbGl2ZUljb24sIHtcbiAgQWRJY29uLFxuICBBRFNMSVZFX0lDT05fQ09MT1IsXG4gIEFEU0xJVkVfSUNPTl9TSVpFLFxuICBBRFNMSVZFX0lDT05fVFlQRSxcbiAgQURTTElWRV9JQ09OX1ZBUklBTlQsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ljb25cIjtcbmltcG9ydCB7IEFkc2xpdmVINCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcbmltcG9ydCBTdWJMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL3N1Yi1sYXlvdXRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uU2V0dGluZyh7IHJldHVyblByZUxheW91dCwgbG9jYXRpb25EYXRhIH0pIHtcbiAge1xuICAgIGNvbnNvbGUubG9nKHsgbG9jYXRpb25EYXRhIH0pO1xuICB9XG4gIGNvbnN0IGFkZEFyZWEgPSAoYXJlYSkgPT4ge307XG4gIHJldHVybiAoXG4gICAgPFN1YkxheW91dFxuICAgICAgaGVhZGVyPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWRzbGl2ZUljb25cbiAgICAgICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULkZVTExfTEVGVF9BUlJPV31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICB0eXBlPXtBRFNMSVZFX0lDT05fVFlQRS5CT0xEfVxuICAgICAgICAgICAgc2l6ZT17QURTTElWRV9JQ09OX1NJWkUuU01BTEx9XG4gICAgICAgICAgICBvbkNsaWNrPXtyZXR1cm5QcmVMYXlvdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWRzbGl2ZUg0PkxvY2F0aW9uIFNldHRpbmc8L0Fkc2xpdmVIND5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgICBjb250ZW50PXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgaGVhZGVyPXs8ZGl2Pntsb2NhdGlvbkRhdGEubmFtZX08L2Rpdj59XG4gICAgICAgICAgICBib2R5PXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Q2FyZElucHV0XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9uRGF0YS5hZGRyZXNzPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uSXB1dENoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7bG9jYXRpb25EYXRhICYmXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbkRhdGEuYXJlYXMubWFwKChhcmVhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FyZWEucmVjSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmREcmFnSXRlbSBvbkRlbGV0ZT17bnVsbH0gb25EcmFnPXtudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57YXJlYS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRHJhZ0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPEljb25MaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgPEFkc2xpdmVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17QURTTElWRV9JQ09OX1ZBUklBTlQuQ0lSQ0xFX1BMVVN9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e0FEU0xJVkVfSUNPTl9DT0xPUi5QUklNQVJZfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e0FEU0xJVkVfSUNPTl9UWVBFLkJPTER9XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17QURTTElWRV9JQ09OX1NJWkUuU01BTEx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkFERCBNT1JFIEFSRUFcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEFyZWF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGJvZHk9e1xuICAgICAgICAgICAgICAgIDxJY29uTGlua0J1dHRvblxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIDxBZEljb24gbmFtZT0naW4tYS1jaXJjbGUnLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQUREIE1PUkUgQVJFQVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQXJlYX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/pages-components/advertiser/screen/location-setting/index.tsx\n");

/***/ })

});
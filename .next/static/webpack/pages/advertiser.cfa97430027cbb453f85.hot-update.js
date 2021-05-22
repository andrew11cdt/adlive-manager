/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/advertiser",{

/***/ "./resources/pages-components/advertiser/screen/index.tsx":
/*!****************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/index.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdvertiserScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon */ \"./resources/components/icon/index.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/loading */ \"./resources/components/loading/index.tsx\");\n/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.hook */ \"./resources/stores/advertiser-store/advertiser-store.hook.ts\");\n/* harmony import */ var _others_advertiser_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../others/advertiser-content */ \"./resources/pages-components/advertiser/others/advertiser-content/index.tsx\");\n/* harmony import */ var _area_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./area-tabs */ \"./resources/pages-components/advertiser/screen/area-tabs/index.tsx\");\n/* harmony import */ var _location_setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location-setting */ \"./resources/pages-components/advertiser/screen/location-setting/index.tsx\");\n/* harmony import */ var _scanQR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scanQR */ \"./resources/pages-components/advertiser/screen/scanQR/index.tsx\");\n/* harmony import */ var _screen_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screen-items */ \"./resources/pages-components/advertiser/screen/screen-items/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ \"./resources/pages-components/advertiser/screen/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/andrew/adlive_FrontEnd/resources/pages-components/advertiser/screen/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction AdvertiserScreen() {\n  _s();\n\n  var _locations$locations$2,\n      _this = this;\n\n  var _useAdvertiserStore = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_4__.default)(),\n      locations = _useAdvertiserStore.locations;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      currentLocationId = _useState[0],\n      setCurrentLocationId = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      currentAreaId = _useState2[0],\n      setCurrentAreaId = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _showSetting = _useState3[0],\n      setShowSetting = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showNewScreen = _useState4[0],\n      setShowNewScreen = _useState4[1];\n\n  var currentLocation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    if (currentLocationId) {\n      return locations === null || locations === void 0 ? void 0 : locations.locations.find(function (location) {\n        return location.id === currentLocationId;\n      });\n    }\n\n    return null;\n  }, [currentLocationId, locations === null || locations === void 0 ? void 0 : locations.locations]);\n  var currentArea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    if (currentAreaId) {\n      return ((currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.areas) || []).find(function (area) {\n        return area.id === currentAreaId;\n      });\n    }\n  }, [currentLocation, currentAreaId]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var _;\n\n    setCurrentAreaId((_ = ((currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.areas) || [])[0]) === null || _ === void 0 ? void 0 : _.id);\n  }, [currentLocation]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!(locations !== null && locations !== void 0 && locations.loading)) {\n      var _locations$locations$;\n\n      setCurrentLocationId((locations === null || locations === void 0 ? void 0 : (_locations$locations$ = locations.locations[0]) === null || _locations$locations$ === void 0 ? void 0 : _locations$locations$.id) || null);\n    }\n  }, [locations === null || locations === void 0 ? void 0 : locations.loading, locations === null || locations === void 0 ? void 0 : locations.locations]);\n\n  var Setting = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_location_setting__WEBPACK_IMPORTED_MODULE_7__.default, {\n    returnPreLayout: function returnPreLayout() {\n      return setShowSetting(false);\n    },\n    locationData: currentLocation\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n\n  var NewScreen = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_scanQR__WEBPACK_IMPORTED_MODULE_8__.default, {\n    returnPreLayout: function returnPreLayout() {\n      return setShowNewScreen(false);\n    },\n    locationData: currentLocation\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      height: \"100%\"\n    },\n    children: showNewScreen ? NewScreen : _showSetting ? Setting : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_others_advertiser_content__WEBPACK_IMPORTED_MODULE_5__.default, {\n        headerTitle: locations !== null && locations !== void 0 && locations.loading ? \"-----\" : locations === null || locations === void 0 ? void 0 : (_locations$locations$2 = locations.locations[0]) === null || _locations$locations$2 === void 0 ? void 0 : _locations$locations$2.name,\n        headerRightContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().rightControls),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().searchIcon),\n            variant: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_VARIANT.SEARCH,\n            type: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_TYPE.REGULAR,\n            color: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_COLOR.NORMAL\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().addIcon),\n            variant: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_VARIANT.CIRCLE_PLUS,\n            type: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_TYPE.BOLD,\n            color: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_COLOR.PRIMARY,\n            size: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_SIZE.SMALL,\n            onClick: function onClick() {\n              setShowNewScreen(true);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 15\n        }, this),\n        headerBottomContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_area_tabs__WEBPACK_IMPORTED_MODULE_6__.default, {\n          areas: (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.areas) || [],\n          currentAreaId: currentAreaId,\n          changeCurrentArea: function changeCurrentArea(area) {\n            console.log(\"change current area\", area);\n            setCurrentAreaId(area === null || area === void 0 ? void 0 : area.id);\n          },\n          showSetting: function showSetting() {\n            setShowSetting(!_showSetting);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 15\n        }, this),\n        children: (locations === null || locations === void 0 ? void 0 : locations.loading) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__.default, {\n          size: _components_loading__WEBPACK_IMPORTED_MODULE_3__.ADSLIVE_LOADING_SIZE.EXTRA_SMALL\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 11\n      }, this), locations === null || locations === void 0 ? void 0 : locations.locations.map(function (location, i) {\n        var _location$areas$;\n\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screen_items__WEBPACK_IMPORTED_MODULE_9__.default, {\n          id: (_location$areas$ = location.areas[0]) === null || _location$areas$ === void 0 ? void 0 : _location$areas$.id,\n          areaName: location.areas[0].name\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 13\n        }, _this);\n      })]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AdvertiserScreen, \"oU7HNVD6yK8dRjJ6Q1LwUo/Srvs=\", false, function () {\n  return [_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = AdvertiserScreen;\n\nvar _c;\n\n$RefreshReg$(_c, \"AdvertiserScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9zY3JlZW4vaW5kZXgudHN4PzZiMTUiXSwibmFtZXMiOlsiQWR2ZXJ0aXNlclNjcmVlbiIsInVzZUFkdmVydGlzZXJTdG9yZSIsImxvY2F0aW9ucyIsInVzZVN0YXRlIiwiY3VycmVudExvY2F0aW9uSWQiLCJzZXRDdXJyZW50TG9jYXRpb25JZCIsImN1cnJlbnRBcmVhSWQiLCJzZXRDdXJyZW50QXJlYUlkIiwic2hvd1NldHRpbmciLCJzZXRTaG93U2V0dGluZyIsInNob3dOZXdTY3JlZW4iLCJzZXRTaG93TmV3U2NyZWVuIiwiY3VycmVudExvY2F0aW9uIiwidXNlTWVtbyIsImZpbmQiLCJsb2NhdGlvbiIsImlkIiwiY3VycmVudEFyZWEiLCJhcmVhcyIsImFyZWEiLCJ1c2VFZmZlY3QiLCJsb2FkaW5nIiwiU2V0dGluZyIsIk5ld1NjcmVlbiIsImhlaWdodCIsIm5hbWUiLCJzdHlsZXMiLCJBRFNMSVZFX0lDT05fVkFSSUFOVCIsIkFEU0xJVkVfSUNPTl9UWVBFIiwiQURTTElWRV9JQ09OX0NPTE9SIiwiTk9STUFMIiwiQURTTElWRV9JQ09OX1NJWkUiLCJjb25zb2xlIiwibG9nIiwiQURTTElWRV9MT0FESU5HX1NJWkUiLCJFWFRSQV9TTUFMTCIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSw0QkFDbkJDLHVGQUFrQixFQURDO0FBQUEsTUFDakNDLFNBRGlDLHVCQUNqQ0EsU0FEaUM7O0FBQUEsa0JBRVNDLCtDQUFRLENBQUMsSUFBRCxDQUZqQjtBQUFBLE1BRWxDQyxpQkFGa0M7QUFBQSxNQUVmQyxvQkFGZTs7QUFBQSxtQkFHQ0YsK0NBQVEs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RixDQUFkO0FBQ0Q7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCSjtBQUFBLGtCQXNDRyxDQUFBTixTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULFlBQUFBLFNBQVMsQ0FBRW1CLE9BQVgsa0JBQ0MsOERBQUMsd0RBQUQ7QUFBZ0IsY0FBSSxFQUFFYSxpRkFBZ0NDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBMkNHakMsU0EzQ0gsYUEyQ0dBLFNBM0NILHVCQTJDR0EsU0FBUyxDQUFFQSxTQUFYLENBQXFCa0MsR0FBckIsQ0FBeUIsVUFBQ3JCLFFBQUQsRUFBV3NCLENBQVg7QUFBQTs7QUFBQSw0QkFDeEIsOERBQUMsa0RBQUQ7QUFDRSxZQUFFLHNCQUFFdEIsUUFBUSxDQUFDRyxLQUFULENBQWUsQ0FBZixDQUFGLHFEQUFFLGlCQUFtQkYsRUFEekI7QUFHRSxrQkFBUSxFQUFFRCxRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLEVBQWtCTztBQUg5QixXQUVPWSxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBekIsQ0EzQ0g7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZERDs7R0ExR3VCckMsZ0I7VUFDQUMsbUY7OztLQURBRCxnQiIsImZpbGUiOiIuL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvc2NyZWVuL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBZHNsaXZlSWNvbiwge1xuICBBRFNMSVZFX0lDT05fQ09MT1IsXG4gIEFEU0xJVkVfSUNPTl9TSVpFLFxuICBBRFNMSVZFX0lDT05fVFlQRSxcbiAgQURTTElWRV9JQ09OX1ZBUklBTlQsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ljb25cIjtcbmltcG9ydCBBZHNsaXZlTG9hZGluZywge1xuICBBRFNMSVZFX0xPQURJTkdfU0laRSxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IHVzZUFkdmVydGlzZXJTdG9yZSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5ob29rXCI7XG5pbXBvcnQgQWR2ZXJ0aXNlckNvbnRlbnQgZnJvbSBcIi4uL290aGVycy9hZHZlcnRpc2VyLWNvbnRlbnRcIjtcbmltcG9ydCBBZHZlcnRpc2VyQXJlYVRhYnMgZnJvbSBcIi4vYXJlYS10YWJzXCI7XG5pbXBvcnQgTG9jYXRpb25TZXR0aW5nIGZyb20gXCIuL2xvY2F0aW9uLXNldHRpbmdcIjtcbmltcG9ydCBTY2FuUVIgZnJvbSBcIi4vc2NhblFSXCI7XG5pbXBvcnQgQWR2ZXJ0aXNlclNjcmVlbkl0ZW1zIGZyb20gXCIuL3NjcmVlbi1pdGVtc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2ZXJ0aXNlclNjcmVlbigpIHtcbiAgY29uc3QgeyBsb2NhdGlvbnMgfSA9IHVzZUFkdmVydGlzZXJTdG9yZSgpO1xuICBjb25zdCBbY3VycmVudExvY2F0aW9uSWQsIHNldEN1cnJlbnRMb2NhdGlvbklkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3VycmVudEFyZWFJZCwgc2V0Q3VycmVudEFyZWFJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dTZXR0aW5nLCBzZXRTaG93U2V0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TmV3U2NyZWVuLCBzZXRTaG93TmV3U2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoY3VycmVudExvY2F0aW9uSWQpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvbnM/LmxvY2F0aW9ucy5maW5kKFxuICAgICAgICAobG9jYXRpb24pID0+IGxvY2F0aW9uLmlkID09PSBjdXJyZW50TG9jYXRpb25JZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW2N1cnJlbnRMb2NhdGlvbklkLCBsb2NhdGlvbnM/LmxvY2F0aW9uc10pO1xuICBjb25zdCBjdXJyZW50QXJlYSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChjdXJyZW50QXJlYUlkKSB7XG4gICAgICByZXR1cm4gKGN1cnJlbnRMb2NhdGlvbj8uYXJlYXMgfHwgW10pLmZpbmQoXG4gICAgICAgIChhcmVhKSA9PiBhcmVhLmlkID09PSBjdXJyZW50QXJlYUlkXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRMb2NhdGlvbiwgY3VycmVudEFyZWFJZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudEFyZWFJZCgoY3VycmVudExvY2F0aW9uPy5hcmVhcyB8fCBbXSlbMF0/LmlkKTtcbiAgfSwgW2N1cnJlbnRMb2NhdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhdGlvbnM/LmxvYWRpbmcpIHtcbiAgICAgIHNldEN1cnJlbnRMb2NhdGlvbklkKGxvY2F0aW9ucz8ubG9jYXRpb25zWzBdPy5pZCB8fCBudWxsKTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbnM/LmxvYWRpbmcsIGxvY2F0aW9ucz8ubG9jYXRpb25zXSk7XG4gIGNvbnN0IFNldHRpbmcgPSAoXG4gICAgPExvY2F0aW9uU2V0dGluZ1xuICAgICAgcmV0dXJuUHJlTGF5b3V0PXsoKSA9PiBzZXRTaG93U2V0dGluZyhmYWxzZSl9XG4gICAgICBsb2NhdGlvbkRhdGE9e2N1cnJlbnRMb2NhdGlvbn1cbiAgICAvPlxuICApO1xuICBjb25zdCBOZXdTY3JlZW4gPSAoXG4gICAgPFNjYW5RUlxuICAgICAgcmV0dXJuUHJlTGF5b3V0PXsoKSA9PiBzZXRTaG93TmV3U2NyZWVuKGZhbHNlKX1cbiAgICAgIGxvY2F0aW9uRGF0YT17Y3VycmVudExvY2F0aW9ufVxuICAgIC8+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwifX0+XG4gICAgICB7c2hvd05ld1NjcmVlbiA/IChcbiAgICAgICAgTmV3U2NyZWVuXG4gICAgICApIDogc2hvd1NldHRpbmcgPyAoXG4gICAgICAgIFNldHRpbmdcbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEFkdmVydGlzZXJDb250ZW50XG4gICAgICAgICAgICBoZWFkZXJUaXRsZT17XG4gICAgICAgICAgICAgIGxvY2F0aW9ucz8ubG9hZGluZyA/IFwiLS0tLS1cIiA6IGxvY2F0aW9ucz8ubG9jYXRpb25zWzBdPy5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJSaWdodENvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udHJvbHN9PlxuICAgICAgICAgICAgICAgIDxBZHNsaXZlSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULlNFQVJDSH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9e0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJ9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17QURTTElWRV9JQ09OX0NPTE9SLk5PUk1BTH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBZHNsaXZlSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSWNvbn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULkNJUkNMRV9QTFVTfVxuICAgICAgICAgICAgICAgICAgdHlwZT17QURTTElWRV9JQ09OX1RZUEUuQk9MRH1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtBRFNMSVZFX0lDT05fQ09MT1IuUFJJTUFSWX1cbiAgICAgICAgICAgICAgICAgIHNpemU9e0FEU0xJVkVfSUNPTl9TSVpFLlNNQUxMfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TmV3U2NyZWVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlckJvdHRvbUNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8QWR2ZXJ0aXNlckFyZWFUYWJzXG4gICAgICAgICAgICAgICAgYXJlYXM9e2N1cnJlbnRMb2NhdGlvbj8uYXJlYXMgfHwgW119XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZWFJZD17Y3VycmVudEFyZWFJZH1cbiAgICAgICAgICAgICAgICBjaGFuZ2VDdXJyZW50QXJlYT17KGFyZWEpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIGN1cnJlbnQgYXJlYVwiLCBhcmVhKTtcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBcmVhSWQoYXJlYT8uaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2hvd1NldHRpbmc9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNob3dTZXR0aW5nKCFzaG93U2V0dGluZyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bG9jYXRpb25zPy5sb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgPEFkc2xpdmVMb2FkaW5nIHNpemU9e0FEU0xJVkVfTE9BRElOR19TSVpFLkVYVFJBX1NNQUxMfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FkdmVydGlzZXJDb250ZW50PlxuICAgICAgICAgIHtsb2NhdGlvbnM/LmxvY2F0aW9ucy5tYXAoKGxvY2F0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICA8QWR2ZXJ0aXNlclNjcmVlbkl0ZW1zXG4gICAgICAgICAgICAgIGlkPXtsb2NhdGlvbi5hcmVhc1swXT8uaWR9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgYXJlYU5hbWU9e2xvY2F0aW9uLmFyZWFzWzBdLm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/pages-components/advertiser/screen/index.tsx\n");

/***/ })

});
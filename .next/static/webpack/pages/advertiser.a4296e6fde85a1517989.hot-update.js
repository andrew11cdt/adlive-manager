/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/advertiser",{

/***/ "./resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx":
/*!************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx ***!
  \************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectVideosModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ \"./resources/pages-components/advertiser/campaign/selectVideosModal/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/typography */ \"./resources/components/typography/index.tsx\");\n/* harmony import */ var _components_videos_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/videos-player */ \"./resources/components/videos-player/index.tsx\");\n/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../stores/advertiser-store/advertiser-store.hook */ \"./resources/stores/advertiser-store/advertiser-store.hook.ts\");\n/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/icon */ \"./resources/components/icon/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dung/adlive_FrontEnd/resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SelectVideosModal(props) {\n  _s();\n\n  var _this = this;\n\n  var handleShow = props.handleShow,\n      adsSet = props.adsSet,\n      onChange = props.onChange;\n\n  var _useAdvertiserStore = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_7__.default)(),\n      allVideos = _useAdvertiserStore.videos;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      videoLib = _useState[0],\n      setVideoLib = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      selectedVideos = _useState2[0],\n      setSelectVideo = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    console.log({\n      adsSet: adsSet\n    });\n    var addedMediaVideos = (adsSet === null || adsSet === void 0 ? void 0 : adsSet.adsSetMediaList.map(function (e) {\n      return e.withMedia;\n    })) || [];\n    console.log({\n      allVideos: allVideos\n    });\n    var lib = allVideos.filter(function (v) {\n      return !(addedMediaVideos !== null && addedMediaVideos !== void 0 && addedMediaVideos.find(function (data) {\n        return data.id == v.id;\n      }));\n    });\n    if (lib !== null && lib !== void 0 && lib.length) setVideoLib(lib);\n    return function () {\n      setSelectVideo([]);\n      console.log(_this);\n    };\n  }, [adsSet]);\n\n  var handleSelectVideo = function handleSelectVideo(video) {\n    checkSelected(video) ? setSelectVideo(selectedVideos.filter(function (e) {\n      return e.id !== video.id;\n    })) : setSelectVideo([].concat((0,_Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(selectedVideos), [video]));\n  };\n\n  var handleAddVideos = /*#__PURE__*/function () {\n    var _ref = (0,_Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newMedia;\n      return _Users_dung_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (selectedVideos.length) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 2:\n              newMedia = selectedVideos.map(function (video, i) {\n                return {\n                  withMediaRecId: video.recId,\n                  order: i\n                };\n              });\n              console.log('OnChange');\n              onChange(newMedia);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleAddVideos() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var checkSelected = function checkSelected(video) {\n    return selectedVideos.find(function (v) {\n      return v.id === video.id;\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Modal, {\n    show: handleShow.openVideoLib,\n    onHide: function onHide() {\n      return handleShow.setOpenVideoLib(false);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Modal.Header, {\n      closeButton: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Modal.Title, {\n        children: \"Advertise Video Library\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Modal.Body, {\n      children: [!!(videoLib !== null && videoLib !== void 0 && videoLib.length) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().videosContainer),\n        children: videoLib.map(function (video, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().videoWrapper), \" \").concat(checkSelected(video) ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().selected) : \"\"),\n            onClick: function onClick() {\n              return handleSelectVideo(video);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_8__.AdIcon, {\n              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().selectIcon),\n              name: \"check-in-a-circle-highlight\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_videos_player__WEBPACK_IMPORTED_MODULE_6__.default, {\n              isPreview: true,\n              data: video\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().info),\n              children: video.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 17\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, this), (videoLib === null || videoLib === void 0 ? void 0 : videoLib.length) == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_5__.MutedText, {\n        children: \"Not Found\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 35\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Modal.Footer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {\n        variant: \"secondary\",\n        onClick: function onClick() {\n          return handleShow.setOpenVideoLib(false);\n        },\n        children: \"Cancel\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {\n        variant: \"primary\",\n        onClick: handleAddVideos,\n        disabled: !selectedVideos.length,\n        children: \"Add Videos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SelectVideosModal, \"akUPF13XmeD8/86uDYN1+q15JXQ=\", false, function () {\n  return [_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_7__.default];\n});\n\n_c = SelectVideosModal;\n\nvar _c;\n\n$RefreshReg$(_c, \"SelectVideosModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9jYW1wYWlnbi9zZWxlY3RWaWRlb3NNb2RhbC9pbmRleC50c3g/NTcxYSJdLCJuYW1lcyI6WyJTZWxlY3RWaWRlb3NNb2RhbCIsInByb3BzIiwiaGFuZGxlU2hvdyIsImFkc1NldCIsIm9uQ2hhbmdlIiwidXNlQWR2ZXJ0aXNlclN0b3JlIiwiYWxsVmlkZW9zIiwidmlkZW9zIiwidXNlU3RhdGUiLCJ2aWRlb0xpYiIsInNldFZpZGVvTGliIiwic2VsZWN0ZWRWaWRlb3MiLCJzZXRTZWxlY3RWaWRlbyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJhZGRlZE1lZGlhVmlkZW9zIiwiYWRzU2V0TWVkaWFMaXN0IiwibWFwIiwiZSIsIndpdGhNZWRpYSIsImxpYiIsImZpbHRlciIsInYiLCJmaW5kIiwiZGF0YSIsImlkIiwibGVuZ3RoIiwiaGFuZGxlU2VsZWN0VmlkZW8iLCJ2aWRlbyIsImNoZWNrU2VsZWN0ZWQiLCJoYW5kbGVBZGRWaWRlb3MiLCJuZXdNZWRpYSIsImkiLCJ3aXRoTWVkaWFSZWNJZCIsInJlY0lkIiwib3JkZXIiLCJvcGVuVmlkZW9MaWIiLCJzZXRPcGVuVmlkZW9MaWIiLCJzdHlsZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNZSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUN2Q0MsVUFEdUMsR0FDTkQsS0FETSxDQUN2Q0MsVUFEdUM7QUFBQSxNQUMzQkMsTUFEMkIsR0FDTkYsS0FETSxDQUMzQkUsTUFEMkI7QUFBQSxNQUNuQkMsUUFEbUIsR0FDTkgsS0FETSxDQUNuQkcsUUFEbUI7O0FBQUEsNEJBRWpCQyx1RkFBa0IsRUFGRDtBQUFBLE1BRS9CQyxTQUYrQix1QkFFdkND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LENBQXBCLGlCQUF5Qiw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUE4QkUsOERBQUMseURBQUQ7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUNFLGVBQU8sRUFBQyxXQURWO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU16QixVQUFVLENBQUNvQyxlQUFYLENBQTJCLEtBQTNCLENBQU47QUFBQSxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyxtREFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixlQUFPLEVBQUVQLGVBQW5DO0FBQW9ELGdCQUFRLEVBQUUsQ0FBQ3BCLGNBQWMsQ0FBQ2dCLE1BQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENEOztHQS9FdUIzQixpQjtVQUVRSyxtRjs7O0tBRlJMLGlCIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9jYW1wYWlnbi9zZWxlY3RWaWRlb3NNb2RhbC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBNdXRlZFRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XG5pbXBvcnQgVmlkZW9zUGxheWVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3ZpZGVvcy1wbGF5ZXJcIjtcbmltcG9ydCB1c2VBZHZlcnRpc2VyU3RvcmUgZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUuaG9va1wiO1xuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xuaW1wb3J0IEFkdmVydGlzZXJBcGlDbGllbnQgZnJvbSBcIi4uLy4uLy4uLy4uL2FwaS1jbGllbnRzL2FkdmVydGlzZXIuYXBpLWNsaWVudFwiO1xuZXhwb3J0IGludGVyZmFjZSBOZXdNZWRpYSB7XG4gIHdpdGhNZWRpYVJlY0lkOiBzdHJpbmcsXG4gIG9yZGVyOiBudW1iZXJcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdFZpZGVvc01vZGFsKHByb3BzKSB7XG4gIGNvbnN0IHsgaGFuZGxlU2hvdywgYWRzU2V0LCBvbkNoYW5nZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgdmlkZW9zOiBhbGxWaWRlb3MgfSA9IHVzZUFkdmVydGlzZXJTdG9yZSgpO1xuICBjb25zdCBbdmlkZW9MaWIsIHNldFZpZGVvTGliXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkVmlkZW9zLCBzZXRTZWxlY3RWaWRlb10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBjb25zb2xlLmxvZyh7YWRzU2V0fSk7XG4gICAgXG4gICAgY29uc3QgYWRkZWRNZWRpYVZpZGVvcyA9IGFkc1NldD8uYWRzU2V0TWVkaWFMaXN0Lm1hcChlID0+IGUud2l0aE1lZGlhKSB8fCBbXVxuICAgIGNvbnNvbGUubG9nKHthbGxWaWRlb3N9KTtcbiAgICBcbiAgICBjb25zdCBsaWIgPSBhbGxWaWRlb3MuZmlsdGVyKHYgPT4gIWFkZGVkTWVkaWFWaWRlb3M/LmZpbmQoZGF0YSA9PiBkYXRhLmlkID09IHYuaWQpKVxuICAgIGlmKGxpYj8ubGVuZ3RoKSBzZXRWaWRlb0xpYihsaWIpXG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgc2V0U2VsZWN0VmlkZW8oW10pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG4gIH0sIFthZHNTZXRdKVxuICBjb25zdCBoYW5kbGVTZWxlY3RWaWRlbyA9ICh2aWRlbykgPT4ge1xuICAgIGNoZWNrU2VsZWN0ZWQodmlkZW8pXG4gICAgICA/IHNldFNlbGVjdFZpZGVvKHNlbGVjdGVkVmlkZW9zLmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gdmlkZW8uaWQpKVxuICAgICAgOiBzZXRTZWxlY3RWaWRlbyhbLi4uc2VsZWN0ZWRWaWRlb3MsIHZpZGVvXSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFkZFZpZGVvcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkVmlkZW9zLmxlbmd0aCkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld01lZGlhOiBOZXdNZWRpYVtdID0gc2VsZWN0ZWRWaWRlb3MubWFwKCh2aWRlbywgaSkgPT4gKHtcbiAgICAgIHdpdGhNZWRpYVJlY0lkOiB2aWRlby5yZWNJZCxcbiAgICAgIG9yZGVyOiBpLFxuICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZygnT25DaGFuZ2UnKTtcbiAgICBcbiAgICBvbkNoYW5nZShuZXdNZWRpYSlcbiAgfTtcbiAgY29uc3QgY2hlY2tTZWxlY3RlZCA9ICh2aWRlbykgPT5cbiAgICBzZWxlY3RlZFZpZGVvcy5maW5kKCh2KSA9PiB2LmlkID09PSB2aWRlby5pZCk7XG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBzaG93PXtoYW5kbGVTaG93Lm9wZW5WaWRlb0xpYn1cbiAgICAgIG9uSGlkZT17KCkgPT4gaGFuZGxlU2hvdy5zZXRPcGVuVmlkZW9MaWIoZmFsc2UpfVxuICAgID5cbiAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgIDxNb2RhbC5UaXRsZT5BZHZlcnRpc2UgVmlkZW8gTGlicmFyeTwvTW9kYWwuVGl0bGU+XG4gICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICB7ISF2aWRlb0xpYj8ubGVuZ3RoICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7dmlkZW9MaWIubWFwKCh2aWRlbywgaSkgPT4gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWRlb1dyYXBwZXJ9ICR7XG4gICAgICAgICAgICAgICAgICBjaGVja1NlbGVjdGVkKHZpZGVvKSA/IHN0eWxlcy5zZWxlY3RlZCA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RWaWRlbyh2aWRlbyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QWRJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RJY29ufVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrLWluLWEtY2lyY2xlLWhpZ2hsaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlkZW9zUGxheWVyIGlzUHJldmlldyBrZXk9e2l9IGRhdGE9e3ZpZGVvfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+e3ZpZGVvLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dmlkZW9MaWI/Lmxlbmd0aCA9PSAwICYmIDxNdXRlZFRleHQ+Tm90IEZvdW5kPC9NdXRlZFRleHQ+fVxuICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cuc2V0T3BlblZpZGVvTGliKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUFkZFZpZGVvc30gZGlzYWJsZWQ9eyFzZWxlY3RlZFZpZGVvcy5sZW5ndGh9PlxuICAgICAgICAgIEFkZCBWaWRlb3NcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx\n");

/***/ })

});
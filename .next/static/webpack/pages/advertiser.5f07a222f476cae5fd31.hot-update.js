self["webpackHotUpdate_N_E"]("pages/advertiser",{

/***/ "./resources/pages-components/advertiser/screen/location-setting/index.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/location-setting/index.tsx ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LocationSetting; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/button */ "./resources/components/button/index.tsx");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_confirmModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/confirmModal */ "./resources/components/confirmModal/index.tsx");
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/divider */ "./resources/components/divider/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/toaster */ "./resources/components/toaster/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/location-setting/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\location-setting\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function LocationSetting(_ref) {
  _s();

  var _locationData$areas,
      _this = this;

  var returnPreLayout = _ref.returnPreLayout,
      location = _ref.location;

  var addArea = function addArea(area) {};

  var _useAdvertiserStore = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_13__.default)(),
      locations = _useAdvertiserStore.locations,
      loadLocations = _useAdvertiserStore.loadLocations;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(location),
      locationData = _useState[0],
      setLocationData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(location === null || location === void 0 ? void 0 : location.name),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(location === null || location === void 0 ? void 0 : location.address),
      address = _useState3[0],
      setAddress = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      showNewArea = _useState4[0],
      setShowNewArea = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      newArea = _useState5[0],
      setNewArea = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errorMsg = _useState6[0],
      setErrorMsg = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      successMsg = _useState7[0],
      setSuccessMsg = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      deleteAreaId = _useState8[0],
      setDeleteAreaId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      loadingDragItems = _useState9[0],
      setLoadingDragItems = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      dataChanged = _useState10[0],
      setDataChanged = _useState10[1];

  var handleCloseModal = function handleCloseModal() {
    return setShowNewArea(false);
  };

  var handleCreateArea = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var res;
      return C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setShowNewArea(false);
              setDataChanged(true);
              _context.next = 4;
              return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_5__.default.createArea(locationData === null || locationData === void 0 ? void 0 : locationData.id, newArea);

            case 4:
              res = _context.sent;
              if (res !== null && res !== void 0 && res.data) loadLocations();

              if (res['error']) {
                setErrorMsg(res['error']['data']['error']['message']);
              }

              if (res !== null && res !== void 0 && res.data) {
                setSuccessMsg('Updated Schedule');
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCreateArea() {
      return _ref2.apply(this, arguments);
    };
  }();

  function handleDeleteArea(_x) {
    return _handleDeleteArea.apply(this, arguments);
  }

  function _handleDeleteArea() {
    _handleDeleteArea = (0,C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(id) {
      var res;
      return C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              handleLoadDragItem(id, true);
              setDataChanged(true);
              _context2.next = 4;
              return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_5__.default.deleteArea(id);

            case 4:
              res = _context2.sent;

              if (res !== null && res !== void 0 && res.data) {
                loadLocations();
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleDeleteArea.apply(this, arguments);
  }

  ;

  function handleLoadDragItem(id, isLoading) {
    return setLoadingDragItems(_objectSpread(_objectSpread({}, loadingDragItems), {}, (0,C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, id, isLoading)));
  }

  function handleChangeOrder(change) {
    if (!(change !== null && change !== void 0 && change.length)) return;
    var newAreas = change.map(function (e) {
      return location.areas.find(function (area) {
        return area.recId === e.id;
      });
    });

    if (JSON.stringify(newAreas) !== JSON.stringify(location.areas)) {
      var loadAll = newAreas.reduce(function (res, cur) {
        return res = _objectSpread(_objectSpread({}, res), {}, (0,C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, cur.id, true));
      }, {});
      setLoadingDragItems(loadAll);
      newAreas.forEach(function (area, i) {
        var id = area === null || area === void 0 ? void 0 : area.id;

        if (id) {
          _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_5__.default.updateArea(id, {
            order: i + 1
          }).then(function (res) {
            if (newAreas.length - 1 === i) {
              loadLocations();
            }
          });
        }
      });
      setDataChanged(true);
    }
  }

  ;

  function updateLocation(_x2) {
    return _updateLocation.apply(this, arguments);
  }

  function _updateLocation() {
    _updateLocation = (0,C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(isChange) {
      var newData, res, _res$error$data;

      return C_Users_Andrew_adlive_FrontEnd_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (isChange) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              newData = _objectSpread(_objectSpread({}, locationData), {
                name: name,
                address: address
              });
              _context3.next = 5;
              return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_5__.default.updateLocation(location.id, newData);

            case 5:
              res = _context3.sent;

              if (res !== null && res !== void 0 && res.data) {
                setSuccessMsg("Updated!");
                setLocationData(_objectSpread(_objectSpread({}, locationData), res.data));
              }

              if (res.error) {
                setErrorMsg(((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : _res$error$data.message) || 'Failed');
              }

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _updateLocation.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setLocationData((locations === null || locations === void 0 ? void 0 : locations.find(function (e) {
      return location.id === e.id;
    })) || location);

    if (deleteAreaId && location.areas.includes(function (e) {
      return e.id === deleteAreaId;
    })) {
      // handleLoadDragItem(deleteAreaId, false)
      setDeleteAreaId(null);
    }

    setLoadingDragItems({});
  }, [location, locations]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_confirmModal__WEBPACK_IMPORTED_MODULE_8__.default, {
      title: "Delete Media",
      onExecute: function onExecute() {
        handleDeleteArea(deleteAreaId);
      },
      show: !!deleteAreaId,
      setShow: setDeleteAreaId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_11__.Toaster, {
      type: "error",
      handleSetToast: setErrorMsg,
      message: errorMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_11__.Toaster, {
      type: "success",
      handleSetToast: setSuccessMsg,
      message: successMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_15__.default, {
      header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_10__.default, {
          variant: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW,
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_16___default().icon),
          type: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_TYPE.BOLD,
          size: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_SIZE.SMALL,
          onClick: function onClick() {
            return returnPreLayout(dataChanged);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_12__.AdsliveH4, {
          children: "Location Setting"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, this)]
      }, void 0, true),
      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          padding: "16px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_7__.default, {
          header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: locationData === null || locationData === void 0 ? void 0 : locationData.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 23
          }, this),
          body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_7__.CardInput, {
              title: "name",
              value: name,
              onInputChange: function onInputChange(event) {
                return setName(event.target.value);
              },
              onFocusOut: updateLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_7__.CardInput, {
              title: "address",
              value: address === null || address === void 0 ? void 0 : address.description,
              onInputChange: function onInputChange(event) {
                return setAddress({
                  description: event.target.value
                });
              },
              onFocusOut: updateLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 19
            }, this), locationData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_7__.CardDragWrapper, {
              items: locationData === null || locationData === void 0 ? void 0 : (_locationData$areas = locationData.areas) === null || _locationData$areas === void 0 ? void 0 : _locationData$areas.map(function (area) {
                return {
                  id: area.recId.toString(),
                  content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_7__.CardDragItem, {
                      isLoading: loadingDragItems[area.id],
                      onDelete: function onDelete(event) {
                        event.stopPropagation();
                        setDeleteAreaId(area.id);
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_14__.parseTitle)(area === null || area === void 0 ? void 0 : area.name)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 31
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 29
                    }, _this)]
                  }, area.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 27
                  }, _this)
                };
              }),
              onChange: function onChange(change) {
                return handleChangeOrder(change);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_6__.AdButton, {
              cardBtn: true,
              ghost: true,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_10__.default, {
                variant: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_VARIANT.CIRCLE_PLUS,
                color: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_COLOR.PRIMARY,
                type: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_TYPE.BOLD,
                size: _components_icon__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_ICON_SIZE.SMALL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 23
              }, this),
              title: "ADD MORE AREA",
              style: {
                padding: "20px"
              },
              onClick: function onClick() {
                return setShowNewArea(true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 19
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mt-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_6__.AdButton, {
            cardBtn: true,
            dash: true,
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_10__.AdIcon, {
              name: "in-a-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 23
            }, this),
            title: "ADD LOCATION",
            style: {
              padding: "20px"
            },
            onClick: addArea
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_16___default().createCampainModal),
      show: showNewArea,
      onHide: handleCloseModal,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal.Title, {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),
          children: "Create New Area"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_7__.CardInput, {
          title: "Name",
          value: newArea === null || newArea === void 0 ? void 0 : newArea.name,
          onInputChange: function onInputChange(e) {
            var _locationData$areas2;

            return setNewArea({
              name: e.target.value,
              order: (locationData === null || locationData === void 0 ? void 0 : (_locationData$areas2 = locationData.areas) === null || _locationData$areas2 === void 0 ? void 0 : _locationData$areas2.length) || 0
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal.Footer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Button, {
          variant: "secondary",
          onClick: handleCloseModal,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.Button, {
          variant: "primary",
          onClick: handleCreateArea,
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(LocationSetting, "m6oMrfYs3GzqJag1ERiCqf3WZLk=", false, function () {
  return [_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_13__.default];
});

_c = LocationSetting;

var _c;

$RefreshReg$(_c, "LocationSetting");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9zY3JlZW4vbG9jYXRpb24tc2V0dGluZy9pbmRleC50c3giXSwibmFtZXMiOlsiTG9jYXRpb25TZXR0aW5nIiwicmV0dXJuUHJlTGF5b3V0IiwibG9jYXRpb24iLCJhZGRBcmVhIiwiYXJlYSIsInVzZUFkdmVydGlzZXJTdG9yZSIsImxvY2F0aW9ucyIsImxvYWRMb2NhdGlvbnMiLCJ1c2VTdGF0ZSIsImxvY2F0aW9uRGF0YSIsInNldExvY2F0aW9uRGF0YSIsIm5hbWUiLCJzZXROYW1lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJzaG93TmV3QXJlYSIsInNldFNob3dOZXdBcmVhIiwibmV3QXJlYSIsInNldE5ld0FyZWEiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwic3VjY2Vzc01zZyIsInNldFN1Y2Nlc3NNc2ciLCJkZWxldGVBcmVhSWQiLCJzZXREZWxldGVBcmVhSWQiLCJsb2FkaW5nRHJhZ0l0ZW1zIiwic2V0TG9hZGluZ0RyYWdJdGVtcyIsImRhdGFDaGFuZ2VkIiwic2V0RGF0YUNoYW5nZWQiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlQ3JlYXRlQXJlYSIsIkFkdmVydGlzZXJBcGlDbGllbnQiLCJpZCIsInJlcyIsImRhdGEiLCJoYW5kbGVEZWxldGVBcmVhIiwiaGFuZGxlTG9hZERyYWdJdGVtIiwiaXNMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlT3JkZXIiLCJjaGFuZ2UiLCJsZW5ndGgiLCJuZXdBcmVhcyIsIm1hcCIsImUiLCJhcmVhcyIsImZpbmQiLCJyZWNJZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkQWxsIiwicmVkdWNlIiwiY3VyIiwiZm9yRWFjaCIsImkiLCJvcmRlciIsInRoZW4iLCJ1cGRhdGVMb2NhdGlvbiIsImlzQ2hhbmdlIiwibmV3RGF0YSIsImVycm9yIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsImluY2x1ZGVzIiwiQURTTElWRV9JQ09OX1ZBUklBTlQiLCJzdHlsZXMiLCJBRFNMSVZFX0lDT05fVFlQRSIsIkFEU0xJVkVfSUNPTl9TSVpFIiwicGFkZGluZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInRvU3RyaW5nIiwiY29udGVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlVGl0bGUiLCJBRFNMSVZFX0lDT05fQ09MT1IiLCJTTUFMTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxlQUFULE9BQXdEO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxNQUE3QkMsZUFBNkIsUUFBN0JBLGVBQTZCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNyRSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVUsQ0FBRyxDQUE3Qjs7QUFEcUUsNEJBRWhDQyx3RkFBa0IsRUFGYztBQUFBLE1BRTdEQyxTQUY2RCx1QkFFN0RBLFNBRjZEO0FBQUEsTUFFbERDLGFBRmtELHVCQUVsREEsYUFGa0Q7O0FBQUEsa0JBRzdCQywrQ0FBUSxDQUFDTixRQUFELENBSHFCO0FBQUEsTUFHOURPLFlBSDhEO0FBQUEsTUFHaERDLGVBSGdEOztBQUFBLG1CQUk3Q0YsK0NBQVEsQ0FBQ04sUUFBRCxhQUFDQSxRQUFELHVCQUFDQSxRQUFRLENBQUVTLElBQVgsQ0FKcUM7QUFBQSxNQUk5REEsSUFKOEQ7QUFBQSxNQUl4REMsT0FKd0Q7O0FBQUEsbUJBS3ZDSiwrQ0FBUSxDQUFDTixRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRVcsT0FBWCxDQUwrQjtBQUFBLE1BSzlEQSxPQUw4RDtBQUFBLE1BS3JEQyxVQUxxRDs7QUFBQSxtQkFNL0JOLCtDQUFRLENBQUMsSUFBRCxDQU51QjtBQUFBLE1BTTlETyxXQU44RDtBQUFBLE1BTWpEQyxjQU5pRDs7QUFBQSxtQkFPdkNSLCtDQUFRLENBQUMsSUFBRCxDQVArQjtBQUFBLE1BTzlEUyxPQVA4RDtBQUFBLE1BT3JEQyxVQVBxRDs7QUFBQSxtQkFRckNWLCtDQUFRLENBQUMsSUFBRCxDQVI2QjtBQUFBLE1BUTlEVyxRQVI4RDtBQUFBLE1BUXBEQyxXQVJvRDs7QUFBQSxtQkFTakNaLCtDQUFRLENBQUMsSUFBRCxDQVR5QjtBQUFBLE1BUzlEYSxVQVQ4RDtBQUFBLE1BU2xEQyxhQVRrRDs7QUFBQSxtQkFVN0JkLCtDQUFRLENBQUMsSUFBRCxDQVZxQjtBQUFBLE1BVTlEZSxZQVY4RDtBQUFBLE1BVWhEQyxlQVZnRDs7QUFBQSxtQkFXckJoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FYYTtBQUFBLE1BVzlEaUIsZ0JBWDhEO0FBQUEsTUFXNUNDLG1CQVg0Qzs7QUFBQSxvQkFZL0JsQiwrQ0FBUSxDQUFDLElBQUQsQ0FadUI7QUFBQSxNQVk5RG1CLFdBWjhEO0FBQUEsTUFZakRDLGNBWmlEOztBQWFyRSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsV0FBTWIsY0FBYyxDQUFDLEtBQUQsQ0FBcEI7QUFBQSxHQUF6Qjs7QUFDQSxNQUFNYyxnQkFBZ0I7QUFBQSxvVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJkLDRCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FZLDRCQUFjLENBQUMsSUFBRCxDQUFkO0FBRnVCO0FBQUEscUJBR0FHLGtGQUFBLENBQ3JCdEIsWUFEcUIsYUFDckJBLFlBRHFCLHVCQUNyQkEsWUFBWSxDQUFFdUIsRUFETyxFQUVyQmYsT0FGcUIsQ0FIQTs7QUFBQTtBQUdqQmdCLGlCQUhpQjtBQU92QixrQkFBSUEsR0FBSixhQUFJQSxHQUFKLGVBQUlBLEdBQUcsQ0FBRUMsSUFBVCxFQUFlM0IsYUFBYTs7QUFDNUIsa0JBQUkwQixHQUFHLENBQUMsT0FBRCxDQUFQLEVBQWtCO0FBQ2hCYiwyQkFBVyxDQUFDYSxHQUFHLENBQUMsT0FBRCxDQUFILENBQWEsTUFBYixFQUFxQixPQUFyQixFQUE4QixTQUE5QixDQUFELENBQVg7QUFDRDs7QUFDRCxrQkFBSUEsR0FBSixhQUFJQSxHQUFKLGVBQUlBLEdBQUcsQ0FBRUMsSUFBVCxFQUFlO0FBQ2JaLDZCQUFhLENBQUMsa0JBQUQsQ0FBYjtBQUNEOztBQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQlEsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQWRxRSxXQTZCdERLLGdCQTdCc0Q7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFRBNkJyRSxrQkFBZ0NILEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFSSxnQ0FBa0IsQ0FBQ0osRUFBRCxFQUFLLElBQUwsQ0FBbEI7QUFDQUosNEJBQWMsQ0FBQyxJQUFELENBQWQ7QUFGRjtBQUFBLHFCQUd5Qkcsa0ZBQUEsQ0FBK0JDLEVBQS9CLENBSHpCOztBQUFBO0FBR1FDLGlCQUhSOztBQUlFLGtCQUFJQSxHQUFKLGFBQUlBLEdBQUosZUFBSUEsR0FBRyxDQUFFQyxJQUFULEVBQWU7QUFDYjNCLDZCQUFhO0FBQ2Q7O0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3QnFFO0FBQUE7QUFBQTs7QUFvQ3BFOztBQUNELFdBQVM2QixrQkFBVCxDQUE0QkosRUFBNUIsRUFBZ0NLLFNBQWhDLEVBQW9EO0FBQ2xELFdBQU9YLG1CQUFtQixpQ0FBTUQsZ0JBQU4sMkpBQXlCTyxFQUF6QixFQUE4QkssU0FBOUIsR0FBMUI7QUFDRDs7QUFDRCxXQUFTQyxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUM7QUFDakMsUUFBSSxFQUFDQSxNQUFELGFBQUNBLE1BQUQsZUFBQ0EsTUFBTSxDQUFFQyxNQUFULENBQUosRUFBcUI7QUFDckIsUUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsYUFBSXpDLFFBQVEsQ0FBQzBDLEtBQVQsQ0FBZUMsSUFBZixDQUFvQixVQUFBekMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQzBDLEtBQUwsS0FBZUgsQ0FBQyxDQUFDWCxFQUFyQjtBQUFBLE9BQXhCLENBQUo7QUFBQSxLQUFaLENBQWpCOztBQUNBLFFBQUllLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxRQUFmLE1BQTZCTSxJQUFJLENBQUNDLFNBQUwsQ0FBZTlDLFFBQVEsQ0FBQzBDLEtBQXhCLENBQWpDLEVBQWlFO0FBQy9ELFVBQU1LLE9BQU8sR0FBR1IsUUFBUSxDQUFDUyxNQUFULENBQWdCLFVBQUNqQixHQUFELEVBQU1rQixHQUFOO0FBQUEsZUFBY2xCLEdBQUcsbUNBQVFBLEdBQVIsMkpBQWNrQixHQUFHLENBQUNuQixFQUFsQixFQUF1QixJQUF2QixFQUFqQjtBQUFBLE9BQWhCLEVBQWdFLEVBQWhFLENBQWhCO0FBQ0FOLHlCQUFtQixDQUFDdUIsT0FBRCxDQUFuQjtBQUNBUixjQUFRLENBQUNXLE9BQVQsQ0FBaUIsVUFBQ2hELElBQUQsRUFBT2lELENBQVAsRUFBYTtBQUM1QixZQUFNckIsRUFBRSxHQUFHNUIsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUU0QixFQUFqQjs7QUFDQSxZQUFJQSxFQUFKLEVBQVE7QUFDTkQsNEZBQUEsQ0FBK0JDLEVBQS9CLEVBQW1DO0FBQUVzQixpQkFBSyxFQUFFRCxDQUFDLEdBQUc7QUFBYixXQUFuQyxFQUFxREUsSUFBckQsQ0FBMEQsVUFBQXRCLEdBQUcsRUFBSTtBQUMvRCxnQkFBSVEsUUFBUSxDQUFDRCxNQUFULEdBQWtCLENBQWxCLEtBQXdCYSxDQUE1QixFQUErQjtBQUM3QjlDLDJCQUFhO0FBQ2Q7QUFDRixXQUpEO0FBS0Q7QUFDRixPQVREO0FBVUFxQixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNEO0FBQ0Y7O0FBQUE7O0FBMURvRSxXQTJEdEQ0QixjQTNEc0Q7QUFBQTtBQUFBOztBQUFBO0FBQUEsMFRBMkRyRSxrQkFBOEJDLFFBQTlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDT0EsUUFEUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUVRQyxxQkFGUixtQ0FFc0JqRCxZQUZ0QixHQUV1QztBQUFDRSxvQkFBSSxFQUFKQSxJQUFEO0FBQU9FLHVCQUFPLEVBQVBBO0FBQVAsZUFGdkM7QUFBQTtBQUFBLHFCQUd5QmtCLHNGQUFBLENBQW1DN0IsUUFBUSxDQUFDOEIsRUFBNUMsRUFBZ0QwQixPQUFoRCxDQUh6Qjs7QUFBQTtBQUdRekIsaUJBSFI7O0FBSUUsa0JBQUlBLEdBQUosYUFBSUEsR0FBSixlQUFJQSxHQUFHLENBQUVDLElBQVQsRUFBZTtBQUNiWiw2QkFBYSxDQUFDLFVBQUQsQ0FBYjtBQUNBWiwrQkFBZSxpQ0FBS0QsWUFBTCxHQUFzQndCLEdBQUcsQ0FBQ0MsSUFBMUIsRUFBZjtBQUNEOztBQUNELGtCQUFJRCxHQUFHLENBQUMwQixLQUFSLEVBQWU7QUFDYnZDLDJCQUFXLENBQUMsb0JBQUFhLEdBQUcsQ0FBQzBCLEtBQUosQ0FBVXpCLElBQVYsb0VBQWdCMEIsT0FBaEIsS0FBMkIsUUFBNUIsQ0FBWDtBQUNEOztBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBM0RxRTtBQUFBO0FBQUE7O0FBdUVyRUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RuRCxtQkFBZSxDQUFDLENBQUFKLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsWUFBQUEsU0FBUyxDQUFFdUMsSUFBWCxDQUFnQixVQUFBRixDQUFDO0FBQUEsYUFBSXpDLFFBQVEsQ0FBQzhCLEVBQVQsS0FBZ0JXLENBQUMsQ0FBQ1gsRUFBdEI7QUFBQSxLQUFqQixNQUE4QzlCLFFBQS9DLENBQWY7O0FBQ0EsUUFBSXFCLFlBQVksSUFBSXJCLFFBQVEsQ0FBQzBDLEtBQVQsQ0FBZWtCLFFBQWYsQ0FBd0IsVUFBQW5CLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNYLEVBQUYsS0FBU1QsWUFBYjtBQUFBLEtBQXpCLENBQXBCLEVBQXlFO0FBQ3ZFO0FBQ0FDLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0Q7O0FBQ0RFLHVCQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFDRCxHQVBRLEVBT04sQ0FBQ3hCLFFBQUQsRUFBV0ksU0FBWCxDQVBNLENBQVQ7QUFRQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDZEQUFEO0FBQ0UsV0FBSyxFQUFDLGNBRFI7QUFFRSxlQUFTLEVBQUUscUJBQU07QUFDZjZCLHdCQUFnQixDQUFDWixZQUFELENBQWhCO0FBQ0QsT0FKSDtBQUtFLFVBQUksRUFBRSxDQUFDLENBQUNBLFlBTFY7QUFNRSxhQUFPLEVBQUVDO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0UsOERBQUMseURBQUQ7QUFBUyxVQUFJLEVBQUMsT0FBZDtBQUFzQixvQkFBYyxFQUFFSixXQUF0QztBQUFtRCxhQUFPLEVBQUVEO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFLDhEQUFDLHlEQUFEO0FBQVMsVUFBSSxFQUFDLFNBQWQ7QUFBd0Isb0JBQWMsRUFBRUcsYUFBeEM7QUFBdUQsYUFBTyxFQUFFRDtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRSw4REFBQyxpREFBRDtBQUNFLFlBQU0sZUFDSjtBQUFBLGdDQUNFLDhEQUFDLHNEQUFEO0FBQ0UsaUJBQU8sRUFBRTBDLG1GQURYO0FBRUUsbUJBQVMsRUFBRUMsa0VBRmI7QUFHRSxjQUFJLEVBQUVDLHFFQUhSO0FBSUUsY0FBSSxFQUFFQyxzRUFKUjtBQUtFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWpFLGVBQWUsQ0FBQzBCLFdBQUQsQ0FBckI7QUFBQTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBLHNCQUZKO0FBYUUsYUFBTyxlQUNMO0FBQUssYUFBSyxFQUFFO0FBQUV3QyxpQkFBTyxFQUFFO0FBQVgsU0FBWjtBQUFBLGdDQUNFLDhEQUFDLHFEQUFEO0FBQ0UsZ0JBQU0sZUFBRTtBQUFBLHNCQUFNMUQsWUFBTixhQUFNQSxZQUFOLHVCQUFNQSxZQUFZLENBQUVFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFY7QUFFRSxjQUFJLGVBQ0Y7QUFBQSxvQ0FDRSw4REFBQyx1REFBRDtBQUNFLG1CQUFLLEVBQUMsTUFEUjtBQUVFLG1CQUFLLEVBQUVBLElBRlQ7QUFHRSwyQkFBYSxFQUFFLHVCQUFDeUQsS0FBRDtBQUFBLHVCQUFXeEQsT0FBTyxDQUFDd0QsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBbEI7QUFBQSxlQUhqQjtBQUlFLHdCQUFVLEVBQUVkO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU9FLDhEQUFDLHVEQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUsbUJBQUssRUFBRTNDLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFMEQsV0FGbEI7QUFHRSwyQkFBYSxFQUFFLHVCQUFDSCxLQUFEO0FBQUEsdUJBQVd0RCxVQUFVLENBQUM7QUFBQ3lELDZCQUFXLEVBQUVILEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUEzQixpQkFBRCxDQUFyQjtBQUFBLGVBSGpCO0FBSUUsd0JBQVUsRUFBRWQ7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLEVBYUcvQyxZQUFZLGlCQUNYLDhEQUFDLDZEQUFEO0FBQ0UsbUJBQUssRUFBRUEsWUFBRixhQUFFQSxZQUFGLDhDQUFFQSxZQUFZLENBQUVtQyxLQUFoQix3REFBRSxvQkFBcUJGLEdBQXJCLENBQXlCLFVBQUN0QyxJQUFEO0FBQUEsdUJBQVc7QUFDekM0QixvQkFBRSxFQUFFNUIsSUFBSSxDQUFDMEMsS0FBTCxDQUFXMEIsUUFBWCxFQURxQztBQUV6Q0MseUJBQU8sZUFDTDtBQUFBLDRDQUNFLDhEQUFDLDBEQUFEO0FBQ0UsK0JBQVMsRUFBRWhELGdCQUFnQixDQUFDckIsSUFBSSxDQUFDNEIsRUFBTixDQUQ3QjtBQUVFLDhCQUFRLEVBQUUsa0JBQUNvQyxLQUFELEVBQVc7QUFDbkJBLDZCQUFLLENBQUNNLGVBQU47QUFDQWxELHVDQUFlLENBQUNwQixJQUFJLENBQUM0QixFQUFOLENBQWY7QUFDRCx1QkFMSDtBQUFBLDZDQU9FO0FBQUEsa0NBQU8yQywrREFBVSxDQUFDdkUsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVPLElBQVA7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFVRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVZGO0FBQUEscUJBQVVQLElBQUksQ0FBQzRCLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUh1QyxpQkFBWDtBQUFBLGVBQXpCLENBRFQ7QUFrQkUsc0JBQVEsRUFBRSxrQkFBQ08sTUFBRDtBQUFBLHVCQUFZRCxpQkFBaUIsQ0FBQ0MsTUFBRCxDQUE3QjtBQUFBO0FBbEJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEosZUFtQ0UsOERBQUMsd0RBQUQ7QUFDRSxxQkFBTyxNQURUO0FBRUUsbUJBQUssTUFGUDtBQUdFLGtCQUFJLGVBQ0YsOERBQUMsc0RBQUQ7QUFDRSx1QkFBTyxFQUFFd0IsK0VBRFg7QUFFRSxxQkFBSyxFQUFFYSx5RUFGVDtBQUdFLG9CQUFJLEVBQUVYLHFFQUhSO0FBSUUsb0JBQUksRUFBRUMsc0VBQXVCVztBQUovQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKO0FBV0UsbUJBQUssRUFBQyxlQVhSO0FBWUUsbUJBQUssRUFBRTtBQUFFVix1QkFBTyxFQUFFO0FBQVgsZUFaVDtBQWFFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTW5ELGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUE7QUFiWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5DRjtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQXlERTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUNFLDhEQUFDLHdEQUFEO0FBQ0UsbUJBQU8sTUFEVDtBQUVFLGdCQUFJLE1BRk47QUFHRSxnQkFBSSxlQUFFLDhEQUFDLHFEQUFEO0FBQVEsa0JBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSFI7QUFJRSxpQkFBSyxFQUFDLGNBSlI7QUFLRSxpQkFBSyxFQUFFO0FBQUVtRCxxQkFBTyxFQUFFO0FBQVgsYUFMVDtBQU1FLG1CQUFPLEVBQUVoRTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFnR0ksOERBQUMsbURBQUQ7QUFDRSxlQUFTLEVBQUU2RCxnRkFEYjtBQUVFLFVBQUksRUFBRWpELFdBRlI7QUFHRSxZQUFNLEVBQUVjLGdCQUhWO0FBQUEsOEJBS0UsOERBQUMsMERBQUQ7QUFBYyxtQkFBVyxNQUF6QjtBQUFBLCtCQUNFLDhEQUFDLHlEQUFEO0FBQWEsbUJBQVMsRUFBRW1DLG1FQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVFFLDhEQUFDLHdEQUFEO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFDRSxlQUFLLEVBQUMsTUFEUjtBQUVFLGVBQUssRUFBRS9DLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFTixJQUZsQjtBQUdFLHVCQUFhLEVBQUUsdUJBQUNnQyxDQUFEO0FBQUE7O0FBQUEsbUJBQ2J6QixVQUFVLENBQUM7QUFDVFAsa0JBQUksRUFBRWdDLENBQUMsQ0FBQzBCLE1BQUYsQ0FBU0MsS0FETjtBQUVUaEIsbUJBQUssRUFBRSxDQUFBN0MsWUFBWSxTQUFaLElBQUFBLFlBQVksV0FBWixvQ0FBQUEsWUFBWSxDQUFFbUMsS0FBZCw4RUFBcUJKLE1BQXJCLEtBQStCO0FBRjdCLGFBQUQsQ0FERztBQUFBO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFvQkUsOERBQUMsMERBQUQ7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFRLGlCQUFPLEVBQUMsV0FBaEI7QUFBNEIsaUJBQU8sRUFBRVgsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsOERBQUMsb0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLGlCQUFPLEVBQUVDLGdCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEdKO0FBQUEsa0JBREY7QUFpSUQ7O0dBaE51QjlCLGU7VUFFZUssb0Y7OztLQUZmTCxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkdmVydGlzZXIuNWYwN2EyMjJmNDc2Y2FlNWZkMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIE1vZGFsLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCB7IEFkQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBBZENhcmQsIHtcclxuICBDYXJkRHJhZ0l0ZW0sXHJcbiAgQ2FyZERyYWdXcmFwcGVyLFxyXG4gIENhcmRJbnB1dCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBDb25maXJtTW9kYWwgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29uZmlybU1vZGFsXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpdmlkZXJcIjtcclxuaW1wb3J0IEFkc2xpdmVJY29uLCB7XHJcbiAgQWRJY29uLFxyXG4gIEFEU0xJVkVfSUNPTl9DT0xPUixcclxuICBBRFNMSVZFX0lDT05fU0laRSxcclxuICBBRFNMSVZFX0lDT05fVFlQRSxcclxuICBBRFNMSVZFX0lDT05fVkFSSUFOVCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdGVyXCI7XHJcbmltcG9ydCB7IEFkc2xpdmVINCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHVzZUFkdmVydGlzZXJTdG9yZSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5ob29rXCI7XHJcbmltcG9ydCB7IHBhcnNlVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY29tbW9uLnV0aWxcIjtcclxuaW1wb3J0IFN1YkxheW91dCBmcm9tIFwiLi4vLi4vLi4vc3ViLWxheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25TZXR0aW5nKHsgcmV0dXJuUHJlTGF5b3V0LCBsb2NhdGlvbiB9KSB7XHJcbiAgY29uc3QgYWRkQXJlYSA9IChhcmVhKSA9PiB7IH07XHJcbiAgY29uc3QgeyBsb2NhdGlvbnMsIGxvYWRMb2NhdGlvbnMgfSA9IHVzZUFkdmVydGlzZXJTdG9yZSgpXHJcbiAgY29uc3QgW2xvY2F0aW9uRGF0YSwgc2V0TG9jYXRpb25EYXRhXSA9IHVzZVN0YXRlKGxvY2F0aW9uKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShsb2NhdGlvbj8ubmFtZSk7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUobG9jYXRpb24/LmFkZHJlc3MpO1xyXG4gIGNvbnN0IFtzaG93TmV3QXJlYSwgc2V0U2hvd05ld0FyZWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW25ld0FyZWEsIHNldE5ld0FyZWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VjY2Vzc01zZywgc2V0U3VjY2Vzc01zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsZXRlQXJlYUlkLCBzZXREZWxldGVBcmVhSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmdEcmFnSXRlbXMsIHNldExvYWRpbmdEcmFnSXRlbXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkYXRhQ2hhbmdlZCwgc2V0RGF0YUNoYW5nZWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4gc2V0U2hvd05ld0FyZWEoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUFyZWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG93TmV3QXJlYShmYWxzZSk7XHJcbiAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBBZHZlcnRpc2VyQXBpQ2xpZW50LmNyZWF0ZUFyZWEoXHJcbiAgICAgIGxvY2F0aW9uRGF0YT8uaWQsXHJcbiAgICAgIG5ld0FyZWFcclxuICAgICk7XHJcbiAgICBpZiAocmVzPy5kYXRhKSBsb2FkTG9jYXRpb25zKClcclxuICAgIGlmIChyZXNbJ2Vycm9yJ10pIHtcclxuICAgICAgc2V0RXJyb3JNc2cocmVzWydlcnJvciddWydkYXRhJ11bJ2Vycm9yJ11bJ21lc3NhZ2UnXSlcclxuICAgIH1cclxuICAgIGlmIChyZXM/LmRhdGEpIHtcclxuICAgICAgc2V0U3VjY2Vzc01zZygnVXBkYXRlZCBTY2hlZHVsZScpXHJcbiAgICB9XHJcbiAgfTtcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGVBcmVhKGlkKSB7XHJcbiAgICBoYW5kbGVMb2FkRHJhZ0l0ZW0oaWQsIHRydWUpXHJcbiAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBBZHZlcnRpc2VyQXBpQ2xpZW50LmRlbGV0ZUFyZWEoaWQpXHJcbiAgICBpZiAocmVzPy5kYXRhKSB7XHJcbiAgICAgIGxvYWRMb2NhdGlvbnMoKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gaGFuZGxlTG9hZERyYWdJdGVtKGlkLCBpc0xvYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBzZXRMb2FkaW5nRHJhZ0l0ZW1zKHsgLi4ubG9hZGluZ0RyYWdJdGVtcywgW2lkXTogaXNMb2FkaW5nIH0pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU9yZGVyKGNoYW5nZSkge1xyXG4gICAgaWYgKCFjaGFuZ2U/Lmxlbmd0aCkgcmV0dXJuXHJcbiAgICBjb25zdCBuZXdBcmVhcyA9IGNoYW5nZS5tYXAoZSA9PiBsb2NhdGlvbi5hcmVhcy5maW5kKGFyZWEgPT4gYXJlYS5yZWNJZCA9PT0gZS5pZCkpXHJcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobmV3QXJlYXMpICE9PSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbi5hcmVhcykpIHtcclxuICAgICAgY29uc3QgbG9hZEFsbCA9IG5ld0FyZWFzLnJlZHVjZSgocmVzLCBjdXIpID0+IHJlcyA9IHsgLi4ucmVzLCBbY3VyLmlkXTogdHJ1ZSB9LCB7fSlcclxuICAgICAgc2V0TG9hZGluZ0RyYWdJdGVtcyhsb2FkQWxsKVxyXG4gICAgICBuZXdBcmVhcy5mb3JFYWNoKChhcmVhLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBhcmVhPy5pZFxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVBcmVhKGlkLCB7IG9yZGVyOiBpICsgMSB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuZXdBcmVhcy5sZW5ndGggLSAxID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgbG9hZExvY2F0aW9ucygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24oaXNDaGFuZ2UpIHtcclxuICAgIGlmICghaXNDaGFuZ2UpIHJldHVyblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHsuLi5sb2NhdGlvbkRhdGEsIC4uLntuYW1lLCBhZGRyZXNzfX1cclxuICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVMb2NhdGlvbihsb2NhdGlvbi5pZCwgbmV3RGF0YSlcclxuICAgIGlmIChyZXM/LmRhdGEpIHtcclxuICAgICAgc2V0U3VjY2Vzc01zZyhcIlVwZGF0ZWQhXCIpXHJcbiAgICAgIHNldExvY2F0aW9uRGF0YSh7Li4ubG9jYXRpb25EYXRhLCAuLi5yZXMuZGF0YX0pXHJcbiAgICB9XHJcbiAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTXNnKHJlcy5lcnJvci5kYXRhPy5tZXNzYWdlIHx8ICdGYWlsZWQnKVxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYXRpb25EYXRhKGxvY2F0aW9ucz8uZmluZChlID0+IGxvY2F0aW9uLmlkID09PSBlLmlkKSB8fCBsb2NhdGlvbilcclxuICAgIGlmIChkZWxldGVBcmVhSWQgJiYgbG9jYXRpb24uYXJlYXMuaW5jbHVkZXMoZSA9PiBlLmlkID09PSBkZWxldGVBcmVhSWQpKSB7XHJcbiAgICAgIC8vIGhhbmRsZUxvYWREcmFnSXRlbShkZWxldGVBcmVhSWQsIGZhbHNlKVxyXG4gICAgICBzZXREZWxldGVBcmVhSWQobnVsbCk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nRHJhZ0l0ZW1zKHt9KVxyXG4gIH0sIFtsb2NhdGlvbiwgbG9jYXRpb25zXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbmZpcm1Nb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiRGVsZXRlIE1lZGlhXCJcclxuICAgICAgICBvbkV4ZWN1dGU9eygpID0+IHtcclxuICAgICAgICAgIGhhbmRsZURlbGV0ZUFyZWEoZGVsZXRlQXJlYUlkKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNob3c9eyEhZGVsZXRlQXJlYUlkfVxyXG4gICAgICAgIHNldFNob3c9e3NldERlbGV0ZUFyZWFJZH1cclxuICAgICAgLz5cclxuICAgICAgPFRvYXN0ZXIgdHlwZT1cImVycm9yXCIgaGFuZGxlU2V0VG9hc3Q9e3NldEVycm9yTXNnfSBtZXNzYWdlPXtlcnJvck1zZ30gLz5cclxuICAgICAgPFRvYXN0ZXIgdHlwZT1cInN1Y2Nlc3NcIiBoYW5kbGVTZXRUb2FzdD17c2V0U3VjY2Vzc01zZ30gbWVzc2FnZT17c3VjY2Vzc01zZ30gLz5cclxuICAgICAgPFN1YkxheW91dFxyXG4gICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWRzbGl2ZUljb25cclxuICAgICAgICAgICAgICB2YXJpYW50PXtBRFNMSVZFX0lDT05fVkFSSUFOVC5GVUxMX0xFRlRfQVJST1d9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICB0eXBlPXtBRFNMSVZFX0lDT05fVFlQRS5CT0xEfVxyXG4gICAgICAgICAgICAgIHNpemU9e0FEU0xJVkVfSUNPTl9TSVpFLlNNQUxMfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldHVyblByZUxheW91dChkYXRhQ2hhbmdlZCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBZHNsaXZlSDQ+TG9jYXRpb24gU2V0dGluZzwvQWRzbGl2ZUg0PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgPEFkQ2FyZFxyXG4gICAgICAgICAgICAgIGhlYWRlcj17PGRpdj57bG9jYXRpb25EYXRhPy5uYW1lfTwvZGl2Pn1cclxuICAgICAgICAgICAgICBib2R5PXtcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXNPdXQ9e3VwZGF0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzcz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50KSA9PiBzZXRBZGRyZXNzKHtkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1c091dD17dXBkYXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbkRhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRHJhZ1dyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtsb2NhdGlvbkRhdGE/LmFyZWFzPy5tYXAoKGFyZWEpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhcmVhLnJlY0lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJlYS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZERyYWdJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ0RyYWdJdGVtc1thcmVhLmlkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZUFyZWFJZChhcmVhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhcnNlVGl0bGUoYXJlYT8ubmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRHJhZ0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGFuZ2UpID0+IGhhbmRsZUNoYW5nZU9yZGVyKGNoYW5nZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPEFkQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZEJ0blxyXG4gICAgICAgICAgICAgICAgICAgIGdob3N0XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWRzbGl2ZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17QURTTElWRV9JQ09OX1ZBUklBTlQuQ0lSQ0xFX1BMVVN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtBRFNMSVZFX0lDT05fQ09MT1IuUFJJTUFSWX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17QURTTElWRV9JQ09OX1RZUEUuQk9MRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17QURTTElWRV9JQ09OX1NJWkUuU01BTEx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFERCBNT1JFIEFSRUFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd05ld0FyZWEodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgIDxBZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2FyZEJ0blxyXG4gICAgICAgICAgICAgICAgZGFzaFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEFkSWNvbiBuYW1lPVwiaW4tYS1jaXJjbGVcIiAvPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQUREIExPQ0FUSU9OXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRBcmVhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVDYW1wYWluTW9kYWx9XHJcbiAgICAgICAgICBzaG93PXtzaG93TmV3QXJlYX1cclxuICAgICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwuVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNyZWF0ZSBOZXcgQXJlYTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Q2FyZElucHV0XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3QXJlYT8ubmFtZX1cclxuICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldE5ld0FyZWEoe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgb3JkZXI6IGxvY2F0aW9uRGF0YT8uYXJlYXM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUFyZWF9PlxyXG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(function() {
var exports = {};
exports.id = "pages/advertiser";
exports.ids = ["pages/advertiser"];
exports.modules = {

/***/ "./pages/advertiser/index.tsx":
/*!************************************!*\
  !*** ./pages/advertiser/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_layout_advertiser_entrance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/layout/advertiser/entrance */ "./resources/layout/advertiser/entrance/index.tsx");
/* harmony import */ var _resources_pages_components_advertiser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/pages-components/advertiser */ "./resources/pages-components/advertiser/index.tsx");
/* harmony import */ var _resources_stores_advertiser_store_advertiser_store_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/stores/advertiser-store/advertiser-store.provider */ "./resources/stores/advertiser-store/advertiser-store.provider.tsx");

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\pages\\advertiser\\index.tsx";



function AdvertiserPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_resources_stores_advertiser_store_advertiser_store_provider__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_resources_layout_advertiser_entrance__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_resources_pages_components_advertiser__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/api-clients/advertiser.api-client.ts":
/*!********************************************************!*\
  !*** ./resources/api-clients/advertiser.api-client.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserApiClient; }
/* harmony export */ });
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rest-client */ "./resources/utils/rest-client.ts");


class AdvertiserApiClient {
  static async getAdvertiserInformation() {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet("/advertiser/auth/profile").then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  }

  static async signIn(email, pwd) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPost("/advertiser/auth/sign-in", {
      email,
      password: pwd
    }).then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  } // ---------------------------- Location & Area API --------------------------


  static async getLocations() {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet("/advertiser/location").then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  }

  static async updateLocation(id, body) {
    if (body !== null && body !== void 0 && body.address && Object.values(body === null || body === void 0 ? void 0 : body.address).length == 0) delete body.address;
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/location/${id}`, body).catch(err => ({
      error: err.response
    }));
  }

  static async createArea(locationId, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPost(`/advertiser/location/${locationId}/area`, body).catch(err => ({
      error: err.response
    }));
  }

  static async getAreaScreen(areaId) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/location/area/${areaId}/screen`).then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  }

  static async deleteArea(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncDelete(`/advertiser/location/area/${id}`).catch(err => ({
      error: err.response
    }));
  }

  static async updateArea(id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/location/area/${id}`, body).catch(err => ({
      error: err.response
    }));
  } // ---------------------------- Sreen API --------------------------


  static async createScreen(areaId, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPost(`/advertiser/location/area/${areaId}/screen`, body).catch(err => ({
      error: err.response
    }));
  }

  static async getScreen(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/screen/${id}`).then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  }

  static async updateScreen(id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/screen/${id}`, body).then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  }

  static async deleteScreen(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPost(`/advertiser/screen/${id}`).catch(err => ({
      error: err.response
    }));
  } // -------------------------------- CAMPAIGNS API -----------------------------------------------


  static async getCampaigns() {
    // return await MockApiCampaign()
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/campaign/`).then(({
      status,
      data
    }) => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(status, data);
    }).catch(err => {
      return (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_0__.standardServiceResponse)(1, null, err);
    });
  }

  static async createCampaign(body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPost(`/advertiser/campaign/`, body).catch(err => ({
      error: err.response
    }));
  }

  static async updateCampaign(id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/campaign/${id}`, body).catch(err => ({
      error: err.response
    }));
  }

  static async getCampaign(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/campaign/${id}`).catch(err => ({
      error: err.response
    }));
  } // --------------------------------------- CAMPAIGNS ADS-SET API ----------------------------------------


  static async getCampaignAdsSet(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/campaign/${id}/ads-set`).catch(err => ({
      error: err.response
    }));
  }

  static async getCampaignSchedule(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/campaign/${id}/schedule`).catch(err => ({
      error: err.response
    }));
  }

  static async updateCampaignSchedule(id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/campaign/${id}/schedule`, body).catch(err => ({
      error: err.response
    }));
  }

  static async getCampaignTargetScreenConditions(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/campaign/${id}/target-screen-conditions`).catch(err => ({
      error: err.response
    }));
  }

  static async updateCampaignTargetScreenConditions(id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/campaign/${id}/target-screen-conditions`, body).catch(err => ({
      error: err.response
    }));
  }

  static async updateAdsSetMedia(ads_set_id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/ads-set/${ads_set_id}/media`, body).catch(err => ({
      error: err.response
    }));
  } // ------------------------------------------- VIDEOS API ------------------------------------


  static async postVideo(body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPost(`/advertiser/video/`, body).catch(err => ({
      error: err.response
    }));
  }

  static async getVideos() {
    // return await MockCVideos()
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncGet(`/advertiser/video/`).catch(err => ({
      error: err.response
    }));
  } // static async getVideo(id) {
  //   return restClient.asyncGet(`/advertiser/video/${id}`).catch(err => ({error: err.response}))
  // }


  static async updateVideo(id, body) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncPut(`/advertiser/video/${id}`, body).catch(err => ({
      error: err.response
    }));
  }

  static async deleteVideo(id) {
    return _utils_rest_client__WEBPACK_IMPORTED_MODULE_1__.default.asyncDelete(`/advertiser/video/${id}`).catch(err => ({
      error: err.response
    }));
  }

}

/***/ }),

/***/ "./resources/api-clients/cloudinary-api.ts":
/*!*************************************************!*\
  !*** ./resources/api-clients/cloudinary-api.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CloudinaryApi; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${"dngez6bhp"}/upload`;

function createFormData(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "h0b1zgy4");
  return formData;
}

class CloudinaryApi {
  static async uploadVideo(data) {
    // const mock: any = MockCloudinaryVideo()
    // return mock
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(UPLOAD_URL, createFormData(data));
    if (res && res.status == 200) return res.data;
  }

}

/***/ }),

/***/ "./resources/components/button/index.tsx":
/*!***********************************************!*\
  !*** ./resources/components/button/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSLIVE_BUTTON_SIZE": function() { return /* binding */ ADSLIVE_BUTTON_SIZE; },
/* harmony export */   "ADSLIVE_BUTTON_TYPE": function() { return /* binding */ ADSLIVE_BUTTON_TYPE; },
/* harmony export */   "ADSLIVE_BUTTON_VARIANT": function() { return /* binding */ ADSLIVE_BUTTON_VARIANT; },
/* harmony export */   "AdButton": function() { return /* binding */ AdButton; },
/* harmony export */   "default": function() { return /* binding */ ADSLIVEButton; },
/* harmony export */   "Dots": function() { return /* binding */ Dots; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/button/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\button\\index.tsx";



let ADSLIVE_BUTTON_SIZE;

(function (ADSLIVE_BUTTON_SIZE) {
  ADSLIVE_BUTTON_SIZE["LARGE"] = "large";
  ADSLIVE_BUTTON_SIZE["SMALL"] = "small";
})(ADSLIVE_BUTTON_SIZE || (ADSLIVE_BUTTON_SIZE = {}));

let ADSLIVE_BUTTON_TYPE;

(function (ADSLIVE_BUTTON_TYPE) {
  ADSLIVE_BUTTON_TYPE["FIT"] = "fit";
  ADSLIVE_BUTTON_TYPE["FULL"] = "full";
})(ADSLIVE_BUTTON_TYPE || (ADSLIVE_BUTTON_TYPE = {}));

let ADSLIVE_BUTTON_VARIANT;

(function (ADSLIVE_BUTTON_VARIANT) {
  ADSLIVE_BUTTON_VARIANT["PRIMARY"] = "primary";
  ADSLIVE_BUTTON_VARIANT["ROUNDER"] = "rounder";
  ADSLIVE_BUTTON_VARIANT["SECONDARY"] = "secondary";
})(ADSLIVE_BUTTON_VARIANT || (ADSLIVE_BUTTON_VARIANT = {}));

const getTypeClassName = (type = ADSLIVE_BUTTON_TYPE.FIT) => {
  switch (type) {
    case ADSLIVE_BUTTON_TYPE.FIT:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fit);

    case ADSLIVE_BUTTON_TYPE.FULL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().full);

    default:
      return null;
  }
};

const getVariantClassName = (variant = ADSLIVE_BUTTON_VARIANT.PRIMARY) => {
  switch (variant) {
    case ADSLIVE_BUTTON_VARIANT.PRIMARY:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primary);

    case ADSLIVE_BUTTON_VARIANT.ROUNDER:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().rounder);

    default:
      return null;
  }
};

const getSizeClassName = (size = ADSLIVE_BUTTON_SIZE.LARGE) => {
  switch (size) {
    case ADSLIVE_BUTTON_SIZE.LARGE:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().large);

    case ADSLIVE_BUTTON_SIZE.SMALL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().small);

    default:
      return null;
  }
};

function AdButton(props) {
  const {
    icon,
    title,
    onClick,
    variant,
    cardBtn,
    dash,
    ghost,
    style,
    isLoading
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
    style: style,
    onClick: onClick,
    variant: variant || "light",
    disabled: isLoading,
    className: `
        ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().adBtn)}
        ${cardBtn ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBtn) : ""}
        ${dash ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dashBtn) : ""}
        ${ghost ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ghostBtn) : ""}
      `,
    children: [icon, isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loading),
      children: ["Loading", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dots, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 60
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 20
    }, this) : title]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function ADSLIVEButton({
  size,
  type,
  variant,
  className,
  style,
  disabledClassName,
  disabledStyle,
  children,
  onClick,
  disabled
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button)} ${getTypeClassName(type) || ""} ${getVariantClassName(variant) || ""} ${getSizeClassName(size) || ""} ${disabled ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().disabled) : ""} ${className || ""}`,
    style: style,
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}
const Dots = () => {
  const {
    0: dots,
    1: setDots
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  let interval;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    interval = setInterval(() => {
      setDots(dots === 3 ? 0 : dots + 1);
    }, 400);
    return () => {
      clearInterval(interval);
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    children: dots === 0 ? "" : ".".repeat(dots)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./resources/components/card/index.tsx":
/*!*********************************************!*\
  !*** ./resources/components/card/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardInput": function() { return /* binding */ CardInput; },
/* harmony export */   "CardSelect": function() { return /* binding */ CardSelect; },
/* harmony export */   "CardMultiSelect": function() { return /* binding */ CardMultiSelect; },
/* harmony export */   "CardSelectTime": function() { return /* binding */ CardSelectTime; },
/* harmony export */   "CardDragItem": function() { return /* binding */ CardDragItem; },
/* harmony export */   "CardDragWrapper": function() { return /* binding */ CardDragWrapper; },
/* harmony export */   "default": function() { return /* binding */ AdCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../divider */ "./resources/components/divider/index.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/card/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\card\\index.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function CardInput(props) {
  let {
    title,
    value,
    onInputChange,
    onFocusOut,
    icon
  } = props;
  value = value || "";
  const {
    0: isChange,
    1: setIsChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardInput),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      disabled: props.disabled,
      value: value,
      type: props.type || "text",
      onChange: e => {
        setIsChange(e.target.value !== value);
        onInputChange(e);
      },
      onBlur: () => onFocusOut(isChange)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().icon),
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function CardSelect(props) {
  const {
    title,
    initValue,
    values,
    onChange
  } = props;
  const {
    0: selectedValue,
    1: onSelectValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initValue || null);

  function handleSelect(item) {
    onSelectValue(item);
    onChange(item);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardSelect),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Toggle, {
        id: "dropdown-basic",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().selectBtn),
        disabled: props.disabled,
        children: selectedValue || `Select ${title}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().menu),
        children: values === null || values === void 0 ? void 0 : values.map((value, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
            onClick: () => handleSelect(value),
            children: value
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function CardMultiSelect(props) {
  const {
    title,
    initValue,
    values,
    onChange,
    disabled
  } = props;
  const {
    0: selectedValue,
    1: setSelectValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initValue || []);
  const {
    0: showDrop,
    1: setShowDrop
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isSelectAll,
    1: setSelectAll
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const config = {
    show: showDrop
  };

  const handleSelectItem = item => {
    setShowDrop(true);
    if (checkInclude(item)) removeItem(item);else addItem(item);
  };

  function removeItem(item) {
    setSelectValue(selectedValue.filter(e => e !== item));
  }

  function addItem(item) {
    setSelectValue([...selectedValue, item]);
  }

  function displaySelect() {
    if (selectedValue !== null && selectedValue !== void 0 && selectedValue.length) return "Multi choices";else return "Select";
  }

  function checkInclude(item) {
    return selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.includes(item);
  }

  function handleDone() {
    setShowDrop(false);
    onChange(selectedValue);
  }

  function handleSelectAll(value) {
    setSelectAll(value);
    setSelectValue(value ? values : []);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardSelect),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown, _objectSpread(_objectSpread({}, config), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Toggle, {
        id: "dropdown-basic",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().selectBtn),
        disabled: disabled,
        onClick: () => setShowDrop(!showDrop),
        children: displaySelect()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
        id: "dropdown-menu",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().menu),
        children: [(values === null || values === void 0 ? void 0 : values.length) > 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          style: {
            width: '100%'
          },
          variant: isSelectAll ? 'outline-secondary' : 'secondary',
          onClick: () => handleSelectAll(!isSelectAll),
          children: [isSelectAll ? 'Unselect' : 'Select', " All"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 35
        }, this), values === null || values === void 0 ? void 0 : values.map((value, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
            id: "dropdown-item",
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().menuItem)} ${checkInclude(value) ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().selected) : ""}`,
            onClick: () => {
              handleSelectItem(value);
            },
            children: [value, checkInclude(value) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
              name: "check-in-a-circle-highlight",
              style: {
                marginLeft: "6px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 19
            }, this)]
          }, i.toString(), true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          style: {
            width: '100%'
          },
          variant: "primary",
          onClick: handleDone,
          children: "Done"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
function CardSelectTime(_ref) {
  let {
    title,
    initValue,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "initValue", "onChange"]);

  const retrieveHours = date => date ? moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format("HH:MM") : null;

  const data = initValue ? new Date(initValue) : null;
  const {
    0: date,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardSelect),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().selectBtn)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().datePickerContainer)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().datePicker),
        calendarClassName: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().calendar),
        selected: date,
        showTimeSelect: true,
        timeFormat: "HH:mm",
        timeIntervals: 15,
        timeCaption: "time",
        dateFormat: "MMMM d, yyyy h:mm aa",
        disabledKeyboardNavigation: true,
        shouldCloseOnSelect: false,
        onChange: change => {
          setDate(change);
          onChange(moment__WEBPACK_IMPORTED_MODULE_7___default()(change).format());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().calendarIcon),
        name: "Calendar",
        w: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

const DragItemLoader = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_content_loader__WEBPACK_IMPORTED_MODULE_10___default()), {
  viewBox: "0 0 380 50",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
    x: "0",
    y: "0",
    rx: "5",
    ry: "5",
    width: "50",
    height: "50"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
    x: "80",
    y: "17",
    rx: "4",
    ry: "4",
    width: "300",
    height: "13"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
    x: "80",
    y: "40",
    rx: "3",
    ry: "3",
    width: "250",
    height: "10"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 181,
  columnNumber: 3
}, undefined);

function CardDragItem({
  isLoading,
  onDelete,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardDragItem)} ${isLoading ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loading) : ''}`,
    children: isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DragItemLoader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 20
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().leftItem),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
          name: "drag",
          mr: "20px",
          h: "48px",
          w: "16px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }, this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
        name: "minus_circle",
        ml: "6px",
        w: "16px",
        onClick: onDelete,
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().icon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 5
  }, this);
}
function CardDragWrapper({
  items,
  onChange
}) {
  const {
    0: itemsStatus,
    1: setItemsStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(items);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setItemsStatus(items);
  }, [items]);

  const getListStyle = isDraggingOver => ({// background: isDraggingOver ? "inherit" : "lightgrey",
  });

  const getItemStyle = (isDragging, draggableStyle) => _objectSpread({
    userSelect: "none"
  }, draggableStyle);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) return;
    const items = reorder(itemsStatus, result.source.index, result.destination.index);
    setItemsStatus(items);
    onChange(items);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__.DragDropContext, {
    onDragEnd: onDragEnd,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__.Droppable, {
      droppableId: "droppable",
      children: (provided, snapshot) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
        ref: provided.innerRef,
        style: getListStyle(snapshot.isDraggingOver),
        children: [itemsStatus === null || itemsStatus === void 0 ? void 0 : itemsStatus.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__.Draggable, {
          draggableId: item.id,
          index: index,
          children: (provided, snapshot) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread(_objectSpread({
            ref: provided.innerRef
          }, provided.draggableProps), provided.dragHandleProps), {}, {
            style: getItemStyle(snapshot.isDragging, provided.draggableProps.style),
            children: item.content
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 19
          }, this)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 15
        }, this)), provided.placeholder]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 5
  }, this);
}
function AdCard(props) {
  const {
    header,
    body,
    footer,
    dot,
    fullView,
    toggle,
    toggled,
    clickable,
    loading
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `
        ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card)}
        ${dot ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().dot) : ""}
        ${clickable ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().clickable) : ""}
        ${toggle ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toggle) : ""}
        ${toggled ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toggled) : ""}
      `,
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loadingCard),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_8__.default, {
        size: _loading__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_LOADING_SIZE.EXTRA_SMALL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header),
        children: header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 11
      }, this), !toggled && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().divider),
        children: header && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_divider__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 56
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().body)} ${fullView ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fullView) : ""}`,
        children: body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().footer),
        children: footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 286,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/confirmModal/index.tsx":
/*!*****************************************************!*\
  !*** ./resources/components/confirmModal/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConfirmModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/confirmModal/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\confirmModal\\index.tsx";




function ConfirmModal({
  title,
  onExecute,
  show,
  setShow
}) {
  function handleContinue() {
    setShow(false);
    onExecute();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().createCampainModal),
    show: show,
    onHide: () => null,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
        children: ["Confirm ", (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_3__.parseTitle)(title)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
      children: "Do you want to continue ?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: () => setShow(false),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: handleContinue,
        children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_3__.parseTitle)(title) || 'Continue'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/divider/index.tsx":
/*!************************************************!*\
  !*** ./resources/components/divider/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\divider\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DividerStyle = style => _objectSpread({
  borderTop: '1px solid #E6E7E9',
  height: '1px'
}, style);

function Divider(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: DividerStyle(props.style)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./resources/components/icon/index.tsx":
/*!*********************************************!*\
  !*** ./resources/components/icon/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSLIVE_ICON_COLOR": function() { return /* binding */ ADSLIVE_ICON_COLOR; },
/* harmony export */   "ADSLIVE_ICON_TYPE": function() { return /* binding */ ADSLIVE_ICON_TYPE; },
/* harmony export */   "ADSLIVE_ICON_SIZE": function() { return /* binding */ ADSLIVE_ICON_SIZE; },
/* harmony export */   "ADSLIVE_ICON_VARIANT": function() { return /* binding */ ADSLIVE_ICON_VARIANT; },
/* harmony export */   "default": function() { return /* binding */ AdsliveIcon; },
/* harmony export */   "AdIcon": function() { return /* binding */ AdIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/icon/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\icon\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var EyeOffIcon = function EyeOffIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "m16.642 18.32-2.797-2.796a9.027 9.027 0 0 1-3.845.811 8.988 8.988 0 0 1-3.955-.863 8.395 8.395 0 0 1-2.534-1.901 8.75 8.75 0 0 1-1.76-2.808l-.084-.261.087-.264a8.988 8.988 0 0 1 2.93-3.875L2.5 4.178l1.178-1.176 14.14 14.14-1.175 1.179h-.001zM5.863 7.544a7.145 7.145 0 0 0-2.432 2.959A6.923 6.923 0 0 0 10 14.668a7.758 7.758 0 0 0 2.572-.416l-1.5-1.5c-.334.163-.701.249-1.073.25a2.516 2.516 0 0 1-2.5-2.5c0-.373.086-.74.25-1.075L5.863 7.543zm10.68 5.967-1.16-1.16a7.16 7.16 0 0 0 1.186-1.848A6.917 6.917 0 0 0 10 6.335c-.206 0-.412.008-.612.022L7.917 4.884A9.76 9.76 0 0 1 10 4.668a8.989 8.989 0 0 1 3.955.863 8.393 8.393 0 0 1 2.534 1.902 8.749 8.749 0 0 1 1.761 2.804l.083.265-.087.263a8.688 8.688 0 0 1-1.702 2.75v-.005z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

EyeOffIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var EyeOnIcon = function EyeOnIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: "12",
      cy: "12",
      r: "3",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M12 18c-4.548 0-8.367-2.526-9.916-6C3.633 8.526 7.452 6 12 6s8.367 2.526 9.916 6c-1.549 3.474-5.368 6-9.916 6z",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

EyeOnIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var WifiIcon = function WifiIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M3.535 9.47c5.223-4.193 12.834-3.946 17.777.739a1 1 0 0 0 1.376-1.452C17.013 3.379 8.279 3.097 2.283 7.91c-.333.267-.657.549-.97.847a1 1 0 0 0 1.375 1.452c.274-.26.557-.507.847-.74z",
      fill: "#000",
      fillOpacity: ".65"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M19.707 12.192c-4.256-4.256-11.158-4.256-15.414 0a1 1 0 1 0 1.414 1.415 8.9 8.9 0 0 1 12.586 0 1 1 0 0 0 1.414-1.415z",
      fill: "#000",
      fillOpacity: ".65"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M16.707 15.45a6.657 6.657 0 0 0-9.414 0 1 1 0 1 0 1.414 1.414 4.657 4.657 0 0 1 6.586 0 1 1 0 1 0 1.414-1.414zM13.25 18.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z",
      fill: "#000",
      fillOpacity: ".65"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

WifiIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ScreenIcon = function ScreenIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M7 20h5m5 0h-5m0 0v-3m0 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8z",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

ScreenIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ScreenBoldIcon = function ScreenBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M21 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z",
      fill: "#7F838E"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M7 20h5m5 0h-5m0 0v-3m0 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8z",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

ScreenBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var VideoIcon = function VideoIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M19 8h1a1 1 0 0 0-.293-.707L19 8zm-5-5 .707-.707A1 1 0 0 0 14 2v1zm0 5h-1v1h1V8zm5 12h1-1zM6 22h12v-2H6v2zM4 4v16h2V4H4zm16 16V8h-2v12h2zM14 2H6v2h8V2zm5.707 5.293-5-5-1.414 1.414 5 5 1.414-1.414zM13 3v5h2V3h-2zm1 6h5V7h-5v2zm4 13a2 2 0 0 0 2-2h-2v2zM6 20H4a2 2 0 0 0 2 2v-2zM6 4V2a2 2 0 0 0-2 2h2zM10.31 15.566v-5.57l4.938 3.454-4.938 3.453v-1.337z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

VideoIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var VideoBoldIcon = function VideoBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8v5h5v12a1 1 0 0 1-1 1H6zm4.31-11.003v6.906l4.938-3.453-4.938-3.453z",
      fill: "#7F838E"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M14 3h.5a.5.5 0 0 0-.5-.5V3zm0 5h-.5a.5.5 0 0 0 .5.5V8zm5 0h.5a.5.5 0 0 0-.5-.5V8zm0 12h-.5.5zM10.31 9.997l.287-.41a.5.5 0 0 0-.787.41h.5zm0 6.906h-.5a.5.5 0 0 0 .787.41l-.287-.41zm4.938-3.453.287.41a.5.5 0 0 0 0-.82l-.287.41zM4.5 20A1.5 1.5 0 0 0 6 21.5v-1a.5.5 0 0 1-.5-.5h-1zm0-16v16h1V4h-1zM6 2.5A1.5 1.5 0 0 0 4.5 4h1a.5.5 0 0 1 .5-.5v-1zm8 0H6v1h8v-1zm.5 5.5V3h-1v5h1zm4.5-.5h-5v1h5v-1zm.5 12.5V8h-1v12h1zM18 21.5a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1zm-12 0h12v-1H6v1zm4.81-5.934v-5.57h-1v5.57h1zm0 1.337v-1.337h-1v1.337h1zm4.151-3.863-4.937 3.453.573.82 4.938-3.453-.574-.82zm-4.937-2.634 4.938 3.454.573-.82-4.938-3.453-.573.82zm9.33-2.76-5-5-.708.708 5 5 .708-.708z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

VideoBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ACIcon = function ACIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm0 0v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-9 9h5",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

ACIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ACBoldIcon = function ACBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22.39c5.738 0 10.39-4.652 10.39-10.39S17.738 1.61 12 1.61 1.61 6.262 1.61 12 6.262 22.39 12 22.39zM6.713 12a5.287 5.287 0 1 1 10.574 0v1.048a.746.746 0 1 1-1.493 0V12a3.794 3.794 0 1 0-1.31 2.868 2.746 2.746 0 0 0 4.803-1.82V12A7.287 7.287 0 1 0 12 19.287h3.493v-2H12A5.287 5.287 0 0 1 6.713 12zM12 10.206a1.794 1.794 0 1 1 0 3.588 1.794 1.794 0 0 1 0-3.588z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

ACBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var PauseBoldIcon = function PauseBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM9.018 15.045v-6.09h2v6.09h-2zm3.964 0v-6.09h2v6.09h-2z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

PauseBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var GoLiveBoldIcon = function GoLiveBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.433 8.547v6.906L15.371 12l-4.938-3.453z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

GoLiveBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var SendIcon = function SendIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M22 3 2 11l7.697 2.743M22 3l-9 19-3.303-8.257M22 3 9.697 13.743",
      stroke: "#7F838E",
      strokeWidth: "2",
      strokeLinejoin: "round"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

SendIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var SendBoldIcon = function SendBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M22.729 2.315a1 1 0 0 1 .175 1.113l-9 19a1 1 0 0 1-1.832-.057l-2.926-7.313 7.704-6.56a.5.5 0 0 0-.648-.76L8.43 14.352l-6.767-2.411a1 1 0 0 1-.035-1.87l20-8a1 1 0 0 1 1.1.243z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

SendBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AlertIcon = function AlertIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
      id: "a",
      fill: "#fff",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M14 19a2 2 0 0 1-4 0h4z"
      }, void 0, false, void 0, this)
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M14 19h2v-2h-2v2zm-4 0v-2H8v2h2zm2 0v4a4 4 0 0 0 4-4h-4zm0 0H8a4 4 0 0 0 4 4v-4zm-2 2H13.999L14 19v-2H10v4z",
      fill: "#7F838E",
      mask: "url(#a)"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M19 17v1a1 1 0 0 0 .832-1.555L19 17zm-2-3h-1a1 1 0 0 0 .168.555L17 14zM7 14l.832.555A1 1 0 0 0 8 14H7zm-2 3-.832-.555A1 1 0 0 0 5 18v-1zm3-7a4 4 0 0 1 4-4V4a6 6 0 0 0-6 6h2zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2zM7 18h10v-2H7v2zm10 0h2v-2h-2v2zm1-4v-4h-2v4h2zm1.832 2.445-2-3-1.664 1.11 2 3 1.664-1.11zM6 10v4h2v-4H6zm.168 3.445-2 3 1.664 1.11 2-3-1.664-1.11zM5 18h2v-2H5v2zm8-13V2h-2v3h2z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

AlertIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AlertBoldIcon = function AlertBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
      id: "a",
      fill: "#fff",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M14 19a2 2 0 0 1-4 0h4z"
      }, void 0, false, void 0, this)
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M14 19h2v-2h-2v2zm-4 0v-2H8v2h2zm2 0v4a4 4 0 0 0 4-4h-4zm0 0H8a4 4 0 0 0 4 4v-4zm-2 2H13.999L14 19v-2H10v4z",
      fill: "#7F838E",
      mask: "url(#a)"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M12 5a5 5 0 0 0-5 5v4l-2 3h14l-2-3v-4a5 5 0 0 0-5-5z",
      fill: "#7F838E"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M19 17v1a1 1 0 0 0 .832-1.555L19 17zm-2-3h-1a1 1 0 0 0 .168.555L17 14zM7 14l.832.555A1 1 0 0 0 8 14H7zm-2 3-.832-.555A1 1 0 0 0 5 18v-1zm3-7a4 4 0 0 1 4-4V4a6 6 0 0 0-6 6h2zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2zM7 18h10v-2H7v2zm10 0h2v-2h-2v2zm1-4v-4h-2v4h2zm1.832 2.445-2-3-1.664 1.11 2 3 1.664-1.11zM6 10v4h2v-4H6zm.168 3.445-2 3 1.664 1.11 2-3-1.664-1.11zM5 18h2v-2H5v2zm8-13V2h-2v3h2z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

AlertBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AttentionBoldIcon = function AttentionBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-17a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm1.25 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

AttentionBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CalendarIcon = function CalendarIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M21 8.95V5a1 1 0 0 0-1-1h-3m4 4.95H3m18 0V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.95m0 0V5a1 1 0 0 1 1-1h3m0 0V1m0 3h10m0 0V1",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CalendarIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var SearchIcon = function SearchIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "m14 14 6 6",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: "9.5",
      cy: "9.5",
      r: "5.5",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

SearchIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CirclePlusIcon = function CirclePlusIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: "12",
      cy: "12",
      r: "9",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M17.657 12H12m0 0H6.343M12 12v5.657M12 12V6.343",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

CirclePlusIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CirclePlusBoldIcon = function CirclePlusBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-4.343V13H6.343v-2H11V6.343h2V11h4.657v2H13v4.657h-2z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CirclePlusBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var SettingIcon = function SettingIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "m10.444 3-.466 2.849a6.5 6.5 0 0 0-2.307 1.325L4.984 6.152 3.427 8.848l2.213 1.81a6.469 6.469 0 0 0 0 2.685l-2.213 1.809 1.557 2.696 2.69-1.018a6.502 6.502 0 0 0 2.304 1.321L10.444 21h3.112l.466-2.849a6.5 6.5 0 0 0 2.307-1.325l2.687 1.022 1.557-2.696-2.213-1.81a6.466 6.466 0 0 0 0-2.685l2.213-1.809-1.557-2.696-2.69 1.018a6.5 6.5 0 0 0-2.304-1.321L13.556 3h-3.112z",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

SettingIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var SettingBoldIcon = function SettingBoldIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.978 5.849 10.444 3h3.112l.466 2.849a6.5 6.5 0 0 1 2.303 1.321l2.691-1.018 1.557 2.696-2.213 1.81a6.465 6.465 0 0 1 0 2.685l2.213 1.809-1.557 2.696-2.687-1.022a6.5 6.5 0 0 1-2.307 1.325L13.556 21h-3.112l-.466-2.849a6.502 6.502 0 0 1-2.303-1.321l-2.691 1.018-1.557-2.696 2.213-1.81a6.468 6.468 0 0 1 0-2.685L3.427 8.848l1.557-2.696 2.687 1.022a6.5 6.5 0 0 1 2.307-1.325zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

SettingBoldIcon.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var FullLeftArrow = function FullLeftArrow(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M11 6.5 5.5 12m0 0 5.5 5.5M5.5 12H20",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

FullLeftArrow.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var FullRightArrow = function FullRightArrow(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "m13 6.5 5.5 5.5m0 0L13 17.5m5.5-5.5H4",
      stroke: "#7F838E",
      strokeWidth: "2"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

FullRightArrow.defaultProps = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var MinusCircle = function MinusCircle(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M9 16.996A8.342 8.342 0 0 1 .667 8.663v-.167A8.333 8.333 0 1 1 9 16.996zM4.833 7.83v1.667h8.334V7.83H4.833z",
      fill: "#7F838E"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

MinusCircle.defaultProps = {
  width: "18",
  height: "17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
let ADSLIVE_ICON_COLOR;

(function (ADSLIVE_ICON_COLOR) {
  ADSLIVE_ICON_COLOR["PRIMARY"] = "primary";
  ADSLIVE_ICON_COLOR["NORMAL"] = "normal";
})(ADSLIVE_ICON_COLOR || (ADSLIVE_ICON_COLOR = {}));

let ADSLIVE_ICON_TYPE;

(function (ADSLIVE_ICON_TYPE) {
  ADSLIVE_ICON_TYPE["REGULAR"] = "regular";
  ADSLIVE_ICON_TYPE["BOLD"] = "bold";
})(ADSLIVE_ICON_TYPE || (ADSLIVE_ICON_TYPE = {}));

let ADSLIVE_ICON_SIZE;

(function (ADSLIVE_ICON_SIZE) {
  ADSLIVE_ICON_SIZE["LARGE"] = "large";
  ADSLIVE_ICON_SIZE["MEDIUM"] = "medium";
  ADSLIVE_ICON_SIZE["SMALL"] = "small";
  ADSLIVE_ICON_SIZE["EXTRA_SMALL"] = "extra-small";
})(ADSLIVE_ICON_SIZE || (ADSLIVE_ICON_SIZE = {}));

let ADSLIVE_ICON_VARIANT;

(function (ADSLIVE_ICON_VARIANT) {
  ADSLIVE_ICON_VARIANT["SCREEN"] = "screen";
  ADSLIVE_ICON_VARIANT["VIDEO"] = "video";
  ADSLIVE_ICON_VARIANT["SEND"] = "send";
  ADSLIVE_ICON_VARIANT["A_C"] = "a-c";
  ADSLIVE_ICON_VARIANT["ALERT"] = "alert";
  ADSLIVE_ICON_VARIANT["ATTENTION"] = "attention";
  ADSLIVE_ICON_VARIANT["CIRCLE_X"] = "circle-x";
  ADSLIVE_ICON_VARIANT["CIRCLE_PLUS"] = "circle-plus";
  ADSLIVE_ICON_VARIANT["CIRCLE_MINUS"] = "circle-minus";
  ADSLIVE_ICON_VARIANT["SEARCH"] = "search";
  ADSLIVE_ICON_VARIANT["SETTING"] = "setting";
  ADSLIVE_ICON_VARIANT["SQUARE_DOWN"] = "square-down";
  ADSLIVE_ICON_VARIANT["DOWN"] = "down";
  ADSLIVE_ICON_VARIANT["CODE"] = "code";
  ADSLIVE_ICON_VARIANT["PEN"] = "pen";
  ADSLIVE_ICON_VARIANT["TRASH"] = "trash";
  ADSLIVE_ICON_VARIANT["FULL_LEFT_ARROW"] = "full-left-arrow";
  ADSLIVE_ICON_VARIANT["FULL_RIGHT_ARROW"] = "full-right-arrow";
  ADSLIVE_ICON_VARIANT["WIFI"] = "wifi";
  ADSLIVE_ICON_VARIANT["FILTER"] = "filter";
  ADSLIVE_ICON_VARIANT["PAUSE"] = "pause";
  ADSLIVE_ICON_VARIANT["GO_LIVE"] = "go-live";
  ADSLIVE_ICON_VARIANT["CALENDAR"] = "calendar";
  ADSLIVE_ICON_VARIANT["EYE_ON"] = "eye-on";
  ADSLIVE_ICON_VARIANT["EYE_OFF"] = "eye-off";
  ADSLIVE_ICON_VARIANT["MINUS_CIRCLE"] = "minus-circle";
  ADSLIVE_ICON_VARIANT["InACircle"] = "InACircle";
})(ADSLIVE_ICON_VARIANT || (ADSLIVE_ICON_VARIANT = {}));

const iconComponents = {
  [ADSLIVE_ICON_VARIANT.ALERT]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: AlertIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: AlertBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.ATTENTION]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: AttentionBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.A_C]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: ACIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: ACBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.CALENDAR]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: CalendarIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.CIRCLE_MINUS]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.CIRCLE_PLUS]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: CirclePlusIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: CirclePlusBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.CIRCLE_X]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.CODE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.DOWN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.EYE_OFF]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: EyeOffIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.EYE_ON]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: EyeOnIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.FILTER]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: FullLeftArrow,
    [ADSLIVE_ICON_TYPE.BOLD]: FullLeftArrow
  },
  [ADSLIVE_ICON_VARIANT.FULL_RIGHT_ARROW]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: FullRightArrow,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.GO_LIVE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: GoLiveBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.PAUSE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: PauseBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.PEN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.SCREEN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: ScreenIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: ScreenBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.SEARCH]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: SearchIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.SEND]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: SendIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: SendBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.SETTING]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: SettingIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: SettingBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.SQUARE_DOWN]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.TRASH]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: null,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.VIDEO]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: VideoIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: VideoBoldIcon
  },
  [ADSLIVE_ICON_VARIANT.WIFI]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: WifiIcon,
    [ADSLIVE_ICON_TYPE.BOLD]: null
  },
  [ADSLIVE_ICON_VARIANT.MINUS_CIRCLE]: {
    [ADSLIVE_ICON_TYPE.REGULAR]: MinusCircle,
    [ADSLIVE_ICON_TYPE.BOLD]: MinusCircle
  } // [ADSLIVE_ICON_VARIANT.BACK]: {
  //   [ADSLIVE_ICON_TYPE.REGULAR]: BackIcon,
  //   [ADSLIVE_ICON_TYPE.BOLD]: null,
  // },

};

const getIcon = (variant, type) => {
  return (0,ramda__WEBPACK_IMPORTED_MODULE_2__.path)([variant, type], iconComponents) || null;
};

const getSizeClassName = size => {
  switch (size) {
    case ADSLIVE_ICON_SIZE.LARGE:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().large);

    case ADSLIVE_ICON_SIZE.MEDIUM:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().medium);

    case ADSLIVE_ICON_SIZE.SMALL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().small);

    case ADSLIVE_ICON_SIZE.EXTRA_SMALL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().extraSmall);

    default:
      return null;
  }
};

const getVariantClassNameByBoldType = variant => {
  switch (variant) {
    case ADSLIVE_ICON_VARIANT.SCREEN:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().screenBold);

    case ADSLIVE_ICON_VARIANT.VIDEO:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().videoBold);

    case ADSLIVE_ICON_VARIANT.SEND:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sendBold);

    case ADSLIVE_ICON_VARIANT.ALERT:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().alertBold);

    case ADSLIVE_ICON_VARIANT.A_C:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aCBold);

    case ADSLIVE_ICON_VARIANT.CIRCLE_PLUS:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circlePlusBold);

    default:
      return null;
  }
};

const getVariantClassNameByRegularType = variant => {
  switch (variant) {
    case ADSLIVE_ICON_VARIANT.SCREEN:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().screen);

    case ADSLIVE_ICON_VARIANT.VIDEO:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().video);

    case ADSLIVE_ICON_VARIANT.SEND:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().send);

    case ADSLIVE_ICON_VARIANT.ALERT:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().alert);

    case ADSLIVE_ICON_VARIANT.A_C:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aC);

    case ADSLIVE_ICON_VARIANT.SEARCH:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search);

    default:
      return null;
  }
};

const getColorClassName = color => {
  switch (color) {
    case ADSLIVE_ICON_COLOR.NORMAL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().normal);

    case ADSLIVE_ICON_COLOR.PRIMARY:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primary);

    default:
      return null;
  }
};

function AdsliveIcon(_ref) {
  let {
    className,
    style,
    color = ADSLIVE_ICON_COLOR.NORMAL,
    variant,
    type = ADSLIVE_ICON_TYPE.REGULAR,
    size = ADSLIVE_ICON_SIZE.SMALL
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "style", "color", "variant", "type", "size"]);

  const Icon = getIcon(variant, type);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)} ${getColorClassName(color)} ${getSizeClassName(size)} ${type === ADSLIVE_ICON_TYPE.BOLD ? getVariantClassNameByBoldType(variant) || "" : getVariantClassNameByRegularType(variant) || ""} ${className || ""}`,
    style: style,
    children: Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().svg),
      viewBox: "0 0 24 24"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 16
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 5
  }, this);
} // ---------------------------

function AdIcon(props) {
  const {
    name,
    w,
    h,
    m,
    mr,
    ml,
    r,
    onClick,
    url
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().adIcon)} ${onClick ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().clickable) : null}`
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      style: {
        width: w || "24px",
        minWidth: w || "24px",
        height: h || w || "24px",
        minHeight: h || w || "24px",
        margin: m || 0,
        marginRight: mr || m,
        marginLeft: ml || m,
        borderRadius: r || 0
      },
      src: url || `/${name}.svg`,
      alt: "icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/loading/index.tsx":
/*!************************************************!*\
  !*** ./resources/components/loading/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSLIVE_LOADING_SIZE": function() { return /* binding */ ADSLIVE_LOADING_SIZE; },
/* harmony export */   "default": function() { return /* binding */ AdsliveLoading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/loading/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\loading\\index.tsx";

let ADSLIVE_LOADING_SIZE;

(function (ADSLIVE_LOADING_SIZE) {
  ADSLIVE_LOADING_SIZE["LARGE"] = "large";
  ADSLIVE_LOADING_SIZE["MEDIUM"] = "medium";
  ADSLIVE_LOADING_SIZE["SMALL"] = "small";
  ADSLIVE_LOADING_SIZE["EXTRA_SMALL"] = "extra-small";
})(ADSLIVE_LOADING_SIZE || (ADSLIVE_LOADING_SIZE = {}));

const getSizeClassName = size => {
  switch (size) {
    case ADSLIVE_LOADING_SIZE.LARGE:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().large);

    case ADSLIVE_LOADING_SIZE.MEDIUM:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().medium);

    case ADSLIVE_LOADING_SIZE.SMALL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().small);

    case ADSLIVE_LOADING_SIZE.EXTRA_SMALL:
      return (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().extraSmall);

    default:
      return null;
  }
};

function AdsliveLoading({
  className,
  style,
  size = ADSLIVE_LOADING_SIZE.SMALL
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().loading)} ${getSizeClassName(size) || ""} ${className || ""}`,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      style: style,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(80,50)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(0)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.875s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.875s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(71.21320343559643,71.21320343559643)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(45)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.875",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.75s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.75s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(50,80)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(90)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.75",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.625s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.625s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(28.786796564403577,71.21320343559643)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(135)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.625",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.5s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.5s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(20,50.00000000000001)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(180)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.375s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.375s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(28.78679656440357,28.786796564403577)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(225)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.375",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.25s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.25s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(49.99999999999999,20)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(270)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.25",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "-0.125s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "-0.125s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        transform: "translate(71.21320343559643,28.78679656440357)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          transform: "rotate(315)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            cx: "0",
            cy: "0",
            r: "6",
            fillOpacity: "0.125",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
              attributeName: "transform",
              type: "scale",
              begin: "0s",
              values: "1.5 1.5;1 1",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animate", {
              attributeName: "fillOpacity",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              values: "1;0",
              begin: "0s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./resources/components/no-data/index.tsx":
/*!************************************************!*\
  !*** ./resources/components/no-data/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NoData; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/no-data/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\no-data\\index.tsx";

function NoData() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().noData),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "No Data"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/refresher-icon/index.tsx":
/*!*******************************************************!*\
  !*** ./resources/components/refresher-icon/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RefreshserIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/refresher-icon/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\refresher-icon\\index.tsx";


function RefreshserIcon({
  isLoading,
  onClick
}) {
  return isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loading)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 22
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.AdIcon, {
    w: 20,
    onClick: onClick,
    name: "refresh",
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().refresher)}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/status-badge/index.tsx":
/*!*****************************************************!*\
  !*** ./resources/components/status-badge/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StatusBadge; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/status-badge/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\status-badge\\index.tsx";




function StatusBadge({
  status
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().status)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[status]}`,
    children: [status === "offline" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_3__.AdIcon, {
      w: "12px",
      m: "0px 5px 0px 0px",
      name: "Subtract"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_2__.parseTitle)(status)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/toaster/index.tsx":
/*!************************************************!*\
  !*** ./resources/components/toaster/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE_TO_ICON": function() { return /* binding */ TYPE_TO_ICON; },
/* harmony export */   "Toaster": function() { return /* binding */ Toaster; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/toaster/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\toaster\\index.tsx";



const TYPE_TO_ICON = {
  success: "success",
  warning: "attention-highlight",
  error: "error"
};
function Toaster({
  handleSetToast,
  type,
  message,
  title = type,
  delay = 6000
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Toast, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toaster)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[type]}`,
    onClose: () => handleSetToast(null),
    show: !!message,
    delay: delay,
    autohide: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Toast.Header, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().leftHead),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.AdIcon, {
          className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[type]}`,
          name: TYPE_TO_ICON[type]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
          children: title === null || title === void 0 ? void 0 : title.toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Toast.Body, {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/typography/index.tsx":
/*!***************************************************!*\
  !*** ./resources/components/typography/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdsliveH1": function() { return /* binding */ AdsliveH1; },
/* harmony export */   "AdsliveH2": function() { return /* binding */ AdsliveH2; },
/* harmony export */   "AdsliveH3": function() { return /* binding */ AdsliveH3; },
/* harmony export */   "AdsliveH4": function() { return /* binding */ AdsliveH4; },
/* harmony export */   "AdsliveCaption": function() { return /* binding */ AdsliveCaption; },
/* harmony export */   "AdsliveOverline": function() { return /* binding */ AdsliveOverline; },
/* harmony export */   "AdsliveBody16": function() { return /* binding */ AdsliveBody16; },
/* harmony export */   "AdsliveBody14": function() { return /* binding */ AdsliveBody14; },
/* harmony export */   "AdsliveSubtitle": function() { return /* binding */ AdsliveSubtitle; },
/* harmony export */   "AdsliveSubtitle14": function() { return /* binding */ AdsliveSubtitle14; },
/* harmony export */   "AdsliveSubtitle16": function() { return /* binding */ AdsliveSubtitle16; },
/* harmony export */   "MutedText": function() { return /* binding */ MutedText; },
/* harmony export */   "InfoText": function() { return /* binding */ InfoText; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/typography/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\typography\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function AdsliveH1(_ref) {
  let {
    children,
    className,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().h1)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function AdsliveH2(_ref2) {
  let {
    children,
    className,
    style
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().h2)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function AdsliveH3(_ref3) {
  let {
    children,
    className,
    style
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().h3)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function AdsliveH4(_ref4) {
  let {
    children,
    className,
    style
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().h4)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function AdsliveCaption(_ref5) {
  let {
    children,
    className,
    style
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().caption)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
function AdsliveOverline(_ref6) {
  let {
    children,
    className,
    style
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().overline)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function AdsliveBody16(_ref7) {
  let {
    children,
    className,
    style
  } = _ref7,
      props = _objectWithoutProperties(_ref7, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().body16)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
function AdsliveBody14(_ref8) {
  let {
    children,
    className,
    style
  } = _ref8,
      props = _objectWithoutProperties(_ref8, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().body14)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
function AdsliveSubtitle(_ref9) {
  let {
    children,
    className,
    style
  } = _ref9,
      props = _objectWithoutProperties(_ref9, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subtitle)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 5
  }, this);
}
function AdsliveSubtitle14(_ref10) {
  let {
    children,
    className,
    style
  } = _ref10,
      props = _objectWithoutProperties(_ref10, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subtitle14)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 5
  }, this);
}
function AdsliveSubtitle16(_ref11) {
  let {
    children,
    className,
    style
  } = _ref11,
      props = _objectWithoutProperties(_ref11, ["children", "className", "style"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subtitle16)} ${className || ""}`,
    style: style,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 5
  }, this);
}
function MutedText(props) {
  const {
    children,
    style
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    style: _objectSpread({
      color: "#7F838E"
    }, style),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 5
  }, this);
}
function InfoText(props) {
  const {
    children,
    style,
    size
  } = props;
  const sizeLvl = {
    lg: "20px",
    md: "14px",
    sm: "12px"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    style: _objectSpread({
      color: "#2475FF",
      fontSize: sizeLvl[size]
    }, style),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/video-uploader/index.tsx":
/*!*******************************************************!*\
  !*** ./resources/components/video-uploader/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoUploader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/video-uploader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _api_clients_cloudinary_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api-clients/cloudinary-api */ "./resources/api-clients/cloudinary-api.ts");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\video-uploader\\index.tsx";








const Cloudinary = () => {
  // Set the Cloud configuration and URL configuration
  // let cloudConfig = new CloudConfig({cloudName: 'dngez6bhp'});
  // let urlConfig = new URLConfig({secure: true});
  // Instantiate and configure a CloudinaryImage object.
  // let myImage = new CloudinaryImage('sample', cloudConfig);
  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample
  // Render the image in a React component.
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, undefined);
};

function VideoUploader(props) {
  const {
    onChange
  } = props;
  const {
    0: videoFile,
    1: setVideoFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: uploading,
    1: setUploading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: playing,
    1: setPlaying
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showInfo,
    1: setShowInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const handleUpload = async file => {
    setUploading(true);

    try {
      const data = await _api_clients_cloudinary_api__WEBPACK_IMPORTED_MODULE_4__.default.uploadVideo(file); // const data:any = await MockCloudinaryVideo()

      if (data) {
        setUploading(false);
        setVideoFile(data);
        onChange(data);
      }
    } catch (error) {
      console.log({
        error
      });
      setError(error);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playerWrapper),
    children: videoFile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [showInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["Name: ", videoFile.original_filename]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["Type: ", videoFile.format]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["Length: ", videoFile.duration]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playerActions)} ${playing ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().playing) : ""}`,
        onClick: () => setPlaying(!playing),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_3__.AdIcon, {
          name: playing ? "pause" : "play",
          w: "60px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_player__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().player),
        url: videoFile.secure_url,
        width: "100%",
        height: "100%",
        playing: playing // onReady={()=> setShowInfo(true)}
        ,
        onPause: () => setShowInfo(true),
        onPlay: () => setShowInfo(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().uploadContainer)} ${!uploading ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().clickable) : ""}`,
      children: uploading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().errorContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Alert, {
            variant: "danger",
            children: error.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
            variant: "outline-secondary",
            size: "sm",
            onClick: () => {
              setError(false);
              setUploading(false);
            },
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().loadingWrapper),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_5__.default, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().loading),
            size: _loading__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_LOADING_SIZE.LARGE
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this)
      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().uploadBtn),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          onChange: event => handleUpload(event.target.files[0])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_3__.AdIcon, {
          name: "Video",
          w: "30px",
          m: "12px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "Upload 1 video"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/components/videos-player/index.tsx":
/*!******************************************************!*\
  !*** ./resources/components/videos-player/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideosPlayer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/components/videos-player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./resources/components/icon/index.tsx");


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\components\\videos-player\\index.tsx";





function getVideosUrl(data) {
  if (data) return Array.isArray(data) ? data.map(e => e.url) : data.url;
}

function VideosPlayer(props) {
  const {
    data,
    onClickPreview,
    isPreview
  } = props;
  const {
    0: playing,
    1: setPlaying
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showInfo,
    1: setShowInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().playerWrapper),
    children: data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [!isPreview && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [showInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: ["Name: ", data.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().playerActions)} ${playing ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().playing) : ""}`,
          onClick: () => setPlaying(!playing),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_3__.AdIcon, {
            name: playing ? "pause" : "play",
            w: "60px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, this)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_player__WEBPACK_IMPORTED_MODULE_2___default()), {
        style: {
          borderRadius: "6px"
        },
        url: getVideosUrl(data),
        width: "100%",
        height: "100%",
        playing: playing // onClickPreview={onClickPreview}
        ,
        onPause: () => setShowInfo(true),
        onPlay: () => setShowInfo(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/definitions/enums/api-code.enum.ts":
/*!******************************************************!*\
  !*** ./resources/definitions/enums/api-code.enum.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CODE": function() { return /* binding */ API_CODE; }
/* harmony export */ });
let API_CODE;

(function (API_CODE) {
  API_CODE[API_CODE["SUCCESS"] = 0] = "SUCCESS";
  API_CODE[API_CODE["FAILED"] = 1] = "FAILED";
  API_CODE[API_CODE["ERROR"] = 2] = "ERROR";
})(API_CODE || (API_CODE = {}));

/***/ }),

/***/ "./resources/definitions/enums/index.ts":
/*!**********************************************!*\
  !*** ./resources/definitions/enums/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_code_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-code.enum */ "./resources/definitions/enums/api-code.enum.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_code_enum__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _api_code_enum__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _user_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-type.enum */ "./resources/definitions/enums/user-type.enum.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_type_enum__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _user_type_enum__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _screen_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen-status.enum */ "./resources/definitions/enums/screen-status.enum.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _screen_status_enum__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _screen_status_enum__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ "./resources/definitions/enums/screen-status.enum.ts":
/*!***********************************************************!*\
  !*** ./resources/definitions/enums/screen-status.enum.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCREEN_STATUS": function() { return /* binding */ SCREEN_STATUS; }
/* harmony export */ });
let SCREEN_STATUS;

(function (SCREEN_STATUS) {
  SCREEN_STATUS["LIVE"] = "live";
  SCREEN_STATUS["OFFLINE"] = "offline";
  SCREEN_STATUS["DISCONNECTED"] = "disconnected";
  SCREEN_STATUS["POWER_OFF"] = "power-off";
})(SCREEN_STATUS || (SCREEN_STATUS = {}));

/***/ }),

/***/ "./resources/definitions/enums/user-type.enum.ts":
/*!*******************************************************!*\
  !*** ./resources/definitions/enums/user-type.enum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_TYPE": function() { return /* binding */ USER_TYPE; }
/* harmony export */ });
let USER_TYPE;

(function (USER_TYPE) {
  USER_TYPE["ADMIN"] = "admin";
  USER_TYPE["ADVERTISER"] = "advertiser";
})(USER_TYPE || (USER_TYPE = {}));

/***/ }),

/***/ "./resources/hooks/previous.ts":
/*!*************************************!*\
  !*** ./resources/hooks/previous.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePrevious; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ "./resources/layout/advertiser/definition.ts":
/*!***************************************************!*\
  !*** ./resources/layout/advertiser/definition.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "advertiserHeaderItems": function() { return /* binding */ advertiserHeaderItems; }
/* harmony export */ });
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _pages_components_advertiser_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages-components/advertiser/alert */ "./resources/pages-components/advertiser/alert/index.tsx");
/* harmony import */ var _pages_components_advertiser_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages-components/advertiser/campaign */ "./resources/pages-components/advertiser/campaign/index.tsx");
/* harmony import */ var _pages_components_advertiser_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages-components/advertiser/profile */ "./resources/pages-components/advertiser/profile/index.tsx");
/* harmony import */ var _pages_components_advertiser_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages-components/advertiser/screen */ "./resources/pages-components/advertiser/screen/index.tsx");
/* harmony import */ var _pages_components_advertiser_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages-components/advertiser/video */ "./resources/pages-components/advertiser/video/index.tsx");






const advertiserHeaderItems = [{
  id: "adsl-l-hi-1",
  title: "Screen",
  iconVariant: _components_icon__WEBPACK_IMPORTED_MODULE_0__.ADSLIVE_ICON_VARIANT.SCREEN,
  contentComponent: _pages_components_advertiser_screen__WEBPACK_IMPORTED_MODULE_4__.default
}, {
  id: "adsl-l-hi-2",
  title: "Video",
  iconVariant: _components_icon__WEBPACK_IMPORTED_MODULE_0__.ADSLIVE_ICON_VARIANT.VIDEO,
  contentComponent: _pages_components_advertiser_video__WEBPACK_IMPORTED_MODULE_5__.default
}, {
  id: "adsl-l-hi-3",
  title: "Campaign",
  iconVariant: _components_icon__WEBPACK_IMPORTED_MODULE_0__.ADSLIVE_ICON_VARIANT.SEND,
  contentComponent: _pages_components_advertiser_campaign__WEBPACK_IMPORTED_MODULE_2__.default
}, {
  id: "adsl-l-hi-4",
  title: "Alert",
  iconVariant: _components_icon__WEBPACK_IMPORTED_MODULE_0__.ADSLIVE_ICON_VARIANT.ALERT,
  contentComponent: _pages_components_advertiser_alert__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  id: "adsl-l-hi-5",
  title: "Profile",
  iconVariant: _components_icon__WEBPACK_IMPORTED_MODULE_0__.ADSLIVE_ICON_VARIANT.A_C,
  contentComponent: _pages_components_advertiser_profile__WEBPACK_IMPORTED_MODULE_3__.default
}];

/***/ }),

/***/ "./resources/layout/advertiser/entrance/index.tsx":
/*!********************************************************!*\
  !*** ./resources/layout/advertiser/entrance/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserEntrance; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/layout/advertiser/entrance/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\layout\\advertiser\\entrance\\index.tsx";





function AdvertiserEntrance({
  children
}) {
  const {
    auth
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(auth !== null && auth !== void 0 && auth.isGettingToken) && !(auth !== null && auth !== void 0 && auth.isAuthenticating) && !(auth !== null && auth !== void 0 && auth.isAuthenticated)) {
      (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_4__.redirectTo)("/advertiser/sign-in");
    }
  }, [auth === null || auth === void 0 ? void 0 : auth.isAuthenticated, auth === null || auth === void 0 ? void 0 : auth.isAuthenticating, auth === null || auth === void 0 ? void 0 : auth.isGettingToken]);

  if (auth !== null && auth !== void 0 && auth.isAuthenticating || auth !== null && auth !== void 0 && auth.isGettingToken || !(auth !== null && auth !== void 0 && auth.isAuthenticating) && !(auth !== null && auth !== void 0 && auth.isGettingToken) && !(auth !== null && auth !== void 0 && auth.isAuthenticated)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().entrance),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

  return children;
}

/***/ }),

/***/ "./resources/layout/advertiser/header/index.tsx":
/*!******************************************************!*\
  !*** ./resources/layout/advertiser/header/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../definition */ "./resources/layout/advertiser/definition.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/layout/advertiser/header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\layout\\advertiser\\header\\index.tsx";




function AdvertiserHeader({
  activedItemId,
  switchToItem
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().advertiserHeader),
    children: _definition__WEBPACK_IMPORTED_MODULE_3__.advertiserHeaderItems.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().advertiserHeaderItem)} ${(item === null || item === void 0 ? void 0 : item.id) === activedItemId ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actived) : ""}`,
      onClick: (item === null || item === void 0 ? void 0 : item.id) === activedItemId ? null : () => switchToItem && switchToItem(item === null || item === void 0 ? void 0 : item.id),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_1__.default, {
        variant: item === null || item === void 0 ? void 0 : item.iconVariant,
        type: (item === null || item === void 0 ? void 0 : item.id) === activedItemId ? _components_icon__WEBPACK_IMPORTED_MODULE_1__.ADSLIVE_ICON_TYPE.BOLD : _components_icon__WEBPACK_IMPORTED_MODULE_1__.ADSLIVE_ICON_TYPE.REGULAR,
        color: (item === null || item === void 0 ? void 0 : item.id) === activedItemId ? _components_icon__WEBPACK_IMPORTED_MODULE_1__.ADSLIVE_ICON_COLOR.PRIMARY : _components_icon__WEBPACK_IMPORTED_MODULE_1__.ADSLIVE_ICON_COLOR.NORMAL // className={styles.advertiserHeaderItemIcon}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_2__.AdsliveCaption, {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().advertiserHeaderItemText),
        children: item === null || item === void 0 ? void 0 : item.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/layout/advertiser/index.tsx":
/*!***********************************************!*\
  !*** ./resources/layout/advertiser/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition */ "./resources/layout/advertiser/definition.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./resources/layout/advertiser/header/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/layout/advertiser/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\layout\\advertiser\\index.tsx";




function AdvertiserLayout() {
  const {
    0: currentHeaderItemId,
    1: setCurrentHeaderItemId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_definition__WEBPACK_IMPORTED_MODULE_2__.advertiserHeaderItems[0].id);
  const currentHeaderItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return _definition__WEBPACK_IMPORTED_MODULE_2__.advertiserHeaderItems.find(item => item.id === currentHeaderItemId);
  }, [currentHeaderItemId]);

  const switchContent = itemId => {
    setCurrentHeaderItemId(itemId);
  };

  const ContentComponent = currentHeaderItem === null || currentHeaderItem === void 0 ? void 0 : currentHeaderItem.contentComponent;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().advertiserLayout),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentWrapper),
      children: ContentComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentComponent, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 30
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerWrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_3__.default, {
        activedItemId: currentHeaderItemId,
        switchToItem: switchContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/alert/index.tsx":
/*!***************************************************************!*\
  !*** ./resources/pages-components/advertiser/alert/index.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserAlert; }
/* harmony export */ });
function AdvertiserAlert() {
  return "alert";
}

/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/campaign-details/campaign-type.ts":
/*!******************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/campaign-details/campaign-type.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAMPAIGN_STATUSES": function() { return /* binding */ CAMPAIGN_STATUSES; },
/* harmony export */   "LOAD_KEYS": function() { return /* binding */ LOAD_KEYS; },
/* harmony export */   "STRATEGIES": function() { return /* binding */ STRATEGIES; },
/* harmony export */   "STATUS_COLOR": function() { return /* binding */ STATUS_COLOR; },
/* harmony export */   "ActionOnStatus": function() { return /* binding */ ActionOnStatus; }
/* harmony export */ });
const CAMPAIGN_STATUSES = ["live", "pause"];
let LOAD_KEYS;

(function (LOAD_KEYS) {
  LOAD_KEYS["adsSet"] = "ads-set";
  LOAD_KEYS["screen"] = "screen";
  LOAD_KEYS["schedule"] = "schedule";
})(LOAD_KEYS || (LOAD_KEYS = {}));

const STRATEGIES = [{
  key: "SCREEN_MATCH_ALL_RULES",
  desc: "All screen matching all of these rules"
}];
const STATUS_COLOR = {
  paused: "success",
  draft: "success",
  live: "primary"
};
const ActionOnStatus = status => {
  let action;

  switch (status) {
    case "draft":
      action = "live";
      break;

    case "live":
      action = "paused";
      break;

    case "paused":
      action = "live";
      break;

    default:
      break;
  }

  return action;
};

/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/campaign-details/index.tsx":
/*!***********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/campaign-details/index.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CampaignDetails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/button */ "./resources/components/button/index.tsx");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/divider */ "./resources/components/divider/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_status_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/status-badge */ "./resources/components/status-badge/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/campaign/campaign-details/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _selectVideosModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../selectVideosModal */ "./resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var _components_toaster__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/toaster */ "./resources/components/toaster/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _components_confirmModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/confirmModal */ "./resources/components/confirmModal/index.tsx");
/* harmony import */ var _campaign_type__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./campaign-type */ "./resources/pages-components/advertiser/campaign/campaign-details/campaign-type.ts");


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\campaign\\campaign-details\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function CampaignDetails(props) {
  var _adsSet$adsSetMediaLi2, _adsSet$adsSetMediaLi3, _screenConditions$det6, _screenConditions$det7, _screenConditions$det8, _screenConditions$det9, _ref;

  const {
    locations,
    loadAllScreen
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_14__.default)();
  const {
    returnPreLayout,
    campaign
  } = props;
  const {
    videos,
    beginTime,
    endTime,
    targetScreenConditions
  } = campaign || {};
  const collectAllAreas = locations === null || locations === void 0 ? void 0 : locations.reduce((res, cur) => res = [...res, ...cur.areas], []);
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(campaign === null || campaign === void 0 ? void 0 : campaign.status);
  const {
    0: adsSet,
    1: setAdsSet
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: schedule,
    1: setSchedule
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    beginTime,
    endTime
  });
  const {
    0: screenConditions,
    1: setScreenConditions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread(_objectSpread({}, targetScreenConditions), {}, {
    strategy: _campaign_type__WEBPACK_IMPORTED_MODULE_16__.STRATEGIES[0].key
  }));
  const {
    0: areaOptions,
    1: setAreaOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(collectAllAreas); // loading handler

  const {
    0: setting,
    1: openSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: openVideoLib,
    1: setOpenVideoLib
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: isChangingStatus,
    1: setChangeStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: initLocations,
    1: setInitLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: initAreas,
    1: setInitAreas
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: successMsg,
    1: setSuccessMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: warningMsg,
    1: setWarningMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: changedData,
    1: setChangedData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    "ads-set": null,
    screen: null,
    schedule: null
  });

  const CampainHeader = (title, settingKey) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().campaignHeader),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.AdsliveH4, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), !setting[settingKey] ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.AdButton, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().editSetting),
      style: {
        padding: "0 4px"
      },
      isLoading: loading[settingKey],
      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
        name: "pen",
        w: "16px",
        mr: "2px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this),
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.MutedText, {
        children: "Edit Setting"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 18
      }, this),
      onClick: () => toggleSetting(settingKey, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.AdButton, {
      style: {
        padding: "0 4px"
      },
      isLoading: loading[settingKey],
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.MutedText, {
        children: "Done"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 18
      }, this),
      onClick: () => handleUpdate(settingKey)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);

  function requestAPI(loadKey, data) {
    if (loadKey === _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet) return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.updateAdsSetMedia(adsSet.id, data);
    if (loadKey === _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen) return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.updateCampaignTargetScreenConditions(campaign.id, data);
    if (loadKey === _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.schedule) return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.updateCampaignSchedule(adsSet.id, data);
  }

  async function handleUpdate(settingKey) {
    toggleSetting(settingKey, false);
    const REQ_DATA = changedData[settingKey];

    if (REQ_DATA) {
      handleSetLoading(settingKey, true);
      const res = await requestAPI(settingKey, REQ_DATA);

      if (res && res.data) {
        if (settingKey === _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet) {
          setAdsSet(_objectSpread(_objectSpread({}, adsSet), {}, {
            adsSetMediaList: res.data
          }));
          setSuccessMsg("Updated Media");
        } else if (settingKey === _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.schedule) {
          setSuccessMsg("Updated Schedule");
        } else setSuccessMsg("Updated");

        setChangedData(_objectSpread(_objectSpread({}, changedData), {}, {
          [settingKey]: null
        }));
      }

      if (res && res.error) {
        var _res$error$data, _res$error$data$error;

        const msg = (_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : (_res$error$data$error = _res$error$data.error) === null || _res$error$data$error === void 0 ? void 0 : _res$error$data$error.message;
        setErrorMsg(msg || 'An error happened!');
      }

      handleSetLoading(settingKey, false);
    }
  }

  const toggleSetting = (title, value) => {
    const s = _objectSpread(_objectSpread({}, setting), {
      [title]: value
    });

    openSetting(s);
  };

  const handleSetLoading = (title, value) => {
    const s = _objectSpread(_objectSpread({}, loading), {
      [title]: value
    });

    setLoading(s);
  };

  const formatMediaRequest = list => list.map(({
    recId,
    id,
    withMedia,
    withMediaRecId
  }, i) => ({
    recId,
    id,
    withMediaRecId: withMediaRecId || (withMedia === null || withMedia === void 0 ? void 0 : withMedia.recId),
    order: i
  })); // ----------------- Load Effect Data -------------------


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchAds();
  }, [campaign]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _screenConditions$det, _rules$find, _rules$find$value, _rules$find2, _rules$find2$value;

    const rules = screenConditions === null || screenConditions === void 0 ? void 0 : (_screenConditions$det = screenConditions.detail) === null || _screenConditions$det === void 0 ? void 0 : _screenConditions$det.rules;
    if (!(rules !== null && rules !== void 0 && rules.length)) return;
    const initLocationIds = (_rules$find = rules.find(e => e.ruleTypes === "LOCATION")) === null || _rules$find === void 0 ? void 0 : (_rules$find$value = _rules$find.value) === null || _rules$find$value === void 0 ? void 0 : _rules$find$value.locationIds;
    const initAreaIds = (_rules$find2 = rules.find(e => e.ruleTypes === "AREA")) === null || _rules$find2 === void 0 ? void 0 : (_rules$find2$value = _rules$find2.value) === null || _rules$find2$value === void 0 ? void 0 : _rules$find2$value.areaIds;
    const loadLocations = handleInitValue(initLocationIds, locations);
    const initAreas = handleInitValue(initAreaIds, collectAllAreas);
    if (loadLocations !== null && loadLocations !== void 0 && loadLocations.length) setInitLocations(loadLocations);
    if (initAreas !== null && initAreas !== void 0 && initAreas.length) setInitAreas(initAreas);
  }, [screenConditions]); // ---------------------- API funct --------------------

  const fetchAds = async () => {
    if (!campaign) return;
    handleSetLoading(_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet, true);
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getCampaignAdsSet(campaign.id);

    if (res && res.data) {
      var _res$data$0$adsSetMed;

      res.data[0].adsSetMediaList = (_res$data$0$adsSetMed = res.data[0].adsSetMediaList) === null || _res$data$0$adsSetMed === void 0 ? void 0 : _res$data$0$adsSetMed.filter(e => !!e.withMedia);
      setAdsSet(res.data[0]);
    }

    handleSetLoading(_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet, false);
  };

  function checkLiveCondition() {
    var _screenConditions$det2, _screenConditions$det3, _screenConditions$det4, _screenConditions$det5;

    if ((0,_campaign_type__WEBPACK_IMPORTED_MODULE_16__.ActionOnStatus)(status) !== 'live') return true;
    return (screenConditions === null || screenConditions === void 0 ? void 0 : (_screenConditions$det2 = screenConditions.detail) === null || _screenConditions$det2 === void 0 ? void 0 : (_screenConditions$det3 = _screenConditions$det2.rules) === null || _screenConditions$det3 === void 0 ? void 0 : (_screenConditions$det4 = _screenConditions$det3.find(e => e.ruleTypes === "SCREENS")) === null || _screenConditions$det4 === void 0 ? void 0 : (_screenConditions$det5 = _screenConditions$det4.value) === null || _screenConditions$det5 === void 0 ? void 0 : _screenConditions$det5.screenIds.length) > 0 && adsSet.adsSetMediaList.length > 0 && schedule.beginTime && schedule.endTime;
  }

  const handleUpdateCampaignStatus = async status => {
    if (status === "live" && !checkLiveCondition()) {
      setWarningMsg('Please add Adsvertise video, Screens and Schedule before make Campaign go live!');
      return;
    }

    setChangeStatus(true);
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.updateCampaign(campaign === null || campaign === void 0 ? void 0 : campaign.id, {
      status
    });
    if (res.status) setStatus(status);
    setChangeStatus(false);
  };

  const updateAdsSet = async newVideos => {
    if (!(newVideos !== null && newVideos !== void 0 && newVideos.length)) return;
    let mergeData = [...adsSet.adsSetMediaList, ...newVideos];
    setOpenVideoLib(false);
    await updateMediaReq(mergeData);
  };

  const updateMediaReq = async newMediaList => {
    const newMediaListReq = formatMediaRequest(newMediaList);
    setChangedData(_objectSpread(_objectSpread({}, changedData), {}, {
      [_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet]: {
        adsSetMediaList: newMediaListReq
      }
    }));
    setAdsSet(_objectSpread(_objectSpread({}, adsSet), {}, {
      adsSetMediaList: newMediaList
    }));
  };

  const handleDeleteMedia = recId => {
    var _adsSet$adsSetMediaLi;

    if (!(adsSet !== null && adsSet !== void 0 && (_adsSet$adsSetMediaLi = adsSet.adsSetMediaList) !== null && _adsSet$adsSetMediaLi !== void 0 && _adsSet$adsSetMediaLi.length)) return;
    const filteredData = adsSet.adsSetMediaList.filter(e => (e.recId || e.withMedia.recId) !== recId);
    updateMediaReq(filteredData);
  };

  const handleChangeOrder = async changeData => {
    const arrangeIds = changeData.map(e => e.id);
    const newOrderMedia = arrangeIds.map((recId, i) => {
      const refMedia = adsSet.adsSetMediaList.find(e => (e.recId || e.withMedia.recId) === recId);
      return _objectSpread(_objectSpread({}, refMedia), {}, {
        order: i
      });
    });
    updateMediaReq(newOrderMedia);
  };

  const handleChangeSchedule = async changeData => {
    const newSchedule = _objectSpread(_objectSpread({}, schedule), changeData);

    setSchedule(newSchedule);
    setChangedData(_objectSpread(_objectSpread({}, changedData), {}, {
      schedule: newSchedule
    }));
  }; // ----------------- handle Conditions Setting --------------


  function handleChangeConditions(changeData) {
    const newConditions = _objectSpread(_objectSpread({}, screenConditions), changeData);

    setScreenConditions(newConditions);
    setChangedData(_objectSpread(_objectSpread({}, changedData), {}, {
      [_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen]: newConditions
    }));
  }

  function handleChangeStrategy(event) {
    handleChangeConditions({
      strategy: _campaign_type__WEBPACK_IMPORTED_MODULE_16__.STRATEGIES[0].key
    });
  }

  function handleLocationSelect(selectData) {
    const choseLocations = locations === null || locations === void 0 ? void 0 : locations.filter(e => selectData.includes(e.name)); //

    if (choseLocations !== null && choseLocations !== void 0 && choseLocations.length) {
      let collectAreas = [];
      choseLocations.map(location => collectAreas = [...collectAreas, ...location.areas].filter(e => !collectAreas.includes(e)));
      setAreaOptions(collectAreas);
    } //


    const conditions = screenConditions || {};
    if (!conditions.detail) conditions.detail = {
      rules: []
    };
    conditions.detail.rules[0] = {
      ruleTypes: "LOCATION",
      value: {
        locationRecIds: choseLocations.map(e => e.recId),
        locationIds: choseLocations.map(e => e.id)
      }
    };
    handleChangeConditions(conditions);
  }

  async function handleAreaSelect(selectAreas) {
    const choseAreas = areaOptions === null || areaOptions === void 0 ? void 0 : areaOptions.filter(a => selectAreas.includes(a.name));
    const conditions = screenConditions || {};
    if (!conditions.detail) conditions.detail = {
      rules: []
    };
    conditions.detail.rules[1] = {
      ruleTypes: "AREA",
      value: {
        areaRecIds: choseAreas.map(e => e.recId),
        areaIds: choseAreas.map(e => e.id)
      }
    };
    const areaIds = choseAreas.map(a => a.id);

    if (!(areaIds !== null && areaIds !== void 0 && areaIds.length)) {
      handleChangeConditions(conditions);
      return;
    }

    handleSetLoading(_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen, true);
    const screenData = await loadAllScreen(areaIds);
    conditions.detail.rules[2] = {
      ruleTypes: "SCREENS",
      value: {
        screenRecIds: screenData.map(e => e.recId),
        screenIds: screenData.map(e => e.id)
      }
    };
    handleChangeConditions(conditions);
    handleSetLoading(_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen, false);
  }

  function handleInitValue(ids, items) {
    return items && ids && (items === null || items === void 0 ? void 0 : items.filter(e => ids === null || ids === void 0 ? void 0 : ids.includes(e.id))) || null;
  }

  const {
    0: deleteRecId,
    1: setSDeleteRecId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  function confirmDeleteModal() {
    return deleteRecId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_confirmModal__WEBPACK_IMPORTED_MODULE_15__.default, {
      title: "Delete Media",
      onExecute: () => {
        setSDeleteRecId(null);
        handleDeleteMedia(deleteRecId);
      },
      show: !!deleteRecId,
      setShow: setSDeleteRecId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 9
    }, this);
  } // --------------------


  function handleReturnLayout() {
    console.log(loading);
    const isDataLoading = !!Object.keys(loading).find(key => !!loading[key] && key !== 'ads-set');
    if (isDataLoading) setWarningMsg("Please wait for updating data!");else returnPreLayout();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [confirmDeleteModal(), !locations ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_13__.Toaster, {
        type: "error",
        handleSetToast: setErrorMsg,
        message: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_13__.Toaster, {
        type: "warning",
        handleSetToast: setWarningMsg,
        message: warningMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_13__.Toaster, {
        type: "success",
        handleSetToast: setSuccessMsg,
        message: successMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_9__.default, {
        header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().headerItems),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
              name: "full-left-arrow",
              w: "20px",
              onClick: handleReturnLayout
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.AdsliveH4, {
              children: campaign === null || campaign === void 0 ? void 0 : campaign.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status_badge__WEBPACK_IMPORTED_MODULE_7__.default, {
              status: status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.AdButton, {
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
              name: (0,_campaign_type__WEBPACK_IMPORTED_MODULE_16__.ActionOnStatus)(status)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 25
            }, this),
            title: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_10__.parseTitle)((0,_campaign_type__WEBPACK_IMPORTED_MODULE_16__.ActionOnStatus)(status)),
            onClick: () => handleUpdateCampaignStatus((0,_campaign_type__WEBPACK_IMPORTED_MODULE_16__.ActionOnStatus)(status)),
            variant: _campaign_type__WEBPACK_IMPORTED_MODULE_16__.STATUS_COLOR[status],
            isLoading: isChangingStatus
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 15
        }, this),
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().campaignContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.default, {
            fullView: true,
            toggle: true,
            toggled: setting[_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet],
            header: CampainHeader(adsSet === null || adsSet === void 0 ? void 0 : adsSet.name, _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet),
            body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().cardBody)}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().info),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.InfoText, {
                    size: "lg",
                    children: (adsSet === null || adsSet === void 0 ? void 0 : adsSet.adsSetMediaList.length) || "-"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 27
                  }, this), " ", "videos"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.InfoText, {
                    size: "lg",
                    children: "-"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 27
                  }, this), " played"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 386,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 23
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_5__.default, {
                style: {
                  padding: 0
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 23
              }, this), setting[_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.adsSet] ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardDragWrapper, {
                  items: adsSet === null || adsSet === void 0 ? void 0 : (_adsSet$adsSetMediaLi2 = adsSet.adsSetMediaList) === null || _adsSet$adsSetMediaLi2 === void 0 ? void 0 : _adsSet$adsSetMediaLi2.map(e => {
                    var _e$withMedia, _e$withMedia2;

                    return {
                      id: e.recId || ((_e$withMedia = e.withMedia) === null || _e$withMedia === void 0 ? void 0 : _e$withMedia.recId),
                      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardDragItem, {
                          onDelete: event => {
                            event.stopPropagation();
                            setSDeleteRecId(e.recId || e.withMedia.recId);
                          },
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: (_e$withMedia2 = e.withMedia) === null || _e$withMedia2 === void 0 ? void 0 : _e$withMedia2.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 412,
                            columnNumber: 37
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 398,
                          columnNumber: 35
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 414,
                          columnNumber: 35
                        }, this)]
                      }, e.id, true, {
                        fileName: _jsxFileName,
                        lineNumber: 397,
                        columnNumber: 33
                      }, this)
                    };
                  }),
                  onChange: change => handleChangeOrder(change)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 393,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.AdButton, {
                  cardBtn: true,
                  ghost: true,
                  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
                    name: "circle-bold",
                    w: "24px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 423,
                    columnNumber: 35
                  }, this),
                  title: "ADD MORE VIDEOS",
                  style: {
                    padding: "20px"
                  },
                  onClick: () => setOpenVideoLib(true)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 420,
                  columnNumber: 27
                }, this)]
              }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [videos === null || videos === void 0 ? void 0 : videos.map(video => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().icon),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
                    url: video.photoUrl,
                    r: "2px",
                    w: "24px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 433,
                    columnNumber: 31
                  }, this)
                }, video.name, false, {
                  fileName: _jsxFileName,
                  lineNumber: 432,
                  columnNumber: 29
                }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.MutedText, {
                  children: `${(adsSet === null || adsSet === void 0 ? void 0 : (_adsSet$adsSetMediaLi3 = adsSet.adsSetMediaList) === null || _adsSet$adsSetMediaLi3 === void 0 ? void 0 : _adsSet$adsSetMediaLi3.length) || 0} videos`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 436,
                  columnNumber: 27
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.default, {
            fullView: true,
            toggle: true,
            toggled: setting[_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen],
            header: CampainHeader("Screen", _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen),
            body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().cardBody),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().info),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.InfoText, {
                    size: "lg",
                    children: screenConditions === null || screenConditions === void 0 ? void 0 : (_screenConditions$det6 = screenConditions.detail) === null || _screenConditions$det6 === void 0 ? void 0 : (_screenConditions$det7 = _screenConditions$det6.rules.find(e => e.ruleTypes === "SCREENS")) === null || _screenConditions$det7 === void 0 ? void 0 : (_screenConditions$det8 = _screenConditions$det7.value) === null || _screenConditions$det8 === void 0 ? void 0 : (_screenConditions$det9 = _screenConditions$det8.screenIds) === null || _screenConditions$det9 === void 0 ? void 0 : _screenConditions$det9.length
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 453,
                    columnNumber: 27
                  }, this), " ", "Screens"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 452,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.InfoText, {
                    size: "lg",
                    children: initLocations === null || initLocations === void 0 ? void 0 : initLocations.length
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 463,
                    columnNumber: 27
                  }, this), " ", "Location"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 462,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 451,
                columnNumber: 23
              }, this), setting[_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.screen] && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardSelect, {
                  title: "Choose strategy",
                  initValue: [_campaign_type__WEBPACK_IMPORTED_MODULE_16__.STRATEGIES[0].desc],
                  values: [_campaign_type__WEBPACK_IMPORTED_MODULE_16__.STRATEGIES[0].desc],
                  onChange: event => handleChangeStrategy(event)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 470,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardMultiSelect, {
                  title: "Location",
                  initValue: initLocations === null || initLocations === void 0 ? void 0 : initLocations.map(e => e.name),
                  values: locations === null || locations === void 0 ? void 0 : locations.map(e => e.name),
                  onChange: handleLocationSelect
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardMultiSelect, {
                  title: "Area",
                  initValue: initAreas === null || initAreas === void 0 ? void 0 : initAreas.map(e => e.name),
                  values: (_ref = areaOptions || initAreas) === null || _ref === void 0 ? void 0 : _ref.map(area => area.name),
                  onChange: handleAreaSelect
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 482,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardSelect, {
                  title: "Free time",
                  initValue: ["has any value"],
                  values: [],
                  onChange: event => {
                    console.log(event);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 490,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.AdButton, {
                  cardBtn: true,
                  ghost: true,
                  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
                    name: "circle-bold",
                    w: "24px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 501,
                    columnNumber: 35
                  }, this),
                  title: "ADD MORE RULES",
                  style: {
                    padding: "20px"
                  },
                  onClick: () => null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 498,
                  columnNumber: 27
                }, this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.default, {
            fullView: true,
            toggle: true,
            toggled: setting[_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.schedule],
            header: CampainHeader("Schedule", _campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.schedule),
            body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().cardBody),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_17___default().info),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: ["Start", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.InfoText, {
                    children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_10__.displayTime)(schedule === null || schedule === void 0 ? void 0 : schedule.beginTime)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 521,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 519,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: ["End", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.InfoText, {
                    children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_10__.displayTime)(schedule === null || schedule === void 0 ? void 0 : schedule.endTime)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 527,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 525,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 518,
                columnNumber: 23
              }, this), setting[_campaign_type__WEBPACK_IMPORTED_MODULE_16__.LOAD_KEYS.schedule] && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 532,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardSelectTime, {
                  title: "Start at",
                  initValue: schedule === null || schedule === void 0 ? void 0 : schedule.beginTime,
                  values: [],
                  onChange: change => handleChangeSchedule({
                    beginTime: change
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 533,
                  columnNumber: 27
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardSelectTime, {
                  title: "End at",
                  initValue: schedule === null || schedule === void 0 ? void 0 : schedule.endTime,
                  values: [],
                  onChange: change => handleChangeSchedule({
                    endTime: change
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 541,
                  columnNumber: 27
                }, this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 11
      }, this), adsSet && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_selectVideosModal__WEBPACK_IMPORTED_MODULE_11__.default, {
        handleShow: {
          openVideoLib,
          setOpenVideoLib
        },
        adsSet: adsSet,
        onChange: updateAdsSet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 13
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/campaign-item/index.tsx":
/*!********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/campaign-item/index.tsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CampaignItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_status_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/status-badge */ "./resources/components/status-badge/index.tsx");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/campaign/campaign-item/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\campaign\\campaign-item\\index.tsx";





function CampaignItem(props) {
  const {
    campaign
  } = props;
  const {
    name,
    beginTime,
    endTime,
    videos,
    status,
    screenIds
  } = campaign;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().campaignContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_1__.default, {
      clickable: true,
      body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().campaign),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_4__.parseTitle)(name)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), beginTime && endTime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: "#7F838E"
          },
          children: [(0,_utils_common_util__WEBPACK_IMPORTED_MODULE_4__.displayTime)(beginTime), " - ", (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_4__.displayTime)(endTime)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 38
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [videos === null || videos === void 0 ? void 0 : videos.map(video => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.AdIcon, {
              url: video.photoUrl,
              r: "2px",
              w: "24px",
              h: "24px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 19
            }, this)
          }, video.name, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this)), `${(videos === null || videos === void 0 ? void 0 : videos.length) || 0} videos cast on ${screenIds || '-'} screens`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().statusBadge),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status_badge__WEBPACK_IMPORTED_MODULE_3__.default, {
            status: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/index.tsx":
/*!******************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/index.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserCampaign; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var _components_no_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/no-data */ "./resources/components/no-data/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _others_advertiser_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../others/advertiser-content */ "./resources/pages-components/advertiser/others/advertiser-content/index.tsx");
/* harmony import */ var _campaign_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./campaign-details */ "./resources/pages-components/advertiser/campaign/campaign-details/index.tsx");
/* harmony import */ var _campaign_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./campaign-item */ "./resources/pages-components/advertiser/campaign/campaign-item/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/campaign/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\campaign\\index.tsx";












function AdvertiserCampaign() {
  const {
    campaigns,
    setCampaigns,
    loadCampaigns
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_8__.default)();
  const {
    0: showFilter,
    1: setShowFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showNewCampaign,
    1: setShowNewCampaign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: selectedCampaign,
    1: setSelectCampaign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: newCampaign,
    1: setNewCampaign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const CampaignDetailsLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_campaign_details__WEBPACK_IMPORTED_MODULE_10__.default, {
    returnPreLayout: () => {
      setSelectCampaign(false);
      setCampaigns(null);
      loadCampaigns();
    },
    campaign: selectedCampaign
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);

  const handleCloseModal = () => {
    setShowNewCampaign(false);
  };

  const handleCreateCampaign = async () => {
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__.default.createCampaign(newCampaign);

    if (res) {
      setShowNewCampaign(false);
      loadCampaigns();
    }
  };

  const FilterLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [selectedCampaign ? CampaignDetailsLayout : showFilter ? FilterLayout : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_others_advertiser_content__WEBPACK_IMPORTED_MODULE_9__.default, {
        headerTitle: "Campaigns",
        headerRightContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().rightControls),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.AdIcon, {
            name: "search",
            onClick: () => null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.AdIcon, {
            name: "filters-vertical",
            onClick: () => setShowFilter(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.AdIcon, {
            name: "circle-bold",
            onClick: () => setShowNewCampaign(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this), !campaigns && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_6__.default, {
        size: _components_loading__WEBPACK_IMPORTED_MODULE_6__.ADSLIVE_LOADING_SIZE.EXTRA_SMALL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), campaigns === null || campaigns === void 0 ? void 0 : campaigns.map((campaign, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => setSelectCampaign(campaign),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_campaign_item__WEBPACK_IMPORTED_MODULE_11__.default, {
          campaign: campaign
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this)), (campaigns === null || campaigns === void 0 ? void 0 : campaigns.length) == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_no_data__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 38
      }, this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().createCampainModal),
      show: showNewCampaign,
      onHide: handleCloseModal,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
          children: "Create New Campaign"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardInput, {
          title: "Name",
          value: newCampaign === null || newCampaign === void 0 ? void 0 : newCampaign.name,
          onInputChange: e => setNewCampaign({
            name: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: handleCloseModal,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: handleCreateCampaign,
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx":
/*!************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/selectVideosModal/index.tsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectVideosModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/campaign/selectVideosModal/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _components_videos_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/videos-player */ "./resources/components/videos-player/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\campaign\\selectVideosModal\\index.tsx";







function SelectVideosModal(props) {
  const {
    handleShow,
    adsSet,
    onChange
  } = props;
  const {
    videos: allVideos
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_5__.default)();
  const {
    0: videoLib,
    1: setVideoLib
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: selectedVideos,
    1: setSelectVideo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _adsSet$adsSetMediaLi;

    const addedMediaVideos = (adsSet === null || adsSet === void 0 ? void 0 : (_adsSet$adsSetMediaLi = adsSet.adsSetMediaList) === null || _adsSet$adsSetMediaLi === void 0 ? void 0 : _adsSet$adsSetMediaLi.map(e => e.withMedia).filter(e => e)) || [];
    const lib = allVideos.filter(v => !(addedMediaVideos !== null && addedMediaVideos !== void 0 && addedMediaVideos.find(data => data.id == v.id)));
    if (lib !== null && lib !== void 0 && lib.length) setVideoLib(lib);
    return () => {
      setSelectVideo([]);
    };
  }, [adsSet]);

  const handleSelectVideo = video => {
    checkSelected(video) ? setSelectVideo(selectedVideos.filter(e => e.id !== video.id)) : setSelectVideo([...selectedVideos, video]);
  };

  const handleAddVideos = async () => {
    if (!selectedVideos.length) return;
    const newMedia = selectedVideos.map((video, i) => ({
      withMedia: video,
      order: i
    }));
    onChange(newMedia);
  };

  const checkSelected = video => selectedVideos.find(v => v.id === video.id);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    show: handleShow.openVideoLib,
    onHide: () => handleShow.setOpenVideoLib(false),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
        children: "Advertise Video Library"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
      children: [!!(videoLib !== null && videoLib !== void 0 && videoLib.length) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().videosContainer),
        children: videoLib.map((video, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().videoWrapper)} ${checkSelected(video) ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().selected) : ""}`,
          onClick: () => handleSelectVideo(video),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_6__.AdIcon, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().selectIcon),
            name: "check-in-a-circle-highlight"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_videos_player__WEBPACK_IMPORTED_MODULE_4__.default, {
            isPreview: true,
            data: video
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().info),
            children: video.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this), (videoLib === null || videoLib === void 0 ? void 0 : videoLib.length) == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_3__.MutedText, {
        children: "Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 35
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: () => handleShow.setOpenVideoLib(false),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: handleAddVideos,
        disabled: !selectedVideos.length,
        children: "Add Videos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/pages-components/advertiser/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserPageContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_advertiser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/advertiser */ "./resources/layout/advertiser/index.tsx");

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\index.tsx";

function AdvertiserPageContent() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_advertiser__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/others/advertiser-content/index.tsx":
/*!***********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/others/advertiser-content/index.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/others/advertiser-content/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\others\\advertiser-content\\index.tsx";

function AdvertiserContent({
  className,
  style,
  headerLeftContent,
  headerRightContent,
  headerBottomContent,
  headerTitle,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContentHeader),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContentHeaderTop),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContentHeaderTopLeft),
          children: [headerTitle, headerLeftContent]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContentHeaderTopRight),
          children: headerRightContent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), headerBottomContent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContentHeaderBottom),
        children: headerBottomContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().advertiserContentContent),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/profile/index.tsx":
/*!*****************************************************************!*\
  !*** ./resources/pages-components/advertiser/profile/index.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOptions": function() { return /* binding */ SelectOptions; },
/* harmony export */   "default": function() { return /* binding */ AdvertiserProfile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/button */ "./resources/components/button/index.tsx");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.actions */ "./resources/stores/advertiser-store/advertiser-store.actions.ts");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/profile/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/divider */ "./resources/components/divider/index.tsx");


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\profile\\index.tsx";











let SelectOptions;

(function (SelectOptions) {
  SelectOptions["manageLocations"] = "Manage Locations";
  SelectOptions["setupDevice"] = "Setup device";
  SelectOptions["changePassword"] = "Change password";
  SelectOptions["shareScreen"] = "Share screen";
})(SelectOptions || (SelectOptions = {}));

function AdvertiserProfile() {
  const {
    auth
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_5__.default)();
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(auth === null || auth === void 0 ? void 0 : auth.user);
  const menuButtons = [SelectOptions.manageLocations, SelectOptions.setupDevice, SelectOptions.changePassword, SelectOptions.shareScreen];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_6__.default, {
      header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this),
      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
        children: [user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__.default, {
          body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().profileCard),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: user.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 21
            }, this), user.createdAt && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: ["T\u1EA1o ng\xE0y", " ", moment__WEBPACK_IMPORTED_MODULE_7___default()(user.createdAt).format("d/MMM/yy HH:MM")]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 23
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.MutedText, {
              children: user.recId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reportCard),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "All campaign reports"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_9__.AdIcon, {
            name: "Download"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().menuCard),
          children: [menuButtons.map((opt, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                padding: "0px 12px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.MutedText, {
                children: opt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 19
            }, this), i !== menuButtons.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 52
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().logOutBtnWrap),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__.AdButton, {
              title: "Log out",
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_9__.AdIcon, {
                name: "attention-highlight",
                mr: 6
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 25
              }, this),
              onClick: () => {
                _stores_advertiser_store_advertiser_store_actions__WEBPACK_IMPORTED_MODULE_4__.default.signOut();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/screen/area-tabs/index.tsx":
/*!**************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/area-tabs/index.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserAreaTabs; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_jquery_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/jquery.util */ "./resources/utils/jquery.util.ts");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/area-tabs/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/common.util */ "./resources/utils/common.util.ts");

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\area-tabs\\index.tsx";






function AdvertiserAreaTabs({
  areas = [],
  currentArea,
  changeCurrentArea,
  showSetting
}) {
  const areasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().advertiserAreaTabs),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: areasRef,
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().areas),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().areasList),
        children: areas.map((area, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_4__.AdsliveBody16, {
          id: `area-${area.id}`,
          className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().area)} ${(currentArea === null || currentArea === void 0 ? void 0 : currentArea.id) === (area === null || area === void 0 ? void 0 : area.id) ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actived) : ""}`,
          onClick: (currentArea === null || currentArea === void 0 ? void 0 : currentArea.id) === (area === null || area === void 0 ? void 0 : area.id) ? null : () => {
            const areaLeftPos = document.getElementById(`area-${area.id}`).offsetLeft || 16;
            (areasRef === null || areasRef === void 0 ? void 0 : areasRef.current) && (0,_utils_jquery_util__WEBPACK_IMPORTED_MODULE_2__.default)(areasRef === null || areasRef === void 0 ? void 0 : areasRef.current).animate({
              scrollLeft: areaLeftPos - 16
            }, 150);
            changeCurrentArea && changeCurrentArea(area);
          },
          children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_5__.parseTitle)(area === null || area === void 0 ? void 0 : area.name)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_3__.default, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
      variant: _components_icon__WEBPACK_IMPORTED_MODULE_3__.ADSLIVE_ICON_VARIANT.SETTING,
      type: _components_icon__WEBPACK_IMPORTED_MODULE_3__.ADSLIVE_ICON_TYPE.BOLD,
      size: _components_icon__WEBPACK_IMPORTED_MODULE_3__.ADSLIVE_ICON_SIZE.SMALL,
      onClick: showSetting
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/screen/index.tsx":
/*!****************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/index.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserScreen; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _others_advertiser_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../others/advertiser-content */ "./resources/pages-components/advertiser/others/advertiser-content/index.tsx");
/* harmony import */ var _area_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area-tabs */ "./resources/pages-components/advertiser/screen/area-tabs/index.tsx");
/* harmony import */ var _location_setting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-setting */ "./resources/pages-components/advertiser/screen/location-setting/index.tsx");
/* harmony import */ var _screen_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screen-details */ "./resources/pages-components/advertiser/screen/screen-details/index.tsx");
/* harmony import */ var _scanQR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scanQR */ "./resources/pages-components/advertiser/screen/scanQR/index.tsx");
/* harmony import */ var _screen_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screen-items */ "./resources/pages-components/advertiser/screen/screen-items/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_refresher_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/refresher-icon */ "./resources/components/refresher-icon/index.tsx");
/* harmony import */ var _hooks_previous__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/previous */ "./resources/hooks/previous.ts");


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\index.tsx";













function AdvertiserScreen() {
  const {
    locations,
    loadLocations
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_3__.default)();
  const preLocation = (0,_hooks_previous__WEBPACK_IMPORTED_MODULE_12__.default)(locations);
  const {
    0: currentLocation,
    1: setCurrentLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: currentArea,
    1: setCurrentArea
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showSetting,
    1: setShowSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showNewScreen,
    1: setShowNewScreen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: selectedScreen,
    1: setSelectScreen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: isRefresh,
    1: setIsRefresh
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleChangeLocation = location => {
    if (!location) return;
    setCurrentLocation(location);
    const area = currentArea || location.areas ? location.areas[0] : null;
    setCurrentArea(area);
  };

  async function handleRefresh() {
    var _res$error$data, _res$error$data$error;

    setIsRefresh(true);
    const res = await loadLocations();
    if (res) setIsRefresh(false);
    if (res.error) setError(((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : (_res$error$data$error = _res$error$data.error) === null || _res$error$data$error === void 0 ? void 0 : _res$error$data$error.message) || 'An error happenned');
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (locations && JSON.stringify(locations) !== JSON.stringify(preLocation)) {
      const newCurrentLocation = locations.find(e => e.id === (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.id));
      handleChangeLocation(newCurrentLocation || locations[1]);
    }
  }, [locations]);

  const Setting = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_location_setting__WEBPACK_IMPORTED_MODULE_6__.default, {
    returnPreLayout: () => setShowSetting(false),
    location: currentLocation
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);

  const NewScreenLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_scanQR__WEBPACK_IMPORTED_MODULE_8__.default, {
    returnPreLayout: () => setShowNewScreen(false),
    currentArea: currentArea,
    currentLocation: currentLocation
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);

  const ScreenDetailsLayout = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screen_details__WEBPACK_IMPORTED_MODULE_7__.default, {
    returnPreLayout: () => setSelectScreen(false),
    locationData: currentLocation,
    deleteScreen: () => {},
    screenData: selectedScreen
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: selectedScreen ? ScreenDetailsLayout : showNewScreen ? NewScreenLayout : showSetting ? Setting : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_others_advertiser_content__WEBPACK_IMPORTED_MODULE_4__.default, {
        headerTitle: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Dropdown, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Dropdown.Toggle, {
            id: "dropdown-basic",
            children: (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.name) || "Select Location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Dropdown.Menu, {
            children: locations === null || locations === void 0 ? void 0 : locations.map(location => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Dropdown.Item, {
              onClick: () => handleChangeLocation(location),
              children: location.name
            }, location.name, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 21
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }, this),
        headerRightContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().rightControls),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              marginRight: '16px'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_refresher_icon__WEBPACK_IMPORTED_MODULE_11__.default, {
              isLoading: isRefresh,
              onClick: handleRefresh
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().searchIcon),
            variant: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_VARIANT.SEARCH,
            type: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_TYPE.REGULAR,
            color: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_COLOR.NORMAL
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().addIcon),
            variant: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_VARIANT.CIRCLE_PLUS,
            type: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_TYPE.BOLD,
            color: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_COLOR.PRIMARY,
            size: _components_icon__WEBPACK_IMPORTED_MODULE_2__.ADSLIVE_ICON_SIZE.SMALL,
            onClick: () => {
              setShowNewScreen(true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }, this),
        headerBottomContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_area_tabs__WEBPACK_IMPORTED_MODULE_5__.default, {
          areas: (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.areas) || [],
          currentArea: currentArea,
          changeCurrentArea: area => {
            setCurrentArea(area);
          },
          showSetting: () => {
            setShowSetting(!showSetting);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this), currentArea && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screen_items__WEBPACK_IMPORTED_MODULE_9__.default, {
        id: currentArea === null || currentArea === void 0 ? void 0 : currentArea.id,
        areaName: currentArea === null || currentArea === void 0 ? void 0 : currentArea.name,
        selectScreen: screen => setSelectScreen(screen)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/screen/location-setting/index.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/location-setting/index.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LocationSetting; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/button */ "./resources/components/button/index.tsx");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_confirmModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/confirmModal */ "./resources/components/confirmModal/index.tsx");
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/divider */ "./resources/components/divider/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/toaster */ "./resources/components/toaster/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/location-setting/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\location-setting\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function LocationSetting({
  returnPreLayout,
  location
}) {
  var _locationData$areas;

  const addArea = area => {};

  const {
    locations,
    loadLocations
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_11__.default)();
  const {
    0: locationData,
    1: setLocationData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(location);
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(location === null || location === void 0 ? void 0 : location.name);
  const {
    0: address,
    1: setAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(location === null || location === void 0 ? void 0 : location.address);
  const {
    0: showNewArea,
    1: setShowNewArea
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: newArea,
    1: setNewArea
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: successMsg,
    1: setSuccessMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: deleteAreaId,
    1: setDeleteAreaId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loadingDragItems,
    1: setLoadingDragItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: dataChanged,
    1: setDataChanged
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleCloseModal = () => setShowNewArea(false);

  const handleCreateArea = async () => {
    setShowNewArea(false);
    setDataChanged(true);
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__.default.createArea(locationData === null || locationData === void 0 ? void 0 : locationData.id, newArea);
    if (res !== null && res !== void 0 && res.data) loadLocations();

    if (res['error']) {
      setErrorMsg(res['error']['data']['error']['message']);
    }

    if (res !== null && res !== void 0 && res.data) {
      setSuccessMsg('Updated Schedule');
    }
  };

  async function handleDeleteArea(id) {
    handleLoadDragItem(id, true);
    setDataChanged(true);
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__.default.deleteArea(id);

    if (res !== null && res !== void 0 && res.data) {
      loadLocations();
    }
  }

  ;

  function handleLoadDragItem(id, isLoading) {
    return setLoadingDragItems(_objectSpread(_objectSpread({}, loadingDragItems), {}, {
      [id]: isLoading
    }));
  }

  function handleChangeOrder(change) {
    if (!(change !== null && change !== void 0 && change.length)) return;
    const newAreas = change.map(e => location.areas.find(area => area.recId === e.id));

    if (JSON.stringify(newAreas) !== JSON.stringify(location.areas)) {
      const loadAll = newAreas.reduce((res, cur) => res = _objectSpread(_objectSpread({}, res), {}, {
        [cur.id]: true
      }), {});
      setLoadingDragItems(loadAll);
      newAreas.forEach((area, i) => {
        const id = area === null || area === void 0 ? void 0 : area.id;

        if (id) {
          _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__.default.updateArea(id, {
            order: i + 1
          }).then(res => {
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

  async function updateLocation(isChange) {
    if (!isChange) return;

    const newData = _objectSpread(_objectSpread({}, locationData), {
      name,
      address
    });

    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_3__.default.updateLocation(location.id, newData);

    if (res !== null && res !== void 0 && res.data) {
      setSuccessMsg("Updated!");
      setLocationData(_objectSpread(_objectSpread({}, locationData), res.data));
    }

    if (res.error) {
      var _res$error$data;

      setErrorMsg(((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : _res$error$data.message) || 'Failed');
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLocationData((locations === null || locations === void 0 ? void 0 : locations.find(e => location.id === e.id)) || location);

    if (deleteAreaId && location.areas.includes(e => e.id === deleteAreaId)) {
      // handleLoadDragItem(deleteAreaId, false)
      setDeleteAreaId(null);
    }

    setLoadingDragItems({});
  }, [location, locations]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_confirmModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      title: "Delete Media",
      onExecute: () => {
        handleDeleteArea(deleteAreaId);
      },
      show: !!deleteAreaId,
      setShow: setDeleteAreaId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_9__.Toaster, {
      type: "error",
      handleSetToast: setErrorMsg,
      message: errorMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_9__.Toaster, {
      type: "success",
      handleSetToast: setSuccessMsg,
      message: successMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_13__.default, {
      header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_8__.default, {
          variant: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW,
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default().icon),
          type: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_TYPE.BOLD,
          size: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_SIZE.SMALL,
          onClick: () => returnPreLayout(dataChanged)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_10__.AdsliveH4, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__.default, {
          header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: locationData === null || locationData === void 0 ? void 0 : locationData.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 23
          }, this),
          body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__.CardInput, {
              title: "name",
              value: name,
              onInputChange: event => setName(event.target.value),
              onFocusOut: updateLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__.CardInput, {
              title: "address",
              value: address === null || address === void 0 ? void 0 : address.description,
              onInputChange: event => setAddress({
                description: event.target.value
              }),
              onFocusOut: updateLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 19
            }, this), locationData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__.CardDragWrapper, {
              items: locationData === null || locationData === void 0 ? void 0 : (_locationData$areas = locationData.areas) === null || _locationData$areas === void 0 ? void 0 : _locationData$areas.map(area => ({
                id: area.recId.toString(),
                content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__.CardDragItem, {
                    isLoading: loadingDragItems[area.id],
                    onDelete: event => {
                      event.stopPropagation();
                      setDeleteAreaId(area.id);
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_12__.parseTitle)(area === null || area === void 0 ? void 0 : area.name)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_divider__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 29
                  }, this)]
                }, area.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 27
                }, this)
              })),
              onChange: change => handleChangeOrder(change)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_4__.AdButton, {
              cardBtn: true,
              ghost: true,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_8__.default, {
                variant: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_VARIANT.CIRCLE_PLUS,
                color: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_COLOR.PRIMARY,
                type: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_TYPE.BOLD,
                size: _components_icon__WEBPACK_IMPORTED_MODULE_8__.ADSLIVE_ICON_SIZE.SMALL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 23
              }, this),
              title: "ADD MORE AREA",
              style: {
                padding: "20px"
              },
              onClick: () => setShowNewArea(true)
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_4__.AdButton, {
            cardBtn: true,
            dash: true,
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_8__.AdIcon, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default().createCampainModal),
      show: showNewArea,
      onHide: handleCloseModal,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__.CardInput, {
          title: "Name",
          value: newArea === null || newArea === void 0 ? void 0 : newArea.name,
          onInputChange: e => {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: handleCloseModal,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

/***/ }),

/***/ "./resources/pages-components/advertiser/screen/scanQR/index.tsx":
/*!***********************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/scanQR/index.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScanQR; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/scanQR/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _screen_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screen-details */ "./resources/pages-components/advertiser/screen/screen-details/index.tsx");
/* harmony import */ var _components_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toaster */ "./resources/components/toaster/index.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/loading */ "./resources/components/loading/index.tsx");


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\scanQR\\index.tsx";







 // import QrReader from "react-qr-reader"




const QrReader = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-qr-reader */ "react-qr-reader", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-qr-reader */ "react-qr-reader")],
    modules: ["..\\resources\\pages-components\\advertiser\\screen\\scanQR\\index.tsx -> " + "react-qr-reader"]
  }
});
function ScanQR({
  returnPreLayout,
  currentArea,
  currentLocation
}) {
  const {
    0: result,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const {
    0: isLoading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);

  const sendCode = () => null;

  const handleScan = data => {
    if (!data) return;

    try {
      const jsonData = JSON.parse(data);
      const res = {
        deviceCode: jsonData.deviceCode,
        deviceType: jsonData.deviceType,
        deviceName: jsonData.deviceName,
        deviceIp: jsonData.deviceIp,
        deviceOS: jsonData.deviceOS,
        appVersion: jsonData.appVersion
      };
      if (!res.deviceCode) setError("Wrong QR code!");
      setResult(res);
      handleScanNewScreen(res);
    } catch (error) {
      setError("Can not read this QR code");
    }
  };

  const handleError = err => {
    console.error(err);
    setError(err);
  };

  const handleScanNewScreen = async data => {
    var _res$error$data;

    setLoading(true);
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_9__.default.createScreen(currentArea.id, data);
    console.log(res.error);
    if (res !== null && res !== void 0 && res.error) setError(`Scan QR Failed! ${((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : _res$error$data.message) || 'Sorry something went wrong!'}`);
    setLoading(false);

    if (res !== null && res !== void 0 && res.data) {
      setSuccess("Uploaded new screen successfully!");
    }
  };

  const ManualInput = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Input here",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputCode)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "outline-primary",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().button),
      onClick: sendCode,
      children: "SEND"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
      type: "error",
      handleSetToast: setError,
      message: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
      type: "success",
      handleSetToast: setSuccess,
      message: success
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), result ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_10__.default, {
        size: _components_loading__WEBPACK_IMPORTED_MODULE_10__.ADSLIVE_LOADING_SIZE.EXTRA_SMALL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screen_details__WEBPACK_IMPORTED_MODULE_6__.default, {
        isNew: true,
        returnPreLayout: returnPreLayout,
        locationData: currentLocation,
        deleteScreen: () => {},
        screenData: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_1__.AdIcon, {
          name: "x-in-a-circle",
          onClick: returnPreLayout
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_2__.AdsliveH4, {
            children: "Scan QR code to add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, this)]
      }, void 0, true),
      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().scanner),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QrReader, {
            delay: 300,
            onError: handleError,
            onScan: handleScan,
            style: {
              width: "100%",
              height: "100%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }, this)
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/screen/screen-details/index.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/screen-details/index.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScreenDetails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/button */ "./resources/components/button/index.tsx");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_status_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/status-badge */ "./resources/components/status-badge/index.tsx");
/* harmony import */ var _components_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/toaster */ "./resources/components/toaster/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/screen-details/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\screen-details\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ScreenDetails(props) {
  var _screenState$area, _locationData$areas;

  const {
    isNew,
    returnPreLayout,
    deleteScreen,
    screenData,
    locationData
  } = props;
  const {
    0: screenState,
    1: setScreenState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(screenData);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: successMsg,
    1: setSuccessMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const addArea = area => {};

  const resetDevice = area => {};

  const handleInputChange = (screenKey, event) => {
    const val = event.target.value;
    setScreenState(_objectSpread(_objectSpread({}, screenState), {
      [screenKey]: val
    }));
  };

  const handleInputFocusOut = async (key, event) => {
    if (screenData[key] !== screenState[key]) {
      console.log("UPDATE REQUEST");
      const body = {
        [key]: screenState[key]
      };
      const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.updateScreen(screenState.id, body);

      if ((res === null || res === void 0 ? void 0 : res.code) === 0 && res.data) {
        // screenData[key] = screenState[key];
        setScreenState(res.data);
        setSuccessMsg('Updated');
      } else {
        setErrorMsg('Updated');
      }
    }
  };

  const infoArr = [{
    title: "screen name",
    key: "deviceName"
  }, {
    title: "location",
    key: "location",
    disabled: true
  }, {
    title: "type of device",
    key: "deviceType",
    disabled: true
  }, {
    title: "mac address",
    key: "macAddress",
    disabled: true
  }, {
    title: "os",
    key: "deviceOS",
    disabled: true
  }, {
    title: "app version",
    key: "appVersion",
    disabled: true
  }, {
    title: "ip address",
    key: "deviceIp",
    disabled: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
      type: "error",
      handleSetToast: setErrorMsg,
      message: errorMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
      type: "success",
      handleSetToast: setSuccessMsg,
      message: successMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_9__.default, {
      header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().newScreenHeader),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().headerItems),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.default, {
            variant: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW,
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().icon),
            type: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_TYPE.BOLD,
            size: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_SIZE.SMALL,
            onClick: returnPreLayout
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_8__.AdsliveH4, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status_badge__WEBPACK_IMPORTED_MODULE_6__.default, {
            status: "offline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.AdIcon, {
          name: "Delete",
          onClick: deleteScreen
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, this),
      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          padding: "16px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.default, {
          header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().infoHeader),
            children: ["ID: ", screenData.id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().linkBtn),
              onClick: resetDevice,
              children: "Reset Device"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }, this),
          body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [infoArr.splice(0, 2).map((e, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardInput, {
              title: e.title,
              disabled: e.disabled,
              value: screenState[e.key],
              onInputChange: event => handleInputChange(e.key, event),
              onFocusOut: event => handleInputFocusOut(e.key, event)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 21
            }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardSelect, {
              title: "area",
              disabled: true,
              initValue: (_screenState$area = screenState.area) === null || _screenState$area === void 0 ? void 0 : _screenState$area.name,
              values: (_locationData$areas = locationData.areas) === null || _locationData$areas === void 0 ? void 0 : _locationData$areas.map(e => e.name),
              onChange: event => {
                console.log(event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 19
            }, this), infoArr.map((e, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_4__.CardInput, {
              title: e.title,
              disabled: e.disabled,
              value: screenState[e.key],
              onInputChange: event => handleInputChange(e.key, event),
              onFocusOut: event => handleInputFocusOut(e.key, event)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 21
            }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.AdButton, {
              cardBtn: true,
              ghost: true,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_5__.default, {
                variant: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_VARIANT.CIRCLE_PLUS,
                color: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_COLOR.PRIMARY,
                type: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_TYPE.BOLD,
                size: _components_icon__WEBPACK_IMPORTED_MODULE_5__.ADSLIVE_ICON_SIZE.SMALL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 23
              }, this),
              title: "ADD MORE AREA",
              style: {
                padding: "20px"
              },
              onClick: addArea
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 19
            }, this)]
          }, void 0, true),
          footer: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().status)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default())[status || "offline"]}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status_badge__WEBPACK_IMPORTED_MODULE_6__.default, {
              status: "offline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/screen/screen-items/index.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/screen-items/index.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserScreenItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var _components_no_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/no-data */ "./resources/components/no-data/index.tsx");
/* harmony import */ var _components_status_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/status-badge */ "./resources/components/status-badge/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/screen/screen-items/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\screen\\screen-items\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function AdvertiserScreenItems({
  id,
  areaName,
  selectScreen
}) {
  var _screens$id;

  const {
    0: screens,
    1: setScreens
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // const [loadingData, setLoadingData] = useState({});

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!id) return;
    if (screens[id]) return;
    _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getAreaScreen(id).then(res => {
      if (res && res.data) {
        setScreens(_objectSpread(_objectSpread({}, screens), {}, {
          [id]: res.data
        }));
      }
    });
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().advertiserScreens),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().screensHeader),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: areaName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "- live screen"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "- offline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().line)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), !screens[id] ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__.default, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().loader)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 23
    }, this) : screens[id].length == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_no_data__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }, this) : (_screens$id = screens[id]) === null || _screens$id === void 0 ? void 0 : _screens$id.map((screen, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().screensCard),
      onClick: () => selectScreen(screen),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__.default, {
        clickable: true,
        body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: screen.deviceName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 23
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              color: '#7F838E'
            },
            children: screen === null || screen === void 0 ? void 0 : screen.deviceCode.slice(0, 6)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 23
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status_badge__WEBPACK_IMPORTED_MODULE_6__.default, {
            status: screen.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/video/index.tsx":
/*!***************************************************************!*\
  !*** ./resources/pages-components/advertiser/video/index.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserVideo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_confirmModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/confirmModal */ "./resources/components/confirmModal/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/loading */ "./resources/components/loading/index.tsx");
/* harmony import */ var _components_no_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/no-data */ "./resources/components/no-data/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _components_videos_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/videos-player */ "./resources/components/videos-player/index.tsx");
/* harmony import */ var _stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../stores/advertiser-store/advertiser-store.hook */ "./resources/stores/advertiser-store/advertiser-store.hook.ts");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _others_advertiser_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../others/advertiser-content */ "./resources/pages-components/advertiser/others/advertiser-content/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/video/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _video_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video-details */ "./resources/pages-components/advertiser/video/video-details/index.tsx");


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\video\\index.tsx";













function AdvertiserVideo() {
  var _videos$error;

  const {
    videos,
    setVideos
  } = (0,_stores_advertiser_store_advertiser_store_hook__WEBPACK_IMPORTED_MODULE_9__.default)(); // let [videoList, setVideoList] = useState(videos);

  const {
    0: detailsVideo,
    1: setDetailsVideo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showNew,
    1: setShowNew
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showDetails,
    1: setShowDetails
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showConfirmDelete,
    1: setShowConfirmDelete
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: dataChanged,
    1: setDataChange
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleDelete = async () => {
    setShowConfirmDelete(false);
    const res = _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.deleteVideo(detailsVideo.id);

    if (res) {
      await loadVideos();
      await (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_10__.timeout)(1000);
      setShowDetails(false);
    }
  };

  const handleSelectVideo = async video => {
    if (video) {
      setDetailsVideo(video);
      setShowDetails(true);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!showNew && !showDetails && dataChanged) {
      loadVideos();
      setDataChange(false);
    }
  }, [showNew, showDetails]);

  const loadVideos = async () => {
    setLoading(true);
    setVideos(null);
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getVideos();
    if (res !== null && res !== void 0 && res.data) setVideos(res.data);
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showConfirmDelete && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_confirmModal__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "delete",
      onExecute: handleDelete,
      show: showConfirmDelete,
      setShow: setShowConfirmDelete
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }, this), showDetails ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_video_details__WEBPACK_IMPORTED_MODULE_12__.default, {
        videoData: detailsVideo,
        returnPreLayout: ({
          changed
        }) => {
          setShowDetails(false);
          setDataChange(changed);
        },
        deleteData: () => setShowConfirmDelete(true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, this)
    }, void 0, false) : showNew ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_video_details__WEBPACK_IMPORTED_MODULE_12__.default, {
        isNew: true,
        returnPreLayout: () => setShowNew(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_others_advertiser_content__WEBPACK_IMPORTED_MODULE_11__.default, {
        headerTitle: "Videos",
        headerRightContent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().rightControls),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
            mr: "16px",
            name: "search",
            onClick: () => null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
            mr: "16px",
            name: "filters-vertical",
            onClick: () => null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
            name: "circle-bold",
            onClick: () => setShowNew(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this), !!(videos !== null && videos !== void 0 && videos.length) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().videosContainer),
        children: [0, 1].map(remainer => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: videos.filter((e, i) => i % 2 === remainer).map((video, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().videoWrapper),
            onClick: () => handleSelectVideo(video),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_videos_player__WEBPACK_IMPORTED_MODULE_8__.default, {
              isPreview: true,
              data: video
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default().info),
              children: video.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 23
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, this), (videos === null || videos === void 0 ? void 0 : (_videos$error = videos.error) === null || _videos$error === void 0 ? void 0 : _videos$error.status) == 404 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_7__.MutedText, {
        children: "Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 44
      }, this), !loading && (videos === null || videos === void 0 ? void 0 : videos.length) === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_no_data__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 48
      }, this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 23
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/***/ }),

/***/ "./resources/pages-components/advertiser/video/video-details/index.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/pages-components/advertiser/video/video-details/index.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoDetails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/card */ "./resources/components/card/index.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/icon */ "./resources/components/icon/index.tsx");
/* harmony import */ var _components_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/toaster */ "./resources/components/toaster/index.tsx");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/typography */ "./resources/components/typography/index.tsx");
/* harmony import */ var _components_video_uploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/video-uploader */ "./resources/components/video-uploader/index.tsx");
/* harmony import */ var _components_videos_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/videos-player */ "./resources/components/videos-player/index.tsx");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _sub_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sub-layout */ "./resources/pages-components/sub-layout/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/advertiser/video/video-details/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\advertiser\\video\\video-details\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function VideoDetails(props) {
  let {
    isNew,
    returnPreLayout,
    deleteData,
    videoData = {}
  } = props;
  const {
    0: dataState,
    1: setDataState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(videoData);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: successMsg,
    1: setSuccessMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: dataChanged,
    1: setDataChanged
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const addArea = area => {};

  function handleInputChange(key, event) {
    const val = event.target.value;
    setDataState(_objectSpread(_objectSpread({}, dataState), {
      [key]: val
    }));
  }

  ;

  async function handleInputFocusOut(key, event) {
    if (dataState) {
      const body = {
        [key]: dataState[key]
      };
      if (isNew) return;
      console.log("UPDATE REQUEST");
      const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.updateVideo(dataState.id, body);

      if (res.data) {
        setDataState(res.data);
        setSuccessMsg('Updated successful');
        setDataChanged(true);
      } else if (res.error) setError(res.error);
    }
  }

  ;

  function handleNewData(data) {
    const url = data === null || data === void 0 ? void 0 : data.secure_url,
          name = data === null || data === void 0 ? void 0 : data.original_filename;

    if (url) {
      setDataState(_objectSpread(_objectSpread({}, dataState), {
        url,
        name
      }));
      handleUploadVideo({
        url,
        name
      });
    }
  }

  async function handleUploadVideo(data) {
    if (isNew) {
      const body = data || dataState;
      console.log("create new", body);
      if (!body['name'] || !body['url']) return;
      const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.postVideo(body);

      if (res.data) {
        setDataState(res.data);
        await (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_9__.timeout)(500);
        setDataChanged(true);
        returnPreLayout({
          changed: dataChanged
        });
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toaster__WEBPACK_IMPORTED_MODULE_5__.Toaster, {
      type: "success",
      handleSetToast: setSuccessMsg,
      message: successMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sub_layout__WEBPACK_IMPORTED_MODULE_10__.default, {
      header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newScreenHeader),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().headerItems),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.default, {
            variant: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW,
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().icon),
            type: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_TYPE.BOLD,
            size: _components_icon__WEBPACK_IMPORTED_MODULE_4__.ADSLIVE_ICON_SIZE.SMALL,
            onClick: () => returnPreLayout({
              changed: dataChanged
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_6__.AdsliveH4, {
            children: videoData.name || 'Upload video'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), !isNew && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icon__WEBPACK_IMPORTED_MODULE_4__.AdIcon, {
          name: "Delete",
          onClick: deleteData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this),
      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          padding: "16px"
        },
        children: [isNew ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_video_uploader__WEBPACK_IMPORTED_MODULE_7__.default, {
          onChange: data => handleNewData(data)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_videos_player__WEBPACK_IMPORTED_MODULE_8__.default, {
          data: dataState
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__.default, {
          header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default().infoHeader),
            children: "Uploaded: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this),
          body: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__.CardInput, {
              title: "Title",
              value: dataState === null || dataState === void 0 ? void 0 : dataState.name,
              onInputChange: event => handleInputChange('name', event),
              onFocusOut: event => handleInputFocusOut('name', event)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__.CardInput, {
              disabled: true,
              title: "Tag",
              value: dataState === null || dataState === void 0 ? void 0 : dataState.tag,
              onInputChange: event => handleInputChange('tag', event),
              onFocusOut: event => handleInputFocusOut('tag', event)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, this)]
          }, void 0, true) // footer={
          //   <>
          //     {isNew && !dataState.id &&
          //       <AdButton style={{ justifyContent: 'center' }} cardBtn title="Upload" onClick={() => handleUploadVideo()} />
          //     }
          //   </>
          // }

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/pages-components/sub-layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/pages-components/sub-layout/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./resources/pages-components/sub-layout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\pages-components\\sub-layout\\index.tsx";

function SubLayout({
  header,
  content
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subLayout),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().header),
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/stores/advertiser-store/advertiser-store.actions.ts":
/*!***********************************************************************!*\
  !*** ./resources/stores/advertiser-store/advertiser-store.actions.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserStoreActions; }
/* harmony export */ });
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _definitions_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions/enums */ "./resources/definitions/enums/index.ts");
/* harmony import */ var _utils_common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common.util */ "./resources/utils/common.util.ts");
/* harmony import */ var _utils_cookie_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie.util */ "./resources/utils/cookie.util.ts");




class AdvertiserStoreActions {
  static async getAdvertiserInformation() {
    return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_0__.default.getAdvertiserInformation().then(({
      code,
      data
    }) => {
      return data || null;
    });
  }

  static async signIn(email, pwd) {
    return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_0__.default.signIn(email, pwd).then(({
      code,
      data
    }) => {
      if (code === _definitions_enums__WEBPACK_IMPORTED_MODULE_1__.API_CODE.SUCCESS && data !== null && data !== void 0 && data.token) {
        _utils_cookie_util__WEBPACK_IMPORTED_MODULE_3__.default.updateCookie("adsl-adver-at", data === null || data === void 0 ? void 0 : data.token);
        return {
          isDone: true
        };
      }

      return {
        isDone: false,
        reason: data === null || data === void 0 ? void 0 : data.errorMessage
      };
    });
  }

  static signOut() {
    _utils_cookie_util__WEBPACK_IMPORTED_MODULE_3__.default.deleteCookie("adsl-adver-at");
    (0,_utils_common_util__WEBPACK_IMPORTED_MODULE_2__.redirectTo)("/advertiser/sign-in");
  }

  static async getLocations() {
    return _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_0__.default.getLocations().then(({
      code,
      data
    }) => {
      return data || [];
    });
  }

}

/***/ }),

/***/ "./resources/stores/advertiser-store/advertiser-store.context.ts":
/*!***********************************************************************!*\
  !*** ./resources/stores/advertiser-store/advertiser-store.context.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AdvertiserStoreContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/* harmony default export */ __webpack_exports__["default"] = (AdvertiserStoreContext);

/***/ }),

/***/ "./resources/stores/advertiser-store/advertiser-store.hook.ts":
/*!********************************************************************!*\
  !*** ./resources/stores/advertiser-store/advertiser-store.hook.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useAdvertiserStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _advertiser_store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertiser-store.context */ "./resources/stores/advertiser-store/advertiser-store.context.ts");


function useAdvertiserStore() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_advertiser_store_context__WEBPACK_IMPORTED_MODULE_1__.default);
}

/***/ }),

/***/ "./resources/stores/advertiser-store/advertiser-store.provider.tsx":
/*!*************************************************************************!*\
  !*** ./resources/stores/advertiser-store/advertiser-store.provider.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdvertiserStoreProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-clients/advertiser.api-client */ "./resources/api-clients/advertiser.api-client.ts");
/* harmony import */ var _utils_cookie_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie.util */ "./resources/utils/cookie.util.ts");
/* harmony import */ var _utils_rest_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/rest-client */ "./resources/utils/rest-client.ts");
/* harmony import */ var _advertiser_store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertiser-store.actions */ "./resources/stores/advertiser-store/advertiser-store.actions.ts");
/* harmony import */ var _advertiser_store_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertiser-store.context */ "./resources/stores/advertiser-store/advertiser-store.context.ts");

var _jsxFileName = "C:\\Users\\Andrew\\adlive_FrontEnd\\resources\\stores\\advertiser-store\\advertiser-store.provider.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function AdvertiserStoreProvider({
  children
}) {
  const {
    0: auth,
    1: setAuth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isAuthenticated: false,
    token: null,
    user: null,
    isAuthenticating: true,
    isGettingToken: true
  });
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: videos,
    1: setVideos
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: campaigns,
    1: setCampaigns
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(auth !== null && auth !== void 0 && auth.token)) {
      return;
    }

    _utils_rest_client__WEBPACK_IMPORTED_MODULE_4__.default.setToken(auth === null || auth === void 0 ? void 0 : auth.token);
    _advertiser_store_actions__WEBPACK_IMPORTED_MODULE_5__.default.getAdvertiserInformation().then(info => {
      if (info) {
        setAuth(previous => _objectSpread(_objectSpread({}, previous), {}, {
          user: info,
          isAuthenticated: true,
          isAuthenticating: false
        }));
      } else {
        setAuth(previous => _objectSpread(_objectSpread({}, previous), {}, {
          user: null,
          isAuthenticated: false,
          isAuthenticating: false
        }));
      }
    });
    loadLocations();
    loadCampaigns();
    _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getVideos().then(res => {
      if (res && res.data) setVideos(res.data);
    });
  }, [auth === null || auth === void 0 ? void 0 : auth.token]);

  async function loadCampaigns() {
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getCampaigns();
    if (res !== null && res !== void 0 && res.data) setCampaigns(res.data);
    return res.data;
  }

  async function loadLocations() {
    const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getLocations();

    if (res !== null && res !== void 0 && res.data) {
      res.data.map(e => {
        if (e.areas) {
          e.areas = e.areas.sort((pre, cur) => pre.order && cur.order && pre.order > cur.order ? 1 : -1);
        }

        return e;
      });
      setLocations(res.data);
    }

    return res.data;
  }

  async function loadAllScreen(areaIds) {
    return new Promise(async (resolve, reject) => {
      let allScreensData = []; // [areaId] : screen[]
      // const allAreaData = locations?.reduce((res, e) => res = [...res, ...(e.areas || [])], [])

      areaIds.map(async (id, index) => {
        const res = await _api_clients_advertiser_api_client__WEBPACK_IMPORTED_MODULE_2__.default.getAreaScreen(id);
        if (res.code == 0) allScreensData = [...allScreensData, ...res.data];else reject(false);
        if (index + 1 === areaIds.length) resolve(allScreensData);
      });
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const authToken = _utils_cookie_util__WEBPACK_IMPORTED_MODULE_3__.default.getCookie("adsl-adver-at") || null;

    if (authToken) {
      setAuth(previous => _objectSpread(_objectSpread({}, previous), {}, {
        token: authToken,
        isGettingToken: false
      }));
    } else {
      setAuth(previous => _objectSpread(_objectSpread({}, previous), {}, {
        token: null,
        isAuthenticated: false,
        isGettingToken: false,
        isAuthenticating: false
      }));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_advertiser_store_context__WEBPACK_IMPORTED_MODULE_6__.default.Provider, {
    value: {
      auth,
      locations,
      loadLocations,
      campaigns,
      setCampaigns,
      loadCampaigns,
      videos,
      setVideos,
      loadAllScreen
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./resources/utils/common.util.ts":
/*!****************************************!*\
  !*** ./resources/utils/common.util.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirectTo": function() { return /* binding */ redirectTo; },
/* harmony export */   "parseTitle": function() { return /* binding */ parseTitle; },
/* harmony export */   "upFirstChar": function() { return /* binding */ upFirstChar; },
/* harmony export */   "removeCamel": function() { return /* binding */ removeCamel; },
/* harmony export */   "removeSnake": function() { return /* binding */ removeSnake; },
/* harmony export */   "displayTime": function() { return /* binding */ displayTime; },
/* harmony export */   "standardServiceResponse": function() { return /* binding */ standardServiceResponse; },
/* harmony export */   "timeout": function() { return /* binding */ timeout; }
/* harmony export */ });
/* harmony import */ var _definitions_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../definitions/enums */ "./resources/definitions/enums/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const redirectTo = url => {
   false && (0);
};
const parseTitle = str => {
  return str ? upFirstChar(removeCamel(removeSnake(str))) : str;
};
const upFirstChar = str => {
  return str ? str[0].toUpperCase() + str.slice(1) : str;
};
const removeCamel = str => {
  return str ? str.replace(/[A-Z]/g, letter => `${letter.toLowerCase()}`) : str;
};
const removeSnake = str => {
  return str ? str.replace(/_/g, ' ') : str;
};
const displayTime = (time, opt) => {
  const {
    showHours
  } = opt || {};
  if (!time) return '-';
  return moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format(`DD/MMM/YYYY ${showHours ? "HH:MM" : ""}`);
};
const standardServiceResponse = (statusCode, data, error) => {
  if (statusCode === 200 || statusCode == 201) {
    return {
      code: _definitions_enums__WEBPACK_IMPORTED_MODULE_0__.API_CODE.SUCCESS,
      data
    };
  }

  if (error) {
    var _error$response, _error$response$data, _error$response$data$, _error$response2, _error$response2$data, _error$response2$data2, _error$response3, _error$response3$data, _error$response3$data2;

    return {
      code: _definitions_enums__WEBPACK_IMPORTED_MODULE_0__.API_CODE.ERROR,
      data: {
        errorCode: error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : (_error$response$data$ = _error$response$data.error) === null || _error$response$data$ === void 0 ? void 0 : _error$response$data$.code,
        errorStatus: (error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : (_error$response2$data2 = _error$response2$data.error) === null || _error$response2$data2 === void 0 ? void 0 : _error$response2$data2.status) || statusCode,
        errorMessage: (error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : (_error$response3$data2 = _error$response3$data.error) === null || _error$response3$data2 === void 0 ? void 0 : _error$response3$data2.message) || error
      }
    };
  }
};
function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}

/***/ }),

/***/ "./resources/utils/cookie.util.ts":
/*!****************************************!*\
  !*** ./resources/utils/cookie.util.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CookieUtil {
  constructor() {
    _defineProperty(this, "updateCookie", (field, value) => {
      (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, field, value, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      });
    });

    _defineProperty(this, "deleteCookie", field => {
      (0,nookies__WEBPACK_IMPORTED_MODULE_0__.destroyCookie)(null, field, {
        path: "/"
      });
    });
  }

  getCookie(field) {
    return (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)(null)[field];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CookieUtil());

/***/ }),

/***/ "./resources/utils/jquery.util.ts":
/*!****************************************!*\
  !*** ./resources/utils/jquery.util.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./resources/utils/rest-client.ts":
/*!****************************************!*\
  !*** ./resources/utils/rest-client.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class RestClient {
  constructor() {
    _defineProperty(this, "domain", void 0);

    _defineProperty(this, "defaultContentType", void 0);

    _defineProperty(this, "token", void 0);

    this.domain = "";
    this.defaultContentType = "application/json";
    this.token = "";
  }

  setDomain(domain) {
    this.domain = domain;
  }

  setToken(token) {
    this.token = token;
  }

  createHeaders(options = {
    contentType: "application/json"
  }) {
    return {
      "Content-Type": (0,ramda__WEBPACK_IMPORTED_MODULE_2__.path)(["contentType"], options) || this.defaultContentType,
      "adsl-at": this.token
    };
  }

  createApi(url, query = {}) {
    return `${this.domain}${url}${(0,ramda__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(query) || (0,ramda__WEBPACK_IMPORTED_MODULE_2__.isNil)(query) ? "" : `?${query_string__WEBPACK_IMPORTED_MODULE_1___default().stringify(query)}`}`;
  }

  asyncGet(url, query = {}, options = {
    contentType: "application/json"
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.createApi(url, query), {
      headers: this.createHeaders(options)
    });
  }

  asyncPost(url, data = {}, options = {
    contentType: "application/json"
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.createApi(url), data, {
      headers: this.createHeaders(options)
    });
  }

  asyncPut(url, data = {}, options = {
    contentType: "application/json"
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().put(this.createApi(url), data, {
      headers: this.createHeaders(options)
    });
  }

  asyncDelete(url, options = {
    contentType: "application/json"
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().delete(this.createApi(url), {
      headers: this.createHeaders(options)
    });
  }

  asyncAll(requests) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().all(requests.map(req => {
      if (req.method === "get") {
        return this.asyncGet(req.url, req.query || {}, req.options || {});
      }

      return this.asyncPost(req.url, req.data || {}, req.options || {});
    })).then(axios__WEBPACK_IMPORTED_MODULE_0___default().spread((...responses) => responses.map(res => (0,ramda__WEBPACK_IMPORTED_MODULE_2__.path)(["data"], res) || null)));
  }

}

const restClient = new RestClient();
restClient.setDomain("https://stg.api.adlive.vn");
/* harmony default export */ __webpack_exports__["default"] = (restClient);

/***/ }),

/***/ "./resources/components/button/styles.module.scss":
/*!********************************************************!*\
  !*** ./resources/components/button/styles.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__1C0jf",
	"disableUserSelect": "styles_disableUserSelect__4N9_g",
	"button": "styles_button__2n5Kr",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__3VbTS",
	"fit": "styles_fit__62Kmi",
	"full": "styles_full__3oHVG",
	"primary": "styles_primary__Nn8Zh",
	"large": "styles_large__1mWz5",
	"small": "styles_small__3Uihd",
	"disabled": "styles_disabled__1xuji",
	"adBtn": "styles_adBtn__2b7OE",
	"loading": "styles_loading__2qC6l",
	"cardBtn": "styles_cardBtn__2pPR1",
	"dashBtn": "styles_dashBtn__2DUgz",
	"ghostBtn": "styles_ghostBtn__2GBJ-"
};


/***/ }),

/***/ "./resources/components/card/styles.module.scss":
/*!******************************************************!*\
  !*** ./resources/components/card/styles.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "styles_card__2Z5kZ",
	"loadingCard": "styles_loadingCard__2NdsW",
	"divider": "styles_divider__hHZ3J",
	"fullView": "styles_fullView__2yyO4",
	"footer": "styles_footer__2Ov4G",
	"dot": "styles_dot__3A2-7",
	"toggle": "styles_toggle__2ePgl",
	"header": "styles_header__1wg0G",
	"toggled": "styles_toggled__3v95b",
	"body": "styles_body__30pV-",
	"clickable": "styles_clickable__9hWok",
	"cardInput": "styles_cardInput__3Iedx",
	"icon": "styles_icon__24s-R",
	"cardSelect": "styles_cardSelect__3YQ5j",
	"selectBtn": "styles_selectBtn__3ylrO",
	"menu": "styles_menu__2WchR",
	"menuItem": "styles_menuItem__2jevL",
	"selected": "styles_selected__mvQBT",
	"cardDragItem": "styles_cardDragItem__2ZsZ2",
	"loading": "styles_loading__3LlcT",
	"leftItem": "styles_leftItem__3jwii",
	"datePickerContainer": "styles_datePickerContainer__1Uj3d",
	"datePicker": "styles_datePicker__26yPF",
	"calendar": "styles_calendar__2nUqE",
	"calendarIcon": "styles_calendarIcon__2sCnB"
};


/***/ }),

/***/ "./resources/components/confirmModal/styles.module.scss":
/*!**************************************************************!*\
  !*** ./resources/components/confirmModal/styles.module.scss ***!
  \**************************************************************/
/***/ (function(module) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./resources/components/icon/styles.module.scss":
/*!******************************************************!*\
  !*** ./resources/components/icon/styles.module.scss ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"icon": "styles_icon__2GuUS",
	"primary": "styles_primary__3gFNd",
	"normal": "styles_normal__3ELtu",
	"extraSmall": "styles_extraSmall__hNLQK",
	"small": "styles_small__18XHZ",
	"medium": "styles_medium__z-g5J",
	"large": "styles_large__3C2xa",
	"screen": "styles_screen__2DtuK",
	"video": "styles_video__2Hfte",
	"videoBold": "styles_videoBold__222vN",
	"send": "styles_send__hmZ_V",
	"sendBold": "styles_sendBold__2YZgT",
	"alert": "styles_alert__33oSg",
	"alertBold": "styles_alertBold__1ZgP7",
	"aC": "styles_aC__2cjmy",
	"aCBold": "styles_aCBold__2OM56",
	"search": "styles_search__vzqYP",
	"circlePlusBold": "styles_circlePlusBold__jmep3",
	"adIcon": "styles_adIcon__28sws",
	"clickable": "styles_clickable__3ElaC"
};


/***/ }),

/***/ "./resources/components/loading/styles.module.scss":
/*!*********************************************************!*\
  !*** ./resources/components/loading/styles.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"loading": "styles_loading__1flar",
	"large": "styles_large__3fXug",
	"medium": "styles_medium__TSKCi",
	"small": "styles_small__E-t0G",
	"extraSmall": "styles_extraSmall__1Gjix"
};


/***/ }),

/***/ "./resources/components/no-data/styles.module.scss":
/*!*********************************************************!*\
  !*** ./resources/components/no-data/styles.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__jQXCV",
	"disableUserSelect": "styles_disableUserSelect__a3_HK",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__11rB5",
	"noData": "styles_noData__3IID8"
};


/***/ }),

/***/ "./resources/components/refresher-icon/styles.module.scss":
/*!****************************************************************!*\
  !*** ./resources/components/refresher-icon/styles.module.scss ***!
  \****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__2Cboo",
	"disableUserSelect": "styles_disableUserSelect__2jW6K",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1PlHB",
	"refresher": "styles_refresher__YcwcK",
	"loading": "styles_loading__JA9E7",
	"spin": "styles_spin__10hCN"
};


/***/ }),

/***/ "./resources/components/status-badge/styles.module.scss":
/*!**************************************************************!*\
  !*** ./resources/components/status-badge/styles.module.scss ***!
  \**************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__3_wEP",
	"disableUserSelect": "styles_disableUserSelect__1v2w3",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1rzX3",
	"status": "styles_status___eX_y",
	"live": "styles_live__13yyn",
	"offline": "styles_offline__2SQV-",
	"draft": "styles_draft__1rnX8",
	"paused": "styles_paused__2ZTZd",
	"icon": "styles_icon__30E8L"
};


/***/ }),

/***/ "./resources/components/toaster/styles.module.scss":
/*!*********************************************************!*\
  !*** ./resources/components/toaster/styles.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"toaster": "styles_toaster__1Pak4",
	"success": "styles_success__1h_O1",
	"title": "styles_title__ccqEP",
	"error": "styles_error__1MwIe",
	"warning": "styles_warning__1DIw8",
	"header": "styles_header__80qWb",
	"leftHead": "styles_leftHead__OgvQD"
};


/***/ }),

/***/ "./resources/components/typography/styles.module.scss":
/*!************************************************************!*\
  !*** ./resources/components/typography/styles.module.scss ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"h1": "styles_h1__3r_Sw",
	"h2": "styles_h2__3nJbQ",
	"h3": "styles_h3__Ujpza",
	"h4": "styles_h4__Y1pAe",
	"body16": "styles_body16__3SJGS",
	"body14": "styles_body14__13acF",
	"subtitle16": "styles_subtitle16__3kxyT",
	"subtitle14": "styles_subtitle14__2Hxnl",
	"caption": "styles_caption__8T_Lb",
	"overline": "styles_overline__2cyky"
};


/***/ }),

/***/ "./resources/components/video-uploader/styles.module.scss":
/*!****************************************************************!*\
  !*** ./resources/components/video-uploader/styles.module.scss ***!
  \****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__1Q6dp",
	"disableUserSelect": "styles_disableUserSelect__2i98C",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__3WID5",
	"playerWrapper": "styles_playerWrapper__3AUpA",
	"info": "styles_info__3Na31",
	"player": "styles_player__2d9eU",
	"uploadContainer": "styles_uploadContainer__IsSvq",
	"clickable": "styles_clickable__1t862",
	"uploadBtn": "styles_uploadBtn__pzLdE",
	"loadingWrapper": "styles_loadingWrapper__3l5mO",
	"loading": "styles_loading__3PjIO",
	"errorContainer": "styles_errorContainer__3ytVc",
	"playerActions": "styles_playerActions__G1A8T",
	"playing": "styles_playing__2wVo9"
};


/***/ }),

/***/ "./resources/components/videos-player/styles.module.scss":
/*!***************************************************************!*\
  !*** ./resources/components/videos-player/styles.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__296Zw",
	"disableUserSelect": "styles_disableUserSelect__3EOOx",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1sw3S",
	"playerWrapper": "styles_playerWrapper__2w2-d",
	"info": "styles_info__34lgy",
	"playerActions": "styles_playerActions__3xtvV",
	"playing": "styles_playing__41GpI"
};


/***/ }),

/***/ "./resources/layout/advertiser/entrance/styles.module.scss":
/*!*****************************************************************!*\
  !*** ./resources/layout/advertiser/entrance/styles.module.scss ***!
  \*****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"entrance": "styles_entrance__30cbq"
};


/***/ }),

/***/ "./resources/layout/advertiser/header/styles.module.scss":
/*!***************************************************************!*\
  !*** ./resources/layout/advertiser/header/styles.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__1gFZR",
	"disableUserSelect": "styles_disableUserSelect__35UyV",
	"advertiserHeader": "styles_advertiserHeader__1yXWH",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__A-Zy-",
	"advertiserHeaderItem": "styles_advertiserHeaderItem__2TAXe",
	"advertiserHeaderItemText": "styles_advertiserHeaderItemText__3-l9v",
	"actived": "styles_actived__3SUZK",
	"advertiserHeaderItemIcon": "styles_advertiserHeaderItemIcon__2-vEH"
};


/***/ }),

/***/ "./resources/layout/advertiser/styles.module.scss":
/*!********************************************************!*\
  !*** ./resources/layout/advertiser/styles.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"advertiserLayout": "styles_advertiserLayout__eAVTs",
	"contentWrapper": "styles_contentWrapper__1mWQx",
	"headerWrapper": "styles_headerWrapper__3vDG8"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/campaign-details/styles.module.scss":
/*!********************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/campaign-details/styles.module.scss ***!
  \********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__1UELl",
	"disableUserSelect": "styles_disableUserSelect__tfLqB",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1sA7v",
	"header": "styles_header__1A0gv",
	"headerItems": "styles_headerItems__1UEn_",
	"campaignContainer": "styles_campaignContainer__2CMRu",
	"campaignHeader": "styles_campaignHeader__2Fh2e",
	"icon": "styles_icon__3v1FK",
	"infoHeader": "styles_infoHeader__2Bhd3",
	"editSetting": "styles_editSetting__1cJn-",
	"cardBody": "styles_cardBody__sN2Fe",
	"statusFooter": "styles_statusFooter__3Z_YJ",
	"live": "styles_live__xkasm",
	"offline": "styles_offline__30b74",
	"pauseBtn": "styles_pauseBtn__2VZtt",
	"info": "styles_info__bJVQs",
	"videoLibWrapper": "styles_videoLibWrapper__3hqyk",
	"popModal": "styles_popModal__10pEy",
	"pulse": "styles_pulse__1yFmN"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/campaign-item/styles.module.scss":
/*!*****************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/campaign-item/styles.module.scss ***!
  \*****************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"campaignContainer": "styles_campaignContainer__2v-bg",
	"campaign": "styles_campaign__HEILe",
	"icon": "styles_icon__1UciR",
	"statusBadge": "styles_statusBadge__1WMPh"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/selectVideosModal/styles.module.scss":
/*!*********************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/selectVideosModal/styles.module.scss ***!
  \*********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__1RND3",
	"disableUserSelect": "styles_disableUserSelect__3zqJ4",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1h7P3",
	"videosContainer": "styles_videosContainer__1ozMV",
	"videoWrapper": "styles_videoWrapper__30W5x",
	"info": "styles_info__1NC1L",
	"selectIcon": "styles_selectIcon__1X76D",
	"selected": "styles_selected__2Ju1S"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/campaign/styles.module.scss":
/*!***************************************************************************!*\
  !*** ./resources/pages-components/advertiser/campaign/styles.module.scss ***!
  \***************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__30-ip",
	"disableUserSelect": "styles_disableUserSelect__1Dihs",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1cGHf",
	"rightControls": "styles_rightControls__3iQ1e",
	"createCampainModal": "styles_createCampainModal__12Qr2",
	"title": "styles_title__2gWCN"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/others/advertiser-content/styles.module.scss":
/*!********************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/others/advertiser-content/styles.module.scss ***!
  \********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__34nsh",
	"advertiserContent": "styles_advertiserContent__2sY8c",
	"disableUserSelect": "styles_disableUserSelect__361Df",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__kNl1j",
	"advertiserContentHeader": "styles_advertiserContentHeader__2j0Co",
	"advertiserContentHeaderTop": "styles_advertiserContentHeaderTop__2PcM0",
	"advertiserContentHeaderTopLeft": "styles_advertiserContentHeaderTopLeft__2NJB6",
	"advertiserContentHeaderTopRight": "styles_advertiserContentHeaderTopRight__TInY4",
	"advertiserContentContent": "styles_advertiserContentContent__1jSnL"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/profile/styles.module.scss":
/*!**************************************************************************!*\
  !*** ./resources/pages-components/advertiser/profile/styles.module.scss ***!
  \**************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"content": "styles_content__lYW6r",
	"profileCard": "styles_profileCard__3fZSy",
	"reportCard": "styles_reportCard__1x_Ms",
	"menuCard": "styles_menuCard__uqh3d",
	"logOutBtnWrap": "styles_logOutBtnWrap__1IW8r"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/screen/area-tabs/styles.module.scss":
/*!***********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/area-tabs/styles.module.scss ***!
  \***********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__2jwpO",
	"advertiserAreaTabs": "styles_advertiserAreaTabs__37IoT",
	"areas": "styles_areas__vgvb4",
	"disableUserSelect": "styles_disableUserSelect__29uJw",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__sH7Xi",
	"areasList": "styles_areasList__X3Mg8",
	"area": "styles_area__2gI13",
	"actived": "styles_actived__3n6Gm",
	"icon": "styles_icon__2HKec"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/screen/location-setting/styles.module.scss":
/*!******************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/location-setting/styles.module.scss ***!
  \******************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"icon": "styles_icon__15LEb"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/screen/scanQR/styles.module.scss":
/*!********************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/scanQR/styles.module.scss ***!
  \********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__U1qlq",
	"disableUserSelect": "styles_disableUserSelect__3WGN3",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__13m8M",
	"icon": "styles_icon__gyLCR",
	"title": "styles_title__3J-zb",
	"scanner": "styles_scanner__22mQZ",
	"inputContainer": "styles_inputContainer__3xwWr",
	"inputCode": "styles_inputCode__1b-y2",
	"codeIcon": "styles_codeIcon__1L9us",
	"button": "styles_button__31-vv"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/screen/screen-details/styles.module.scss":
/*!****************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/screen-details/styles.module.scss ***!
  \****************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__49uvc",
	"disableUserSelect": "styles_disableUserSelect__wpzAe",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__3jryR",
	"newScreenHeader": "styles_newScreenHeader__MQeHC",
	"headerItems": "styles_headerItems__3gF7V",
	"icon": "styles_icon__21GKz",
	"infoHeader": "styles_infoHeader__2IPNI",
	"linkBtn": "styles_linkBtn__3sZ4q",
	"status": "styles_status__1jyuh",
	"live": "styles_live__yHBez",
	"offline": "styles_offline__3DRzR"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/screen/screen-items/styles.module.scss":
/*!**************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/screen-items/styles.module.scss ***!
  \**************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__2qZVM",
	"disableUserSelect": "styles_disableUserSelect__2wy1I",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__2fw2z",
	"screensCard": "styles_screensCard__aS5WK",
	"advertiserScreens": "styles_advertiserScreens__19sAI",
	"loader": "styles_loader__3KW9H",
	"screensHeader": "styles_screensHeader__3dw3O",
	"line": "styles_line__1NtWZ"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/screen/styles.module.scss":
/*!*************************************************************************!*\
  !*** ./resources/pages-components/advertiser/screen/styles.module.scss ***!
  \*************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"rightControls": "styles_rightControls__3xRjt",
	"searchIcon": "styles_searchIcon__3w_oP",
	"dropdown-basic": "styles_dropdown-basic__28K7G"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/video/styles.module.scss":
/*!************************************************************************!*\
  !*** ./resources/pages-components/advertiser/video/styles.module.scss ***!
  \************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"videosContainer": "styles_videosContainer__20YWo",
	"videoWrapper": "styles_videoWrapper__2d2aU",
	"info": "styles_info__1mk6o"
};


/***/ }),

/***/ "./resources/pages-components/advertiser/video/video-details/styles.module.scss":
/*!**************************************************************************************!*\
  !*** ./resources/pages-components/advertiser/video/video-details/styles.module.scss ***!
  \**************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__2SRVQ",
	"disableUserSelect": "styles_disableUserSelect__R4A89",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__1wJ4W",
	"newScreenHeader": "styles_newScreenHeader__1o3z2",
	"headerItems": "styles_headerItems__2DB29",
	"icon": "styles_icon__1Lpfb",
	"infoHeader": "styles_infoHeader__1T638",
	"linkBtn": "styles_linkBtn__1eDiP",
	"status": "styles_status__35ELO",
	"live": "styles_live__33Eb7",
	"offline": "styles_offline__1z2qV",
	"uploadBtn": "styles_uploadBtn__2L2cn"
};


/***/ }),

/***/ "./resources/pages-components/sub-layout/styles.module.scss":
/*!******************************************************************!*\
  !*** ./resources/pages-components/sub-layout/styles.module.scss ***!
  \******************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"hideScrollbar": "styles_hideScrollbar__2qjzd",
	"disableUserSelect": "styles_disableUserSelect__1LtPe",
	"hiddenTextOverflow": "styles_hiddenTextOverflow__3NHBC",
	"subLayout": "styles_subLayout__d9zNl",
	"header": "styles_header__2GrD4",
	"content": "styles_content__1Rkjo"
};


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("jquery");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("query-string");;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("ramda");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-beautiful-dnd");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-content-loader");;

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-datepicker");;

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-player");;

/***/ }),

/***/ "react-qr-reader":
/*!**********************************!*\
  !*** external "react-qr-reader" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-qr-reader");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/advertiser/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3BhZ2VzL2FkdmVydGlzZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2FwaS1jbGllbnRzL2FkdmVydGlzZXIuYXBpLWNsaWVudC50cyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9hcGktY2xpZW50cy9jbG91ZGluYXJ5LWFwaS50cyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy9jYXJkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL2NvbmZpcm1Nb2RhbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy9kaXZpZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL2ljb24vaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy9uby1kYXRhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL3JlZnJlc2hlci1pY29uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL3N0YXR1cy1iYWRnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy90b2FzdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL3R5cG9ncmFwaHkvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvdmlkZW8tdXBsb2FkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvdmlkZW9zLXBsYXllci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvZGVmaW5pdGlvbnMvZW51bXMvYXBpLWNvZGUuZW51bS50cyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9kZWZpbml0aW9ucy9lbnVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9kZWZpbml0aW9ucy9lbnVtcy9zY3JlZW4tc3RhdHVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvZGVmaW5pdGlvbnMvZW51bXMvdXNlci10eXBlLmVudW0udHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvaG9va3MvcHJldmlvdXMudHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvbGF5b3V0L2FkdmVydGlzZXIvZGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9sYXlvdXQvYWR2ZXJ0aXNlci9lbnRyYW5jZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvbGF5b3V0L2FkdmVydGlzZXIvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9sYXlvdXQvYWR2ZXJ0aXNlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL2FsZXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvY2FtcGFpZ24vY2FtcGFpZ24tZGV0YWlscy9jYW1wYWlnbi10eXBlLnRzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9jYW1wYWlnbi9jYW1wYWlnbi1kZXRhaWxzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvY2FtcGFpZ24vY2FtcGFpZ24taXRlbS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL2NhbXBhaWduL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvY2FtcGFpZ24vc2VsZWN0VmlkZW9zTW9kYWwvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL290aGVycy9hZHZlcnRpc2VyLWNvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9wcm9maWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvc2NyZWVuL2FyZWEtdGFicy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9sb2NhdGlvbi1zZXR0aW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvc2NyZWVuL3NjYW5RUi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9zY3JlZW4tZGV0YWlscy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9zY3JlZW4taXRlbXMvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci92aWRlby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3ZpZGVvL3ZpZGVvLWRldGFpbHMvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvc3ViLWxheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5hY3Rpb25zLnRzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUuY29udGV4dC50cyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9zdG9yZXMvYWR2ZXJ0aXNlci1zdG9yZS9hZHZlcnRpc2VyLXN0b3JlLmhvb2sudHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvdXRpbHMvY29tbW9uLnV0aWwudHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvdXRpbHMvY29va2llLnV0aWwudHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvdXRpbHMvanF1ZXJ5LnV0aWwudHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvdXRpbHMvcmVzdC1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy9idXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvY2FyZC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy9jb25maXJtTW9kYWwvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvaWNvbi9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy9sb2FkaW5nL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL25vLWRhdGEvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvcmVmcmVzaGVyLWljb24vc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvc3RhdHVzLWJhZGdlL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9jb21wb25lbnRzL3RvYXN0ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy92aWRlby11cGxvYWRlci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvY29tcG9uZW50cy92aWRlb3MtcGxheWVyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9sYXlvdXQvYWR2ZXJ0aXNlci9lbnRyYW5jZS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvbGF5b3V0L2FkdmVydGlzZXIvaGVhZGVyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9sYXlvdXQvYWR2ZXJ0aXNlci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL2NhbXBhaWduL2NhbXBhaWduLWRldGFpbHMvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9jYW1wYWlnbi9jYW1wYWlnbi1pdGVtL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvY2FtcGFpZ24vc2VsZWN0VmlkZW9zTW9kYWwvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9jYW1wYWlnbi9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL290aGVycy9hZHZlcnRpc2VyLWNvbnRlbnQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9wcm9maWxlL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvc2NyZWVuL2FyZWEtdGFicy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9sb2NhdGlvbi1zZXR0aW5nL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS8uL3Jlc291cmNlcy9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvc2NyZWVuL3NjYW5RUi9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9zY3JlZW4tZGV0YWlscy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3NjcmVlbi9zY3JlZW4taXRlbXMvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9zY3JlZW4vc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci92aWRlby9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3ZpZGVvL3ZpZGVvLWRldGFpbHMvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlLy4vcmVzb3VyY2VzL3BhZ2VzLWNvbXBvbmVudHMvc3ViLWxheW91dC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIiIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlL2V4dGVybmFsIFwicmVhY3QtY29udGVudC1sb2FkZXJcIiIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly9hZGxpdmVfZnJvbnRlbmRfZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovL2FkbGl2ZV9mcm9udGVuZF9lbXBsYXRlL2V4dGVybmFsIFwicmVhY3QtcXItcmVhZGVyXCIiLCJ3ZWJwYWNrOi8vYWRsaXZlX2Zyb250ZW5kX2VtcGxhdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBZHZlcnRpc2VyUGFnZSIsIkFkdmVydGlzZXJBcGlDbGllbnQiLCJnZXRBZHZlcnRpc2VySW5mb3JtYXRpb24iLCJyZXN0Q2xpZW50IiwidGhlbiIsInN0YXR1cyIsImRhdGEiLCJzdGFuZGFyZFNlcnZpY2VSZXNwb25zZSIsImNhdGNoIiwiZXJyIiwic2lnbkluIiwiZW1haWwiLCJwd2QiLCJwYXNzd29yZCIsImdldExvY2F0aW9ucyIsInVwZGF0ZUxvY2F0aW9uIiwiaWQiLCJib2R5IiwiYWRkcmVzcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsImVycm9yIiwicmVzcG9uc2UiLCJjcmVhdGVBcmVhIiwibG9jYXRpb25JZCIsImdldEFyZWFTY3JlZW4iLCJhcmVhSWQiLCJkZWxldGVBcmVhIiwidXBkYXRlQXJlYSIsImNyZWF0ZVNjcmVlbiIsImdldFNjcmVlbiIsInVwZGF0ZVNjcmVlbiIsImRlbGV0ZVNjcmVlbiIsImdldENhbXBhaWducyIsImNyZWF0ZUNhbXBhaWduIiwidXBkYXRlQ2FtcGFpZ24iLCJnZXRDYW1wYWlnbiIsImdldENhbXBhaWduQWRzU2V0IiwiZ2V0Q2FtcGFpZ25TY2hlZHVsZSIsInVwZGF0ZUNhbXBhaWduU2NoZWR1bGUiLCJnZXRDYW1wYWlnblRhcmdldFNjcmVlbkNvbmRpdGlvbnMiLCJ1cGRhdGVDYW1wYWlnblRhcmdldFNjcmVlbkNvbmRpdGlvbnMiLCJ1cGRhdGVBZHNTZXRNZWRpYSIsImFkc19zZXRfaWQiLCJwb3N0VmlkZW8iLCJnZXRWaWRlb3MiLCJ1cGRhdGVWaWRlbyIsImRlbGV0ZVZpZGVvIiwiVVBMT0FEX1VSTCIsInByb2Nlc3MiLCJjcmVhdGVGb3JtRGF0YSIsImZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQ2xvdWRpbmFyeUFwaSIsInVwbG9hZFZpZGVvIiwicmVzIiwiYXhpb3MiLCJBRFNMSVZFX0JVVFRPTl9TSVpFIiwiQURTTElWRV9CVVRUT05fVFlQRSIsIkFEU0xJVkVfQlVUVE9OX1ZBUklBTlQiLCJnZXRUeXBlQ2xhc3NOYW1lIiwidHlwZSIsIkZJVCIsInN0eWxlcyIsIkZVTEwiLCJnZXRWYXJpYW50Q2xhc3NOYW1lIiwidmFyaWFudCIsIlBSSU1BUlkiLCJST1VOREVSIiwiZ2V0U2l6ZUNsYXNzTmFtZSIsInNpemUiLCJMQVJHRSIsIlNNQUxMIiwiQWRCdXR0b24iLCJwcm9wcyIsImljb24iLCJ0aXRsZSIsIm9uQ2xpY2siLCJjYXJkQnRuIiwiZGFzaCIsImdob3N0Iiwic3R5bGUiLCJpc0xvYWRpbmciLCJBRFNMSVZFQnV0dG9uIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWRDbGFzc05hbWUiLCJkaXNhYmxlZFN0eWxlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsIkRvdHMiLCJkb3RzIiwic2V0RG90cyIsInVzZVN0YXRlIiwiaW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZXBlYXQiLCJDYXJkSW5wdXQiLCJ2YWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJvbkZvY3VzT3V0IiwiaXNDaGFuZ2UiLCJzZXRJc0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJDYXJkU2VsZWN0IiwiaW5pdFZhbHVlIiwib25DaGFuZ2UiLCJzZWxlY3RlZFZhbHVlIiwib25TZWxlY3RWYWx1ZSIsImhhbmRsZVNlbGVjdCIsIml0ZW0iLCJtYXAiLCJpIiwiQ2FyZE11bHRpU2VsZWN0Iiwic2V0U2VsZWN0VmFsdWUiLCJzaG93RHJvcCIsInNldFNob3dEcm9wIiwiaXNTZWxlY3RBbGwiLCJzZXRTZWxlY3RBbGwiLCJjb25maWciLCJzaG93IiwiaGFuZGxlU2VsZWN0SXRlbSIsImNoZWNrSW5jbHVkZSIsInJlbW92ZUl0ZW0iLCJhZGRJdGVtIiwiZmlsdGVyIiwiZGlzcGxheVNlbGVjdCIsImluY2x1ZGVzIiwiaGFuZGxlRG9uZSIsImhhbmRsZVNlbGVjdEFsbCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInRvU3RyaW5nIiwiQ2FyZFNlbGVjdFRpbWUiLCJyZXRyaWV2ZUhvdXJzIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsIkRhdGUiLCJzZXREYXRlIiwiY2hhbmdlIiwiRHJhZ0l0ZW1Mb2FkZXIiLCJDYXJkRHJhZ0l0ZW0iLCJvbkRlbGV0ZSIsIkNhcmREcmFnV3JhcHBlciIsIml0ZW1zIiwiaXRlbXNTdGF0dXMiLCJzZXRJdGVtc1N0YXR1cyIsImdldExpc3RTdHlsZSIsImlzRHJhZ2dpbmdPdmVyIiwiZ2V0SXRlbVN0eWxlIiwiaXNEcmFnZ2luZyIsImRyYWdnYWJsZVN0eWxlIiwidXNlclNlbGVjdCIsInJlb3JkZXIiLCJsaXN0Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicmVzdWx0IiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlZCIsInNwbGljZSIsIm9uRHJhZ0VuZCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiaW5kZXgiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwiY29udGVudCIsInBsYWNlaG9sZGVyIiwiQWRDYXJkIiwiaGVhZGVyIiwiZm9vdGVyIiwiZG90IiwiZnVsbFZpZXciLCJ0b2dnbGUiLCJ0b2dnbGVkIiwiY2xpY2thYmxlIiwibG9hZGluZyIsIkFEU0xJVkVfTE9BRElOR19TSVpFIiwiRVhUUkFfU01BTEwiLCJDb25maXJtTW9kYWwiLCJvbkV4ZWN1dGUiLCJzZXRTaG93IiwiaGFuZGxlQ29udGludWUiLCJwYXJzZVRpdGxlIiwiRGl2aWRlclN0eWxlIiwiYm9yZGVyVG9wIiwiaGVpZ2h0IiwiRGl2aWRlciIsIkV5ZU9mZkljb24iLCJFeWVPbkljb24iLCJXaWZpSWNvbiIsIlNjcmVlbkljb24iLCJTY3JlZW5Cb2xkSWNvbiIsIlZpZGVvSWNvbiIsIlZpZGVvQm9sZEljb24iLCJBQ0ljb24iLCJBQ0JvbGRJY29uIiwiUGF1c2VCb2xkSWNvbiIsIkdvTGl2ZUJvbGRJY29uIiwiU2VuZEljb24iLCJTZW5kQm9sZEljb24iLCJBbGVydEljb24iLCJBbGVydEJvbGRJY29uIiwiQXR0ZW50aW9uQm9sZEljb24iLCJDYWxlbmRhckljb24iLCJTZWFyY2hJY29uIiwiQ2lyY2xlUGx1c0ljb24iLCJDaXJjbGVQbHVzQm9sZEljb24iLCJTZXR0aW5nSWNvbiIsIlNldHRpbmdCb2xkSWNvbiIsIkZ1bGxMZWZ0QXJyb3ciLCJGdWxsUmlnaHRBcnJvdyIsIk1pbnVzQ2lyY2xlIiwiQURTTElWRV9JQ09OX0NPTE9SIiwiQURTTElWRV9JQ09OX1RZUEUiLCJBRFNMSVZFX0lDT05fU0laRSIsIkFEU0xJVkVfSUNPTl9WQVJJQU5UIiwiaWNvbkNvbXBvbmVudHMiLCJBTEVSVCIsIlJFR1VMQVIiLCJCT0xEIiwiQVRURU5USU9OIiwiQV9DIiwiQ0FMRU5EQVIiLCJDSVJDTEVfTUlOVVMiLCJDSVJDTEVfUExVUyIsIkNJUkNMRV9YIiwiQ09ERSIsIkRPV04iLCJFWUVfT0ZGIiwiRVlFX09OIiwiRklMVEVSIiwiRlVMTF9MRUZUX0FSUk9XIiwiRlVMTF9SSUdIVF9BUlJPVyIsIkdPX0xJVkUiLCJQQVVTRSIsIlBFTiIsIlNDUkVFTiIsIlNFQVJDSCIsIlNFTkQiLCJTRVRUSU5HIiwiU1FVQVJFX0RPV04iLCJUUkFTSCIsIlZJREVPIiwiV0lGSSIsIk1JTlVTX0NJUkNMRSIsImdldEljb24iLCJwYXRoIiwiTUVESVVNIiwiZ2V0VmFyaWFudENsYXNzTmFtZUJ5Qm9sZFR5cGUiLCJnZXRWYXJpYW50Q2xhc3NOYW1lQnlSZWd1bGFyVHlwZSIsImdldENvbG9yQ2xhc3NOYW1lIiwiY29sb3IiLCJOT1JNQUwiLCJBZHNsaXZlSWNvbiIsIkljb24iLCJBZEljb24iLCJuYW1lIiwidyIsImgiLCJtIiwibXIiLCJtbCIsInIiLCJ1cmwiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiQWRzbGl2ZUxvYWRpbmciLCJOb0RhdGEiLCJSZWZyZXNoc2VySWNvbiIsIlN0YXR1c0JhZGdlIiwiVFlQRV9UT19JQ09OIiwic3VjY2VzcyIsIndhcm5pbmciLCJUb2FzdGVyIiwiaGFuZGxlU2V0VG9hc3QiLCJtZXNzYWdlIiwiZGVsYXkiLCJ0b1VwcGVyQ2FzZSIsIkFkc2xpdmVIMSIsIkFkc2xpdmVIMiIsIkFkc2xpdmVIMyIsIkFkc2xpdmVINCIsIkFkc2xpdmVDYXB0aW9uIiwiQWRzbGl2ZU92ZXJsaW5lIiwiQWRzbGl2ZUJvZHkxNiIsIkFkc2xpdmVCb2R5MTQiLCJBZHNsaXZlU3VidGl0bGUiLCJBZHNsaXZlU3VidGl0bGUxNCIsIkFkc2xpdmVTdWJ0aXRsZTE2IiwiTXV0ZWRUZXh0IiwiSW5mb1RleHQiLCJzaXplTHZsIiwibGciLCJtZCIsInNtIiwiZm9udFNpemUiLCJDbG91ZGluYXJ5IiwiVmlkZW9VcGxvYWRlciIsInZpZGVvRmlsZSIsInNldFZpZGVvRmlsZSIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsInNldEVycm9yIiwicGxheWluZyIsInNldFBsYXlpbmciLCJzaG93SW5mbyIsInNldFNob3dJbmZvIiwiaGFuZGxlVXBsb2FkIiwiY29uc29sZSIsImxvZyIsIm9yaWdpbmFsX2ZpbGVuYW1lIiwiZHVyYXRpb24iLCJzZWN1cmVfdXJsIiwiZXZlbnQiLCJmaWxlcyIsImdldFZpZGVvc1VybCIsImlzQXJyYXkiLCJWaWRlb3NQbGF5ZXIiLCJvbkNsaWNrUHJldmlldyIsImlzUHJldmlldyIsIkFQSV9DT0RFIiwiU0NSRUVOX1NUQVRVUyIsIlVTRVJfVFlQRSIsInVzZVByZXZpb3VzIiwicmVmIiwidXNlUmVmIiwiY3VycmVudCIsImFkdmVydGlzZXJIZWFkZXJJdGVtcyIsImljb25WYXJpYW50IiwiY29udGVudENvbXBvbmVudCIsIkFkdmVydGlzZXJTY3JlZW4iLCJBZHZlcnRpc2VyVmlkZW8iLCJBZHZlcnRpc2VyQ2FtcGFpZ24iLCJBZHZlcnRpc2VyQWxlcnQiLCJBZHZlcnRpc2VyUHJvZmlsZSIsIkFkdmVydGlzZXJFbnRyYW5jZSIsImF1dGgiLCJ1c2VBZHZlcnRpc2VyU3RvcmUiLCJpc0dldHRpbmdUb2tlbiIsImlzQXV0aGVudGljYXRpbmciLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZWRpcmVjdFRvIiwiQWR2ZXJ0aXNlckhlYWRlciIsImFjdGl2ZWRJdGVtSWQiLCJzd2l0Y2hUb0l0ZW0iLCJBZHZlcnRpc2VyTGF5b3V0IiwiY3VycmVudEhlYWRlckl0ZW1JZCIsInNldEN1cnJlbnRIZWFkZXJJdGVtSWQiLCJjdXJyZW50SGVhZGVySXRlbSIsInVzZU1lbW8iLCJzd2l0Y2hDb250ZW50IiwiaXRlbUlkIiwiQ29udGVudENvbXBvbmVudCIsIkNBTVBBSUdOX1NUQVRVU0VTIiwiTE9BRF9LRVlTIiwiU1RSQVRFR0lFUyIsImtleSIsImRlc2MiLCJTVEFUVVNfQ09MT1IiLCJwYXVzZWQiLCJkcmFmdCIsImxpdmUiLCJBY3Rpb25PblN0YXR1cyIsImFjdGlvbiIsIkNhbXBhaWduRGV0YWlscyIsImxvY2F0aW9ucyIsImxvYWRBbGxTY3JlZW4iLCJyZXR1cm5QcmVMYXlvdXQiLCJjYW1wYWlnbiIsInZpZGVvcyIsImJlZ2luVGltZSIsImVuZFRpbWUiLCJ0YXJnZXRTY3JlZW5Db25kaXRpb25zIiwiY29sbGVjdEFsbEFyZWFzIiwicmVkdWNlIiwiY3VyIiwiYXJlYXMiLCJzZXRTdGF0dXMiLCJhZHNTZXQiLCJzZXRBZHNTZXQiLCJzY2hlZHVsZSIsInNldFNjaGVkdWxlIiwic2NyZWVuQ29uZGl0aW9ucyIsInNldFNjcmVlbkNvbmRpdGlvbnMiLCJzdHJhdGVneSIsImFyZWFPcHRpb25zIiwic2V0QXJlYU9wdGlvbnMiLCJzZXR0aW5nIiwib3BlblNldHRpbmciLCJzZXRMb2FkaW5nIiwib3BlblZpZGVvTGliIiwic2V0T3BlblZpZGVvTGliIiwiaXNDaGFuZ2luZ1N0YXR1cyIsInNldENoYW5nZVN0YXR1cyIsImluaXRMb2NhdGlvbnMiLCJzZXRJbml0TG9jYXRpb25zIiwiaW5pdEFyZWFzIiwic2V0SW5pdEFyZWFzIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsInN1Y2Nlc3NNc2ciLCJzZXRTdWNjZXNzTXNnIiwid2FybmluZ01zZyIsInNldFdhcm5pbmdNc2ciLCJjaGFuZ2VkRGF0YSIsInNldENoYW5nZWREYXRhIiwic2NyZWVuIiwiQ2FtcGFpbkhlYWRlciIsInNldHRpbmdLZXkiLCJwYWRkaW5nIiwidG9nZ2xlU2V0dGluZyIsImhhbmRsZVVwZGF0ZSIsInJlcXVlc3RBUEkiLCJsb2FkS2V5IiwiUkVRX0RBVEEiLCJoYW5kbGVTZXRMb2FkaW5nIiwiYWRzU2V0TWVkaWFMaXN0IiwibXNnIiwicyIsImZvcm1hdE1lZGlhUmVxdWVzdCIsInJlY0lkIiwid2l0aE1lZGlhIiwid2l0aE1lZGlhUmVjSWQiLCJvcmRlciIsImZldGNoQWRzIiwicnVsZXMiLCJkZXRhaWwiLCJpbml0TG9jYXRpb25JZHMiLCJmaW5kIiwicnVsZVR5cGVzIiwibG9jYXRpb25JZHMiLCJpbml0QXJlYUlkcyIsImFyZWFJZHMiLCJsb2FkTG9jYXRpb25zIiwiaGFuZGxlSW5pdFZhbHVlIiwiY2hlY2tMaXZlQ29uZGl0aW9uIiwic2NyZWVuSWRzIiwiaGFuZGxlVXBkYXRlQ2FtcGFpZ25TdGF0dXMiLCJ1cGRhdGVBZHNTZXQiLCJuZXdWaWRlb3MiLCJtZXJnZURhdGEiLCJ1cGRhdGVNZWRpYVJlcSIsIm5ld01lZGlhTGlzdCIsIm5ld01lZGlhTGlzdFJlcSIsImhhbmRsZURlbGV0ZU1lZGlhIiwiZmlsdGVyZWREYXRhIiwiaGFuZGxlQ2hhbmdlT3JkZXIiLCJjaGFuZ2VEYXRhIiwiYXJyYW5nZUlkcyIsIm5ld09yZGVyTWVkaWEiLCJyZWZNZWRpYSIsImhhbmRsZUNoYW5nZVNjaGVkdWxlIiwibmV3U2NoZWR1bGUiLCJoYW5kbGVDaGFuZ2VDb25kaXRpb25zIiwibmV3Q29uZGl0aW9ucyIsImhhbmRsZUNoYW5nZVN0cmF0ZWd5IiwiaGFuZGxlTG9jYXRpb25TZWxlY3QiLCJzZWxlY3REYXRhIiwiY2hvc2VMb2NhdGlvbnMiLCJjb2xsZWN0QXJlYXMiLCJsb2NhdGlvbiIsImNvbmRpdGlvbnMiLCJsb2NhdGlvblJlY0lkcyIsImhhbmRsZUFyZWFTZWxlY3QiLCJzZWxlY3RBcmVhcyIsImNob3NlQXJlYXMiLCJhIiwiYXJlYVJlY0lkcyIsInNjcmVlbkRhdGEiLCJzY3JlZW5SZWNJZHMiLCJpZHMiLCJkZWxldGVSZWNJZCIsInNldFNEZWxldGVSZWNJZCIsImNvbmZpcm1EZWxldGVNb2RhbCIsImhhbmRsZVJldHVybkxheW91dCIsImlzRGF0YUxvYWRpbmciLCJrZXlzIiwic3RvcFByb3BhZ2F0aW9uIiwidmlkZW8iLCJwaG90b1VybCIsImFyZWEiLCJkaXNwbGF5VGltZSIsIkNhbXBhaWduSXRlbSIsImNhbXBhaWducyIsInNldENhbXBhaWducyIsImxvYWRDYW1wYWlnbnMiLCJzaG93RmlsdGVyIiwic2V0U2hvd0ZpbHRlciIsInNob3dOZXdDYW1wYWlnbiIsInNldFNob3dOZXdDYW1wYWlnbiIsInNlbGVjdGVkQ2FtcGFpZ24iLCJzZXRTZWxlY3RDYW1wYWlnbiIsIm5ld0NhbXBhaWduIiwic2V0TmV3Q2FtcGFpZ24iLCJDYW1wYWlnbkRldGFpbHNMYXlvdXQiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlQ3JlYXRlQ2FtcGFpZ24iLCJGaWx0ZXJMYXlvdXQiLCJTZWxlY3RWaWRlb3NNb2RhbCIsImhhbmRsZVNob3ciLCJhbGxWaWRlb3MiLCJ2aWRlb0xpYiIsInNldFZpZGVvTGliIiwic2VsZWN0ZWRWaWRlb3MiLCJzZXRTZWxlY3RWaWRlbyIsImFkZGVkTWVkaWFWaWRlb3MiLCJsaWIiLCJ2IiwiaGFuZGxlU2VsZWN0VmlkZW8iLCJjaGVja1NlbGVjdGVkIiwiaGFuZGxlQWRkVmlkZW9zIiwibmV3TWVkaWEiLCJBZHZlcnRpc2VyUGFnZUNvbnRlbnQiLCJBZHZlcnRpc2VyQ29udGVudCIsImhlYWRlckxlZnRDb250ZW50IiwiaGVhZGVyUmlnaHRDb250ZW50IiwiaGVhZGVyQm90dG9tQ29udGVudCIsImhlYWRlclRpdGxlIiwiU2VsZWN0T3B0aW9ucyIsInVzZXIiLCJzZXRVc2VyIiwibWVudUJ1dHRvbnMiLCJtYW5hZ2VMb2NhdGlvbnMiLCJzZXR1cERldmljZSIsImNoYW5nZVBhc3N3b3JkIiwic2hhcmVTY3JlZW4iLCJjcmVhdGVkQXQiLCJvcHQiLCJBZHZlcnRpc2VyU3RvcmVBY3Rpb25zIiwiQWR2ZXJ0aXNlckFyZWFUYWJzIiwiY3VycmVudEFyZWEiLCJjaGFuZ2VDdXJyZW50QXJlYSIsInNob3dTZXR0aW5nIiwiYXJlYXNSZWYiLCJhcmVhTGVmdFBvcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRMZWZ0IiwianF1ZXJ5IiwiYW5pbWF0ZSIsInNjcm9sbExlZnQiLCJwcmVMb2NhdGlvbiIsImN1cnJlbnRMb2NhdGlvbiIsInNldEN1cnJlbnRMb2NhdGlvbiIsInNldEN1cnJlbnRBcmVhIiwic2V0U2hvd1NldHRpbmciLCJzaG93TmV3U2NyZWVuIiwic2V0U2hvd05ld1NjcmVlbiIsInNlbGVjdGVkU2NyZWVuIiwic2V0U2VsZWN0U2NyZWVuIiwiaXNSZWZyZXNoIiwic2V0SXNSZWZyZXNoIiwic2V0U3VjY2VzcyIsImhhbmRsZUNoYW5nZUxvY2F0aW9uIiwiaGFuZGxlUmVmcmVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdDdXJyZW50TG9jYXRpb24iLCJTZXR0aW5nIiwiTmV3U2NyZWVuTGF5b3V0IiwiU2NyZWVuRGV0YWlsc0xheW91dCIsIkxvY2F0aW9uU2V0dGluZyIsImFkZEFyZWEiLCJsb2NhdGlvbkRhdGEiLCJzZXRMb2NhdGlvbkRhdGEiLCJzZXROYW1lIiwic2V0QWRkcmVzcyIsInNob3dOZXdBcmVhIiwic2V0U2hvd05ld0FyZWEiLCJuZXdBcmVhIiwic2V0TmV3QXJlYSIsImRlbGV0ZUFyZWFJZCIsInNldERlbGV0ZUFyZWFJZCIsImxvYWRpbmdEcmFnSXRlbXMiLCJzZXRMb2FkaW5nRHJhZ0l0ZW1zIiwiZGF0YUNoYW5nZWQiLCJzZXREYXRhQ2hhbmdlZCIsImhhbmRsZUNyZWF0ZUFyZWEiLCJoYW5kbGVEZWxldGVBcmVhIiwiaGFuZGxlTG9hZERyYWdJdGVtIiwibmV3QXJlYXMiLCJsb2FkQWxsIiwiZm9yRWFjaCIsIm5ld0RhdGEiLCJkZXNjcmlwdGlvbiIsIlFyUmVhZGVyIiwiZHluYW1pYyIsInNzciIsIlNjYW5RUiIsInNldFJlc3VsdCIsInNlbmRDb2RlIiwiaGFuZGxlU2NhbiIsImpzb25EYXRhIiwicGFyc2UiLCJkZXZpY2VDb2RlIiwiZGV2aWNlVHlwZSIsImRldmljZU5hbWUiLCJkZXZpY2VJcCIsImRldmljZU9TIiwiYXBwVmVyc2lvbiIsImhhbmRsZVNjYW5OZXdTY3JlZW4iLCJoYW5kbGVFcnJvciIsIk1hbnVhbElucHV0IiwicG9zaXRpb24iLCJpbnB1dENvZGUiLCJTY3JlZW5EZXRhaWxzIiwiaXNOZXciLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwicmVzZXREZXZpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsInNjcmVlbktleSIsInZhbCIsImhhbmRsZUlucHV0Rm9jdXNPdXQiLCJjb2RlIiwiaW5mb0FyciIsIkFkdmVydGlzZXJTY3JlZW5JdGVtcyIsImFyZWFOYW1lIiwic2VsZWN0U2NyZWVuIiwic2NyZWVucyIsInNldFNjcmVlbnMiLCJsaW5lIiwibG9hZGVyIiwic2xpY2UiLCJzZXRWaWRlb3MiLCJkZXRhaWxzVmlkZW8iLCJzZXREZXRhaWxzVmlkZW8iLCJzaG93TmV3Iiwic2V0U2hvd05ldyIsInNob3dEZXRhaWxzIiwic2V0U2hvd0RldGFpbHMiLCJzaG93Q29uZmlybURlbGV0ZSIsInNldFNob3dDb25maXJtRGVsZXRlIiwic2V0RGF0YUNoYW5nZSIsImhhbmRsZURlbGV0ZSIsImxvYWRWaWRlb3MiLCJ0aW1lb3V0IiwiY2hhbmdlZCIsInJlbWFpbmVyIiwiVmlkZW9EZXRhaWxzIiwiZGVsZXRlRGF0YSIsInZpZGVvRGF0YSIsImRhdGFTdGF0ZSIsInNldERhdGFTdGF0ZSIsImhhbmRsZU5ld0RhdGEiLCJoYW5kbGVVcGxvYWRWaWRlbyIsInRhZyIsIlN1YkxheW91dCIsInRva2VuIiwiY29va2llVXRpbCIsImlzRG9uZSIsInJlYXNvbiIsImVycm9yTWVzc2FnZSIsInNpZ25PdXQiLCJBZHZlcnRpc2VyU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJBZHZlcnRpc2VyU3RvcmVQcm92aWRlciIsInNldEF1dGgiLCJzZXRMb2NhdGlvbnMiLCJpbmZvIiwicHJldmlvdXMiLCJzb3J0IiwicHJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbGxTY3JlZW5zRGF0YSIsImF1dGhUb2tlbiIsIndpbmRvdyIsInN0ciIsInVwRmlyc3RDaGFyIiwicmVtb3ZlQ2FtZWwiLCJyZW1vdmVTbmFrZSIsInJlcGxhY2UiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsInRpbWUiLCJzaG93SG91cnMiLCJzdGF0dXNDb2RlIiwiZXJyb3JDb2RlIiwiZXJyb3JTdGF0dXMiLCJzZXRUaW1lb3V0IiwiQ29va2llVXRpbCIsImZpZWxkIiwic2V0Q29va2llIiwibWF4QWdlIiwiZGVzdHJveUNvb2tpZSIsImdldENvb2tpZSIsInBhcnNlQ29va2llcyIsIiQiLCJSZXN0Q2xpZW50IiwiY29uc3RydWN0b3IiLCJkb21haW4iLCJkZWZhdWx0Q29udGVudFR5cGUiLCJzZXREb21haW4iLCJzZXRUb2tlbiIsImNyZWF0ZUhlYWRlcnMiLCJvcHRpb25zIiwiY29udGVudFR5cGUiLCJjcmVhdGVBcGkiLCJxdWVyeSIsImlzRW1wdHkiLCJpc05pbCIsInF1ZXJ5U3RyaW5nIiwiYXN5bmNHZXQiLCJoZWFkZXJzIiwiYXN5bmNQb3N0IiwiYXN5bmNQdXQiLCJhc3luY0RlbGV0ZSIsImFzeW5jQWxsIiwicmVxdWVzdHMiLCJyZXEiLCJtZXRob2QiLCJyZXNwb25zZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFDdkMsc0JBQ0UsOERBQUMsaUdBQUQ7QUFBQSwyQkFDRSw4REFBQywwRUFBRDtBQUFBLDZCQUNFLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBR2UsTUFBTUMsbUJBQU4sQ0FBMEI7QUFDdkMsZUFBYUMsd0JBQWIsR0FBd0M7QUFDdEMsV0FBT0MsZ0VBQUEsQ0FDSywwQkFETCxFQUVKQyxJQUZJLENBRUMsQ0FBQztBQUFFQyxZQUFGO0FBQVVDO0FBQVYsS0FBRCxLQUFzQjtBQUMxQixhQUFPQywyRUFBdUIsQ0FBQ0YsTUFBRCxFQUFTQyxJQUFULENBQTlCO0FBQ0QsS0FKSSxFQUtKRSxLQUxJLENBS0dDLEdBQUQsSUFBUztBQUNkLGFBQU9GLDJFQUF1QixDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVVFLEdBQVYsQ0FBOUI7QUFDRCxLQVBJLENBQVA7QUFRRDs7QUFFRCxlQUFhQyxNQUFiLENBQW9CQyxLQUFwQixFQUFtQ0MsR0FBbkMsRUFBZ0Q7QUFDOUMsV0FBT1QsaUVBQUEsQ0FDTSwwQkFETixFQUNrQztBQUFFUSxXQUFGO0FBQVNFLGNBQVEsRUFBRUQ7QUFBbkIsS0FEbEMsRUFFSlIsSUFGSSxDQUVDLENBQUM7QUFBRUMsWUFBRjtBQUFVQztBQUFWLEtBQUQsS0FBc0I7QUFDMUIsYUFBT0MsMkVBQXVCLENBQUNGLE1BQUQsRUFBU0MsSUFBVCxDQUE5QjtBQUNELEtBSkksRUFLSkUsS0FMSSxDQUtHQyxHQUFELElBQVM7QUFDZCxhQUFPRiwyRUFBdUIsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVRSxHQUFWLENBQTlCO0FBQ0QsS0FQSSxDQUFQO0FBUUQsR0FyQnNDLENBc0J2Qzs7O0FBRUEsZUFBYUssWUFBYixHQUE0QjtBQUMxQixXQUFPWCxnRUFBQSxDQUNLLHNCQURMLEVBRUpDLElBRkksQ0FFQyxDQUFDO0FBQUVDLFlBQUY7QUFBVUM7QUFBVixLQUFELEtBQXNCO0FBQzFCLGFBQU9DLDJFQUF1QixDQUFDRixNQUFELEVBQVNDLElBQVQsQ0FBOUI7QUFDRCxLQUpJLEVBS0pFLEtBTEksQ0FLR0MsR0FBRCxJQUFTO0FBQ2QsYUFBT0YsMkVBQXVCLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVUUsR0FBVixDQUE5QjtBQUNELEtBUEksQ0FBUDtBQVFEOztBQUNELGVBQWFNLGNBQWIsQ0FBNEJDLEVBQTVCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUNwQyxRQUFJQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsT0FBTixJQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNILElBQWQsYUFBY0EsSUFBZCx1QkFBY0EsSUFBSSxDQUFFQyxPQUFwQixFQUE2QkcsTUFBN0IsSUFBdUMsQ0FBNUQsRUFBK0QsT0FBT0osSUFBSSxDQUFDQyxPQUFaO0FBQy9ELFdBQU9mLGdFQUFBLENBQXFCLHdCQUF1QmEsRUFBRyxFQUEvQyxFQUFrREMsSUFBbEQsRUFBd0RULEtBQXhELENBQThEQyxHQUFHLEtBQUs7QUFBQ2EsV0FBSyxFQUFFYixHQUFHLENBQUNjO0FBQVosS0FBTCxDQUFqRSxDQUFQO0FBQ0Q7O0FBRUQsZUFBYUMsVUFBYixDQUF3QkMsVUFBeEIsRUFBb0NSLElBQXBDLEVBQTBDO0FBQ3hDLFdBQU9kLGlFQUFBLENBQXNCLHdCQUF1QnNCLFVBQVcsT0FBeEQsRUFBZ0VSLElBQWhFLEVBQXNFVCxLQUF0RSxDQUE0RUMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBL0UsQ0FBUDtBQUNEOztBQUVELGVBQWFHLGFBQWIsQ0FBMkJDLE1BQTNCLEVBQW1DO0FBQ2pDLFdBQU94QixnRUFBQSxDQUNNLDZCQUE0QndCLE1BQU8sU0FEekMsRUFFSnZCLElBRkksQ0FFQyxDQUFDO0FBQUVDLFlBQUY7QUFBVUM7QUFBVixLQUFELEtBQXNCO0FBQzFCLGFBQU9DLDJFQUF1QixDQUFDRixNQUFELEVBQVNDLElBQVQsQ0FBOUI7QUFDRCxLQUpJLEVBS0pFLEtBTEksQ0FLR0MsR0FBRCxJQUFTO0FBQ2QsYUFBT0YsMkVBQXVCLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVUUsR0FBVixDQUE5QjtBQUNELEtBUEksQ0FBUDtBQVFEOztBQUNELGVBQWFtQixVQUFiLENBQXdCWixFQUF4QixFQUE0QjtBQUMxQixXQUFPYixtRUFBQSxDQUF3Qiw2QkFBNEJhLEVBQUcsRUFBdkQsRUFBMERSLEtBQTFELENBQWdFQyxHQUFHLEtBQUs7QUFBQ2EsV0FBSyxFQUFFYixHQUFHLENBQUNjO0FBQVosS0FBTCxDQUFuRSxDQUFQO0FBQ0Q7O0FBQ0QsZUFBYU0sVUFBYixDQUF3QmIsRUFBeEIsRUFBNEJDLElBQTVCLEVBQWtDO0FBQ2hDLFdBQU9kLGdFQUFBLENBQXFCLDZCQUE0QmEsRUFBRyxFQUFwRCxFQUF1REMsSUFBdkQsRUFBNkRULEtBQTdELENBQW1FQyxHQUFHLEtBQUs7QUFBQ2EsV0FBSyxFQUFFYixHQUFHLENBQUNjO0FBQVosS0FBTCxDQUF0RSxDQUFQO0FBQ0QsR0ExRHNDLENBMkR2Qzs7O0FBRUEsZUFBYU8sWUFBYixDQUEwQkgsTUFBMUIsRUFBa0NWLElBQWxDLEVBQXdDO0FBQ3RDLFdBQU9kLGlFQUFBLENBQXNCLDZCQUE0QndCLE1BQU8sU0FBekQsRUFBbUVWLElBQW5FLEVBQXlFVCxLQUF6RSxDQUErRUMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBbEYsQ0FBUDtBQUNEOztBQUVELGVBQWFRLFNBQWIsQ0FBdUJmLEVBQXZCLEVBQTJCO0FBQ3pCLFdBQU9iLGdFQUFBLENBQ00sc0JBQXFCYSxFQUFHLEVBRDlCLEVBRUpaLElBRkksQ0FFQyxDQUFDO0FBQUVDLFlBQUY7QUFBVUM7QUFBVixLQUFELEtBQXNCO0FBQzFCLGFBQU9DLDJFQUF1QixDQUFDRixNQUFELEVBQVNDLElBQVQsQ0FBOUI7QUFDRCxLQUpJLEVBS0pFLEtBTEksQ0FLR0MsR0FBRCxJQUFTO0FBQ2QsYUFBT0YsMkVBQXVCLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVUUsR0FBVixDQUE5QjtBQUNELEtBUEksQ0FBUDtBQVFEOztBQUNELGVBQWF1QixZQUFiLENBQTBCaEIsRUFBMUIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQ2xDLFdBQU9kLGdFQUFBLENBQ00sc0JBQXFCYSxFQUFHLEVBRDlCLEVBQ2lDQyxJQURqQyxFQUVKYixJQUZJLENBRUMsQ0FBQztBQUFFQyxZQUFGO0FBQVVDO0FBQVYsS0FBRCxLQUFzQjtBQUMxQixhQUFPQywyRUFBdUIsQ0FBQ0YsTUFBRCxFQUFTQyxJQUFULENBQTlCO0FBQ0QsS0FKSSxFQUtKRSxLQUxJLENBS0dDLEdBQUQsSUFBUztBQUNkLGFBQU9GLDJFQUF1QixDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVVFLEdBQVYsQ0FBOUI7QUFDRCxLQVBJLENBQVA7QUFRRDs7QUFDRCxlQUFhd0IsWUFBYixDQUEwQmpCLEVBQTFCLEVBQThCO0FBQzVCLFdBQU9iLGlFQUFBLENBQXNCLHNCQUFxQmEsRUFBRyxFQUE5QyxFQUFpRFIsS0FBakQsQ0FBdURDLEdBQUcsS0FBSztBQUFDYSxXQUFLLEVBQUViLEdBQUcsQ0FBQ2M7QUFBWixLQUFMLENBQTFELENBQVA7QUFDRCxHQXZGc0MsQ0F3RnpDOzs7QUFFRSxlQUFhVyxZQUFiLEdBQTRCO0FBQzFCO0FBQ0EsV0FBTy9CLGdFQUFBLENBQ00sdUJBRE4sRUFFSkMsSUFGSSxDQUVDLENBQUM7QUFBRUMsWUFBRjtBQUFVQztBQUFWLEtBQUQsS0FBc0I7QUFDMUIsYUFBT0MsMkVBQXVCLENBQUNGLE1BQUQsRUFBU0MsSUFBVCxDQUE5QjtBQUNELEtBSkksRUFLSkUsS0FMSSxDQUtHQyxHQUFELElBQVM7QUFDZCxhQUFPRiwyRUFBdUIsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVRSxHQUFWLENBQTlCO0FBQ0QsS0FQSSxDQUFQO0FBUUQ7O0FBQ0QsZUFBYTBCLGNBQWIsQ0FBNEJsQixJQUE1QixFQUFrQztBQUNoQyxXQUFPZCxpRUFBQSxDQUFzQix1QkFBdEIsRUFBOENjLElBQTlDLEVBQW9EVCxLQUFwRCxDQUEwREMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBN0QsQ0FBUDtBQUNEOztBQUNELGVBQWFhLGNBQWIsQ0FBNEJwQixFQUE1QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEMsV0FBT2QsZ0VBQUEsQ0FBcUIsd0JBQXVCYSxFQUFHLEVBQS9DLEVBQWtEQyxJQUFsRCxFQUF3RFQsS0FBeEQsQ0FBOERDLEdBQUcsS0FBSztBQUFDYSxXQUFLLEVBQUViLEdBQUcsQ0FBQ2M7QUFBWixLQUFMLENBQWpFLENBQVA7QUFDRDs7QUFDRCxlQUFhYyxXQUFiLENBQXlCckIsRUFBekIsRUFBNkI7QUFDM0IsV0FBT2IsZ0VBQUEsQ0FBcUIsd0JBQXVCYSxFQUFHLEVBQS9DLEVBQWtEUixLQUFsRCxDQUF3REMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBM0QsQ0FBUDtBQUNELEdBN0dzQyxDQThHekM7OztBQUVFLGVBQWFlLGlCQUFiLENBQStCdEIsRUFBL0IsRUFBbUM7QUFDakMsV0FBT2IsZ0VBQUEsQ0FBcUIsd0JBQXVCYSxFQUFHLFVBQS9DLEVBQTBEUixLQUExRCxDQUFnRUMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBbkUsQ0FBUDtBQUNEOztBQUNELGVBQWFnQixtQkFBYixDQUFpQ3ZCLEVBQWpDLEVBQXFDO0FBQ25DLFdBQU9iLGdFQUFBLENBQXFCLHdCQUF1QmEsRUFBRyxXQUEvQyxFQUEyRFIsS0FBM0QsQ0FBaUVDLEdBQUcsS0FBSztBQUFDYSxXQUFLLEVBQUViLEdBQUcsQ0FBQ2M7QUFBWixLQUFMLENBQXBFLENBQVA7QUFDRDs7QUFDRCxlQUFhaUIsc0JBQWIsQ0FBb0N4QixFQUFwQyxFQUF3Q0MsSUFBeEMsRUFBOEM7QUFDNUMsV0FBT2QsZ0VBQUEsQ0FBcUIsd0JBQXVCYSxFQUFHLFdBQS9DLEVBQTJEQyxJQUEzRCxFQUFpRVQsS0FBakUsQ0FBdUVDLEdBQUcsS0FBSztBQUFDYSxXQUFLLEVBQUViLEdBQUcsQ0FBQ2M7QUFBWixLQUFMLENBQTFFLENBQVA7QUFDRDs7QUFDRCxlQUFha0IsaUNBQWIsQ0FBK0N6QixFQUEvQyxFQUFtRDtBQUNqRCxXQUFPYixnRUFBQSxDQUFxQix3QkFBdUJhLEVBQUcsMkJBQS9DLEVBQTJFUixLQUEzRSxDQUFpRkMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBcEYsQ0FBUDtBQUNEOztBQUNELGVBQWFtQixvQ0FBYixDQUFrRDFCLEVBQWxELEVBQXNEQyxJQUF0RCxFQUE0RDtBQUMxRCxXQUFPZCxnRUFBQSxDQUFxQix3QkFBdUJhLEVBQUcsMkJBQS9DLEVBQTJFQyxJQUEzRSxFQUFpRlQsS0FBakYsQ0FBdUZDLEdBQUcsS0FBSztBQUFDYSxXQUFLLEVBQUViLEdBQUcsQ0FBQ2M7QUFBWixLQUFMLENBQTFGLENBQVA7QUFDRDs7QUFDRCxlQUFhb0IsaUJBQWIsQ0FBK0JDLFVBQS9CLEVBQTJDM0IsSUFBM0MsRUFBaUQ7QUFDL0MsV0FBT2QsZ0VBQUEsQ0FBcUIsdUJBQXNCeUMsVUFBVyxRQUF0RCxFQUErRDNCLElBQS9ELEVBQXFFVCxLQUFyRSxDQUEyRUMsR0FBRyxLQUFLO0FBQUNhLFdBQUssRUFBRWIsR0FBRyxDQUFDYztBQUFaLEtBQUwsQ0FBOUUsQ0FBUDtBQUNELEdBaklzQyxDQWtJekM7OztBQUNFLGVBQWFzQixTQUFiLENBQXVCNUIsSUFBdkIsRUFBNkI7QUFDM0IsV0FBT2QsaUVBQUEsQ0FBc0Isb0JBQXRCLEVBQTJDYyxJQUEzQyxFQUFpRFQsS0FBakQsQ0FBdURDLEdBQUcsS0FBSztBQUFDYSxXQUFLLEVBQUViLEdBQUcsQ0FBQ2M7QUFBWixLQUFMLENBQTFELENBQVA7QUFDRDs7QUFDRCxlQUFhdUIsU0FBYixHQUF5QjtBQUN2QjtBQUNBLFdBQU8zQyxnRUFBQSxDQUFxQixvQkFBckIsRUFBMENLLEtBQTFDLENBQWdEQyxHQUFHLEtBQUs7QUFBQ2EsV0FBSyxFQUFFYixHQUFHLENBQUNjO0FBQVosS0FBTCxDQUFuRCxDQUFQO0FBQ0QsR0F6SXNDLENBMEl2QztBQUNBO0FBQ0E7OztBQUNBLGVBQWF3QixXQUFiLENBQXlCL0IsRUFBekIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLFdBQU9kLGdFQUFBLENBQXFCLHFCQUFvQmEsRUFBRyxFQUE1QyxFQUErQ0MsSUFBL0MsRUFBcURULEtBQXJELENBQTJEQyxHQUFHLEtBQUs7QUFBQ2EsV0FBSyxFQUFFYixHQUFHLENBQUNjO0FBQVosS0FBTCxDQUE5RCxDQUFQO0FBQ0Q7O0FBQ0QsZUFBYXlCLFdBQWIsQ0FBeUJoQyxFQUF6QixFQUE2QjtBQUMzQixXQUFPYixtRUFBQSxDQUF3QixxQkFBb0JhLEVBQUcsRUFBL0MsRUFBa0RSLEtBQWxELENBQXdEQyxHQUFHLEtBQUs7QUFBQ2EsV0FBSyxFQUFFYixHQUFHLENBQUNjO0FBQVosS0FBTCxDQUEzRCxDQUFQO0FBQ0Q7O0FBbEpzQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0p6QztBQUNBLE1BQU0wQixVQUFVLEdBQUksbUNBQWtDQyxXQUF3QyxTQUE5Rjs7QUFHQSxTQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUM1QixRQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBRCxVQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JILElBQXhCO0FBQ0FDLFVBQVEsQ0FBQ0UsTUFBVCxDQUFnQixlQUFoQixFQUFpQyxVQUFqQztBQUNBLFNBQU9GLFFBQVA7QUFDRDs7QUFDYyxNQUFNRyxhQUFOLENBQW9CO0FBQ2pDLGVBQWFDLFdBQWIsQ0FBeUJuRCxJQUF6QixFQUEyRDtBQUN6RDtBQUNBO0FBQ0EsVUFBTW9ELEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFXVixVQUFYLEVBQXVCRSxjQUFjLENBQUM3QyxJQUFELENBQXJDLENBQWxCO0FBQ0EsUUFBSW9ELEdBQUcsSUFBSUEsR0FBRyxDQUFDckQsTUFBSixJQUFjLEdBQXpCLEVBQThCLE9BQU9xRCxHQUFHLENBQUNwRCxJQUFYO0FBQy9COztBQU5nQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWbkM7QUFDQTtBQUVBO0FBRU8sSUFBS3NELG1CQUFaOztXQUFZQSxtQjtBQUFBQSxxQjtBQUFBQSxxQjtHQUFBQSxtQixLQUFBQSxtQjs7QUFLTCxJQUFLQyxtQkFBWjs7V0FBWUEsbUI7QUFBQUEscUI7QUFBQUEscUI7R0FBQUEsbUIsS0FBQUEsbUI7O0FBS0wsSUFBS0Msc0JBQVo7O1dBQVlBLHNCO0FBQUFBLHdCO0FBQUFBLHdCO0FBQUFBLHdCO0dBQUFBLHNCLEtBQUFBLHNCOztBQW1CWixNQUFNQyxnQkFBZ0IsR0FBRyxDQUN2QkMsSUFBeUIsR0FBR0gsbUJBQW1CLENBQUNJLEdBRHpCLEtBRXBCO0FBQ0gsVUFBUUQsSUFBUjtBQUNFLFNBQUtILG1CQUFtQixDQUFDSSxHQUF6QjtBQUNFLGFBQU9DLGdFQUFQOztBQUNGLFNBQUtMLG1CQUFtQixDQUFDTSxJQUF6QjtBQUNFLGFBQU9ELGlFQUFQOztBQUNGO0FBQ0UsYUFBTyxJQUFQO0FBTko7QUFRRCxDQVhEOztBQWFBLE1BQU1FLG1CQUFtQixHQUFHLENBQzFCQyxPQUErQixHQUFHUCxzQkFBc0IsQ0FBQ1EsT0FEL0IsS0FFdkI7QUFDSCxVQUFRRCxPQUFSO0FBQ0UsU0FBS1Asc0JBQXNCLENBQUNRLE9BQTVCO0FBQ0UsYUFBT0osb0VBQVA7O0FBQ0YsU0FBS0osc0JBQXNCLENBQUNTLE9BQTVCO0FBQ0UsYUFBT0wsb0VBQVA7O0FBQ0Y7QUFDRSxhQUFPLElBQVA7QUFOSjtBQVFELENBWEQ7O0FBYUEsTUFBTU0sZ0JBQWdCLEdBQUcsQ0FDdkJDLElBQXlCLEdBQUdiLG1CQUFtQixDQUFDYyxLQUR6QixLQUVwQjtBQUNILFVBQVFELElBQVI7QUFDRSxTQUFLYixtQkFBbUIsQ0FBQ2MsS0FBekI7QUFDRSxhQUFPUixrRUFBUDs7QUFDRixTQUFLTixtQkFBbUIsQ0FBQ2UsS0FBekI7QUFDRSxhQUFPVCxrRUFBUDs7QUFDRjtBQUNFLGFBQU8sSUFBUDtBQU5KO0FBUUQsQ0FYRDs7QUFhTyxTQUFTVSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QixRQUFNO0FBQ0pDLFFBREk7QUFFSkMsU0FGSTtBQUdKQyxXQUhJO0FBSUpYLFdBSkk7QUFLSlksV0FMSTtBQU1KQyxRQU5JO0FBT0pDLFNBUEk7QUFRSkMsU0FSSTtBQVNKQztBQVRJLE1BVUZSLEtBVko7QUFXQSxzQkFDRSw4REFBQyxtREFBRDtBQUNFLFNBQUssRUFBRU8sS0FEVDtBQUVFLFdBQU8sRUFBRUosT0FGWDtBQUdFLFdBQU8sRUFBRVgsT0FBTyxJQUFJLE9BSHRCO0FBSUUsWUFBUSxFQUFFZ0IsU0FKWjtBQUtFLGFBQVMsRUFBRztBQUNsQixVQUFVbkIsa0VBQWE7QUFDdkIsVUFBVWUsT0FBTyxHQUFHZixvRUFBSCxHQUFvQixFQUFHO0FBQ3hDLFVBQVVnQixJQUFJLEdBQUdoQixvRUFBSCxHQUFvQixFQUFHO0FBQ3JDLFVBQVVpQixLQUFLLEdBQUdqQixxRUFBSCxHQUFxQixFQUFHO0FBQ3ZDLE9BVkk7QUFBQSxlQVlHWSxJQVpILEVBYUdPLFNBQVMsZ0JBQUc7QUFBTSxlQUFTLEVBQUVuQixvRUFBakI7QUFBQSx5Q0FBd0MsOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILEdBQTZEYSxLQWJ6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtBQUVjLFNBQVNPLGFBQVQsQ0FBdUI7QUFDcENiLE1BRG9DO0FBRXBDVCxNQUZvQztBQUdwQ0ssU0FIb0M7QUFJcENrQixXQUpvQztBQUtwQ0gsT0FMb0M7QUFNcENJLG1CQU5vQztBQU9wQ0MsZUFQb0M7QUFRcENDLFVBUm9DO0FBU3BDVixTQVRvQztBQVVwQ1c7QUFWb0MsQ0FBdkIsRUFXUTtBQUNyQixzQkFDRTtBQUNFLGFBQVMsRUFBRyxHQUFFekIsbUVBQWMsSUFBR0gsZ0JBQWdCLENBQUNDLElBQUQsQ0FBaEIsSUFBMEIsRUFBRyxJQUMxREksbUJBQW1CLENBQUNDLE9BQUQsQ0FBbkIsSUFBZ0MsRUFDakMsSUFBR0csZ0JBQWdCLENBQUNDLElBQUQsQ0FBaEIsSUFBMEIsRUFBRyxJQUFHa0IsUUFBUSxHQUFHekIscUVBQUgsR0FBcUIsRUFBRyxJQUNsRXFCLFNBQVMsSUFBSSxFQUNkLEVBTEg7QUFNRSxTQUFLLEVBQUVILEtBTlQ7QUFPRSxXQUFPLEVBQUVKLE9BUFg7QUFBQSxjQVNHVTtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEO0FBQ00sTUFBTUUsSUFBSSxHQUFHLE1BQU07QUFDeEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxNQUFJQyxRQUFKO0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkRCxZQUFRLEdBQUdFLFdBQVcsQ0FBQyxNQUFNO0FBQzNCSixhQUFPLENBQUNELElBQUksS0FBSyxDQUFULEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQXpCLENBQVA7QUFDRCxLQUZxQixFQUVuQixHQUZtQixDQUF0QjtBQUdBLFdBQU8sTUFBTTtBQUNYTSxtQkFBYSxDQUFDSCxRQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FQUSxDQUFUO0FBUUEsc0JBQU87QUFBQSxjQUFPSCxJQUFJLEtBQUssQ0FBVCxHQUFhLEVBQWIsR0FBa0IsSUFBSU8sTUFBSixDQUFXUCxJQUFYO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLFNBQVNRLFNBQVQsQ0FBbUJ4QixLQUFuQixFQUEwQjtBQUMvQixNQUFJO0FBQUVFLFNBQUY7QUFBU3VCLFNBQVQ7QUFBZ0JDLGlCQUFoQjtBQUErQkMsY0FBL0I7QUFBMkMxQjtBQUEzQyxNQUFvREQsS0FBeEQ7QUFDQXlCLE9BQUssR0FBR0EsS0FBSyxJQUFJLEVBQWpCO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCWCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTdCLHVFQUFoQjtBQUFBLDRCQUNFO0FBQUEsZ0JBQVFhO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFDRSxjQUFRLEVBQUVGLEtBQUssQ0FBQ2MsUUFEbEI7QUFFRSxXQUFLLEVBQUVXLEtBRlQ7QUFHRSxVQUFJLEVBQUV6QixLQUFLLENBQUNiLElBQU4sSUFBYyxNQUh0QjtBQUlFLGNBQVEsRUFBRzJDLENBQUQsSUFBTztBQUNmRCxtQkFBVyxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU04sS0FBVCxLQUFtQkEsS0FBcEIsQ0FBWDtBQUNBQyxxQkFBYSxDQUFDSSxDQUFELENBQWI7QUFDRCxPQVBIO0FBUUUsWUFBTSxFQUFFLE1BQU1ILFVBQVUsQ0FBQ0MsUUFBRDtBQVIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFZRTtBQUFNLGVBQVMsRUFBRXZDLGtFQUFqQjtBQUFBLGdCQUErQlk7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEO0FBUU0sU0FBUytCLFVBQVQsQ0FBb0JoQyxLQUFwQixFQUE0QztBQUNqRCxRQUFNO0FBQUVFLFNBQUY7QUFBUytCLGFBQVQ7QUFBb0IxRixVQUFwQjtBQUE0QjJGO0FBQTVCLE1BQXlDbEMsS0FBL0M7QUFDQSxRQUFNO0FBQUEsT0FBQ21DLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBaUNsQiwrQ0FBUSxDQUFDZSxTQUFTLElBQUksSUFBZCxDQUEvQzs7QUFDQSxXQUFTSSxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQkYsaUJBQWEsQ0FBQ0UsSUFBRCxDQUFiO0FBQ0FKLFlBQVEsQ0FBQ0ksSUFBRCxDQUFSO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVqRCx3RUFBaEI7QUFBQSw0QkFDRTtBQUFBLGdCQUFRYTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQUEsOEJBQ0UsOERBQUMsNERBQUQ7QUFDRSxVQUFFLEVBQUMsZ0JBREw7QUFFRSxpQkFBUyxFQUFFYix1RUFGYjtBQUdFLGdCQUFRLEVBQUVXLEtBQUssQ0FBQ2MsUUFIbEI7QUFBQSxrQkFLR3FCLGFBQWEsSUFBSyxVQUFTakMsS0FBTTtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRSw4REFBQywwREFBRDtBQUFlLGlCQUFTLEVBQUViLGtFQUExQjtBQUFBLGtCQUNHOUMsTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVnRyxHQUFSLENBQVksQ0FBQ2QsS0FBRCxFQUFRZSxDQUFSLEtBQWM7QUFDekIsOEJBQ0UsOERBQUMsMERBQUQ7QUFBdUIsbUJBQU8sRUFBRSxNQUFNSCxZQUFZLENBQUNaLEtBQUQsQ0FBbEQ7QUFBQSxzQkFDR0E7QUFESCxhQUFvQmUsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUtELFNBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7QUFDTSxTQUFTQyxlQUFULENBQXlCekMsS0FBekIsRUFBaUQ7QUFDdEQsUUFBTTtBQUFFRSxTQUFGO0FBQVMrQixhQUFUO0FBQW9CMUYsVUFBcEI7QUFBNEIyRixZQUE1QjtBQUFzQ3BCO0FBQXRDLE1BQW1EZCxLQUF6RDtBQUNBLFFBQU07QUFBQSxPQUFDbUMsYUFBRDtBQUFBLE9BQWdCTztBQUFoQixNQUFrQ3hCLCtDQUFRLENBQVFlLFNBQVMsSUFBSSxFQUFyQixDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDVSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQjFCLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDMkIsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBOEI1QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNNkIsTUFBTSxHQUFHO0FBQUVDLFFBQUksRUFBRUw7QUFBUixHQUFmOztBQUNBLFFBQU1NLGdCQUFnQixHQUFJWCxJQUFELElBQVU7QUFDakNNLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQSxRQUFJTSxZQUFZLENBQUNaLElBQUQsQ0FBaEIsRUFBd0JhLFVBQVUsQ0FBQ2IsSUFBRCxDQUFWLENBQXhCLEtBQ0tjLE9BQU8sQ0FBQ2QsSUFBRCxDQUFQO0FBQ04sR0FKRDs7QUFLQSxXQUFTYSxVQUFULENBQW9CYixJQUFwQixFQUEwQjtBQUN4Qkksa0JBQWMsQ0FBQ1AsYUFBYSxDQUFDa0IsTUFBZCxDQUFzQnZCLENBQUQsSUFBT0EsQ0FBQyxLQUFLUSxJQUFsQyxDQUFELENBQWQ7QUFDRDs7QUFDRCxXQUFTYyxPQUFULENBQWlCZCxJQUFqQixFQUF1QjtBQUNyQkksa0JBQWMsQ0FBQyxDQUFDLEdBQUdQLGFBQUosRUFBbUJHLElBQW5CLENBQUQsQ0FBZDtBQUNEOztBQUNELFdBQVNnQixhQUFULEdBQXlCO0FBQ3ZCLFFBQUluQixhQUFKLGFBQUlBLGFBQUosZUFBSUEsYUFBYSxDQUFFM0YsTUFBbkIsRUFBMkIsT0FBTyxlQUFQLENBQTNCLEtBQ0ssT0FBTyxRQUFQO0FBQ047O0FBQ0QsV0FBUzBHLFlBQVQsQ0FBc0JaLElBQXRCLEVBQTRCO0FBQzFCLFdBQU9ILGFBQVAsYUFBT0EsYUFBUCx1QkFBT0EsYUFBYSxDQUFFb0IsUUFBZixDQUF3QmpCLElBQXhCLENBQVA7QUFDRDs7QUFFRCxXQUFTa0IsVUFBVCxHQUFzQjtBQUNwQlosZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBVixZQUFRLENBQUNDLGFBQUQsQ0FBUjtBQUNEOztBQUVELFdBQVNzQixlQUFULENBQXlCaEMsS0FBekIsRUFBZ0M7QUFDOUJxQixnQkFBWSxDQUFDckIsS0FBRCxDQUFaO0FBQ0FpQixrQkFBYyxDQUFDakIsS0FBSyxHQUFHbEYsTUFBSCxHQUFZLEVBQWxCLENBQWQ7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRThDLHdFQUFoQjtBQUFBLDRCQUNFO0FBQUEsZ0JBQVFhO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMscURBQUQsa0NBQ002QyxNQUROO0FBQUEsOEJBR0UsOERBQUMsNERBQUQ7QUFDRSxVQUFFLEVBQUMsZ0JBREw7QUFFRSxpQkFBUyxFQUFFMUQsdUVBRmI7QUFHRSxnQkFBUSxFQUFFeUIsUUFIWjtBQUlFLGVBQU8sRUFBRSxNQUFNOEIsV0FBVyxDQUFDLENBQUNELFFBQUYsQ0FKNUI7QUFBQSxrQkFNR1csYUFBYTtBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFZRSw4REFBQywwREFBRDtBQUFlLFVBQUUsRUFBQyxlQUFsQjtBQUFrQyxpQkFBUyxFQUFFakUsa0VBQTdDO0FBQUEsbUJBRUksQ0FBQTlDLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFQyxNQUFSLElBQWlCLENBQWpCLGlCQUFzQiw4REFBQyxtREFBRDtBQUFRLGVBQUssRUFBRTtBQUFFa0gsaUJBQUssRUFBRTtBQUFULFdBQWY7QUFBa0MsaUJBQU8sRUFBRWIsV0FBVyxHQUFHLG1CQUFILEdBQXlCLFdBQS9FO0FBQTRGLGlCQUFPLEVBQUUsTUFBTVksZUFBZSxDQUFDLENBQUNaLFdBQUYsQ0FBMUg7QUFBQSxxQkFBMklBLFdBQVcsR0FBRyxVQUFILEdBQWdCLFFBQXRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGMUIsRUFJR3RHLE1BSkgsYUFJR0EsTUFKSCx1QkFJR0EsTUFBTSxDQUFFZ0csR0FBUixDQUFZLENBQUNkLEtBQUQsRUFBUWUsQ0FBUixLQUFjO0FBQ3pCLDhCQUNFLDhEQUFDLDBEQUFEO0FBQ0UsY0FBRSxFQUFDLGVBREw7QUFHRSxxQkFBUyxFQUFHLEdBQUVuRCxzRUFBZ0IsSUFBRzZELFlBQVksQ0FBQ3pCLEtBQUQsQ0FBWixHQUFzQnBDLHNFQUF0QixHQUF3QyxFQUN0RSxFQUpMO0FBS0UsbUJBQU8sRUFBRSxNQUFNO0FBQ2I0RCw4QkFBZ0IsQ0FBQ3hCLEtBQUQsQ0FBaEI7QUFDRCxhQVBIO0FBQUEsdUJBU0dBLEtBVEgsRUFVR3lCLFlBQVksQ0FBQ3pCLEtBQUQsQ0FBWixpQkFDQyw4REFBQyx5Q0FBRDtBQUFRLGtCQUFJLEVBQUMsNkJBQWI7QUFBMkMsbUJBQUssRUFBRTtBQUFFa0MsMEJBQVUsRUFBRTtBQUFkO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEo7QUFBQSxhQUVPbkIsQ0FBQyxDQUFDb0IsUUFBRixFQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFnQkQsU0FqQkEsQ0FKSCxlQXNCRSw4REFBQyxtREFBRDtBQUFRLGVBQUssRUFBRTtBQUFFRixpQkFBSyxFQUFFO0FBQVQsV0FBZjtBQUFrQyxpQkFBTyxFQUFDLFNBQTFDO0FBQW9ELGlCQUFPLEVBQUVGLFVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDtBQUNNLFNBQVNLLGNBQVQsT0FBa0U7QUFBQSxNQUExQztBQUFFM0QsU0FBRjtBQUFTK0IsYUFBVDtBQUFvQkM7QUFBcEIsR0FBMEM7QUFBQSxNQUFUbEMsS0FBUzs7QUFDdkUsUUFBTThELGFBQWEsR0FBSUMsSUFBRCxJQUFXQSxJQUFJLEdBQUdDLDZDQUFNLENBQUNELElBQUQsQ0FBTixDQUFhRSxNQUFiLENBQW9CLE9BQXBCLENBQUgsR0FBa0MsSUFBdkU7O0FBQ0EsUUFBTXhJLElBQUksR0FBR3dHLFNBQVMsR0FBRyxJQUFJaUMsSUFBSixDQUFTakMsU0FBVCxDQUFILEdBQXlCLElBQS9DO0FBQ0EsUUFBTTtBQUFBLE9BQUM4QixJQUFEO0FBQUEsT0FBT0k7QUFBUCxNQUFrQmpELCtDQUFRLENBQUN6RixJQUFELENBQWhDO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUU0RCx3RUFBaEI7QUFBQSw0QkFDRTtBQUFBLGdCQUFRYTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFHLEdBQUViLHVFQUFpQixJQUFHQSxpRkFBMkIsRUFBbEU7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUNFLGlCQUFTLEVBQUVBLHdFQURiO0FBRUUseUJBQWlCLEVBQUVBLHNFQUZyQjtBQUdFLGdCQUFRLEVBQUUwRSxJQUhaO0FBSUUsc0JBQWMsTUFKaEI7QUFLRSxrQkFBVSxFQUFDLE9BTGI7QUFNRSxxQkFBYSxFQUFFLEVBTmpCO0FBT0UsbUJBQVcsRUFBQyxNQVBkO0FBUUUsa0JBQVUsRUFBQyxzQkFSYjtBQVNFLGtDQUEwQixNQVQ1QjtBQVVFLDJCQUFtQixFQUFFLEtBVnZCO0FBV0UsZ0JBQVEsRUFBR0ssTUFBRCxJQUFZO0FBQ3BCRCxpQkFBTyxDQUFDQyxNQUFELENBQVA7QUFDQWxDLGtCQUFRLENBQUM4Qiw2Q0FBTSxDQUFDSSxNQUFELENBQU4sQ0FBZUgsTUFBZixFQUFELENBQVI7QUFDRDtBQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlCRSw4REFBQyx5Q0FBRDtBQUFRLGlCQUFTLEVBQUU1RSwwRUFBbkI7QUFBd0MsWUFBSSxFQUFDLFVBQTdDO0FBQXdELFNBQUMsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztBQUNELE1BQU1nRixjQUFjLEdBQUcsbUJBQ3JCLDhEQUFDLDhEQUFEO0FBQWUsU0FBTyxFQUFDLFlBQXZCO0FBQUEsMEJBRUU7QUFBTSxLQUFDLEVBQUMsR0FBUjtBQUFZLEtBQUMsRUFBQyxHQUFkO0FBQWtCLE1BQUUsRUFBQyxHQUFyQjtBQUF5QixNQUFFLEVBQUMsR0FBNUI7QUFBZ0MsU0FBSyxFQUFDLElBQXRDO0FBQTJDLFVBQU0sRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFNLEtBQUMsRUFBQyxJQUFSO0FBQWEsS0FBQyxFQUFDLElBQWY7QUFBb0IsTUFBRSxFQUFDLEdBQXZCO0FBQTJCLE1BQUUsRUFBQyxHQUE5QjtBQUFrQyxTQUFLLEVBQUMsS0FBeEM7QUFBOEMsVUFBTSxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQU0sS0FBQyxFQUFDLElBQVI7QUFBYSxLQUFDLEVBQUMsSUFBZjtBQUFvQixNQUFFLEVBQUMsR0FBdkI7QUFBMkIsTUFBRSxFQUFDLEdBQTlCO0FBQWtDLFNBQUssRUFBQyxLQUF4QztBQUE4QyxVQUFNLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVFPLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRTlELFdBQUY7QUFBYStELFVBQWI7QUFBdUIxRDtBQUF2QixDQUF0QixFQUF5RDtBQUM5RCxzQkFDRTtBQUFLLGFBQVMsRUFBRyxHQUFFeEIsMEVBQW9CLElBQUdtQixTQUFTLEdBQUduQixxRUFBSCxHQUFvQixFQUFHLEVBQTFFO0FBQUEsY0FDR21CLFNBQVMsZ0JBQUcsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQ1I7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVuQixzRUFBaEI7QUFBQSxnQ0FDRSw4REFBQyx5Q0FBRDtBQUFRLGNBQUksRUFBQyxNQUFiO0FBQW9CLFlBQUUsRUFBQyxNQUF2QjtBQUE4QixXQUFDLEVBQUMsTUFBaEM7QUFBdUMsV0FBQyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR3dCLFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSw4REFBQyx5Q0FBRDtBQUFRLFlBQUksRUFBQyxjQUFiO0FBQTRCLFVBQUUsRUFBQyxLQUEvQjtBQUFxQyxTQUFDLEVBQUMsTUFBdkM7QUFBOEMsZUFBTyxFQUFFMEQsUUFBdkQ7QUFDRSxpQkFBUyxFQUFFbEYsa0VBQVdZO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEO0FBRU0sU0FBU3VFLGVBQVQsQ0FBeUI7QUFBRUMsT0FBRjtBQUFTdkM7QUFBVCxDQUF6QixFQUE4QztBQUNuRCxRQUFNO0FBQUEsT0FBQ3dDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDekQsK0NBQVEsQ0FBQ3VELEtBQUQsQ0FBOUM7QUFDQXJELGtEQUFTLENBQUMsTUFBTTtBQUNkdUQsa0JBQWMsQ0FBQ0YsS0FBRCxDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUOztBQUdBLFFBQU1HLFlBQVksR0FBSUMsY0FBRCxLQUFxQixDQUN4QztBQUR3QyxHQUFyQixDQUFyQjs7QUFHQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsVUFBRCxFQUFhQyxjQUFiO0FBQ25CQyxjQUFVLEVBQUU7QUFETyxLQUVoQkQsY0FGZ0IsQ0FBckI7O0FBSUEsUUFBTUUsT0FBTyxHQUFHLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQkMsUUFBbkIsS0FBZ0M7QUFDOUMsVUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0wsSUFBWCxDQUFmO0FBQ0EsVUFBTSxDQUFDTSxPQUFELElBQVlILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjTixVQUFkLEVBQTBCLENBQTFCLENBQWxCO0FBQ0FFLFVBQU0sQ0FBQ0ksTUFBUCxDQUFjTCxRQUFkLEVBQXdCLENBQXhCLEVBQTJCSSxPQUEzQjtBQUVBLFdBQU9ILE1BQVA7QUFDRCxHQU5EOztBQU9BLFdBQVNLLFNBQVQsQ0FBbUJMLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0EsUUFBSSxDQUFDQSxNQUFNLENBQUNNLFdBQVosRUFBeUI7QUFFekIsVUFBTW5CLEtBQVUsR0FBR1MsT0FBTyxDQUN4QlIsV0FEd0IsRUFFeEJZLE1BQU0sQ0FBQ08sTUFBUCxDQUFjQyxLQUZVLEVBR3hCUixNQUFNLENBQUNNLFdBQVAsQ0FBbUJFLEtBSEssQ0FBMUI7QUFLQW5CLGtCQUFjLENBQUNGLEtBQUQsQ0FBZDtBQUNBdkMsWUFBUSxDQUFDdUMsS0FBRCxDQUFSO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBaUIsYUFBUyxFQUFFa0IsU0FBNUI7QUFBQSwyQkFDRSw4REFBQywwREFBRDtBQUFXLGlCQUFXLEVBQUMsV0FBdkI7QUFBQSxnQkFDRyxDQUFDSSxRQUFELEVBQVdDLFFBQVgsa0JBQ0MscUdBQ01ELFFBQVEsQ0FBQ0UsY0FEZjtBQUVFLFdBQUcsRUFBRUYsUUFBUSxDQUFDRyxRQUZoQjtBQUdFLGFBQUssRUFBRXRCLFlBQVksQ0FBQ29CLFFBQVEsQ0FBQ25CLGNBQVYsQ0FIckI7QUFBQSxtQkFLR0gsV0FMSCxhQUtHQSxXQUxILHVCQUtHQSxXQUFXLENBQUVuQyxHQUFiLENBQWlCLENBQUNELElBQUQsRUFBT3dELEtBQVAsa0JBQ2hCLDhEQUFDLDBEQUFEO0FBQXlCLHFCQUFXLEVBQUV4RCxJQUFJLENBQUNuRyxFQUEzQztBQUErQyxlQUFLLEVBQUUySixLQUF0RDtBQUFBLG9CQUNHLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxrQkFDQztBQUNFLGVBQUcsRUFBRUQsUUFBUSxDQUFDRztBQURoQixhQUVNSCxRQUFRLENBQUNJLGNBRmYsR0FHTUosUUFBUSxDQUFDSyxlQUhmO0FBSUUsaUJBQUssRUFBRXRCLFlBQVksQ0FDakJrQixRQUFRLENBQUNqQixVQURRLEVBRWpCZ0IsUUFBUSxDQUFDSSxjQUFULENBQXdCNUYsS0FGUCxDQUpyQjtBQUFBLHNCQVNHK0IsSUFBSSxDQUFDK0Q7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosV0FBZ0IvRCxJQUFJLENBQUNuRyxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELENBTEgsRUFzQkc0SixRQUFRLENBQUNPLFdBdEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7QUFFYyxTQUFTQyxNQUFULENBQWdCdkcsS0FBaEIsRUFBdUI7QUFDcEMsUUFBTTtBQUNKd0csVUFESTtBQUVKcEssUUFGSTtBQUdKcUssVUFISTtBQUlKQyxPQUpJO0FBS0pDLFlBTEk7QUFNSkMsVUFOSTtBQU9KQyxXQVBJO0FBUUpDLGFBUkk7QUFTSkM7QUFUSSxNQVVGL0csS0FWSjtBQVdBLHNCQUNFO0FBQ0UsYUFBUyxFQUFHO0FBQ2xCLFVBQVVYLGtFQUFZO0FBQ3RCLFVBQVVxSCxHQUFHLEdBQUdySCxpRUFBSCxHQUFnQixFQUFHO0FBQ2hDLFVBQVV5SCxTQUFTLEdBQUd6SCx1RUFBSCxHQUFzQixFQUFHO0FBQzVDLFVBQVV1SCxNQUFNLEdBQUd2SCxvRUFBSCxHQUFtQixFQUFHO0FBQ3RDLFVBQVV3SCxPQUFPLEdBQUd4SCxxRUFBSCxHQUFvQixFQUFHO0FBQ3hDLE9BUEk7QUFBQSxjQVNHMEgsT0FBTyxnQkFDTjtBQUFLLGVBQVMsRUFBRTFILHlFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLDZDQUFEO0FBQWdCLFlBQUksRUFBRTJILHNFQUFnQ0M7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFLTjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRTVILG9FQUFoQjtBQUFBLGtCQUFnQ21IO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHLENBQUNLLE9BQUQsaUJBQ0M7QUFBSyxpQkFBUyxFQUFFeEgscUVBQWhCO0FBQUEsa0JBQWlDbUgsTUFBTSxpQkFBSSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUtFO0FBQUssaUJBQVMsRUFBRyxHQUFFbkgsa0VBQVksSUFBR3NILFFBQVEsR0FBR3RILHNFQUFILEdBQXFCLEVBQUcsRUFBbEU7QUFBQSxrQkFDR2pEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBUUU7QUFBSyxpQkFBUyxFQUFFaUQsb0VBQWhCO0FBQUEsa0JBQWdDb0g7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VEQ7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxZQUFULENBQXNCO0FBQUNoSCxPQUFEO0FBQVFpSCxXQUFSO0FBQW1CbkUsTUFBbkI7QUFBeUJvRTtBQUF6QixDQUF0QixFQUF5RDtBQUN0RSxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCRCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FELGFBQVM7QUFDVjs7QUFDRCxzQkFDRSw4REFBQyxrREFBRDtBQUNFLGFBQVMsRUFBRTlILCtFQURiO0FBRUUsUUFBSSxFQUFFMkQsSUFGUjtBQUdFLFVBQU0sRUFBRSxNQUFNLElBSGhCO0FBQUEsNEJBS0UsOERBQUMseURBQUQ7QUFBQSw2QkFDRSw4REFBQyx3REFBRDtBQUFhLGlCQUFTLEVBQUUzRCxrRUFBeEI7QUFBQSwrQkFBK0NpSSw4REFBVSxDQUFDcEgsS0FBRCxDQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBV0UsOERBQUMseURBQUQ7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUFRLGVBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFPLEVBQUUsTUFBTWtILE9BQU8sQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyxtREFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixlQUFPLEVBQUVDLGNBQW5DO0FBQUEsa0JBQ0dDLDhEQUFVLENBQUNwSCxLQUFELENBQVYsSUFBcUI7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7O0FBRUEsTUFBTXFILFlBQVksR0FBSWhILEtBQUQ7QUFDbkJpSCxXQUFTLEVBQUUsbUJBRFE7QUFFbkJDLFFBQU0sRUFBRTtBQUZXLEdBR2hCbEgsS0FIZ0IsQ0FBckI7O0FBS0EsU0FBU21ILE9BQVQsQ0FBaUIxSCxLQUFqQixFQUF3QjtBQUN0QixzQkFBTztBQUFLLFNBQUssRUFBRXVILFlBQVksQ0FBQ3ZILEtBQUssQ0FBQ08sS0FBUDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCwrREFBZW1ILE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7SUFDT0MsVSxZQUFBQSxVOzs7Ozs7Ozs7QUFBQUEsVTs7Ozs7OztJQUNBQyxTLFlBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsUzs7Ozs7OztJQUNBQyxRLFlBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxROzs7Ozs7O0lBQ0FDLFUsWUFBQUEsVTs7Ozs7Ozs7OztBQUFBQSxVOzs7Ozs7O0lBQ0FDLGMsWUFBQUEsYzs7Ozs7Ozs7Ozs7OztBQUFBQSxjOzs7Ozs7O0lBQ0FDLFMsWUFBQUEsUzs7Ozs7Ozs7O0FBQUFBLFM7Ozs7Ozs7SUFDQUMsYSxZQUFBQSxhOzs7Ozs7Ozs7Ozs7OztBQUFBQSxhOzs7Ozs7O0lBQ0FDLE0sWUFBQUEsTTs7Ozs7Ozs7OztBQUFBQSxNOzs7Ozs7O0lBQ0FDLFUsWUFBQUEsVTs7Ozs7Ozs7Ozs7QUFBQUEsVTs7Ozs7OztJQUNBQyxhLFlBQUFBLGE7Ozs7Ozs7Ozs7O0FBQUFBLGE7Ozs7Ozs7SUFDQUMsYyxZQUFBQSxjOzs7Ozs7Ozs7OztBQUFBQSxjOzs7Ozs7O0lBQ0FDLFEsWUFBQUEsUTs7Ozs7Ozs7Ozs7QUFBQUEsUTs7Ozs7OztJQUNBQyxZLFlBQUFBLFk7Ozs7Ozs7OztBQUFBQSxZOzs7Ozs7O0lBQ0FDLFMsWUFBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxTOzs7Ozs7O0lBQ0FDLGEsWUFBQUEsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxhOzs7Ozs7O0lBQ0FDLGlCLFlBQUFBLGlCOzs7Ozs7Ozs7OztBQUFBQSxpQjs7Ozs7OztJQUNBQyxZLFlBQUFBLFk7Ozs7Ozs7Ozs7QUFBQUEsWTs7Ozs7OztJQUNBQyxVLFlBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsVTs7Ozs7OztJQUNBQyxjLFlBQUFBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsYzs7Ozs7OztJQUNBQyxrQixZQUFBQSxrQjs7Ozs7Ozs7Ozs7QUFBQUEsa0I7Ozs7Ozs7SUFDQUMsVyxZQUFBQSxXOzs7Ozs7Ozs7Ozs7OztBQUFBQSxXOzs7Ozs7O0lBQ0FDLGUsWUFBQUEsZTs7Ozs7Ozs7Ozs7QUFBQUEsZTs7Ozs7OztJQUNBQyxhLFlBQUFBLGE7Ozs7Ozs7Ozs7QUFBQUEsYTs7Ozs7OztJQUNBQyxjLFlBQUFBLGM7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvYWR2ZXJ0aXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZHZlcnRpc2VyRW50cmFuY2UgZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sYXlvdXQvYWR2ZXJ0aXNlci9lbnRyYW5jZVwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlclBhZ2VDb250ZW50IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VyU3RvcmVQcm92aWRlciBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUucHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmVydGlzZXJQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWR2ZXJ0aXNlclN0b3JlUHJvdmlkZXI+XHJcbiAgICAgIDxBZHZlcnRpc2VyRW50cmFuY2U+XHJcbiAgICAgICAgPEFkdmVydGlzZXJQYWdlQ29udGVudCAvPlxyXG4gICAgICA8L0FkdmVydGlzZXJFbnRyYW5jZT5cclxuICAgIDwvQWR2ZXJ0aXNlclN0b3JlUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzdGFuZGFyZFNlcnZpY2VSZXNwb25zZSB9IGZyb20gXCIuLi91dGlscy9jb21tb24udXRpbFwiO1xyXG5pbXBvcnQgcmVzdENsaWVudCBmcm9tIFwiLi4vdXRpbHMvcmVzdC1jbGllbnRcIjtcclxuaW1wb3J0IE1vY2tBcGlDYW1wYWlnbiwgeyBNb2NrQ1ZpZGVvcyB9IGZyb20gXCIuL21vY2stYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZHZlcnRpc2VyQXBpQ2xpZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0QWR2ZXJ0aXNlckluZm9ybWF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnRcclxuICAgICAgLmFzeW5jR2V0KFwiL2FkdmVydGlzZXIvYXV0aC9wcm9maWxlXCIpXHJcbiAgICAgIC50aGVuKCh7IHN0YXR1cywgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKHN0YXR1cywgZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKDEsIG51bGwsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHNpZ25JbihlbWFpbDogc3RyaW5nLCBwd2Q6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnRcclxuICAgICAgLmFzeW5jUG9zdChcIi9hZHZlcnRpc2VyL2F1dGgvc2lnbi1pblwiLCB7IGVtYWlsLCBwYXNzd29yZDogcHdkIH0pXHJcbiAgICAgIC50aGVuKCh7IHN0YXR1cywgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKHN0YXR1cywgZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKDEsIG51bGwsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExvY2F0aW9uICYgQXJlYSBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldExvY2F0aW9ucygpIHtcclxuICAgIHJldHVybiByZXN0Q2xpZW50XHJcbiAgICAgIC5hc3luY0dldChcIi9hZHZlcnRpc2VyL2xvY2F0aW9uXCIpXHJcbiAgICAgIC50aGVuKCh7IHN0YXR1cywgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKHN0YXR1cywgZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKDEsIG51bGwsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlTG9jYXRpb24oaWQsIGJvZHkpIHtcclxuICAgIGlmIChib2R5Py5hZGRyZXNzICYmIE9iamVjdC52YWx1ZXMoYm9keT8uYWRkcmVzcykubGVuZ3RoID09IDApIGRlbGV0ZSBib2R5LmFkZHJlc3NcclxuICAgIHJldHVybiByZXN0Q2xpZW50LmFzeW5jUHV0KGAvYWR2ZXJ0aXNlci9sb2NhdGlvbi8ke2lkfWAsIGJvZHkpLmNhdGNoKGVyciA9PiAoe2Vycm9yOiBlcnIucmVzcG9uc2V9KSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVBcmVhKGxvY2F0aW9uSWQsIGJvZHkpIHtcclxuICAgIHJldHVybiByZXN0Q2xpZW50LmFzeW5jUG9zdChgL2FkdmVydGlzZXIvbG9jYXRpb24vJHtsb2NhdGlvbklkfS9hcmVhYCwgYm9keSkuY2F0Y2goZXJyID0+ICh7ZXJyb3I6IGVyci5yZXNwb25zZX0pKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEFyZWFTY3JlZW4oYXJlYUlkKSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudFxyXG4gICAgICAuYXN5bmNHZXQoYC9hZHZlcnRpc2VyL2xvY2F0aW9uL2FyZWEvJHthcmVhSWR9L3NjcmVlbmApXHJcbiAgICAgIC50aGVuKCh7IHN0YXR1cywgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKHN0YXR1cywgZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkU2VydmljZVJlc3BvbnNlKDEsIG51bGwsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgYXN5bmMgZGVsZXRlQXJlYShpZCkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNEZWxldGUoYC9hZHZlcnRpc2VyL2xvY2F0aW9uL2FyZWEvJHtpZH1gKS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVBcmVhKGlkLCBib2R5KSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudC5hc3luY1B1dChgL2FkdmVydGlzZXIvbG9jYXRpb24vYXJlYS8ke2lkfWAsIGJvZHkpLmNhdGNoKGVyciA9PiAoe2Vycm9yOiBlcnIucmVzcG9uc2V9KSlcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTcmVlbiBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVNjcmVlbihhcmVhSWQsIGJvZHkpIHtcclxuICAgIHJldHVybiByZXN0Q2xpZW50LmFzeW5jUG9zdChgL2FkdmVydGlzZXIvbG9jYXRpb24vYXJlYS8ke2FyZWFJZH0vc2NyZWVuYCwgYm9keSkuY2F0Y2goZXJyID0+ICh7ZXJyb3I6IGVyci5yZXNwb25zZX0pKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFNjcmVlbihpZCkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnRcclxuICAgICAgLmFzeW5jR2V0KGAvYWR2ZXJ0aXNlci9zY3JlZW4vJHtpZH1gKVxyXG4gICAgICAudGhlbigoeyBzdGF0dXMsIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGFuZGFyZFNlcnZpY2VSZXNwb25zZShzdGF0dXMsIGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGFuZGFyZFNlcnZpY2VSZXNwb25zZSgxLCBudWxsLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVNjcmVlbihpZCwgYm9keSkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnRcclxuICAgICAgLmFzeW5jUHV0KGAvYWR2ZXJ0aXNlci9zY3JlZW4vJHtpZH1gLCBib2R5KVxyXG4gICAgICAudGhlbigoeyBzdGF0dXMsIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGFuZGFyZFNlcnZpY2VSZXNwb25zZShzdGF0dXMsIGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGFuZGFyZFNlcnZpY2VSZXNwb25zZSgxLCBudWxsLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIGRlbGV0ZVNjcmVlbihpZCkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNQb3N0KGAvYWR2ZXJ0aXNlci9zY3JlZW4vJHtpZH1gKS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDQU1QQUlHTlMgQVBJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYW1wYWlnbnMoKSB7XHJcbiAgICAvLyByZXR1cm4gYXdhaXQgTW9ja0FwaUNhbXBhaWduKClcclxuICAgIHJldHVybiByZXN0Q2xpZW50XHJcbiAgICAgIC5hc3luY0dldChgL2FkdmVydGlzZXIvY2FtcGFpZ24vYClcclxuICAgICAgLnRoZW4oKHsgc3RhdHVzLCBkYXRhIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhbmRhcmRTZXJ2aWNlUmVzcG9uc2Uoc3RhdHVzLCBkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhbmRhcmRTZXJ2aWNlUmVzcG9uc2UoMSwgbnVsbCwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVDYW1wYWlnbihib2R5KSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudC5hc3luY1Bvc3QoYC9hZHZlcnRpc2VyL2NhbXBhaWduL2AsIGJvZHkpLmNhdGNoKGVyciA9PiAoe2Vycm9yOiBlcnIucmVzcG9uc2V9KSlcclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUNhbXBhaWduKGlkLCBib2R5KSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudC5hc3luY1B1dChgL2FkdmVydGlzZXIvY2FtcGFpZ24vJHtpZH1gLCBib2R5KS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYW1wYWlnbihpZCkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNHZXQoYC9hZHZlcnRpc2VyL2NhbXBhaWduLyR7aWR9YCkuY2F0Y2goZXJyID0+ICh7ZXJyb3I6IGVyci5yZXNwb25zZX0pKVxyXG4gIH1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENBTVBBSUdOUyBBRFMtU0VUIEFQSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYW1wYWlnbkFkc1NldChpZCkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNHZXQoYC9hZHZlcnRpc2VyL2NhbXBhaWduLyR7aWR9L2Fkcy1zZXRgKS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYW1wYWlnblNjaGVkdWxlKGlkKSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudC5hc3luY0dldChgL2FkdmVydGlzZXIvY2FtcGFpZ24vJHtpZH0vc2NoZWR1bGVgKS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVDYW1wYWlnblNjaGVkdWxlKGlkLCBib2R5KSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudC5hc3luY1B1dChgL2FkdmVydGlzZXIvY2FtcGFpZ24vJHtpZH0vc2NoZWR1bGVgLCBib2R5KS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYW1wYWlnblRhcmdldFNjcmVlbkNvbmRpdGlvbnMoaWQpIHtcclxuICAgIHJldHVybiByZXN0Q2xpZW50LmFzeW5jR2V0KGAvYWR2ZXJ0aXNlci9jYW1wYWlnbi8ke2lkfS90YXJnZXQtc2NyZWVuLWNvbmRpdGlvbnNgKS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVDYW1wYWlnblRhcmdldFNjcmVlbkNvbmRpdGlvbnMoaWQsIGJvZHkpIHtcclxuICAgIHJldHVybiByZXN0Q2xpZW50LmFzeW5jUHV0KGAvYWR2ZXJ0aXNlci9jYW1wYWlnbi8ke2lkfS90YXJnZXQtc2NyZWVuLWNvbmRpdGlvbnNgLCBib2R5KS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVBZHNTZXRNZWRpYShhZHNfc2V0X2lkLCBib2R5KSB7XHJcbiAgICByZXR1cm4gcmVzdENsaWVudC5hc3luY1B1dChgL2FkdmVydGlzZXIvYWRzLXNldC8ke2Fkc19zZXRfaWR9L21lZGlhYCwgYm9keSkuY2F0Y2goZXJyID0+ICh7ZXJyb3I6IGVyci5yZXNwb25zZX0pKVxyXG4gIH1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBWSURFT1MgQVBJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyBhc3luYyBwb3N0VmlkZW8oYm9keSkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNQb3N0KGAvYWR2ZXJ0aXNlci92aWRlby9gLCBib2R5KS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgfVxyXG4gIHN0YXRpYyBhc3luYyBnZXRWaWRlb3MoKSB7XHJcbiAgICAvLyByZXR1cm4gYXdhaXQgTW9ja0NWaWRlb3MoKVxyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNHZXQoYC9hZHZlcnRpc2VyL3ZpZGVvL2ApLmNhdGNoKGVyciA9PiAoe2Vycm9yOiBlcnIucmVzcG9uc2V9KSlcclxuICB9XHJcbiAgLy8gc3RhdGljIGFzeW5jIGdldFZpZGVvKGlkKSB7XHJcbiAgLy8gICByZXR1cm4gcmVzdENsaWVudC5hc3luY0dldChgL2FkdmVydGlzZXIvdmlkZW8vJHtpZH1gKS5jYXRjaChlcnIgPT4gKHtlcnJvcjogZXJyLnJlc3BvbnNlfSkpXHJcbiAgLy8gfVxyXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVWaWRlbyhpZCwgYm9keSkge1xyXG4gICAgcmV0dXJuIHJlc3RDbGllbnQuYXN5bmNQdXQoYC9hZHZlcnRpc2VyL3ZpZGVvLyR7aWR9YCwgYm9keSkuY2F0Y2goZXJyID0+ICh7ZXJyb3I6IGVyci5yZXNwb25zZX0pKVxyXG4gIH1cclxuICBzdGF0aWMgYXN5bmMgZGVsZXRlVmlkZW8oaWQpIHtcclxuICAgIHJldHVybiByZXN0Q2xpZW50LmFzeW5jRGVsZXRlKGAvYWR2ZXJ0aXNlci92aWRlby8ke2lkfWApLmNhdGNoKGVyciA9PiAoe2Vycm9yOiBlcnIucmVzcG9uc2V9KSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBVUExPQURfVVJMID0gYGh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTE9VRElOQVJZX05BTUV9L3VwbG9hZGBcclxuaW1wb3J0IHtNb2NrQ2xvdWRpbmFyeVZpZGVvfSBmcm9tIFwiLi9tb2NrLWFwaVwiO1xyXG5pbXBvcnQgeyBWaWRlb1Jlc3BvbnNlRGF0YSB9IGZyb20gXCIuL3R5cGVzL2Nsb3VkaW5hcnktcmVzcG9uc2VcIjtcclxuZnVuY3Rpb24gY3JlYXRlRm9ybURhdGEoZmlsZSkge1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiaDBiMXpneTRcIik7XHJcbiAgcmV0dXJuIGZvcm1EYXRhXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWRpbmFyeUFwaSB7XHJcbiAgc3RhdGljIGFzeW5jIHVwbG9hZFZpZGVvKGRhdGEpOiBQcm9taXNlPFZpZGVvUmVzcG9uc2VEYXRhPiB7XHJcbiAgICAvLyBjb25zdCBtb2NrOiBhbnkgPSBNb2NrQ2xvdWRpbmFyeVZpZGVvKClcclxuICAgIC8vIHJldHVybiBtb2NrXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFVQTE9BRF9VUkwsIGNyZWF0ZUZvcm1EYXRhKGRhdGEpKVxyXG4gICAgaWYgKHJlcyAmJiByZXMuc3RhdHVzID09IDIwMCkgcmV0dXJuIHJlcy5kYXRhXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBwYXJzZVRpdGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi51dGlsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBRFNMSVZFX0JVVFRPTl9TSVpFIHtcclxuICBMQVJHRSA9IFwibGFyZ2VcIixcclxuICBTTUFMTCA9IFwic21hbGxcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQURTTElWRV9CVVRUT05fVFlQRSB7XHJcbiAgRklUID0gXCJmaXRcIixcclxuICBGVUxMID0gXCJmdWxsXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFEU0xJVkVfQlVUVE9OX1ZBUklBTlQge1xyXG4gIFBSSU1BUlkgPSBcInByaW1hcnlcIixcclxuICBST1VOREVSID0gXCJyb3VuZGVyXCIsXHJcbiAgU0VDT05EQVJZID0gXCJzZWNvbmRhcnlcIixcclxufVxyXG5cclxudHlwZSBBRFNMSVZFQnV0dG9uUHJvcHMgPSB7XHJcbiAgc2l6ZT86IEFEU0xJVkVfQlVUVE9OX1NJWkU7XHJcbiAgdHlwZT86IEFEU0xJVkVfQlVUVE9OX1RZUEU7XHJcbiAgdmFyaWFudD86IEFEU0xJVkVfQlVUVE9OX1ZBUklBTlQ7XHJcbiAgY2xhc3NOYW1lPzogYW55O1xyXG4gIHN0eWxlPzogYW55O1xyXG4gIGRpc2FibGVkQ2xhc3NOYW1lPzogYW55O1xyXG4gIGRpc2FibGVkU3R5bGU/OiBhbnk7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogYW55O1xyXG4gIG9uQ2xpY2s/OiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUeXBlQ2xhc3NOYW1lID0gKFxyXG4gIHR5cGU6IEFEU0xJVkVfQlVUVE9OX1RZUEUgPSBBRFNMSVZFX0JVVFRPTl9UWVBFLkZJVFxyXG4pID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgQURTTElWRV9CVVRUT05fVFlQRS5GSVQ6XHJcbiAgICAgIHJldHVybiBzdHlsZXMuZml0O1xyXG4gICAgY2FzZSBBRFNMSVZFX0JVVFRPTl9UWVBFLkZVTEw6XHJcbiAgICAgIHJldHVybiBzdHlsZXMuZnVsbDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFZhcmlhbnRDbGFzc05hbWUgPSAoXHJcbiAgdmFyaWFudDogQURTTElWRV9CVVRUT05fVkFSSUFOVCA9IEFEU0xJVkVfQlVUVE9OX1ZBUklBTlQuUFJJTUFSWVxyXG4pID0+IHtcclxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcclxuICAgIGNhc2UgQURTTElWRV9CVVRUT05fVkFSSUFOVC5QUklNQVJZOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLnByaW1hcnk7XHJcbiAgICBjYXNlIEFEU0xJVkVfQlVUVE9OX1ZBUklBTlQuUk9VTkRFUjpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5yb3VuZGVyO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0U2l6ZUNsYXNzTmFtZSA9IChcclxuICBzaXplOiBBRFNMSVZFX0JVVFRPTl9TSVpFID0gQURTTElWRV9CVVRUT05fU0laRS5MQVJHRVxyXG4pID0+IHtcclxuICBzd2l0Y2ggKHNpemUpIHtcclxuICAgIGNhc2UgQURTTElWRV9CVVRUT05fU0laRS5MQVJHRTpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5sYXJnZTtcclxuICAgIGNhc2UgQURTTElWRV9CVVRUT05fU0laRS5TTUFMTDpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5zbWFsbDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZEJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGljb24sXHJcbiAgICB0aXRsZSxcclxuICAgIG9uQ2xpY2ssXHJcbiAgICB2YXJpYW50LFxyXG4gICAgY2FyZEJ0bixcclxuICAgIGRhc2gsXHJcbiAgICBnaG9zdCxcclxuICAgIHN0eWxlLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIHZhcmlhbnQ9e3ZhcmlhbnQgfHwgXCJsaWdodFwifVxyXG4gICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAke3N0eWxlcy5hZEJ0bn1cclxuICAgICAgICAke2NhcmRCdG4gPyBzdHlsZXMuY2FyZEJ0biA6IFwiXCJ9XHJcbiAgICAgICAgJHtkYXNoID8gc3R5bGVzLmRhc2hCdG4gOiBcIlwifVxyXG4gICAgICAgICR7Z2hvc3QgPyBzdHlsZXMuZ2hvc3RCdG4gOiBcIlwifVxyXG4gICAgICBgfVxyXG4gICAgPlxyXG4gICAgICB7aWNvbn1cclxuICAgICAge2lzTG9hZGluZyA/IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkxvYWRpbmc8RG90cyAvPjwvc3Bhbj4gOiB0aXRsZX1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFEU0xJVkVCdXR0b24oe1xyXG4gIHNpemUsXHJcbiAgdHlwZSxcclxuICB2YXJpYW50LFxyXG4gIGNsYXNzTmFtZSxcclxuICBzdHlsZSxcclxuICBkaXNhYmxlZENsYXNzTmFtZSxcclxuICBkaXNhYmxlZFN0eWxlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIG9uQ2xpY2ssXHJcbiAgZGlzYWJsZWQsXHJcbn06IEFEU0xJVkVCdXR0b25Qcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtnZXRUeXBlQ2xhc3NOYW1lKHR5cGUpIHx8IFwiXCJ9ICR7XHJcbiAgICAgICAgZ2V0VmFyaWFudENsYXNzTmFtZSh2YXJpYW50KSB8fCBcIlwiXHJcbiAgICAgIH0gJHtnZXRTaXplQ2xhc3NOYW1lKHNpemUpIHx8IFwiXCJ9ICR7ZGlzYWJsZWQgPyBzdHlsZXMuZGlzYWJsZWQgOiBcIlwifSAke1xyXG4gICAgICAgIGNsYXNzTmFtZSB8fCBcIlwiXHJcbiAgICAgIH1gfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IERvdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RvdHMsIHNldERvdHNdID0gdXNlU3RhdGUoMSk7XHJcbiAgbGV0IGludGVydmFsO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0RG90cyhkb3RzID09PSAzID8gMCA6IGRvdHMgKyAxKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIDxzcGFuPntkb3RzID09PSAwID8gXCJcIiA6IFwiLlwiLnJlcGVhdChkb3RzKX08L3NwYW4+XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIi4uL2RpdmlkZXJcIjtcclxuaW1wb3J0IEFkc2xpdmVJY29uLCB7IEFkSWNvbiwgQURTTElWRV9JQ09OX1ZBUklBTlQgfSBmcm9tIFwiLi4vaWNvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUaW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi51dGlsXCI7XHJcbmltcG9ydCBBZHNsaXZlTG9hZGluZywgeyBBRFNMSVZFX0xPQURJTkdfU0laRSB9IGZyb20gXCIuLi9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICdyZWFjdC1jb250ZW50LWxvYWRlcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkSW5wdXQocHJvcHMpIHtcclxuICBsZXQgeyB0aXRsZSwgdmFsdWUsIG9uSW5wdXRDaGFuZ2UsIG9uRm9jdXNPdXQsIGljb24gfSA9IHByb3BzO1xyXG4gIHZhbHVlID0gdmFsdWUgfHwgXCJcIjtcclxuICBjb25zdCBbaXNDaGFuZ2UsIHNldElzQ2hhbmdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZElucHV0fT5cclxuICAgICAgPGxhYmVsPnt0aXRsZX08L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGUgfHwgXCJ0ZXh0XCJ9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc0NoYW5nZShlLnRhcmdldC52YWx1ZSAhPT0gdmFsdWUpO1xyXG4gICAgICAgICAgb25JbnB1dENoYW5nZShlKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25CbHVyPXsoKSA9PiBvbkZvY3VzT3V0KGlzQ2hhbmdlKX1cclxuICAgICAgLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+e2ljb259PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5pbnRlcmZhY2UgQ2FyZFNlbGVjdElucHV0IHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBpbml0VmFsdWU/OiBzdHJpbmdbXTtcclxuICB2YWx1ZXM6IHN0cmluZ1tdO1xyXG4gIG9uQ2hhbmdlPzogRnVuY3Rpb247XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkU2VsZWN0KHByb3BzOiBDYXJkU2VsZWN0SW5wdXQpIHtcclxuICBjb25zdCB7IHRpdGxlLCBpbml0VmFsdWUsIHZhbHVlcywgb25DaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIG9uU2VsZWN0VmFsdWVdID0gdXNlU3RhdGUoaW5pdFZhbHVlIHx8IG51bGwpO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpdGVtKSB7XHJcbiAgICBvblNlbGVjdFZhbHVlKGl0ZW0pXHJcbiAgICBvbkNoYW5nZShpdGVtKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkU2VsZWN0fT5cclxuICAgICAgPGxhYmVsPnt0aXRsZX08L2xhYmVsPlxyXG4gICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZVxyXG4gICAgICAgICAgaWQ9XCJkcm9wZG93bi1iYXNpY1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RCdG59XHJcbiAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NlbGVjdGVkVmFsdWUgfHwgYFNlbGVjdCAke3RpdGxlfWB9XHJcbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcblxyXG4gICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAge3ZhbHVlcz8ubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aX0gb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KHZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZE11bHRpU2VsZWN0KHByb3BzOiBDYXJkU2VsZWN0SW5wdXQpIHtcclxuICBjb25zdCB7IHRpdGxlLCBpbml0VmFsdWUsIHZhbHVlcywgb25DaGFuZ2UsIGRpc2FibGVkIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0VmFsdWVdID0gdXNlU3RhdGU8YW55W10+KGluaXRWYWx1ZSB8fCBbXSk7XHJcbiAgY29uc3QgW3Nob3dEcm9wLCBzZXRTaG93RHJvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2VsZWN0QWxsLCBzZXRTZWxlY3RBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbmZpZyA9IHsgc2hvdzogc2hvd0Ryb3AgfTtcclxuICBjb25zdCBoYW5kbGVTZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHNldFNob3dEcm9wKHRydWUpO1xyXG4gICAgaWYgKGNoZWNrSW5jbHVkZShpdGVtKSkgcmVtb3ZlSXRlbShpdGVtKTtcclxuICAgIGVsc2UgYWRkSXRlbShpdGVtKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaXRlbSkge1xyXG4gICAgc2V0U2VsZWN0VmFsdWUoc2VsZWN0ZWRWYWx1ZS5maWx0ZXIoKGUpID0+IGUgIT09IGl0ZW0pKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKSB7XHJcbiAgICBzZXRTZWxlY3RWYWx1ZShbLi4uc2VsZWN0ZWRWYWx1ZSwgaXRlbV0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBkaXNwbGF5U2VsZWN0KCkge1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWU/Lmxlbmd0aCkgcmV0dXJuIFwiTXVsdGkgY2hvaWNlc1wiO1xyXG4gICAgZWxzZSByZXR1cm4gXCJTZWxlY3RcIjtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hlY2tJbmNsdWRlKGl0ZW0pIHtcclxuICAgIHJldHVybiBzZWxlY3RlZFZhbHVlPy5pbmNsdWRlcyhpdGVtKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURvbmUoKSB7XHJcbiAgICBzZXRTaG93RHJvcChmYWxzZSlcclxuICAgIG9uQ2hhbmdlKHNlbGVjdGVkVmFsdWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RBbGwodmFsdWUpIHtcclxuICAgIHNldFNlbGVjdEFsbCh2YWx1ZSlcclxuICAgIHNldFNlbGVjdFZhbHVlKHZhbHVlID8gdmFsdWVzIDogW10pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTZWxlY3R9PlxyXG4gICAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XHJcbiAgICAgIDxEcm9wZG93blxyXG4gICAgICAgIHsuLi5jb25maWd9XHJcbiAgICAgID5cclxuICAgICAgICA8RHJvcGRvd24uVG9nZ2xlXHJcbiAgICAgICAgICBpZD1cImRyb3Bkb3duLWJhc2ljXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdEJ0bn1cclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wKCFzaG93RHJvcCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Rpc3BsYXlTZWxlY3QoKX1cclxuICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgPERyb3Bkb3duLk1lbnUgaWQ9XCJkcm9wZG93bi1tZW51XCIgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlcz8ubGVuZ3RoID4gMiAmJiA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gdmFyaWFudD17aXNTZWxlY3RBbGwgPyAnb3V0bGluZS1zZWNvbmRhcnknIDogJ3NlY29uZGFyeSd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdEFsbCghaXNTZWxlY3RBbGwpfT57aXNTZWxlY3RBbGwgPyAnVW5zZWxlY3QnIDogJ1NlbGVjdCd9IEFsbDwvQnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge3ZhbHVlcz8ubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZW51SXRlbX0gJHtjaGVja0luY2x1ZGUodmFsdWUpID8gc3R5bGVzLnNlbGVjdGVkIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0SXRlbSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAge2NoZWNrSW5jbHVkZSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgICAgICAgPEFkSWNvbiBuYW1lPVwiY2hlY2staW4tYS1jaXJjbGUtaGlnaGxpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI2cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlRG9uZX0+RG9uZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgPC9Ecm9wZG93bj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmRTZWxlY3RUaW1lKHsgdGl0bGUsIGluaXRWYWx1ZSwgb25DaGFuZ2UsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCByZXRyaWV2ZUhvdXJzID0gKGRhdGUpID0+IChkYXRlID8gbW9tZW50KGRhdGUpLmZvcm1hdChcIkhIOk1NXCIpIDogbnVsbCk7XHJcbiAgY29uc3QgZGF0YSA9IGluaXRWYWx1ZSA/IG5ldyBEYXRlKGluaXRWYWx1ZSkgOiBudWxsO1xyXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRTZWxlY3R9PlxyXG4gICAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VsZWN0QnRufSAke3N0eWxlcy5kYXRlUGlja2VyQ29udGFpbmVyfWB9PlxyXG4gICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlUGlja2VyfVxyXG4gICAgICAgICAgY2FsZW5kYXJDbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhcn1cclxuICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxyXG4gICAgICAgICAgc2hvd1RpbWVTZWxlY3RcclxuICAgICAgICAgIHRpbWVGb3JtYXQ9XCJISDptbVwiXHJcbiAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXsxNX1cclxuICAgICAgICAgIHRpbWVDYXB0aW9uPVwidGltZVwiXHJcbiAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSBkLCB5eXl5IGg6bW0gYWFcIlxyXG4gICAgICAgICAgZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb25cclxuICAgICAgICAgIHNob3VsZENsb3NlT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhjaGFuZ2UpID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0ZShjaGFuZ2UpO1xyXG4gICAgICAgICAgICBvbkNoYW5nZShtb21lbnQoY2hhbmdlKS5mb3JtYXQoKSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEFkSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhckljb259IG5hbWU9XCJDYWxlbmRhclwiIHc9XCIyMHB4XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmNvbnN0IERyYWdJdGVtTG9hZGVyID0gKCkgPT4gKFxyXG4gIDxDb250ZW50TG9hZGVyIHZpZXdCb3g9XCIwIDAgMzgwIDUwXCI+XHJcbiAgICB7LyogT25seSBTVkcgc2hhcGVzICovfVxyXG4gICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+XHJcbiAgICA8cmVjdCB4PVwiODBcIiB5PVwiMTdcIiByeD1cIjRcIiByeT1cIjRcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjEzXCIgLz5cclxuICAgIDxyZWN0IHg9XCI4MFwiIHk9XCI0MFwiIHJ4PVwiM1wiIHJ5PVwiM1wiIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiMTBcIiAvPlxyXG4gIDwvQ29udGVudExvYWRlcj5cclxuKVxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZERyYWdJdGVtKHsgaXNMb2FkaW5nLCBvbkRlbGV0ZSwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmREcmFnSXRlbX0gJHtpc0xvYWRpbmcgPyBzdHlsZXMubG9hZGluZyA6ICcnfWB9PlxyXG4gICAgICB7aXNMb2FkaW5nID8gPERyYWdJdGVtTG9hZGVyIC8+IDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRJdGVtfT5cclxuICAgICAgICAgICAgPEFkSWNvbiBuYW1lPVwiZHJhZ1wiIG1yPVwiMjBweFwiIGg9XCI0OHB4XCIgdz1cIjE2cHhcIiAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxBZEljb24gbmFtZT1cIm1pbnVzX2NpcmNsZVwiIG1sPVwiNnB4XCIgdz1cIjE2cHhcIiBvbkNsaWNrPXtvbkRlbGV0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmREcmFnV3JhcHBlcih7IGl0ZW1zLCBvbkNoYW5nZSB9KSB7XHJcbiAgY29uc3QgW2l0ZW1zU3RhdHVzLCBzZXRJdGVtc1N0YXR1c10gPSB1c2VTdGF0ZShpdGVtcyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEl0ZW1zU3RhdHVzKGl0ZW1zKTtcclxuICB9LCBbaXRlbXNdKTtcclxuICBjb25zdCBnZXRMaXN0U3R5bGUgPSAoaXNEcmFnZ2luZ092ZXIpID0+ICh7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBpc0RyYWdnaW5nT3ZlciA/IFwiaW5oZXJpdFwiIDogXCJsaWdodGdyZXlcIixcclxuICB9KTtcclxuICBjb25zdCBnZXRJdGVtU3R5bGUgPSAoaXNEcmFnZ2luZywgZHJhZ2dhYmxlU3R5bGUpID0+ICh7XHJcbiAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgIC4uLmRyYWdnYWJsZVN0eWxlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlb3JkZXIgPSAobGlzdCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSByZXN1bHQuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xyXG4gICAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIG9uRHJhZ0VuZChyZXN1bHQpIHtcclxuICAgIC8vIGRyb3BwZWQgb3V0c2lkZSB0aGUgbGlzdFxyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpdGVtczogYW55ID0gcmVvcmRlcihcclxuICAgICAgaXRlbXNTdGF0dXMsXHJcbiAgICAgIHJlc3VsdC5zb3VyY2UuaW5kZXgsXHJcbiAgICAgIHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleFxyXG4gICAgKTtcclxuICAgIHNldEl0ZW1zU3RhdHVzKGl0ZW1zKTtcclxuICAgIG9uQ2hhbmdlKGl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cclxuICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxyXG4gICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgc3R5bGU9e2dldExpc3RTdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nT3Zlcil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtc1N0YXR1cz8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtpdGVtLmlkfSBkcmFnZ2FibGVJZD17aXRlbS5pZH0gaW5kZXg9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtnZXRJdGVtU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdC5pc0RyYWdnaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMuc3R5bGVcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZENhcmQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBib2R5LFxyXG4gICAgZm9vdGVyLFxyXG4gICAgZG90LFxyXG4gICAgZnVsbFZpZXcsXHJcbiAgICB0b2dnbGUsXHJcbiAgICB0b2dnbGVkLFxyXG4gICAgY2xpY2thYmxlLFxyXG4gICAgbG9hZGluZyxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgJHtzdHlsZXMuY2FyZH1cclxuICAgICAgICAke2RvdCA/IHN0eWxlcy5kb3QgOiBcIlwifVxyXG4gICAgICAgICR7Y2xpY2thYmxlID8gc3R5bGVzLmNsaWNrYWJsZSA6IFwiXCJ9XHJcbiAgICAgICAgJHt0b2dnbGUgPyBzdHlsZXMudG9nZ2xlIDogXCJcIn1cclxuICAgICAgICAke3RvZ2dsZWQgPyBzdHlsZXMudG9nZ2xlZCA6IFwiXCJ9XHJcbiAgICAgIGB9XHJcbiAgICA+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ0NhcmR9PlxyXG4gICAgICAgICAgPEFkc2xpdmVMb2FkaW5nIHNpemU9e0FEU0xJVkVfTE9BRElOR19TSVpFLkVYVFJBX1NNQUxMfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L2Rpdj5cclxuICAgICAgICAgIHshdG9nZ2xlZCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0+e2hlYWRlciAmJiA8RGl2aWRlciAvPn08L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvZHl9ICR7ZnVsbFZpZXcgPyBzdHlsZXMuZnVsbFZpZXcgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICB7Ym9keX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9Pntmb290ZXJ9PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBwYXJzZVRpdGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vbi51dGlsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maXJtTW9kYWwoe3RpdGxlLCBvbkV4ZWN1dGUsIHNob3csIHNldFNob3d9KSB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udGludWUoKSB7XHJcbiAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgb25FeGVjdXRlKClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVDYW1wYWluTW9kYWx9XHJcbiAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgIG9uSGlkZT17KCkgPT4gbnVsbH1cclxuICAgID5cclxuICAgICAgPE1vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNvbmZpcm0ge3BhcnNlVGl0bGUodGl0bGUpfTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICBEbyB5b3Ugd2FudCB0byBjb250aW51ZSA/XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XHJcbiAgICAgICAgICBDYW5jZWxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ29udGludWV9PlxyXG4gICAgICAgICAge3BhcnNlVGl0bGUodGl0bGUpIHx8ICdDb250aW51ZSd9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEaXZpZGVyU3R5bGUgPSAoc3R5bGUpID0+ICh7XHJcbiAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNFNkU3RTknLFxyXG4gIGhlaWdodDogJzFweCcsXHJcbiAgLi4uc3R5bGVcclxufSlcclxuZnVuY3Rpb24gRGl2aWRlcihwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IHN0eWxlPXtEaXZpZGVyU3R5bGUocHJvcHMuc3R5bGUpfT48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGl2aWRlcjsiLCJpbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXRoIH0gZnJvbSBcInJhbWRhXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBFeWVPZmZJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvZXllLW9mZi5zdmdcIjtcclxuaW1wb3J0IEV5ZU9uSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL2V5ZS1vbi5zdmdcIjtcclxuaW1wb3J0IFdpZmlJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvd2lmaS5zdmdcIjtcclxuaW1wb3J0IFNjcmVlbkljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9zY3JlZW4uc3ZnXCI7XHJcbmltcG9ydCBTY3JlZW5Cb2xkSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL3NjcmVlbi1ib2xkLnN2Z1wiO1xyXG5pbXBvcnQgVmlkZW9JY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvdmlkZW8uc3ZnXCI7XHJcbmltcG9ydCBWaWRlb0JvbGRJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvdmlkZW8tYm9sZC5zdmdcIjtcclxuaW1wb3J0IEFDSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL2EtYy5zdmdcIjtcclxuaW1wb3J0IEFDQm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9hLWMtYm9sZC5zdmdcIjtcclxuaW1wb3J0IFBhdXNlQm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9wYXVzZS1ib2xkLnN2Z1wiO1xyXG5pbXBvcnQgR29MaXZlQm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9nby1saXZlLWJvbGQuc3ZnXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL3NlbmQuc3ZnXCI7XHJcbmltcG9ydCBTZW5kQm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9zZW5kLWJvbGQuc3ZnXCI7XHJcbmltcG9ydCBBbGVydEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9hbGVydC5zdmdcIjtcclxuaW1wb3J0IEFsZXJ0Qm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9hbGVydC1ib2xkLnN2Z1wiO1xyXG5pbXBvcnQgQXR0ZW50aW9uQm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9hdHRlbnRpb24tYm9sZC5zdmdcIjtcclxuaW1wb3J0IENhbGVuZGFySWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL2NhbGVuZGFyLnN2Z1wiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL3NlYXJjaC5zdmdcIjtcclxuaW1wb3J0IENpcmNsZVBsdXNJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvY2lyY2xlLXBsdXMuc3ZnXCI7XHJcbmltcG9ydCBDaXJjbGVQbHVzQm9sZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9jaXJjbGUtcGx1cy1ib2xkLnN2Z1wiO1xyXG5pbXBvcnQgU2V0dGluZ0ljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29ucy9zZXR0aW5nLnN2Z1wiO1xyXG5pbXBvcnQgU2V0dGluZ0JvbGRJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvc2V0dGluZy1ib2xkLnN2Z1wiO1xyXG5pbXBvcnQgRnVsbExlZnRBcnJvdyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL2Z1bGwtbGVmdC1hcnJvdy5zdmdcIjtcclxuaW1wb3J0IEZ1bGxSaWdodEFycm93IGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvZnVsbC1yaWdodC1hcnJvdy5zdmdcIjtcclxuaW1wb3J0IE1pbnVzQ2lyY2xlIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvbWludXNfY2lyY2xlLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQURTTElWRV9JQ09OX0NPTE9SIHtcclxuICBQUklNQVJZID0gXCJwcmltYXJ5XCIsXHJcbiAgTk9STUFMID0gXCJub3JtYWxcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQURTTElWRV9JQ09OX1RZUEUge1xyXG4gIFJFR1VMQVIgPSBcInJlZ3VsYXJcIixcclxuICBCT0xEID0gXCJib2xkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFEU0xJVkVfSUNPTl9TSVpFIHtcclxuICBMQVJHRSA9IFwibGFyZ2VcIixcclxuICBNRURJVU0gPSBcIm1lZGl1bVwiLFxyXG4gIFNNQUxMID0gXCJzbWFsbFwiLFxyXG4gIEVYVFJBX1NNQUxMID0gXCJleHRyYS1zbWFsbFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBRFNMSVZFX0lDT05fVkFSSUFOVCB7XHJcbiAgU0NSRUVOID0gXCJzY3JlZW5cIixcclxuICBWSURFTyA9IFwidmlkZW9cIixcclxuICBTRU5EID0gXCJzZW5kXCIsXHJcbiAgQV9DID0gXCJhLWNcIixcclxuICBBTEVSVCA9IFwiYWxlcnRcIixcclxuICBBVFRFTlRJT04gPSBcImF0dGVudGlvblwiLFxyXG4gIENJUkNMRV9YID0gXCJjaXJjbGUteFwiLFxyXG4gIENJUkNMRV9QTFVTID0gXCJjaXJjbGUtcGx1c1wiLFxyXG4gIENJUkNMRV9NSU5VUyA9IFwiY2lyY2xlLW1pbnVzXCIsXHJcbiAgU0VBUkNIID0gXCJzZWFyY2hcIixcclxuICBTRVRUSU5HID0gXCJzZXR0aW5nXCIsXHJcbiAgU1FVQVJFX0RPV04gPSBcInNxdWFyZS1kb3duXCIsXHJcbiAgRE9XTiA9IFwiZG93blwiLFxyXG4gIENPREUgPSBcImNvZGVcIixcclxuICBQRU4gPSBcInBlblwiLFxyXG4gIFRSQVNIID0gXCJ0cmFzaFwiLFxyXG4gIEZVTExfTEVGVF9BUlJPVyA9IFwiZnVsbC1sZWZ0LWFycm93XCIsXHJcbiAgRlVMTF9SSUdIVF9BUlJPVyA9IFwiZnVsbC1yaWdodC1hcnJvd1wiLFxyXG4gIFdJRkkgPSBcIndpZmlcIixcclxuICBGSUxURVIgPSBcImZpbHRlclwiLFxyXG4gIFBBVVNFID0gXCJwYXVzZVwiLFxyXG4gIEdPX0xJVkUgPSBcImdvLWxpdmVcIixcclxuICBDQUxFTkRBUiA9IFwiY2FsZW5kYXJcIixcclxuICBFWUVfT04gPSBcImV5ZS1vblwiLFxyXG4gIEVZRV9PRkYgPSBcImV5ZS1vZmZcIixcclxuICBNSU5VU19DSVJDTEUgPSBcIm1pbnVzLWNpcmNsZVwiLFxyXG4gIEluQUNpcmNsZSA9IFwiSW5BQ2lyY2xlXCIsXHJcbn1cclxuXHJcbmNvbnN0IGljb25Db21wb25lbnRzID0ge1xyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5BTEVSVF06IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogQWxlcnRJY29uLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBBbGVydEJvbGRJY29uLFxyXG4gIH0sXHJcbiAgW0FEU0xJVkVfSUNPTl9WQVJJQU5ULkFUVEVOVElPTl06IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogbnVsbCxcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogQXR0ZW50aW9uQm9sZEljb24sXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuQV9DXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBBQ0ljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IEFDQm9sZEljb24sXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuQ0FMRU5EQVJdOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IENhbGVuZGFySWNvbixcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogbnVsbCxcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5DSVJDTEVfTUlOVVNdOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IG51bGwsXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuQ0lSQ0xFX1BMVVNdOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IENpcmNsZVBsdXNJY29uLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBDaXJjbGVQbHVzQm9sZEljb24sXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuQ0lSQ0xFX1hdOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IG51bGwsXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuQ09ERV06IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogbnVsbCxcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogbnVsbCxcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5ET1dOXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBudWxsLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBudWxsLFxyXG4gIH0sXHJcbiAgW0FEU0xJVkVfSUNPTl9WQVJJQU5ULkVZRV9PRkZdOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IEV5ZU9mZkljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuRVlFX09OXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBFeWVPbkljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuRklMVEVSXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBudWxsLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBudWxsLFxyXG4gIH0sXHJcbiAgW0FEU0xJVkVfSUNPTl9WQVJJQU5ULkZVTExfTEVGVF9BUlJPV106IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogRnVsbExlZnRBcnJvdyxcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogRnVsbExlZnRBcnJvdyxcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5GVUxMX1JJR0hUX0FSUk9XXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBGdWxsUmlnaHRBcnJvdyxcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogbnVsbCxcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5HT19MSVZFXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBudWxsLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBHb0xpdmVCb2xkSWNvbixcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5QQVVTRV06IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogbnVsbCxcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogUGF1c2VCb2xkSWNvbixcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5QRU5dOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IG51bGwsXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuU0NSRUVOXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBTY3JlZW5JY29uLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBTY3JlZW5Cb2xkSWNvbixcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5TRUFSQ0hdOiB7XHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuUkVHVUxBUl06IFNlYXJjaEljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuU0VORF06IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogU2VuZEljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IFNlbmRCb2xkSWNvbixcclxuICB9LFxyXG4gIFtBRFNMSVZFX0lDT05fVkFSSUFOVC5TRVRUSU5HXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBTZXR0aW5nSWNvbixcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogU2V0dGluZ0JvbGRJY29uLFxyXG4gIH0sXHJcbiAgW0FEU0xJVkVfSUNPTl9WQVJJQU5ULlNRVUFSRV9ET1dOXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBudWxsLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBudWxsLFxyXG4gIH0sXHJcbiAgW0FEU0xJVkVfSUNPTl9WQVJJQU5ULlRSQVNIXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBudWxsLFxyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLkJPTERdOiBudWxsLFxyXG4gIH0sXHJcbiAgW0FEU0xJVkVfSUNPTl9WQVJJQU5ULlZJREVPXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBWaWRlb0ljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IFZpZGVvQm9sZEljb24sXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuV0lGSV06IHtcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogV2lmaUljb24sXHJcbiAgICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgfSxcclxuICBbQURTTElWRV9JQ09OX1ZBUklBTlQuTUlOVVNfQ0lSQ0xFXToge1xyXG4gICAgW0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJdOiBNaW51c0NpcmNsZSxcclxuICAgIFtBRFNMSVZFX0lDT05fVFlQRS5CT0xEXTogTWludXNDaXJjbGUsXHJcbiAgfSxcclxuICAvLyBbQURTTElWRV9JQ09OX1ZBUklBTlQuQkFDS106IHtcclxuICAvLyAgIFtBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXTogQmFja0ljb24sXHJcbiAgLy8gICBbQURTTElWRV9JQ09OX1RZUEUuQk9MRF06IG51bGwsXHJcbiAgLy8gfSxcclxufTtcclxuXHJcbmNvbnN0IGdldEljb24gPSAoXHJcbiAgdmFyaWFudDogQURTTElWRV9JQ09OX1ZBUklBTlQsXHJcbiAgdHlwZTogQURTTElWRV9JQ09OX1RZUEVcclxuKTogYW55ID0+IHtcclxuICByZXR1cm4gcGF0aChbdmFyaWFudCwgdHlwZV0sIGljb25Db21wb25lbnRzKSB8fCBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2l6ZUNsYXNzTmFtZSA9IChzaXplOiBBRFNMSVZFX0lDT05fU0laRSkgPT4ge1xyXG4gIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgY2FzZSBBRFNMSVZFX0lDT05fU0laRS5MQVJHRTpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5sYXJnZTtcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1NJWkUuTUVESVVNOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLm1lZGl1bTtcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1NJWkUuU01BTEw6XHJcbiAgICAgIHJldHVybiBzdHlsZXMuc21hbGw7XHJcbiAgICBjYXNlIEFEU0xJVkVfSUNPTl9TSVpFLkVYVFJBX1NNQUxMOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLmV4dHJhU21hbGw7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRWYXJpYW50Q2xhc3NOYW1lQnlCb2xkVHlwZSA9ICh2YXJpYW50OiBBRFNMSVZFX0lDT05fVkFSSUFOVCkgPT4ge1xyXG4gIHN3aXRjaCAodmFyaWFudCkge1xyXG4gICAgY2FzZSBBRFNMSVZFX0lDT05fVkFSSUFOVC5TQ1JFRU46XHJcbiAgICAgIHJldHVybiBzdHlsZXMuc2NyZWVuQm9sZDtcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1ZBUklBTlQuVklERU86XHJcbiAgICAgIHJldHVybiBzdHlsZXMudmlkZW9Cb2xkO1xyXG4gICAgY2FzZSBBRFNMSVZFX0lDT05fVkFSSUFOVC5TRU5EOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLnNlbmRCb2xkO1xyXG4gICAgY2FzZSBBRFNMSVZFX0lDT05fVkFSSUFOVC5BTEVSVDpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5hbGVydEJvbGQ7XHJcbiAgICBjYXNlIEFEU0xJVkVfSUNPTl9WQVJJQU5ULkFfQzpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5hQ0JvbGQ7XHJcbiAgICBjYXNlIEFEU0xJVkVfSUNPTl9WQVJJQU5ULkNJUkNMRV9QTFVTOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLmNpcmNsZVBsdXNCb2xkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmFyaWFudENsYXNzTmFtZUJ5UmVndWxhclR5cGUgPSAodmFyaWFudDogQURTTElWRV9JQ09OX1ZBUklBTlQpID0+IHtcclxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1ZBUklBTlQuU0NSRUVOOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLnNjcmVlbjtcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1ZBUklBTlQuVklERU86XHJcbiAgICAgIHJldHVybiBzdHlsZXMudmlkZW87XHJcbiAgICBjYXNlIEFEU0xJVkVfSUNPTl9WQVJJQU5ULlNFTkQ6XHJcbiAgICAgIHJldHVybiBzdHlsZXMuc2VuZDtcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1ZBUklBTlQuQUxFUlQ6XHJcbiAgICAgIHJldHVybiBzdHlsZXMuYWxlcnQ7XHJcbiAgICBjYXNlIEFEU0xJVkVfSUNPTl9WQVJJQU5ULkFfQzpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5hQztcclxuICAgIGNhc2UgQURTTElWRV9JQ09OX1ZBUklBTlQuU0VBUkNIOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLnNlYXJjaDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldENvbG9yQ2xhc3NOYW1lID0gKGNvbG9yOiBBRFNMSVZFX0lDT05fQ09MT1IpID0+IHtcclxuICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICBjYXNlIEFEU0xJVkVfSUNPTl9DT0xPUi5OT1JNQUw6XHJcbiAgICAgIHJldHVybiBzdHlsZXMubm9ybWFsO1xyXG4gICAgY2FzZSBBRFNMSVZFX0lDT05fQ09MT1IuUFJJTUFSWTpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5wcmltYXJ5O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQWRzbGl2ZUljb25Qcm9wcyA9IHtcclxuICBjb2xvcj86IEFEU0xJVkVfSUNPTl9DT0xPUjtcclxuICB0eXBlPzogQURTTElWRV9JQ09OX1RZUEU7XHJcbiAgc2l6ZT86IEFEU0xJVkVfSUNPTl9TSVpFO1xyXG4gIHZhcmlhbnQ/OiBBRFNMSVZFX0lDT05fVkFSSUFOVDtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbn0gJiBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZHNsaXZlSWNvbih7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIGNvbG9yID0gQURTTElWRV9JQ09OX0NPTE9SLk5PUk1BTCxcclxuICB2YXJpYW50LFxyXG4gIHR5cGUgPSBBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSLFxyXG4gIHNpemUgPSBBRFNMSVZFX0lDT05fU0laRS5TTUFMTCxcclxuICAuLi5wcm9wc1xyXG59OiBBZHNsaXZlSWNvblByb3BzKSB7XHJcbiAgY29uc3QgSWNvbiA9IGdldEljb24odmFyaWFudCwgdHlwZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaWNvbn0gJHtnZXRDb2xvckNsYXNzTmFtZShjb2xvcil9ICR7Z2V0U2l6ZUNsYXNzTmFtZShcclxuICAgICAgICBzaXplXHJcbiAgICAgICl9ICR7XHJcbiAgICAgICAgdHlwZSA9PT0gQURTTElWRV9JQ09OX1RZUEUuQk9MRFxyXG4gICAgICAgICAgPyBnZXRWYXJpYW50Q2xhc3NOYW1lQnlCb2xkVHlwZSh2YXJpYW50KSB8fCBcIlwiXHJcbiAgICAgICAgICA6IGdldFZhcmlhbnRDbGFzc05hbWVCeVJlZ3VsYXJUeXBlKHZhcmlhbnQpIHx8IFwiXCJcclxuICAgICAgfSAke2NsYXNzTmFtZSB8fCBcIlwifWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgID5cclxuICAgICAge0ljb24gJiYgPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIEFkSWNvbihwcm9wcykge1xyXG4gIGNvbnN0IHsgbmFtZSwgdywgaCwgbSwgbXIsIG1sLCByLCBvbkNsaWNrLCB1cmwgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFkSWNvbn0gJHtvbkNsaWNrID8gc3R5bGVzLmNsaWNrYWJsZSA6IG51bGx9YH0gey4uLnByb3BzfT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogdyB8fCBcIjI0cHhcIixcclxuICAgICAgICAgIG1pbldpZHRoOiB3IHx8IFwiMjRweFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBoIHx8IHcgfHwgXCIyNHB4XCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IGggfHwgdyB8fCBcIjI0cHhcIixcclxuICAgICAgICAgIG1hcmdpbjogbSB8fCAwLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IG1yIHx8IG0sXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBtbCB8fCBtLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiByIHx8IDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzcmM9e3VybCB8fCBgLyR7bmFtZX0uc3ZnYH1cclxuICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgLz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBRFNMSVZFX0xPQURJTkdfU0laRSB7XHJcbiAgTEFSR0UgPSBcImxhcmdlXCIsXHJcbiAgTUVESVVNID0gXCJtZWRpdW1cIixcclxuICBTTUFMTCA9IFwic21hbGxcIixcclxuICBFWFRSQV9TTUFMTCA9IFwiZXh0cmEtc21hbGxcIixcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRzbGl2ZUxvYWRpbmdQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBhbnk7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbiAgc2l6ZT86IEFEU0xJVkVfTE9BRElOR19TSVpFO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2l6ZUNsYXNzTmFtZSA9IChzaXplOiBBRFNMSVZFX0xPQURJTkdfU0laRSkgPT4ge1xyXG4gIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgY2FzZSBBRFNMSVZFX0xPQURJTkdfU0laRS5MQVJHRTpcclxuICAgICAgcmV0dXJuIHN0eWxlcy5sYXJnZTtcclxuICAgIGNhc2UgQURTTElWRV9MT0FESU5HX1NJWkUuTUVESVVNOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLm1lZGl1bTtcclxuICAgIGNhc2UgQURTTElWRV9MT0FESU5HX1NJWkUuU01BTEw6XHJcbiAgICAgIHJldHVybiBzdHlsZXMuc21hbGw7XHJcbiAgICBjYXNlIEFEU0xJVkVfTE9BRElOR19TSVpFLkVYVFJBX1NNQUxMOlxyXG4gICAgICByZXR1cm4gc3R5bGVzLmV4dHJhU21hbGw7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkc2xpdmVMb2FkaW5nKHtcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgc2l6ZSA9IEFEU0xJVkVfTE9BRElOR19TSVpFLlNNQUxMLFxyXG59OiBBZHNsaXZlTG9hZGluZ1Byb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz4gKi99XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5sb2FkaW5nfSAke2dldFNpemVDbGFzc05hbWUoc2l6ZSkgfHwgXCJcIn0gJHtcclxuICAgICAgICAgIGNsYXNzTmFtZSB8fCBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxyXG4gICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODAsNTApXCI+XHJcbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMClcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjBcIiBjeT1cIjBcIiByPVwiNlwiIGZpbGxPcGFjaXR5PVwiMVwiPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIi0wLjg3NXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPVwiMS41IDEuNTsxIDFcIlxyXG4gICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICA+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiZmlsbE9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIi0wLjg3NXNcIlxyXG4gICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuMjEzMjAzNDM1NTk2NDMsNzEuMjEzMjAzNDM1NTk2NDMpXCI+XHJcbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoNDUpXCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjZcIiBmaWxsT3BhY2l0eT1cIjAuODc1XCI+XHJcbiAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNjYWxlXCJcclxuICAgICAgICAgICAgICAgIGJlZ2luPVwiLTAuNzVzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIjEuNSAxLjU7MSAxXCJcclxuICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgPjwvYW5pbWF0ZVRyYW5zZm9ybT5cclxuICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cImZpbGxPcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAgICAgICAgYmVnaW49XCItMC43NXNcIlxyXG4gICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAsODApXCI+XHJcbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoOTApXCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjZcIiBmaWxsT3BhY2l0eT1cIjAuNzVcIj5cclxuICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2NhbGVcIlxyXG4gICAgICAgICAgICAgICAgYmVnaW49XCItMC42MjVzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIjEuNSAxLjU7MSAxXCJcclxuICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgPjwvYW5pbWF0ZVRyYW5zZm9ybT5cclxuICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cImZpbGxPcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAgICAgICAgYmVnaW49XCItMC42MjVzXCJcclxuICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI4Ljc4Njc5NjU2NDQwMzU3Nyw3MS4yMTMyMDM0MzU1OTY0MylcIj5cclxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSgxMzUpXCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjZcIiBmaWxsT3BhY2l0eT1cIjAuNjI1XCI+XHJcbiAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNjYWxlXCJcclxuICAgICAgICAgICAgICAgIGJlZ2luPVwiLTAuNXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPVwiMS41IDEuNTsxIDFcIlxyXG4gICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICA+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiZmlsbE9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIi0wLjVzXCJcclxuICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIwLDUwLjAwMDAwMDAwMDAwMDAxKVwiPlxyXG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDE4MClcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjBcIiBjeT1cIjBcIiByPVwiNlwiIGZpbGxPcGFjaXR5PVwiMC41XCI+XHJcbiAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNjYWxlXCJcclxuICAgICAgICAgICAgICAgIGJlZ2luPVwiLTAuMzc1c1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxLjUgMS41OzEgMVwiXHJcbiAgICAgICAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgID48L2FuaW1hdGVUcmFuc2Zvcm0+XHJcbiAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJmaWxsT3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgICAgICAgIGJlZ2luPVwiLTAuMzc1c1wiXHJcbiAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyOC43ODY3OTY1NjQ0MDM1NywyOC43ODY3OTY1NjQ0MDM1NzcpXCI+XHJcbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjI1KVwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCI2XCIgZmlsbE9wYWNpdHk9XCIwLjM3NVwiPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIi0wLjI1c1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxLjUgMS41OzEgMVwiXHJcbiAgICAgICAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgID48L2FuaW1hdGVUcmFuc2Zvcm0+XHJcbiAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJmaWxsT3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgICAgICAgIGJlZ2luPVwiLTAuMjVzXCJcclxuICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ5Ljk5OTk5OTk5OTk5OTk5LDIwKVwiPlxyXG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDI3MClcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjBcIiBjeT1cIjBcIiByPVwiNlwiIGZpbGxPcGFjaXR5PVwiMC4yNVwiPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIi0wLjEyNXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPVwiMS41IDEuNTsxIDFcIlxyXG4gICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICA+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiZmlsbE9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIi0wLjEyNXNcIlxyXG4gICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuMjEzMjAzNDM1NTk2NDMsMjguNzg2Nzk2NTY0NDAzNTcpXCI+XHJcbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzE1KVwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCI2XCIgZmlsbE9wYWNpdHk9XCIwLjEyNVwiPlxyXG4gICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzY2FsZVwiXHJcbiAgICAgICAgICAgICAgICBiZWdpbj1cIjBzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIjEuNSAxLjU7MSAxXCJcclxuICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgPjwvYW5pbWF0ZVRyYW5zZm9ybT5cclxuICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cImZpbGxPcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAgICAgICAgYmVnaW49XCIwc1wiXHJcbiAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vRGF0YSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub0RhdGF9PlxyXG4gICAgICA8c3Bhbj5ObyBEYXRhPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBZEljb24gfSBmcm9tIFwiLi4vaWNvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWZyZXNoc2VySWNvbih7aXNMb2FkaW5nLCBvbkNsaWNrfSkge1xyXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9IC8+XHJcbiAgOiA8QWRJY29uIHc9ezIwfSBvbkNsaWNrPXtvbkNsaWNrfSBuYW1lPVwicmVmcmVzaFwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlZnJlc2hlcn1gfS8+XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHBhcnNlVGl0bGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uLnV0aWxcIjtcclxuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uL2ljb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXR1c0JhZGdlKHsgc3RhdHVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhdHVzfSAke3N0eWxlc1tzdGF0dXNdfWB9PlxyXG4gICAgICB7c3RhdHVzID09PSBcIm9mZmxpbmVcIiAmJiAoXHJcbiAgICAgICAgPEFkSWNvbiB3PVwiMTJweFwiIG09XCIwcHggNXB4IDBweCAwcHhcIiBuYW1lPVwiU3VidHJhY3RcIiAvPlxyXG4gICAgICApfVxyXG4gICAgICB7cGFyc2VUaXRsZShzdGF0dXMpfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBBZEljb24gfSBmcm9tIFwiLi4vaWNvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbnRlcmZhY2UgVG9hc3RlclByb3BzIHtcclxuICB0eXBlOiBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwiO1xyXG4gIHNob3dTdGF0dXM/OiBib29sZWFuO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGRlbGF5PzogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgaGFuZGxlU2V0VG9hc3Q6IEZ1bmN0aW9uO1xyXG59XHJcbmV4cG9ydCBjb25zdCBUWVBFX1RPX0lDT04gPSB7XHJcbiAgc3VjY2VzczogXCJzdWNjZXNzXCIsXHJcbiAgd2FybmluZzogXCJhdHRlbnRpb24taGlnaGxpZ2h0XCIsXHJcbiAgZXJyb3I6IFwiZXJyb3JcIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIFRvYXN0ZXIoe1xyXG4gIGhhbmRsZVNldFRvYXN0LFxyXG4gIHR5cGUsXHJcbiAgbWVzc2FnZSxcclxuICB0aXRsZSA9IHR5cGUsXHJcbiAgZGVsYXkgPSA2MDAwLFxyXG59OiBUb2FzdGVyUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvYXN0ZXJ9ICR7c3R5bGVzW3R5cGVdfWB9XHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IGhhbmRsZVNldFRvYXN0KG51bGwpfVxyXG4gICAgICBzaG93PXshIW1lc3NhZ2V9XHJcbiAgICAgIGRlbGF5PXtkZWxheX1cclxuICAgICAgYXV0b2hpZGU9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIDxUb2FzdC5IZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SGVhZH0+XHJcbiAgICAgICAgICA8QWRJY29uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb259ICR7c3R5bGVzW3R5cGVdfWB9IG5hbWU9e1RZUEVfVE9fSUNPTlt0eXBlXX0gLz5cclxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZT8udG9VcHBlckNhc2UoKX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvVG9hc3QuSGVhZGVyPlxyXG4gICAgICA8VG9hc3QuQm9keT57bWVzc2FnZX08L1RvYXN0LkJvZHk+XHJcbiAgICA8L1RvYXN0PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBhbnk7XHJcbiAgc3R5bGU/OiBhbnk7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59ICYgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkc2xpdmVIMSh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn06IEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmgxfSAke2NsYXNzTmFtZSB8fCBcIlwifWB9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZHNsaXZlSDIoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICBzdHlsZSxcclxuICAuLi5wcm9wc1xyXG59OiBBZHNsaXZlVHlwb2dyYXBoeVByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5oMn0gJHtjbGFzc05hbWUgfHwgXCJcIn1gfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRzbGl2ZUgzKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufTogQWRzbGl2ZVR5cG9ncmFwaHlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaDN9ICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkc2xpdmVINCh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn06IEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmg0fSAke2NsYXNzTmFtZSB8fCBcIlwifWB9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZHNsaXZlQ2FwdGlvbih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn06IEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcHRpb259ICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRzbGl2ZU92ZXJsaW5lKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufTogQWRzbGl2ZVR5cG9ncmFwaHlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMub3ZlcmxpbmV9ICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRzbGl2ZUJvZHkxNih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn06IEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvZHkxNn0gJHtjbGFzc05hbWUgfHwgXCJcIn1gfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZHNsaXZlQm9keTE0KHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufTogQWRzbGl2ZVR5cG9ncmFwaHlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9keTE0fSAke2NsYXNzTmFtZSB8fCBcIlwifWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkc2xpdmVTdWJ0aXRsZSh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn06IEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YnRpdGxlfSAke2NsYXNzTmFtZSB8fCBcIlwifWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkc2xpdmVTdWJ0aXRsZTE0KHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgLi4ucHJvcHNcclxufTogQWRzbGl2ZVR5cG9ncmFwaHlQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3VidGl0bGUxNH0gJHtjbGFzc05hbWUgfHwgXCJcIn1gfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZHNsaXZlU3VidGl0bGUxNih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn06IEFkc2xpdmVUeXBvZ3JhcGh5UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YnRpdGxlMTZ9ICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXV0ZWRUZXh0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgc3R5bGUgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM3RjgzOEVcIiwgLi4uc3R5bGV9fSA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5mb1RleHQocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBzdHlsZSwgc2l6ZSB9ID0gcHJvcHNcclxuICBjb25zdCBzaXplTHZsID0ge2xnOiBcIjIwcHhcIiwgbWQ6IFwiMTRweFwiLCBzbTogXCIxMnB4XCJ9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMyNDc1RkZcIiwgZm9udFNpemU6IHNpemVMdmxbc2l6ZV0sIC4uLnN0eWxlfX0gPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBBZHZhbmNlZEltYWdlIH0gZnJvbSBcIkBjbG91ZGluYXJ5L3JlYWN0XCI7XHJcbmltcG9ydCB7IENsb3VkaW5hcnlJbWFnZSB9IGZyb20gXCJAY2xvdWRpbmFyeS9iYXNlL2Fzc2V0cy9DbG91ZGluYXJ5SW1hZ2VcIjtcclxuLy8gaW1wb3J0IFVSTENvbmZpZyBmcm9tIFwiQGNsb3VkaW5hcnkvYmFzZS9jb25maWcvVVJMQ29uZmlnXCI7XHJcbmltcG9ydCBDbG91ZENvbmZpZyBmcm9tIFwiQGNsb3VkaW5hcnkvYmFzZS9jb25maWcvQ2xvdWRDb25maWdcIjtcclxuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uL2ljb25cIjtcclxuaW1wb3J0IENsb3VkaW5hcnlBcGkgZnJvbSBcIi4uLy4uL2FwaS1jbGllbnRzL2Nsb3VkaW5hcnktYXBpXCI7XHJcbmltcG9ydCBBZHNsaXZlTG9hZGluZywgeyBBRFNMSVZFX0xPQURJTkdfU0laRSB9IGZyb20gXCIuLi9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIFRvYXN0IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBBZEJ1dHRvbiB9IGZyb20gXCIuLi9idXR0b25cIjtcclxuaW1wb3J0IHsgVmlkZW9SZXNwb25zZURhdGEgfSBmcm9tIFwiLi4vLi4vYXBpLWNsaWVudHMvdHlwZXMvY2xvdWRpbmFyeS1yZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBNb2NrQ2xvdWRpbmFyeVZpZGVvIH0gZnJvbSBcIi4uLy4uL2FwaS1jbGllbnRzL21vY2stYXBpXCI7XHJcblxyXG5jb25zdCBDbG91ZGluYXJ5ID0gKCkgPT4ge1xyXG4gIC8vIFNldCB0aGUgQ2xvdWQgY29uZmlndXJhdGlvbiBhbmQgVVJMIGNvbmZpZ3VyYXRpb25cclxuICAvLyBsZXQgY2xvdWRDb25maWcgPSBuZXcgQ2xvdWRDb25maWcoe2Nsb3VkTmFtZTogJ2RuZ2V6NmJocCd9KTtcclxuICAvLyBsZXQgdXJsQ29uZmlnID0gbmV3IFVSTENvbmZpZyh7c2VjdXJlOiB0cnVlfSk7XHJcblxyXG4gIC8vIEluc3RhbnRpYXRlIGFuZCBjb25maWd1cmUgYSBDbG91ZGluYXJ5SW1hZ2Ugb2JqZWN0LlxyXG4gIC8vIGxldCBteUltYWdlID0gbmV3IENsb3VkaW5hcnlJbWFnZSgnc2FtcGxlJywgY2xvdWRDb25maWcpO1xyXG5cclxuICAvLyBUaGUgVVJMIG9mIHRoZSBpbWFnZSBpczogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvc2FtcGxlXHJcblxyXG4gIC8vIFJlbmRlciB0aGUgaW1hZ2UgaW4gYSBSZWFjdCBjb21wb25lbnQuXHJcbiAgcmV0dXJuIDxkaXY+ey8qIDxBZHZhbmNlZEltYWdlIGNsZEltZz17bXlJbWFnZX0gLz4gKi99PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9VcGxvYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZTxWaWRlb1Jlc3BvbnNlRGF0YT4obnVsbCk7XHJcbiAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0luZm8sIHNldFNob3dJbmZvXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jIChmaWxlKSA9PiB7XHJcbiAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgQ2xvdWRpbmFyeUFwaS51cGxvYWRWaWRlbyhmaWxlKTtcclxuICAgICAgLy8gY29uc3QgZGF0YTphbnkgPSBhd2FpdCBNb2NrQ2xvdWRpbmFyeVZpZGVvKClcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFZpZGVvRmlsZShkYXRhKTtcclxuICAgICAgICBvbkNoYW5nZShkYXRhKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyh7IGVycm9yIH0pO1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJXcmFwcGVyfT5cclxuICAgICAge3ZpZGVvRmlsZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3Nob3dJbmZvICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgICAgICA8ZGl2Pk5hbWU6IHt2aWRlb0ZpbGUub3JpZ2luYWxfZmlsZW5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5UeXBlOiB7dmlkZW9GaWxlLmZvcm1hdH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pkxlbmd0aDoge3ZpZGVvRmlsZS5kdXJhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wbGF5ZXJBY3Rpb25zfSAke1xyXG4gICAgICAgICAgICAgIHBsYXlpbmcgPyBzdHlsZXMucGxheWluZyA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBsYXlpbmcoIXBsYXlpbmcpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QWRJY29uIG5hbWU9e3BsYXlpbmcgPyBcInBhdXNlXCIgOiBcInBsYXlcIn0gdz1cIjYwcHhcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfVxyXG4gICAgICAgICAgICB1cmw9e3ZpZGVvRmlsZS5zZWN1cmVfdXJsfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgcGxheWluZz17cGxheWluZ31cclxuICAgICAgICAgICAgLy8gb25SZWFkeT17KCk9PiBzZXRTaG93SW5mbyh0cnVlKX1cclxuICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0U2hvd0luZm8odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUGxheT17KCkgPT4gc2V0U2hvd0luZm8oZmFsc2UpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy51cGxvYWRDb250YWluZXJ9ICR7XHJcbiAgICAgICAgICAgICF1cGxvYWRpbmcgPyBzdHlsZXMuY2xpY2thYmxlIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3VwbG9hZGluZyA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJkYW5nZXJcIj57ZXJyb3IubWVzc2FnZX08L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEFkc2xpdmVMb2FkaW5nIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9IHNpemU9e0FEU0xJVkVfTE9BRElOR19TSVpFLkxBUkdFfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEJ0bn0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVVcGxvYWQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxBZEljb24gbmFtZT1cIlZpZGVvXCIgdz1cIjMwcHhcIiBtPVwiMTJweFwiIC8+XHJcbiAgICAgICAgICAgICAgPGI+VXBsb2FkIDEgdmlkZW88L2I+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uL2ljb25cIjtcclxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQWRCdXR0b24gfSBmcm9tIFwiLi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQWRWaWRlbyxcclxuICBWaWRlb1Jlc3BvbnNlRGF0YSxcclxufSBmcm9tIFwiLi4vLi4vYXBpLWNsaWVudHMvdHlwZXMvY2xvdWRpbmFyeS1yZXNwb25zZVwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VmlkZW9zVXJsKGRhdGE6IEFkVmlkZW8pIHtcclxuICBpZiAoZGF0YSkgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhLm1hcCgoZSkgPT4gZS51cmwpIDogZGF0YS51cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvc1BsYXllcihwcm9wcykge1xyXG4gIGNvbnN0IHsgZGF0YSwgb25DbGlja1ByZXZpZXcsIGlzUHJldmlldyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93SW5mbywgc2V0U2hvd0luZm9dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyV3JhcHBlcn0+XHJcbiAgICAgIHtkYXRhICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgeyFpc1ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtzaG93SW5mbyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pk5hbWU6IHtkYXRhLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBsYXllckFjdGlvbnN9ICR7XHJcbiAgICAgICAgICAgICAgICAgIHBsYXlpbmcgPyBzdHlsZXMucGxheWluZyA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGxheWluZyghcGxheWluZyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFkSWNvbiBuYW1lPXtwbGF5aW5nID8gXCJwYXVzZVwiIDogXCJwbGF5XCJ9IHc9XCI2MHB4XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPFJlYWN0UGxheWVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICB1cmw9e2dldFZpZGVvc1VybChkYXRhKX1cclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIHBsYXlpbmc9e3BsYXlpbmd9XHJcbiAgICAgICAgICAgIC8vIG9uQ2xpY2tQcmV2aWV3PXtvbkNsaWNrUHJldmlld31cclxuICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0U2hvd0luZm8odHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uUGxheT17KCkgPT4gc2V0U2hvd0luZm8oZmFsc2UpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQVBJX0NPREUge1xyXG4gIFNVQ0NFU1MgPSAwLFxyXG4gIEZBSUxFRCA9IDEsXHJcbiAgRVJST1IgPSAyLFxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2FwaS1jb2RlLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci10eXBlLmVudW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2NyZWVuLXN0YXR1cy5lbnVtXCI7XHJcbiIsImV4cG9ydCBlbnVtIFNDUkVFTl9TVEFUVVMge1xyXG4gIExJVkUgPSBcImxpdmVcIixcclxuICBPRkZMSU5FID0gXCJvZmZsaW5lXCIsXHJcbiAgRElTQ09OTkVDVEVEID0gXCJkaXNjb25uZWN0ZWRcIixcclxuICBQT1dFUl9PRkYgPSBcInBvd2VyLW9mZlwiLFxyXG59XHJcbiIsImV4cG9ydCBlbnVtIFVTRVJfVFlQRSB7XHJcbiAgQURNSU4gPSBcImFkbWluXCIsXHJcbiAgQURWRVJUSVNFUiA9IFwiYWR2ZXJ0aXNlclwiLFxyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgfSIsImltcG9ydCB7IEFEU0xJVkVfSUNPTl9WQVJJQU5UIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFsZXJ0IGZyb20gXCIuLi8uLi9wYWdlcy1jb21wb25lbnRzL2FkdmVydGlzZXIvYWxlcnRcIjtcclxuaW1wb3J0IEFkdmVydGlzZXJDYW1wYWlnbiBmcm9tIFwiLi4vLi4vcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL2NhbXBhaWduXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VyUHJvZmlsZSBmcm9tIFwiLi4vLi4vcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3Byb2ZpbGVcIjtcclxuaW1wb3J0IEFkdmVydGlzZXJTY3JlZW4gZnJvbSBcIi4uLy4uL3BhZ2VzLWNvbXBvbmVudHMvYWR2ZXJ0aXNlci9zY3JlZW5cIjtcclxuaW1wb3J0IEFkdmVydGlzZXJWaWRlbyBmcm9tIFwiLi4vLi4vcGFnZXMtY29tcG9uZW50cy9hZHZlcnRpc2VyL3ZpZGVvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWR2ZXJ0aXNlckhlYWRlckl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGlkOiBcImFkc2wtbC1oaS0xXCIsXHJcbiAgICB0aXRsZTogXCJTY3JlZW5cIixcclxuICAgIGljb25WYXJpYW50OiBBRFNMSVZFX0lDT05fVkFSSUFOVC5TQ1JFRU4sXHJcbiAgICBjb250ZW50Q29tcG9uZW50OiBBZHZlcnRpc2VyU2NyZWVuLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiYWRzbC1sLWhpLTJcIixcclxuICAgIHRpdGxlOiBcIlZpZGVvXCIsXHJcbiAgICBpY29uVmFyaWFudDogQURTTElWRV9JQ09OX1ZBUklBTlQuVklERU8sXHJcbiAgICBjb250ZW50Q29tcG9uZW50OiBBZHZlcnRpc2VyVmlkZW8sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJhZHNsLWwtaGktM1wiLFxyXG4gICAgdGl0bGU6IFwiQ2FtcGFpZ25cIixcclxuICAgIGljb25WYXJpYW50OiBBRFNMSVZFX0lDT05fVkFSSUFOVC5TRU5ELFxyXG4gICAgY29udGVudENvbXBvbmVudDogQWR2ZXJ0aXNlckNhbXBhaWduLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiYWRzbC1sLWhpLTRcIixcclxuICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICBpY29uVmFyaWFudDogQURTTElWRV9JQ09OX1ZBUklBTlQuQUxFUlQsXHJcbiAgICBjb250ZW50Q29tcG9uZW50OiBBZHZlcnRpc2VyQWxlcnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJhZHNsLWwtaGktNVwiLFxyXG4gICAgdGl0bGU6IFwiUHJvZmlsZVwiLFxyXG4gICAgaWNvblZhcmlhbnQ6IEFEU0xJVkVfSUNPTl9WQVJJQU5ULkFfQyxcclxuICAgIGNvbnRlbnRDb21wb25lbnQ6IEFkdmVydGlzZXJQcm9maWxlLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRzbGl2ZUxvYWRpbmcgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xyXG5pbXBvcnQgdXNlQWR2ZXJ0aXNlclN0b3JlIGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvYWR2ZXJ0aXNlci1zdG9yZS9hZHZlcnRpc2VyLXN0b3JlLmhvb2tcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb21tb24udXRpbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2ZXJ0aXNlckVudHJhbmNlKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQWR2ZXJ0aXNlclN0b3JlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFhdXRoPy5pc0dldHRpbmdUb2tlbiAmJlxyXG4gICAgICAhYXV0aD8uaXNBdXRoZW50aWNhdGluZyAmJlxyXG4gICAgICAhYXV0aD8uaXNBdXRoZW50aWNhdGVkXHJcbiAgICApIHtcclxuICAgICAgcmVkaXJlY3RUbyhcIi9hZHZlcnRpc2VyL3NpZ24taW5cIik7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGg/LmlzQXV0aGVudGljYXRlZCwgYXV0aD8uaXNBdXRoZW50aWNhdGluZywgYXV0aD8uaXNHZXR0aW5nVG9rZW5dKTtcclxuXHJcbiAgaWYgKFxyXG4gICAgYXV0aD8uaXNBdXRoZW50aWNhdGluZyB8fFxyXG4gICAgYXV0aD8uaXNHZXR0aW5nVG9rZW4gfHxcclxuICAgICghYXV0aD8uaXNBdXRoZW50aWNhdGluZyAmJiAhYXV0aD8uaXNHZXR0aW5nVG9rZW4gJiYgIWF1dGg/LmlzQXV0aGVudGljYXRlZClcclxuICApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50cmFuY2V9PlxyXG4gICAgICAgIDxBZHNsaXZlTG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufVxyXG4iLCJpbXBvcnQgQWRzbGl2ZUljb24sIHtcclxuICBBRFNMSVZFX0lDT05fQ09MT1IsXHJcbiAgQURTTElWRV9JQ09OX1RZUEUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgeyBBZHNsaXZlQ2FwdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgYWR2ZXJ0aXNlckhlYWRlckl0ZW1zIH0gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEFkdmVydGlzZXJIZWFkZXJQcm9wcyA9IHtcclxuICBhY3RpdmVkSXRlbUlkPzogc3RyaW5nO1xyXG4gIHN3aXRjaFRvSXRlbT86IChpdGVtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmVydGlzZXJIZWFkZXIoe1xyXG4gIGFjdGl2ZWRJdGVtSWQsXHJcbiAgc3dpdGNoVG9JdGVtLFxyXG59OiBBZHZlcnRpc2VySGVhZGVyUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnRpc2VySGVhZGVyfT5cclxuICAgICAge2FkdmVydGlzZXJIZWFkZXJJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5hZHZlcnRpc2VySGVhZGVySXRlbX0gJHtcclxuICAgICAgICAgICAgaXRlbT8uaWQgPT09IGFjdGl2ZWRJdGVtSWQgPyBzdHlsZXMuYWN0aXZlZCA6IFwiXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgIGl0ZW0/LmlkID09PSBhY3RpdmVkSXRlbUlkXHJcbiAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgOiAoKSA9PiBzd2l0Y2hUb0l0ZW0gJiYgc3dpdGNoVG9JdGVtKGl0ZW0/LmlkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZHNsaXZlSWNvblxyXG4gICAgICAgICAgICB2YXJpYW50PXtpdGVtPy5pY29uVmFyaWFudH1cclxuICAgICAgICAgICAgdHlwZT17XHJcbiAgICAgICAgICAgICAgaXRlbT8uaWQgPT09IGFjdGl2ZWRJdGVtSWRcclxuICAgICAgICAgICAgICAgID8gQURTTElWRV9JQ09OX1RZUEUuQk9MRFxyXG4gICAgICAgICAgICAgICAgOiBBRFNMSVZFX0lDT05fVFlQRS5SRUdVTEFSXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgIGl0ZW0/LmlkID09PSBhY3RpdmVkSXRlbUlkXHJcbiAgICAgICAgICAgICAgICA/IEFEU0xJVkVfSUNPTl9DT0xPUi5QUklNQVJZXHJcbiAgICAgICAgICAgICAgICA6IEFEU0xJVkVfSUNPTl9DT0xPUi5OT1JNQUxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnRpc2VySGVhZGVySXRlbUljb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkc2xpdmVDYXB0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFkdmVydGlzZXJIZWFkZXJJdGVtVGV4dH0+XHJcbiAgICAgICAgICAgIHtpdGVtPy50aXRsZX1cclxuICAgICAgICAgIDwvQWRzbGl2ZUNhcHRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhZHZlcnRpc2VySGVhZGVySXRlbXMgfSBmcm9tIFwiLi9kZWZpbml0aW9uXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VySGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2ZXJ0aXNlckxheW91dCgpIHtcclxuICBjb25zdCBbY3VycmVudEhlYWRlckl0ZW1JZCwgc2V0Q3VycmVudEhlYWRlckl0ZW1JZF0gPSB1c2VTdGF0ZShcclxuICAgIGFkdmVydGlzZXJIZWFkZXJJdGVtc1swXS5pZFxyXG4gICk7XHJcbiAgY29uc3QgY3VycmVudEhlYWRlckl0ZW0gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBhZHZlcnRpc2VySGVhZGVySXRlbXMuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRIZWFkZXJJdGVtSWRcclxuICAgICk7XHJcbiAgfSwgW2N1cnJlbnRIZWFkZXJJdGVtSWRdKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoQ29udGVudCA9IChpdGVtSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q3VycmVudEhlYWRlckl0ZW1JZChpdGVtSWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IENvbnRlbnRDb21wb25lbnQgPSBjdXJyZW50SGVhZGVySXRlbT8uY29udGVudENvbXBvbmVudCBhcyBhbnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmVydGlzZXJMYXlvdXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cclxuICAgICAgICB7Q29udGVudENvbXBvbmVudCAmJiA8Q29udGVudENvbXBvbmVudCAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyV3JhcHBlcn0+XHJcbiAgICAgICAgPEFkdmVydGlzZXJIZWFkZXJcclxuICAgICAgICAgIGFjdGl2ZWRJdGVtSWQ9e2N1cnJlbnRIZWFkZXJJdGVtSWR9XHJcbiAgICAgICAgICBzd2l0Y2hUb0l0ZW09e3N3aXRjaENvbnRlbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZHZlcnRpc2VyQWxlcnQoKSB7XHJcbiAgcmV0dXJuIFwiYWxlcnRcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBWaWRlb1R5cGUgfSBmcm9tIFwiLi4vLi4vdmlkZW9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDQU1QQUlHTl9TVEFUVVNFUyA9IFtcImxpdmVcIiwgXCJwYXVzZVwiXTtcclxuZXhwb3J0IGVudW0gTE9BRF9LRVlTIHtcclxuICBhZHNTZXQgPSBcImFkcy1zZXRcIixcclxuICBzY3JlZW4gPSBcInNjcmVlblwiLFxyXG4gIHNjaGVkdWxlID0gXCJzY2hlZHVsZVwiLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlZERhdGEge1xyXG4gIFtMT0FEX0tFWVMuYWRzU2V0XTogYW55O1xyXG4gIFtMT0FEX0tFWVMuc2NyZWVuXTogYW55O1xyXG4gIFtMT0FEX0tFWVMuc2NoZWR1bGVdOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNUUkFURUdJRVMgPSBbXHJcbiAge1xyXG4gICAga2V5OiBcIlNDUkVFTl9NQVRDSF9BTExfUlVMRVNcIixcclxuICAgIGRlc2M6IFwiQWxsIHNjcmVlbiBtYXRjaGluZyBhbGwgb2YgdGhlc2UgcnVsZXNcIixcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgaW50ZXJmYWNlIEFkc1NldE1lZGlhIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG9yZGVyOiBudW1iZXI7XHJcbiAgcmVjSWQ6IHN0cmluZztcclxuICB3aXRoTWVkaWE6IFZpZGVvVHlwZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFkc1NldFR5cGUge1xyXG4gIGFkc1NldE1lZGlhTGlzdDogQWRzU2V0TWVkaWFbXTtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByZWNJZDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjb25zdCBTVEFUVVNfQ09MT1IgPSB7IHBhdXNlZDogXCJzdWNjZXNzXCIsIGRyYWZ0OiBcInN1Y2Nlc3NcIiwgbGl2ZTogXCJwcmltYXJ5XCIgfTtcclxuZXhwb3J0IGNvbnN0IEFjdGlvbk9uU3RhdHVzID0gKHN0YXR1cykgPT4ge1xyXG4gIGxldCBhY3Rpb247XHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgXCJkcmFmdFwiOlxyXG4gICAgICBhY3Rpb24gPSBcImxpdmVcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibGl2ZVwiOlxyXG4gICAgICBhY3Rpb24gPSBcInBhdXNlZFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJwYXVzZWRcIjpcclxuICAgICAgYWN0aW9uID0gXCJsaXZlXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBhY3Rpb247XHJcbn07IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCB7IEFkQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBBZENhcmQsIHtcclxuICBDYXJkRHJhZ0l0ZW0sXHJcbiAgQ2FyZERyYWdXcmFwcGVyLFxyXG4gIENhcmRNdWx0aVNlbGVjdCxcclxuICBDYXJkU2VsZWN0LFxyXG4gIENhcmRTZWxlY3RUaW1lLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NhcmRcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGl2aWRlclwiO1xyXG5pbXBvcnQgeyBBZEljb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XHJcbmltcG9ydCBTdGF0dXNCYWRnZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zdGF0dXMtYmFkZ2VcIjtcclxuaW1wb3J0IHtcclxuICBBZHNsaXZlSDQsXHJcbiAgTXV0ZWRUZXh0LFxyXG4gIEluZm9UZXh0LFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFN1YkxheW91dCBmcm9tIFwiLi4vLi4vLi4vc3ViLWxheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGltZSwgcGFyc2VUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jb21tb24udXRpbFwiO1xyXG5pbXBvcnQgU2VsZWN0VmlkZW9zTW9kYWwgZnJvbSBcIi4uL3NlbGVjdFZpZGVvc01vZGFsXCI7XHJcbmltcG9ydCBBZHNsaXZlTG9hZGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdGVyXCI7XHJcbmltcG9ydCB1c2VBZHZlcnRpc2VyU3RvcmUgZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUuaG9va1wiO1xyXG5pbXBvcnQgeyBBcmVhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUuY29udGV4dFwiO1xyXG5pbXBvcnQgQ29uZmlybU1vZGFsIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbmZpcm1Nb2RhbFwiO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbk9uU3RhdHVzLFxyXG4gIEFkc1NldFR5cGUsXHJcbiAgQ2hhbmdlZERhdGEsXHJcbiAgTE9BRF9LRVlTLFxyXG4gIFNUQVRVU19DT0xPUixcclxuICBTVFJBVEVHSUVTLFxyXG59IGZyb20gXCIuL2NhbXBhaWduLXR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbXBhaWduRGV0YWlscyhwcm9wcykge1xyXG4gIGNvbnN0IHsgbG9jYXRpb25zLCBsb2FkQWxsU2NyZWVuIH0gPSB1c2VBZHZlcnRpc2VyU3RvcmUoKTtcclxuICBjb25zdCB7IHJldHVyblByZUxheW91dCwgY2FtcGFpZ24gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgdmlkZW9zLCBiZWdpblRpbWUsIGVuZFRpbWUsIHRhcmdldFNjcmVlbkNvbmRpdGlvbnMgfSA9IGNhbXBhaWduIHx8IHt9O1xyXG4gIGNvbnN0IGNvbGxlY3RBbGxBcmVhcyA9IGxvY2F0aW9ucz8ucmVkdWNlKFxyXG4gICAgKHJlcywgY3VyKSA9PiAocmVzID0gWy4uLnJlcywgLi4uY3VyLmFyZWFzXSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShjYW1wYWlnbj8uc3RhdHVzKTtcclxuICBjb25zdCBbYWRzU2V0LCBzZXRBZHNTZXRdID0gdXNlU3RhdGU8QWRzU2V0VHlwZT4obnVsbCk7XHJcbiAgY29uc3QgW3NjaGVkdWxlLCBzZXRTY2hlZHVsZV0gPSB1c2VTdGF0ZSh7IGJlZ2luVGltZSwgZW5kVGltZSB9KTtcclxuICBjb25zdCBbc2NyZWVuQ29uZGl0aW9ucywgc2V0U2NyZWVuQ29uZGl0aW9uc10gPSB1c2VTdGF0ZTxhbnk+KHtcclxuICAgIC4uLnRhcmdldFNjcmVlbkNvbmRpdGlvbnMsXHJcbiAgICBzdHJhdGVneTogU1RSQVRFR0lFU1swXS5rZXksXHJcbiAgfSk7XHJcbiAgY29uc3QgW2FyZWFPcHRpb25zLCBzZXRBcmVhT3B0aW9uc10gPSB1c2VTdGF0ZTxBcmVhW10+KGNvbGxlY3RBbGxBcmVhcyk7XHJcbiAgLy8gbG9hZGluZyBoYW5kbGVyXHJcbiAgY29uc3QgW3NldHRpbmcsIG9wZW5TZXR0aW5nXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW29wZW5WaWRlb0xpYiwgc2V0T3BlblZpZGVvTGliXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0NoYW5naW5nU3RhdHVzLCBzZXRDaGFuZ2VTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtpbml0TG9jYXRpb25zLCBzZXRJbml0TG9jYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbml0QXJlYXMsIHNldEluaXRBcmVhc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VjY2Vzc01zZywgc2V0U3VjY2Vzc01zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbd2FybmluZ01zZywgc2V0V2FybmluZ01zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY2hhbmdlZERhdGEsIHNldENoYW5nZWREYXRhXSA9IHVzZVN0YXRlPENoYW5nZWREYXRhPih7XHJcbiAgICBcImFkcy1zZXRcIjogbnVsbCxcclxuICAgIHNjcmVlbjogbnVsbCxcclxuICAgIHNjaGVkdWxlOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IENhbXBhaW5IZWFkZXIgPSAodGl0bGUsIHNldHRpbmdLZXkpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FtcGFpZ25IZWFkZXJ9PlxyXG4gICAgICA8QWRzbGl2ZUg0Pnt0aXRsZX08L0Fkc2xpdmVIND5cclxuICAgICAgeyFzZXR0aW5nW3NldHRpbmdLZXldID8gKFxyXG4gICAgICAgIDxBZEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdFNldHRpbmd9XHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjAgNHB4XCIgfX1cclxuICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1tzZXR0aW5nS2V5XX1cclxuICAgICAgICAgIGljb249ezxBZEljb24gbmFtZT1cInBlblwiIHc9XCIxNnB4XCIgbXI9XCIycHhcIiAvPn1cclxuICAgICAgICAgIHRpdGxlPXs8TXV0ZWRUZXh0PkVkaXQgU2V0dGluZzwvTXV0ZWRUZXh0Pn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVNldHRpbmcoc2V0dGluZ0tleSwgdHJ1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QWRCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMCA0cHhcIiB9fVxyXG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nW3NldHRpbmdLZXldfVxyXG4gICAgICAgICAgdGl0bGU9ezxNdXRlZFRleHQ+RG9uZTwvTXV0ZWRUZXh0Pn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZShzZXR0aW5nS2V5KX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBmdW5jdGlvbiByZXF1ZXN0QVBJKGxvYWRLZXk6IExPQURfS0VZUywgZGF0YSkge1xyXG4gICAgaWYgKGxvYWRLZXkgPT09IExPQURfS0VZUy5hZHNTZXQpXHJcbiAgICAgIHJldHVybiBBZHZlcnRpc2VyQXBpQ2xpZW50LnVwZGF0ZUFkc1NldE1lZGlhKGFkc1NldC5pZCwgZGF0YSk7XHJcbiAgICBpZiAobG9hZEtleSA9PT0gTE9BRF9LRVlTLnNjcmVlbilcclxuICAgICAgcmV0dXJuIEFkdmVydGlzZXJBcGlDbGllbnQudXBkYXRlQ2FtcGFpZ25UYXJnZXRTY3JlZW5Db25kaXRpb25zKFxyXG4gICAgICAgIGNhbXBhaWduLmlkLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgKTtcclxuICAgIGlmIChsb2FkS2V5ID09PSBMT0FEX0tFWVMuc2NoZWR1bGUpXHJcbiAgICAgIHJldHVybiBBZHZlcnRpc2VyQXBpQ2xpZW50LnVwZGF0ZUNhbXBhaWduU2NoZWR1bGUoYWRzU2V0LmlkLCBkYXRhKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXBkYXRlKHNldHRpbmdLZXkpIHtcclxuICAgIHRvZ2dsZVNldHRpbmcoc2V0dGluZ0tleSwgZmFsc2UpO1xyXG4gICAgY29uc3QgUkVRX0RBVEEgPSBjaGFuZ2VkRGF0YVtzZXR0aW5nS2V5XTtcclxuICAgIGlmIChSRVFfREFUQSkge1xyXG4gICAgICBoYW5kbGVTZXRMb2FkaW5nKHNldHRpbmdLZXksIHRydWUpO1xyXG4gICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IHJlcXVlc3RBUEkoc2V0dGluZ0tleSwgUkVRX0RBVEEpO1xyXG4gICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdLZXkgPT09IExPQURfS0VZUy5hZHNTZXQpIHtcclxuICAgICAgICAgIHNldEFkc1NldCh7IC4uLmFkc1NldCwgYWRzU2V0TWVkaWFMaXN0OiByZXMuZGF0YSB9KTtcclxuICAgICAgICAgIHNldFN1Y2Nlc3NNc2coXCJVcGRhdGVkIE1lZGlhXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nS2V5ID09PSBMT0FEX0tFWVMuc2NoZWR1bGUpIHtcclxuICAgICAgICAgIHNldFN1Y2Nlc3NNc2coXCJVcGRhdGVkIFNjaGVkdWxlXCIpO1xyXG4gICAgICAgIH0gZWxzZSBzZXRTdWNjZXNzTXNnKFwiVXBkYXRlZFwiKTtcclxuICAgICAgICBzZXRDaGFuZ2VkRGF0YSh7IC4uLmNoYW5nZWREYXRhLCBbc2V0dGluZ0tleV06IG51bGwgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlcyAmJiByZXMuZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSByZXMuZXJyb3IuZGF0YT8uZXJyb3I/Lm1lc3NhZ2VcclxuICAgICAgICBzZXRFcnJvck1zZyhtc2cgfHwgJ0FuIGVycm9yIGhhcHBlbmVkIScpXHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlU2V0TG9hZGluZyhzZXR0aW5nS2V5LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHRvZ2dsZVNldHRpbmcgPSAodGl0bGUsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzID0geyAuLi5zZXR0aW5nLCAuLi57IFt0aXRsZV06IHZhbHVlIH0gfTtcclxuICAgIG9wZW5TZXR0aW5nKHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2V0TG9hZGluZyA9ICh0aXRsZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHMgPSB7IC4uLmxvYWRpbmcsIC4uLnsgW3RpdGxlXTogdmFsdWUgfSB9O1xyXG4gICAgc2V0TG9hZGluZyhzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRNZWRpYVJlcXVlc3QgPSAobGlzdCkgPT5cclxuICAgIGxpc3QubWFwKCh7IHJlY0lkLCBpZCwgd2l0aE1lZGlhLCB3aXRoTWVkaWFSZWNJZCB9LCBpKSA9PiAoe1xyXG4gICAgICByZWNJZCxcclxuICAgICAgaWQsXHJcbiAgICAgIHdpdGhNZWRpYVJlY0lkOiB3aXRoTWVkaWFSZWNJZCB8fCB3aXRoTWVkaWE/LnJlY0lkLFxyXG4gICAgICBvcmRlcjogaSxcclxuICAgIH0pKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0gTG9hZCBFZmZlY3QgRGF0YSAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEFkcygpO1xyXG4gIH0sIFtjYW1wYWlnbl0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBydWxlcyA9IHNjcmVlbkNvbmRpdGlvbnM/LmRldGFpbD8ucnVsZXM7XHJcbiAgICBpZiAoIXJ1bGVzPy5sZW5ndGgpIHJldHVybjtcclxuICAgIGNvbnN0IGluaXRMb2NhdGlvbklkcyA9IHJ1bGVzLmZpbmQoKGUpID0+IGUucnVsZVR5cGVzID09PSBcIkxPQ0FUSU9OXCIpPy52YWx1ZVxyXG4gICAgICA/LmxvY2F0aW9uSWRzO1xyXG4gICAgY29uc3QgaW5pdEFyZWFJZHMgPSBydWxlcy5maW5kKChlKSA9PiBlLnJ1bGVUeXBlcyA9PT0gXCJBUkVBXCIpPy52YWx1ZVxyXG4gICAgICA/LmFyZWFJZHM7XHJcbiAgICBjb25zdCBsb2FkTG9jYXRpb25zID0gaGFuZGxlSW5pdFZhbHVlKGluaXRMb2NhdGlvbklkcywgbG9jYXRpb25zKTtcclxuICAgIGNvbnN0IGluaXRBcmVhcyA9IGhhbmRsZUluaXRWYWx1ZShpbml0QXJlYUlkcywgY29sbGVjdEFsbEFyZWFzKTtcclxuXHJcbiAgICBpZiAobG9hZExvY2F0aW9ucz8ubGVuZ3RoKSBzZXRJbml0TG9jYXRpb25zKGxvYWRMb2NhdGlvbnMpO1xyXG4gICAgaWYgKGluaXRBcmVhcz8ubGVuZ3RoKSBzZXRJbml0QXJlYXMoaW5pdEFyZWFzKTtcclxuICB9LCBbc2NyZWVuQ29uZGl0aW9uc10pO1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQVBJIGZ1bmN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgZmV0Y2hBZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWNhbXBhaWduKSByZXR1cm47XHJcbiAgICBoYW5kbGVTZXRMb2FkaW5nKExPQURfS0VZUy5hZHNTZXQsIHRydWUpO1xyXG4gICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBBZHZlcnRpc2VyQXBpQ2xpZW50LmdldENhbXBhaWduQWRzU2V0KGNhbXBhaWduLmlkKTtcclxuICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcclxuICAgICAgcmVzLmRhdGFbMF0uYWRzU2V0TWVkaWFMaXN0ID0gcmVzLmRhdGFbMF0uYWRzU2V0TWVkaWFMaXN0Py5maWx0ZXIoXHJcbiAgICAgICAgKGUpID0+ICEhZS53aXRoTWVkaWFcclxuICAgICAgKTtcclxuICAgICAgc2V0QWRzU2V0KHJlcy5kYXRhWzBdKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVNldExvYWRpbmcoTE9BRF9LRVlTLmFkc1NldCwgZmFsc2UpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gY2hlY2tMaXZlQ29uZGl0aW9uKCkge1xyXG4gICAgaWYgKEFjdGlvbk9uU3RhdHVzKHN0YXR1cykgIT09ICdsaXZlJykgcmV0dXJuIHRydWVcclxuICAgIHJldHVybiBzY3JlZW5Db25kaXRpb25zPy5kZXRhaWw/LnJ1bGVzPy5maW5kKChlKSA9PiBlLnJ1bGVUeXBlcyA9PT0gXCJTQ1JFRU5TXCIpPy52YWx1ZT8uc2NyZWVuSWRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgYWRzU2V0LmFkc1NldE1lZGlhTGlzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgIHNjaGVkdWxlLmJlZ2luVGltZSAmJlxyXG4gICAgICBzY2hlZHVsZS5lbmRUaW1lXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUNhbXBhaWduU3RhdHVzID0gYXN5bmMgKHN0YXR1cykgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJsaXZlXCIgJiYgIWNoZWNrTGl2ZUNvbmRpdGlvbigpKSB7XHJcbiAgICAgIHNldFdhcm5pbmdNc2coJ1BsZWFzZSBhZGQgQWRzdmVydGlzZSB2aWRlbywgU2NyZWVucyBhbmQgU2NoZWR1bGUgYmVmb3JlIG1ha2UgQ2FtcGFpZ24gZ28gbGl2ZSEnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHNldENoYW5nZVN0YXR1cyh0cnVlKTtcclxuICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVDYW1wYWlnbihjYW1wYWlnbj8uaWQsIHtcclxuICAgICAgc3RhdHVzLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzLnN0YXR1cykgc2V0U3RhdHVzKHN0YXR1cyk7XHJcbiAgICBzZXRDaGFuZ2VTdGF0dXMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFkc1NldCA9IGFzeW5jIChuZXdWaWRlb3MpID0+IHtcclxuICAgIGlmICghbmV3VmlkZW9zPy5sZW5ndGgpIHJldHVybjtcclxuICAgIGxldCBtZXJnZURhdGEgPSBbLi4uYWRzU2V0LmFkc1NldE1lZGlhTGlzdCwgLi4ubmV3VmlkZW9zXTtcclxuICAgIHNldE9wZW5WaWRlb0xpYihmYWxzZSk7XHJcbiAgICBhd2FpdCB1cGRhdGVNZWRpYVJlcShtZXJnZURhdGEpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlTWVkaWFSZXEgPSBhc3luYyAobmV3TWVkaWFMaXN0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdNZWRpYUxpc3RSZXEgPSBmb3JtYXRNZWRpYVJlcXVlc3QobmV3TWVkaWFMaXN0KTtcclxuICAgIHNldENoYW5nZWREYXRhKHtcclxuICAgICAgLi4uY2hhbmdlZERhdGEsXHJcbiAgICAgIFtMT0FEX0tFWVMuYWRzU2V0XToge1xyXG4gICAgICAgIGFkc1NldE1lZGlhTGlzdDogbmV3TWVkaWFMaXN0UmVxLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRBZHNTZXQoeyAuLi5hZHNTZXQsIGFkc1NldE1lZGlhTGlzdDogbmV3TWVkaWFMaXN0IH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTWVkaWEgPSAocmVjSWQpID0+IHtcclxuICAgIGlmICghYWRzU2V0Py5hZHNTZXRNZWRpYUxpc3Q/Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gYWRzU2V0LmFkc1NldE1lZGlhTGlzdC5maWx0ZXIoXHJcbiAgICAgIChlKSA9PiAoZS5yZWNJZCB8fCBlLndpdGhNZWRpYS5yZWNJZCkgIT09IHJlY0lkXHJcbiAgICApO1xyXG4gICAgdXBkYXRlTWVkaWFSZXEoZmlsdGVyZWREYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VPcmRlciA9IGFzeW5jIChjaGFuZ2VEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBhcnJhbmdlSWRzID0gY2hhbmdlRGF0YS5tYXAoKGUpID0+IGUuaWQpO1xyXG4gICAgY29uc3QgbmV3T3JkZXJNZWRpYSA9IGFycmFuZ2VJZHMubWFwKChyZWNJZCwgaSkgPT4ge1xyXG4gICAgICBjb25zdCByZWZNZWRpYSA9IGFkc1NldC5hZHNTZXRNZWRpYUxpc3QuZmluZChcclxuICAgICAgICAoZSkgPT4gKGUucmVjSWQgfHwgZS53aXRoTWVkaWEucmVjSWQpID09PSByZWNJZFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnJlZk1lZGlhLFxyXG4gICAgICAgIG9yZGVyOiBpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB1cGRhdGVNZWRpYVJlcShuZXdPcmRlck1lZGlhKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNjaGVkdWxlID0gYXN5bmMgKGNoYW5nZURhdGEpID0+IHtcclxuICAgIGNvbnN0IG5ld1NjaGVkdWxlID0geyAuLi5zY2hlZHVsZSwgLi4uY2hhbmdlRGF0YSB9O1xyXG4gICAgc2V0U2NoZWR1bGUobmV3U2NoZWR1bGUpO1xyXG4gICAgc2V0Q2hhbmdlZERhdGEoeyAuLi5jaGFuZ2VkRGF0YSwgc2NoZWR1bGU6IG5ld1NjaGVkdWxlIH0pO1xyXG4gIH07XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0gaGFuZGxlIENvbmRpdGlvbnMgU2V0dGluZyAtLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUNvbmRpdGlvbnMoY2hhbmdlRGF0YSkge1xyXG4gICAgY29uc3QgbmV3Q29uZGl0aW9ucyA9IHsgLi4uc2NyZWVuQ29uZGl0aW9ucywgLi4uY2hhbmdlRGF0YSB9O1xyXG4gICAgc2V0U2NyZWVuQ29uZGl0aW9ucyhuZXdDb25kaXRpb25zKTtcclxuICAgIHNldENoYW5nZWREYXRhKHsgLi4uY2hhbmdlZERhdGEsIFtMT0FEX0tFWVMuc2NyZWVuXTogbmV3Q29uZGl0aW9ucyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVN0cmF0ZWd5KGV2ZW50KSB7XHJcbiAgICBoYW5kbGVDaGFuZ2VDb25kaXRpb25zKHsgc3RyYXRlZ3k6IFNUUkFURUdJRVNbMF0ua2V5IH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVMb2NhdGlvblNlbGVjdChzZWxlY3REYXRhKSB7XHJcbiAgICBjb25zdCBjaG9zZUxvY2F0aW9ucyA9IGxvY2F0aW9ucz8uZmlsdGVyKChlKSA9PlxyXG4gICAgICBzZWxlY3REYXRhLmluY2x1ZGVzKGUubmFtZSlcclxuICAgICk7XHJcbiAgICAvL1xyXG4gICAgaWYgKGNob3NlTG9jYXRpb25zPy5sZW5ndGgpIHtcclxuICAgICAgbGV0IGNvbGxlY3RBcmVhcyA9IFtdO1xyXG4gICAgICBjaG9zZUxvY2F0aW9ucy5tYXAoXHJcbiAgICAgICAgKGxvY2F0aW9uKSA9PlxyXG4gICAgICAgICAgKGNvbGxlY3RBcmVhcyA9IFsuLi5jb2xsZWN0QXJlYXMsIC4uLmxvY2F0aW9uLmFyZWFzXS5maWx0ZXIoXHJcbiAgICAgICAgICAgIChlKSA9PiAhY29sbGVjdEFyZWFzLmluY2x1ZGVzKGUpXHJcbiAgICAgICAgICApKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRBcmVhT3B0aW9ucyhjb2xsZWN0QXJlYXMpO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBzY3JlZW5Db25kaXRpb25zIHx8IHt9O1xyXG4gICAgaWYgKCFjb25kaXRpb25zLmRldGFpbCkgY29uZGl0aW9ucy5kZXRhaWwgPSB7IHJ1bGVzOiBbXSB9O1xyXG4gICAgY29uZGl0aW9ucy5kZXRhaWwucnVsZXNbMF0gPSB7XHJcbiAgICAgIHJ1bGVUeXBlczogXCJMT0NBVElPTlwiLFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIGxvY2F0aW9uUmVjSWRzOiBjaG9zZUxvY2F0aW9ucy5tYXAoKGUpID0+IGUucmVjSWQpLFxyXG4gICAgICAgIGxvY2F0aW9uSWRzOiBjaG9zZUxvY2F0aW9ucy5tYXAoKGUpID0+IGUuaWQpLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZUNvbmRpdGlvbnMoY29uZGl0aW9ucyk7XHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFyZWFTZWxlY3Qoc2VsZWN0QXJlYXMpIHtcclxuICAgIGNvbnN0IGNob3NlQXJlYXMgPSBhcmVhT3B0aW9ucz8uZmlsdGVyKChhKSA9PiBzZWxlY3RBcmVhcy5pbmNsdWRlcyhhLm5hbWUpKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBzY3JlZW5Db25kaXRpb25zIHx8IHt9O1xyXG4gICAgaWYgKCFjb25kaXRpb25zLmRldGFpbCkgY29uZGl0aW9ucy5kZXRhaWwgPSB7IHJ1bGVzOiBbXSB9O1xyXG4gICAgY29uZGl0aW9ucy5kZXRhaWwucnVsZXNbMV0gPSB7XHJcbiAgICAgIHJ1bGVUeXBlczogXCJBUkVBXCIsXHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgYXJlYVJlY0lkczogY2hvc2VBcmVhcy5tYXAoKGUpID0+IGUucmVjSWQpLFxyXG4gICAgICAgIGFyZWFJZHM6IGNob3NlQXJlYXMubWFwKChlKSA9PiBlLmlkKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhcmVhSWRzID0gY2hvc2VBcmVhcy5tYXAoKGEpID0+IGEuaWQpO1xyXG4gICAgaWYgKCFhcmVhSWRzPy5sZW5ndGgpIHtcclxuICAgICAgaGFuZGxlQ2hhbmdlQ29uZGl0aW9ucyhjb25kaXRpb25zKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU2V0TG9hZGluZyhMT0FEX0tFWVMuc2NyZWVuLCB0cnVlKTtcclxuICAgIGNvbnN0IHNjcmVlbkRhdGEgPSBhd2FpdCBsb2FkQWxsU2NyZWVuKGFyZWFJZHMpO1xyXG4gICAgY29uZGl0aW9ucy5kZXRhaWwucnVsZXNbMl0gPSB7XHJcbiAgICAgIHJ1bGVUeXBlczogXCJTQ1JFRU5TXCIsXHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgc2NyZWVuUmVjSWRzOiBzY3JlZW5EYXRhLm1hcCgoZSkgPT4gZS5yZWNJZCksXHJcbiAgICAgICAgc2NyZWVuSWRzOiBzY3JlZW5EYXRhLm1hcCgoZSkgPT4gZS5pZCksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlQ29uZGl0aW9ucyhjb25kaXRpb25zKTtcclxuICAgIGhhbmRsZVNldExvYWRpbmcoTE9BRF9LRVlTLnNjcmVlbiwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5pdFZhbHVlKGlkcywgaXRlbXMpIHtcclxuICAgIHJldHVybiAoaXRlbXMgJiYgaWRzICYmIGl0ZW1zPy5maWx0ZXIoKGUpID0+IGlkcz8uaW5jbHVkZXMoZS5pZCkpKSB8fCBudWxsO1xyXG4gIH1cclxuICBjb25zdCBbZGVsZXRlUmVjSWQsIHNldFNEZWxldGVSZWNJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBmdW5jdGlvbiBjb25maXJtRGVsZXRlTW9kYWwoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBkZWxldGVSZWNJZCAmJiAoXHJcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxyXG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgTWVkaWFcIlxyXG4gICAgICAgICAgb25FeGVjdXRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNEZWxldGVSZWNJZChudWxsKTtcclxuICAgICAgICAgICAgaGFuZGxlRGVsZXRlTWVkaWEoZGVsZXRlUmVjSWQpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHNob3c9eyEhZGVsZXRlUmVjSWR9XHJcbiAgICAgICAgICBzZXRTaG93PXtzZXRTRGVsZXRlUmVjSWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBmdW5jdGlvbiBoYW5kbGVSZXR1cm5MYXlvdXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2FkaW5nKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXNEYXRhTG9hZGluZyA9ICEhT2JqZWN0LmtleXMobG9hZGluZykuZmluZChrZXkgPT4gISFsb2FkaW5nW2tleV0gJiYga2V5ICE9PSAnYWRzLXNldCcpXHJcbiAgICBpZiAoaXNEYXRhTG9hZGluZykgc2V0V2FybmluZ01zZyhcIlBsZWFzZSB3YWl0IGZvciB1cGRhdGluZyBkYXRhIVwiKVxyXG4gICAgZWxzZSByZXR1cm5QcmVMYXlvdXQoKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NvbmZpcm1EZWxldGVNb2RhbCgpfVxyXG4gICAgICB7IWxvY2F0aW9ucyA/IChcclxuICAgICAgICA8QWRzbGl2ZUxvYWRpbmcgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRvYXN0ZXJcclxuICAgICAgICAgICAgdHlwZT1cImVycm9yXCJcclxuICAgICAgICAgICAgaGFuZGxlU2V0VG9hc3Q9e3NldEVycm9yTXNnfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXtlcnJvck1zZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VG9hc3RlclxyXG4gICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgIGhhbmRsZVNldFRvYXN0PXtzZXRXYXJuaW5nTXNnfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXt3YXJuaW5nTXNnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUb2FzdGVyXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgaGFuZGxlU2V0VG9hc3Q9e3NldFN1Y2Nlc3NNc2d9XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e3N1Y2Nlc3NNc2d9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN1YkxheW91dFxyXG4gICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICA8QWRJY29uIG5hbWU9XCJmdWxsLWxlZnQtYXJyb3dcIiB3PVwiMjBweFwiIG9uQ2xpY2s9e2hhbmRsZVJldHVybkxheW91dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8QWRzbGl2ZUg0PntjYW1wYWlnbj8ubmFtZX08L0Fkc2xpdmVIND5cclxuICAgICAgICAgICAgICAgICAgPFN0YXR1c0JhZGdlIHN0YXR1cz17c3RhdHVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QWRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaWNvbj17PEFkSWNvbiBuYW1lPXtBY3Rpb25PblN0YXR1cyhzdGF0dXMpfSAvPn1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3BhcnNlVGl0bGUoQWN0aW9uT25TdGF0dXMoc3RhdHVzKSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVXBkYXRlQ2FtcGFpZ25TdGF0dXMoQWN0aW9uT25TdGF0dXMoc3RhdHVzKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtTVEFUVVNfQ09MT1Jbc3RhdHVzXX1cclxuICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0NoYW5naW5nU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbXBhaWduQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxBZENhcmRcclxuICAgICAgICAgICAgICAgICAgZnVsbFZpZXdcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZWQ9e3NldHRpbmdbTE9BRF9LRVlTLmFkc1NldF19XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17Q2FtcGFpbkhlYWRlcihhZHNTZXQ/Lm5hbWUsIExPQURfS0VZUy5hZHNTZXQpfVxyXG4gICAgICAgICAgICAgICAgICBib2R5PXtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmRCb2R5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9UZXh0IHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fkc1NldD8uYWRzU2V0TWVkaWFMaXN0Lmxlbmd0aCB8fCBcIi1cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9UZXh0PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb1RleHQgc2l6ZT1cImxnXCI+LTwvSW5mb1RleHQ+IHBsYXllZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nW0xPQURfS0VZUy5hZHNTZXRdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkRHJhZ1dyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthZHNTZXQ/LmFkc1NldE1lZGlhTGlzdD8ubWFwKChlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZS5yZWNJZCB8fCBlLndpdGhNZWRpYT8ucmVjSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZERyYWdJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTRGVsZXRlUmVjSWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlY0lkIHx8IGUud2l0aE1lZGlhLnJlY0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxBZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3dpdGhNZWRpYS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPVwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlLndpdGhNZWRpYT8ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmREcmFnSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoYW5nZSkgPT4gaGFuZGxlQ2hhbmdlT3JkZXIoY2hhbmdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxBZEljb24gbmFtZT1cImNpcmNsZS1ib2xkXCIgdz1cIjI0cHhcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQUREIE1PUkUgVklERU9TXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuVmlkZW9MaWIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWRlb3M/Lm1hcCgodmlkZW8pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dmlkZW8ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZEljb24gdXJsPXt2aWRlby5waG90b1VybH0gcj1cIjJweFwiIHc9XCIyNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TXV0ZWRUZXh0PntgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkc1NldD8uYWRzU2V0TWVkaWFMaXN0Py5sZW5ndGggfHwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gdmlkZW9zYH08L011dGVkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEFkQ2FyZFxyXG4gICAgICAgICAgICAgICAgICBmdWxsVmlld1xyXG4gICAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlZD17c2V0dGluZ1tMT0FEX0tFWVMuc2NyZWVuXX1cclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXtDYW1wYWluSGVhZGVyKFwiU2NyZWVuXCIsIExPQURfS0VZUy5zY3JlZW4pfVxyXG4gICAgICAgICAgICAgICAgICBib2R5PXtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRCb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvVGV4dCBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuQ29uZGl0aW9ucz8uZGV0YWlsPy5ydWxlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiBlLnJ1bGVUeXBlcyA9PT0gXCJTQ1JFRU5TXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKT8udmFsdWU/LnNjcmVlbklkcz8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvVGV4dD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2NyZWVuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvVGV4dCBzaXplPVwibGdcIj57aW5pdExvY2F0aW9ucz8ubGVuZ3RofTwvSW5mb1RleHQ+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdbTE9BRF9LRVlTLnNjcmVlbl0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2hvb3NlIHN0cmF0ZWd5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRWYWx1ZT17W1NUUkFURUdJRVNbMF0uZGVzY119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e1tTVFJBVEVHSUVTWzBdLmRlc2NdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlU3RyYXRlZ3koZXZlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0VmFsdWU9e2luaXRMb2NhdGlvbnM/Lm1hcCgoZSkgPT4gZS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17bG9jYXRpb25zPy5tYXAoKGUpID0+IGUubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTG9jYXRpb25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE11bHRpU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlPXtpbml0QXJlYXM/Lm1hcCgoZSkgPT4gZS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17KGFyZWFPcHRpb25zIHx8IGluaXRBcmVhcyk/Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFyZWEpID0+IGFyZWEubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBcmVhU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRnJlZSB0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRWYWx1ZT17W1wiaGFzIGFueSB2YWx1ZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8QWRJY29uIG5hbWU9XCJjaXJjbGUtYm9sZFwiIHc9XCIyNHB4XCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFERCBNT1JFIFJVTEVTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBZENhcmRcclxuICAgICAgICAgICAgICAgICAgZnVsbFZpZXdcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZWQ9e3NldHRpbmdbTE9BRF9LRVlTLnNjaGVkdWxlXX1cclxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXtDYW1wYWluSGVhZGVyKFwiU2NoZWR1bGVcIiwgTE9BRF9LRVlTLnNjaGVkdWxlKX1cclxuICAgICAgICAgICAgICAgICAgYm9keT17XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheVRpbWUoc2NoZWR1bGU/LmJlZ2luVGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbmR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9UZXh0PntkaXNwbGF5VGltZShzY2hlZHVsZT8uZW5kVGltZSl9PC9JbmZvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ1tMT0FEX0tFWVMuc2NoZWR1bGVdICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU2VsZWN0VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdGFydCBhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0VmFsdWU9e3NjaGVkdWxlPy5iZWdpblRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGFuZ2UpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVNjaGVkdWxlKHsgYmVnaW5UaW1lOiBjaGFuZ2UgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU2VsZWN0VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFbmQgYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlPXtzY2hlZHVsZT8uZW5kVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoYW5nZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlU2NoZWR1bGUoeyBlbmRUaW1lOiBjaGFuZ2UgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7YWRzU2V0ICYmIChcclxuICAgICAgICAgICAgPFNlbGVjdFZpZGVvc01vZGFsXHJcbiAgICAgICAgICAgICAgaGFuZGxlU2hvdz17eyBvcGVuVmlkZW9MaWIsIHNldE9wZW5WaWRlb0xpYiB9fVxyXG4gICAgICAgICAgICAgIGFkc1NldD17YWRzU2V0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBZHNTZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQWRDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NhcmRcIjtcclxuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgU3RhdHVzQmFkZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3RhdHVzLWJhZGdlXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUaW1lLCBwYXJzZVRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2NvbW1vbi51dGlsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1wYWlnbkl0ZW0ocHJvcHMpIHtcclxuICBjb25zdCB7IGNhbXBhaWduIH0gPSBwcm9wcztcclxuICBjb25zdCB7IG5hbWUsIGJlZ2luVGltZSwgZW5kVGltZSwgdmlkZW9zLCBzdGF0dXMsIHNjcmVlbklkcyB9ID0gY2FtcGFpZ25cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYW1wYWlnbkNvbnRhaW5lcn0+XHJcbiAgICAgIDxBZENhcmRcclxuICAgICAgICBjbGlja2FibGVcclxuICAgICAgICBib2R5PXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FtcGFpZ259PlxyXG4gICAgICAgICAgICA8ZGl2PntwYXJzZVRpdGxlKG5hbWUpfTwvZGl2PlxyXG4gICAgICAgICAgICB7YmVnaW5UaW1lICYmIGVuZFRpbWUgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjN0Y4MzhFXCIgfX0+e2Rpc3BsYXlUaW1lKGJlZ2luVGltZSl9IC0ge2Rpc3BsYXlUaW1lKGVuZFRpbWUpfTwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7dmlkZW9zPy5tYXAodmlkZW8gPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt2aWRlby5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgPEFkSWNvbiB1cmw9e3ZpZGVvLnBob3RvVXJsfSByPVwiMnB4XCIgdz1cIjI0cHhcIiBoPVwiMjRweFwiIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIHtgJHt2aWRlb3M/Lmxlbmd0aCB8fCAwfSB2aWRlb3MgY2FzdCBvbiAke3NjcmVlbklkcyB8fCAnLSd9IHNjcmVlbnNgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzQmFkZ2V9PlxyXG4gICAgICAgICAgICAgIDxTdGF0dXNCYWRnZSBzdGF0dXM9e3N0YXR1c30gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCBBZENhcmQsIHsgQ2FyZElucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgeyBBZEljb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XHJcbmltcG9ydCBBZHNsaXZlTG9hZGluZywge1xyXG4gIEFEU0xJVkVfTE9BRElOR19TSVpFLFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xvYWRpbmdcIjtcclxuaW1wb3J0IE5vRGF0YSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9uby1kYXRhXCI7XHJcbmltcG9ydCB1c2VBZHZlcnRpc2VyU3RvcmUgZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUuaG9va1wiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckNvbnRlbnQgZnJvbSBcIi4uL290aGVycy9hZHZlcnRpc2VyLWNvbnRlbnRcIjtcclxuaW1wb3J0IENhbXBhaWduRGV0YWlscyBmcm9tIFwiLi9jYW1wYWlnbi1kZXRhaWxzXCI7XHJcbmltcG9ydCBDYW1wYWlnbkl0ZW0gZnJvbSBcIi4vY2FtcGFpZ24taXRlbVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2ZXJ0aXNlckNhbXBhaWduKCkge1xyXG4gIGNvbnN0IHsgY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnMsIGxvYWRDYW1wYWlnbnMgfSA9IHVzZUFkdmVydGlzZXJTdG9yZSgpO1xyXG4gIGNvbnN0IFtzaG93RmlsdGVyLCBzZXRTaG93RmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd05ld0NhbXBhaWduLCBzZXRTaG93TmV3Q2FtcGFpZ25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhbXBhaWduLCBzZXRTZWxlY3RDYW1wYWlnbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbmV3Q2FtcGFpZ24sIHNldE5ld0NhbXBhaWduXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBDYW1wYWlnbkRldGFpbHNMYXlvdXQgPSAoXHJcbiAgICA8Q2FtcGFpZ25EZXRhaWxzXHJcbiAgICAgIHJldHVyblByZUxheW91dD17KCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdENhbXBhaWduKGZhbHNlKTtcclxuICAgICAgICBzZXRDYW1wYWlnbnMobnVsbCk7XHJcbiAgICAgICAgbG9hZENhbXBhaWducygpO1xyXG4gICAgICB9fVxyXG4gICAgICBjYW1wYWlnbj17c2VsZWN0ZWRDYW1wYWlnbn1cclxuICAgIC8+XHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd05ld0NhbXBhaWduKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUNhbXBhaWduID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC5jcmVhdGVDYW1wYWlnbihuZXdDYW1wYWlnbik7XHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIHNldFNob3dOZXdDYW1wYWlnbihmYWxzZSk7XHJcbiAgICAgIGxvYWRDYW1wYWlnbnMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBGaWx0ZXJMYXlvdXQgPSA8PjwvPjtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlbGVjdGVkQ2FtcGFpZ24gPyAoXHJcbiAgICAgICAgQ2FtcGFpZ25EZXRhaWxzTGF5b3V0XHJcbiAgICAgICkgOiBzaG93RmlsdGVyID8gKFxyXG4gICAgICAgIEZpbHRlckxheW91dFxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8QWR2ZXJ0aXNlckNvbnRlbnRcclxuICAgICAgICAgICAgaGVhZGVyVGl0bGU9XCJDYW1wYWlnbnNcIlxyXG4gICAgICAgICAgICBoZWFkZXJSaWdodENvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8QWRJY29uIG5hbWU9XCJzZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBudWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgPEFkSWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsdGVycy12ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dGaWx0ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEFkSWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2lyY2xlLWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3Q2FtcGFpZ24odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeyFjYW1wYWlnbnMgJiYgKFxyXG4gICAgICAgICAgICA8QWRzbGl2ZUxvYWRpbmcgc2l6ZT17QURTTElWRV9MT0FESU5HX1NJWkUuRVhUUkFfU01BTEx9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NhbXBhaWducz8ubWFwKChjYW1wYWlnbiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0Q2FtcGFpZ24oY2FtcGFpZ24pfT5cclxuICAgICAgICAgICAgICA8Q2FtcGFpZ25JdGVtIGNhbXBhaWduPXtjYW1wYWlnbn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtjYW1wYWlnbnM/Lmxlbmd0aCA9PSAwICYmIDxOb0RhdGEgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUNhbXBhaW5Nb2RhbH1cclxuICAgICAgICAgIHNob3c9e3Nob3dOZXdDYW1wYWlnbn1cclxuICAgICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwuVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXcgQ2FtcGFpZ25cclxuICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDxDYXJkSW5wdXRcclxuICAgICAgICAgICAgICB0aXRsZT1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdDYW1wYWlnbj8ubmFtZX1cclxuICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2FtcGFpZ24oeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ3JlYXRlQ2FtcGFpZ259PlxyXG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgTXV0ZWRUZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgVmlkZW9zUGxheWVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3ZpZGVvcy1wbGF5ZXJcIjtcclxuaW1wb3J0IHVzZUFkdmVydGlzZXJTdG9yZSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5ob29rXCI7XHJcbmltcG9ydCB7IEFkSWNvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ljb25cIjtcclxuaW1wb3J0IHsgVmlkZW9UeXBlIH0gZnJvbSBcIi4uLy4uL3ZpZGVvXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTmV3TWVkaWEge1xyXG4gIHdpdGhNZWRpYTogVmlkZW9UeXBlLFxyXG4gIG9yZGVyOiBudW1iZXJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RWaWRlb3NNb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IHsgaGFuZGxlU2hvdywgYWRzU2V0LCBvbkNoYW5nZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyB2aWRlb3M6IGFsbFZpZGVvcyB9ID0gdXNlQWR2ZXJ0aXNlclN0b3JlKCk7XHJcbiAgY29uc3QgW3ZpZGVvTGliLCBzZXRWaWRlb0xpYl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVmlkZW9zLCBzZXRTZWxlY3RWaWRlb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgY29uc3QgYWRkZWRNZWRpYVZpZGVvcyA9IGFkc1NldD8uYWRzU2V0TWVkaWFMaXN0Py5tYXAoZSA9PiBlLndpdGhNZWRpYSkuZmlsdGVyKGUgPT4gZSkgfHwgW11cclxuICAgIGNvbnN0IGxpYiA9IGFsbFZpZGVvcy5maWx0ZXIodiA9PiAhYWRkZWRNZWRpYVZpZGVvcz8uZmluZChkYXRhID0+IGRhdGEuaWQgPT0gdi5pZCkpXHJcbiAgICBpZihsaWI/Lmxlbmd0aCkgc2V0VmlkZW9MaWIobGliKVxyXG4gICAgcmV0dXJuICgpPT4ge1xyXG4gICAgICBzZXRTZWxlY3RWaWRlbyhbXSlcclxuICAgIH1cclxuICB9LCBbYWRzU2V0XSlcclxuICBjb25zdCBoYW5kbGVTZWxlY3RWaWRlbyA9ICh2aWRlbykgPT4ge1xyXG4gICAgY2hlY2tTZWxlY3RlZCh2aWRlbylcclxuICAgICAgPyBzZXRTZWxlY3RWaWRlbyhzZWxlY3RlZFZpZGVvcy5maWx0ZXIoKGUpID0+IGUuaWQgIT09IHZpZGVvLmlkKSlcclxuICAgICAgOiBzZXRTZWxlY3RWaWRlbyhbLi4uc2VsZWN0ZWRWaWRlb3MsIHZpZGVvXSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVBZGRWaWRlb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlbGVjdGVkVmlkZW9zLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV3TWVkaWE6IE5ld01lZGlhW10gPSBzZWxlY3RlZFZpZGVvcy5tYXAoKHZpZGVvLCBpKSA9PiAoe1xyXG4gICAgICB3aXRoTWVkaWE6IHZpZGVvLFxyXG4gICAgICBvcmRlcjogaSxcclxuICAgIH0pKTtcclxuICAgIG9uQ2hhbmdlKG5ld01lZGlhKVxyXG4gIH07XHJcbiAgY29uc3QgY2hlY2tTZWxlY3RlZCA9ICh2aWRlbykgPT5cclxuICAgIHNlbGVjdGVkVmlkZW9zLmZpbmQoKHYpID0+IHYuaWQgPT09IHZpZGVvLmlkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIHNob3c9e2hhbmRsZVNob3cub3BlblZpZGVvTGlifVxyXG4gICAgICBvbkhpZGU9eygpID0+IGhhbmRsZVNob3cuc2V0T3BlblZpZGVvTGliKGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICA8TW9kYWwuVGl0bGU+QWR2ZXJ0aXNlIFZpZGVvIExpYnJhcnk8L01vZGFsLlRpdGxlPlxyXG4gICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgeyEhdmlkZW9MaWI/Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHt2aWRlb0xpYi5tYXAoKHZpZGVvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnZpZGVvV3JhcHBlcn0gJHtcclxuICAgICAgICAgICAgICAgICAgY2hlY2tTZWxlY3RlZCh2aWRlbykgPyBzdHlsZXMuc2VsZWN0ZWQgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdFZpZGVvKHZpZGVvKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWRJY29uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdEljb259XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVjay1pbi1hLWNpcmNsZS1oaWdobGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaWRlb3NQbGF5ZXIgaXNQcmV2aWV3IGtleT17aX0gZGF0YT17dmlkZW99IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99Pnt2aWRlby5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHt2aWRlb0xpYj8ubGVuZ3RoID09IDAgJiYgPE11dGVkVGV4dD5Ob3QgRm91bmQ8L011dGVkVGV4dD59XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cuc2V0T3BlblZpZGVvTGliKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDYW5jZWxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQWRkVmlkZW9zfSBkaXNhYmxlZD17IXNlbGVjdGVkVmlkZW9zLmxlbmd0aH0+XHJcbiAgICAgICAgICBBZGQgVmlkZW9zXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBBZHZlcnRpc2VyTGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXQvYWR2ZXJ0aXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2ZXJ0aXNlclBhZ2VDb250ZW50KCkge1xyXG4gIHJldHVybiA8QWR2ZXJ0aXNlckxheW91dCAvPjtcclxufVxyXG4iLCJpbXBvcnQgeyBBZHNsaXZlSDQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IEFkc2xpdmVDb21wb25lbnRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kZWZpbml0aW9ucy90eXBlc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgQWR2ZXJ0aXNlckNvbnRlbnRQcm9wcyA9IHtcclxuICBoZWFkZXJUaXRsZT86IGFueTtcclxuICBoZWFkZXJMZWZ0Q29udGVudD86IGFueTtcclxuICBoZWFkZXJSaWdodENvbnRlbnQ/OiBhbnk7XHJcbiAgaGVhZGVyQm90dG9tQ29udGVudD86IGFueTtcclxuICBjaGlsZHJlbj86IGFueTtcclxufSAmIEFkc2xpdmVDb21wb25lbnRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmVydGlzZXJDb250ZW50KHtcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgaGVhZGVyTGVmdENvbnRlbnQsXHJcbiAgaGVhZGVyUmlnaHRDb250ZW50LFxyXG4gIGhlYWRlckJvdHRvbUNvbnRlbnQsXHJcbiAgaGVhZGVyVGl0bGUsXHJcbiAgY2hpbGRyZW4sXHJcbn06IEFkdmVydGlzZXJDb250ZW50UHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnRpc2VyQ29udGVudH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJUb3B9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnRpc2VyQ29udGVudEhlYWRlclRvcExlZnR9PlxyXG4gICAgICAgICAgICB7aGVhZGVyVGl0bGV9XHJcbiAgICAgICAgICAgIHtoZWFkZXJMZWZ0Q29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHZlcnRpc2VyQ29udGVudEhlYWRlclRvcFJpZ2h0fT5cclxuICAgICAgICAgICAge2hlYWRlclJpZ2h0Q29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtoZWFkZXJCb3R0b21Db250ZW50ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJCb3R0b219PlxyXG4gICAgICAgICAgICB7aGVhZGVyQm90dG9tQ29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmVydGlzZXJDb250ZW50Q29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQURTTElWRUJ1dHRvbiwgeyBBZEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvblwiO1xyXG5pbXBvcnQgQWRDYXJkLCB7IENhcmRTZWxlY3QgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VyU3RvcmVBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvYWR2ZXJ0aXNlci1zdG9yZS9hZHZlcnRpc2VyLXN0b3JlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHVzZUFkdmVydGlzZXJTdG9yZSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5ob29rXCI7XHJcbmltcG9ydCBTdWJMYXlvdXQgZnJvbSBcIi4uLy4uL3N1Yi1sYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IE11dGVkVGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kaXZpZGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByZWNJZDogc3RyaW5nO1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIFNlbGVjdE9wdGlvbnMge1xyXG4gIG1hbmFnZUxvY2F0aW9ucyA9IFwiTWFuYWdlIExvY2F0aW9uc1wiLFxyXG4gIHNldHVwRGV2aWNlID0gXCJTZXR1cCBkZXZpY2VcIixcclxuICBjaGFuZ2VQYXNzd29yZCA9IFwiQ2hhbmdlIHBhc3N3b3JkXCIsXHJcbiAgc2hhcmVTY3JlZW4gPSBcIlNoYXJlIHNjcmVlblwiLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmVydGlzZXJQcm9maWxlKCkge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQWR2ZXJ0aXNlclN0b3JlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oYXV0aD8udXNlcik7XHJcbiAgY29uc3QgbWVudUJ1dHRvbnMgPSBbXHJcbiAgICBTZWxlY3RPcHRpb25zLm1hbmFnZUxvY2F0aW9ucyxcclxuICAgIFNlbGVjdE9wdGlvbnMuc2V0dXBEZXZpY2UsXHJcbiAgICBTZWxlY3RPcHRpb25zLmNoYW5nZVBhc3N3b3JkLFxyXG4gICAgU2VsZWN0T3B0aW9ucy5zaGFyZVNjcmVlbixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3ViTGF5b3V0XHJcbiAgICAgICAgaGVhZGVyPXs8c3Bhbj5Qcm9maWxlPC9zcGFuPn1cclxuICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgICAgICA8QWRDYXJkXHJcbiAgICAgICAgICAgICAgICBib2R5PXtcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlci5lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5jcmVhdGVkQXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVOG6oW8gbmfDoHl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQodXNlci5jcmVhdGVkQXQpLmZvcm1hdChcImQvTU1NL3l5IEhIOk1NXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8TXV0ZWRUZXh0Pnt1c2VyLnJlY0lkfTwvTXV0ZWRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcG9ydENhcmR9PlxyXG4gICAgICAgICAgICAgIDxkaXY+QWxsIGNhbXBhaWduIHJlcG9ydHM8L2Rpdj5cclxuICAgICAgICAgICAgICA8QWRJY29uIG5hbWU9XCJEb3dubG9hZFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVDYXJkfT5cclxuICAgICAgICAgICAgICB7bWVudUJ1dHRvbnMubWFwKChvcHQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwcHggMTJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNdXRlZFRleHQ+e29wdH08L011dGVkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtpICE9PSBtZW51QnV0dG9ucy5sZW5ndGggLSAxICYmIDxEaXZpZGVyIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nT3V0QnRuV3JhcH0+XHJcbiAgICAgICAgICAgICAgICA8QWRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb2cgb3V0XCJcclxuICAgICAgICAgICAgICAgICAgaWNvbj17PEFkSWNvbiBuYW1lPVwiYXR0ZW50aW9uLWhpZ2hsaWdodFwiIG1yPXs2fSAvPn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFkdmVydGlzZXJTdG9yZUFjdGlvbnMuc2lnbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA+PC9TdWJMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQganF1ZXJ5IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9qcXVlcnkudXRpbFwiO1xyXG5pbXBvcnQgQWRzbGl2ZUljb24sIHtcclxuICBBRFNMSVZFX0lDT05fU0laRSxcclxuICBBRFNMSVZFX0lDT05fVFlQRSxcclxuICBBRFNMSVZFX0lDT05fVkFSSUFOVCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XHJcbmltcG9ydCB7IEFkc2xpdmVCb2R5MTYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHBhcnNlVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY29tbW9uLnV0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmVydGlzZXJBcmVhVGFicyh7XHJcbiAgYXJlYXMgPSBbXSxcclxuICBjdXJyZW50QXJlYSxcclxuICBjaGFuZ2VDdXJyZW50QXJlYSxcclxuICBzaG93U2V0dGluZ1xyXG59KSB7XHJcbiAgY29uc3QgYXJlYXNSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0aXNlckFyZWFUYWJzfT5cclxuICAgICAgPGRpdiByZWY9e2FyZWFzUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5hcmVhc30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXJlYXNMaXN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthcmVhcy5tYXAoKGFyZWEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBZHNsaXZlQm9keTE2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBpZD17YGFyZWEtJHthcmVhLmlkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJlYX0gJHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmVhPy5pZCA9PT0gYXJlYT8uaWQgPyBzdHlsZXMuYWN0aXZlZCA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmVhPy5pZCA9PT0gYXJlYT8uaWRcclxuICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgIDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJlYUxlZnRQb3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXJlYS0ke2FyZWEuaWR9YCkub2Zmc2V0TGVmdCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxNjtcclxuICAgICAgICAgICAgICAgICAgICAgIGFyZWFzUmVmPy5jdXJyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpxdWVyeShhcmVhc1JlZj8uY3VycmVudCkuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNjcm9sbExlZnQ6IGFyZWFMZWZ0UG9zIC0gMTYgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRBcmVhICYmIGNoYW5nZUN1cnJlbnRBcmVhKGFyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGFyc2VUaXRsZShhcmVhPy5uYW1lKX1cclxuICAgICAgICAgICAgPC9BZHNsaXZlQm9keTE2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QWRzbGl2ZUljb25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULlNFVFRJTkd9XHJcbiAgICAgICAgdHlwZT17QURTTElWRV9JQ09OX1RZUEUuQk9MRH1cclxuICAgICAgICBzaXplPXtBRFNMSVZFX0lDT05fU0laRS5TTUFMTH1cclxuICAgICAgICBvbkNsaWNrPXtzaG93U2V0dGluZ31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRzbGl2ZUljb24sIHtcclxuICBBRFNMSVZFX0lDT05fQ09MT1IsXHJcbiAgQURTTElWRV9JQ09OX1NJWkUsXHJcbiAgQURTTElWRV9JQ09OX1RZUEUsXHJcbiAgQURTTElWRV9JQ09OX1ZBUklBTlQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgQWRzbGl2ZUxvYWRpbmcsIHtcclxuICBBRFNMSVZFX0xPQURJTkdfU0laRSxcclxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XHJcbmltcG9ydCB1c2VBZHZlcnRpc2VyU3RvcmUgZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9hZHZlcnRpc2VyLXN0b3JlL2FkdmVydGlzZXItc3RvcmUuaG9va1wiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckNvbnRlbnQgZnJvbSBcIi4uL290aGVycy9hZHZlcnRpc2VyLWNvbnRlbnRcIjtcclxuaW1wb3J0IEFkdmVydGlzZXJBcmVhVGFicyBmcm9tIFwiLi9hcmVhLXRhYnNcIjtcclxuaW1wb3J0IExvY2F0aW9uU2V0dGluZyBmcm9tIFwiLi9sb2NhdGlvbi1zZXR0aW5nXCI7XHJcbmltcG9ydCBTY3JlZW5EZXRhaWxzIGZyb20gXCIuL3NjcmVlbi1kZXRhaWxzXCI7XHJcbmltcG9ydCBTY2FuUVIgZnJvbSBcIi4vc2NhblFSXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VyU2NyZWVuSXRlbXMgZnJvbSBcIi4vc2NyZWVuLWl0ZW1zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCBSZWZyZXNoc2VySWNvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9yZWZyZXNoZXItaWNvblwiO1xyXG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3ByZXZpb3VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZHZlcnRpc2VyU2NyZWVuKCkge1xyXG4gIGNvbnN0IHsgbG9jYXRpb25zLCBsb2FkTG9jYXRpb25zIH0gPSB1c2VBZHZlcnRpc2VyU3RvcmUoKTtcclxuICBjb25zdCBwcmVMb2NhdGlvbiA9IHVzZVByZXZpb3VzKGxvY2F0aW9ucylcclxuICBjb25zdCBbY3VycmVudExvY2F0aW9uLCBzZXRDdXJyZW50TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2N1cnJlbnRBcmVhLCBzZXRDdXJyZW50QXJlYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hvd1NldHRpbmcsIHNldFNob3dTZXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd05ld1NjcmVlbiwgc2V0U2hvd05ld1NjcmVlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkU2NyZWVuLCBzZXRTZWxlY3RTY3JlZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzUmVmcmVzaCwgc2V0SXNSZWZyZXNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTG9jYXRpb24gPSAobG9jYXRpb24pID0+IHtcclxuICAgIGlmICghbG9jYXRpb24pIHJldHVybjtcclxuICAgICAgc2V0Q3VycmVudExvY2F0aW9uKGxvY2F0aW9uKTtcclxuICAgICAgY29uc3QgYXJlYSA9IGN1cnJlbnRBcmVhIHx8IGxvY2F0aW9uLmFyZWFzID8gbG9jYXRpb24uYXJlYXNbMF0gOiBudWxsXHJcbiAgICAgIHNldEN1cnJlbnRBcmVhKGFyZWEpO1xyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVmcmVzaCgpIHtcclxuICAgIHNldElzUmVmcmVzaCh0cnVlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgbG9hZExvY2F0aW9ucygpXHJcbiAgICBpZiAocmVzKSBzZXRJc1JlZnJlc2goZmFsc2UpXHJcbiAgICBpZiAocmVzLmVycm9yKSBzZXRFcnJvcihyZXMuZXJyb3IuZGF0YT8uZXJyb3I/Lm1lc3NhZ2UgfHwgJ0FuIGVycm9yIGhhcHBlbm5lZCcpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2F0aW9ucyAmJiBKU09OLnN0cmluZ2lmeShsb2NhdGlvbnMpICE9PSBKU09OLnN0cmluZ2lmeShwcmVMb2NhdGlvbikpIHtcclxuICAgICAgY29uc3QgbmV3Q3VycmVudExvY2F0aW9uID0gbG9jYXRpb25zLmZpbmQoZSA9PiBlLmlkID09PSBjdXJyZW50TG9jYXRpb24/LmlkKVxyXG4gICAgICBoYW5kbGVDaGFuZ2VMb2NhdGlvbihuZXdDdXJyZW50TG9jYXRpb24gfHwgbG9jYXRpb25zWzFdKTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25zXSk7XHJcblxyXG4gIGNvbnN0IFNldHRpbmcgPSAoXHJcbiAgICA8TG9jYXRpb25TZXR0aW5nXHJcbiAgICAgIHJldHVyblByZUxheW91dD17KCkgPT4gc2V0U2hvd1NldHRpbmcoZmFsc2UpfVxyXG4gICAgICBsb2NhdGlvbj17Y3VycmVudExvY2F0aW9ufVxyXG4gICAgLz5cclxuICApO1xyXG4gIGNvbnN0IE5ld1NjcmVlbkxheW91dCA9IChcclxuICAgIDxTY2FuUVJcclxuICAgICAgcmV0dXJuUHJlTGF5b3V0PXsoKSA9PiBzZXRTaG93TmV3U2NyZWVuKGZhbHNlKX1cclxuICAgICAgY3VycmVudEFyZWE9e2N1cnJlbnRBcmVhfVxyXG4gICAgICBjdXJyZW50TG9jYXRpb249e2N1cnJlbnRMb2NhdGlvbn1cclxuICAgIC8+XHJcbiAgKTtcclxuICBjb25zdCBTY3JlZW5EZXRhaWxzTGF5b3V0ID0gKFxyXG4gICAgPFNjcmVlbkRldGFpbHNcclxuICAgICAgcmV0dXJuUHJlTGF5b3V0PXsoKSA9PiBzZXRTZWxlY3RTY3JlZW4oZmFsc2UpfVxyXG4gICAgICBsb2NhdGlvbkRhdGE9e2N1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgZGVsZXRlU2NyZWVuPXsoKSA9PiB7IH19XHJcbiAgICAgIHNjcmVlbkRhdGE9e3NlbGVjdGVkU2NyZWVufVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NlbGVjdGVkU2NyZWVuID8gKFxyXG4gICAgICAgIFNjcmVlbkRldGFpbHNMYXlvdXRcclxuICAgICAgKSA6IHNob3dOZXdTY3JlZW4gPyAoXHJcbiAgICAgICAgTmV3U2NyZWVuTGF5b3V0XHJcbiAgICAgICkgOiBzaG93U2V0dGluZyA/IChcclxuICAgICAgICBTZXR0aW5nXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxBZHZlcnRpc2VyQ29udGVudFxyXG4gICAgICAgICAgICBoZWFkZXJUaXRsZT17XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBpZD1cImRyb3Bkb3duLWJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50TG9jYXRpb24/Lm5hbWUgfHwgXCJTZWxlY3QgTG9jYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICB7bG9jYXRpb25zPy5tYXAoKGxvY2F0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZUxvY2F0aW9uKGxvY2F0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVhZGVyUmlnaHRDb250ZW50PXtcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxNnB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgIDxSZWZyZXNoc2VySWNvbiBpc0xvYWRpbmc9e2lzUmVmcmVzaH0gb25DbGljaz17aGFuZGxlUmVmcmVzaH0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxBZHNsaXZlSWNvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtBRFNMSVZFX0lDT05fVkFSSUFOVC5TRUFSQ0h9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e0FEU0xJVkVfSUNPTl9UWVBFLlJFR1VMQVJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtBRFNMSVZFX0lDT05fQ09MT1IuTk9STUFMfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBZHNsaXZlSWNvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRJY29ufVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtBRFNMSVZFX0lDT05fVkFSSUFOVC5DSVJDTEVfUExVU31cclxuICAgICAgICAgICAgICAgICAgdHlwZT17QURTTElWRV9JQ09OX1RZUEUuQk9MRH1cclxuICAgICAgICAgICAgICAgICAgY29sb3I9e0FEU0xJVkVfSUNPTl9DT0xPUi5QUklNQVJZfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPXtBRFNMSVZFX0lDT05fU0laRS5TTUFMTH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dOZXdTY3JlZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWRlckJvdHRvbUNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxBZHZlcnRpc2VyQXJlYVRhYnNcclxuICAgICAgICAgICAgICAgIGFyZWFzPXtjdXJyZW50TG9jYXRpb24/LmFyZWFzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEFyZWE9e2N1cnJlbnRBcmVhfVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlQ3VycmVudEFyZWE9eyhhcmVhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBcmVhKGFyZWEpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNob3dTZXR0aW5nPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNob3dTZXR0aW5nKCFzaG93U2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvQWR2ZXJ0aXNlckNvbnRlbnQ+XHJcbiAgICAgICAgICB7Y3VycmVudEFyZWEgJiYgKFxyXG4gICAgICAgICAgICA8QWR2ZXJ0aXNlclNjcmVlbkl0ZW1zXHJcbiAgICAgICAgICAgICAgaWQ9e2N1cnJlbnRBcmVhPy5pZH1cclxuICAgICAgICAgICAgICBhcmVhTmFtZT17Y3VycmVudEFyZWE/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgc2VsZWN0U2NyZWVuPXsoc2NyZWVuKSA9PiBzZXRTZWxlY3RTY3JlZW4oc2NyZWVuKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIE1vZGFsLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCB7IEFkQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBBZENhcmQsIHtcclxuICBDYXJkRHJhZ0l0ZW0sXHJcbiAgQ2FyZERyYWdXcmFwcGVyLFxyXG4gIENhcmRJbnB1dCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBDb25maXJtTW9kYWwgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29uZmlybU1vZGFsXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpdmlkZXJcIjtcclxuaW1wb3J0IEFkc2xpdmVJY29uLCB7XHJcbiAgQWRJY29uLFxyXG4gIEFEU0xJVkVfSUNPTl9DT0xPUixcclxuICBBRFNMSVZFX0lDT05fU0laRSxcclxuICBBRFNMSVZFX0lDT05fVFlQRSxcclxuICBBRFNMSVZFX0lDT05fVkFSSUFOVCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdGVyXCI7XHJcbmltcG9ydCB7IEFkc2xpdmVINCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHVzZUFkdmVydGlzZXJTdG9yZSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVzL2FkdmVydGlzZXItc3RvcmUvYWR2ZXJ0aXNlci1zdG9yZS5ob29rXCI7XHJcbmltcG9ydCB7IHBhcnNlVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY29tbW9uLnV0aWxcIjtcclxuaW1wb3J0IFN1YkxheW91dCBmcm9tIFwiLi4vLi4vLi4vc3ViLWxheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25TZXR0aW5nKHsgcmV0dXJuUHJlTGF5b3V0LCBsb2NhdGlvbiB9KSB7XHJcbiAgY29uc3QgYWRkQXJlYSA9IChhcmVhKSA9PiB7IH07XHJcbiAgY29uc3QgeyBsb2NhdGlvbnMsIGxvYWRMb2NhdGlvbnMgfSA9IHVzZUFkdmVydGlzZXJTdG9yZSgpXHJcbiAgY29uc3QgW2xvY2F0aW9uRGF0YSwgc2V0TG9jYXRpb25EYXRhXSA9IHVzZVN0YXRlKGxvY2F0aW9uKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShsb2NhdGlvbj8ubmFtZSk7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUobG9jYXRpb24/LmFkZHJlc3MpO1xyXG4gIGNvbnN0IFtzaG93TmV3QXJlYSwgc2V0U2hvd05ld0FyZWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW25ld0FyZWEsIHNldE5ld0FyZWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VjY2Vzc01zZywgc2V0U3VjY2Vzc01zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsZXRlQXJlYUlkLCBzZXREZWxldGVBcmVhSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmdEcmFnSXRlbXMsIHNldExvYWRpbmdEcmFnSXRlbXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkYXRhQ2hhbmdlZCwgc2V0RGF0YUNoYW5nZWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4gc2V0U2hvd05ld0FyZWEoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUFyZWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG93TmV3QXJlYShmYWxzZSk7XHJcbiAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBBZHZlcnRpc2VyQXBpQ2xpZW50LmNyZWF0ZUFyZWEoXHJcbiAgICAgIGxvY2F0aW9uRGF0YT8uaWQsXHJcbiAgICAgIG5ld0FyZWFcclxuICAgICk7XHJcbiAgICBpZiAocmVzPy5kYXRhKSBsb2FkTG9jYXRpb25zKClcclxuICAgIGlmIChyZXNbJ2Vycm9yJ10pIHtcclxuICAgICAgc2V0RXJyb3JNc2cocmVzWydlcnJvciddWydkYXRhJ11bJ2Vycm9yJ11bJ21lc3NhZ2UnXSlcclxuICAgIH1cclxuICAgIGlmIChyZXM/LmRhdGEpIHtcclxuICAgICAgc2V0U3VjY2Vzc01zZygnVXBkYXRlZCBTY2hlZHVsZScpXHJcbiAgICB9XHJcbiAgfTtcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGVBcmVhKGlkKSB7XHJcbiAgICBoYW5kbGVMb2FkRHJhZ0l0ZW0oaWQsIHRydWUpXHJcbiAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBBZHZlcnRpc2VyQXBpQ2xpZW50LmRlbGV0ZUFyZWEoaWQpXHJcbiAgICBpZiAocmVzPy5kYXRhKSB7XHJcbiAgICAgIGxvYWRMb2NhdGlvbnMoKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gaGFuZGxlTG9hZERyYWdJdGVtKGlkLCBpc0xvYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBzZXRMb2FkaW5nRHJhZ0l0ZW1zKHsgLi4ubG9hZGluZ0RyYWdJdGVtcywgW2lkXTogaXNMb2FkaW5nIH0pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU9yZGVyKGNoYW5nZSkge1xyXG4gICAgaWYgKCFjaGFuZ2U/Lmxlbmd0aCkgcmV0dXJuXHJcbiAgICBjb25zdCBuZXdBcmVhcyA9IGNoYW5nZS5tYXAoZSA9PiBsb2NhdGlvbi5hcmVhcy5maW5kKGFyZWEgPT4gYXJlYS5yZWNJZCA9PT0gZS5pZCkpXHJcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobmV3QXJlYXMpICE9PSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbi5hcmVhcykpIHtcclxuICAgICAgY29uc3QgbG9hZEFsbCA9IG5ld0FyZWFzLnJlZHVjZSgocmVzLCBjdXIpID0+IHJlcyA9IHsgLi4ucmVzLCBbY3VyLmlkXTogdHJ1ZSB9LCB7fSlcclxuICAgICAgc2V0TG9hZGluZ0RyYWdJdGVtcyhsb2FkQWxsKVxyXG4gICAgICBuZXdBcmVhcy5mb3JFYWNoKChhcmVhLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBhcmVhPy5pZFxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVBcmVhKGlkLCB7IG9yZGVyOiBpICsgMSB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuZXdBcmVhcy5sZW5ndGggLSAxID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgbG9hZExvY2F0aW9ucygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24oaXNDaGFuZ2UpIHtcclxuICAgIGlmICghaXNDaGFuZ2UpIHJldHVyblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHsuLi5sb2NhdGlvbkRhdGEsIC4uLntuYW1lLCBhZGRyZXNzfX1cclxuICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVMb2NhdGlvbihsb2NhdGlvbi5pZCwgbmV3RGF0YSlcclxuICAgIGlmIChyZXM/LmRhdGEpIHtcclxuICAgICAgc2V0U3VjY2Vzc01zZyhcIlVwZGF0ZWQhXCIpXHJcbiAgICAgIHNldExvY2F0aW9uRGF0YSh7Li4ubG9jYXRpb25EYXRhLCAuLi5yZXMuZGF0YX0pXHJcbiAgICB9XHJcbiAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTXNnKHJlcy5lcnJvci5kYXRhPy5tZXNzYWdlIHx8ICdGYWlsZWQnKVxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYXRpb25EYXRhKGxvY2F0aW9ucz8uZmluZChlID0+IGxvY2F0aW9uLmlkID09PSBlLmlkKSB8fCBsb2NhdGlvbilcclxuICAgIGlmIChkZWxldGVBcmVhSWQgJiYgbG9jYXRpb24uYXJlYXMuaW5jbHVkZXMoZSA9PiBlLmlkID09PSBkZWxldGVBcmVhSWQpKSB7XHJcbiAgICAgIC8vIGhhbmRsZUxvYWREcmFnSXRlbShkZWxldGVBcmVhSWQsIGZhbHNlKVxyXG4gICAgICBzZXREZWxldGVBcmVhSWQobnVsbCk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nRHJhZ0l0ZW1zKHt9KVxyXG4gIH0sIFtsb2NhdGlvbiwgbG9jYXRpb25zXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbmZpcm1Nb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiRGVsZXRlIE1lZGlhXCJcclxuICAgICAgICBvbkV4ZWN1dGU9eygpID0+IHtcclxuICAgICAgICAgIGhhbmRsZURlbGV0ZUFyZWEoZGVsZXRlQXJlYUlkKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNob3c9eyEhZGVsZXRlQXJlYUlkfVxyXG4gICAgICAgIHNldFNob3c9e3NldERlbGV0ZUFyZWFJZH1cclxuICAgICAgLz5cclxuICAgICAgPFRvYXN0ZXIgdHlwZT1cImVycm9yXCIgaGFuZGxlU2V0VG9hc3Q9e3NldEVycm9yTXNnfSBtZXNzYWdlPXtlcnJvck1zZ30gLz5cclxuICAgICAgPFRvYXN0ZXIgdHlwZT1cInN1Y2Nlc3NcIiBoYW5kbGVTZXRUb2FzdD17c2V0U3VjY2Vzc01zZ30gbWVzc2FnZT17c3VjY2Vzc01zZ30gLz5cclxuICAgICAgPFN1YkxheW91dFxyXG4gICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWRzbGl2ZUljb25cclxuICAgICAgICAgICAgICB2YXJpYW50PXtBRFNMSVZFX0lDT05fVkFSSUFOVC5GVUxMX0xFRlRfQVJST1d9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICB0eXBlPXtBRFNMSVZFX0lDT05fVFlQRS5CT0xEfVxyXG4gICAgICAgICAgICAgIHNpemU9e0FEU0xJVkVfSUNPTl9TSVpFLlNNQUxMfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldHVyblByZUxheW91dChkYXRhQ2hhbmdlZCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBZHNsaXZlSDQ+TG9jYXRpb24gU2V0dGluZzwvQWRzbGl2ZUg0PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgPEFkQ2FyZFxyXG4gICAgICAgICAgICAgIGhlYWRlcj17PGRpdj57bG9jYXRpb25EYXRhPy5uYW1lfTwvZGl2Pn1cclxuICAgICAgICAgICAgICBib2R5PXtcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXNPdXQ9e3VwZGF0ZUxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzcz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50KSA9PiBzZXRBZGRyZXNzKHtkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1c091dD17dXBkYXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbkRhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRHJhZ1dyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtsb2NhdGlvbkRhdGE/LmFyZWFzPy5tYXAoKGFyZWEpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhcmVhLnJlY0lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJlYS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZERyYWdJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ0RyYWdJdGVtc1thcmVhLmlkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZUFyZWFJZChhcmVhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhcnNlVGl0bGUoYXJlYT8ubmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRHJhZ0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGFuZ2UpID0+IGhhbmRsZUNoYW5nZU9yZGVyKGNoYW5nZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPEFkQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZEJ0blxyXG4gICAgICAgICAgICAgICAgICAgIGdob3N0XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWRzbGl2ZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17QURTTElWRV9JQ09OX1ZBUklBTlQuQ0lSQ0xFX1BMVVN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtBRFNMSVZFX0lDT05fQ09MT1IuUFJJTUFSWX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17QURTTElWRV9JQ09OX1RZUEUuQk9MRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17QURTTElWRV9JQ09OX1NJWkUuU01BTEx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFERCBNT1JFIEFSRUFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd05ld0FyZWEodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgIDxBZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2FyZEJ0blxyXG4gICAgICAgICAgICAgICAgZGFzaFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEFkSWNvbiBuYW1lPVwiaW4tYS1jaXJjbGVcIiAvPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQUREIExPQ0FUSU9OXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRBcmVhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVDYW1wYWluTW9kYWx9XHJcbiAgICAgICAgICBzaG93PXtzaG93TmV3QXJlYX1cclxuICAgICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwuVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNyZWF0ZSBOZXcgQXJlYTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Q2FyZElucHV0XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3QXJlYT8ubmFtZX1cclxuICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldE5ld0FyZWEoe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgb3JkZXI6IGxvY2F0aW9uRGF0YT8uYXJlYXM/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUFyZWF9PlxyXG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWRJY29uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgeyBBZHNsaXZlSDQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBTdWJMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL3N1Yi1sYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JlZW5EZXRhaWxzIGZyb20gXCIuLi9zY3JlZW4tZGV0YWlsc1wiO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3RlclwiO1xyXG5cclxuLy8gaW1wb3J0IFFyUmVhZGVyIGZyb20gXCJyZWFjdC1xci1yZWFkZXJcIlxyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VyQXBpQ2xpZW50IGZyb20gXCIuLi8uLi8uLi8uLi9hcGktY2xpZW50cy9hZHZlcnRpc2VyLmFwaS1jbGllbnRcIjtcclxuaW1wb3J0IEFkc2xpdmVMb2FkaW5nLCB7XHJcbiAgQURTTElWRV9MT0FESU5HX1NJWkUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xyXG5jb25zdCBRclJlYWRlcjogYW55ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xci1yZWFkZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmludGVyZmFjZSBRUl9EQVRBIHtcclxuICBhcHBWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZGV2aWNlQ29kZTogc3RyaW5nO1xyXG4gIGRldmljZUlwOiBzdHJpbmc7XHJcbiAgZGV2aWNlTmFtZTogc3RyaW5nO1xyXG4gIGRldmljZU9TOiBzdHJpbmc7XHJcbiAgZGV2aWNlVHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjYW5RUih7XHJcbiAgcmV0dXJuUHJlTGF5b3V0LFxyXG4gIGN1cnJlbnRBcmVhLFxyXG4gIGN1cnJlbnRMb2NhdGlvbixcclxufSkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxRUl9EQVRBPihudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHNlbmRDb2RlID0gKCkgPT4gbnVsbDtcclxuICBjb25zdCBoYW5kbGVTY2FuID0gKGRhdGEpID0+IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgICAgZGV2aWNlQ29kZToganNvbkRhdGEuZGV2aWNlQ29kZSxcclxuICAgICAgICBkZXZpY2VUeXBlOiBqc29uRGF0YS5kZXZpY2VUeXBlLFxyXG4gICAgICAgIGRldmljZU5hbWU6IGpzb25EYXRhLmRldmljZU5hbWUsXHJcbiAgICAgICAgZGV2aWNlSXA6IGpzb25EYXRhLmRldmljZUlwLFxyXG4gICAgICAgIGRldmljZU9TOiBqc29uRGF0YS5kZXZpY2VPUyxcclxuICAgICAgICBhcHBWZXJzaW9uOiBqc29uRGF0YS5hcHBWZXJzaW9uLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIXJlcy5kZXZpY2VDb2RlKSBzZXRFcnJvcihcIldyb25nIFFSIGNvZGUhXCIpO1xyXG4gICAgICBzZXRSZXN1bHQocmVzKTtcclxuICAgICAgaGFuZGxlU2Nhbk5ld1NjcmVlbihyZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJDYW4gbm90IHJlYWQgdGhpcyBRUiBjb2RlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICBzZXRFcnJvcihlcnIpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU2Nhbk5ld1NjcmVlbiA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBBZHZlcnRpc2VyQXBpQ2xpZW50LmNyZWF0ZVNjcmVlbihcclxuICAgICAgY3VycmVudEFyZWEuaWQsXHJcbiAgICAgIGRhdGFcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZXJyb3IpO1xyXG4gICAgaWYgKHJlcz8uZXJyb3IpIHNldEVycm9yKGBTY2FuIFFSIEZhaWxlZCEgJHtyZXMuZXJyb3IuZGF0YT8ubWVzc2FnZSB8fCAnU29ycnkgc29tZXRoaW5nIHdlbnQgd3JvbmchJ31gKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgaWYgKHJlcz8uZGF0YSkge1xyXG4gICAgICBzZXRTdWNjZXNzKFwiVXBsb2FkZWQgbmV3IHNjcmVlbiBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgTWFudWFsSW5wdXQgPSAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBoZXJlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29kZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8QWRJY29uIG5hbWU9XCJjb2RlXCIgY2xhc3NOYW1lPXtzdHlsZXMuY29kZUljb259IC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXtzZW5kQ29kZX1cclxuICAgICAgPlxyXG4gICAgICAgIFNFTkRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VG9hc3RlciB0eXBlPVwiZXJyb3JcIiBoYW5kbGVTZXRUb2FzdD17c2V0RXJyb3J9IG1lc3NhZ2U9e2Vycm9yfSAvPlxyXG4gICAgICA8VG9hc3RlciB0eXBlPVwic3VjY2Vzc1wiIGhhbmRsZVNldFRvYXN0PXtzZXRTdWNjZXNzfSBtZXNzYWdlPXtzdWNjZXNzfSAvPlxyXG4gICAgICB7cmVzdWx0ID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8QWRzbGl2ZUxvYWRpbmcgc2l6ZT17QURTTElWRV9MT0FESU5HX1NJWkUuRVhUUkFfU01BTEx9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8U2NyZWVuRGV0YWlsc1xyXG4gICAgICAgICAgICAgIGlzTmV3XHJcbiAgICAgICAgICAgICAgcmV0dXJuUHJlTGF5b3V0PXtyZXR1cm5QcmVMYXlvdXR9XHJcbiAgICAgICAgICAgICAgbG9jYXRpb25EYXRhPXtjdXJyZW50TG9jYXRpb259XHJcbiAgICAgICAgICAgICAgZGVsZXRlU2NyZWVuPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICBzY3JlZW5EYXRhPXtyZXN1bHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTdWJMYXlvdXRcclxuICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEFkSWNvbiBuYW1lPVwieC1pbi1hLWNpcmNsZVwiIG9uQ2xpY2s9e3JldHVyblByZUxheW91dH0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxBZHNsaXZlSDQ+U2NhbiBRUiBjb2RlIHRvIGFkZDwvQWRzbGl2ZUg0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Nhbm5lcn0+XHJcbiAgICAgICAgICAgICAgICB7LyogUVIgKi99XHJcbiAgICAgICAgICAgICAgICA8UXJSZWFkZXJcclxuICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2Nhbj17aGFuZGxlU2Nhbn1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCB7IEFkQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBBZENhcmQsIHtcclxuICBDYXJkRHJhZ0l0ZW0sXHJcbiAgQ2FyZElucHV0LFxyXG4gIENhcmRTZWxlY3QsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaXZpZGVyXCI7XHJcbmltcG9ydCBBZHNsaXZlSWNvbiwge1xyXG4gIEFkSWNvbixcclxuICBBRFNMSVZFX0lDT05fQ09MT1IsXHJcbiAgQURTTElWRV9JQ09OX1NJWkUsXHJcbiAgQURTTElWRV9JQ09OX1RZUEUsXHJcbiAgQURTTElWRV9JQ09OX1ZBUklBTlQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgU3RhdHVzQmFkZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3RhdHVzLWJhZGdlXCI7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdGVyXCI7XHJcbmltcG9ydCB7IEFkc2xpdmVINCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFN1YkxheW91dCBmcm9tIFwiLi4vLi4vLi4vc3ViLWxheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuRGV0YWlscyhwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGlzTmV3LFxyXG4gICAgcmV0dXJuUHJlTGF5b3V0LFxyXG4gICAgZGVsZXRlU2NyZWVuLFxyXG4gICAgc2NyZWVuRGF0YSxcclxuICAgIGxvY2F0aW9uRGF0YSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSB1c2VTdGF0ZShzY3JlZW5EYXRhKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWNjZXNzTXNnLCBzZXRTdWNjZXNzTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGFkZEFyZWEgPSAoYXJlYSkgPT4ge307XHJcbiAgY29uc3QgcmVzZXREZXZpY2UgPSAoYXJlYSkgPT4ge307XHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoc2NyZWVuS2V5LCBldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U2NyZWVuU3RhdGUoeyAuLi5zY3JlZW5TdGF0ZSwgLi4ueyBbc2NyZWVuS2V5XTogdmFsIH0gfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzT3V0ID0gYXN5bmMgKGtleSwgZXZlbnQpID0+IHtcclxuICAgIGlmIChzY3JlZW5EYXRhW2tleV0gIT09IHNjcmVlblN0YXRlW2tleV0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJVUERBVEUgUkVRVUVTVFwiKTtcclxuICAgICAgY29uc3QgYm9keSA9IHsgW2tleV06IHNjcmVlblN0YXRlW2tleV0gfTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVTY3JlZW4oc2NyZWVuU3RhdGUuaWQsIGJvZHkpO1xyXG4gICAgICBpZiAocmVzPy5jb2RlID09PSAwICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgLy8gc2NyZWVuRGF0YVtrZXldID0gc2NyZWVuU3RhdGVba2V5XTtcclxuICAgICAgICBzZXRTY3JlZW5TdGF0ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0U3VjY2Vzc01zZygnVXBkYXRlZCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3JNc2coJ1VwZGF0ZWQnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBpbmZvQXJyID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJzY3JlZW4gbmFtZVwiLFxyXG4gICAgICBrZXk6IFwiZGV2aWNlTmFtZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwibG9jYXRpb25cIixcclxuICAgICAga2V5OiBcImxvY2F0aW9uXCIsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwidHlwZSBvZiBkZXZpY2VcIixcclxuICAgICAga2V5OiBcImRldmljZVR5cGVcIixcclxuICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJtYWMgYWRkcmVzc1wiLFxyXG4gICAgICBrZXk6IFwibWFjQWRkcmVzc1wiLFxyXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIm9zXCIsXHJcbiAgICAgIGtleTogXCJkZXZpY2VPU1wiLFxyXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcImFwcCB2ZXJzaW9uXCIsXHJcbiAgICAgIGtleTogXCJhcHBWZXJzaW9uXCIsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiaXAgYWRkcmVzc1wiLFxyXG4gICAgICBrZXk6IFwiZGV2aWNlSXBcIixcclxuICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb2FzdGVyIHR5cGU9XCJlcnJvclwiIGhhbmRsZVNldFRvYXN0PXtzZXRFcnJvck1zZ30gbWVzc2FnZT17ZXJyb3JNc2d9IC8+XHJcbiAgICAgIDxUb2FzdGVyXHJcbiAgICAgICAgdHlwZT1cInN1Y2Nlc3NcIlxyXG4gICAgICAgIGhhbmRsZVNldFRvYXN0PXtzZXRTdWNjZXNzTXNnfVxyXG4gICAgICAgIG1lc3NhZ2U9e3N1Y2Nlc3NNc2d9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTdWJMYXlvdXRcclxuICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdTY3JlZW5IZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckl0ZW1zfT5cclxuICAgICAgICAgICAgICA8QWRzbGl2ZUljb25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULkZVTExfTEVGVF9BUlJPV31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtBRFNMSVZFX0lDT05fVFlQRS5CT0xEfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17QURTTElWRV9JQ09OX1NJWkUuU01BTEx9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXR1cm5QcmVMYXlvdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QWRzbGl2ZUg0Pnt9PC9BZHNsaXZlSDQ+XHJcbiAgICAgICAgICAgICAgPFN0YXR1c0JhZGdlIHN0YXR1cz17XCJvZmZsaW5lXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QWRJY29uIG5hbWU9XCJEZWxldGVcIiBvbkNsaWNrPXtkZWxldGVTY3JlZW59IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICB7LyogPFZpZGVvUGxheWVyIGRhdGE9e251bGx9IC8+ICovfVxyXG4gICAgICAgICAgICA8QWRDYXJkXHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgIElEOiB7c2NyZWVuRGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua0J0bn0gb25DbGljaz17cmVzZXREZXZpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IERldmljZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYm9keT17XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7aW5mb0Fyci5zcGxpY2UoMCwgMikubWFwKChlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZS5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY3JlZW5TdGF0ZVtlLmtleV19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUua2V5LCBldmVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzT3V0PXsoZXZlbnQpID0+IGhhbmRsZUlucHV0Rm9jdXNPdXQoZS5rZXksIGV2ZW50KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlPXtzY3JlZW5TdGF0ZS5hcmVhPy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcz17bG9jYXRpb25EYXRhLmFyZWFzPy5tYXAoKGUpID0+IGUubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmZvQXJyLm1hcCgoZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2UuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NyZWVuU3RhdGVbZS5rZXldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLmtleSwgZXZlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Gb2N1c091dD17KGV2ZW50KSA9PiBoYW5kbGVJbnB1dEZvY3VzT3V0KGUua2V5LCBldmVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDxBZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRCdG5cclxuICAgICAgICAgICAgICAgICAgICBnaG9zdFxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEFkc2xpdmVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULkNJUkNMRV9QTFVTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17QURTTElWRV9JQ09OX0NPTE9SLlBSSU1BUll9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e0FEU0xJVkVfSUNPTl9UWVBFLkJPTER9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e0FEU0xJVkVfSUNPTl9TSVpFLlNNQUxMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBREQgTU9SRSBBUkVBXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEFyZWF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhdHVzfSAke3N0eWxlc1tzdGF0dXMgfHwgXCJvZmZsaW5lXCJdfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0dXNCYWRnZSBzdGF0dXM9XCJvZmZsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCBBZENhcmQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgQWRzbGl2ZUxvYWRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xyXG5pbXBvcnQgTm9EYXRhIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL25vLWRhdGFcIjtcclxuaW1wb3J0IFN0YXR1c0JhZGdlIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3N0YXR1cy1iYWRnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2ZXJ0aXNlclNjcmVlbkl0ZW1zKHsgaWQsIGFyZWFOYW1lLCBzZWxlY3RTY3JlZW4gfSkge1xyXG4gIGNvbnN0IFtzY3JlZW5zLCBzZXRTY3JlZW5zXSA9IHVzZVN0YXRlKHt9KTtcclxuICAvLyBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkgcmV0dXJuIFxyXG4gICAgaWYgKHNjcmVlbnNbaWRdKSByZXR1cm5cclxuICAgIEFkdmVydGlzZXJBcGlDbGllbnQuZ2V0QXJlYVNjcmVlbihpZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgc2V0U2NyZWVucyh7Li4uc2NyZWVucywgW2lkXTogcmVzLmRhdGF9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWR2ZXJ0aXNlclNjcmVlbnN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbnNIZWFkZXJ9PlxyXG4gICAgICAgIDxzcGFuPnthcmVhTmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+LSBsaXZlIHNjcmVlbjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj4tIG9mZmxpbmU8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshc2NyZWVuc1tpZF0gPyA8QWRzbGl2ZUxvYWRpbmcgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfSAvPiA6XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgc2NyZWVuc1tpZF0ubGVuZ3RoID09IDAgPyA8Tm9EYXRhIC8+IDpcclxuICAgICAgICAgICAgc2NyZWVuc1tpZF0/Lm1hcCgoc2NyZWVuLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbnNDYXJkfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RTY3JlZW4oc2NyZWVuKX0+XHJcbiAgICAgICAgICAgICAgICA8QWRDYXJkXHJcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICAgICAgICBib2R5PXtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57c2NyZWVuLmRldmljZU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzdGODM4RScgfX0+e3NjcmVlbj8uZGV2aWNlQ29kZS5zbGljZSgwLCA2KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdGF0dXNCYWRnZSBzdGF0dXM9e3NjcmVlbi5zdGF0dXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkdmVydGlzZXJBcGlDbGllbnQgZnJvbSBcIi4uLy4uLy4uL2FwaS1jbGllbnRzL2FkdmVydGlzZXIuYXBpLWNsaWVudFwiO1xyXG5pbXBvcnQgQ29uZmlybU1vZGFsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbmZpcm1Nb2RhbFwiO1xyXG5pbXBvcnQgeyBBZEljb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XHJcbmltcG9ydCBBZHNsaXZlTG9hZGluZyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XHJcbmltcG9ydCBOb0RhdGEgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbm8tZGF0YVwiO1xyXG5pbXBvcnQgeyBNdXRlZFRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBWaWRlb3NQbGF5ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdmlkZW9zLXBsYXllclwiO1xyXG5pbXBvcnQgdXNlQWR2ZXJ0aXNlclN0b3JlIGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvYWR2ZXJ0aXNlci1zdG9yZS9hZHZlcnRpc2VyLXN0b3JlLmhvb2tcIjtcclxuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb21tb24udXRpbFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckNvbnRlbnQgZnJvbSBcIi4uL290aGVycy9hZHZlcnRpc2VyLWNvbnRlbnRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFZpZGVvRGV0YWlscyBmcm9tIFwiLi92aWRlby1kZXRhaWxzXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9UeXBlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByZWNJZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmVydGlzZXJWaWRlbygpIHtcclxuICBjb25zdCB7IHZpZGVvcywgc2V0VmlkZW9zIH0gPSB1c2VBZHZlcnRpc2VyU3RvcmUoKTtcclxuICAvLyBsZXQgW3ZpZGVvTGlzdCwgc2V0VmlkZW9MaXN0XSA9IHVzZVN0YXRlKHZpZGVvcyk7XHJcbiAgY29uc3QgW2RldGFpbHNWaWRlbywgc2V0RGV0YWlsc1ZpZGVvXSA9IHVzZVN0YXRlPFZpZGVvVHlwZT4obnVsbCk7XHJcbiAgY29uc3QgW3Nob3dOZXcsIHNldFNob3dOZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hvd0NvbmZpcm1EZWxldGUsIHNldFNob3dDb25maXJtRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkYXRhQ2hhbmdlZCwgc2V0RGF0YUNoYW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG93Q29uZmlybURlbGV0ZShmYWxzZSlcclxuICAgIGNvbnN0IHJlcyA9IEFkdmVydGlzZXJBcGlDbGllbnQuZGVsZXRlVmlkZW8oZGV0YWlsc1ZpZGVvLmlkKTtcclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgYXdhaXQgbG9hZFZpZGVvcygpO1xyXG4gICAgICBhd2FpdCB0aW1lb3V0KDEwMDApO1xyXG4gICAgICBzZXRTaG93RGV0YWlscyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTZWxlY3RWaWRlbyA9IGFzeW5jICh2aWRlbykgPT4ge1xyXG4gICAgaWYgKHZpZGVvKSB7XHJcbiAgICAgIHNldERldGFpbHNWaWRlbyh2aWRlbyk7XHJcbiAgICAgIHNldFNob3dEZXRhaWxzKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc2hvd05ldyAmJiAhc2hvd0RldGFpbHMgJiYgZGF0YUNoYW5nZWQpIHtcclxuICAgICAgbG9hZFZpZGVvcygpO1xyXG4gICAgICBzZXREYXRhQ2hhbmdlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtzaG93TmV3LCBzaG93RGV0YWlsc10pO1xyXG4gIGNvbnN0IGxvYWRWaWRlb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRWaWRlb3MobnVsbClcclxuICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC5nZXRWaWRlb3MoKTtcclxuICAgIGlmIChyZXM/LmRhdGEpIHNldFZpZGVvcyhyZXMuZGF0YSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93Q29uZmlybURlbGV0ZSAmJiA8Q29uZmlybU1vZGFsIHRpdGxlPVwiZGVsZXRlXCIgb25FeGVjdXRlPXtoYW5kbGVEZWxldGV9IHNob3c9e3Nob3dDb25maXJtRGVsZXRlfSBzZXRTaG93PXtzZXRTaG93Q29uZmlybURlbGV0ZX0vPn1cclxuICAgICAge3Nob3dEZXRhaWxzID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VmlkZW9EZXRhaWxzXHJcbiAgICAgICAgICAgIHZpZGVvRGF0YT17ZGV0YWlsc1ZpZGVvfVxyXG4gICAgICAgICAgICByZXR1cm5QcmVMYXlvdXQ9eyh7Y2hhbmdlZH0pID0+IHtcclxuICAgICAgICAgICAgICBzZXRTaG93RGV0YWlscyhmYWxzZSlcclxuICAgICAgICAgICAgICBzZXREYXRhQ2hhbmdlKGNoYW5nZWQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGRlbGV0ZURhdGE9eygpID0+IHNldFNob3dDb25maXJtRGVsZXRlKHRydWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IHNob3dOZXcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxWaWRlb0RldGFpbHMgaXNOZXcgcmV0dXJuUHJlTGF5b3V0PXsoKSA9PiBzZXRTaG93TmV3KGZhbHNlKX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEFkdmVydGlzZXJDb250ZW50XHJcbiAgICAgICAgICAgIGhlYWRlclRpdGxlPVwiVmlkZW9zXCJcclxuICAgICAgICAgICAgaGVhZGVyUmlnaHRDb250ZW50PXtcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgPEFkSWNvbiBtcj1cIjE2cHhcIiBuYW1lPVwic2VhcmNoXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cclxuICAgICAgICAgICAgICAgIDxBZEljb25cclxuICAgICAgICAgICAgICAgICAgbXI9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbHRlcnMtdmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBudWxsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBZEljb24gbmFtZT1cImNpcmNsZS1ib2xkXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd05ldyh0cnVlKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHshIXZpZGVvcz8ubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtbMCwgMV0ubWFwKChyZW1haW5lcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3ZpZGVvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGUsIGkpID0+IGkgJSAyID09PSByZW1haW5lcilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKCh2aWRlbywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvV3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0VmlkZW8odmlkZW8pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW9zUGxheWVyIGlzUHJldmlldyBrZXk9e2l9IGRhdGE9e3ZpZGVvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT57dmlkZW8ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dmlkZW9zPy5lcnJvcj8uc3RhdHVzID09IDQwNCAmJiA8TXV0ZWRUZXh0Pk5vdCBGb3VuZDwvTXV0ZWRUZXh0Pn1cclxuICAgICAgICAgIHshbG9hZGluZyAmJiB2aWRlb3M/Lmxlbmd0aCA9PT0gMCAmJiA8Tm9EYXRhIC8+fVxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPEFkc2xpdmVMb2FkaW5nIC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCB7IEFkQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XHJcbmltcG9ydCBBZENhcmQsIHtcclxuICBDYXJkSW5wdXQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgQWRzbGl2ZUljb24sIHtcclxuICBBZEljb24sXHJcbiAgQURTTElWRV9JQ09OX1NJWkUsXHJcbiAgQURTTElWRV9JQ09OX1RZUEUsXHJcbiAgQURTTElWRV9JQ09OX1ZBUklBTlQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3RlclwiO1xyXG5pbXBvcnQgeyBBZHNsaXZlSDQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBWaWRlb1VwbG9hZGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3ZpZGVvLXVwbG9hZGVyXCI7XHJcbmltcG9ydCBWaWRlb3NQbGF5ZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdmlkZW9zLXBsYXllclwiO1xyXG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2NvbW1vbi51dGlsXCI7XHJcbmltcG9ydCBTdWJMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL3N1Yi1sYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvRGV0YWlscyhwcm9wcykge1xyXG4gIGxldCB7IGlzTmV3LCByZXR1cm5QcmVMYXlvdXQsIGRlbGV0ZURhdGEsIHZpZGVvRGF0YSA9IHt9IH0gPSBwcm9wcztcclxuICBjb25zdCBbZGF0YVN0YXRlLCBzZXREYXRhU3RhdGVdID0gdXNlU3RhdGUodmlkZW9EYXRhKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWNjZXNzTXNnLCBzZXRTdWNjZXNzTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkYXRhQ2hhbmdlZCwgc2V0RGF0YUNoYW5nZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgYWRkQXJlYSA9IChhcmVhKSA9PiB7fTtcclxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShrZXksIGV2ZW50KSB7XHJcbiAgICBjb25zdCB2YWwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXREYXRhU3RhdGUoeyAuLi5kYXRhU3RhdGUsIC4uLnsgW2tleV06IHZhbCB9IH0pO1xyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlSW5wdXRGb2N1c091dChrZXksIGV2ZW50KSB7XHJcbiAgICBpZiAoZGF0YVN0YXRlKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IFtrZXldOiBkYXRhU3RhdGVba2V5XSB9O1xyXG4gICAgICBpZiAoaXNOZXcpIHJldHVyblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlVQREFURSBSRVFVRVNUXCIpO1xyXG4gICAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC51cGRhdGVWaWRlbyhkYXRhU3RhdGUuaWQsIGJvZHkpO1xyXG4gICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICBzZXREYXRhU3RhdGUocmVzLmRhdGEpXHJcbiAgICAgICAgc2V0U3VjY2Vzc01zZygnVXBkYXRlZCBzdWNjZXNzZnVsJylcclxuICAgICAgICBzZXREYXRhQ2hhbmdlZCh0cnVlKVxyXG4gICAgICB9IGVsc2UgaWYgKHJlcy5lcnJvcikgc2V0RXJyb3IocmVzLmVycm9yKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gaGFuZGxlTmV3RGF0YShkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBkYXRhPy5zZWN1cmVfdXJsLCBuYW1lID0gZGF0YT8ub3JpZ2luYWxfZmlsZW5hbWVcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgc2V0RGF0YVN0YXRlKHsgLi4uZGF0YVN0YXRlLCAuLi57dXJsLCBuYW1lfX0pXHJcbiAgICAgIGhhbmRsZVVwbG9hZFZpZGVvKHt1cmwsIG5hbWV9KVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGxvYWRWaWRlbyhkYXRhPykge1xyXG4gICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBkYXRhIHx8IGRhdGFTdGF0ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgbmV3XCIsIGJvZHkpO1xyXG4gICAgICBpZiAoIWJvZHlbJ25hbWUnXSB8fCAhYm9keVsndXJsJ10pIHJldHVyblxyXG4gICAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC5wb3N0VmlkZW8oYm9keSk7XHJcbiAgICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICAgIHNldERhdGFTdGF0ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgYXdhaXQgdGltZW91dCg1MDApXHJcbiAgICAgICAgc2V0RGF0YUNoYW5nZWQodHJ1ZSlcclxuICAgICAgICByZXR1cm5QcmVMYXlvdXQoeyBjaGFuZ2VkOiBkYXRhQ2hhbmdlZCB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgPFRvYXN0ZXIgdHlwZT0nc3VjY2VzcycgaGFuZGxlU2V0VG9hc3Q9e3NldFN1Y2Nlc3NNc2d9IG1lc3NhZ2U9e3N1Y2Nlc3NNc2d9IC8+XHJcbiAgICA8U3ViTGF5b3V0XHJcbiAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdTY3JlZW5IZWFkZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJdGVtc30+XHJcbiAgICAgICAgICAgIDxBZHNsaXZlSWNvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9e0FEU0xJVkVfSUNPTl9WQVJJQU5ULkZVTExfTEVGVF9BUlJPV31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgIHR5cGU9e0FEU0xJVkVfSUNPTl9UWVBFLkJPTER9XHJcbiAgICAgICAgICAgICAgc2l6ZT17QURTTElWRV9JQ09OX1NJWkUuU01BTEx9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmV0dXJuUHJlTGF5b3V0KHsgY2hhbmdlZDogZGF0YUNoYW5nZWQgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBZHNsaXZlSDQ+e3ZpZGVvRGF0YS5uYW1lIHx8ICdVcGxvYWQgdmlkZW8nfTwvQWRzbGl2ZUg0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7IWlzTmV3ICYmIDxBZEljb24gbmFtZT1cIkRlbGV0ZVwiIG9uQ2xpY2s9e2RlbGV0ZURhdGF9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNnB4XCIgfX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzTmV3ID9cclxuICAgICAgICAgICAgICA8VmlkZW9VcGxvYWRlciBvbkNoYW5nZT17KGRhdGEpID0+IGhhbmRsZU5ld0RhdGEoZGF0YSl9Lz5cclxuICAgICAgICAgICAgOiA8VmlkZW9zUGxheWVyIGRhdGE9e2RhdGFTdGF0ZX0gLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxBZENhcmRcclxuICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9IZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgey8qIFVwbG9hZGVkOiB7dmlkZW9EYXRhfSAqL31cclxuICAgICAgICAgICAgICAgIFVwbG9hZGVkOiB7fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHk9e1xyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVN0YXRlPy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUlucHV0Q2hhbmdlKCduYW1lJywgZXZlbnQpfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzT3V0PXsoZXZlbnQpID0+IGhhbmRsZUlucHV0Rm9jdXNPdXQoJ25hbWUnLCBldmVudCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhU3RhdGU/LnRhZ31cclxuICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVJbnB1dENoYW5nZSgndGFnJywgZXZlbnQpfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzT3V0PXsoZXZlbnQpID0+IGhhbmRsZUlucHV0Rm9jdXNPdXQoJ3RhZycsIGV2ZW50KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZm9vdGVyPXtcclxuICAgICAgICAgICAgLy8gICA8PlxyXG4gICAgICAgICAgICAvLyAgICAge2lzTmV3ICYmICFkYXRhU3RhdGUuaWQgJiZcclxuICAgICAgICAgICAgLy8gICAgICAgPEFkQnV0dG9uIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fSBjYXJkQnRuIHRpdGxlPVwiVXBsb2FkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlVXBsb2FkVmlkZW8oKX0gLz5cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICA8Lz5cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YkxheW91dCh7XHJcbiAgaGVhZGVyLFxyXG4gIGNvbnRlbnRcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YkxheW91dH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICB7aGVhZGVyfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBBZHZlcnRpc2VyQXBpQ2xpZW50IGZyb20gXCIuLi8uLi9hcGktY2xpZW50cy9hZHZlcnRpc2VyLmFwaS1jbGllbnRcIjtcclxuaW1wb3J0IHsgQVBJX0NPREUgfSBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbnMvZW51bXNcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gXCIuLi8uLi91dGlscy9jb21tb24udXRpbFwiO1xyXG5pbXBvcnQgY29va2llVXRpbCBmcm9tIFwiLi4vLi4vdXRpbHMvY29va2llLnV0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkdmVydGlzZXJTdG9yZUFjdGlvbnMge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRBZHZlcnRpc2VySW5mb3JtYXRpb24oKSB7XHJcbiAgICByZXR1cm4gQWR2ZXJ0aXNlckFwaUNsaWVudC5nZXRBZHZlcnRpc2VySW5mb3JtYXRpb24oKS50aGVuKFxyXG4gICAgICAoeyBjb2RlLCBkYXRhIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YSB8fCBudWxsO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHNpZ25JbihlbWFpbDogc3RyaW5nLCBwd2Q6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEFkdmVydGlzZXJBcGlDbGllbnQuc2lnbkluKGVtYWlsLCBwd2QpLnRoZW4oKHsgY29kZSwgZGF0YSB9KSA9PiB7XHJcbiAgICAgIGlmIChjb2RlID09PSBBUElfQ09ERS5TVUNDRVNTICYmIGRhdGE/LnRva2VuKSB7XHJcbiAgICAgICAgY29va2llVXRpbC51cGRhdGVDb29raWUoXCJhZHNsLWFkdmVyLWF0XCIsIGRhdGE/LnRva2VuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzRG9uZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhPy5lcnJvck1lc3NhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaWduT3V0KCkge1xyXG4gICAgY29va2llVXRpbC5kZWxldGVDb29raWUoXCJhZHNsLWFkdmVyLWF0XCIpO1xyXG4gICAgcmVkaXJlY3RUbyhcIi9hZHZlcnRpc2VyL3NpZ24taW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0TG9jYXRpb25zKCkge1xyXG4gICAgcmV0dXJuIEFkdmVydGlzZXJBcGlDbGllbnQuZ2V0TG9jYXRpb25zKCkudGhlbigoeyBjb2RlLCBkYXRhIH0pID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQWR2ZXJ0aXNlclN0b3JlQ29udGV4dERhdGFBdXRoID0ge1xyXG4gIHRva2VuPzogc3RyaW5nO1xyXG4gIHVzZXI/OiBhbnk7XHJcbiAgaXNHZXR0aW5nVG9rZW4/OiBib29sZWFuO1xyXG4gIGlzQXV0aGVudGljYXRpbmc/OiBib29sZWFuO1xyXG4gIGlzQXV0aGVudGljYXRlZD86IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBZHZlcnRpc2VyU3RvcmVDb250ZXh0RGF0YUxvY2F0aW9uID0ge1xyXG4gIGFyZWFzPzogQXJlYVtdO1xyXG4gIGlkOiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHJlY0lkOiBzdHJpbmcsXHJcbn07XHJcbmV4cG9ydCB0eXBlIEFyZWEgPSB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcmVjSWQ6IHN0cmluZyxcclxuICBvcmRlcjogbnVtYmVyXHJcbn1cclxuZXhwb3J0IHR5cGUgQWR2ZXJ0aXNlclN0b3JlQ29udGV4dERhdGFTY3JlZW4gPSB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBjb2RlOiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGRldmljZUNvZGU6IHN0cmluZyxcclxuICBkZXZpY2VUeXBlOiBzdHJpbmcsXHJcbiAgZGV2aWNlTmFtZTogc3RyaW5nLFxyXG4gIGRldmljZUlwOiBzdHJpbmcsXHJcbiAgZGV2aWNlT1M6IHN0cmluZyxcclxuICBhcHBWZXJzaW9uOiBzdHJpbmcsXHJcbiAgY3JlYXRlZEF0OiBzdHJpbmdcclxufTtcclxuXHJcbi8vIGV4cG9ydCB0eXBlIEFkdmVydGlzZXJTdG9yZUNvbnRleHREYXRhTG9jYXRpb25zID0ge1xyXG4vLyAgIGxvYWRpbmc/OiBib29sZWFuO1xyXG4vLyAgIGxvY2F0aW9ucz86IDtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCB0eXBlIEFkdmVydGlzZXJTdG9yZUNvbnRleHREYXRhID0ge1xyXG4gIGF1dGg/OiBBZHZlcnRpc2VyU3RvcmVDb250ZXh0RGF0YUF1dGg7XHJcbiAgbG9jYXRpb25zPzogQWR2ZXJ0aXNlclN0b3JlQ29udGV4dERhdGFMb2NhdGlvbltdO1xyXG4gIGxvYWRMb2NhdGlvbnM/OiBhbnk7XHJcbiAgY2FtcGFpZ25zOiBhbnk7XHJcbiAgc2V0Q2FtcGFpZ25zOiBhbnk7XHJcbiAgbG9hZENhbXBhaWduczogYW55O1xyXG4gIHZpZGVvczogYW55O1xyXG4gIHNldFZpZGVvczogYW55O1xyXG4gIGxvYWRBbGxTY3JlZW4/OiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBBZHZlcnRpc2VyU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBZHZlcnRpc2VyU3RvcmVDb250ZXh0RGF0YT4obnVsbCk7XHJcbmV4cG9ydCBkZWZhdWx0IEFkdmVydGlzZXJTdG9yZUNvbnRleHQ7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkdmVydGlzZXJTdG9yZUNvbnRleHQgZnJvbSBcIi4vYWR2ZXJ0aXNlci1zdG9yZS5jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBZHZlcnRpc2VyU3RvcmUoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQWR2ZXJ0aXNlclN0b3JlQ29udGV4dCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWR2ZXJ0aXNlckFwaUNsaWVudCBmcm9tIFwiLi4vLi4vYXBpLWNsaWVudHMvYWR2ZXJ0aXNlci5hcGktY2xpZW50XCI7XHJcbmltcG9ydCB7IEFQSV9DT0RFIH0gZnJvbSBcIi4uLy4uL2RlZmluaXRpb25zL2VudW1zXCI7XHJcbmltcG9ydCBjb29raWVVdGlsIGZyb20gXCIuLi8uLi91dGlscy9jb29raWUudXRpbFwiO1xyXG5pbXBvcnQgcmVzdENsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVzdC1jbGllbnRcIjtcclxuaW1wb3J0IEFkdmVydGlzZXJTdG9yZUFjdGlvbnMgZnJvbSBcIi4vYWR2ZXJ0aXNlci1zdG9yZS5hY3Rpb25zXCI7XHJcbmltcG9ydCBBZHZlcnRpc2VyU3RvcmVDb250ZXh0LCB7XHJcbiAgQWR2ZXJ0aXNlclN0b3JlQ29udGV4dERhdGFBdXRoLFxyXG4gIEFkdmVydGlzZXJTdG9yZUNvbnRleHREYXRhTG9jYXRpb24sXHJcbn0gZnJvbSBcIi4vYWR2ZXJ0aXNlci1zdG9yZS5jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZHZlcnRpc2VyU3RvcmVQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbj86IGFueTtcclxufSkge1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlPEFkdmVydGlzZXJTdG9yZUNvbnRleHREYXRhQXV0aD4oe1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIGlzQXV0aGVudGljYXRpbmc6IHRydWUsXHJcbiAgICBpc0dldHRpbmdUb2tlbjogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBbXHJcbiAgICBsb2NhdGlvbnMsXHJcbiAgICBzZXRMb2NhdGlvbnMsXHJcbiAgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbXHJcbiAgICB2aWRlb3MsXHJcbiAgICBzZXRWaWRlb3MsXHJcbiAgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuICBjb25zdCBbY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aD8udG9rZW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RDbGllbnQuc2V0VG9rZW4oYXV0aD8udG9rZW4pO1xyXG5cclxuICAgIEFkdmVydGlzZXJTdG9yZUFjdGlvbnMuZ2V0QWR2ZXJ0aXNlckluZm9ybWF0aW9uKCkudGhlbigoaW5mbykgPT4ge1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIHNldEF1dGgoKHByZXZpb3VzKSA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldmlvdXMsXHJcbiAgICAgICAgICB1c2VyOiBpbmZvLFxyXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGluZzogZmFsc2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEF1dGgoKHByZXZpb3VzKSA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldmlvdXMsXHJcbiAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGlzQXV0aGVudGljYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9hZExvY2F0aW9ucygpXHJcbiAgICBsb2FkQ2FtcGFpZ25zKClcclxuICAgIFxyXG4gICAgQWR2ZXJ0aXNlckFwaUNsaWVudC5nZXRWaWRlb3MoKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSBzZXRWaWRlb3MocmVzLmRhdGEpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH0sIFthdXRoPy50b2tlbl0pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRDYW1wYWlnbnMoKSB7XHJcbiAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC5nZXRDYW1wYWlnbnMoKVxyXG4gICAgaWYgKHJlcz8uZGF0YSkgc2V0Q2FtcGFpZ25zKHJlcy5kYXRhKVxyXG4gICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRMb2NhdGlvbnMoKSB7XHJcbiAgICBjb25zdCByZXM6YW55ID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC5nZXRMb2NhdGlvbnMoKVxyXG4gICAgaWYgKHJlcz8uZGF0YSkge1xyXG4gICAgICByZXMuZGF0YS5tYXAoZSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYXJlYXMpIHtcclxuICAgICAgICAgIGUuYXJlYXMgPSBlLmFyZWFzLnNvcnQoKHByZSwgY3VyKSA9PiBwcmUub3JkZXIgJiYgY3VyLm9yZGVyICYmIHByZS5vcmRlciA+IGN1ci5vcmRlciA/IDEgOiAtMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVcclxuICAgICAgfSlcclxuICAgICAgc2V0TG9jYXRpb25zKHJlcy5kYXRhKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRBbGxTY3JlZW4oYXJlYUlkcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGFsbFNjcmVlbnNEYXRhID0gW10gLy8gW2FyZWFJZF0gOiBzY3JlZW5bXVxyXG4gICAgICAvLyBjb25zdCBhbGxBcmVhRGF0YSA9IGxvY2F0aW9ucz8ucmVkdWNlKChyZXMsIGUpID0+IHJlcyA9IFsuLi5yZXMsIC4uLihlLmFyZWFzIHx8IFtdKV0sIFtdKVxyXG4gICAgICBhcmVhSWRzLm1hcChhc3luYyAoaWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQWR2ZXJ0aXNlckFwaUNsaWVudC5nZXRBcmVhU2NyZWVuKGlkKVxyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PSAwKSBhbGxTY3JlZW5zRGF0YSA9IFsuLi5hbGxTY3JlZW5zRGF0YSwuLi5yZXMuZGF0YV1cclxuICAgICAgICBlbHNlIHJlamVjdChmYWxzZSlcclxuICAgICAgICBpZiAoaW5kZXggKyAxID09PSBhcmVhSWRzLmxlbmd0aCkgcmVzb2x2ZShhbGxTY3JlZW5zRGF0YSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBjb29raWVVdGlsLmdldENvb2tpZShcImFkc2wtYWR2ZXItYXRcIikgfHwgbnVsbDtcclxuXHJcbiAgICBpZiAoYXV0aFRva2VuKSB7XHJcbiAgICAgIHNldEF1dGgoKHByZXZpb3VzKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZpb3VzLFxyXG4gICAgICAgIHRva2VuOiBhdXRoVG9rZW4sXHJcbiAgICAgICAgaXNHZXR0aW5nVG9rZW46IGZhbHNlLFxyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBdXRoKChwcmV2aW91cykgPT4gKHtcclxuICAgICAgICAuLi5wcmV2aW91cyxcclxuICAgICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlzR2V0dGluZ1Rva2VuOiBmYWxzZSxcclxuICAgICAgICBpc0F1dGhlbnRpY2F0aW5nOiBmYWxzZSxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBZHZlcnRpc2VyU3RvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGF1dGgsIGxvY2F0aW9ucywgbG9hZExvY2F0aW9ucywgY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnMsIGxvYWRDYW1wYWlnbnMsIHZpZGVvcywgc2V0VmlkZW9zLCBsb2FkQWxsU2NyZWVuIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FkdmVydGlzZXJTdG9yZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSV9DT0RFIH0gZnJvbSBcIi4uL2RlZmluaXRpb25zL2VudW1zXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlRXJyb3JEYXRhIH0gZnJvbSBcIi4uL2RlZmluaXRpb25zL3R5cGVzXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdFRvID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAoKHdpbmRvdyBhcyBhbnkpLmxvY2F0aW9uID0gdXJsKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZVRpdGxlID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHN0ciA/IHVwRmlyc3RDaGFyKHJlbW92ZUNhbWVsKHJlbW92ZVNuYWtlKHN0cikpKSA6IHN0clxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwRmlyc3RDaGFyID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHN0ciA/IHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpIDogc3RyXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FtZWwgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc3RyID8gc3RyLnJlcGxhY2UoL1tBLVpdL2csIGxldHRlciA9PiBgJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKSA6IHN0clxyXG59O1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlU25ha2UgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc3RyID8gc3RyLnJlcGxhY2UoL18vZywgJyAnKSA6IHN0clxyXG59O1xyXG5pbnRlcmZhY2UgVGltZU9wdGlvbnMge1xyXG4gIHNob3dIb3VyczogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5VGltZSA9ICh0aW1lOiBzdHJpbmcsIG9wdD86IFRpbWVPcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgeyBzaG93SG91cnMgfSA9IG9wdCB8fCB7fVxyXG4gIGlmICghdGltZSkgcmV0dXJuICctJ1xyXG4gIHJldHVybiBtb21lbnQodGltZSkuZm9ybWF0KGBERC9NTU0vWVlZWSAke3Nob3dIb3VycyA/IFwiSEg6TU1cIjogXCJcIn1gKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YW5kYXJkU2VydmljZVJlc3BvbnNlID0gKFxyXG4gIHN0YXR1c0NvZGU6IDIwMCB8IDIwMSB8IDMwMSB8IDQwMCB8IDQwMSB8IDQwMyB8IDUwMCB8IG51bWJlcixcclxuICBkYXRhOiBhbnksXHJcbiAgZXJyb3I/OiBBeGlvc0Vycm9yPGFueT5cclxuKToge1xyXG4gIGNvZGU6IEFQSV9DT0RFO1xyXG4gIGRhdGE6IFJlc3BvbnNlRXJyb3JEYXRhIHwgYW55O1xyXG59ID0+IHtcclxuICBpZiAoc3RhdHVzQ29kZSA9PT0gMjAwIHx8IHN0YXR1c0NvZGUgPT0gMjAxKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiBBUElfQ09ERS5TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29kZTogQVBJX0NPREUuRVJST1IsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlcnJvckNvZGU6IGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3I/LmNvZGUsXHJcbiAgICAgICAgZXJyb3JTdGF0dXM6IGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3I/LnN0YXR1cyB8fCBzdGF0dXNDb2RlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcj8ubWVzc2FnZSB8fCBlcnJvcixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQoZGVsYXk6IG51bWJlcikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSggcmVzID0+IHNldFRpbWVvdXQocmVzLCBkZWxheSkgKTtcclxufSIsImltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llLCBkZXN0cm95Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuXHJcbmNsYXNzIENvb2tpZVV0aWwge1xyXG4gIGdldENvb2tpZShmaWVsZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcGFyc2VDb29raWVzKG51bGwpW2ZpZWxkXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvb2tpZSA9IChmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDb29raWUobnVsbCwgZmllbGQsIHZhbHVlLCB7XHJcbiAgICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsXHJcbiAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlQ29va2llID0gKGZpZWxkOiBzdHJpbmcpID0+IHtcclxuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgZmllbGQsIHsgcGF0aDogXCIvXCIgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvb2tpZVV0aWwoKTtcclxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgJDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05pbCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xyXG5cclxuY2xhc3MgUmVzdENsaWVudCB7XHJcbiAgcHJpdmF0ZSBkb21haW46IHN0cmluZztcclxuICBwcml2YXRlIGRlZmF1bHRDb250ZW50VHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgdG9rZW46IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRvbWFpbiA9IFwiXCI7XHJcbiAgICB0aGlzLmRlZmF1bHRDb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgdGhpcy50b2tlbiA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBzZXREb21haW4oZG9tYWluOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZG9tYWluID0gZG9tYWluO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSGVhZGVycyhvcHRpb25zID0geyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogcGF0aChbXCJjb250ZW50VHlwZVwiXSwgb3B0aW9ucykgfHwgdGhpcy5kZWZhdWx0Q29udGVudFR5cGUsXHJcbiAgICAgIFwiYWRzbC1hdFwiOiB0aGlzLnRva2VuLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFwaSh1cmwsIHF1ZXJ5ID0ge30pIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmRvbWFpbn0ke3VybH0ke1xyXG4gICAgICBpc0VtcHR5KHF1ZXJ5KSB8fCBpc05pbChxdWVyeSkgPyBcIlwiIDogYD8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeSl9YFxyXG4gICAgfWA7XHJcbiAgfVxyXG5cclxuICBhc3luY0dldCh1cmwsIHF1ZXJ5ID0ge30sIG9wdGlvbnMgPSB7IGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KSB7ICAgIFxyXG4gICAgcmV0dXJuIGF4aW9zLmdldCh0aGlzLmNyZWF0ZUFwaSh1cmwsIHF1ZXJ5KSwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMob3B0aW9ucyksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jUG9zdCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHsgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KHRoaXMuY3JlYXRlQXBpKHVybCksIGRhdGEsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKG9wdGlvbnMpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luY1B1dCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHsgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pIHtcclxuICAgIHJldHVybiBheGlvcy5wdXQodGhpcy5jcmVhdGVBcGkodXJsKSwgZGF0YSwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMob3B0aW9ucyksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jRGVsZXRlKHVybCwgb3B0aW9ucyA9IHsgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUodGhpcy5jcmVhdGVBcGkodXJsKSwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMob3B0aW9ucyksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jQWxsKHJlcXVlc3RzKSB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgLmFsbChcclxuICAgICAgICByZXF1ZXN0cy5tYXAoKHJlcSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09IFwiZ2V0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNHZXQocmVxLnVybCwgcmVxLnF1ZXJ5IHx8IHt9LCByZXEub3B0aW9ucyB8fCB7fSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNQb3N0KHJlcS51cmwsIHJlcS5kYXRhIHx8IHt9LCByZXEub3B0aW9ucyB8fCB7fSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICBheGlvcy5zcHJlYWQoKC4uLnJlc3BvbnNlcykgPT5cclxuICAgICAgICAgIHJlc3BvbnNlcy5tYXAoKHJlcykgPT4gcGF0aChbXCJkYXRhXCJdLCByZXMpIHx8IG51bGwpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVzdENsaWVudCA9IG5ldyBSZXN0Q2xpZW50KCk7XHJcblxyXG5yZXN0Q2xpZW50LnNldERvbWFpbihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfSE9TVCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXN0Q2xpZW50O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoaWRlU2Nyb2xsYmFyXCI6IFwic3R5bGVzX2hpZGVTY3JvbGxiYXJfXzFDMGpmXCIsXG5cdFwiZGlzYWJsZVVzZXJTZWxlY3RcIjogXCJzdHlsZXNfZGlzYWJsZVVzZXJTZWxlY3RfXzROOV9nXCIsXG5cdFwiYnV0dG9uXCI6IFwic3R5bGVzX2J1dHRvbl9fMm41S3JcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18zVmJUU1wiLFxuXHRcImZpdFwiOiBcInN0eWxlc19maXRfXzYyS21pXCIsXG5cdFwiZnVsbFwiOiBcInN0eWxlc19mdWxsX18zb0hWR1wiLFxuXHRcInByaW1hcnlcIjogXCJzdHlsZXNfcHJpbWFyeV9fTm44WmhcIixcblx0XCJsYXJnZVwiOiBcInN0eWxlc19sYXJnZV9fMW1XejVcIixcblx0XCJzbWFsbFwiOiBcInN0eWxlc19zbWFsbF9fM1VpaGRcIixcblx0XCJkaXNhYmxlZFwiOiBcInN0eWxlc19kaXNhYmxlZF9fMXh1amlcIixcblx0XCJhZEJ0blwiOiBcInN0eWxlc19hZEJ0bl9fMmI3T0VcIixcblx0XCJsb2FkaW5nXCI6IFwic3R5bGVzX2xvYWRpbmdfXzJxQzZsXCIsXG5cdFwiY2FyZEJ0blwiOiBcInN0eWxlc19jYXJkQnRuX18ycFBSMVwiLFxuXHRcImRhc2hCdG5cIjogXCJzdHlsZXNfZGFzaEJ0bl9fMkRVZ3pcIixcblx0XCJnaG9zdEJ0blwiOiBcInN0eWxlc19naG9zdEJ0bl9fMkdCSi1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJzdHlsZXNfY2FyZF9fMlo1a1pcIixcblx0XCJsb2FkaW5nQ2FyZFwiOiBcInN0eWxlc19sb2FkaW5nQ2FyZF9fMk5kc1dcIixcblx0XCJkaXZpZGVyXCI6IFwic3R5bGVzX2RpdmlkZXJfX2hIWjNKXCIsXG5cdFwiZnVsbFZpZXdcIjogXCJzdHlsZXNfZnVsbFZpZXdfXzJ5eU80XCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fMk92NEdcIixcblx0XCJkb3RcIjogXCJzdHlsZXNfZG90X18zQTItN1wiLFxuXHRcInRvZ2dsZVwiOiBcInN0eWxlc190b2dnbGVfXzJlUGdsXCIsXG5cdFwiaGVhZGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fMXdnMEdcIixcblx0XCJ0b2dnbGVkXCI6IFwic3R5bGVzX3RvZ2dsZWRfXzN2OTViXCIsXG5cdFwiYm9keVwiOiBcInN0eWxlc19ib2R5X18zMHBWLVwiLFxuXHRcImNsaWNrYWJsZVwiOiBcInN0eWxlc19jbGlja2FibGVfXzloV29rXCIsXG5cdFwiY2FyZElucHV0XCI6IFwic3R5bGVzX2NhcmRJbnB1dF9fM0llZHhcIixcblx0XCJpY29uXCI6IFwic3R5bGVzX2ljb25fXzI0cy1SXCIsXG5cdFwiY2FyZFNlbGVjdFwiOiBcInN0eWxlc19jYXJkU2VsZWN0X18zWVE1alwiLFxuXHRcInNlbGVjdEJ0blwiOiBcInN0eWxlc19zZWxlY3RCdG5fXzN5bHJPXCIsXG5cdFwibWVudVwiOiBcInN0eWxlc19tZW51X18yV2NoUlwiLFxuXHRcIm1lbnVJdGVtXCI6IFwic3R5bGVzX21lbnVJdGVtX18yamV2TFwiLFxuXHRcInNlbGVjdGVkXCI6IFwic3R5bGVzX3NlbGVjdGVkX19tdlFCVFwiLFxuXHRcImNhcmREcmFnSXRlbVwiOiBcInN0eWxlc19jYXJkRHJhZ0l0ZW1fXzJac1oyXCIsXG5cdFwibG9hZGluZ1wiOiBcInN0eWxlc19sb2FkaW5nX18zTGxjVFwiLFxuXHRcImxlZnRJdGVtXCI6IFwic3R5bGVzX2xlZnRJdGVtX18zandpaVwiLFxuXHRcImRhdGVQaWNrZXJDb250YWluZXJcIjogXCJzdHlsZXNfZGF0ZVBpY2tlckNvbnRhaW5lcl9fMVVqM2RcIixcblx0XCJkYXRlUGlja2VyXCI6IFwic3R5bGVzX2RhdGVQaWNrZXJfXzI2eVBGXCIsXG5cdFwiY2FsZW5kYXJcIjogXCJzdHlsZXNfY2FsZW5kYXJfXzJuVXFFXCIsXG5cdFwiY2FsZW5kYXJJY29uXCI6IFwic3R5bGVzX2NhbGVuZGFySWNvbl9fMnNDbkJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18yR3VVU1wiLFxuXHRcInByaW1hcnlcIjogXCJzdHlsZXNfcHJpbWFyeV9fM2dGTmRcIixcblx0XCJub3JtYWxcIjogXCJzdHlsZXNfbm9ybWFsX18zRUx0dVwiLFxuXHRcImV4dHJhU21hbGxcIjogXCJzdHlsZXNfZXh0cmFTbWFsbF9faE5MUUtcIixcblx0XCJzbWFsbFwiOiBcInN0eWxlc19zbWFsbF9fMThYSFpcIixcblx0XCJtZWRpdW1cIjogXCJzdHlsZXNfbWVkaXVtX196LWc1SlwiLFxuXHRcImxhcmdlXCI6IFwic3R5bGVzX2xhcmdlX18zQzJ4YVwiLFxuXHRcInNjcmVlblwiOiBcInN0eWxlc19zY3JlZW5fXzJEdHVLXCIsXG5cdFwidmlkZW9cIjogXCJzdHlsZXNfdmlkZW9fXzJIZnRlXCIsXG5cdFwidmlkZW9Cb2xkXCI6IFwic3R5bGVzX3ZpZGVvQm9sZF9fMjIydk5cIixcblx0XCJzZW5kXCI6IFwic3R5bGVzX3NlbmRfX2htWl9WXCIsXG5cdFwic2VuZEJvbGRcIjogXCJzdHlsZXNfc2VuZEJvbGRfXzJZWmdUXCIsXG5cdFwiYWxlcnRcIjogXCJzdHlsZXNfYWxlcnRfXzMzb1NnXCIsXG5cdFwiYWxlcnRCb2xkXCI6IFwic3R5bGVzX2FsZXJ0Qm9sZF9fMVpnUDdcIixcblx0XCJhQ1wiOiBcInN0eWxlc19hQ19fMmNqbXlcIixcblx0XCJhQ0JvbGRcIjogXCJzdHlsZXNfYUNCb2xkX18yT001NlwiLFxuXHRcInNlYXJjaFwiOiBcInN0eWxlc19zZWFyY2hfX3Z6cVlQXCIsXG5cdFwiY2lyY2xlUGx1c0JvbGRcIjogXCJzdHlsZXNfY2lyY2xlUGx1c0JvbGRfX2ptZXAzXCIsXG5cdFwiYWRJY29uXCI6IFwic3R5bGVzX2FkSWNvbl9fMjhzd3NcIixcblx0XCJjbGlja2FibGVcIjogXCJzdHlsZXNfY2xpY2thYmxlX18zRWxhQ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGluZ1wiOiBcInN0eWxlc19sb2FkaW5nX18xZmxhclwiLFxuXHRcImxhcmdlXCI6IFwic3R5bGVzX2xhcmdlX18zZlh1Z1wiLFxuXHRcIm1lZGl1bVwiOiBcInN0eWxlc19tZWRpdW1fX1RTS0NpXCIsXG5cdFwic21hbGxcIjogXCJzdHlsZXNfc21hbGxfX0UtdDBHXCIsXG5cdFwiZXh0cmFTbWFsbFwiOiBcInN0eWxlc19leHRyYVNtYWxsX18xR2ppeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlkZVNjcm9sbGJhclwiOiBcInN0eWxlc19oaWRlU2Nyb2xsYmFyX19qUVhDVlwiLFxuXHRcImRpc2FibGVVc2VyU2VsZWN0XCI6IFwic3R5bGVzX2Rpc2FibGVVc2VyU2VsZWN0X19hM19IS1wiLFxuXHRcImhpZGRlblRleHRPdmVyZmxvd1wiOiBcInN0eWxlc19oaWRkZW5UZXh0T3ZlcmZsb3dfXzExckI1XCIsXG5cdFwibm9EYXRhXCI6IFwic3R5bGVzX25vRGF0YV9fM0lJRDhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fMkNib29cIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fMmpXNktcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18xUGxIQlwiLFxuXHRcInJlZnJlc2hlclwiOiBcInN0eWxlc19yZWZyZXNoZXJfX1ljd2NLXCIsXG5cdFwibG9hZGluZ1wiOiBcInN0eWxlc19sb2FkaW5nX19KQTlFN1wiLFxuXHRcInNwaW5cIjogXCJzdHlsZXNfc3Bpbl9fMTBoQ05cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fM193RVBcIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fMXYydzNcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18xcnpYM1wiLFxuXHRcInN0YXR1c1wiOiBcInN0eWxlc19zdGF0dXNfX19lWF95XCIsXG5cdFwibGl2ZVwiOiBcInN0eWxlc19saXZlX18xM3l5blwiLFxuXHRcIm9mZmxpbmVcIjogXCJzdHlsZXNfb2ZmbGluZV9fMlNRVi1cIixcblx0XCJkcmFmdFwiOiBcInN0eWxlc19kcmFmdF9fMXJuWDhcIixcblx0XCJwYXVzZWRcIjogXCJzdHlsZXNfcGF1c2VkX18yWlRaZFwiLFxuXHRcImljb25cIjogXCJzdHlsZXNfaWNvbl9fMzBFOExcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvYXN0ZXJcIjogXCJzdHlsZXNfdG9hc3Rlcl9fMVBhazRcIixcblx0XCJzdWNjZXNzXCI6IFwic3R5bGVzX3N1Y2Nlc3NfXzFoX08xXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfX2NjcUVQXCIsXG5cdFwiZXJyb3JcIjogXCJzdHlsZXNfZXJyb3JfXzFNd0llXCIsXG5cdFwid2FybmluZ1wiOiBcInN0eWxlc193YXJuaW5nX18xREl3OFwiLFxuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzgwcVdiXCIsXG5cdFwibGVmdEhlYWRcIjogXCJzdHlsZXNfbGVmdEhlYWRfX09ndlFEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoMVwiOiBcInN0eWxlc19oMV9fM3JfU3dcIixcblx0XCJoMlwiOiBcInN0eWxlc19oMl9fM25KYlFcIixcblx0XCJoM1wiOiBcInN0eWxlc19oM19fVWpwemFcIixcblx0XCJoNFwiOiBcInN0eWxlc19oNF9fWTFwQWVcIixcblx0XCJib2R5MTZcIjogXCJzdHlsZXNfYm9keTE2X18zU0pHU1wiLFxuXHRcImJvZHkxNFwiOiBcInN0eWxlc19ib2R5MTRfXzEzYWNGXCIsXG5cdFwic3VidGl0bGUxNlwiOiBcInN0eWxlc19zdWJ0aXRsZTE2X18za3h5VFwiLFxuXHRcInN1YnRpdGxlMTRcIjogXCJzdHlsZXNfc3VidGl0bGUxNF9fMkh4bmxcIixcblx0XCJjYXB0aW9uXCI6IFwic3R5bGVzX2NhcHRpb25fXzhUX0xiXCIsXG5cdFwib3ZlcmxpbmVcIjogXCJzdHlsZXNfb3ZlcmxpbmVfXzJjeWt5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoaWRlU2Nyb2xsYmFyXCI6IFwic3R5bGVzX2hpZGVTY3JvbGxiYXJfXzFRNmRwXCIsXG5cdFwiZGlzYWJsZVVzZXJTZWxlY3RcIjogXCJzdHlsZXNfZGlzYWJsZVVzZXJTZWxlY3RfXzJpOThDXCIsXG5cdFwiaGlkZGVuVGV4dE92ZXJmbG93XCI6IFwic3R5bGVzX2hpZGRlblRleHRPdmVyZmxvd19fM1dJRDVcIixcblx0XCJwbGF5ZXJXcmFwcGVyXCI6IFwic3R5bGVzX3BsYXllcldyYXBwZXJfXzNBVXBBXCIsXG5cdFwiaW5mb1wiOiBcInN0eWxlc19pbmZvX18zTmEzMVwiLFxuXHRcInBsYXllclwiOiBcInN0eWxlc19wbGF5ZXJfXzJkOWVVXCIsXG5cdFwidXBsb2FkQ29udGFpbmVyXCI6IFwic3R5bGVzX3VwbG9hZENvbnRhaW5lcl9fSXNTdnFcIixcblx0XCJjbGlja2FibGVcIjogXCJzdHlsZXNfY2xpY2thYmxlX18xdDg2MlwiLFxuXHRcInVwbG9hZEJ0blwiOiBcInN0eWxlc191cGxvYWRCdG5fX3B6TGRFXCIsXG5cdFwibG9hZGluZ1dyYXBwZXJcIjogXCJzdHlsZXNfbG9hZGluZ1dyYXBwZXJfXzNsNW1PXCIsXG5cdFwibG9hZGluZ1wiOiBcInN0eWxlc19sb2FkaW5nX18zUGpJT1wiLFxuXHRcImVycm9yQ29udGFpbmVyXCI6IFwic3R5bGVzX2Vycm9yQ29udGFpbmVyX18zeXRWY1wiLFxuXHRcInBsYXllckFjdGlvbnNcIjogXCJzdHlsZXNfcGxheWVyQWN0aW9uc19fRzFBOFRcIixcblx0XCJwbGF5aW5nXCI6IFwic3R5bGVzX3BsYXlpbmdfXzJ3Vm85XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoaWRlU2Nyb2xsYmFyXCI6IFwic3R5bGVzX2hpZGVTY3JvbGxiYXJfXzI5Nlp3XCIsXG5cdFwiZGlzYWJsZVVzZXJTZWxlY3RcIjogXCJzdHlsZXNfZGlzYWJsZVVzZXJTZWxlY3RfXzNFT094XCIsXG5cdFwiaGlkZGVuVGV4dE92ZXJmbG93XCI6IFwic3R5bGVzX2hpZGRlblRleHRPdmVyZmxvd19fMXN3M1NcIixcblx0XCJwbGF5ZXJXcmFwcGVyXCI6IFwic3R5bGVzX3BsYXllcldyYXBwZXJfXzJ3Mi1kXCIsXG5cdFwiaW5mb1wiOiBcInN0eWxlc19pbmZvX18zNGxneVwiLFxuXHRcInBsYXllckFjdGlvbnNcIjogXCJzdHlsZXNfcGxheWVyQWN0aW9uc19fM3h0dlZcIixcblx0XCJwbGF5aW5nXCI6IFwic3R5bGVzX3BsYXlpbmdfXzQxR3BJXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlbnRyYW5jZVwiOiBcInN0eWxlc19lbnRyYW5jZV9fMzBjYnFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fMWdGWlJcIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fMzVVeVZcIixcblx0XCJhZHZlcnRpc2VySGVhZGVyXCI6IFwic3R5bGVzX2FkdmVydGlzZXJIZWFkZXJfXzF5WFdIXCIsXG5cdFwiaGlkZGVuVGV4dE92ZXJmbG93XCI6IFwic3R5bGVzX2hpZGRlblRleHRPdmVyZmxvd19fQS1aeS1cIixcblx0XCJhZHZlcnRpc2VySGVhZGVySXRlbVwiOiBcInN0eWxlc19hZHZlcnRpc2VySGVhZGVySXRlbV9fMlRBWGVcIixcblx0XCJhZHZlcnRpc2VySGVhZGVySXRlbVRleHRcIjogXCJzdHlsZXNfYWR2ZXJ0aXNlckhlYWRlckl0ZW1UZXh0X18zLWw5dlwiLFxuXHRcImFjdGl2ZWRcIjogXCJzdHlsZXNfYWN0aXZlZF9fM1NVWktcIixcblx0XCJhZHZlcnRpc2VySGVhZGVySXRlbUljb25cIjogXCJzdHlsZXNfYWR2ZXJ0aXNlckhlYWRlckl0ZW1JY29uX18yLXZFSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWR2ZXJ0aXNlckxheW91dFwiOiBcInN0eWxlc19hZHZlcnRpc2VyTGF5b3V0X19lQVZUc1wiLFxuXHRcImNvbnRlbnRXcmFwcGVyXCI6IFwic3R5bGVzX2NvbnRlbnRXcmFwcGVyX18xbVdReFwiLFxuXHRcImhlYWRlcldyYXBwZXJcIjogXCJzdHlsZXNfaGVhZGVyV3JhcHBlcl9fM3ZERzhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fMVVFTGxcIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fdGZMcUJcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18xc0E3dlwiLFxuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzFBMGd2XCIsXG5cdFwiaGVhZGVySXRlbXNcIjogXCJzdHlsZXNfaGVhZGVySXRlbXNfXzFVRW5fXCIsXG5cdFwiY2FtcGFpZ25Db250YWluZXJcIjogXCJzdHlsZXNfY2FtcGFpZ25Db250YWluZXJfXzJDTVJ1XCIsXG5cdFwiY2FtcGFpZ25IZWFkZXJcIjogXCJzdHlsZXNfY2FtcGFpZ25IZWFkZXJfXzJGaDJlXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18zdjFGS1wiLFxuXHRcImluZm9IZWFkZXJcIjogXCJzdHlsZXNfaW5mb0hlYWRlcl9fMkJoZDNcIixcblx0XCJlZGl0U2V0dGluZ1wiOiBcInN0eWxlc19lZGl0U2V0dGluZ19fMWNKbi1cIixcblx0XCJjYXJkQm9keVwiOiBcInN0eWxlc19jYXJkQm9keV9fc04yRmVcIixcblx0XCJzdGF0dXNGb290ZXJcIjogXCJzdHlsZXNfc3RhdHVzRm9vdGVyX18zWl9ZSlwiLFxuXHRcImxpdmVcIjogXCJzdHlsZXNfbGl2ZV9feGthc21cIixcblx0XCJvZmZsaW5lXCI6IFwic3R5bGVzX29mZmxpbmVfXzMwYjc0XCIsXG5cdFwicGF1c2VCdG5cIjogXCJzdHlsZXNfcGF1c2VCdG5fXzJWWnR0XCIsXG5cdFwiaW5mb1wiOiBcInN0eWxlc19pbmZvX19iSlZRc1wiLFxuXHRcInZpZGVvTGliV3JhcHBlclwiOiBcInN0eWxlc192aWRlb0xpYldyYXBwZXJfXzNocXlrXCIsXG5cdFwicG9wTW9kYWxcIjogXCJzdHlsZXNfcG9wTW9kYWxfXzEwcEV5XCIsXG5cdFwicHVsc2VcIjogXCJzdHlsZXNfcHVsc2VfXzF5Rm1OXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYW1wYWlnbkNvbnRhaW5lclwiOiBcInN0eWxlc19jYW1wYWlnbkNvbnRhaW5lcl9fMnYtYmdcIixcblx0XCJjYW1wYWlnblwiOiBcInN0eWxlc19jYW1wYWlnbl9fSEVJTGVcIixcblx0XCJpY29uXCI6IFwic3R5bGVzX2ljb25fXzFVY2lSXCIsXG5cdFwic3RhdHVzQmFkZ2VcIjogXCJzdHlsZXNfc3RhdHVzQmFkZ2VfXzFXTVBoXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoaWRlU2Nyb2xsYmFyXCI6IFwic3R5bGVzX2hpZGVTY3JvbGxiYXJfXzFSTkQzXCIsXG5cdFwiZGlzYWJsZVVzZXJTZWxlY3RcIjogXCJzdHlsZXNfZGlzYWJsZVVzZXJTZWxlY3RfXzN6cUo0XCIsXG5cdFwiaGlkZGVuVGV4dE92ZXJmbG93XCI6IFwic3R5bGVzX2hpZGRlblRleHRPdmVyZmxvd19fMWg3UDNcIixcblx0XCJ2aWRlb3NDb250YWluZXJcIjogXCJzdHlsZXNfdmlkZW9zQ29udGFpbmVyX18xb3pNVlwiLFxuXHRcInZpZGVvV3JhcHBlclwiOiBcInN0eWxlc192aWRlb1dyYXBwZXJfXzMwVzV4XCIsXG5cdFwiaW5mb1wiOiBcInN0eWxlc19pbmZvX18xTkMxTFwiLFxuXHRcInNlbGVjdEljb25cIjogXCJzdHlsZXNfc2VsZWN0SWNvbl9fMVg3NkRcIixcblx0XCJzZWxlY3RlZFwiOiBcInN0eWxlc19zZWxlY3RlZF9fMkp1MVNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fMzAtaXBcIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fMURpaHNcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18xY0dIZlwiLFxuXHRcInJpZ2h0Q29udHJvbHNcIjogXCJzdHlsZXNfcmlnaHRDb250cm9sc19fM2lRMWVcIixcblx0XCJjcmVhdGVDYW1wYWluTW9kYWxcIjogXCJzdHlsZXNfY3JlYXRlQ2FtcGFpbk1vZGFsX18xMlFyMlwiLFxuXHRcInRpdGxlXCI6IFwic3R5bGVzX3RpdGxlX18yZ1dDTlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlkZVNjcm9sbGJhclwiOiBcInN0eWxlc19oaWRlU2Nyb2xsYmFyX18zNG5zaFwiLFxuXHRcImFkdmVydGlzZXJDb250ZW50XCI6IFwic3R5bGVzX2FkdmVydGlzZXJDb250ZW50X18yc1k4Y1wiLFxuXHRcImRpc2FibGVVc2VyU2VsZWN0XCI6IFwic3R5bGVzX2Rpc2FibGVVc2VyU2VsZWN0X18zNjFEZlwiLFxuXHRcImhpZGRlblRleHRPdmVyZmxvd1wiOiBcInN0eWxlc19oaWRkZW5UZXh0T3ZlcmZsb3dfX2tObDFqXCIsXG5cdFwiYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJcIjogXCJzdHlsZXNfYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJfXzJqMENvXCIsXG5cdFwiYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJUb3BcIjogXCJzdHlsZXNfYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJUb3BfXzJQY00wXCIsXG5cdFwiYWR2ZXJ0aXNlckNvbnRlbnRIZWFkZXJUb3BMZWZ0XCI6IFwic3R5bGVzX2FkdmVydGlzZXJDb250ZW50SGVhZGVyVG9wTGVmdF9fMk5KQjZcIixcblx0XCJhZHZlcnRpc2VyQ29udGVudEhlYWRlclRvcFJpZ2h0XCI6IFwic3R5bGVzX2FkdmVydGlzZXJDb250ZW50SGVhZGVyVG9wUmlnaHRfX1RJblk0XCIsXG5cdFwiYWR2ZXJ0aXNlckNvbnRlbnRDb250ZW50XCI6IFwic3R5bGVzX2FkdmVydGlzZXJDb250ZW50Q29udGVudF9fMWpTbkxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJzdHlsZXNfY29udGVudF9fbFlXNnJcIixcblx0XCJwcm9maWxlQ2FyZFwiOiBcInN0eWxlc19wcm9maWxlQ2FyZF9fM2ZaU3lcIixcblx0XCJyZXBvcnRDYXJkXCI6IFwic3R5bGVzX3JlcG9ydENhcmRfXzF4X01zXCIsXG5cdFwibWVudUNhcmRcIjogXCJzdHlsZXNfbWVudUNhcmRfX3VxaDNkXCIsXG5cdFwibG9nT3V0QnRuV3JhcFwiOiBcInN0eWxlc19sb2dPdXRCdG5XcmFwX18xSVc4clwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlkZVNjcm9sbGJhclwiOiBcInN0eWxlc19oaWRlU2Nyb2xsYmFyX18yandwT1wiLFxuXHRcImFkdmVydGlzZXJBcmVhVGFic1wiOiBcInN0eWxlc19hZHZlcnRpc2VyQXJlYVRhYnNfXzM3SW9UXCIsXG5cdFwiYXJlYXNcIjogXCJzdHlsZXNfYXJlYXNfX3ZndmI0XCIsXG5cdFwiZGlzYWJsZVVzZXJTZWxlY3RcIjogXCJzdHlsZXNfZGlzYWJsZVVzZXJTZWxlY3RfXzI5dUp3XCIsXG5cdFwiaGlkZGVuVGV4dE92ZXJmbG93XCI6IFwic3R5bGVzX2hpZGRlblRleHRPdmVyZmxvd19fc0g3WGlcIixcblx0XCJhcmVhc0xpc3RcIjogXCJzdHlsZXNfYXJlYXNMaXN0X19YM01nOFwiLFxuXHRcImFyZWFcIjogXCJzdHlsZXNfYXJlYV9fMmdJMTNcIixcblx0XCJhY3RpdmVkXCI6IFwic3R5bGVzX2FjdGl2ZWRfXzNuNkdtXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18ySEtlY1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18xNUxFYlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlkZVNjcm9sbGJhclwiOiBcInN0eWxlc19oaWRlU2Nyb2xsYmFyX19VMXFscVwiLFxuXHRcImRpc2FibGVVc2VyU2VsZWN0XCI6IFwic3R5bGVzX2Rpc2FibGVVc2VyU2VsZWN0X18zV0dOM1wiLFxuXHRcImhpZGRlblRleHRPdmVyZmxvd1wiOiBcInN0eWxlc19oaWRkZW5UZXh0T3ZlcmZsb3dfXzEzbThNXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX19neUxDUlwiLFxuXHRcInRpdGxlXCI6IFwic3R5bGVzX3RpdGxlX18zSi16YlwiLFxuXHRcInNjYW5uZXJcIjogXCJzdHlsZXNfc2Nhbm5lcl9fMjJtUVpcIixcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcInN0eWxlc19pbnB1dENvbnRhaW5lcl9fM3h3V3JcIixcblx0XCJpbnB1dENvZGVcIjogXCJzdHlsZXNfaW5wdXRDb2RlX18xYi15MlwiLFxuXHRcImNvZGVJY29uXCI6IFwic3R5bGVzX2NvZGVJY29uX18xTDl1c1wiLFxuXHRcImJ1dHRvblwiOiBcInN0eWxlc19idXR0b25fXzMxLXZ2XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoaWRlU2Nyb2xsYmFyXCI6IFwic3R5bGVzX2hpZGVTY3JvbGxiYXJfXzQ5dXZjXCIsXG5cdFwiZGlzYWJsZVVzZXJTZWxlY3RcIjogXCJzdHlsZXNfZGlzYWJsZVVzZXJTZWxlY3RfX3dwekFlXCIsXG5cdFwiaGlkZGVuVGV4dE92ZXJmbG93XCI6IFwic3R5bGVzX2hpZGRlblRleHRPdmVyZmxvd19fM2pyeVJcIixcblx0XCJuZXdTY3JlZW5IZWFkZXJcIjogXCJzdHlsZXNfbmV3U2NyZWVuSGVhZGVyX19NUWVIQ1wiLFxuXHRcImhlYWRlckl0ZW1zXCI6IFwic3R5bGVzX2hlYWRlckl0ZW1zX18zZ0Y3VlwiLFxuXHRcImljb25cIjogXCJzdHlsZXNfaWNvbl9fMjFHS3pcIixcblx0XCJpbmZvSGVhZGVyXCI6IFwic3R5bGVzX2luZm9IZWFkZXJfXzJJUE5JXCIsXG5cdFwibGlua0J0blwiOiBcInN0eWxlc19saW5rQnRuX18zc1o0cVwiLFxuXHRcInN0YXR1c1wiOiBcInN0eWxlc19zdGF0dXNfXzFqeXVoXCIsXG5cdFwibGl2ZVwiOiBcInN0eWxlc19saXZlX195SEJlelwiLFxuXHRcIm9mZmxpbmVcIjogXCJzdHlsZXNfb2ZmbGluZV9fM0RSelJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fMnFaVk1cIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fMnd5MUlcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18yZncyelwiLFxuXHRcInNjcmVlbnNDYXJkXCI6IFwic3R5bGVzX3NjcmVlbnNDYXJkX19hUzVXS1wiLFxuXHRcImFkdmVydGlzZXJTY3JlZW5zXCI6IFwic3R5bGVzX2FkdmVydGlzZXJTY3JlZW5zX18xOXNBSVwiLFxuXHRcImxvYWRlclwiOiBcInN0eWxlc19sb2FkZXJfXzNLVzlIXCIsXG5cdFwic2NyZWVuc0hlYWRlclwiOiBcInN0eWxlc19zY3JlZW5zSGVhZGVyX18zZHczT1wiLFxuXHRcImxpbmVcIjogXCJzdHlsZXNfbGluZV9fMU50V1pcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJpZ2h0Q29udHJvbHNcIjogXCJzdHlsZXNfcmlnaHRDb250cm9sc19fM3hSanRcIixcblx0XCJzZWFyY2hJY29uXCI6IFwic3R5bGVzX3NlYXJjaEljb25fXzN3X29QXCIsXG5cdFwiZHJvcGRvd24tYmFzaWNcIjogXCJzdHlsZXNfZHJvcGRvd24tYmFzaWNfXzI4SzdHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2aWRlb3NDb250YWluZXJcIjogXCJzdHlsZXNfdmlkZW9zQ29udGFpbmVyX18yMFlXb1wiLFxuXHRcInZpZGVvV3JhcHBlclwiOiBcInN0eWxlc192aWRlb1dyYXBwZXJfXzJkMmFVXCIsXG5cdFwiaW5mb1wiOiBcInN0eWxlc19pbmZvX18xbWs2b1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlkZVNjcm9sbGJhclwiOiBcInN0eWxlc19oaWRlU2Nyb2xsYmFyX18yU1JWUVwiLFxuXHRcImRpc2FibGVVc2VyU2VsZWN0XCI6IFwic3R5bGVzX2Rpc2FibGVVc2VyU2VsZWN0X19SNEE4OVwiLFxuXHRcImhpZGRlblRleHRPdmVyZmxvd1wiOiBcInN0eWxlc19oaWRkZW5UZXh0T3ZlcmZsb3dfXzF3SjRXXCIsXG5cdFwibmV3U2NyZWVuSGVhZGVyXCI6IFwic3R5bGVzX25ld1NjcmVlbkhlYWRlcl9fMW8zejJcIixcblx0XCJoZWFkZXJJdGVtc1wiOiBcInN0eWxlc19oZWFkZXJJdGVtc19fMkRCMjlcIixcblx0XCJpY29uXCI6IFwic3R5bGVzX2ljb25fXzFMcGZiXCIsXG5cdFwiaW5mb0hlYWRlclwiOiBcInN0eWxlc19pbmZvSGVhZGVyX18xVDYzOFwiLFxuXHRcImxpbmtCdG5cIjogXCJzdHlsZXNfbGlua0J0bl9fMWVEaVBcIixcblx0XCJzdGF0dXNcIjogXCJzdHlsZXNfc3RhdHVzX18zNUVMT1wiLFxuXHRcImxpdmVcIjogXCJzdHlsZXNfbGl2ZV9fMzNFYjdcIixcblx0XCJvZmZsaW5lXCI6IFwic3R5bGVzX29mZmxpbmVfXzF6MnFWXCIsXG5cdFwidXBsb2FkQnRuXCI6IFwic3R5bGVzX3VwbG9hZEJ0bl9fMkwyY25cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZGVTY3JvbGxiYXJcIjogXCJzdHlsZXNfaGlkZVNjcm9sbGJhcl9fMnFqemRcIixcblx0XCJkaXNhYmxlVXNlclNlbGVjdFwiOiBcInN0eWxlc19kaXNhYmxlVXNlclNlbGVjdF9fMUx0UGVcIixcblx0XCJoaWRkZW5UZXh0T3ZlcmZsb3dcIjogXCJzdHlsZXNfaGlkZGVuVGV4dE92ZXJmbG93X18zTkhCQ1wiLFxuXHRcInN1YkxheW91dFwiOiBcInN0eWxlc19zdWJMYXlvdXRfX2Q5ek5sXCIsXG5cdFwiaGVhZGVyXCI6IFwic3R5bGVzX2hlYWRlcl9fMkdyRDRcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfXzFSa2pvXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29udGVudC1sb2FkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVwaWNrZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYXllclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXItcmVhZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
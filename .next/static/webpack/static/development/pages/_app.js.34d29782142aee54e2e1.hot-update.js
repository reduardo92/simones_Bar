webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/StateProider.js":
/*!********************************************!*\
  !*** ./components/context/StateProider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateContext */ "./components/context/StateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\context\\StateProider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('drinks'),
      tab = _useState[0],
      setTab = _useState[1];

  return __jsx(_StateContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      tab: tab,
      setTab: setTab
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (StateProvider);

/***/ })

})
//# sourceMappingURL=_app.js.34d29782142aee54e2e1.hot-update.js.map
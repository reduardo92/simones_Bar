webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/context/stateProider.js":
/*!********************************************!*\
  !*** ./components/context/stateProider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateContext */ "./components/context/stateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\context\\stateProider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('drinks'),
      tab = _useState[0],
      setTab = _useState[1];

  var Hello = function Hello() {
    return console.log('hello');
  };

  return __jsx(_stateContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      tab: tab,
      setTab: setTab,
      Hello: Hello
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (StateProvider);

/***/ })

})
//# sourceMappingURL=menu.js.648e86a45454dc168f1c.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.jsx");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/hero */ "./components/ui/hero.js");
/* harmony import */ var _ui_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/state */ "./context/state.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Layout = function Layout(_ref) {
  var children = _ref.children,
      heroSize = _ref.heroSize,
      heroImg = _ref.heroImg,
      titleImg = _ref.titleImg,
      banner = _ref.banner,
      heroOpacity = _ref.heroOpacity;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_context_state__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Simone's Bar"), __jsx("link", {
    href: "../public/global.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Reenie+Beanie&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heroSize: heroSize,
    img: heroImg,
    heroOpacity: heroOpacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_ui_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titleImg: titleImg,
    banner: banner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./context/state.js":
/*!**************************!*\
  !*** ./context/state.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateContext */ "./context/stateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\context\\state.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var State = function State(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('drinks'),
      tab = _useState[0],
      setTab = _useState[1];

  return __jsx(_stateContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
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

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ "./context/stateContext.js":
/*!*********************************!*\
  !*** ./context/stateContext.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (StateContext);

/***/ })

})
//# sourceMappingURL=index.js.d5007f9207ef247783be.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/context/state.js":
/*!*************************************!*\
  !*** ./components/context/state.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateContext */ "./components/context/stateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\context\\state.js";

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

/***/ "./pages/menu.jsx":
/*!************************!*\
  !*** ./pages/menu.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_imgBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/imgBanner */ "./components/ui/imgBanner.js");
/* harmony import */ var _components_ui_mapBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/mapBox */ "./components/ui/mapBox.jsx");
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/carousel/carousel */ "./components/ui/carousel/carousel.jsx");
/* harmony import */ var _components_ui_gridTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/gridTwo */ "./components/ui/gridTwo.js");
/* harmony import */ var _components_ui_hoursBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/hoursBox */ "./components/ui/hoursBox.js");
/* harmony import */ var _components_ui_qoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/qoute */ "./components/ui/qoute.jsx");
/* harmony import */ var _components_menu_menuContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/menu/menuContent */ "./components/menu/menuContent.jsx");
/* harmony import */ var _components_home_dailySpecials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/dailySpecials */ "./components/home/dailySpecials.jsx");
/* harmony import */ var _components_context_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/context/state */ "./components/context/state.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\pages\\menu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var menu = function menu() {
  return __jsx(_components_context_state__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    banner: "menu",
    heroImg: "/outisde.jpg",
    titleImg: "/menutitle.svg",
    heroOpacity: "rgba(0, 0, 0, 0.85)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_menu_menuContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_ui_imgBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: "/PinballBooth.jpg",
    title: "ABOUT",
    subtile: "SEE WHO WE ARE",
    btnTitle: "view more",
    toLink: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_home_dailySpecials__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showButton: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_ui_imgBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: "/outisde.jpg",
    title: "CONTACT",
    subtile: "SHOOT US A QUESTION",
    btnTitle: "view more",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_ui_gridTwo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mr-a max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_ui_hoursBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    order: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_ui_qoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_ui_mapBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ })

})
//# sourceMappingURL=menu.js.275911c50e57f6dcaef5.hot-update.js.map
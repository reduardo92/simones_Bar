webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _ui_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/socials */ "./components/ui/socials.js");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/StateContext */ "./components/context/StateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "navbar__Styled",
  componentId: "ir29km-0"
})(["position:", ";padding:0.5em 0;top:0;left:0;right:0;z-index:1000;background-color:", ";animation:1s fadeIn linear;&::before{content:'';position:fixed;top:0;left:0;right:0;bottom:0;height:100vh;width:100vw;background-color:rgba(0,0,0,0.6);display:", ";opacity:", ";z-index:", ";}.nav--link{&__item{font-weight:var(--fw-bold);color:var(--second-clr);font-size:1.1rem;transition:var(--ease--in--out--02s);cursor:pointer;&:hover,&:focus{color:var(--primary-clr);}}}.selected{color:var(--accent-clr) !important;}.head--top{display:flex;justify-content:space-between;align-items:center;padding:0 0.5em;.info{display:flex;flex-direction:column;align-items:flex-start;&--link{color:var(--white-clr);display:flex;justify-content:space-evenly;align-items:baseline;font-size:0.85rem;width:max-content;cursor:pointer;transition:var(--ease--in--out--02s);&:hover,&:focus{color:var(--accent-clr);}svg{margin-right:0.5em;}}}}.brand-logo--top{display:none;}.navbar{display:flex;justify-content:space-between;align-items:center;margin-top:", ";padding:", ";}.brand-logo{display:block;width:200px;}.nav--toggle{transition:var(--tran--opa);opacity:", ";margin-right:1em;}.burger,.burger::before,.burger::after{background-color:", ";width:1.5em;height:3px;transition:var(--tran--opa);}.burger{display:block;position:relative;transform:", ";&:hover,&:focus,&:hover::before,&:focus::before,&:hover::after,&:focus::after{background-color:var(--second-clr);}&::after,&::before{content:'';position:absolute;left:0;}&::before{bottom:6px;opacity:", ";}&::after{top:6px;transform:", ";}}.inside-nav{opacity:1;margin-right:0;}.info--nav{display:none;}.navbar--group{z-index:10;transition:var(--tran--opa);position:fixed;top:0;right:0;background-color:var(--white-clr);height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;width:70vw;transform:", ";}@media screen and (min-width:760px){.head--top{display:flex;justify-content:space-between;align-items:center;padding:0 0.5em;.info{display:flex;flex-direction:row;align-items:flex-start;width:50%;justify-content:space-between;}}.brand-logo{width:250px;}}@media screen and (min-width:1024px){position:", ";margin-top:", ";max-width:", ";margin:0 auto;.brand-logo,.nav--toggle{display:none;}.brand-logo{display:", ";}.brand-logo--top{display:block;border-right:1px solid var(--white-clr);border-left:1px solid var(--white-clr);padding:0 3em;}.head--top{display:", ";justify-content:space-between;align-items:center;padding:0;justify-self:center;width:1000px;margin:0 auto;.info{flex-direction:column;width:auto;}}.navbar{border-top:", ";padding:", ";}.navbar--group{z-index:10;transition:var(--tran--opa);position:relative;top:0;right:0;background-color:transparent;height:auto;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;transform:translateX(0);}.nav--link{&__item{color:var(--white-clr);&:hover,&:focus{color:var(--accent-clr);}}}}"], function (props) {
  return props.navScroll ? 'fixed' : 'absolute';
}, function (props) {
  return props.navScroll ? 'var(--primary-clr)' : 'none';
}, function (props) {
  return props.toggle ? 'block' : ' none';
}, function (props) {
  return props.toggle ? 1 : 0;
}, function (props) {
  return props.toggle ? '' : -3;
}, function (props) {
  return props.navScroll ? '0' : '1em';
}, function (props) {
  return props.navScroll ? '.5em' : '0';
}, function (props) {
  return props.toggle ? '0' : 1;
}, function (props) {
  return props.toggle ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.toggle ? 'rotate(45deg)' : '';
}, function (props) {
  return props.toggle ? '0' : '1';
}, function (props) {
  return props.toggle ? 'rotate(90deg) translate(-6px)' : '';
}, function (props) {
  return props.toggle ? 'translateX(0)' : 'translateX(105%)';
}, function (props) {
  return props.navScroll ? 'fixed' : 'absolute';
}, function (props) {
  return props.navScroll ? '0' : '1em';
}, function (props) {
  return props.navScroll ? '100%' : '1200px';
}, function (props) {
  return props.navScroll && 'block';
}, function (props) {
  return props.navScroll ? 'none' : 'flex';
}, function (props) {
  return props.navScroll ? 'none' : '1px solid var(--white-clr)';
}, function (props) {
  return props.navScroll ? '.5em' : '1em 4em 0';
});

var Navbar = function Navbar() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      toggle = _useContext.toggle,
      setToggle = _useContext.setToggle,
      navScroll = _useContext.navScroll,
      navRef = _useContext.navRef;

  return __jsx(Styled, {
    ref: navRef,
    toggle: toggle,
    className: "navbar",
    navScroll: navScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("div", {
    className: "head--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_ui_socials__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("a", {
    className: "brand-logo--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }))), __jsx("div", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("a", {
    className: "info--link",
    href: "tel:+312668601",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPhone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), "(312) 666-8601"), __jsx("a", {
    className: "info--link",
    href: "https://www.google.com/maps/place/Simone's/@41.8581996,-87.6532561,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2cf8f9586635:0x14d929f2b6402c66!8m2!3d41.8581996!4d-87.6510674",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaMapMarkerAlt"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), "960 W 18th, Chicago, IL 60608"))), __jsx("nav", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("a", {
    className: "brand-logo ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }))), __jsx("div", {
    className: "nav--toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx("span", {
    className: "burger toggle",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  })), __jsx("ul", {
    className: "navbar--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("div", {
    className: "nav--toggle inside-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, __jsx("span", {
    className: "burger toggle",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  })), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, "HOME"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "ABOUT"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "MENU"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/privateEvents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, "PRIVATE EVENTS"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/photoGallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "PHOTO GALLERY"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/press",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, "PRESS"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, "CONTACT"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar); // toggle scroll nav
// .navbar {
//   padding: .2em 3em;
// }

/***/ })

})
//# sourceMappingURL=menu.js.70f50755953b4fb7e274.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_socials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/socials */ "./components/ui/socials.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n\n  &::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: ", ";\n    opacity: ", ";\n    z-index: ", ";\n  }\n\n  /* nav links */\n  .nav--link {\n    &__item {\n      font-weight: var(--fw-bold);\n      color: var(--second-clr);\n      font-size: 1.1rem;\n      transition: var(--ease--in--out--02s);\n      cursor: pointer;\n\n      &:hover,\n      &:focus {\n        color: var(--primary-clr);\n      }\n    }\n  }\n\n  /* Top head */\n  .head--top {\n    display: ", ";\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 0.5em;\n\n    .info {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n      &--link {\n        color: var(--white-clr);\n        display: flex;\n        justify-content: space-evenly;\n        align-items: baseline;\n        font-size: 0.85rem;\n        width: max-content;\n        cursor: pointer;\n\n        svg {\n          margin-right: 0.5em;\n        }\n      }\n    }\n  }\n\n  .brand-logo--top {\n    display: none;\n  }\n\n  /* NavBar */\n  .navbar {\n    position: ", ";\n    background-color: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 1em;\n  }\n\n  .brand-logo {\n    display: block;\n    width: 200px;\n  }\n\n  .nav--toggle {\n    transition: var(--tran--opa);\n    opacity: ", ";\n    margin-right: 1em;\n  }\n\n  .burger,\n  .burger::before,\n  .burger::after {\n    background-color: ", ";\n    width: 1.5em;\n    height: 3px;\n    transition: var(--tran--opa);\n  }\n\n  .burger {\n    display: block;\n    position: relative;\n    transform: ", ";\n\n    &:hover,\n    &:focus,\n    &:hover::before,\n    &:focus::before,\n    &:hover::after,\n    &:focus::after {\n      background-color: var(--second-clr);\n    }\n\n    &::after,\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n    }\n\n    &::before {\n      bottom: 6px;\n      opacity: ", ";\n    }\n    &::after {\n      top: 6px;\n      transform: ", ";\n    }\n  }\n\n  .inside-nav {\n    opacity: 1;\n    margin-right: 0;\n  }\n\n  .info--nav {\n    display: none;\n  }\n  /* navbar--group */\n  .navbar--group {\n    z-index: 10;\n    transition: var(--tran--opa);\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: var(--white-clr);\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 70vw;\n    transform: ", ";\n  }\n\n  @media screen and (min-width: 760px) {\n    /* Top head */\n    .head--top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0 0.5em;\n\n      .info {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-start;\n        width: 50%;\n        justify-content: space-between;\n      }\n    }\n\n    .brand-logo {\n      width: 250px;\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    position: absolute;\n    margin-top: 1em;\n    display: grid;\n    justify-content: center;\n\n    .brand-logo,\n    .nav--toggle {\n      display: none;\n    }\n\n    .brand-logo--top {\n      display: block;\n      border-right: 1px solid var(--white-clr);\n      border-left: 1px solid var(--white-clr);\n      padding: 0 3em;\n    }\n\n    /* Top head */\n    .head--top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0;\n      justify-self: center;\n      width: 1000px;\n\n      .info {\n        flex-direction: column;\n        width: auto;\n      }\n    }\n\n    .navbar {\n      border-top: 1px solid var(--white-clr);\n      padding: 1em 4em 0;\n    }\n\n    /* Navbar */\n    .navbar--group {\n      z-index: 10;\n      transition: var(--tran--opa);\n      position: relative;\n      top: 0;\n      right: 0;\n      background-color: transparent;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-evenly;\n      width: 1000px;\n      transform: translateX(0);\n    }\n\n    .nav--link {\n      &__item {\n        color: var(--white-clr);\n        &:hover,\n        &:focus {\n          color: var(--accent-clr);\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.toggle ? 'block' : ' none';
}, function (props) {
  return props.toggle ? 1 : 0;
}, function (props) {
  return props.toggle ? '' : -3;
}, function (props) {
  return props.navScroll ? 'none' : 'fixed';
}, function (props) {
  return props.navScroll ? 'fixed' : 'static';
}, function (props) {
  return props.navScroll ? 'red' : 'none';
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
});

var Navbar = function Navbar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      navScroll = _useState2[0],
      setNavScroll = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      navheight = _useState3[0],
      setNavHeight = _useState3[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setNavHeight(navRef.current.scrollHeight);
    if (navheight === null) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY <= navheight) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, [navheight]);
  console.log(navheight);
  return __jsx(Styled, {
    ref: navRef,
    toggle: toggle,
    className: "navbar",
    navScroll: navScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx("div", {
    className: "head--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx(_ui_socials__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("a", {
    className: "brand-logo--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }))), __jsx("div", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("a", {
    className: "info--link",
    href: "tel:+312668601",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), "(312) 666-8601"), __jsx("a", {
    className: "info--link",
    href: "https://www.google.com/maps/place/Simone's/@41.8581996,-87.6532561,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2cf8f9586635:0x14d929f2b6402c66!8m2!3d41.8581996!4d-87.6510674",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMapMarkerAlt"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }), "960 W 18th, Chicago, IL 60608"))), __jsx("nav", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("a", {
    className: "brand-logo ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }))), __jsx("div", {
    className: "nav--toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx("span", {
    className: "burger toggle",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  })), __jsx("ul", {
    className: "navbar--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("div", {
    className: "nav--toggle inside-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("span", {
    className: "burger toggle",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, " HOME"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "ABOUT"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, "MENU"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/privateEvents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "PRIVATE EVENTS"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/photoGallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, "PHOTO GALLERY"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/press",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "PRESS"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
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
//# sourceMappingURL=index.js.f5613a9e118395ee52d4.hot-update.js.map
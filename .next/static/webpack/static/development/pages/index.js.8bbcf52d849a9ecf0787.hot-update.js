webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/dailySpecials.jsx":
/*!*******************************************!*\
  !*** ./components/home/dailySpecials.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\home\\dailySpecials.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  gap: 2em;\n  justify-content: center;\n\n  .beer--fries,\n  .chip--burger {\n    display: none;\n    width: 250px;\n  }\n\n  /* Banner  */\n  .daily--banner--container {\n    position: relative;\n    display: grid;\n    gap: 2em;\n    justify-items: center;\n  }\n\n  .burger--img {\n    height: 280px;\n    object-fit: cover;\n    box-shadow: var(--shadow);\n    max-width: 500px;\n  }\n\n  .banner {\n    position: relative;\n    display: grid;\n    background-color: var(--white-clr);\n    gap: 0.8em;\n    border: 0.7em solid var(--second-clr);\n    color: var(--primary-clr);\n    font-weight: var(--fw-bold);\n    box-shadow: var(--shadow);\n    padding: 2em;\n    max-width: 500px;\n    margin: 0 auto;\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 0px;\n      left: 2px;\n      bottom: 0;\n      height: 103%;\n      width: 104%;\n      box-shadow: var(--shadow);\n      background-color: var(--primary-clr);\n      z-index: -1;\n    }\n\n    &--ul {\n      display: grid;\n      gap: 1em;\n      margin: 1em 0;\n    }\n  }\n\n  .side--text,\n  .close--caption {\n    color: var(--second-clr);\n    font-weight: var(--fw-regular);\n  }\n\n  .close--caption + .close--caption {\n    margin-bottom: 1em;\n  }\n\n  .side--text {\n    margin-left: 0.5em;\n  }\n\n  .button,\n  .react-reveal {\n    justify-self: center;\n    display: ", ";\n  }\n\n  @media screen and (min-width: 760px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: auto;\n    .title--banner {\n      align-items: flex-start;\n      justify-self: flex-start;\n      align-self: center;\n    }\n\n    .chip--burger {\n      justify-self: flex-end;\n      align-self: center;\n      display: block;\n    }\n\n    .daily--banner--container {\n      grid-column: 1 / 3;\n      grid-template-columns: repeat(2, 1fr);\n      grid-auto-rows: auto;\n    }\n\n    .burger--img {\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n\n    .banner {\n      margin: 0;\n      grid-column: 1 / 3;\n      margin-top: 3em;\n      margin-left: 10em;\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    max-width: 1400px;\n    margin: 6em auto;\n\n    .chip--burger {\n      justify-self: center;\n      width: 300px;\n    }\n\n    .daily--banner--container {\n      grid-column: 1 / 3;\n      grid-template-columns: repeat(2, 1fr);\n      grid-auto-rows: auto;\n    }\n\n    .burger--img {\n      height: 404px;\n      max-width: 720px;\n    }\n\n    .banner {\n      margin-left: 17em;\n      max-width: 580px;\n    }\n\n    .beer--fries {\n      display: block;\n      width: 300px;\n      margin-top: -15em;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section(_templateObject(), function (props) {
  return props.showButton;
});

var DailySpecials = function DailySpecials(_ref) {
  var showButton = _ref.showButton;
  return __jsx(Styled, {
    className: "daily--specials section",
    showButton: showButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    topTitle: "save up",
    title: "daily specials",
    botTitle: "enjoy yourself",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), __jsx("img", {
    src: "/ncaho_burger.svg",
    alt: "chip burger",
    className: "chip--burger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("div", {
    className: "daily--banner--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("img", {
    src: "/duckburger.jpg",
    alt: "burger image",
    className: "burger--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), __jsx("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("h2", {
    className: "banner--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "GET SAVING"), __jsx("ul", {
    className: "banner--ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("li", {
    className: "banner--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Sunday:", __jsx("span", {
    className: "side--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "dollar off drafts until 8pm")), __jsx("li", {
    className: "banner--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Monday:", __jsx("span", {
    className: "side--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "PBR tallboy and any pizza $7")), __jsx("li", {
    className: "banner--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Tuesday:", __jsx("span", {
    className: "side--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "dollar off craft cans + bottles; $2 off nachos")), __jsx("li", {
    className: "banner--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Wednesday:", __jsx("span", {
    className: "side--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "PBR tallboy+Evan Williams shot $5; $2 off wings")), __jsx("li", {
    className: "banner--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Thursday:", __jsx("span", {
    className: "side--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "$4 well drinks (single pour only), $2 off quesadillas")), __jsx("li", {
    className: "banner--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Every Day Until 5pm:", __jsx("span", {
    className: "side--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "1/2 lb angus or vegan burger, hand cut fries and a PBR tallboy $8"))), __jsx("p", {
    className: "close--caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "18% gratuity will be added to parties of 6 or more"), __jsx("p", {
    className: "close--caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "No more than two forms of payment per check/table extra side of sauce 50 cents carryout charge 75 cents"), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: true,
    delay: 400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(_ui_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toLink: "/menu",
    title: "view more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })))), __jsx("img", {
    src: "/beer_fries.png",
    alt: "beer fries",
    className: "beer--fries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DailySpecials);

/***/ })

})
//# sourceMappingURL=index.js.8bbcf52d849a9ecf0787.hot-update.js.map
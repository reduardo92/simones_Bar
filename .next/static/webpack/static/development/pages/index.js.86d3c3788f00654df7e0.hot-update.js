webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/imgBanner.js":
/*!************************************!*\
  !*** ./components/ui/imgBanner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\ui\\imgBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-position: ", ";\n  background-attachment: fixed;\n  background-size: cover;\n  overflow: hidden;\n  width: 100%;\n  height: 450px;\n  text-align: center;\n  z-index: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.75);\n    z-index: -1;\n  }\n\n  .img--banner__img {\n    background: url('/box.png');\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 100%;\n    height: 105%;\n    background-position: center;\n    background-size: 100% 100%;\n  }\n\n  .subtitle {\n    margin-bottom: 1em;\n    letter-spacing: 1.1px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    height: 500px;\n\n    .title {\n      font-size: 2.4rem;\n    }\n\n    .subtitle {\n      font-size: 1.4rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), function (props) {
  return props.img;
}, function (props) {
  return props.posiion || 'center';
});

var ImgBanner = function ImgBanner(_ref) {
  var _ref$img = _ref.img,
      img = _ref$img === void 0 ? '/outisde.jpg' : _ref$img,
      posiion = _ref.posiion,
      title = _ref.title,
      subtile = _ref.subtile,
      btnTitle = _ref.btnTitle,
      toLink = _ref.toLink;
  return __jsx(Styled, {
    className: "img--banner section",
    img: img,
    posiion: posiion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "img--banner__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, title), __jsx("h3", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, subtile), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    delay: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toLink: toLink,
    title: btnTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImgBanner);

/***/ })

})
//# sourceMappingURL=index.js.86d3c3788f00654df7e0.hot-update.js.map
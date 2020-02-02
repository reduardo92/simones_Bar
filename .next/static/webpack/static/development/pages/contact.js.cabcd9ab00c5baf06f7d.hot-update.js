webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/ui/carousel/carousel.jsx":
/*!*********************************************!*\
  !*** ./components/ui/carousel/carousel.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StateContext */ "./components/context/StateContext.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\ui\\carousel\\carousel.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "carousel__Styled",
  componentId: "xcr2pa-0"
})(["width:100%;height:300px;margin-top:5em;overflow-x:hidden;ul{display:flex;li{flex-shrink:0;height:300px;img{height:100%;object-fit:cover;}}}@media screen and (min-width:760px){height:350px;ul{li{height:350px;}}}"]);

var Carousell = function Carousell() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      setCarosuel = _useContext.setCarosuel;

  var imgs = {
    0: '/burger.jpg',
    1: '/craft_beer.jpg',
    2: '/drink_pink.jpg',
    3: '/SimonesBarFaceS.jpg',
    4: '/PinballBooth.jpg',
    5: '/pizza.jpg',
    6: '/patio.jpg',
    7: '/santi.jpg',
    8: '/Outisde_night.jpg',
    9: '/patio_two.jpg',
    10: '/santigo_cocktail.jpg',
    11: '/burger_two.jpg'
  };
  return __jsx(Styled, {
    className: "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    slidesPerPage: setCarosuel(),
    infinite: true,
    autoPlay: 3000,
    animationSpeed: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(imgs).map(function (img, i) {
    return __jsx("img", {
      key: i,
      src: img,
      alt: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousell);

/***/ })

})
//# sourceMappingURL=contact.js.cabcd9ab00c5baf06f7d.hot-update.js.map
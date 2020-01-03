webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\ui\\carousel\\carousel.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  height: 300px;\n  margin-top: 5em;\n  overflow-x: hidden;\n\n  ul {\n    display: flex;\n    li {\n      flex-shrink: 0;\n      height: 300px;\n\n      img {\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n\n  @media screen and (min-width: 760px) {\n    height: 350px;\n\n    ul {\n      li {\n        height: 350px;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());

var Carousell = function Carousell() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setWindowSize(window.outerWidth);
  }, []);
  return __jsx(Styled, {
    className: "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    slidesPerPage: windowSize < 768 ? 1 : 4,
    infinite: true,
    autoPlay: 3000,
    animationSpeed: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(imgs).map(function (img, i) {
    return __jsx("img", {
      key: i,
      src: img,
      alt: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousell);

/***/ })

})
//# sourceMappingURL=index.js.01beeb324ac1dac88a27.hot-update.js.map
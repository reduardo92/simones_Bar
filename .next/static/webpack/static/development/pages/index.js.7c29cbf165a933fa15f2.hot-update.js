webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/context/StateContext.js":
false,

/***/ "./components/home/homeMenu.jsx":
/*!**************************************!*\
  !*** ./components/home/homeMenu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var _ui_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/tabs */ "./components/ui/tabs.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\home\\homeMenu.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "homeMenu__Styled",
  componentId: "l5vnmt-0"
})(["background-color:var(--primary-clr);margin:5em 0;padding:4em 1em 2em;.container{display:grid;justify-items:center;gap:3em;grid-gap:3em;}.title--banner{.title{color:var(--white-clr);-webkit-text-stroke:2px var(--white-clr);}}.taps--container{display:flex;justify-content:space-between;width:100%;align-items:center;}.tab{color:var(--white-clr);}.menu{display:grid;grid-template-columns:repeat(auto-fit,minmax(45%,1fr));gap:3em;grid-gap:3em;width:100%;}.menu--img{max-width:340px;}.menu--item{border-bottom:2px dotted var(--second-clr);padding-bottom:1em;display:flex;align-items:flex-start;&:last-child{border:none;}}.menu--item--last{border:none;}.price{color:var(--white-clr);font-weight:var(--fw-bold);margin-left:auto;}.button{&:hover,&focus{border-color:var(--second-clr);}}@media screen and (min-width:760px){.container{grid-template-columns:repeat(2,1fr);max-width:1300px;margin:0 auto;}.title--banner{align-items:flex-start;justify-self:flex-start;}.taps--container{align-self:flex-end;max-width:400px;}.menu{grid-column:1/3;}.menu--item:nth-last-child(2){border:none;}.button{align-self:baseline;justify-self:flex-start;}.menu--img{margin-top:-5em;justify-self:flex-end;}}"]);

var HomeMenu = function HomeMenu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('drinks'),
      tab = _useState[0],
      setTab = _useState[1];

  var menu = {
    drinks: [{
      title: 'Mango Unchained',
      text: "Pinnacle mango vodka, mango\n            nectar, lime, tripel sec and chamoy",
      price: '10.00'
    }, {
      title: 'Pilesen Negroni',
      text: "Espolon rep,  Tattersaill bitter orange, \n            punt y mes",
      price: '10.00'
    }, {
      title: 'Punch Drunk',
      text: "Nordic rum, apple cider &\n            cinnamon stick, served warm",
      price: '10.00'
    }, {
      title: 'Winter Mule',
      text: "Ginger beer, Tito\u2019s vodka,\n            Tattersall cranberry liquer",
      price: '10.00'
    }, {
      title: 'WHITE',
      text: "Forchir Pinot  Grigio\nBlanc De Camarsac Sauv Blanc",
      price: '8.00'
    }, {
      title: 'SPARKLING',
      text: "Gougenheim  Sparkling Rose\n            J. Roget ",
      price: '8.00'
    }],
    beer: [{
      title: 'Virtue Southcider',
      text: 'slightly sweet w/ subtle vanilla notes. 5/5%',
      price: '6.00'
    }, {
      title: '21st Amendment El Sully',
      text: 'mexican-styleger, light & crisp. 4.8%',
      price: '5.00'
    }, {
      title: 'Allagash White',
      text: 'belgian style wheat w/ corriander & orange 5.2%',
      price: '6.00'
    }, {
      title: "Avery Ellies's Brown",
      text: 'well balanced brown ale w/ vanilla notes',
      price: '6.00'
    }, {
      title: 'Sweet Water Mango Kush',
      text: 'american wheat w/ herbal mango notes. 5%',
      price: '6.00'
    }, {
      title: 'Press Blackerry & Hibiscous',
      text: 'naturally flavored hard seltzer. 4%',
      price: '5.00'
    }],
    food: [{
      title: 'Chipotle Burger',
      text: 'chipotle bbq sauce, cheddar and bacon topped with an onion ring',
      price: '9.00'
    }, {
      title: 'Pilsen Burger',
      text: 'jalapenos, guacamole and chihuahua cheese',
      price: '9.00'
    }, {
      title: 'Simones Pizza',
      text: 'potatoes, parmesan and rosemary simple syrup',
      price: '8.00'
    }, {
      title: 'Bbq Chicken Pizza',
      text: 'barbequed chicken, chipotle peppers and jack and cheddar cheeses',
      price: '8.00'
    }, {
      title: "Kristoffer's Tres Leches Cake",
      text: 'the classic dulce de leche. made fresh by the best',
      price: '6.00'
    }, {
      title: 'Simones Salad',
      text: 'spring mix, cranberries, almonds, goat cheese and balsamic vinaigrette, topped with pickled red onions',
      price: '8.00'
    }]
  };
  return __jsx(Styled, {
    className: "home--menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    topTitle: "CHECK IT OUT",
    title: "menu",
    botTitle: "come eat some good food",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx("div", {
    className: "taps--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: tab === 'drinks' && 'tab',
    onClick: function onClick() {
      return setTab('drinks');
    },
    active: tab === 'drinks',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "drinks"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: tab === 'beer' && 'tab',
    onClick: function onClick() {
      return setTab('beer');
    },
    active: tab === 'beer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "beer"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: tab === 'food' && 'tab',
    onClick: function onClick() {
      return setTab('food');
    },
    active: tab === 'food',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "food")), __jsx("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, menu[tab].map(function (_ref, i) {
    var title = _ref.title,
        text = _ref.text,
        price = _ref.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, "$", price));
  })), __jsx(_ui_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toLink: "/menu",
    title: "view more",
    bgclr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), __jsx("div", {
    className: "menu--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("img", {
    src: "/menu_img.png",
    alt: "nacho beer image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeMenu);

/***/ })

})
//# sourceMappingURL=index.js.7c29cbf165a933fa15f2.hot-update.js.map
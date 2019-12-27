webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/homeMenu.jsx":
/*!**************************************!*\
  !*** ./components/home/homeMenu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var _ui_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/tabs */ "./components/ui/tabs.js");
/* harmony import */ var _context_stateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/stateContext */ "./context/stateContext.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\home\\homeMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: var(--primary-clr);\n  margin: 5em 0;\n  padding: 4em 1em 2em;\n  .container {\n    display: grid;\n    justify-items: center;\n    gap: 3em;\n  }\n\n  /* title--banner */\n  .title--banner {\n    .title {\n      color: var(--white-clr);\n      -webkit-text-stroke: 2px var(--white-clr);\n    }\n  }\n\n  /* TAbs */\n  .taps--container {\n    /* margin: 2em 0; */\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n  }\n\n  .tab {\n    color: var(--white-clr);\n    background-color: var(--second-clr);\n    padding: 0.8em 1.3em;\n    border-radius: 5px;\n    text-transform: uppercase;\n    border: none;\n    font-weight: var(--fw-bold);\n  }\n\n  .menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\n    gap: 3em;\n    width: 100%;\n  }\n\n  .menu--img {\n    max-width: 340px;\n  }\n\n  .menu--item {\n    border-bottom: 2px dotted var(--second-clr);\n    padding-bottom: 1em;\n    display: flex;\n    align-items: flex-start;\n\n    &:last-child {\n      border: none;\n    }\n  }\n\n  .menu--item--last {\n    border: none;\n  }\n\n  .price {\n    color: var(--white-clr);\n    font-weight: var(--fw-bold);\n    margin-left: auto;\n  }\n\n  /* Button */\n  .button {\n    &:hover,\n    &focus {\n      border-color: var(--second-clr);\n    }\n  }\n\n  /* .activeTab {\n    transform: scale(0.95);\n    background-color: transparent;\n    border-color: var(--second-clr);\n    outline-color: var(--second-clr);\n  } */\n\n  @media screen and (min-width: 760px) {\n    .container {\n      grid-template-columns: repeat(2, 1fr);\n      max-width: 1300px;\n      margin: 0 auto;\n    }\n    /* padding-left: 23vw; */\n    /* padding-right: 23vw; */\n\n    .title--banner {\n      align-items: flex-start;\n      justify-self: flex-start;\n    }\n\n    .taps--container {\n      align-self: flex-end;\n      max-width: 400px;\n    }\n\n    .menu {\n      grid-column: 1/3;\n    }\n\n    .menu--item:nth-last-child(2) {\n      border: none;\n    }\n\n    .button {\n      align-self: baseline;\n      justify-self: flex-start;\n    }\n\n    .menu--img {\n      margin-top: -5em;\n      justify-self: flex-end;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var HomeMenu = function HomeMenu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('drinks'),
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
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    topTitle: "CHECK IT OUT",
    title: "menu",
    botTitle: "come eat some good food",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("div", {
    className: "taps--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return setTab('drinks');
    },
    active: tab === 'drinks',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "drinks"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return setTab('beer');
    },
    active: tab === 'beer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "beer"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return setTab('food');
    },
    active: tab === 'food',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "food")), __jsx("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
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
        lineNumber: 262
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, "$", price));
  })), __jsx(_ui_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toLink: "/menu",
    title: "view more",
    bgclr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), __jsx("div", {
    className: "menu--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("img", {
    src: "/menu_img.png",
    alt: "nacho beer image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeMenu);

/***/ })

})
//# sourceMappingURL=index.js.12d4dba3fb699854a6dc.hot-update.js.map
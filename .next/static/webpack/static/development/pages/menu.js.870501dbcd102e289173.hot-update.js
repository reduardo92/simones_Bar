webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./components/menu/menuContent.jsx":
/*!*****************************************!*\
  !*** ./components/menu/menuContent.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu/menu.js");
/* harmony import */ var _ui_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/tabs */ "./components/ui/tabs.js");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\menu\\menuContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 3em 1em 5em;\n  .container {\n    display: grid;\n    justify-items: center;\n    gap: 3em;\n    justify-content: center;\n  }\n\n  .para,\n  .menu--item--text {\n    text-transform: capitalize;\n  }\n\n  /* TAbs */\n  .taps--container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.5em;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n  }\n\n  .tab {\n    color: var(--white-clr);\n    background-color: var(--second-clr);\n    padding: 0.8em 1.3em;\n    border-radius: 5px;\n    text-transform: uppercase;\n    border: none;\n    font-weight: var(--fw-bold);\n  }\n\n  .menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\n    gap: 3em;\n    padding: 0 1em;\n    width: 100%;\n  }\n\n  .menu--img {\n    max-width: 400px;\n  }\n\n  .title {\n    color: var(--primary-clr);\n  }\n\n  .menu--item {\n    border-bottom: 2px dotted var(--second-clr);\n    padding-bottom: 1em;\n    display: flex;\n    align-items: flex-start;\n\n    &:last-child {\n      border: none;\n    }\n  }\n\n  .menu--item--last {\n    border: none;\n  }\n\n  .menu--item--text {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  .menu--title {\n    color: var(--accent-clr);\n  }\n\n  .price {\n    color: var(--primary-clr);\n    font-weight: var(--fw-bold);\n    margin-left: auto;\n  }\n\n  /* Button */\n  .button {\n    &:hover,\n    &focus {\n      border-color: var(--second-clr);\n    }\n  }\n\n  /* Sandwiches subtile */\n\n  .sandwiche--subtitle {\n    margin-top: auto;\n  }\n\n  @media screen and (min-width: 760px) {\n    .container {\n      grid-template-columns: repeat(2, 1fr);\n      max-width: 1300px;\n      margin: 0 auto;\n    }\n\n    .taps--container {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .title--banner,\n    .taps--container,\n    .menu {\n      grid-column: 1/3;\n    }\n\n    .menu--item:nth-last-child(2) {\n      border: none;\n    }\n\n    .menu--img {\n      margin-top: -5em;\n      justify-self: flex-end;\n      grid-column: 1/3;\n    }\n\n    .menu--title {\n      grid-column: 1 / 3;\n      color: var(--accent-clr);\n    }\n  }\n  @media screen and (min-width: 1300px) {\n    .taps--container {\n      grid-template-columns: repeat(8, 1fr);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Styled = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section(_templateObject());

var MenuContent = function MenuContent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('drinks'),
      tab = _useState[0],
      setTab = _useState[1];

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(Styled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    topTitle: "CHECK IT OUT",
    title: "menu",
    botTitle: "come eat some good food",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("div", {
    className: "taps--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('drinks');
    },
    active: tab === 'drinks',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "drinks"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('beer');
    },
    active: tab === 'beer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "beer"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('appetizers');
    },
    active: tab === 'appetizers',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Appetizers"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('soupSalad');
    },
    active: tab === 'soupSalad',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Soups&Salads"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('pizzas');
    },
    active: tab === 'pizzas',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "pizzas"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('sandwiches');
    },
    active: tab === 'sandwiches',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "sandwiches"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('desserts');
    },
    active: tab === 'desserts',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "desserts"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('brunch');
    },
    active: tab === 'brunch',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "brunch")), __jsx("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, tab === 'drinks' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Cocktails"), _menu__WEBPACK_IMPORTED_MODULE_3__["default"].drinks.cocktails.map(function (_ref, i) {
    var title = _ref.title,
        text = _ref.text,
        price = _ref.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "$", price));
  }), __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Wines"), _menu__WEBPACK_IMPORTED_MODULE_3__["default"].drinks.wines.map(function (_ref2, i) {
    var title = _ref2.title,
        text = _ref2.text,
        price = _ref2.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "$", price));
  })), tab === 'beer' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Drafts"), _menu__WEBPACK_IMPORTED_MODULE_3__["default"].beer.drafts.map(function (_ref3, i) {
    var title = _ref3.title,
        text = _ref3.text,
        price = _ref3.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "$", price));
  }), __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Packaged"), _menu__WEBPACK_IMPORTED_MODULE_3__["default"].beer.packaged.map(function (_ref4, i) {
    var title = _ref4.title,
        text = _ref4.text,
        price = _ref4.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "$", price));
  })), tab !== 'drinks' && tab !== 'beer' && _menu__WEBPACK_IMPORTED_MODULE_3__["default"][tab].map(function (_ref5, i) {
    var title = _ref5.title,
        text = _ref5.text,
        subtitle = _ref5.subtitle,
        price = _ref5.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, text), subtitle && subtitle), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "$", price));
  })), __jsx("div", {
    className: "menu--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("img", {
    src: "/menu_reverse_img.png",
    alt: "nacho beer image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuContent);

/***/ })

})
//# sourceMappingURL=menu.js.870501dbcd102e289173.hot-update.js.map
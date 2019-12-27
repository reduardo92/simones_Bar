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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var _ui_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/tabs */ "./components/ui/tabs.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\simones_bar\\components\\menu\\menuContent.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* background-color: var(--primary-clr); */\n  margin: 3em 1em 5em;\n  .container {\n    display: grid;\n    justify-items: center;\n    gap: 3em;\n  }\n\n  /* TAbs */\n  .taps--container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1em;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n  }\n\n  .tab {\n    color: var(--white-clr);\n    background-color: var(--second-clr);\n    padding: 0.8em 1.3em;\n    border-radius: 5px;\n    text-transform: uppercase;\n    border: none;\n    font-weight: var(--fw-bold);\n  }\n\n  .menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));\n    gap: 3em;\n    width: 100%;\n  }\n\n  .menu--img {\n    max-width: 340px;\n  }\n\n  .title {\n    color: var(--primary-clr);\n  }\n\n  .menu--item {\n    border-bottom: 2px dotted var(--second-clr);\n    padding-bottom: 1em;\n    display: flex;\n    align-items: flex-start;\n\n    &:last-child {\n      border: none;\n    }\n  }\n\n  .menu--item--last {\n    border: none;\n  }\n\n  .menu--item--text {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .price {\n    color: var(--primary-clr);\n    font-weight: var(--fw-bold);\n    margin-left: auto;\n  }\n\n  /* Button */\n  .button {\n    &:hover,\n    &focus {\n      border-color: var(--second-clr);\n    }\n  }\n\n  /* Sandwiches subtile */\n\n  .sandwiche--subtitle {\n    margin-top: auto;\n  }\n\n  @media screen and (min-width: 760px) {\n    .container {\n      grid-template-columns: repeat(2, 1fr);\n      max-width: 1300px;\n      margin: 0 auto;\n    }\n\n    .taps--container {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .title--banner,\n    .taps--container,\n    .menu {\n      grid-column: 1/3;\n    }\n\n    .menu--item:nth-last-child(2) {\n      border: none;\n    }\n\n    .menu--img {\n      margin-top: -5em;\n      justify-self: flex-end;\n      grid-column: 1/3;\n    }\n\n    .menu--title {\n      grid-column: 1 / 3;\n      color: var(--accent-clr);\n    }\n  }\n  @media screen and (min-width: 1300px) {\n    .taps--container {\n      grid-template-columns: repeat(8, 1fr);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var MenuContent = function MenuContent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('drinks'),
      tab = _useState[0],
      setTab = _useState[1];

  var menu = {
    drinks: {
      cocktails: [{
        title: 'Mango Unchained',
        text: "Pinnacle mango vodka, mango\n            nectar, lime, tripel sec and chamoy",
        price: '10.00'
      }, {
        title: 'Violet Delight',
        text: "Maker's Mark, TattersallSour Cherry Liquer, simple syrup and bitters",
        price: '10.00'
      }, {
        title: 'Winter Mule',
        text: "Ginger beer, Tito\u2019s vodka,\n            Tattersall cranberry liquer",
        price: '10.00'
      }, {
        title: 'Pilesen Negroni',
        text: "Espolon rep,  Tattersaill bitter orange, \n            punt y mes",
        price: '10.00'
      }, {
        title: 'Juan Collins',
        text: "Espolon blanco tequilla fresh lemon juice, agave",
        price: '10.00'
      }, {
        title: 'The Detox',
        text: "New Holland gin, arugula syrup, fresh lemon juice",
        price: '10.00'
      }, {
        title: 'Punch Drunk',
        text: "Nordic rum, apple cider &\n            cinnamon stick, served warm",
        price: '10.00'
      }, {
        title: 'Smoking Rose',
        text: "Banhez mezcal, rose simple, squirt, grapefruit juice, fresh lime",
        price: '10.00'
      }],
      wines: [{
        title: 'WHITE',
        text: "Forchir Pinot  Grigio\n  Blanc De Camarsac Sauv Blanc",
        price: '8.00'
      }, {
        title: 'RED',
        text: "Gougenheim Malbec Tarrica Pinot Noir",
        price: '8.00'
      }, {
        title: 'PINK',
        text: "Domain De Bachellery Rose",
        price: '8.00'
      }, {
        title: 'SPARKLING',
        text: "Gougenheim  Sparkling Rose\n              J. Roget ",
        price: '8.00'
      }]
    },
    beer: {
      drafts: [{
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
        title: 'Lo Re Daemon',
        text: 'Belgian golden ale w/ strong personality. 9%',
        price: '7.00'
      }, {
        title: 'Lagunitas Little Sumpin Sumpin',
        text: 'Wheaty with big citrus hops. 7.5%',
        price: '6.00'
      }, {
        title: '18th St. Rise of Angels',
        text: 'Double imperial IPA. 7.7%',
        price: '7.00'
      }, {
        title: 'Miskatonic Westcoast Wizard',
        text: 'Classic westcoast IPA, 9oz. 6.3%',
        price: '6.00'
      }, {
        title: "Founder's Dirty Bastard",
        text: 'Malty & rich scoth ale. 8.5%',
        price: '6.00'
      }, {
        title: 'Stone Xocoveza',
        text: 'Stout inspired by mexican hot chocolate, 9oz. 8.1%',
        price: '8.00'
      }, {
        title: 'MapleWood Brownie Points',
        text: 'Brown ale w/ chocolate & roffe flavors. 6.3%',
        price: '6.00'
      }],
      packaged: [{
        title: 'Press Blackerry & Hibiscous',
        text: 'naturally flavored hard seltzer. 4%',
        price: '5.00'
      }, {
        title: "(Sp)Ace Blood Orange Cider",
        text: "Slight sweet, unfiltered cider. 6.9%",
        price: '6.00'
      }, {
        title: "Anderson Valley Cherry Gose",
        text: "Sour brewed w/ cherry juice. 4.2%",
        price: '6.00'
      }, {
        title: "Nothcoast Scrimshaw Pills",
        text: "German style pilsner. 4.5%",
        price: '6.00'
      }, {
        title: "Greenbush Oro de Tontos",
        text: "Crisp & traditional lager. 4.7%",
        price: '5.00'
      }, {
        title: "Off Color Very Very Far",
        text: "Belgian style blonde ale. 6%",
        price: '8.00'
      }, {
        title: "Boulevard Unfiltered Wheat",
        text: "Easy drinking wheat ale. 4.4%",
        price: '6.00'
      }, {
        title: "Forbidden Root Strawberry Basil",
        text: "Hefeweizen brewed w/ strawberry & basil. 5%",
        price: '8.00'
      }, {
        title: "Sweet Water Mango Kush",
        text: "American wheat w/ herbal mango notes. 5%",
        price: '6.00'
      }, {
        title: "Whiner Bleu Tub",
        text: "American wild ale w/ blueberry. 5.6%",
        price: '7.00'
      }, {
        title: "Oskar Blues Can-O-Bliss",
        text: "Tropical fruit packed IPA. 7.2%",
        price: '6.00'
      }, {
        title: "Avery Ellie's Brown",
        text: "Well balanced brown ale w/ vanilla notes",
        price: '6.00'
      }, {
        title: "War Pigs Lazurite",
        text: "Bright & juicy American IPA. 7.5%",
        price: '7.00'
      }, {
        title: "Maui Coconut Porter",
        text: "A robust dark ale w/ coconut & mocha. 6%",
        price: '8.00'
      }, {
        title: "(Alter)ior Motive IPA",
        text: "Cirtus hopped midwest style IPA. 7%",
        price: '6.00'
      }, {
        title: 'New Holland Dragons Milk',
        text: 'Barrel aged Imperial Stout w/ roasty malts. 11%',
        price: '6.00'
      }]
    },
    appetizers: [{
      title: "Fried Ravioli",
      text: "stuffed with mozzarella, ricotta, and jalapenos",
      price: '8.00'
    }, {
      title: "Chips and Guacamole",
      text: "Simply delicious, always a classic go to",
      price: '6.00'
    }, {
      title: "Mixed Fries",
      text: "with chipotle ketchup & maple aioli",
      price: '5.50'
    }, {
      title: "Fried Pickles",
      text: "tempura battered pickle spears with chipotle ranch",
      price: '7.00'
    }, {
      title: "Empanadas",
      text: "choose any three: black bean and banana with cranberry aioli, spinach artichoke with salsa, chipotle chicken with avocado sour cream.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "choose any three: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "$6")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "choose any six: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "$10"))),
      price: '6.00'
    }, {
      title: "Hummus",
      text: "with pita and veggies",
      price: '7.00'
    }, {
      title: "Fried Mozzarella Squares",
      text: "with marinara and ranch dressing",
      price: '8.00'
    }, {
      title: "Tempura Veggies",
      text: "with wasabi aioli and soy sauce",
      price: '8.00'
    }, {
      title: "Buffalo Wings",
      text: "6 wings with celery and ranch dressing",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "12 wings: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "$11"))),
      price: '8.00'
    }, {
      title: "Chicken Quesadilla",
      text: "black beans, chipotle cream sauce, cheddar and chihuahua cheeses with sour cream, guacamole & salsa",
      price: '9.50'
    }, {
      title: "Onion Rings",
      text: "with ranch dressing & chipotle ketchup",
      price: '6.00'
    }, {
      title: "Vegetable Quesadilla",
      text: "bell peppers, mushrooms, onions, black beans, cheddar & chihuahua cheeses with sour cream, guacamole & salsa",
      price: '8.00'
    }, {
      title: "Nachos",
      text: "cheddar & chihuahua cheeses, black beans, pico de gallo, sour cream with salsa.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, "With Chicken Or Beef ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "$9")), ' ', __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "With Steak: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, "$10"))),
      price: '8.00'
    }, {
      title: "Portobello Fries",
      text: "with wasabi aioli & soy sauce",
      price: '8.00'
    }, {
      title: "Sweet Potato Fries",
      text: "with lemon and maple aiolis",
      price: '6.50'
    }, {
      title: "French Fries",
      text: "with ranch dressing and chipotle ketchup",
      price: '4.00'
    }],
    soupSalad: [{
      title: "Caesar Salad",
      text: "Romaine, croutons, parmesan cheese, red onions.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "Add Chicken for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, "$2")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, "Steak, Salmon or tuna for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, "$3"))),
      price: '8.00'
    }, {
      title: "Kale Salad",
      text: "avocado, mandarins, roasted red pepper, citrus vinaigrette.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, "Add Chicken for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "$2")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "Steak, Salmon or tuna for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "$3"))),
      price: '8.00'
    }, {
      title: "Chopped Salad",
      text: "romaine, queso fresco, tomato, avocado, carrots and pico de gallo with buttermilk ranch.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Add Chicken for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "$2")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, "Steak, Salmon or tuna for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, "$3"))),
      price: '8.00'
    }, {
      title: "Smoked Salmon Salad",
      text: "spinach, roasted almonds, mandarins, shredded smoked salmon and cucumber with citrus vinaigrette",
      price: '11.00'
    }, {
      title: "Home-made Tomato Bisque",
      text: "served with a homemade cracker",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, "Cup: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, "$3")), ' ', __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, "Bowl: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, "$5"))),
      price: '3.00'
    }, {
      title: "Simone's Soup Of The Day",
      text: "made fresh and ever-changing",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "Cup: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, "$3")), ' ', __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, "Bowl: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, "$5"))),
      price: '3.00'
    }, {
      title: "Side Salad",
      text: "spinach, tomato, cucumber and carrots with house vinaigrette.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "Add Chicken for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "$2")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "Steak, Salmon or tuna for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "$3"))),
      price: '4.00'
    }, {
      title: "Caprese Salad",
      text: "fresh mozzarella, fresh basil, tomato and balsamic reduction.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, "Add Chicken for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, "$2")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, "Steak, Salmon or tuna for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, "$3"))),
      price: '7.50'
    }, {
      title: "Simone\u2019s Salad",
      text: "spinach, cranberries, almonds, goat cheese and pickled red onions with balsamic vinaigrette.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, "Add Chicken for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, "$2")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "Steak, Salmon or tuna for ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, "$3"))),
      price: '8.50'
    }, {
      title: "Black & Blue Salad",
      text: "grilled NY strip layered w/ tomatoes, onions, bleu cheese, spinach and fresh basil with balsamic vinaigrette",
      price: '11.00'
    }],
    pizzas: [{
      title: "Margherita Pizza",
      text: "Fresh Mozzarella, basil, balsamic dressing on an olive oil crust",
      price: '9.00'
    }, {
      title: "Chicken Pesto Pizza",
      text: "mozzarella, chicken, pesto, roasted red peppers.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, "$1.00"))),
      price: '9.00'
    }, {
      title: "Pilsen Pizza",
      text: "black bean sauce, beef, pico de gallo, chihuahua & queso fresco.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, "$1.00"))),
      price: '9.00'
    }, {
      title: "Tuscan Pizza",
      text: "roasted red peppers, portobella mushrooms and mozzarella.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        },
        __self: this
      }, "$1.00"))),
      price: '8.00'
    }, {
      title: "Traditional Pizza",
      text: "italian sausage, green peppers, mushrooms and mozzarella.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        },
        __self: this
      }, "$1.00"))),
      price: '9.00'
    }, {
      title: "BBQ Chicken Pizza",
      text: "chicken, bbq sauce, cheddar and jack cheeses.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        },
        __self: this
      }, "$1.00"))),
      price: '9.00'
    }, {
      title: "Quinoa Pizza",
      text: "toasted quinoa, caramelized red onions, avocado and mozzarella.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, "$1.00"))),
      price: '8.00'
    }, {
      title: "Simone\u2019s Pizza",
      text: "alfredo sauce, potatoes, parmesan and rosemary syrup.",
      subtitle: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        __self: this
      }, "Each additional veggie: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        },
        __self: this
      }, "$.50")), __jsx("p", {
        className: "para new-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        __self: this
      }, "Each additional meat: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }, "$1.00"))),
      price: '8.00'
    }],
    sandwiches: [{
      title: "Meatball Sub",
      text: "Ground angus beef, mozzarella,  marinara on a hoagie roll",
      price: '10.50'
    }, {
      title: "Simone\u2019s Veggie Burger",
      text: "Sweet corn, sweet potato, carrots, shallots, celery, cumin, Sriracha sauce, shoe string potatoes",
      price: '9.00'
    }, {
      title: "Steak Sandwich",
      text: "grilled NY strip with bleu cheese, caramelized onions, lettuce and tomato on a hoagie roll",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        },
        __self: this
      }, "$1.00")),
      price: '11.00'
    }, {
      title: "Grilled Salmon",
      text: "topped with a salsa mayo, spinach and tomato.",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        },
        __self: this
      }, "$1.00")),
      price: '11.00'
    }, {
      title: "Turkey Burger",
      text: "Hand pressed ground turkey. Topped with swiss cheese and salsa mayo.",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, "$1.00")),
      price: '9.50'
    }, {
      title: "Buffalo Chicken",
      text: "pulled chicken with buffalo sauce and celery relish",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        __self: this
      }, "$1.00")),
      price: '9.00'
    }, {
      title: "Blackened Tuna Steak",
      text: 'seared medium rare w/salsa mayo & tomato',
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, "$1.00")),
      price: '11.00'
    }, {
      title: "Grilled Cheese",
      text: "cheddar and chihuahua cheeses with a tomato slice and cup of tomato bisque",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769
        },
        __self: this
      }, "$1.00")),
      price: '9.00'
    }, {
      title: "BLT",
      text: "bacon, lettuce and tomato on multi-grain with avocado",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781
        },
        __self: this
      }, "$1.00")),
      price: '8.50'
    }, {
      title: "Grilled Portobello",
      text: "on multi-grain with pesto and cheddar cheese",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }, "$1.00")),
      price: '8.50'
    }, {
      title: "Caesar Salad Wrap",
      text: "with a cup of Tomato Bisque. add grilled chicken breast: ".concat(__jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801
        },
        __self: this
      }, "$2")),
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        },
        __self: this
      }, "$1.00")),
      price: '8.00'
    }, {
      title: "Mexican Grilled Chicken Sandwich",
      text: "with salsa mayo and pico de gallo",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819
        },
        __self: this
      }, "$1.00")),
      price: '9.50'
    }, {
      title: "Custom Burger",
      text: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "add american, cheddar, swiss, bleu, ghost pepper jack, chihuahua cheese, grilled onions, jalapenos, mushrooms or pico de gallo for", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }, " $.50"), " add bacon, avocado, guacamole, portobella or goat cheese", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        __self: this
      }, " $1.00")),
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }, "$1.00")),
      price: '9.00'
    }, {
      title: "Vegan Burger",
      text: "quinoa, black beans and rice topped with pico de gallo",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 848
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851
        },
        __self: this
      }, "$1.00")),
      price: '9.00'
    }, {
      title: "Pilsen Burger",
      text: "jalapenos, guacamole and chihuahua cheese",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863
        },
        __self: this
      }, "$1.00")),
      price: '10.00'
    }, {
      title: "Chipotle Burger",
      text: "chipotle BBQ sauce, cheddar, bacon and onion ring",
      subtitle: __jsx("p", {
        className: "para sandwiche--subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        __self: this
      }, "comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: ", __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 875
        },
        __self: this
      }, "$1.00")),
      price: '9.00'
    }],
    desserts: [{
      title: "Kristoffer's Tres Leches Cake",
      text: "the classic dulce de leche. made fresh by the best",
      price: '6.00'
    }, {
      title: "Ice Cream Sundae",
      text: "bobtail's hand-made vanilla ice cream and our house-made chocolate sauce highlight this classic.",
      price: '6.00'
    }, {
      title: "Dessert Of The Day",
      text: "chef rafa creates extraordinarily delicious daily delights. indulge!",
      price: '5.00'
    }],
    brunch: [{
      title: "Tea",
      text: "",
      price: '2.00'
    }, {
      title: "Bridgeport Coffee",
      text: "",
      price: '2.00'
    }, {
      title: "Mimosa with fresh OJ",
      text: "",
      price: '7.50'
    }, {
      title: "Simone\u2019s Bloody Mary",
      text: "",
      price: '7.50'
    }, {
      title: "Sides",
      text: "hashbrowns, sausage, bacon or 2 eggs",
      price: '3.00'
    }, {
      title: "Breakfast Burger",
      text: "topped with a fried egg, bacon, and cheddar cheese served with hashbrowns",
      price: '10.00'
    }, {
      title: "Breakfast Croisant",
      text: "scrambled eggs, cheddar and bacon served with hashbrowns",
      price: '9.00'
    }, {
      title: "Pancakes",
      text: "your choice of blueberry, chocolate chip or plain, all served with syrup",
      price: '7.00'
    }, {
      title: "Breakfast Burrito",
      text: "eggs, bell peppers, mushrooms, onions, black beans and cheddar cheese served with hash browns",
      price: '9.00'
    }, {
      title: "Simone\u2019s Omelette",
      text: "carmelized red onions, mozzarella and bacon, topped with avocado served with hash browns",
      price: '9.00'
    }, {
      title: "Chilaquiles Suizo",
      text: "with tomatillo green sauce",
      price: '7.00'
    }, {
      title: "Waffle",
      text: "with fresh berries and a scoop of ice cream",
      price: '7.00'
    }, {
      title: "French Toast",
      text: "red hen sweet bread, creme anglaise",
      price: '8.00'
    }]
  };
  return __jsx(Styled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    topTitle: "CHECK IT OUT",
    title: "menu",
    botTitle: "come eat some good food",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954
    },
    __self: this
  }), __jsx("div", {
    className: "taps--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959
    },
    __self: this
  }, __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('drinks');
    },
    active: tab === 'drinks',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960
    },
    __self: this
  }, "drinks"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('beer');
    },
    active: tab === 'beer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967
    },
    __self: this
  }, "beer"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('appetizers');
    },
    active: tab === 'appetizers',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974
    },
    __self: this
  }, "Appetizers"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('soupSalad');
    },
    active: tab === 'soupSalad',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981
    },
    __self: this
  }, "Soups&Salads"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('pizzas');
    },
    active: tab === 'pizzas',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988
    },
    __self: this
  }, "pizzas"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('sandwiches');
    },
    active: tab === 'sandwiches',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995
    },
    __self: this
  }, "sandwiches"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('desserts');
    },
    active: tab === 'desserts',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002
    },
    __self: this
  }, "desserts"), __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: true,
    onClick: function onClick() {
      return setTab('brunch');
    },
    active: tab === 'brunch',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009
    },
    __self: this
  }, "brunch")), __jsx("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017
    },
    __self: this
  }, tab === 'drinks' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020
    },
    __self: this
  }, "Cocktails"), menu.drinks.cocktails.map(function (_ref, i) {
    var title = _ref.title,
        text = _ref.text,
        price = _ref.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1023
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1024
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1025
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027
      },
      __self: this
    }, "$", price));
  }), __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030
    },
    __self: this
  }, "Wines"), menu.drinks.wines.map(function (_ref2, i) {
    var title = _ref2.title,
        text = _ref2.text,
        price = _ref2.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1032
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037
      },
      __self: this
    }, "$", price));
  })), tab === 'beer' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044
    },
    __self: this
  }, "Drafts"), menu.beer.drafts.map(function (_ref3, i) {
    var title = _ref3.title,
        text = _ref3.text,
        price = _ref3.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1046
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1049
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1051
      },
      __self: this
    }, "$", price));
  }), __jsx("h2", {
    className: "title menu--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054
    },
    __self: this
  }, "Packaged"), menu.beer.packaged.map(function (_ref4, i) {
    var title = _ref4.title,
        text = _ref4.text,
        price = _ref4.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1056
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1057
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1058
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1059
      },
      __self: this
    }, text)), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1061
      },
      __self: this
    }, "$", price));
  })), tab !== 'drinks' && tab !== 'beer' && menu[tab].map(function (_ref5, i) {
    var title = _ref5.title,
        text = _ref5.text,
        subtitle = _ref5.subtitle,
        price = _ref5.price;
    return __jsx("div", {
      key: title + i,
      className: "menu--item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069
      },
      __self: this
    }, __jsx("div", {
      className: "menu--item--text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }, title), __jsx("p", {
      className: "para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }, text), subtitle && subtitle), __jsx("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1075
      },
      __self: this
    }, "$", price));
  })), __jsx("div", {
    className: "menu--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079
    },
    __self: this
  }, __jsx("img", {
    src: "/fast-food-lunch-dinner-hamburger-2-transparent.png",
    alt: "nacho beer image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuContent); // const menu = {
//   drinks: {
//     cocktails: [
//       {
//         title: 'Mango Unchained',
//         text: `Pinnacle mango vodka, mango
//           nectar, lime, tripel sec and chamoy`,
//         price: '10.00'
//       },
//       {
//         title: 'Violet Delight',
//         text: `Maker's Mark, TattersallSour Cherry Liquer, simple syrup and bitters`,
//         price: '10.00'
//       },
//       {
//         title: 'Winter Mule',
//         text: `Ginger beer, Tito’s vodka,
//           Tattersall cranberry liquer`,
//         price: '10.00'
//       },
//       {
//         title: 'Pilesen Negroni',
//         text: `Espolon rep,  Tattersaill bitter orange,
//           punt y mes`,
//         price: '10.00'
//       },
//       {
//         title: 'Juan Collins',
//         text: `Espolon blanco tequilla fresh lemon juice, agave`,
//         price: '10.00'
//       },
//       {
//         title: 'The Detox',
//         text: `New Holland gin, arugula syrup, fresh lemon juice`,
//         price: '10.00'
//       },
//       {
//         title: 'Punch Drunk',
//         text: `Nordic rum, apple cider &
//           cinnamon stick, served warm`,
//         price: '10.00'
//       },
//       {
//         title: 'Smoking Rose',
//         text: `Banhez mezcal, rose simple, squirt, grapefruit juice, fresh lime`,
//         price: '10.00'
//       }
//     ],
//     wines: [
//       {
//         title: 'WHITE',
//         text: `Forchir Pinot  Grigio
// Blanc De Camarsac Sauv Blanc`,
//         price: '8.00'
//       },
//       {
//         title: 'RED',
//         text: `Gougenheim Malbec Tarrica Pinot Noir`,
//         price: '8.00'
//       },
//       {
//         title: 'PINK',
//         text: `Domain De Bachellery Rose`,
//         price: '8.00'
//       },
//       {
//         title: 'SPARKLING',
//         text: `Gougenheim  Sparkling Rose
//             J. Roget `,
//         price: '8.00'
//       }
//     ]
//   },
//   beer: {
//     drafts: [
//       {
//         title: 'Virtue Southcider',
//         text: 'slightly sweet w/ subtle vanilla notes. 5/5%',
//         price: '6.00'
//       },
//       {
//         title: '21st Amendment El Sully',
//         text: 'mexican-styleger, light & crisp. 4.8%',
//         price: '5.00'
//       },
//       {
//         title: 'Allagash White',
//         text: 'belgian style wheat w/ corriander & orange 5.2%',
//         price: '6.00'
//       },
//       {
//         title: 'Lo Re Daemon',
//         text: 'Belgian golden ale w/ strong personality. 9%',
//         price: '7.00'
//       },
//       {
//         title: 'Lagunitas Little Sumpin Sumpin',
//         text: 'Wheaty with big citrus hops. 7.5%',
//         price: '6.00'
//       },
//       {
//         title: '18th St. Rise of Angels',
//         text: 'Double imperial IPA. 7.7%',
//         price: '7.00'
//       },
//       {
//         title: 'Miskatonic Westcoast Wizard',
//         text: 'Classic westcoast IPA, 9oz. 6.3%',
//         price: '6.00'
//       },
//       {
//         title: `Founder's Dirty Bastard`,
//         text: 'Malty & rich scoth ale. 8.5%',
//         price: '6.00'
//       },
//       {
//         title: 'Stone Xocoveza',
//         text: 'Stout inspired by mexican hot chocolate, 9oz. 8.1%',
//         price: '8.00'
//       },
//       {
//         title: 'MapleWood Brownie Points',
//         text: 'Brown ale w/ chocolate & roffe flavors. 6.3%',
//         price: '6.00'
//       }
//     ],
//     packaged: [
//       {
//         title: 'Press Blackerry & Hibiscous',
//         text: 'naturally flavored hard seltzer. 4%',
//         price: '5.00'
//       },
//       {
//         title: `(Sp)Ace Blood Orange Cider`,
//         text: `Slight sweet, unfiltered cider. 6.9%`,
//         price: '6.00'
//       },
//       {
//         title: `Anderson Valley Cherry Gose`,
//         text: `Sour brewed w/ cherry juice. 4.2%`,
//         price: '6.00'
//       },
//       {
//         title: `Nothcoast Scrimshaw Pills`,
//         text: `German style pilsner. 4.5%`,
//         price: '6.00'
//       },
//       {
//         title: `Greenbush Oro de Tontos`,
//         text: `Crisp & traditional lager. 4.7%`,
//         price: '5.00'
//       },
//       {
//         title: `Off Color Very Very Far`,
//         text: `Belgian style blonde ale. 6%`,
//         price: '8.00'
//       },
//       {
//         title: `Boulevard Unfiltered Wheat`,
//         text: `Easy drinking wheat ale. 4.4%`,
//         price: '6.00'
//       },
//       {
//         title: `Forbidden Root Strawberry Basil`,
//         text: `Hefeweizen brewed w/ strawberry & basil. 5%`,
//         price: '8.00'
//       },
//       {
//         title: `Sweet Water Mango Kush`,
//         text: `American wheat w/ herbal mango notes. 5%`,
//         price: '6.00'
//       },
//       {
//         title: `Whiner Bleu Tub`,
//         text: `American wild ale w/ blueberry. 5.6%`,
//         price: '7.00'
//       },
//       {
//         title: `Oskar Blues Can-O-Bliss`,
//         text: `Tropical fruit packed IPA. 7.2%`,
//         price: '6.00'
//       },
//       {
//         title: `Avery Ellie's Brown`,
//         text: `Well balanced brown ale w/ vanilla notes`,
//         price: '6.00'
//       },
//       {
//         title: `War Pigs Lazurite`,
//         text: `Bright & juicy American IPA. 7.5%`,
//         price: '7.00'
//       },
//       {
//         title: `Maui Coconut Porter`,
//         text: `A robust dark ale w/ coconut & mocha. 6%`,
//         price: '8.00'
//       },
//       {
//         title: `(Alter)ior Motive IPA`,
//         text: `Cirtus hopped midwest style IPA. 7%`,
//         price: '6.00'
//       },
//       {
//         title: 'New Holland Dragons Milk',
//         text: 'Barrel aged Imperial Stout w/ roasty malts. 11%',
//         price: '6.00'
//       }
//     ]
//   },
//   appetizers: [
//     {
//       title: `Fried Ravioli`,
//       text: `stuffed with mozzarella, ricotta, and jalapenos`,
//       price: '8.00'
//     },
//     {
//       title: `Chips and Guacamole`,
//       text: `Simply delicious, always a classic go to`,
//       price: '6.00'
//     },
//     {
//       title: `Mixed Fries`,
//       text: `with chipotle ketchup & maple aioli`,
//       price: '5.50'
//     },
//     {
//       title: `Fried Pickles`,
//       text: `tempura battered pickle spears with chipotle ranch`,
//       price: '7.00'
//     },
//     {
//       title: `Empanadas`,
//       text: `choose any three: black bean and banana with cranberry aioli, spinach artichoke with salsa, chipotle chicken with avocado sour cream.`,
//       subtitle: (<><p className='para new-line'>choose any three: <strong>$6</strong></p><p className='subtitle'>choose any six: <strong>$10</strong></p></>)
//       , price: '6.00'
//     },
//     { title: `Hummus`, text: `with pita and veggies`, price: '7.00' },
//     {
//       title: `Fried Mozzarella Squares`,
//       text: `with marinara and ranch dressing`,
//       price: '8.00'
//     },
//     {
//       title: `Tempura Veggies`,
//       text: `with wasabi aioli and soy sauce`,
//       price: '8.00'
//     },
//     {
//       title: `Buffalo Wings`,
//       text: `6 wings with celery and ranch dressing`,
//       subtitle: (<><p className='subtitle'>12 wings: <strong>$11</strong></p></>),
//       price: '8.00'
//     },
//     {
//       title: `Chicken Quesadilla`,
//       text: `black beans, chipotle cream sauce, cheddar and chihuahua cheeses with sour cream, guacamole & salsa`,
//       price: '9.50'
//     },
//     {
//       title: `Onion Rings`,
//       text: `with ranch dressing & chipotle ketchup`,
//       price: '6.00'
//     },
//     {
//       title: `Vegetable Quesadilla`,
//       text: `bell peppers, mushrooms, onions, black beans, cheddar & chihuahua cheeses with sour cream, guacamole & salsa`,
//       price: '8.00'
//     },
//     {
//       title: `Nachos`,
//       text: `cheddar & chihuahua cheeses, black beans, pico de gallo, sour cream with salsa.`,
//       subtitle: (<><p className='subtitle'>With Chicken Or Beef <strong>$9</strong></p> <p className='subtitle'>With Steak: <strong>$10</strong></p></>),
//       price: '8.00'
//     },
//     {
//       title: `Portobello Fries`,
//       text: `with wasabi aioli & soy sauce`,
//       price: '8.00'
//     },
//     {
//       title: `Sweet Potato Fries`,
//       text: `with lemon and maple aiolis`,
//       price: '6.50'
//     },
//     {
//       title: `French Fries`,
//       text: `with ranch dressing and chipotle ketchup`,
//       price: '4.00'
//     }
//   ],
//   soupSalad:  [
//       {
//         title: `Caesar Salad`,
//         text: `Romaine, croutons, parmesan cheese, red onions.`,
//         subtitle: (<><p className='subtitle'>Add Chicken for <strong>$2</strong>, Steak, Salmon or tuna for <strong>$3</strong></p></>),
//       price: '8.00'
//       },
//       {
//         title: `Kale Salad`,
//         text: `avocado, mandarins, roasted red pepper, citrus vinaigrette.`,
//         subtitle: (<><p className='subtitle'>Add Chicken for <strong>$2</strong>, Steak, Salmon or tuna for <strong>$3</strong></p></>),
//         price: '8.00'
//       },
//       {
//         title: `Chopped Salad`,
//         text: `romaine, queso fresco, tomato, avocado, carrots and pico de gallo with buttermilk ranch.`,
//         subtitle: (<><p className='subtitle'>Add Chicken for <strong>$2</strong>, Steak, Salmon or tuna for <strong>$3</strong></p></>),
//         price: '8.00'
//       },
//       {
//         title: `Smoked Salmon Salad`,
//         text: `spinach, roasted almonds, mandarins, shredded smoked salmon and cucumber with citrus vinaigrette`,
//         price: '11.00'
//       },
//       {
//         title: `Home-made Tomato Bisque`,
//         text: `served with a homemade cracker`,
//         subtitle: (<><p className='subtitle'>Cup: <strong>$3</strong></p> <p className='subtitle'>Bowl: <strong>$5</strong></p></>),
//         price: '3.00'
//       },
//       {
//         title: `Simone's Soup Of The Day`,
//         text: `made fresh and ever-changing`,
//         subtitle: (<><p className='subtitle'>Cup: <strong>$3</strong></p> <p className='subtitle'>Bowl: <strong>$5</strong></p></>),
//         price: '3.00'
//       },
//       {
//         title: `Side Salad`,
//         text: `spinach, tomato, cucumber and carrots with house vinaigrette.`,
//         subtitle: (<><p className='subtitle'>Add Chicken for <strong>$2</strong>, Steak, Salmon or tuna for <strong>$3</strong></p></>),
//         price: '4.00'
//       },
//       {
//         title: `Caprese Salad`,
//         text: `fresh mozzarella, fresh basil, tomato and balsamic reduction.`,
//         subtitle: (<><p className='subtitle'>Add Chicken for <strong>$2</strong>, Steak, Salmon or tuna for <strong>$3</strong></p></>),
//         price: '7.50'
//       },
//       {
//         title: `Simone’s Salad`,
//         text: `spinach, cranberries, almonds, goat cheese and pickled red onions with balsamic vinaigrette.`,
//         subtitle: (<><p className='subtitle'>Add Chicken for <strong>$2</strong>, Steak, Salmon or tuna for <strong>$3</strong></p></>),
//         price: '8.50'
//       },
//       {
//         title: `Black & Blue Salad`,
//         text: `grilled NY strip layered w/ tomatoes, onions, bleu cheese, spinach and fresh basil with balsamic vinaigrette`,
//         price: '11.00'
//       },
//   ],
//   pizzas: [
//     {
//       title: `Margherita Pizza`,
//       text: `Fresh Mozzarella, basil, balsamic dressing on an olive oil crust`,
//       price: '9.00'
//     },
//     {
//       title: `Chicken Pesto Pizza`,
//       text: `mozzarella, chicken, pesto, roasted red peppers.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '9.00'
//     },
//     {
//       title: `Pilsen Pizza`,
//       text: `black bean sauce, beef, pico de gallo, chihuahua & queso fresco.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '9.00'
//     },
//     {
//       title: `Tuscan Pizza`,
//     text: `roasted red peppers, portobella mushrooms and mozzarella.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '8.00'
//     },
//     {
//       title: `Traditional Pizza`,
//       text: `italian sausage, green peppers, mushrooms and mozzarella.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '9.00'
//     },
//     {
//       title: `BBQ Chicken Pizza`,
//       text: `chicken, bbq sauce, cheddar and jack cheeses.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '9.00'
//     },
//     {
//       title: `Quinoa Pizza`,
//       text: `toasted quinoa, caramelized red onions, avocado and mozzarella.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '8.00'
//     },
//     {
//       title: `Simone’s Pizza`,
//       text: `alfredo sauce, potatoes, parmesan and rosemary syrup.`,
//       subtitle: (<><p className='subtitle'>Each additional veggie: <strong>$.50</strong></p><p className='subtitle'>Each additional meat: <strong>$1.00</strong></p></>),
//       price: '8.00'
//     },
//   ],
//   sandwiches: [
//     {
//       title: `Meatball Sub`,
//       text: `Ground angus beef, mozzarella,  marinara on a hoagie roll`,
//       price: '10.50'
//     },
//     {
//       title: `Simone’s Veggie Burger`,
//       text: `Sweet corn, sweet potato, carrots, shallots, celery, cumin, Sriracha sauce, shoe string potatoes`,
//       price: '9.00'
//     },
//     {
//       title: `Steak Sandwich`,
//       text: `grilled NY strip with bleu cheese, caramelized onions, lettuce and tomato on a hoagie roll`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '11.00'
//     },
//     {
//       title: `Grilled Salmon`,
//       text: `topped with a salsa mayo, spinach and tomato.`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '11.00'
//     },
//     {
//       title: `Turkey Burger`,
//       text: `Hand pressed ground turkey. Topped with swiss cheese and salsa mayo.`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.50'
//     },
//     {
//       title: `Buffalo Chicken`,
//       text: `pulled chicken with buffalo sauce and celery relish`,
//         subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.00'
//     },
//     {
//       title: `Blackened Tuna Steak`,
//       text: 'seared medium rare w/salsa mayo & tomato',
//         subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '11.00'
//     },
//     {
//       title: `Grilled Cheese`,
//       text: `cheddar and chihuahua cheeses with a tomato slice and cup of tomato bisque`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.00'
//     },
//     {
//       title: `BLT`,
//       text: `bacon, lettuce and tomato on multi-grain with avocado`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '8.50'
//     },
//     {
//       title: `Grilled Portobello`,
//       text: `on multi-grain with pesto and cheddar cheese`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '8.50'
//     },
//     {
//       title: `Caesar Salad Wrap`,
//       text: `with a cup of Tomato Bisque. add grilled chicken breast: ${<strong>$2</strong>}`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '8.00'
//     },
//     {
//       title: `Mexican Grilled Chicken Sandwich`,
//       text: `with salsa mayo and pico de gallo`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.50'
//     },
//     {
//       title: `Custom Burger`,
//       text: `add american, cheddar, swiss, bleu, ghost pepper jack, chihuahua cheese, grilled onions, jalapenos, mushrooms or pico de gallo for ${<strong>$.50</strong>}. add bacon, avocado, guacamole, portobella or goat cheese: ${<strong>$1.00</strong>}`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.00'
//     },
//     {
//       title: `Vegan Burger`,
//       text: `quinoa, black beans and rice topped with pico de gallo`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.00'
//     },
//     {
//       title: `Pilsen Burger`,
//       text: `jalapenos, guacamole and chihuahua cheese`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '10.00'
//     },
//     {
//       title: `Chipotle Burger`,
//       text: `chipotle BBQ sauce, cheddar, bacon and onion ring`,
//       subtitle: (<p className='subtitle'>comes with a mix of hand cut french and sweet potato fries. substitute veggie of the day for no charge. substitute all sweet potato fries or a mixed green salad: <strong>$1.00</strong></p>),
//       price: '9.00'
//     },
//   ],
//   desserts: [
//    { title: `Kristoffer's Tres Leches Cake`,
//     text: `the classic dulce de leche. made fresh by the best`,
//       price: '6.00'
//     },
//    { title: `Ice Cream Sundae`,
//     text: `bobtail's hand-made vanilla ice cream and our house-made chocolate sauce highlight this classic.`,
//       price: '6.00'
//     },
//    { title: `Dessert Of The Day`,
//     text: `chef rafa creates extraordinarily delicious daily delights. indulge!`,
//       price: '5.00'
//     }
//   ],
//   brunch: [
//     { title: `Tea`,
//       text: ``,
//       price: '2.00'
//     },
//     { title: `Bridgeport Coffee`,
//       text: ``,
//       price: '2.00'
//     },
//     { title: `Mimosa with fresh OJ`,
//       text: ``,
//       price: '7.50'
//     },
//     { title: `Simone’s Bloody Mary`,
//       text: ``,
//       price: '7.50'
//     },
//     { title: `Sides`,
//       text: `hashbrowns, sausage, bacon or 2 eggs`,
//       price: '3.00'
//     },
//     { title: `Breakfast Burger`,
//       text: `topped with a fried egg, bacon, and cheddar cheese served with hashbrowns`,
//       price: '10.00'
//     },
//     { title: `Breakfast Croisant`,
//       text: `scrambled eggs, cheddar and bacon served with hashbrowns`,
//       price: '9.00'
//     },
//     { title: `Pancakes`,
//       text: `your choice of blueberry, chocolate chip or plain, all served with syrup`,
//       price: '7.00'
//     },
//     { title: `Breakfast Burrito`,
//       text: `eggs, bell peppers, mushrooms, onions, black beans and cheddar cheese served with hash browns`,
//       price: '9.00'
//     },
//     { title: `Simone’s Omelette`,
//       text: `carmelized red onions, mozzarella and bacon, topped with avocado served with hash browns`,
//       price: '9.00'
//     },
//     { title: `Chilaquiles Suizo`,
//       text: `with tomatillo green sauce`,
//       price: '7.00'
//     },
//     { title: `Waffle`,
//       text: `with fresh berries and a scoop of ice cream`,
//       price: '7.00'
//     },
//     { title: `French Toast`,
//       text: `red hen sweet bread, creme anglaise`,
//       price: '8.00'
//     },
//   ]
//   // ${<strong>$2</strong>}
// };

/***/ })

})
//# sourceMappingURL=menu.js.fd71c9c921df24b29fc9.hot-update.js.map
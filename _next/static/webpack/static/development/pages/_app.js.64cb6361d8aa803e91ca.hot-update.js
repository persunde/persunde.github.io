webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/analytics.tsx":
/*!***************************!*\
  !*** ./lib/analytics.tsx ***!
  \***************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");

const initGA = () => {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].initialize('UA-166119494-1', {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  });
};
const logPageView = () => {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].exception({
      description,
      fatal
    });
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.64cb6361d8aa803e91ca.hot-update.js.map
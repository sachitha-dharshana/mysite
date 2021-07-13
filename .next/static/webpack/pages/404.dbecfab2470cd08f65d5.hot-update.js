self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./components/UI/Button.js":
/*!*********************************!*\
  !*** ./components/UI/Button.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_SDmkiRecker_Documents_Workspace_NextJS_mysite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.css */ "./components/UI/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\UI\\Button.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SDmkiRecker_Documents_Workspace_NextJS_mysite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Button = function Button(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", _objectSpread(_objectSpread({
    className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),
    href: props.href
  }, props), {}, {
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _styles_404_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/404.module.css */ "./styles/404.module.css");
/* harmony import */ var _styles_404_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_404_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\pages\\404.js",
    _this = undefined;






var NotFound = function NotFound() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_404_module_css__WEBPACK_IMPORTED_MODULE_4___default()["not-found"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row ".concat((_styles_404_module_css__WEBPACK_IMPORTED_MODULE_4___default()["not-found-row"])),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Ooops..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Page not found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["The page you are looking for does not exist or an error occurred, go back to the home page.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
              children: "Go Back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "image-container c-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            alt: "error illustration",
            src: "/Error.png",
            layout: "fill",
            className: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = NotFound;
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

var _c;

$RefreshReg$(_c, "NotFound");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/UI/Button.module.css":
/*!*****************************************!*\
  !*** ./components/UI/Button.module.css ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/UI/Button.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/UI/Button.module.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Button.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/UI/Button.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/UI/Button.module.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/UI/Button.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Button_btn__3Itc3 {\r\n  margin-top: 15px;\r\n  position: relative;\r\n  padding: 0 30px;\r\n  background: #8a2be2;\r\n  color: #fff;\r\n  border: 0;\r\n  display: inline-block;\r\n  z-index: 1;\r\n  text-transform: uppercase;\r\n  font-size: 0.9rem;\r\n  letter-spacing: 2px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  -webkit-transition: all 0.4s ease-out;\r\n  transition: all 0.4s ease-out;\r\n}\r\n\r\n.Button_btn__3Itc3:hover {\r\n  color: #fff;\r\n  background: #05bbaa;\r\n}\r\n\r\n.Button_btn__3Itc3:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: auto;\r\n  bottom: 0;\r\n  height: 2px;\r\n  width: 100%;\r\n  background: #fff;\r\n  z-index: -1;\r\n  -webkit-transform: scaleX(0);\r\n          transform: scaleX(0);\r\n  -webkit-transform-origin: 0 0;\r\n          transform-origin: 0 0;\r\n  -webkit-transition: all 0.4s ease-out;\r\n  transition: all 0.4s ease-out;\r\n}\r\n\r\n.Button_btn__3Itc3:hover:before {\r\n  -webkit-transform: scaleX(1);\r\n          transform: scaleX(1);\r\n}\r\n", "",{"version":3,"sources":["webpack://components/UI/Button.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,qBAAqB;EACrB,UAAU;EACV,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,qCAA6B;EAA7B,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,SAAS;EACT,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,4BAAoB;UAApB,oBAAoB;EACpB,6BAAqB;UAArB,qBAAqB;EACrB,qCAA6B;EAA7B,6BAA6B;AAC/B;;AAEA;EACE,4BAAoB;UAApB,oBAAoB;AACtB","sourcesContent":[".btn {\r\n  margin-top: 15px;\r\n  position: relative;\r\n  padding: 0 30px;\r\n  background: #8a2be2;\r\n  color: #fff;\r\n  border: 0;\r\n  display: inline-block;\r\n  z-index: 1;\r\n  text-transform: uppercase;\r\n  font-size: 0.9rem;\r\n  letter-spacing: 2px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  transition: all 0.4s ease-out;\r\n}\r\n\r\n.btn:hover {\r\n  color: #fff;\r\n  background: #05bbaa;\r\n}\r\n\r\n.btn:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: auto;\r\n  bottom: 0;\r\n  height: 2px;\r\n  width: 100%;\r\n  background: #fff;\r\n  z-index: -1;\r\n  transform: scaleX(0);\r\n  transform-origin: 0 0;\r\n  transition: all 0.4s ease-out;\r\n}\r\n\r\n.btn:hover:before {\r\n  transform: scaleX(1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btn": "Button_btn__3Itc3"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0J1dHRvbi5tb2R1bGUuY3NzP2E5NDYiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVUkvQnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJzdHlsZXMiLCJocmVmIiwiY2hpbGRyZW4iLCJOb3RGb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDeEIsc0JBQ0U7QUFBRyxhQUFTLEVBQUVDLCtEQUFkO0FBQTBCLFFBQUksRUFBRUQsS0FBSyxDQUFDRTtBQUF0QyxLQUFnREYsS0FBaEQ7QUFBQSxjQUNHQSxLQUFLLENBQUNHO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUosTTtBQVFOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLHNCQUNFO0FBQUssYUFBUyxFQUFFSCw0RUFBaEI7QUFBQSwyQkFDRTtB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Z0NBQWdDLHVCQUF1Qix5QkFBeUIsc0JBQXNCLDBCQUEwQixrQkFBa0IsZ0JBQWdCLDRCQUE0QixpQkFBaUIsZ0NBQWdDLHdCQUF3QiwwQkFBMEIsbUJBQW1CLHdCQUF3QixvQ0FBb0MsS0FBSyxvQkFBb0Isa0JBQWtCLDBCQUEwQixLQUFLLHFCQUFxQixvQkFBb0IseUJBQXlCLGNBQWMsZ0JBQWdCLGdCQUFnQixrQkFBa0Isa0JBQWtCLHVCQUF1QixrQkFBa0IsMkJBQTJCLDRCQUE0QixvQ0FBb0MsS0FBSywyQkFBMkIsMkJBQTJCLEtBQUssdUJBQXVCO0FBQzMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC5kYmVjZmFiMjQ3MGNkMDhmNjVkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gaHJlZj17cHJvcHMuaHJlZn0gey4uLnByb3BzfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvNDA0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibm90LWZvdW5kXCJdfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgJHtzdHlsZXNbXCJub3QtZm91bmQtcm93XCJdfWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgIDxoMT5Pb29wcy4uLjwvaDE+XHJcbiAgICAgICAgICA8aDI+UGFnZSBub3QgZm91bmQ8L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3Qgb3IgYW4gZXJyb3Igb2NjdXJyZWQsIGdvXHJcbiAgICAgICAgICAgIGJhY2sgdG8gdGhlIGhvbWUgcGFnZS5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkdvIEJhY2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyIGMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGFsdD1cImVycm9yIGlsbHVzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL0Vycm9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vQnV0dG9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vQnV0dG9uLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL0J1dHRvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5CdXR0b25fYnRuX18zSXRjMyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLkJ1dHRvbl9idG5fXzNJdGMzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzA1YmJhYTtcXHJcXG59XFxyXFxuXFxyXFxuLkJ1dHRvbl9idG5fXzNJdGMzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IGF1dG87XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uQnV0dG9uX2J0bl9fM0l0YzM6aG92ZXI6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQ0FBNkI7RUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixxQ0FBNkI7RUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjOGEyYmUyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDViYmFhO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IGF1dG87XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJ0blwiOiBcIkJ1dHRvbl9idG5fXzNJdGMzXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
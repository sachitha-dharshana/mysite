(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/Button */ "./components/UI/Button.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.module.css */ "./components/About.module.css");
/* harmony import */ var _About_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\About.js";





const About = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_About_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "About Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "About Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `image-container ${(_About_module_css__WEBPACK_IMPORTED_MODULE_4___default()["about-image"])}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              alt: "About image",
              src: "/about-image.jpg",
              layout: "fill",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_About_module_css__WEBPACK_IMPORTED_MODULE_4___default()["about-content"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: ["I am ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "primary",
                children: "Sachitha Dharshana"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 22
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Full Name: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 19
                }, undefined), " Sachitha Dharshana Kahakachchi"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "DOB: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, undefined), " 1996 February 21"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Nationality: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, undefined), " Sinhalese"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Religion: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, undefined), " Buddhist"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Languages: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, undefined), " English, Sinhala"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "Address: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, undefined), " No. 21, Anura Mawatha, Borupana Road, Ratmalana."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
              href: "/sachitha-cv.pdf",
              download: true,
              target: "_blank",
              children: "Download CV"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_ParticlesBG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/ParticlesBG */ "./components/Layout/ParticlesBG.js");
/* harmony import */ var _Intro_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Intro.module.css */ "./components/Intro.module.css");
/* harmony import */ var _Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Intro_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\Intro.js";




const Intro = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default().intro),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_ParticlesBG__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default()["intro-content"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["Hi, I am ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "primary",
            children: "Sachitha Dharshana"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 22
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "I am a passionate frontend web developer. I can provide clean code and pixel perfect design. I also make websites more & more interactive with web animations."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default().social),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            "aria-label": "Facebook",
            target: "_blank",
            rel: "noreferrer",
            href: "https://facebook.com/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                className: "bi bi-facebook",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            "aria-label": "LinkedIn",
            target: "_blank",
            rel: "noreferrer",
            href: "https://linkedin.com/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                className: "bi bi-linkedin",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            "aria-label": "GitHub",
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Intro_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                className: "bi bi-github",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./components/Layout/Content.js":
/*!**************************************!*\
  !*** ./components/Layout/Content.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.module.css */ "./components/Layout/Content.module.css");
/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\Layout\\Content.js";



const Content = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Content_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: props.children
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Layout/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\Layout\\Navbar.js";




const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default()["header-inner"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `image-container ${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default()["header-img"])}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          alt: "Sachitha Dharshana",
          src: "/passport.jpg",
          layout: "fill",
          className: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/ParticlesBG.js":
/*!******************************************!*\
  !*** ./components/Layout/ParticlesBG.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Particles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Particles.module.css */ "./components/Layout/Particles.module.css");
/* harmony import */ var _Particles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Particles_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\Layout\\ParticlesBG.js";




const ParticlesBG = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "tsparticles",
    className: (_Particles_module_css__WEBPACK_IMPORTED_MODULE_3___default()["particles-wrapper"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_particles_js__WEBPACK_IMPORTED_MODULE_2___default()), {
      params: {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#a6a6a6"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesBG);

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_my_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/my-context */ "./components/store/my-context.js");
/* harmony import */ var _Projects_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Projects.module.css */ "./components/Projects.module.css");
/* harmony import */ var _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Projects_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/Card */ "./components/UI/Card.js");

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\Projects.js";






const Projects = () => {
  const myCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_my_context__WEBPACK_IMPORTED_MODULE_3__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default().projects),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default()["projects-wrapper"]),
        children: myCtx.projects.map(project => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Card__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "project-card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "image-container c-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              alt: project.title,
              src: project.image,
              layout: "fill",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default()["c-body"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: project.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default()["c-footer"]),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default().badges),
              children: project.tech.split(",").map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default().badge),
                children: value
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)]
        }, project.id, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Skills.js":
/*!******************************!*\
  !*** ./components/Skills.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_my_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/my-context */ "./components/store/my-context.js");
/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skills.module.css */ "./components/Skills.module.css");
/* harmony import */ var _Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Skills_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\Skills.js";




const Skills = () => {
  const myCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_my_context__WEBPACK_IMPORTED_MODULE_2__.default);
  const {
    0: render,
    1: setRender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  setTimeout(() => {
    setRender(true); //After 1 second, set render to true
  }, 1000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default().skills),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "My Skills"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "My Skills"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `row ${(_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default()["skills-wrapper"])}`,
        children: myCtx.skills.map(skill => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `col-lg-6 ${(_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default()["skill-wrapper"])}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: skill.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default().progress),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default()["progress-value"]),
              children: [skill.value, "%"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default()["progress-bar"]),
              children: !render ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default()["progress-active"]),
                style: {
                  width: 0
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 21
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_Skills_module_css__WEBPACK_IMPORTED_MODULE_3___default()["progress-active"]),
                style: {
                  width: `${skill.value}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)]
        }, skill.id, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./components/UI/Button.js":
/*!*********************************!*\
  !*** ./components/UI/Button.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ "./components/UI/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\UI\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Button = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", _objectSpread(_objectSpread({
    className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
    href: props.href
  }, props), {}, {
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/UI/Card.js":
/*!*******************************!*\
  !*** ./components/UI/Card.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ "./components/UI/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\components\\UI\\Card.js";



const Card = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${props.className} ${(_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card)}`,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/store/my-context.js":
/*!****************************************!*\
  !*** ./components/store/my-context.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MyContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  projects: [{
    id: "1",
    image: "/instagram-clone.PNG",
    title: "Instagram Clone",
    description: "A simple Instagram clone prototype created using React, Node.js, Next.js and Bootstrap. Ability to like a post and view number of likes. View comments and tags. Few sample posts were hardcoded.",
    tech: "HTML5, CSS3, JavaScript, ReactJS, NextJS, Bootstrap"
  }, {
    id: "2",
    image: "/todo-app.PNG",
    title: "Todo App",
    description: "A simple Todo App created using React, TypeScript, and TailwindCSS. Ability to add todos, mark todos as completed, delete todos and view todos.",
    tech: "HTML5, TailwindCSS, JavaScript, ReactJS, TypeScript"
  }],
  skills: [{
    id: "1",
    name: "HTML5",
    value: 99
  }, {
    id: "2",
    name: "CSS3",
    value: 99
  }, {
    id: "3",
    name: "JavaScript",
    value: 95
  }, {
    id: "4",
    name: "React JS",
    value: 75
  }, {
    id: "5",
    name: "BootStrap",
    value: 99
  }, {
    id: "6",
    name: "Figma",
    value: 65
  }, {
    id: "7",
    name: "PHP",
    value: 50
  }, {
    id: "8",
    name: "Next JS",
    value: 60
  }, {
    id: "9",
    name: "JIRA",
    value: 65
  }, {
    id: "10",
    name: "GitHub",
    value: 80
  }]
});
/* harmony default export */ __webpack_exports__["default"] = (MyContext);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Layout_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Content */ "./components/Layout/Content.js");
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Intro */ "./components/Intro.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.js");


var _jsxFileName = "C:\\Users\\SDmkiRecker\\Documents\\Workspace\\NextJS\\mysite\\pages\\index.js";









function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Intro__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_lazyload__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/About.module.css":
/*!*************************************!*\
  !*** ./components/About.module.css ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"about": "About_about__1DoTp",
	"about-image": "About_about-image__1KIwW",
	"about-content": "About_about-content__2WF58"
};


/***/ }),

/***/ "./components/Intro.module.css":
/*!*************************************!*\
  !*** ./components/Intro.module.css ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"intro": "Intro_intro__2hkOc",
	"intro-content": "Intro_intro-content__gYLxD",
	"social": "Intro_social__1_Aoc",
	"icon": "Intro_icon__1dlOf"
};


/***/ }),

/***/ "./components/Layout/Content.module.css":
/*!**********************************************!*\
  !*** ./components/Layout/Content.module.css ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"content": "Content_content__1wpd8"
};


/***/ }),

/***/ "./components/Layout/Navbar.module.css":
/*!*********************************************!*\
  !*** ./components/Layout/Navbar.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__1ha5s",
	"header-inner": "Navbar_header-inner__28b8w",
	"header-img": "Navbar_header-img__3-jsb"
};


/***/ }),

/***/ "./components/Layout/Particles.module.css":
/*!************************************************!*\
  !*** ./components/Layout/Particles.module.css ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"particles-wrapper": "Particles_particles-wrapper__2mOTr"
};


/***/ }),

/***/ "./components/Projects.module.css":
/*!****************************************!*\
  !*** ./components/Projects.module.css ***!
  \****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"projects": "Projects_projects__2m1Lb",
	"projects-wrapper": "Projects_projects-wrapper__3HNZ_",
	"c-body": "Projects_c-body__FFYVo",
	"c-footer": "Projects_c-footer__uwKsE",
	"badges": "Projects_badges__208k1",
	"badge": "Projects_badge__smIvX"
};


/***/ }),

/***/ "./components/Skills.module.css":
/*!**************************************!*\
  !*** ./components/Skills.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"skills": "Skills_skills__3n7YL",
	"skills-wrapper": "Skills_skills-wrapper__3xfTG",
	"skill-wrapper": "Skills_skill-wrapper__1nBg5",
	"progress": "Skills_progress__3Ro_b",
	"progress-value": "Skills_progress-value__3TPEJ",
	"progress-bar": "Skills_progress-bar__boeKz",
	"progress-active": "Skills_progress-active__1xcwx"
};


/***/ }),

/***/ "./components/UI/Button.module.css":
/*!*****************************************!*\
  !*** ./components/UI/Button.module.css ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"btn": "Button_btn__3Itc3"
};


/***/ }),

/***/ "./components/UI/Card.module.css":
/*!***************************************!*\
  !*** ./components/UI/Card.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__32qO9"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/script");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-lazyload");;

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-particles-js");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL215c2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9JbnRyby5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL0xheW91dC9Db250ZW50LmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhci5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL0xheW91dC9QYXJ0aWNsZXNCRy5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvVUkvQnV0dG9uLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvVUkvQ2FyZC5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL3N0b3JlL215LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL215c2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9BYm91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvSW50cm8ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL0xheW91dC9Db250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9MYXlvdXQvUGFydGljbGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9Qcm9qZWN0cy5tb2R1bGUuY3NzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvU2tpbGxzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL1VJL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcIm5leHQvc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vbXlzaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJyZWFjdC1sYXp5bG9hZFwiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcInJlYWN0LXBhcnRpY2xlcy1qc1wiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFib3V0Iiwic3R5bGVzIiwiSW50cm8iLCJDb250ZW50IiwicHJvcHMiLCJjaGlsZHJlbiIsIk5hdmJhciIsIlBhcnRpY2xlc0JHIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJQcm9qZWN0cyIsIm15Q3R4IiwidXNlQ29udGV4dCIsIk15Q29udGV4dCIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoIiwic3BsaXQiLCJpbmRleCIsImlkIiwiU2tpbGxzIiwicmVuZGVyIiwic2V0UmVuZGVyIiwidXNlU3RhdGUiLCJzZXRUaW1lb3V0Iiwic2tpbGxzIiwic2tpbGwiLCJuYW1lIiwiQnV0dG9uIiwiaHJlZiIsIkNhcmQiLCJjbGFzc05hbWUiLCJSZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3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O0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBLDJHQUErQzs7Ozs7Ozs7Ozs7O0FDQS9DLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0J1dHRvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQWJvdXQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxoMj5BYm91dCBNZTwvaDI+XHJcbiAgICAgICAgICA8c3Bhbj5BYm91dCBNZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGltYWdlLWNvbnRhaW5lciAke3N0eWxlc1tcImFib3V0LWltYWdlXCJdfWB9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQWJvdXQgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fib3V0LWltYWdlLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYWJvdXQtY29udGVudFwiXX0+XHJcbiAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgSSBhbSA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+U2FjaGl0aGEgRGhhcnNoYW5hPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBJIGFtIGEgZnJvbnRlbmQgd2ViIGRldmVsb3Blci4gSSBjYW4gcHJvdmlkZSBjbGVhbiBjb2RlIGFuZFxyXG4gICAgICAgICAgICAgICAgcGl4ZWwgcGVyZmVjdCBkZXNpZ24uIEkgYWxzbyBtYWtlIHdlYnNpdGUgbW9yZSAmIG1vcmVcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlIHdpdGggd2ViIGFuaW1hdGlvbnMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGI+RnVsbCBOYW1lOiA8L2I+IFNhY2hpdGhhIERoYXJzaGFuYSBLYWhha2FjaGNoaVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGI+RE9COiA8L2I+IDE5OTYgRmVicnVhcnkgMjFcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxiPk5hdGlvbmFsaXR5OiA8L2I+IFNpbmhhbGVzZVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGI+UmVsaWdpb246IDwvYj4gQnVkZGhpc3RcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkxhbmd1YWdlczogPC9iPiBFbmdsaXNoLCBTaW5oYWxhXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5BZGRyZXNzOiA8L2I+IE5vLiAyMSwgQW51cmEgTWF3YXRoYSwgQm9ydXBhbmEgUm9hZCxcclxuICAgICAgICAgICAgICAgICAgUmF0bWFsYW5hLlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIvc2FjaGl0aGEtY3YucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICBEb3dubG9hZCBDVlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFBhcnRpY2xlc0JHIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QYXJ0aWNsZXNCR1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbnRyby5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBJbnRybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XHJcbiAgICAgIDxQYXJ0aWNsZXNCRyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbnRyby1jb250ZW50XCJdfT5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgSGksIEkgYW0gPHNwYW4gY2xhc3NOYW1lPVwicHJpbWFyeVwiPlNhY2hpdGhhIERoYXJzaGFuYTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgSSBhbSBhIHBhc3Npb25hdGUgZnJvbnRlbmQgd2ViIGRldmVsb3Blci4gSSBjYW4gcHJvdmlkZSBjbGVhbiBjb2RlXHJcbiAgICAgICAgICAgIGFuZCBwaXhlbCBwZXJmZWN0IGRlc2lnbi4gSSBhbHNvIG1ha2Ugd2Vic2l0ZXMgbW9yZSAmIG1vcmVcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmUgd2l0aCB3ZWIgYW5pbWF0aW9ucy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmFjZWJvb2tcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tL1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWZhY2Vib29rXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgOC4wNDljMC00LjQ0Ni0zLjU4Mi04LjA1LTgtOC4wNUMzLjU4IDAtLjAwMiAzLjYwMy0uMDAyIDguMDVjMCA0LjAxNyAyLjkyNiA3LjM0NyA2Ljc1IDcuOTUxdi01LjYyNWgtMi4wM1Y4LjA1SDYuNzVWNi4yNzVjMC0yLjAxNyAxLjE5NS0zLjEzMSAzLjAyMi0zLjEzMS44NzYgMCAxLjc5MS4xNTcgMS43OTEuMTU3djEuOThoLTEuMDA5Yy0uOTkzIDAtMS4zMDMuNjIxLTEuMzAzIDEuMjU4djEuNTFoMi4yMThsLS4zNTQgMi4zMjZIOS4yNVYxNmMzLjgyNC0uNjA0IDYuNzUtMy45MzQgNi43NS03Ljk1MXpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tL1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWxpbmtlZGluXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAxLjE0NkMwIC41MTMuNTI2IDAgMS4xNzUgMGgxMy42NUMxNS40NzQgMCAxNiAuNTEzIDE2IDEuMTQ2djEzLjcwOGMwIC42MzMtLjUyNiAxLjE0Ni0xLjE3NSAxLjE0NkgxLjE3NUMuNTI2IDE2IDAgMTUuNDg3IDAgMTQuODU0VjEuMTQ2em00Ljk0MyAxMi4yNDhWNi4xNjlIMi41NDJ2Ny4yMjVoMi40MDF6bS0xLjItOC4yMTJjLjgzNyAwIDEuMzU4LS41NTQgMS4zNTgtMS4yNDgtLjAxNS0uNzA5LS41Mi0xLjI0OC0xLjM0Mi0xLjI0OC0uODIyIDAtMS4zNTkuNTQtMS4zNTkgMS4yNDggMCAuNjk0LjUyMSAxLjI0OCAxLjMyNyAxLjI0OGguMDE2em00LjkwOCA4LjIxMlY5LjM1OWMwLS4yMTYuMDE2LS40MzIuMDgtLjU4Ni4xNzMtLjQzMS41NjgtLjg3OCAxLjIzMi0uODc4Ljg2OSAwIDEuMjE2LjY2MiAxLjIxNiAxLjYzNHYzLjg2NWgyLjQwMVY5LjI1YzAtMi4yMi0xLjE4NC0zLjI1Mi0yLjc2NC0zLjI1Mi0xLjI3NCAwLTEuODQ1LjctMi4xNjUgMS4xOTN2LjAyNWgtLjAxNmE1LjU0IDUuNTQgMCAwIDEgLjAxNi0uMDI1VjYuMTY5aC0yLjRjLjAzLjY3OCAwIDcuMjI1IDAgNy4yMjVoMi40elwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHaXRIdWJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzJcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1naXRodWJcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMiA4LjAxMiAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ29udGVudCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICA8Pntwcm9wcy5jaGlsZHJlbn08Lz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXZiYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkZXItaW5uZXJcIl19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW1hZ2UtY29udGFpbmVyICR7c3R5bGVzW1wiaGVhZGVyLWltZ1wiXX1gfT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBhbHQ9XCJTYWNoaXRoYSBEaGFyc2hhbmFcIlxyXG4gICAgICAgICAgICBzcmM9XCIvcGFzc3BvcnQuanBnXCJcclxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUGFydGljbGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFBhcnRpY2xlc0JHID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidHNwYXJ0aWNsZXNcIiBjbGFzc05hbWU9e3N0eWxlc1tcInBhcnRpY2xlcy13cmFwcGVyXCJdfT5cclxuICAgICAgPFBhcnRpY2xlc1xyXG4gICAgICAgIHBhcmFtcz17e1xyXG4gICAgICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAxNjAsXHJcbiAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgICAgICAgIG5iX3NpZGVzOiA1LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHNyYzogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogMCxcclxuICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogNSxcclxuICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICAgICAgICAgICAgc2l6ZV9taW46IDAuMyxcclxuICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxyXG4gICAgICAgICAgICAgIGJvdW5jZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcclxuICAgICAgICAgICAgICAgIHJvdGF0ZVk6IDYwMCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiBcImJ1YmJsZVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgb25jbGljazoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZXNpemU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICAgICAgZ3JhYjoge1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYnViYmxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjUwLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAzLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwdXNoOiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZW1vdmU6IHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogMixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJldGluYV9kZXRlY3Q6IHRydWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZXNCRztcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuL3N0b3JlL215LWNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9qZWN0cy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL1VJL0NhcmRcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG15Q3R4ID0gdXNlQ29udGV4dChNeUNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0c30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPlByb2plY3RzPC9oMj5cclxuICAgICAgICAgIDxzcGFuPlByb2plY3RzPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9qZWN0cy13cmFwcGVyXCJdfT5cclxuICAgICAgICAgIHtteUN0eC5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCIga2V5PXtwcm9qZWN0LmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lciBjLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIGFsdD17cHJvamVjdC50aXRsZX0gc3JjPXtwcm9qZWN0LmltYWdlfSAvPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYy1ib2R5XCJdfT5cclxuICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjLWZvb3RlclwiXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlc30+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2guc3BsaXQoXCIsXCIpLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuL3N0b3JlL215LWNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ta2lsbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG15Q3R4ID0gdXNlQ29udGV4dChNeUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNldFJlbmRlcih0cnVlKTsgLy9BZnRlciAxIHNlY29uZCwgc2V0IHJlbmRlciB0byB0cnVlXHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPk15IFNraWxsczwvaDI+XHJcbiAgICAgICAgICA8c3Bhbj5NeSBTa2lsbHM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgJHtzdHlsZXNbXCJza2lsbHMtd3JhcHBlclwiXX1gfT5cclxuICAgICAgICAgIHtteUN0eC5za2lsbHMubWFwKChza2lsbCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtza2lsbC5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbGctNiAke3N0eWxlc1tcInNraWxsLXdyYXBwZXJcIl19YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgIDxiPntza2lsbC5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2dyZXNzLXZhbHVlXCJdfT57c2tpbGwudmFsdWV9JTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2dyZXNzLWJhclwiXX0+XHJcbiAgICAgICAgICAgICAgICAgIHshcmVuZGVyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2dyZXNzLWFjdGl2ZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9ncmVzcy1hY3RpdmVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7c2tpbGwudmFsdWV9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gaHJlZj17cHJvcHMuaHJlZn0gey4uLnByb3BzfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcm9wcy5jbGFzc05hbWV9ICR7c3R5bGVzLmNhcmR9YH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNeUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBwcm9qZWN0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogXCIxXCIsXHJcbiAgICAgIGltYWdlOiBcIi9pbnN0YWdyYW0tY2xvbmUuUE5HXCIsXHJcbiAgICAgIHRpdGxlOiBcIkluc3RhZ3JhbSBDbG9uZVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkEgc2ltcGxlIEluc3RhZ3JhbSBjbG9uZSBwcm90b3R5cGUgY3JlYXRlZCB1c2luZyBSZWFjdCwgTm9kZS5qcywgTmV4dC5qcyBhbmQgQm9vdHN0cmFwLiBBYmlsaXR5IHRvIGxpa2UgYSBwb3N0IGFuZCB2aWV3IG51bWJlciBvZiBsaWtlcy4gVmlldyBjb21tZW50cyBhbmQgdGFncy4gRmV3IHNhbXBsZSBwb3N0cyB3ZXJlIGhhcmRjb2RlZC5cIixcclxuICAgICAgdGVjaDogXCJIVE1MNSwgQ1NTMywgSmF2YVNjcmlwdCwgUmVhY3RKUywgTmV4dEpTLCBCb290c3RyYXBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjJcIixcclxuICAgICAgaW1hZ2U6IFwiL3RvZG8tYXBwLlBOR1wiLFxyXG4gICAgICB0aXRsZTogXCJUb2RvIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkEgc2ltcGxlIFRvZG8gQXBwIGNyZWF0ZWQgdXNpbmcgUmVhY3QsIFR5cGVTY3JpcHQsIGFuZCBUYWlsd2luZENTUy4gQWJpbGl0eSB0byBhZGQgdG9kb3MsIG1hcmsgdG9kb3MgYXMgY29tcGxldGVkLCBkZWxldGUgdG9kb3MgYW5kIHZpZXcgdG9kb3MuXCIsXHJcbiAgICAgIHRlY2g6IFwiSFRNTDUsIFRhaWx3aW5kQ1NTLCBKYXZhU2NyaXB0LCBSZWFjdEpTLCBUeXBlU2NyaXB0XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc2tpbGxzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjFcIixcclxuICAgICAgbmFtZTogXCJIVE1MNVwiLFxyXG4gICAgICB2YWx1ZTogOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCIyXCIsXHJcbiAgICAgIG5hbWU6IFwiQ1NTM1wiLFxyXG4gICAgICB2YWx1ZTogOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCIzXCIsXHJcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICB2YWx1ZTogOTUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCI0XCIsXHJcbiAgICAgIG5hbWU6IFwiUmVhY3QgSlNcIixcclxuICAgICAgdmFsdWU6IDc1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiNVwiLFxyXG4gICAgICBuYW1lOiBcIkJvb3RTdHJhcFwiLFxyXG4gICAgICB2YWx1ZTogOTksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCI2XCIsXHJcbiAgICAgIG5hbWU6IFwiRmlnbWFcIixcclxuICAgICAgdmFsdWU6IDY1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiN1wiLFxyXG4gICAgICBuYW1lOiBcIlBIUFwiLFxyXG4gICAgICB2YWx1ZTogNTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCI4XCIsXHJcbiAgICAgIG5hbWU6IFwiTmV4dCBKU1wiLFxyXG4gICAgICB2YWx1ZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCI5XCIsXHJcbiAgICAgIG5hbWU6IFwiSklSQVwiLFxyXG4gICAgICB2YWx1ZTogNjUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCIxMFwiLFxyXG4gICAgICBuYW1lOiBcIkdpdEh1YlwiLFxyXG4gICAgICB2YWx1ZTogODAsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDb250ZXh0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXJcIjtcclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRcIjtcclxuaW1wb3J0IEludHJvIGZyb20gXCIuLi9jb21wb25lbnRzL0ludHJvXCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dFwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHNcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ta2lsbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbnRybyAvPlxyXG4gICAgICA8QWJvdXQgLz5cclxuICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgIDxMYXp5TG9hZD5cclxuICAgICAgICA8U2tpbGxzIC8+XHJcbiAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFib3V0XCI6IFwiQWJvdXRfYWJvdXRfXzFEb1RwXCIsXG5cdFwiYWJvdXQtaW1hZ2VcIjogXCJBYm91dF9hYm91dC1pbWFnZV9fMUtJd1dcIixcblx0XCJhYm91dC1jb250ZW50XCI6IFwiQWJvdXRfYWJvdXQtY29udGVudF9fMldGNThcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImludHJvXCI6IFwiSW50cm9faW50cm9fXzJoa09jXCIsXG5cdFwiaW50cm8tY29udGVudFwiOiBcIkludHJvX2ludHJvLWNvbnRlbnRfX2dZTHhEXCIsXG5cdFwic29jaWFsXCI6IFwiSW50cm9fc29jaWFsX18xX0FvY1wiLFxuXHRcImljb25cIjogXCJJbnRyb19pY29uX18xZGxPZlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudFwiOiBcIkNvbnRlbnRfY29udGVudF9fMXdwZDhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdmJhcl9uYXZiYXJfXzFoYTVzXCIsXG5cdFwiaGVhZGVyLWlubmVyXCI6IFwiTmF2YmFyX2hlYWRlci1pbm5lcl9fMjhiOHdcIixcblx0XCJoZWFkZXItaW1nXCI6IFwiTmF2YmFyX2hlYWRlci1pbWdfXzMtanNiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYXJ0aWNsZXMtd3JhcHBlclwiOiBcIlBhcnRpY2xlc19wYXJ0aWNsZXMtd3JhcHBlcl9fMm1PVHJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2plY3RzXCI6IFwiUHJvamVjdHNfcHJvamVjdHNfXzJtMUxiXCIsXG5cdFwicHJvamVjdHMtd3JhcHBlclwiOiBcIlByb2plY3RzX3Byb2plY3RzLXdyYXBwZXJfXzNITlpfXCIsXG5cdFwiYy1ib2R5XCI6IFwiUHJvamVjdHNfYy1ib2R5X19GRllWb1wiLFxuXHRcImMtZm9vdGVyXCI6IFwiUHJvamVjdHNfYy1mb290ZXJfX3V3S3NFXCIsXG5cdFwiYmFkZ2VzXCI6IFwiUHJvamVjdHNfYmFkZ2VzX18yMDhrMVwiLFxuXHRcImJhZGdlXCI6IFwiUHJvamVjdHNfYmFkZ2VfX3NtSXZYXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJza2lsbHNcIjogXCJTa2lsbHNfc2tpbGxzX18zbjdZTFwiLFxuXHRcInNraWxscy13cmFwcGVyXCI6IFwiU2tpbGxzX3NraWxscy13cmFwcGVyX18zeGZUR1wiLFxuXHRcInNraWxsLXdyYXBwZXJcIjogXCJTa2lsbHNfc2tpbGwtd3JhcHBlcl9fMW5CZzVcIixcblx0XCJwcm9ncmVzc1wiOiBcIlNraWxsc19wcm9ncmVzc19fM1JvX2JcIixcblx0XCJwcm9ncmVzcy12YWx1ZVwiOiBcIlNraWxsc19wcm9ncmVzcy12YWx1ZV9fM1RQRUpcIixcblx0XCJwcm9ncmVzcy1iYXJcIjogXCJTa2lsbHNfcHJvZ3Jlc3MtYmFyX19ib2VLelwiLFxuXHRcInByb2dyZXNzLWFjdGl2ZVwiOiBcIlNraWxsc19wcm9ncmVzcy1hY3RpdmVfXzF4Y3d4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidG5cIjogXCJCdXR0b25fYnRuX18zSXRjM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fMzJxTzlcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9zY3JpcHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5bG9hZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGFydGljbGVzLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
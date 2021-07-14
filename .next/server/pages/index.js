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
    name: "BootStrap",
    value: 98
  }, {
    id: "5",
    name: "React JS",
    value: 75
  }, {
    id: "6",
    name: "Next JS",
    value: 60
  }, {
    id: "7",
    name: "Figma",
    value: 65
  }, {
    id: "8",
    name: "GitHub",
    value: 85
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL215c2l0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9JbnRyby5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL0xheW91dC9Db250ZW50LmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhci5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL0xheW91dC9QYXJ0aWNsZXNCRy5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvVUkvQnV0dG9uLmpzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvVUkvQ2FyZC5qcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL3N0b3JlL215LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL215c2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9BYm91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvSW50cm8ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL0xheW91dC9Db250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9MYXlvdXQvUGFydGljbGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9Qcm9qZWN0cy5tb2R1bGUuY3NzIiwid2VicGFjazovL215c2l0ZS8uL2NvbXBvbmVudHMvU2tpbGxzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlzaXRlLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9jb21wb25lbnRzL1VJL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teXNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcIm5leHQvc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vbXlzaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teXNpdGUvZXh0ZXJuYWwgXCJyZWFjdC1sYXp5bG9hZFwiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcInJlYWN0LXBhcnRpY2xlcy1qc1wiIiwid2VicGFjazovL215c2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFib3V0Iiwic3R5bGVzIiwiSW50cm8iLCJDb250ZW50IiwicHJvcHMiLCJjaGlsZHJlbiIsIk5hdmJhciIsIlBhcnRpY2xlc0JHIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJQcm9qZWN0cyIsIm15Q3R4IiwidXNlQ29udGV4dCIsIk15Q29udGV4dCIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoIiwic3BsaXQiLCJpbmRleCIsImlkIiwiU2tpbGxzIiwicmVuZGVyIiwic2V0UmVuZGVyIiwidXNlU3RhdGUiLCJzZXRUaW1lb3V0Iiwic2tpbGxzIiwic2tpbGwiLCJuYW1lIiwiQnV0dG9uIiwiaHJlZiIsIkNhcmQiLCJjbGFzc05hbWUiLCJSZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3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Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvQnV0dG9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BYm91dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPkFib3V0IE1lPC9oMj5cclxuICAgICAgICAgIDxzcGFuPkFib3V0IE1lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW1hZ2UtY29udGFpbmVyICR7c3R5bGVzW1wiYWJvdXQtaW1hZ2VcIl19YH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBYm91dCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvYWJvdXQtaW1hZ2UuanBnXCJcclxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhYm91dC1jb250ZW50XCJdfT5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICBJIGFtIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5TYWNoaXRoYSBEaGFyc2hhbmE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEkgYW0gYSBmcm9udGVuZCB3ZWIgZGV2ZWxvcGVyLiBJIGNhbiBwcm92aWRlIGNsZWFuIGNvZGUgYW5kXHJcbiAgICAgICAgICAgICAgICBwaXhlbCBwZXJmZWN0IGRlc2lnbi4gSSBhbHNvIG1ha2Ugd2Vic2l0ZSBtb3JlICYgbW9yZVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RpdmUgd2l0aCB3ZWIgYW5pbWF0aW9ucy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5GdWxsIE5hbWU6IDwvYj4gU2FjaGl0aGEgRGhhcnNoYW5hIEthaGFrYWNoY2hpXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5ET0I6IDwvYj4gMTk5NiBGZWJydWFyeSAyMVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGI+TmF0aW9uYWxpdHk6IDwvYj4gU2luaGFsZXNlXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5SZWxpZ2lvbjogPC9iPiBCdWRkaGlzdFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGI+TGFuZ3VhZ2VzOiA8L2I+IEVuZ2xpc2gsIFNpbmhhbGFcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkFkZHJlc3M6IDwvYj4gTm8uIDIxLCBBbnVyYSBNYXdhdGhhLCBCb3J1cGFuYSBSb2FkLFxyXG4gICAgICAgICAgICAgICAgICBSYXRtYWxhbmEuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cIi9zYWNoaXRoYS1jdi5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIERvd25sb2FkIENWXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUGFydGljbGVzQkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BhcnRpY2xlc0JHXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ludHJvLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEludHJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cclxuICAgICAgPFBhcnRpY2xlc0JHIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImludHJvLWNvbnRlbnRcIl19PlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBIaSwgSSBhbSA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+U2FjaGl0aGEgRGhhcnNoYW5hPC9zcGFuPlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBJIGFtIGEgcGFzc2lvbmF0ZSBmcm9udGVuZCB3ZWIgZGV2ZWxvcGVyLiBJIGNhbiBwcm92aWRlIGNsZWFuIGNvZGVcclxuICAgICAgICAgICAgYW5kIHBpeGVsIHBlcmZlY3QgZGVzaWduLiBJIGFsc28gbWFrZSB3ZWJzaXRlcyBtb3JlICYgbW9yZVxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZSB3aXRoIHdlYiBhbmltYXRpb25zLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4LjA0OWMwLTQuNDQ2LTMuNTgyLTguMDUtOC04LjA1QzMuNTggMC0uMDAyIDMuNjAzLS4wMDIgOC4wNWMwIDQuMDE3IDIuOTI2IDcuMzQ3IDYuNzUgNy45NTF2LTUuNjI1aC0yLjAzVjguMDVINi43NVY2LjI3NWMwLTIuMDE3IDEuMTk1LTMuMTMxIDMuMDIyLTMuMTMxLjg3NiAwIDEuNzkxLjE1NyAxLjc5MS4xNTd2MS45OGgtMS4wMDljLS45OTMgMC0xLjMwMy42MjEtMS4zMDMgMS4yNTh2MS41MWgyLjIxOGwtLjM1NCAyLjMyNkg5LjI1VjE2YzMuODI0LS42MDQgNi43NS0zLjkzNCA2Ljc1LTcuOTUxelwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMaW5rZWRJblwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktbGlua2VkaW5cIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDEuMTQ2QzAgLjUxMy41MjYgMCAxLjE3NSAwaDEzLjY1QzE1LjQ3NCAwIDE2IC41MTMgMTYgMS4xNDZ2MTMuNzA4YzAgLjYzMy0uNTI2IDEuMTQ2LTEuMTc1IDEuMTQ2SDEuMTc1Qy41MjYgMTYgMCAxNS40ODcgMCAxNC44NTRWMS4xNDZ6bTQuOTQzIDEyLjI0OFY2LjE2OUgyLjU0MnY3LjIyNWgyLjQwMXptLTEuMi04LjIxMmMuODM3IDAgMS4zNTgtLjU1NCAxLjM1OC0xLjI0OC0uMDE1LS43MDktLjUyLTEuMjQ4LTEuMzQyLTEuMjQ4LS44MjIgMC0xLjM1OS41NC0xLjM1OSAxLjI0OCAwIC42OTQuNTIxIDEuMjQ4IDEuMzI3IDEuMjQ4aC4wMTZ6bTQuOTA4IDguMjEyVjkuMzU5YzAtLjIxNi4wMTYtLjQzMi4wOC0uNTg2LjE3My0uNDMxLjU2OC0uODc4IDEuMjMyLS44NzguODY5IDAgMS4yMTYuNjYyIDEuMjE2IDEuNjM0djMuODY1aDIuNDAxVjkuMjVjMC0yLjIyLTEuMTg0LTMuMjUyLTIuNzY0LTMuMjUyLTEuMjc0IDAtMS44NDUuNy0yLjE2NSAxLjE5M3YuMDI1aC0uMDE2YTUuNTQgNS41NCAwIDAgMSAuMDE2LS4wMjVWNi4xNjloLTIuNGMuMDMuNjc4IDAgNy4yMjUgMCA3LjIyNWgyLjR6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdpdEh1YlwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEyIDguMDEyIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgIDw+e3Byb3BzLmNoaWxkcmVufTwvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlci1pbm5lclwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbWFnZS1jb250YWluZXIgJHtzdHlsZXNbXCJoZWFkZXItaW1nXCJdfWB9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGFsdD1cIlNhY2hpdGhhIERoYXJzaGFuYVwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9wYXNzcG9ydC5qcGdcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QYXJ0aWNsZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUGFydGljbGVzQkcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0c3BhcnRpY2xlc1wiIGNsYXNzTmFtZT17c3R5bGVzW1wicGFydGljbGVzLXdyYXBwZXJcIl19PlxyXG4gICAgICA8UGFydGljbGVzXHJcbiAgICAgICAgcGFyYW1zPXt7XHJcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IDE2MCxcclxuICAgICAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJjaXJjbGVcIixcclxuICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgICAgICAgICAgbmJfc2lkZXM6IDUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiA1LFxyXG4gICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDQsXHJcbiAgICAgICAgICAgICAgICBzaXplX21pbjogMC4zLFxyXG4gICAgICAgICAgICAgICAgc3luYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW92ZToge1xyXG4gICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgb3V0X21vZGU6IFwib3V0XCIsXHJcbiAgICAgICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBhdHRyYWN0OiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgICAgICAgICAgcm90YXRlWTogNjAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgICAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1vZGU6IFwiYnViYmxlXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZXM6IHtcclxuICAgICAgICAgICAgICBncmFiOiB7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBidWJibGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyNTAsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHB1c2g6IHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHJlbW92ZToge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiAyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmV0aW5hX2RldGVjdDogdHJ1ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlc0JHO1xyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4vc3RvcmUvbXktY29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Byb2plY3RzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vVUkvQ2FyZFwiO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbXlDdHggPSB1c2VDb250ZXh0KE15Q29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgPHNwYW4+UHJvamVjdHM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2plY3RzLXdyYXBwZXJcIl19PlxyXG4gICAgICAgICAge215Q3R4LnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRcIiBrZXk9e3Byb2plY3QuaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyIGMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWcgYWx0PXtwcm9qZWN0LnRpdGxlfSBzcmM9e3Byb2plY3QuaW1hZ2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjLWJvZHlcIl19PlxyXG4gICAgICAgICAgICAgICAgPGgzPntwcm9qZWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImMtZm9vdGVyXCJdfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2VzfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2plY3QudGVjaC5zcGxpdChcIixcIikubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4vc3RvcmUvbXktY29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NraWxscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbXlDdHggPSB1c2VDb250ZXh0KE15Q29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtyZW5kZXIsIHNldFJlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2V0UmVuZGVyKHRydWUpOyAvL0FmdGVyIDEgc2Vjb25kLCBzZXQgcmVuZGVyIHRvIHRydWVcclxuICB9LCAxMDAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpbGxzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+TXkgU2tpbGxzPC9oMj5cclxuICAgICAgICAgIDxzcGFuPk15IFNraWxsczwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlc1tcInNraWxscy13cmFwcGVyXCJdfWB9PlxyXG4gICAgICAgICAge215Q3R4LnNraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e3NraWxsLmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1sZy02ICR7c3R5bGVzW1wic2tpbGwtd3JhcHBlclwiXX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgPGI+e3NraWxsLm5hbWV9PC9iPlxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZ3Jlc3MtdmFsdWVcIl19Pntza2lsbC52YWx1ZX0lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZ3Jlc3MtYmFyXCJdfT5cclxuICAgICAgICAgICAgICAgICAgeyFyZW5kZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicHJvZ3Jlc3MtYWN0aXZlXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInByb2dyZXNzLWFjdGl2ZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtza2lsbC52YWx1ZX0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBocmVmPXtwcm9wcy5ocmVmfSB7Li4ucHJvcHN9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3Byb3BzLmNsYXNzTmFtZX0gJHtzdHlsZXMuY2FyZH1gfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE15Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHByb2plY3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjFcIixcclxuICAgICAgaW1hZ2U6IFwiL2luc3RhZ3JhbS1jbG9uZS5QTkdcIixcclxuICAgICAgdGl0bGU6IFwiSW5zdGFncmFtIENsb25lXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQSBzaW1wbGUgSW5zdGFncmFtIGNsb25lIHByb3RvdHlwZSBjcmVhdGVkIHVzaW5nIFJlYWN0LCBOb2RlLmpzLCBOZXh0LmpzIGFuZCBCb290c3RyYXAuIEFiaWxpdHkgdG8gbGlrZSBhIHBvc3QgYW5kIHZpZXcgbnVtYmVyIG9mIGxpa2VzLiBWaWV3IGNvbW1lbnRzIGFuZCB0YWdzLiBGZXcgc2FtcGxlIHBvc3RzIHdlcmUgaGFyZGNvZGVkLlwiLFxyXG4gICAgICB0ZWNoOiBcIkhUTUw1LCBDU1MzLCBKYXZhU2NyaXB0LCBSZWFjdEpTLCBOZXh0SlMsIEJvb3RzdHJhcFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICBpbWFnZTogXCIvdG9kby1hcHAuUE5HXCIsXHJcbiAgICAgIHRpdGxlOiBcIlRvZG8gQXBwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQSBzaW1wbGUgVG9kbyBBcHAgY3JlYXRlZCB1c2luZyBSZWFjdCwgVHlwZVNjcmlwdCwgYW5kIFRhaWx3aW5kQ1NTLiBBYmlsaXR5IHRvIGFkZCB0b2RvcywgbWFyayB0b2RvcyBhcyBjb21wbGV0ZWQsIGRlbGV0ZSB0b2RvcyBhbmQgdmlldyB0b2Rvcy5cIixcclxuICAgICAgdGVjaDogXCJIVE1MNSwgVGFpbHdpbmRDU1MsIEphdmFTY3JpcHQsIFJlYWN0SlMsIFR5cGVTY3JpcHRcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBza2lsbHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICBuYW1lOiBcIkhUTUw1XCIsXHJcbiAgICAgIHZhbHVlOiA5OSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjJcIixcclxuICAgICAgbmFtZTogXCJDU1MzXCIsXHJcbiAgICAgIHZhbHVlOiA5OSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjNcIixcclxuICAgICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIHZhbHVlOiA5NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjRcIixcclxuICAgICAgbmFtZTogXCJCb290U3RyYXBcIixcclxuICAgICAgdmFsdWU6IDk4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiNVwiLFxyXG4gICAgICBuYW1lOiBcIlJlYWN0IEpTXCIsXHJcbiAgICAgIHZhbHVlOiA3NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjZcIixcclxuICAgICAgbmFtZTogXCJOZXh0IEpTXCIsXHJcbiAgICAgIHZhbHVlOiA2MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIjdcIixcclxuICAgICAgbmFtZTogXCJGaWdtYVwiLFxyXG4gICAgICB2YWx1ZTogNjUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCI4XCIsXHJcbiAgICAgIG5hbWU6IFwiR2l0SHViXCIsXHJcbiAgICAgIHZhbHVlOiA4NSxcclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbnRleHQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgTGF6eUxvYWQgZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFwiO1xyXG5pbXBvcnQgSW50cm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW50cm9cIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0XCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gXCIuLi9jb21wb25lbnRzL1NraWxsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEludHJvIC8+XHJcbiAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICA8QWJvdXQgLz5cclxuICAgICAgPExhenlMb2FkPlxyXG4gICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgPC9MYXp5TG9hZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRcIjogXCJBYm91dF9hYm91dF9fMURvVHBcIixcblx0XCJhYm91dC1pbWFnZVwiOiBcIkFib3V0X2Fib3V0LWltYWdlX18xS0l3V1wiLFxuXHRcImFib3V0LWNvbnRlbnRcIjogXCJBYm91dF9hYm91dC1jb250ZW50X18yV0Y1OFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW50cm9cIjogXCJJbnRyb19pbnRyb19fMmhrT2NcIixcblx0XCJpbnRyby1jb250ZW50XCI6IFwiSW50cm9faW50cm8tY29udGVudF9fZ1lMeERcIixcblx0XCJzb2NpYWxcIjogXCJJbnRyb19zb2NpYWxfXzFfQW9jXCIsXG5cdFwiaWNvblwiOiBcIkludHJvX2ljb25fXzFkbE9mXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwiQ29udGVudF9jb250ZW50X18xd3BkOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyXCI6IFwiTmF2YmFyX25hdmJhcl9fMWhhNXNcIixcblx0XCJoZWFkZXItaW5uZXJcIjogXCJOYXZiYXJfaGVhZGVyLWlubmVyX18yOGI4d1wiLFxuXHRcImhlYWRlci1pbWdcIjogXCJOYXZiYXJfaGVhZGVyLWltZ19fMy1qc2JcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhcnRpY2xlcy13cmFwcGVyXCI6IFwiUGFydGljbGVzX3BhcnRpY2xlcy13cmFwcGVyX18ybU9UclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvamVjdHNcIjogXCJQcm9qZWN0c19wcm9qZWN0c19fMm0xTGJcIixcblx0XCJwcm9qZWN0cy13cmFwcGVyXCI6IFwiUHJvamVjdHNfcHJvamVjdHMtd3JhcHBlcl9fM0hOWl9cIixcblx0XCJjLWJvZHlcIjogXCJQcm9qZWN0c19jLWJvZHlfX0ZGWVZvXCIsXG5cdFwiYy1mb290ZXJcIjogXCJQcm9qZWN0c19jLWZvb3Rlcl9fdXdLc0VcIixcblx0XCJiYWRnZXNcIjogXCJQcm9qZWN0c19iYWRnZXNfXzIwOGsxXCIsXG5cdFwiYmFkZ2VcIjogXCJQcm9qZWN0c19iYWRnZV9fc21JdlhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNraWxsc1wiOiBcIlNraWxsc19za2lsbHNfXzNuN1lMXCIsXG5cdFwic2tpbGxzLXdyYXBwZXJcIjogXCJTa2lsbHNfc2tpbGxzLXdyYXBwZXJfXzN4ZlRHXCIsXG5cdFwic2tpbGwtd3JhcHBlclwiOiBcIlNraWxsc19za2lsbC13cmFwcGVyX18xbkJnNVwiLFxuXHRcInByb2dyZXNzXCI6IFwiU2tpbGxzX3Byb2dyZXNzX18zUm9fYlwiLFxuXHRcInByb2dyZXNzLXZhbHVlXCI6IFwiU2tpbGxzX3Byb2dyZXNzLXZhbHVlX18zVFBFSlwiLFxuXHRcInByb2dyZXNzLWJhclwiOiBcIlNraWxsc19wcm9ncmVzcy1iYXJfX2JvZUt6XCIsXG5cdFwicHJvZ3Jlc3MtYWN0aXZlXCI6IFwiU2tpbGxzX3Byb2dyZXNzLWFjdGl2ZV9fMXhjd3hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcIkJ1dHRvbl9idG5fXzNJdGMzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zMnFPOVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3NjcmlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenlsb2FkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXJ0aWNsZXMtanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
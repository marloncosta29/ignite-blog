module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RnN5");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Q3C4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"banner": "post_banner__3a1mH",
	"container": "post_container__3BS1P",
	"info": "post_info__2PI2j",
	"postHeading": "post_postHeading__39wyX",
	"postContent": "post_postContent__39xh5"
};


/***/ }),

/***/ "RnN5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Post; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@prismicio/client"
var client_ = __webpack_require__("Ya5x");
var client_default = /*#__PURE__*/__webpack_require__.n(client_);

// EXTERNAL MODULE: ./src/services/prismic.ts
var services_prismic = __webpack_require__("jFAN");

// EXTERNAL MODULE: ./src/pages/post/post.module.scss
var post_module = __webpack_require__("Q3C4");
var post_module_default = /*#__PURE__*/__webpack_require__.n(post_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/Header/header.module.scss
var header_module = __webpack_require__("sjX0");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./src/components/Header/index.tsx



function Header() {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: header_module_default.a.container,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/images/logo.svg",
      alt: "logo",
      onClick: () => {
        router.push('/');
      }
    })
  });
}
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: external "date-fns/locale/pt-BR"
var pt_BR_ = __webpack_require__("RvHN");
var pt_BR_default = /*#__PURE__*/__webpack_require__.n(pt_BR_);

// EXTERNAL MODULE: external "prismic-dom"
var external_prismic_dom_ = __webpack_require__("Z6lk");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/pages/post/[slug].tsx













function formattedTime(seconds) {
  var helperDate = Object(external_date_fns_["addSeconds"])(new Date(0), seconds);
  return Object(external_date_fns_["format"])(helperDate, 'mm:ss');
}

function Post({
  post
}) {
  console.log({
    post
  });
  const {
    0: timeToRead,
    1: setTimeToRead
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    if (post) {
      const contentText = [];
      post.data.content.map(content => {
        contentText.push(external_prismic_dom_["RichText"].asText(content.body));
      });
      const totalWords = contentText.join(' ').split(' ').length;
      setTimeToRead(totalWords / 200 * 60);
    }
  }, [post]);

  if (!post) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: "Carregando..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: post_module_default.a.banner,
      src: post.data.banner.url,
      alt: "banner"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      className: post_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: post.data.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: post_module_default.a.info,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("time", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiCalendar"], {}), Object(external_date_fns_["format"])(new Date(post.first_publication_date), 'dd LLL yyyy', {
            locale: pt_BR_default.a
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiUser"], {}), post.data.author]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiClock"], {}), formattedTime(timeToRead)]
        })]
      }), post.data.content.map((content, index) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: post_module_default.a.postHeading,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            children: content.heading
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: post_module_default.a.postContent,
            dangerouslySetInnerHTML: {
              __html: external_prismic_dom_["RichText"].asHtml(content.body)
            }
          })]
        }, index);
      })]
    })]
  });
}
const getStaticPaths = async () => {
  const prismic = Object(services_prismic["a" /* getPrismicClient */])();
  const posts = await prismic.query([client_default.a.predicates.at('document.type', 'post')], {
    pageSize: 1
  });
  console.log(posts);
  const paths = posts.results.map(item => {
    return {
      params: {
        slug: item.uid
      }
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: true
  };
};
const getStaticProps = async ({
  params
}) => {
  const {
    slug
  } = params;
  const prismic = Object(services_prismic["a" /* getPrismicClient */])();
  const response = await prismic.getByUID('post', String(slug), {});
  const post = {
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url
      },
      author: response.data.author,
      content: response.data.content.map(cont => {
        return {
          heading: cont.heading,
          body: cont.body
        };
      })
    },
    first_publication_date: response.first_publication_date
  };
  return {
    props: {
      post
    }
  };
};

/***/ }),

/***/ "RvHN":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/pt-BR");

/***/ }),

/***/ "Ya5x":
/***/ (function(module, exports) {

module.exports = require("@prismicio/client");

/***/ }),

/***/ "Z6lk":
/***/ (function(module, exports) {

module.exports = require("prismic-dom");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "jFAN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPrismicClient; });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ya5x");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);

function getPrismicClient(req) {
  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default.a.client(process.env.PRISMIC_API_ENDPOINT, {
    req
  });
  return prismic;
}

/***/ }),

/***/ "sjX0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "header_container__3Y5_s"
};


/***/ })

/******/ });
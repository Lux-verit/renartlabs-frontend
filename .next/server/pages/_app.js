"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/Layout/Footer.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: " bg-[#120704] py-8 flex items-center justify-center gap-8 transition-opacity text-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "https://twitter.com/RenArt_Labs",
            className: "opacity-50 hover:opacity-100",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitter, {
                size: "32"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Layout/Nav.tsx


const navigation = [
    {
        name: "Recap the #EarlyDogArt Contest",
        href: "earlydogart"
    }, 
];
function Nav() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-[#120704]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 my-1",
            "aria-label": "Global",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-left flex-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-x-8 flex ml-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            height: 45,
                            width: 45,
                            src: "/assets/renarticon.png"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center space-x-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center gap-4"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx









const queryClient = new external_react_query_namespaceObject.QueryClient();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_query_namespaceObject.QueryClientProvider, {
        client: queryClient,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "DogFinity Discounts"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-col justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {
                initialIsOpen: false
            })
        ]
    });
};


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(922));
module.exports = __webpack_exports__;

})();
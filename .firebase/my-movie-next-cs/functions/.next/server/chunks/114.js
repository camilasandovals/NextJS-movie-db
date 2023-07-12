exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 3808:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 2609:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5457, 23))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 6969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(3683);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1518);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/shared/Navbar.js


const genres = [
    {
        title: "Comedies",
        slug: "comedy"
    },
    {
        title: "Drama",
        slug: "drama"
    },
    {
        title: "Horror",
        slug: "horror"
    }
];
function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "text-zinc-300 bg-zinc-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "flex text-xl title-font font-medium items-center text-zinc-50 mb-4 md:mb-0",
                    children: "My Movie Database"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "flex flex-wrap items-center text-base justify-center md:ml-auto",
                    children: genres.map((genre)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "mr-5 hover:text-orange-200",
                            href: "/" + genre.slug,
                            children: genre.title
                        }, genre.slug))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.js




const metadata = {
    title: "My Movie Database",
    description: "IMDB-like cline built in Next.js"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className + " bg-zinc-900",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;
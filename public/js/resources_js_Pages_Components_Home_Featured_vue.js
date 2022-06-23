"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Components_Home_Featured_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Cards.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Cards.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["currency", "products", "more", "title"],
  data: function data() {
    return {};
  },
  methods: {
    toLocaleString: function toLocaleString() {
      var str = num.toString().split(".");

      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }

      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }

      return str.join(".");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Featured.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Featured.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Product.vue */ "./resources/js/Pages/Components/Product.vue");
/* harmony import */ var _Cards_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue */ "./resources/js/Pages/Components/Home/Cards.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Cards: _Cards_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Product: _Product_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["currency", "products"],
  data: function data() {
    return {
      more: {
        link: "/featured"
      } // featured: [
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 38889,
      //     offprice: 38398,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      // ],

    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["products", "currency", "title", "more"],
  methods: {
    toLocaleString: function toLocaleString() {
      var str = num.toString().split(".");

      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }

      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }

      return str.join(".");
    },
    wishlist: function wishlist(id) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put("/wishlist/create/".concat(id), null, {
        preserveState: true,
        preserveScroll: true
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Cards.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Cards.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cards_vue_vue_type_template_id_74140af3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=74140af3& */ "./resources/js/Pages/Components/Home/Cards.vue?vue&type=template&id=74140af3&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/Cards.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cards_vue_vue_type_template_id_74140af3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cards_vue_vue_type_template_id_74140af3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/Cards.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Featured.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Featured.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Featured_vue_vue_type_template_id_5d55424e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Featured.vue?vue&type=template&id=5d55424e& */ "./resources/js/Pages/Components/Home/Featured.vue?vue&type=template&id=5d55424e&");
/* harmony import */ var _Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Featured.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/Featured.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Featured_vue_vue_type_template_id_5d55424e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Featured_vue_vue_type_template_id_5d55424e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/Featured.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Product.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Components/Product.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7a700d82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7a700d82& */ "./resources/js/Pages/Components/Product.vue?vue&type=template&id=7a700d82&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7a700d82___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_7a700d82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Cards.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Cards.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Cards.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Featured.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Featured.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Featured.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Featured.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Product.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Components/Product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Cards.vue?vue&type=template&id=74140af3&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Cards.vue?vue&type=template&id=74140af3& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_74140af3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_74140af3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_74140af3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cards.vue?vue&type=template&id=74140af3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Cards.vue?vue&type=template&id=74140af3&");


/***/ }),

/***/ "./resources/js/Pages/Components/Home/Featured.vue?vue&type=template&id=5d55424e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Featured.vue?vue&type=template&id=5d55424e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_5d55424e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_5d55424e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_5d55424e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Featured.vue?vue&type=template&id=5d55424e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Featured.vue?vue&type=template&id=5d55424e&");


/***/ }),

/***/ "./resources/js/Pages/Components/Product.vue?vue&type=template&id=7a700d82&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Product.vue?vue&type=template&id=7a700d82& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7a700d82___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7a700d82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7a700d82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=7a700d82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product.vue?vue&type=template&id=7a700d82&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Cards.vue?vue&type=template&id=74140af3&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Cards.vue?vue&type=template&id=74140af3& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        {},
        [
          _c(
            "v-row",
            { staticClass: "px-2 py-2", attrs: { justify: "space-between " } },
            [
              _c("div", { domProps: { textContent: _vm._s(_vm.title) } }),
              _vm._v(" "),
              _vm.more
                ? _c(
                    "Link",
                    {
                      staticClass: "text-base",
                      attrs: { href: _vm.more.link },
                    },
                    [
                      _c("span", [_vm._v(" View More ")]),
                      _vm._v(" "),
                      _c("v-icon", { attrs: { color: "blue " } }, [
                        _vm._v("mdi-menu-right"),
                      ]),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-text",
        {},
        [
          _c(
            "v-container",
            { staticClass: "pa-0 ma-0", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                _vm._l(_vm.products, function (product) {
                  return _c(
                    "v-col",
                    {
                      key: product.title,
                      staticClass: "pa-0",
                      attrs: { lg: "3", sm: "4", cols: "6" },
                    },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function (ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-sheet",
                                    {
                                      staticClass: "ma-1",
                                      attrs: {
                                        rounded: "sm",
                                        elevation: hover ? "3" : "0",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "grid" },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              staticClass: "rounded-sm",
                                              attrs: {
                                                contain: "",
                                                src: product.image[0].path,
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "placeholder",
                                                    fn: function () {
                                                      return [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            staticClass:
                                                              "fill-height ma-0",
                                                            attrs: {
                                                              align: "center",
                                                              justify: "center",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-progress-circular",
                                                              {
                                                                attrs: {
                                                                  indeterminate:
                                                                    "",
                                                                  color:
                                                                    "blue lighten-3",
                                                                },
                                                              }
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    },
                                                    proxy: true,
                                                  },
                                                ],
                                                null,
                                                true
                                              ),
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "\n                      absolute\n                      rounded-md\n                      bg-green-500\n                      text-white\n                      right-1\n                      top-1\n                      px-1\n                      text-[13px]\n                    ",
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      (
                                                        ((product.initial_price -
                                                          product.price) /
                                                          product.initial_price) *
                                                        100
                                                      ).toFixed(0) + "% OFF"
                                                    ),
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    test discount\n                  "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "grid px-2 pt-2 pb-6",
                                            },
                                            [
                                              _c(
                                                "Link",
                                                {
                                                  attrs: {
                                                    href:
                                                      "/product/" + product.id,
                                                  },
                                                },
                                                [
                                                  _c("div", {
                                                    staticClass:
                                                      "truncate text-gray-800",
                                                    class: hover
                                                      ? "text-blue-500"
                                                      : "",
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        product.title
                                                      ),
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("div", {
                                                    staticClass:
                                                      "text-slate-700 font-semibold text-sm",
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        product.category.country
                                                          .currency +
                                                          " " +
                                                          product.price.toLocaleString()
                                                      ),
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("div", {
                                                    staticClass:
                                                      "line-through text-xs text-gray-500",
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        product.category.country
                                                          .currency +
                                                          " " +
                                                          product.initial_price.toLocaleString()
                                                      ),
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "flex justify-between",
                                                },
                                                [
                                                  _c("v-rating", {
                                                    attrs: {
                                                      value: product.rating,
                                                      "background-color":
                                                        "yellow ",
                                                      color: "yellow darken-4",
                                                      small: "",
                                                      dense: "",
                                                      readonly: "",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        small: "",
                                                        elevation:
                                                          "\n                            ",
                                                        icon: "",
                                                        color: "orange",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.wishlist(
                                                            product.id
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "orange",
                                                          },
                                                        },
                                                        [_vm._v(" mdi-heart ")]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      }),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Featured.vue?vue&type=template&id=5d55424e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Featured.vue?vue&type=template&id=5d55424e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$vuetify.breakpoint.xsOnly
        ? _c("Product", {
            attrs: {
              more: "/featured",
              title: "Featured",
              currency: "Ksh",
              products: _vm.products,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndUp
        ? _c("Cards", {
            attrs: {
              products: _vm.products,
              more: "/fearuesgs",
              currency: "Ksh",
              title: "Featured",
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product.vue?vue&type=template&id=7a700d82&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product.vue?vue&type=template&id=7a700d82& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { color: "main", flat: "" } },
    [
      _c(
        "v-card-title",
        { staticClass: "py-6" },
        [
          _c(
            "v-row",
            { attrs: { justify: "space-between" } },
            [
              _c("div", {
                staticClass: "text-lg text-gray-900",
                domProps: { textContent: _vm._s(_vm.title) },
              }),
              _vm._v(" "),
              _vm.more
                ? _c(
                    "Link",
                    { staticClass: "text-sm", attrs: { href: _vm.more } },
                    [
                      _c("span", [_vm._v("more")]),
                      _vm._v(" "),
                      _c("v-icon", { attrs: { color: "blue" } }, [
                        _vm._v("mdi-menu-right"),
                      ]),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.products, function (product) {
          return _c(
            "v-col",
            {
              key: product.id,
              staticClass: "pa-0",
              attrs: { md: "3", sm: "4", cols: "6" },
            },
            [
              _c("v-hover", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function (ref) {
                        var hover = ref.hover
                        return [
                          _c(
                            "v-sheet",
                            {
                              staticClass: "ma-1",
                              attrs: {
                                rounded: "sm",
                                elevation: hover ? "3" : "0",
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "grid" },
                                [
                                  _c(
                                    "v-img",
                                    {
                                      staticClass: "rounded-sm",
                                      attrs: {
                                        height: "180",
                                        src: product.image[0].path,
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "placeholder",
                                            fn: function () {
                                              return [
                                                _c(
                                                  "v-row",
                                                  {
                                                    staticClass:
                                                      "fill-height ma-0",
                                                    attrs: {
                                                      align: "center",
                                                      justify: "center",
                                                    },
                                                  },
                                                  [
                                                    _c("v-progress-circular", {
                                                      attrs: {
                                                        indeterminate: "",
                                                        color: "blue lighten-3",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            },
                                            proxy: true,
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "\n                  absolute\n                  rounded-md\n                  bg-green-500\n                  text-white\n                  right-1\n                  top-1\n                  px-1\n                  text-[13px]\n                ",
                                          domProps: {
                                            textContent: _vm._s(
                                              (
                                                ((product.initial_price -
                                                  product.price) /
                                                  product.initial_price) *
                                                100
                                              ).toFixed(0) + "% OFF"
                                            ),
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                test discount\n              "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "grid px-2 pt-2 pb-6" },
                                    [
                                      _c(
                                        "Link",
                                        {
                                          attrs: {
                                            href: "/product/" + product.id,
                                          },
                                        },
                                        [
                                          _c("div", {
                                            staticClass:
                                              "truncate font-semibold text-slate-700",
                                            class: hover ? "text-blue-500" : "",
                                            domProps: {
                                              textContent: _vm._s(
                                                product.title
                                              ),
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass:
                                              "text-slate-700 text-sm",
                                            domProps: {
                                              textContent: _vm._s(
                                                product.category.country
                                                  .currency +
                                                  product.price.toLocaleString()
                                              ),
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass:
                                              "line-through text-xs text-gray-500",
                                            domProps: {
                                              textContent: _vm._s(
                                                product.category.country
                                                  .currency +
                                                  product.initial_price.toLocaleString()
                                              ),
                                            },
                                          }),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex justify-between" },
                                        [
                                          _c("v-rating", {
                                            attrs: {
                                              value: product.rating,
                                              "background-color": "yellow ",
                                              color: "yellow darken-4",
                                              small: "",
                                              dense: "",
                                              readonly: "",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                small: "",
                                                elevation:
                                                  "\n                            ",
                                                icon: "",
                                                color: "orange",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.wishlist(
                                                    product.id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "orange" } },
                                                [_vm._v(" mdi-heart ")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ],
                  null,
                  true
                ),
              }),
            ],
            1
          )
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
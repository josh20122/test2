"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Seller_CompletedOrder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      drawer: false,
      pages: [{
        name: "Dashboard",
        icon: "mdi-menu",
        link: "/seller"
      }, {
        name: "All Products",
        icon: "mdi-menu",
        link: "/seller/products"
      }, {
        name: "Create Product",
        icon: "mdi-menu",
        link: "/seller/product/create"
      }, {
        name: "Pending Orders",
        icon: "mdi-menu",
        link: "/seller/pending-orders"
      }, {
        name: "All Orders",
        icon: "mdi-menu",
        link: "/seller/orders"
      }, {
        name: "Update Seller",
        icon: "mdi-menu",
        link: "/seller/shop/view"
      }, {
        name: "Completed Orders",
        icon: "mdi-menu",
        link: "/seller/completed-orders"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_SellerNavigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/SellerNavigation.vue */ "./resources/js/Pages/Layouts/SellerNavigation.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
  props: ["product", "filter"],
  layout: _Layouts_SellerNavigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      search: this.filter
    };
  },
  watch: {
    search: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(function (value) {
      this.$inertia.get("/search", {
        search: value
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    }, 500)
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

/***/ "./resources/js/Pages/Layouts/SellerNavigation.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Layouts/SellerNavigation.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerNavigation_vue_vue_type_template_id_73fe1bfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerNavigation.vue?vue&type=template&id=73fe1bfc& */ "./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=template&id=73fe1bfc&");
/* harmony import */ var _SellerNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerNavigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellerNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerNavigation_vue_vue_type_template_id_73fe1bfc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerNavigation_vue_vue_type_template_id_73fe1bfc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/SellerNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Seller/CompletedOrder.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Seller/CompletedOrder.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CompletedOrder_vue_vue_type_template_id_5a31191a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompletedOrder.vue?vue&type=template&id=5a31191a& */ "./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=template&id=5a31191a&");
/* harmony import */ var _CompletedOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompletedOrder.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompletedOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompletedOrder_vue_vue_type_template_id_5a31191a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CompletedOrder_vue_vue_type_template_id_5a31191a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Seller/CompletedOrder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompletedOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompletedOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompletedOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=template&id=73fe1bfc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=template&id=73fe1bfc& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerNavigation_vue_vue_type_template_id_73fe1bfc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerNavigation_vue_vue_type_template_id_73fe1bfc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerNavigation_vue_vue_type_template_id_73fe1bfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerNavigation.vue?vue&type=template&id=73fe1bfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=template&id=73fe1bfc&");


/***/ }),

/***/ "./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=template&id=5a31191a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=template&id=5a31191a& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompletedOrder_vue_vue_type_template_id_5a31191a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompletedOrder_vue_vue_type_template_id_5a31191a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompletedOrder_vue_vue_type_template_id_5a31191a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompletedOrder.vue?vue&type=template&id=5a31191a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=template&id=5a31191a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=template&id=73fe1bfc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/SellerNavigation.vue?vue&type=template&id=73fe1bfc& ***!
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
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        { attrs: { color: "drawer", app: "", value: _vm.drawer } },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c("v-img", {
                    attrs: { "max-width": "100", src: "/images/logo.png" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _vm._l(_vm.pages, function (page) {
                return _c(
                  "v-list-item",
                  { key: page.link },
                  [
                    _c(
                      "Link",
                      { attrs: { href: page.link } },
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", {
                              attrs: { color: "white" },
                              domProps: { textContent: _vm._s(page.icon) },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [
                        _c(
                          "Link",
                          { attrs: { href: page.link } },
                          [
                            _c("v-list-item-title", {
                              staticClass: "white--text",
                              domProps: { textContent: _vm._s(page.name) },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            "hide-on-scroll": "",
            flat: "",
            color: "blue darken-1",
          },
        },
        [
          _c("v-row", { attrs: { justify: "space-between" } }, [
            _c(
              "div",
              [
                _c("v-app-bar-nav-icon", {
                  staticClass: "white--text",
                  on: {
                    click: function ($event) {
                      _vm.drawer = !_vm.drawer
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "inline-flex space-x-2" },
              [
                _c("div", { staticClass: "white--text pt-3" }, [
                  _vm._v("Jpsnsnsnn"),
                ]),
                _vm._v(" "),
                _c(
                  "v-avatar",
                  [
                    _c("v-img", {
                      attrs: {
                        src: _vm.$page.props.user.auth.avatarPath,
                        alt: "",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("v-footer", { attrs: { app: "" } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=template&id=5a31191a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CompletedOrder.vue?vue&type=template&id=5a31191a& ***!
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
    "SellerNavigation",
    [
      _c(
        "v-container",
        {},
        [
          _c(
            "v-row",
            [
              _c("v-col", [
                _c("div", { staticClass: "title" }, [
                  _vm._v("Completed Orders"),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6", md: "4", lg: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      dense: "",
                      placeholder: "Search ...",
                      "append-icon": "mdi-magnify",
                    },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { dense: "" } },
            _vm._l(_vm.product.data, function (order) {
              return _c(
                "v-col",
                { key: order.id, attrs: { cols: "12", md: "4", sm: "6" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src: order.product[0].image[0].path,
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-col", [
                                _c("div", [
                                  _c("div", {
                                    staticClass: "text-gray-900 line-clamp-2",
                                    domProps: {
                                      textContent: _vm._s(
                                        order.product[0].title
                                      ),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "text-left text-gray-500",
                                    domProps: {
                                      textContent: _vm._s(
                                        "Amount: " + order.amount
                                      ),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "text-right text-gray-600",
                                    domProps: {
                                      textContent: _vm._s(
                                        "Ksh " + order.total.toLocaleString()
                                      ),
                                    },
                                  }),
                                ]),
                              ]),
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
              )
            }),
            1
          ),
          _vm._v("\n    " + _vm._s(_vm.search) + "\n  "),
        ],
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
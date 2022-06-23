"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Seller_ViewShop_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/ViewShop.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/ViewShop.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_SellerNavigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/SellerNavigation.vue */ "./resources/js/Pages/Layouts/SellerNavigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _Layouts_SellerNavigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: ["errors", "shop"],
  watch: {
    redirect: function redirect() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get("/seller");
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/seller/shop/update", this.form, {
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.processing = true;
          _this.timeout = 100000;
          _this.loading = true;
          _this.color = "yellow darken-3";
          _this.text = "  Processing ...";
        },
        onSuccess: function onSuccess() {
          _this.timeout = 3000;
          _this.color = "green darken-3";
          _this.text = "Submitted successfully, redirecting... ";
          _this.redirect = true;
          _this.loading = false;
        },
        onError: function onError() {
          _this.timeout = 2000;
          _this.loading = false;
          _this.color = "red darken-2";
          _this.text = "Failed, please check for any errors";
        }
      });
    }
  },
  data: function data() {
    return {
      required: [function (v) {
        return !!v || "This field is required";
      }],
      content: null,
      color: null,
      timeout: null,
      processing: null,
      loading: false,
      text: null,
      redirect: false,
      form: {
        name: this.shop.name,
        description: this.shop.description,
        sub_region: this.shop.sub_region,
        region: this.shop.region,
        city: this.shop.city,
        email: this.shop.email,
        phone_number: this.shop.phone_number
      }
    };
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

/***/ "./resources/js/Pages/Seller/ViewShop.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Seller/ViewShop.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewShop_vue_vue_type_template_id_03934fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewShop.vue?vue&type=template&id=03934fd2& */ "./resources/js/Pages/Seller/ViewShop.vue?vue&type=template&id=03934fd2&");
/* harmony import */ var _ViewShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewShop.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Seller/ViewShop.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewShop_vue_vue_type_template_id_03934fd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewShop_vue_vue_type_template_id_03934fd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Seller/ViewShop.vue"
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

/***/ "./resources/js/Pages/Seller/ViewShop.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Seller/ViewShop.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewShop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/ViewShop.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Seller/ViewShop.vue?vue&type=template&id=03934fd2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Seller/ViewShop.vue?vue&type=template&id=03934fd2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewShop_vue_vue_type_template_id_03934fd2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewShop_vue_vue_type_template_id_03934fd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewShop_vue_vue_type_template_id_03934fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewShop.vue?vue&type=template&id=03934fd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/ViewShop.vue?vue&type=template&id=03934fd2&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/ViewShop.vue?vue&type=template&id=03934fd2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/ViewShop.vue?vue&type=template&id=03934fd2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "seller-navigation",
    [
      _c(
        "v-container",
        {},
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "500" } },
                    [
                      _c("v-card-title", [
                        _vm._v("New Seller Application form"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c(
                                "v-row",
                                { attrs: { dense: "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Name of organisation",
                                          outlined: "",
                                          dense: "",
                                          "error-messages": _vm.errors.name,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "City",
                                          outlined: "",
                                          dense: "",
                                          "error-messages": _vm.errors.city,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.city,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "city", $$v)
                                          },
                                          expression: "form.city",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Region",
                                          outlined: "",
                                          dense: "",
                                          "error-messages": _vm.errors.region,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.region,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "region", $$v)
                                          },
                                          expression: "form.region",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Sub Region",
                                          outlined: "",
                                          dense: "",
                                          "error-messages":
                                            _vm.errors.sub_region,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.sub_region,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "sub_region",
                                              $$v
                                            )
                                          },
                                          expression: "form.sub_region",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          label: "Seller Description",
                                          outlined: "",
                                          dense: "",
                                          "error-messages":
                                            _vm.errors.description,
                                          counter: "256",
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.description,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "form.description",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Contact Email",
                                          outlined: "",
                                          dense: "",
                                          "error-messages": _vm.errors.email,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Contact Phone Number",
                                          outlined: "",
                                          dense: "",
                                          "error-messages":
                                            _vm.errors.phone_number,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.phone_number,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "phone_number",
                                              $$v
                                            )
                                          },
                                          expression: "form.phone_number",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "white--text",
                                          attrs: {
                                            elevation: "",
                                            color: "indigo",
                                            block: "",
                                          },
                                          on: { click: _vm.submit },
                                        },
                                        [_vm._v("Update")]
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
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          staticClass: "white--text",
          attrs: {
            timeout: _vm.timeout,
            color: _vm.color,
            tile: "",
            absolute: "",
            right: "",
            transition: "slide-x-reverse-transition",
          },
          model: {
            value: _vm.processing,
            callback: function ($$v) {
              _vm.processing = $$v
            },
            expression: "processing",
          },
        },
        [
          _c("div", {
            staticClass: "font-sembold text-lg",
            domProps: { textContent: _vm._s(_vm.text) },
          }),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
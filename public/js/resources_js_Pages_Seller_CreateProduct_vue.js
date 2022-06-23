"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Seller_CreateProduct_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CreateProduct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CreateProduct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _Layouts_SellerNavigation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/SellerNavigation.vue */ "./resources/js/Pages/Layouts/SellerNavigation.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["errors", "countries"],
  layout: _Layouts_SellerNavigation_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_1__.VueEditor
  },
  data: function data() {
    var _form;

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
      status: [{
        name: "Active",
        value: true
      }, {
        name: "Inactive",
        value: false
      }],
      form: (_form = {
        image1: null,
        country: null,
        image2: null,
        image3: null,
        image4: null,
        stock: null,
        image5: null,
        title: null,
        category: null
      }, _defineProperty(_form, "country", null), _defineProperty(_form, "status", null), _defineProperty(_form, "short_description", null), _defineProperty(_form, "long_description", null), _defineProperty(_form, "price", null), _defineProperty(_form, "initial_price", null), _form)
    };
  },
  methods: {
    create: function create() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/seller/product/store", this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.processing = true;
          _this.timeout = 100000;
          _this.loading = true;
          _this.color = "yellow darken-3";
          _this.text = "Product Upload is Processing ...";
        },
        onSuccess: function onSuccess() {
          _this.timeout = 3000;
          _this.color = "green darken-3";
          _this.text = "Product added successfully";
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
  watch: {
    redirect: function redirect() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get("/seller/products");
    }
  },
  computed: {
    currency: function currency() {
      for (var country = 0; country < this.countries.length; country++) {
        if (this.countries[country].id === this.form.country) {
          return this.countries[country].currency;
        }
      }
    },
    category: function category() {
      for (var country = 0; country < this.countries.length; country++) {
        if (this.countries[country].id === this.form.country) {
          console.log(this.countries[country].cartegory);
          return this.countries[country].cartegory;
        }
      }
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

/***/ "./resources/js/Pages/Seller/CreateProduct.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Seller/CreateProduct.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateProduct_vue_vue_type_template_id_3d7ed568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=template&id=3d7ed568& */ "./resources/js/Pages/Seller/CreateProduct.vue?vue&type=template&id=3d7ed568&");
/* harmony import */ var _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Seller/CreateProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateProduct_vue_vue_type_template_id_3d7ed568___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateProduct_vue_vue_type_template_id_3d7ed568___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Seller/CreateProduct.vue"
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

/***/ "./resources/js/Pages/Seller/CreateProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Seller/CreateProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CreateProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Seller/CreateProduct.vue?vue&type=template&id=3d7ed568&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Seller/CreateProduct.vue?vue&type=template&id=3d7ed568& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_3d7ed568___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_3d7ed568___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_3d7ed568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateProduct.vue?vue&type=template&id=3d7ed568& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CreateProduct.vue?vue&type=template&id=3d7ed568&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CreateProduct.vue?vue&type=template&id=3d7ed568&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Seller/CreateProduct.vue?vue&type=template&id=3d7ed568& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "display-1" }, [
                  _vm._v("Create Product"),
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
                { attrs: { sm: "4", cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Cover Image *"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              loading: _vm.loading,
                              disabled: _vm.loading,
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image1,
                            },
                            model: {
                              value: _vm.form.image1,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image1", $$v)
                              },
                              expression: "form.image1",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 2"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              loading: _vm.loading,
                              disabled: _vm.loading,
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image2,
                            },
                            model: {
                              value: _vm.form.image2,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image2", $$v)
                              },
                              expression: "form.image2",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 3"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              loading: _vm.loading,
                              disabled: _vm.loading,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image3,
                            },
                            model: {
                              value: _vm.form.image3,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image3", $$v)
                              },
                              expression: "form.image3",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 4"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              loading: _vm.loading,
                              disabled: _vm.loading,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image4,
                            },
                            model: {
                              value: _vm.form.image4,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image4", $$v)
                              },
                              expression: "form.image4",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 5"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              loading: _vm.loading,
                              disabled: _vm.loading,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image5,
                            },
                            model: {
                              value: _vm.form.image5,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image5", $$v)
                              },
                              expression: "form.image5",
                            },
                          }),
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
                "v-col",
                { attrs: { cols: "12", sm: "8" } },
                [
                  _c(
                    "v-card",
                    {
                      attrs: {
                        outlined: "",
                        loading: _vm.loading,
                        disabled: _vm.loading,
                      },
                    },
                    [
                      _c("v-card-title", [_vm._v(" Product Details ")]),
                      _vm._v(" "),
                      _c("v-divider", {}),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c(
                                "v-container",
                                { staticClass: "pa-0" },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { dense: "" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Title *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Product full title",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.title,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.title,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.form, "title", $$v)
                                              },
                                              expression: "form.title",
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
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Country *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-select", {
                                            attrs: {
                                              placeholder: "Please Select",
                                              outlined: "",
                                              "item-text": "country",
                                              "item-value": "id",
                                              items: _vm.countries,
                                              "error-messages":
                                                _vm.errors.country,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.country,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "country",
                                                  $$v
                                                )
                                              },
                                              expression: "form.country",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.form.country
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Product Category *")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-select", {
                                                attrs: {
                                                  placeholder: "Please Select",
                                                  outlined: "",
                                                  "item-text": "title",
                                                  "item-value": "id",
                                                  items: _vm.category,
                                                  "error-messages":
                                                    _vm.errors.category,
                                                  rules: _vm.required,
                                                },
                                                model: {
                                                  value: _vm.form.category,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "category",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.category",
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.form.country
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "" } },
                                                [_vm._v("Confirm Currency")]
                                              ),
                                              _vm._v(" "),
                                              _vm.form.country
                                                ? _c("v-text-field", {
                                                    attrs: {
                                                      readonly: "",
                                                      outlined: "",
                                                      dense: "",
                                                      value: _vm.currency,
                                                    },
                                                  })
                                                : _vm._e(),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Initial Price *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder:
                                                "Product initial price",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.initial_price,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.initial_price,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "initial_price",
                                                  $$v
                                                )
                                              },
                                              expression: "form.initial_price",
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
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Current Price *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder:
                                                "Product current price",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.price,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.price,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.form, "price", $$v)
                                              },
                                              expression: "form.price",
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
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Available Stock *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Available Stock",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              "error-messages":
                                                _vm.errors.stock,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.stock,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.form, "stock", $$v)
                                              },
                                              expression: "form.stock",
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
                                          _c("v-select", {
                                            attrs: {
                                              "error-messages":
                                                _vm.errors.status,
                                              label: "Product status",
                                              items: _vm.status,
                                              dense: "",
                                              outlined: "",
                                              "item-text": "name",
                                              "item-value": "value",
                                            },
                                            model: {
                                              value: _vm.form.status,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "status",
                                                  $$v
                                                )
                                              },
                                              expression: "form.status",
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
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Short Description *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-textarea", {
                                            attrs: {
                                              placeholder:
                                                "Short product description",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.short_description,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.short_description,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "short_description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.short_description",
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
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              " Full Description (Optional)"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("VueEditor", {
                                            model: {
                                              value: _vm.form.long_description,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "long_description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.long_description",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "text-xs text-red-500",
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.errors.long_description
                                              ),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-row", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex justify-end pb-4 pr-4",
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "white--text",
                                            attrs: {
                                              elevation: "",
                                              color: "blue",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.create()
                                              },
                                            },
                                          },
                                          [_vm._v("Create Product")]
                                        ),
                                      ],
                                      1
                                    ),
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
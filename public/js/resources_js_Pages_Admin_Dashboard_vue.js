"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/AdminNavigation.vue */ "./resources/js/Pages/Layouts/AdminNavigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ["user", "seller", "allcountry", "allCountry", "activeCountry", "category", "product"],
  data: function data() {
    return {
      cards: [{
        label: "test card one",
        color: "orange",
        link: "/admin/users",
        dark: "orange darken-1",
        text: "All Users",
        value: this.user,
        icon: "mdi-account",
        amount: 353
      }, {
        label: "test card one",
        color: "yellow darken-2",
        link: "/admin/shops",
        dark: "yellow darken-3",
        text: "All Sellers",
        value: this.seller,
        icon: "mdi-basket",
        amount: 353
      }, {
        label: "test card one",
        color: "purple",
        link: "/admin/products",
        dark: "purple darken-1",
        text: "All Products",
        value: this.product,
        icon: "mdi-car",
        amount: 353
      }, {
        label: "test card one",
        color: "red",
        link: "/admin/cartegory",
        dark: "red darken-1",
        text: "All Categories",
        value: this.category,
        icon: "mdi-cart",
        amount: 353
      }, {
        label: "test card one",
        color: "indigo",
        link: "/admin/country",
        dark: "indigo darken-1",
        text: "All countries",
        value: this.allCountry,
        icon: "mdi-motorbike",
        amount: 353
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["info"],
  name: "AdminNavigation",
  data: function data() {
    return {
      drawer: null,
      links: [{
        page: "dashboard",
        link: "/admin/dashboard",
        icon: "mdi-menu"
      }, {
        page: "All Users",
        link: "/admin/users",
        icon: "mdi-account-multiple"
      }, {
        page: "Update Admin",
        link: "/admin/update-admin",
        icon: "mdi-account-multiple"
      }],
      groups: [{
        title: "Cartegories",
        active: false,
        icon: "mdi-menu",
        pages: [{
          name: "All Categories",
          link: "/admin/cartegory",
          icon: "mdi-menu"
        }, {
          name: "Create Category",
          link: "/admin/cartegory/create",
          icon: "mdi-menu"
        }]
      }, {
        title: "Products",
        active: false,
        icon: "mdi-basket",
        pages: [{
          name: "All Products",
          link: "/admin/products",
          icon: "mdi-menu"
        }, {
          name: "Add Product",
          link: "/admin/product/create",
          icon: "mdi-menu"
        }]
      }, {
        title: "Sellers",
        active: false,
        icon: "mdi-bike",
        pages: [{
          name: "All Sellers",
          link: "/admin/shops",
          icon: "mdi-menu"
        }, {
          name: "Add Seller",
          link: "/admin/shop/create",
          icon: "mdi-menu"
        }]
      }, {
        title: "Countries",
        active: false,
        icon: "mdi-flag",
        pages: [{
          name: "All Countries",
          link: "/admin/country",
          icon: "mdi-menu"
        }, {
          name: "Add Country",
          link: "/admin/country/create",
          icon: "mdi-plus"
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4dff49ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4dff49ca& */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_4dff49ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_4dff49ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminNavigation.vue?vue&type=template&id=1dd00304& */ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&");
/* harmony import */ var _AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNavigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/AdminNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4dff49ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4dff49ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4dff49ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=4dff49ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&");


/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNavigation.vue?vue&type=template&id=1dd00304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca& ***!
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
    "AdminNavigation",
    [
      _c(
        "v-container",
        {},
        [
          _c(
            "v-row",
            _vm._l(_vm.cards, function (card) {
              return _c(
                "v-col",
                { key: card.link, attrs: { cols: "12", sm: "6", md: "4" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: card.color } },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "7" } }, [
                                _c("div", { staticClass: "grid" }, [
                                  _c("div", {
                                    staticClass:
                                      "text-gray-100 text-3xl font-extrabold",
                                    domProps: {
                                      textContent: _vm._s(card.value),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "text-gray-50 capitalize text-lg font-semibold",
                                    domProps: {
                                      textContent: _vm._s(card.text),
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "5" } }, [
                                _c(
                                  "div",
                                  { staticClass: "grid justify-end" },
                                  [
                                    _c("v-icon", {
                                      attrs: { "x-large": "" },
                                      domProps: {
                                        textContent: _vm._s(card.icon),
                                      },
                                    }),
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
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "Link",
                                { attrs: { href: card.link } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        depressed: "",
                                        tile: "",
                                        block: "",
                                        small: "",
                                        color: card.dark,
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "text-white font-semibold",
                                        },
                                        [_vm._v("Show more")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "white--text",
                                          attrs: { small: "", color: "white" },
                                        },
                                        [_vm._v("mdi-arrow-right")]
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
              )
            }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        {
          attrs: { app: "", color: "drawer" },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c("v-row", { attrs: { justify: "start" } }, [
                    _c(
                      "div",
                      [
                        _c("v-img", {
                          attrs: {
                            contain: "",
                            "max-height": "35",
                            src: "/storage/logo.png",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", {}),
              _vm._v(" "),
              _vm._l(_vm.links, function (page) {
                return _c(
                  "v-list-item",
                  { key: page.links },
                  [
                    _c(
                      "Link",
                      {
                        attrs: {
                          href: page.link,
                          "preserve-state": "",
                          "preserve-scroll": "",
                        },
                      },
                      [
                        _c(
                          "v-list-item-icon",
                          {},
                          [
                            _c("v-icon", {
                              attrs: { color: "grey lighten-4" },
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
                      {},
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: page.link,
                              "preserve-state": "",
                              "preserve-scroll": "",
                            },
                          },
                          [
                            _c("v-list-item-title", {
                              staticClass: "text-white capitalize",
                              domProps: { textContent: _vm._s(page.page) },
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
              _vm._v(" "),
              _vm._l(_vm.groups, function (group) {
                return _c(
                  "v-list-group",
                  {
                    key: group.name,
                    staticClass: "white--text",
                    attrs: {
                      "prepend-icon": group.icon,
                      color: "white",
                      "no-action": "",
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function () {
                            return [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", {
                                    staticClass: "white--text",
                                    domProps: {
                                      textContent: _vm._s(group.title),
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
                    model: {
                      value: group.active,
                      callback: function ($$v) {
                        _vm.$set(group, "active", $$v)
                      },
                      expression: "group.active",
                    },
                  },
                  [
                    _vm._v(" "),
                    _vm._l(group.pages, function (page) {
                      return _c(
                        "v-list-item",
                        { key: page.name },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c(
                                "Link",
                                {
                                  attrs: {
                                    href: page.link,
                                    "preserve-state": "",
                                    "preserve-scroll": "",
                                  },
                                },
                                [
                                  _c("v-icon", {
                                    attrs: { color: "white" },
                                    domProps: {
                                      textContent: _vm._s(page.icon),
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
                            "v-list-item-content",
                            [
                              _c(
                                "Link",
                                {
                                  attrs: {
                                    href: page.link,
                                    "preserve-state": "",
                                    "preserve-scroll": "",
                                  },
                                },
                                [
                                  _c("v-list-item-title", {
                                    staticClass: "white--text",
                                    domProps: {
                                      textContent: _vm._s(page.name),
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
                      )
                    }),
                  ],
                  2
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
            flat: "",
            color: "blue darken-1",
            app: "",
            "hide-on-scroll": "",
          },
        },
        [
          _c(
            "v-container",
            { staticClass: "py-0 fill-height px-0" },
            [
              _c(
                "v-row",
                { attrs: { justify: "space-between" } },
                [
                  _c("v-col", [
                    _c(
                      "div",
                      { staticClass: "grid justify-start" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              icon: "",
                              elevation: "",
                              color: "grey lighten-4",
                            },
                            on: {
                              click: function ($event) {
                                _vm.drawer = !_vm.drawer
                              },
                            },
                          },
                          [_c("v-icon", [_vm._v("mdi-menu")])],
                          1
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
          _vm._v(" "),
          _vm.info.auth
            ? _c(
                "Link",
                {
                  attrs: {
                    href: "/auth/logout",
                    "preserve-state": "",
                    "preserve-scroll": "",
                  },
                },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "", color: "white" } },
                    [
                      _c("v-icon", { attrs: { color: "white" } }, [
                        _vm._v(" mdi-logout "),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.info.auth
            ? _c(
                "v-avatar",
                [_c("v-img", { attrs: { src: _vm.info.auth.avatarPath } })],
                1
              )
            : _vm._e(),
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



/***/ })

}]);
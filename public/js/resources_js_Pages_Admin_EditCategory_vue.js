"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_EditCategory_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/AdminNavigation.vue */ "./resources/js/Pages/Layouts/AdminNavigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: ["errors", "path", "category", "countries"],
  data: function data() {
    return {
      required: [function (v) {
        return !!v || "This field is required";
      }],
      loading: false,
      processing: null,
      items: {
        countries: ["Kenya", "Nigeria", "Canada"],
        status: [{
          id: 1,
          text: "ACTIVE"
        }, {
          id: 2,
          text: "INACTIVE"
        }]
      },
      snack: {
        value: false,
        text: null
      },
      file: null,
      form: {
        title: this.category.title,
        country: this.category.country,
        description: this.category.description,
        status: this.category.status ? "ACTIVE" : "INACTIVE"
      }
    };
  },
  methods: {
    reset: function reset() {
      this.form.title = this.category.title;
      this.form.country = this.category.country;
      this.form.description = this.category.description;
      this.form.status = this.category.status ? "ACTIVE" : "INACTIVE";
    },
    updateInfo: function updateInfo() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/admin/cartegory/edit-info/".concat(this.category.id), this.form, {
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.loading = true;
        },
        onFinish: function onFinish() {
          _this.loading = false;
        },
        onSuccess: function onSuccess() {
          _this.snack.text = "Category Info has been successfully updated";
          _this.snack.value = "true";
        }
      });
    },
    uploadProfile: function uploadProfile() {
      var _this2 = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/admin/cartegory/edit-avatar/".concat(this.category.id), {
        avatar: this.file,
        trash: this.path
      }, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this2.loading = true;
          _this2.processing = true;
        },
        onFinish: function onFinish() {
          _this2.loading = false;
          _this2.processing = false;
        },
        onSuccess: function onSuccess() {
          _this2.snack.text = "Category Avatar has been successfully updated";
          _this2.snack.value = "true";
        }
      });
    }
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

/***/ "./resources/js/Pages/Admin/EditCategory.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Admin/EditCategory.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditCategory_vue_vue_type_template_id_2163e171___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCategory.vue?vue&type=template&id=2163e171& */ "./resources/js/Pages/Admin/EditCategory.vue?vue&type=template&id=2163e171&");
/* harmony import */ var _EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCategory.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/EditCategory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCategory_vue_vue_type_template_id_2163e171___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditCategory_vue_vue_type_template_id_2163e171___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/EditCategory.vue"
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

/***/ "./resources/js/Pages/Admin/EditCategory.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/EditCategory.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditCategory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Admin/EditCategory.vue?vue&type=template&id=2163e171&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/EditCategory.vue?vue&type=template&id=2163e171& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_template_id_2163e171___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_template_id_2163e171___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_template_id_2163e171___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditCategory.vue?vue&type=template&id=2163e171& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditCategory.vue?vue&type=template&id=2163e171&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditCategory.vue?vue&type=template&id=2163e171&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditCategory.vue?vue&type=template&id=2163e171& ***!
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
    "AdminNavigation",
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
                { attrs: { cols: "12", sm: "3" } },
                [
                  _c(
                    "v-row",
                    { attrs: { dense: "" } },
                    [
                      _c("v-col", [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("Cartegory Avatar"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-img", {
                            attrs: {
                              src: _vm.path,
                              "aspect-ratio": "1",
                              "max-height": "",
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
                            "v-form",
                            [
                              _c("div", { staticClass: "grid space-y-2" }, [
                                _vm.processing
                                  ? _c("label", {
                                      staticClass: "text-green-700",
                                      attrs: { for: "" },
                                      domProps: {
                                        textContent: _vm._s(_vm.processing),
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Update Avatar"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("v-file-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  counter: "",
                                  "show-size": "",
                                  rules: _vm.required,
                                  disabled: _vm.loading,
                                  loading: _vm.loading,
                                  "error-messages": _vm.errors.avatar,
                                  placeholder: "Update Profile",
                                },
                                model: {
                                  value: _vm.file,
                                  callback: function ($$v) {
                                    _vm.file = $$v
                                  },
                                  expression: "file",
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
                        "v-col",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "white--text",
                              attrs: {
                                elevation: "",
                                color: "blue",
                                disabled: _vm.loading,
                              },
                              on: { click: _vm.uploadProfile },
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
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "9" } },
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
                      _c("v-card-title", [_vm._v(" Edit Category Info ")]),
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
                                "v-row",
                                { attrs: { dense: "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Title"),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          placeholder: "Title",
                                          rules: _vm.required,
                                          "error-messages": _vm.errors.title,
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
                                        _vm._v(
                                          "Category Description (optional)"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-textarea", {
                                        attrs: {
                                          outlined: "",
                                          placeholder: "Description",
                                          rules: _vm.required,
                                          "error-messages":
                                            _vm.errors.description,
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
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Status"),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          outlined: "",
                                          placeholder: "status",
                                          items: _vm.items.status,
                                          itemid: _vm.items.status.id,
                                          value: _vm.items.status.id,
                                          "error-messages": _vm.errors.status,
                                          rules: _vm.required,
                                        },
                                        model: {
                                          value: _vm.form.status,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "status", $$v)
                                          },
                                          expression: "form.status",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-col"),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                {
                                  staticClass: "pr-4 pb-4",
                                  attrs: { justify: "end" },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "grid justify-end grid-cols-2 space-x-2",
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "white--text",
                                          attrs: {
                                            depressed: "",
                                            elevation: "",
                                            color: "yellow darken-2",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.reset()
                                            },
                                          },
                                        },
                                        [_vm._v("Reset")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "white--text",
                                          attrs: {
                                            depressed: "",
                                            elevation: "",
                                            color: "blue darken-2",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.updateInfo()
                                            },
                                          },
                                        },
                                        [_vm._v("Update")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
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
                "v-col",
                [
                  _c(
                    "v-snackbar",
                    {
                      staticClass: "white--text",
                      attrs: {
                        color: "green darken-2",
                        absolute: "",
                        transition: "slide-x-reverse-transition",
                        right: "",
                        top: "",
                        timeout: 3000,
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "action",
                          fn: function (ref) {
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._b(
                                  {
                                    attrs: { color: "red", text: "" },
                                    on: {
                                      click: function ($event) {
                                        _vm.snack.text = false
                                      },
                                    },
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                [_vm._v("\n              Close\n            ")]
                              ),
                            ]
                          },
                        },
                      ]),
                      model: {
                        value: _vm.snack.value,
                        callback: function ($$v) {
                          _vm.$set(_vm.snack, "value", $$v)
                        },
                        expression: "snack.value",
                      },
                    },
                    [
                      _c("div", {
                        domProps: { textContent: _vm._s(_vm.snack.text) },
                      }),
                    ]
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
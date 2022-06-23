"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_ResetPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    errors: {
      type: Object,
      required: false,
      "default": null
    },
    token: {
      required: false,
      type: String,
      "default": null
    }
  },
  mounted: function mounted() {
    this.form.token = this.token;
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/auth/reset-password", this.form, {
        onStart: function onStart() {
          _this.loading = true;
        },
        onFinish: function onFinish() {
          _this.loading = false;
        }
      });
    }
  },
  data: function data() {
    return {
      loading: false,
      ispassword: true,
      form: {
        email: null,
        password: null,
        password_confirmation: null,
        token: null
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=1da614ac& */ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/ResetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=1da614ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac& ***!
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
    "v-app",
    [
      _c(
        "v-container",
        { staticClass: "pa-0 fill-height" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto",
                      attrs: {
                        "max-width": "500px",
                        loading: _vm.loading,
                        disabled: _vm.loading,
                      },
                    },
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "display-1 text-center" },
                        [_vm._v("\n            Reset Password\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-email",
                                  type: "text",
                                  "error-messages": _vm.errors.email,
                                  label: "E-mail",
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email",
                                },
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-lock",
                                  type: _vm.ispassword ? "password" : "text",
                                  "error-messages": _vm.errors.password,
                                  "append-icon": _vm.ispassword
                                    ? "mdi-eye"
                                    : "mdi-eye-off",
                                  label: "New password",
                                },
                                on: {
                                  "click:append": function ($event) {
                                    _vm.ispassword = !_vm.ispassword
                                  },
                                },
                                model: {
                                  value: _vm.form.password,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "password", $$v)
                                  },
                                  expression: "form.password",
                                },
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-lock",
                                  type: "password",
                                  "error-messages":
                                    _vm.errors.password_confirmation,
                                  label: "Confirm password",
                                },
                                model: {
                                  value: _vm.form.password_confirmation,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.form,
                                      "password_confirmation",
                                      $$v
                                    )
                                  },
                                  expression: "form.password_confirmation",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "white--text",
                              attrs: {
                                disabled: _vm.loading,
                                elevation: "",
                                block: "",
                                color: "indigo",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.submit()
                                },
                                keyup: function ($event) {
                                  return _vm.submit()
                                },
                              },
                            },
                            [_vm._v("Reset Password")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
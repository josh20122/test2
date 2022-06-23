"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_EmailVerification_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/EmailVerification.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/EmailVerification.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      processing: null,
      text: null,
      timeout: null,
      textColor: null,
      loading: null,
      color: null
    };
  },
  methods: {
    verify: function verify() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/auth/email/verification-notification", null, {
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.processing = true;
          _this.timeout = 100000;
          _this.textColor = "text-green-600";
          _this.loading = true;
          _this.color = "yellow darken-3";
          _this.text = "Sending verification email ...";
        },
        onSuccess: function onSuccess() {
          _this.timeout = 3000;
          _this.color = "green darken-3";
          _this.textColor = "text-green-600";
          _this.text = "Email sent successfully";
          _this.loading = false;
        },
        onError: function onError() {
          _this.timeout = 2000;
          _this.loading = false;
          _this.textColor = "error--text";
          _this.color = "red darken-2";
          _this.text = "Failed, try again";
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Auth/EmailVerification.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Auth/EmailVerification.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailVerification_vue_vue_type_template_id_65e1800e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailVerification.vue?vue&type=template&id=65e1800e& */ "./resources/js/Pages/Auth/EmailVerification.vue?vue&type=template&id=65e1800e&");
/* harmony import */ var _EmailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailVerification.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/EmailVerification.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailVerification_vue_vue_type_template_id_65e1800e___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailVerification_vue_vue_type_template_id_65e1800e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/EmailVerification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/EmailVerification.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/EmailVerification.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailVerification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/EmailVerification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/EmailVerification.vue?vue&type=template&id=65e1800e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/EmailVerification.vue?vue&type=template&id=65e1800e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailVerification_vue_vue_type_template_id_65e1800e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailVerification_vue_vue_type_template_id_65e1800e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailVerification_vue_vue_type_template_id_65e1800e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailVerification.vue?vue&type=template&id=65e1800e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/EmailVerification.vue?vue&type=template&id=65e1800e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/EmailVerification.vue?vue&type=template&id=65e1800e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/EmailVerification.vue?vue&type=template&id=65e1800e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "verify" },
    [
      _c(
        "v-main",
        { staticClass: "verify" },
        [
          _c(
            "v-container",
            { staticClass: "fill-height" },
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto py-8",
                          class: _vm.$vuetify.breakpoint.smAndUp ? "px-8" : "",
                          attrs: { elevation: "10", "max-width": "500" },
                        },
                        [
                          _c("v-card-title", {}, [
                            _c("div", { staticClass: "text-2xl font-bold" }, [
                              _vm._v("Please confirm your email"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c("div", { staticClass: "grid space-y-2" }, [
                              _c("div", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  "\n                  Click the link in the message sent to your email addrsss\n                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v("Can't find the email?")]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n                  Make sure you have typed your email address correctly.\n                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v("Check your spam folder.")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _vm._v(
                                    "\n                  Still no email? Try again\n                  "
                                  ),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "blue--text",
                                      attrs: {
                                        small: "",
                                        elevation: "",
                                        depressed: "",
                                        color: "white",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.verify()
                                        },
                                      },
                                    },
                                    [_vm._v("here")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "text-sm green--text",
                                    class: _vm.textColor ? _vm.textColor : "",
                                    domProps: { textContent: _vm._s(_vm.text) },
                                  }),
                                ],
                                1
                              ),
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
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
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
                    top: "",
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
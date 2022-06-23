"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Components_Checkout_Address_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Checkout/Address.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Checkout/Address.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["errors", "phone"],
  methods: {
    next: function next() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/checkout/address", this.form, {});
    }
  },
  computed: {
    realPhone: function realPhone() {
      if (this.form.phone_number && this.form.second_phone_number) {
        this.form.phone_number = this.phone.toString() + this.form.phone_number;
        this.form.second_phone_number = this.phone.toString() + this.form.second_phone_number;
      }
    }
  },
  data: function data() {
    return {
      rules: {
        required: [function (v) {
          return !!v || "This field is required";
        }]
      },
      valid: false,
      form: {
        first_name: null,
        last_name: null,
        phone_number: null,
        second_phone_number: null,
        city: null,
        sub_region: null,
        region: null,
        delivery_address: null
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Components/Checkout/Address.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Components/Checkout/Address.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Address_vue_vue_type_template_id_31bb22eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=31bb22eb& */ "./resources/js/Pages/Components/Checkout/Address.vue?vue&type=template&id=31bb22eb&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Checkout/Address.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_31bb22eb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Address_vue_vue_type_template_id_31bb22eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Checkout/Address.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Checkout/Address.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Checkout/Address.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Checkout/Address.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Checkout/Address.vue?vue&type=template&id=31bb22eb&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Checkout/Address.vue?vue&type=template&id=31bb22eb& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_31bb22eb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_31bb22eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_31bb22eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Address.vue?vue&type=template&id=31bb22eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Checkout/Address.vue?vue&type=template&id=31bb22eb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Checkout/Address.vue?vue&type=template&id=31bb22eb&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Checkout/Address.vue?vue&type=template&id=31bb22eb& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      model: {
        value: _vm.valid,
        callback: function ($$v) {
          _vm.valid = $$v
        },
        expression: "valid",
      },
    },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { attrs: { dense: "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "label",
                            { staticClass: "capitalize", attrs: { for: "" } },
                            [_vm._v("first name")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              placeholder: "First Name",
                              dense: "",
                              outlined: "",
                              rules: _vm.rules.required,
                              "error-messages": _vm.errors.first_name,
                            },
                            model: {
                              value: _vm.form.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "first_name", $$v)
                              },
                              expression: "form.first_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c(
                            "label",
                            { staticClass: "capitalize", attrs: { for: "" } },
                            [_vm._v("last name")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              placeholder: "Last Name",
                              dense: "",
                              "error-messages": _vm.errors.last_name,
                              rules: _vm.rules.required,
                              outlined: "",
                            },
                            model: {
                              value: _vm.form.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "last_name", $$v)
                              },
                              expression: "form.last_name",
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
                { attrs: { cols: "12" } },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Contac Phone Number"),
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      prefix: "+" + _vm.phone,
                      rules: _vm.rules.required,
                      "error-messages": _vm.errors.phone_number,
                      dense: "",
                      placeholder: "+234******",
                    },
                    model: {
                      value: _vm.form.phone_number,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "phone_number", $$v)
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Contact Phone Number 2 (optional)"),
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      prefix: "+" + _vm.phone,
                      outlined: "",
                      "error-messages": _vm.errors.second_phone_number,
                      rules: _vm.rules.required,
                      dense: "",
                      placeholder: "+234******",
                    },
                    model: {
                      value: _vm.form.second_phone_number,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "second_phone_number", $$v)
                      },
                      expression: "form.second_phone_number",
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("City")]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      rules: _vm.rules.required,
                      dense: "",
                      "error-messages": _vm.errors.city,
                      "small-chips": "",
                      placeholder: "Enter city",
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("State / Region"),
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.errors.region,
                      outlined: "",
                      rules: _vm.rules.required,
                      dense: "",
                      "small-chips": "",
                      placeholder: "Enter region",
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
              _vm._v("\n      " + _vm._s(_vm.realPhone) + "\n      "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Sub-region")]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      rules: _vm.rules.required,
                      "error-messages": _vm.errors.sub_region,
                      dense: "",
                      "small-chips": "",
                      placeholder: "Enter sub-region",
                    },
                    model: {
                      value: _vm.form.sub_region,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "sub_region", $$v)
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Delivery Address"),
                  ]),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      outlined: "",
                      dense: "",
                      "error-messages": _vm.errors.delivery_address,
                      rules: _vm.rules.required,
                      co: "",
                      placeholder: "Street Name / Apartment No",
                    },
                    model: {
                      value: _vm.form.delivery_address,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "delivery_address", $$v)
                      },
                      expression: "form.delivery_address",
                    },
                  }),
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
                        depressed: "",
                        elevation: "",
                        block: "",
                        color: "purple ",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.next()
                        },
                      },
                    },
                    [
                      _c("span", [_vm._v("Next")]),
                      _vm._v(" "),
                      _c("v-icon", { attrs: { right: "", color: "" } }, [
                        _vm._v("mdi-arrow-right"),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
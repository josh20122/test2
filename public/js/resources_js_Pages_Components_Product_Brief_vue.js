"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Components_Product_Brief_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product/Brief.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product/Brief.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["product", "currency"],
  data: function data() {
    return {
      num: 626276272,
      amount: 1
    };
  },
  methods: {
    toCart: function toCart(id) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put("/cart/create/".concat(id), {
        amount: this.amount
      }, {
        preserveScroll: true,
        preserveState: true
      });
    },
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

/***/ "./resources/js/Pages/Components/Product/Brief.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Components/Product/Brief.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Brief_vue_vue_type_template_id_6a37a00a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brief.vue?vue&type=template&id=6a37a00a& */ "./resources/js/Pages/Components/Product/Brief.vue?vue&type=template&id=6a37a00a&");
/* harmony import */ var _Brief_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brief.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Product/Brief.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Brief_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brief_vue_vue_type_template_id_6a37a00a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Brief_vue_vue_type_template_id_6a37a00a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Product/Brief.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Product/Brief.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Product/Brief.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brief_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Brief.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product/Brief.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brief_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Product/Brief.vue?vue&type=template&id=6a37a00a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Product/Brief.vue?vue&type=template&id=6a37a00a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brief_vue_vue_type_template_id_6a37a00a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brief_vue_vue_type_template_id_6a37a00a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brief_vue_vue_type_template_id_6a37a00a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Brief.vue?vue&type=template&id=6a37a00a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product/Brief.vue?vue&type=template&id=6a37a00a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product/Brief.vue?vue&type=template&id=6a37a00a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Product/Brief.vue?vue&type=template&id=6a37a00a& ***!
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
    { staticClass: "grid space-y-2" },
    [
      _c("div", {
        staticClass: "text-2xl font-bold",
        domProps: { textContent: _vm._s(_vm.product.title) },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex" },
        [
          _c("v-rating", {
            attrs: {
              "background-color": "yellow",
              readonly: "",
              value: _vm.product.rating,
              color: "yellow darken-4",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { staticClass: "w-14" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "text-lg space-x-2 font-bold",
          class: _vm.$vuetify.breakpoint.xs ? "grid" : "flex",
        },
        [
          _c("span", {
            domProps: {
              textContent: _vm._s(
                _vm.currency + _vm.product.price.toLocaleString()
              ),
            },
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "line-through text-gray-500",
            domProps: {
              textContent: _vm._s(
                _vm.currency + _vm.product.initial_price.toLocaleString()
              ),
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { domProps: { textContent: _vm._s(_vm.product.short_description) } },
        [
          _vm._v(
            "\n    Pellentesque habitant morbi tristique senectus et netus et malesuada fames\n    ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,\n    tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.\n    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.\n  "
          ),
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "inline-flex space-x-3" },
        [
          _c(
            "div",
            {
              staticClass:
                "grid grid-cols-3 border-2 border-blue-500 rounded-md w-28",
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue-500 px-2 rounded-sm font-semibold text-white",
                  on: {
                    click: function ($event) {
                      _vm.amount -= 1
                    },
                  },
                },
                [_vm._v("\n        -\n      ")]
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "mx-auto",
                domProps: { textContent: _vm._s(_vm.amount) },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue-500 px-2 rounded-sm font-semibold text-white",
                  on: {
                    click: function ($event) {
                      _vm.amount += 1
                    },
                  },
                },
                [_vm._v("\n        +\n      ")]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "white--text",
              attrs: { elevation: "", color: "blue" },
              on: {
                click: function ($event) {
                  return _vm.toCart(_vm.product.id)
                },
              },
            },
            [_vm._v("Add to cart")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex d-none" }, [
      _c("span", [_vm._v(" Color :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex d-none space-x-2" }, [
      _c("div", { staticClass: "uppercase" }, [_vm._v("size :")]),
      _vm._v(" "),
      _c("div", { staticClass: "flex space-x-2" }, [
        _c("div", { staticClass: "border-2 px-1 uppercase" }, [_vm._v("l")]),
        _vm._v(" "),
        _c("div", { staticClass: "border-2 px-1 uppercase" }, [_vm._v("m")]),
        _vm._v(" "),
        _c("div", { staticClass: "border-2 px-1 uppercase" }, [_vm._v("s")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
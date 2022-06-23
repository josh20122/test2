"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Views_Home_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Carousel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Carousel.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [{
        image: "/images/edited-slide-2.jpg"
      }, {
        image: "/images/slide-2.jpg"
      }, {
        image: "/images/slide-3.png"
      }]
    };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Like.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Like.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Product: _Product_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Cards: _Cards_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["currency", "products"],
  data: function data() {
    return {
      more: {
        link: "/featured"
      } // Like: [
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Products.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: [{
        img: "images/electron.jpg"
      }, {
        img: "images/cars.jpg"
      }, {
        img: "images/estate.jpg"
      }, {
        img: "images/estate.jpg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/SideNav.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/SideNav.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["category"],
  data: function data() {
    return {
      links: ["Dashboard", "Messages", "Profile", "Updates"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/TopRated.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/TopRated.vue?vue&type=script&lang=js& ***!
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
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["filter", "title", "info"],
  watch: {
    query: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (value) {
      this.$inertia.get("/search", {
        search: value
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    }, 300)
  },
  data: function data() {
    return {
      query: this.filter,
      buttons: [{
        page: "home",
        icon: "mdi-home-circle",
        link: "/"
      }, // { page: "cartegories", icon: "mdi-menu", link: "/categories" },
      {
        page: "wishlist",
        icon: "mdi-heart",
        link: "/wishlist"
      }, {
        page: "cart",
        icon: "mdi-cart",
        link: "/cart"
      }, {
        page: "Account",
        icon: "mdi-account-circle-outline",
        link: "/account"
      }],
      topLinks: [{
        page: "home",
        icon: "mdi-home-circle",
        link: "/"
      }, {
        page: "wishlist",
        icon: "mdi-heart",
        link: "/wishlist"
      }, {
        page: "cart",
        icon: "mdi-cart",
        link: "/cart"
      }, {
        page: "Account",
        icon: "mdi-account-circle-outline",
        link: "/account"
      }],
      drawer: false,
      icons: [{
        icon: "mdi-facebook",
        link: "www.facebook.com"
      }, {
        icon: "mdi-twitter",
        link: "www.twitter.com"
      }, {
        icon: "mdi-instagram",
        link: "www.instagrem.com"
      }, {
        icon: "mdi-pintrest",
        link: "www.pintrest.com"
      }],
      contacts: [{
        item: "contact",
        value: "Thika 9999"
      }, {
        item: "phone",
        value: "+254627272"
      }, {
        item: "email",
        value: "sgshshsj@sjsjs.com"
      }, {
        item: "hours",
        value: "all time"
      }],
      links: {
        about: [{
          page: "about us",
          link: "/about"
        }, {
          page: "privacy policy",
          link: "/privacy"
        }, {
          page: "terms & conditions",
          link: "/terms"
        }, {
          page: "Contact us",
          link: "/contact"
        }],
        account: [{
          page: "my account",
          link: "/account"
        }, {
          page: "view cart",
          link: "/cart"
        }, {
          page: "order history",
          link: "/orders"
        }, {
          page: "wish list",
          link: "/orders"
        }, {
          page: "newsletter",
          link: "/newsletter"
        }],
        customer: [{
          page: "help center",
          link: "/help"
        }, {
          page: "returns",
          link: "/return "
        }, {
          page: "shipping",
          link: "/shipping"
        }, {
          page: "gift card",
          link: "/gift"
        }, {
          page: "Track order",
          link: "/track"
        }]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Home_Carousel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Home/Carousel.vue */ "./resources/js/Pages/Components/Home/Carousel.vue");
/* harmony import */ var _Components_Home_Featured_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Home/Featured.vue */ "./resources/js/Pages/Components/Home/Featured.vue");
/* harmony import */ var _Components_Home_Like_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Home/Like.vue */ "./resources/js/Pages/Components/Home/Like.vue");
/* harmony import */ var _Components_Home_Products_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Home/Products.vue */ "./resources/js/Pages/Components/Home/Products.vue");
/* harmony import */ var _Components_Home_SideNav_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Home/SideNav.vue */ "./resources/js/Pages/Components/Home/SideNav.vue");
/* harmony import */ var _Components_Home_TopRated_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Home/TopRated.vue */ "./resources/js/Pages/Components/Home/TopRated.vue");
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layouts/Navigation.vue */ "./resources/js/Pages/Layouts/Navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["categories", "featured", "topRated"],
  layout: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
  components: {
    SideNav: _Components_Home_SideNav_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Carousel: _Components_Home_Carousel_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Products: _Components_Home_Products_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Featured: _Components_Home_Featured_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TopRated: _Components_Home_TopRated_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Like: _Components_Home_Like_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      currency: "Ksh"
    };
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

/***/ "./resources/js/Pages/Components/Home/Carousel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Carousel.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carousel_vue_vue_type_template_id_7b8ed680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=7b8ed680& */ "./resources/js/Pages/Components/Home/Carousel.vue?vue&type=template&id=7b8ed680&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/Carousel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_7b8ed680___WEBPACK_IMPORTED_MODULE_0__.render,
  _Carousel_vue_vue_type_template_id_7b8ed680___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/Carousel.vue"
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

/***/ "./resources/js/Pages/Components/Home/Like.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Like.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Like_vue_vue_type_template_id_9d989592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Like.vue?vue&type=template&id=9d989592& */ "./resources/js/Pages/Components/Home/Like.vue?vue&type=template&id=9d989592&");
/* harmony import */ var _Like_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Like.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/Like.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Like_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Like_vue_vue_type_template_id_9d989592___WEBPACK_IMPORTED_MODULE_0__.render,
  _Like_vue_vue_type_template_id_9d989592___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/Like.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Products.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Products.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_528ea484___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=528ea484& */ "./resources/js/Pages/Components/Home/Products.vue?vue&type=template&id=528ea484&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_528ea484___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_528ea484___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Home/SideNav.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Components/Home/SideNav.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNav_vue_vue_type_template_id_a4d0ed48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav.vue?vue&type=template&id=a4d0ed48& */ "./resources/js/Pages/Components/Home/SideNav.vue?vue&type=template&id=a4d0ed48&");
/* harmony import */ var _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/SideNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideNav_vue_vue_type_template_id_a4d0ed48___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideNav_vue_vue_type_template_id_a4d0ed48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/SideNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Components/Home/TopRated.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Components/Home/TopRated.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopRated_vue_vue_type_template_id_f531be62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopRated.vue?vue&type=template&id=f531be62& */ "./resources/js/Pages/Components/Home/TopRated.vue?vue&type=template&id=f531be62&");
/* harmony import */ var _TopRated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopRated.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Components/Home/TopRated.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopRated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopRated_vue_vue_type_template_id_f531be62___WEBPACK_IMPORTED_MODULE_0__.render,
  _TopRated_vue_vue_type_template_id_f531be62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Components/Home/TopRated.vue"
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

/***/ "./resources/js/Pages/Layouts/Navigation.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=706ae5e3& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Views/Home.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Views/Home.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=3faefa69& */ "./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Views/Home.vue"
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

/***/ "./resources/js/Pages/Components/Home/Carousel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Carousel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Carousel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Components/Home/Like.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Like.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Like_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Like.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Like.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Like_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Home/Products.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Products.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Home/SideNav.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/SideNav.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/SideNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Components/Home/TopRated.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/TopRated.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopRated.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/TopRated.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Pages/Components/Home/Carousel.vue?vue&type=template&id=7b8ed680&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Carousel.vue?vue&type=template&id=7b8ed680& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7b8ed680___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7b8ed680___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7b8ed680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Carousel.vue?vue&type=template&id=7b8ed680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Carousel.vue?vue&type=template&id=7b8ed680&");


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

/***/ "./resources/js/Pages/Components/Home/Like.vue?vue&type=template&id=9d989592&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Like.vue?vue&type=template&id=9d989592& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Like_vue_vue_type_template_id_9d989592___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Like_vue_vue_type_template_id_9d989592___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Like_vue_vue_type_template_id_9d989592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Like.vue?vue&type=template&id=9d989592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Like.vue?vue&type=template&id=9d989592&");


/***/ }),

/***/ "./resources/js/Pages/Components/Home/Products.vue?vue&type=template&id=528ea484&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/Products.vue?vue&type=template&id=528ea484& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_528ea484___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_528ea484___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_528ea484___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=528ea484& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Products.vue?vue&type=template&id=528ea484&");


/***/ }),

/***/ "./resources/js/Pages/Components/Home/SideNav.vue?vue&type=template&id=a4d0ed48&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/SideNav.vue?vue&type=template&id=a4d0ed48& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_a4d0ed48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_a4d0ed48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_a4d0ed48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNav.vue?vue&type=template&id=a4d0ed48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/SideNav.vue?vue&type=template&id=a4d0ed48&");


/***/ }),

/***/ "./resources/js/Pages/Components/Home/TopRated.vue?vue&type=template&id=f531be62&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Components/Home/TopRated.vue?vue&type=template&id=f531be62& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRated_vue_vue_type_template_id_f531be62___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRated_vue_vue_type_template_id_f531be62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRated_vue_vue_type_template_id_f531be62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopRated.vue?vue&type=template&id=f531be62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/TopRated.vue?vue&type=template&id=f531be62&");


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

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=706ae5e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&");


/***/ }),

/***/ "./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_3faefa69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=3faefa69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Carousel.vue?vue&type=template&id=7b8ed680&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Carousel.vue?vue&type=template&id=7b8ed680& ***!
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
    "v-carousel",
    {
      staticClass: "ma-0 pa-0",
      attrs: {
        "reverse-transition": "fade-transition",
        interval: "4000",
        "hide-delimiter-background": "",
        transition: "fade-transition",
        cycle: "",
        continuous: "",
      },
    },
    _vm._l(_vm.items, function (item) {
      return _c(
        "v-carousel-item",
        { key: item.image, attrs: { src: item.image } },
        [
          _c("div", { staticClass: "mt-64" }, [
            _c("div", { staticClass: "display-3" }),
          ]),
        ]
      )
    }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Like.vue?vue&type=template&id=9d989592&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Like.vue?vue&type=template&id=9d989592& ***!
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
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _vm.$vuetify.breakpoint.smAndUp
            ? _c("Cards", {
                attrs: {
                  products: _vm.products,
                  currency: "Ksh",
                  more: "/fearuesgs",
                  title: "You may also like",
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$vuetify.breakpoint.xsOnly
            ? _c("Product", {
                attrs: {
                  more: "/featured",
                  title: "You may also like",
                  currency: "Ksh",
                  products: _vm.products,
                },
              })
            : _vm._e(),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Products.vue?vue&type=template&id=528ea484&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/Products.vue?vue&type=template&id=528ea484& ***!
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
    "v-row",
    _vm._l(_vm.products, function (product, index) {
      return _c(
        "v-col",
        { key: index, attrs: { cols: "12", sm: "4", md: "3" } },
        [
          _c(
            "v-card",
            { attrs: { height: "", outlined: "" } },
            [_c("v-img", { attrs: { src: "images/estate.jpg" } })],
            1
          ),
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/SideNav.vue?vue&type=template&id=a4d0ed48&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/SideNav.vue?vue&type=template&id=a4d0ed48& ***!
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
    "v-card",
    { attrs: { rounded: "lg", outlined: "" } },
    [
      _c(
        "v-list",
        { attrs: { color: "transparent" } },
        [
          _c(
            "v-list-item",
            [_c("v-list-item-title", [_vm._v(" Categories ")])],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.category, function (item) {
            return _c(
              "v-list-item",
              { key: item.id },
              [
                _c(
                  "Link",
                  { attrs: { href: "/category/" + item.id } },
                  [
                    _c(
                      "v-list-item-avatar",
                      [
                        _c("v-img", {
                          attrs: { height: "50", src: item.image.path },
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
                      { attrs: { href: "/category/" + item.id } },
                      [
                        _c("v-list-item-title", [
                          _c("span", {
                            staticClass: "text-sm text-gray-900 truncate",
                            domProps: { textContent: _vm._s(item.title) },
                          }),
                        ]),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/TopRated.vue?vue&type=template&id=f531be62&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Components/Home/TopRated.vue?vue&type=template&id=f531be62& ***!
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
      _vm.$vuetify.breakpoint.smAndUp
        ? _c("Cards", {
            attrs: {
              products: _vm.products,
              currency: _vm.currency,
              title: "Top Rated",
              more: "/fearuesgs",
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.xsOnly
        ? _c("Product", {
            attrs: {
              more: "/featured",
              title: "Top Rated",
              currency: "Ksh",
              products: _vm.products,
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3& ***!
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
        "v-app-bar",
        { attrs: { app: "", flat: "", "fade-img-on-scroll": "" } },
        [
          _vm.$vuetify.breakpoint.xsOnly
            ? _c(
                "div",
                { staticClass: "flex justify-end" },
                [
                  _c(
                    "v-responsive",
                    { attrs: { "min-width": "340" } },
                    [
                      _vm.$vuetify.breakpoint.xsOnly
                        ? _c("v-text-field", {
                            attrs: {
                              clearable: "",
                              "prepend-inner-icon": "mdi-magnify",
                              placeholder: "Search ...",
                              rounded: "",
                              dense: "",
                              "hide-details": "",
                              outlined: "",
                            },
                            model: {
                              value: _vm.query,
                              callback: function ($$v) {
                                _vm.query = $$v
                              },
                              expression: "query",
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-container",
            { staticClass: "py-0 fill-height" },
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c(
                      "div",
                      { staticClass: "inline-flex" },
                      [
                        _vm.$vuetify.breakpoint.smAndUp
                          ? _c("v-img", {
                              attrs: {
                                "max-width": "70",
                                transition: "expand-transition",
                                contain: "",
                                src: "/essantials/logo.png",
                              },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mx-6" },
                          [
                            _vm.$vuetify.breakpoint.smAndUp
                              ? _c(
                                  "v-menu",
                                  {
                                    staticClass: "mx-6",
                                    attrs: { "offset-y": "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "div",
                                                { staticClass: "flex" },
                                                [
                                                  _vm.info.country.flag
                                                    ? _c(
                                                        "v-avatar",
                                                        {
                                                          attrs: {
                                                            right: "",
                                                            size: "x-small",
                                                          },
                                                        },
                                                        [
                                                          _c("img", {
                                                            attrs: {
                                                              src: _vm.info
                                                                .country.flag,
                                                              alt: "",
                                                            },
                                                          }),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            depressed: "",
                                                            elevation: "",
                                                            color: "",
                                                          },
                                                          domProps: {
                                                            textContent: _vm._s(
                                                              _vm.info.country
                                                                .name
                                                            ),
                                                          },
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("div", {
                                                        domProps: {
                                                          textContent: _vm._s(
                                                            _vm.info.country
                                                              .name
                                                          ),
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      false,
                                      2525636492
                                    ),
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-list",
                                      { attrs: { dense: "" } },
                                      _vm._l(
                                        _vm.info.countries,
                                        function (country, index) {
                                          return _c(
                                            "v-list-item",
                                            {
                                              key: index,
                                              attrs: { dense: "" },
                                            },
                                            [
                                              _c(
                                                "v-list-item-avatar",
                                                [
                                                  country.image
                                                    ? _c("v-img", {
                                                        attrs: {
                                                          src: country.image
                                                            .path,
                                                        },
                                                      })
                                                    : _vm._e(),
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
                                                        href: "/set-country",
                                                        data: {
                                                          id: country.id,
                                                        },
                                                        method: "PUT",
                                                        "preserve-scroll": "",
                                                        as: "button",
                                                      },
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          _vm._s(
                                                            country.country
                                                          )
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
                                          )
                                        }
                                      ),
                                      1
                                    ),
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
                  ]),
                  _vm._v(" "),
                  _c("v-col"),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mx-auto" },
                    [
                      _vm.$vuetify.breakpoint.smAndUp
                        ? _c(
                            "v-responsive",
                            { attrs: { "min-width": "340" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  clearable: "",
                                  width: "100",
                                  "prepend-inner-icon": "mdi-magnify",
                                  placeholder: "Search ...",
                                  rounded: "",
                                  dense: "",
                                  "hide-details": "",
                                  outlined: "",
                                },
                                model: {
                                  value: _vm.query,
                                  callback: function ($$v) {
                                    _vm.query = $$v
                                  },
                                  expression: "query",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$vuetify.breakpoint.mdAndUp
                    ? _c(
                        "v-col",
                        { staticClass: "flex space-x-3" },
                        _vm._l(_vm.topLinks, function (link) {
                          return _c(
                            "Link",
                            {
                              key: link.link,
                              staticClass: "capitalize",
                              attrs: { href: link.link },
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    large: "",
                                    elevation: "",
                                    color: "",
                                    icon: "",
                                  },
                                },
                                [
                                  _c("v-icon", {
                                    attrs: { large: "", color: "" },
                                    domProps: {
                                      textContent: _vm._s(link.icon),
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        }),
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
          _vm.$vuetify.breakpoint.smAndUp && _vm.$page.props.info.auth
            ? _c(
                "Link",
                { attrs: { href: "/auth/logout" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" } },
                    [
                      _c("v-icon", { attrs: { color: "blue lighten-1" } }, [
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
          _vm.$vuetify.breakpoint.smAndUp && _vm.$page.props.info.auth
            ? _c(
                "v-avatar",
                [
                  _c("v-img", {
                    attrs: { src: _vm.$page.props.info.auth.avatarPath },
                  }),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.xsOnly
        ? _c(
            "v-app-bar",
            { attrs: { bottom: "", app: "", dense: "", "hide-on-scroll": "" } },
            [
              _c(
                "div",
                { staticClass: "flex justify-between" },
                _vm._l(_vm.buttons, function (bottom) {
                  return _c(
                    "Link",
                    {
                      key: bottom.link,
                      staticClass: "text-center",
                      attrs: { href: bottom.link },
                    },
                    [
                      _c("v-icon", {
                        domProps: { textContent: _vm._s(bottom.icon) },
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "text-xs capitalize",
                        domProps: { textContent: _vm._s(bottom.page) },
                      }),
                    ],
                    1
                  )
                }),
                1
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-main", { staticClass: "main pb-8" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "v-footer",
        { staticClass: "pt-12", attrs: { padless: "", color: "drawer" } },
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
                    { attrs: { cols: "6", sm: "4", md: "3" } },
                    [
                      _c(
                        "div",
                        { staticClass: "font-bold capitalize text-gray-200" },
                        [_vm._v("contact")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.contacts, function (contact) {
                        return _c("div", { key: contact.item }, [
                          _c("div", {
                            staticClass: "font-bold text-gray-200",
                            domProps: {
                              textContent: _vm._s(contact.item + " :"),
                            },
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "text-gray-200",
                            domProps: { textContent: _vm._s(contact.value) },
                          }),
                        ])
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", sm: "4", md: "3" } },
                    [
                      _c(
                        "div",
                        { staticClass: "font-bold capitalize text-gray-200" },
                        [_vm._v("About Us")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.links.about, function (item) {
                        return _c(
                          "div",
                          { key: item.page },
                          [
                            _c("Link", {
                              staticClass: "text-gray-200",
                              attrs: { href: item.link },
                              domProps: { textContent: _vm._s(item.page) },
                            }),
                          ],
                          1
                        )
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", sm: "4", md: "3" } },
                    [
                      _c(
                        "div",
                        { staticClass: "font-bold capitalize text-gray-200" },
                        [_vm._v("My Account")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.links.account, function (item) {
                        return _c(
                          "div",
                          { key: item.page },
                          [
                            _c("Link", {
                              staticClass: "text-gray-200",
                              attrs: { href: item.link },
                              domProps: { textContent: _vm._s(item.page) },
                            }),
                          ],
                          1
                        )
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", sm: "4", md: "3" } },
                    [
                      _c(
                        "div",
                        { staticClass: "font-bold capitalize text-gray-200" },
                        [_vm._v("\n            Customer Service\n          ")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.links.customer, function (item) {
                        return _c(
                          "div",
                          { key: item.page },
                          [
                            _c("Link", {
                              staticClass: "text-gray-200",
                              attrs: { href: item.link },
                              domProps: { textContent: _vm._s(item.page) },
                            }),
                          ],
                          1
                        )
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("v-col", [
                    _c("div", { staticClass: "grid text-center" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "underline font-bold capitalize mb-2 text-gray-200",
                        },
                        [_vm._v("\n              follow us\n            ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        _vm._l(_vm.icons, function (icon) {
                          return _c(
                            "Link",
                            { key: icon.link, attrs: { href: icon.link } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    small: "",
                                    elevation: "",
                                    icon: "",
                                    color: "",
                                  },
                                },
                                [
                                  _c("v-icon", {
                                    attrs: { color: "main" },
                                    domProps: {
                                      textContent: _vm._s(icon.icon),
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        }),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/Home.vue?vue&type=template&id=3faefa69& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "v-container",
    {},
    [
      _c(
        "v-row",
        {},
        [
          _c(
            "v-col",
            { staticClass: "d-none d-sm-flex", attrs: { cols: "3" } },
            [_c("SideNav", { attrs: { category: _vm.categories } })],
            1
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", sm: "9" } }, [_c("Carousel")], 1),
          _vm._v(" "),
          _vm.$vuetify.breakpoint.smAndUp
            ? _c("v-col", { attrs: { cols: "12" } }, [_c("Products")], 1)
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("Featured", {
                attrs: { currency: _vm.currency, products: _vm.featured },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("TopRated", {
                attrs: { currency: _vm.currency, products: _vm.topRated },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("Like", {
                attrs: { currency: _vm.currency, products: _vm.featured },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
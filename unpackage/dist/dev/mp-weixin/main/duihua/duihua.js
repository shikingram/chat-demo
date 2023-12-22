(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["main/duihua/duihua"],{

/***/ 208:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main.js?{"page":"main%2Fduihua%2Fduihua"} ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _duihua = _interopRequireDefault(__webpack_require__(/*! ./main/duihua/duihua.vue */ 209));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_duihua.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 209:
/*!*************************************************************************************************************!*\
  !*** C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duihua.vue?vue&type=template&id=28858d27& */ 210);
/* harmony import */ var _duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duihua.vue?vue&type=script&lang=js& */ 212);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duihua.vue?vue&type=style&index=0&lang=scss& */ 214);
/* harmony import */ var _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);

var renderjs





/* normalize component */

var component = Object(_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["render"],
  _duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "main/duihua/duihua.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 210:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue?vue&type=template&id=28858d27& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./duihua.vue?vue&type=template&id=28858d27& */ 211);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_template_id_28858d27___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 211:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue?vue&type=template&id=28858d27& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNoticeBar: function () {
      return Promise.all(/*! import() | uview-ui/components/u-notice-bar/u-notice-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-notice-bar/u-notice-bar")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-notice-bar/u-notice-bar.vue */ 350))
    },
    uLoadingIcon: function () {
      return Promise.all(/*! import() | uview-ui/components/u-loading-icon/u-loading-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-loading-icon/u-loading-icon")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 358))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-popup/u-popup.vue */ 334))
    },
    uCell: function () {
      return Promise.all(/*! import() | uview-ui/components/u-cell/u-cell */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-cell/u-cell")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-cell/u-cell.vue */ 288))
    },
    uLine: function () {
      return Promise.all(/*! import() | uview-ui/components/u-line/u-line */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-line/u-line")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-line/u-line.vue */ 342))
    },
    uButton: function () {
      return Promise.all(/*! import() | uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-button/u-button.vue */ 264))
    },
    uPicker: function () {
      return Promise.all(/*! import() | uview-ui/components/u-picker/u-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-picker/u-picker")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-picker/u-picker.vue */ 296))
    },
    wxLogin: function () {
      return __webpack_require__.e(/*! import() | components/wxLogin/wxLogin */ "components/wxLogin/wxLogin").then(__webpack_require__.bind(null, /*! @/components/wxLogin/wxLogin.vue */ 274))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.downShow = false
    }
    _vm.e1 = function ($event) {
      _vm.loginShow = false
    }
    _vm.e2 = function ($event) {
      _vm.signShow = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 212:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./duihua.vue?vue&type=script&lang=js& */ 213);
/* harmony import */ var _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 213:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 31));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 34));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 在页面中定义激励视频广告
var videoAd = null;
var models = function models() {
  __webpack_require__.e(/*! require.ensure | components/model/model */ "components/model/model").then((function () {
    return resolve(__webpack_require__(/*! @/components/model/model.vue */ 281));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var wxLogin = function wxLogin() {
  __webpack_require__.e(/*! require.ensure | components/wxLogin/wxLogin */ "components/wxLogin/wxLogin").then((function () {
    return resolve(__webpack_require__(/*! @/components/wxLogin/wxLogin.vue */ 274));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    models: models,
    wxLogin: wxLogin
  },
  data: function data() {
    return {
      picshow: false,
      isvalue: '标准线路',
      columns: [[{
        channel: '',
        label: '标准线路'
      }, {
        channel: 1,
        label: '官方路线1'
      }, {
        channel: 2,
        label: '官方路线2'
      }]],
      channel: '',
      // 签到
      isSign: false,
      signShow: false,
      signTitle: '',
      signIntegral: 0,
      inviteIntegral: 0,
      adIntegral: 0,
      chatIntegral: 0,
      // 登录弹窗
      loginShow: false,
      talkList: [],
      content: '',
      downShow: false,
      downTitle: '',
      show: false
    };
  },
  onLoad: function onLoad() {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var that;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              that = _this;
              uni.setNavigationBarTitle({
                title: "\u667A\u64A9AI\u673A\u5668\u4EBA-".concat(_this.isvalue)
              });
              that.getConfig();
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '我等风也等你，近听水无声~',
      imageUrl: '/static/wenda.png',
      path: '/pages/index/index?userId=' + this.vuex_user._id
    };
  },
  onShareTimeline: function onShareTimeline(res) {
    return {
      title: '我等风也等你，近听水无声~',
      imageUrl: '/static/wenda.png',
      path: '/pages/index/index?userId=' + this.vuex_user._id
    };
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.getHistoryMsg();
    });
  },
  methods: {
    getConfig: function getConfig() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var that, config;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this3;
                _context2.next = 3;
                return uniCloud.callFunction({
                  name: 'config_map',
                  data: {
                    appcode: that.appcode,
                    'keys': ['signIntegral', 'inviteIntegral', 'adIntegral', 'chatIntegral']
                  }
                });
              case 3:
                config = _context2.sent;
                if (config.result.success) {
                  that.signIntegral = parseInt(config.result.data[0]);
                  that.inviteIntegral = parseInt(config.result.data[1]);
                  that.adIntegral = parseInt(config.result.data[2]);
                  that.chatIntegral = parseInt(config.result.data[3]);
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    signClick: function signClick() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, sign;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this4;
                if (that.vuex_user) {
                  _context3.next = 4;
                  break;
                }
                that.loginShow = true;
                return _context3.abrupt("return");
              case 4:
                if (!that.isSign) {
                  _context3.next = 7;
                  break;
                }
                uni.showToast({
                  icon: 'none',
                  title: '已签到',
                  duration: 1500
                });
                return _context3.abrupt("return");
              case 7:
                uni.showLoading({
                  mask: true,
                  title: '签到中...'
                });
                _context3.next = 10;
                return uniCloud.callFunction({
                  name: 'sign_add',
                  data: {
                    appcode: that.appcode,
                    "userId": that.vuex_user._id
                  }
                });
              case 10:
                sign = _context3.sent;
                uni.hideLoading();
                if (sign.result.success) {
                  that.getUser();
                  that.signTitle = "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + sign.result.integral + "</span>积分</p>";
                  that.signShow = true;
                  that.isSign = true;
                } else {
                  uni.showToast({
                    icon: 'none',
                    mask: true,
                    title: sign.result.msg,
                    duration: 1500
                  });
                }
              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    recordClick: function recordClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/main/integral/record'
      });
    },
    modelSave: function modelSave() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      this.modelShow = false;
    },
    getUser: function getUser() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var that, detail;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = _this5;
                _context4.next = 3;
                return uniCloud.callFunction({
                  name: 'query_map',
                  data: {
                    dbName: "wx_user",
                    id: that.vuex_user._id
                  }
                });
              case 3:
                detail = _context4.sent;
                that.$u.vuex('vuex_user', detail.result);
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // 我的
    getSign: function getSign() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that, startTime, endTime, query;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = _this6;
                startTime = new Date(new Date().toLocaleDateString()).getTime();
                endTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;
                _context5.next = 5;
                return uniCloud.callFunction({
                  name: 'sign_flag',
                  data: {
                    dbName: 'wx_sign',
                    "userId": that.vuex_user._id,
                    "startTime": startTime,
                    "endTime": endTime
                  }
                });
              case 5:
                query = _context5.sent;
                if (query.result.success) that.isSign = true;else that.isSign = false;
              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    adClick: function adClick() {
      var that = this;
      if (!that.vuex_user) {
        that.loginShow = true;
        return;
      }
      uni.showLoading({
        title: '加载中'
      });
      if (videoAd) {
        videoAd.show().then(function () {
          uni.hideLoading();
        }).catch(function (err) {
          // 失败重试
          videoAd.load().then(function () {
            uni.hideLoading();
            videoAd.show();
          }).catch(function (err) {
            uni.hideLoading();
            uni.showToast({
              icon: 'none',
              title: '访问人数过多，请稍后再试',
              duration: 3000
            });
            console.log('激励视频 广告显示失败');
          });
        });
      } else {
        that.adLoad();
        videoAd.show().then(function () {
          uni.hideLoading();
        }).catch(function (err) {
          // 失败重试
          videoAd.load().then(function () {
            uni.hideLoading();
            videoAd.show();
          }).catch(function (err) {
            uni.hideLoading();
            uni.showToast({
              icon: 'none',
              title: '访问人数过多，请稍后再试',
              duration: 3000
            });
            console.log('激励视频 广告显示失败');
          });
        });
      }
    },
    adLoad: function adLoad() {
      var that = this;
      if (wx.createRewardedVideoAd) {
        // 加载激励视频广告

        videoAd = wx.createRewardedVideoAd({
          adUnitId: that.wxRewardedAdIds[Math.floor(Math.random() * that.wxRewardedAdIds.length + 1) - 1]
        });

        //捕捉错误
        videoAd.onError(function (err) {
          // 进行适当的提示
          uni.hideLoading();
          uni.showToast({
            icon: 'none',
            title: '访问人数过多，请稍后再试',
            duration: 3000
          });
          console.log('videoAd onError', err);
        });
        // 监听关闭
        videoAd.onClose(function (status) {
          uni.hideLoading();
          if (status && status.isEnded || status === undefined) {
            // 正常播放结束，下发奖励
            that.downShow = false;
            if (that.vuex_user) {
              that.userIntegral();
            }
          } else {
            // 播放中途退出，进行提示
            uni.showToast({
              icon: 'none',
              title: '未播放完，下发奖励失败',
              duration: 3000
            });
            console.log('中途退出');
          }
        });
      }
    },
    userIntegral: function userIntegral() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = _this7;
                uni.showLoading({
                  mask: true,
                  title: '加载中...'
                });
                _context6.next = 4;
                return uniCloud.callFunction({
                  name: 'user_integral',
                  data: {
                    appcode: that.appcode,
                    userId: that.vuex_user._id
                  }
                });
              case 4:
                data = _context6.sent;
                uni.hideLoading();
                if (data.result.success) {
                  that.getUser();
                  that.signTitle = "<p style='font-weight: 550;font-size: 16px;'>恭喜你！</p><p style='padding-top: 10px;'>获得<span class='num'>" + data.result.integral + "</span>积分</p>";
                  that.signShow = true;
                }
              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    // 登录
    getUserInfo: function getUserInfo() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var that;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                uni.showLoading({
                  title: '授权中...'
                });
                that = _this8;
                _context7.next = 4;
                return uni.getUserInfo({
                  desc: '更新您的个人信息',
                  success: function success(res) {
                    that.name = res.userInfo.nickName; //昵称
                    that.avatar = res.userInfo.avatarUrl; //头像
                    // 成功后进行登录,获取code
                    that.wxlogin();
                  },
                  fail: function fail(err) {
                    uni.showToast({
                      icon: 'none',
                      title: '授权失败',
                      duration: 1500
                    });
                  }
                });
              case 4:
                uni.hideLoading();
              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    submitLogin: function submitLogin(e) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var that, res;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                that = _this9;
                that.name = e.name;
                that.avatar = e.avatar;
                uni.showLoading({
                  title: '更新中...'
                });
                _context8.next = 6;
                return uniCloud.callFunction({
                  name: 'user_update',
                  data: {
                    userId: that.vuex_user._id,
                    name: _this9.name,
                    avatar: _this9.avatar
                  }
                });
              case 6:
                res = _context8.sent;
                uni.hideLoading();
                if (res.result.success) {
                  that.getUser();
                  uni.showToast({
                    icon: 'none',
                    title: '更新成功!',
                    duration: 1500
                  });
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: '更新失败',
                    duration: 1500
                  });
                }
              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    //已经授权，自动登录
    wxlogin: function wxlogin() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var that;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                that = _this10;
                uni.showLoading({
                  title: '登录中...'
                });
                uni.login({
                  provider: 'weixin',
                  success: function success(loginRes) {
                    var code = loginRes.code;
                    that.wxloginres(code);
                  },
                  fail: function fail(err) {
                    uni.hideLoading();
                    uni.showToast({
                      icon: 'none',
                      title: '登录失败',
                      duration: 1500
                    });
                  }
                });
              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    //登录后提交服务器获取进一步信息
    wxloginres: function wxloginres(wxcode) {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var that, userId, mptype, authorize;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                that = _this11;
                userId = uni.getStorageSync('userId');
                mptype = 'wx';
                _context10.next = 5;
                return uniCloud.callFunction({
                  name: 'user_authorize',
                  data: {
                    appcode: that.appcode,
                    name: that.name,
                    avatar: that.avatar,
                    mptype: mptype,
                    code: wxcode,
                    userId: userId
                  }
                });
              case 5:
                authorize = _context10.sent;
                if (!authorize.result.success) {
                  _context10.next = 16;
                  break;
                }
                that.$u.vuex('vuex_user', authorize.result.data);
                that.getUser();
                _context10.next = 11;
                return that.getSign();
              case 11:
                uni.showToast({
                  icon: 'none',
                  mask: true,
                  title: '登录成功',
                  duration: 1500
                });
                if (!authorize.result.newUser) {
                  that.loginShow = false;
                  that.$u.vuex('showWxLogin', true);
                }
                uni.removeStorageSync('userId');
                _context10.next = 17;
                break;
              case 16:
                uni.showToast({
                  icon: 'none',
                  mask: true,
                  title: authorize.result.msg,
                  duration: 1500
                });
              case 17:
                uni.hideLoading();
                that.loginShow = false;
              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getLoginShow: function getLoginShow() {
      var that = this;
      that.loginShow = true;
    },
    handlepicopen: function handlepicopen() {
      this.picshow = true;
      this.show = false;
    },
    handlepiccancel: function handlepiccancel() {
      this.picshow = false;
    },
    handlepicconfirm: function handlepicconfirm(data) {
      this.channel = data.value[0].channel;
      this.picshow = false;
      this.isvalue = data.value[0].label;
      uni.setNavigationBarTitle({
        title: "\u667A\u64A9AI\u673A\u5668\u4EBA-".concat(this.isvalue)
      });
    },
    close: function close() {
      this.show = false;
    },
    handleopen: function handleopen() {
      this.show = true;
    },
    handleCopy: function handleCopy(message) {
      var that = this;
      uni.setClipboardData({
        data: message,
        success: function success() {}
      });
    },
    // 获取历史消息
    getHistoryMsg: function getHistoryMsg() {
      var _this12 = this;
      var get = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
          var data;
          return _regenerator.default.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  data = [{
                    content: "\u667A\u64A9AI\u4E3A\u60A8\u670D\u52A1\uFF1A\n1. \u77E5\u4E4E\u767E\u5EA6\u7B54\u9898\u3001\u505A\u4F5C\u4E1A\u9898\u76EE\n2. \u5199\u4EE3\u7801\u3001\u5199\u6587\u6848\u3001\u5199\u8BBA\u6587\uFF0C\u5199\u5C0F\u8BF4\n3. \u6587\u6848\u6DA6\u8272\u3001\u7FFB\u8BD1\u3001\u5199\u8BD7\u4F5C\u8BCD\n4. \u626E\u6F14\u9762\u8BD5\u5B98\u3001\u626E\u6F14\u4E66\u7C4D\u7535\u5F71\u89D2\u8272\n\u4F8B1\uFF1A\u5199\u4E00\u7BC7\u5DE5\u4F5C\u65E5\u62A5\u6211\u662F\u884C\u653F\n\u4F8B2\uFF1A\u5E2E\u6211\u5199\u4F5C\u4E1A\uFF0C\u9898\u76EE\u662Fxxx\n\u4F8B3\uFF1A\u628A\u4E0B\u6587\u7FFB\u8BD1\u6210\u82F1\u6587\uFF1Axxx\n\u4F8B4\uFF1A\u5199\u4E00\u51FA\u80FD\u6D3B\u7684\u77ED\u89C6\u9891\u5267\u672C\n\u4F8B5\uFF1A\u82F1\u6587\u5199\u7269\u7406\u76F8\u5173\u7684\u8BBA\u6587\n\u4F8B6\uFF1A\u7528\u738B\u5C0F\u6CE2\u7684\u98CE\u683C\u5199\u7BC7\u60C5\u4E66\n\n\u6216\u8005\u53EF\u4EE5\u95EE\u6211\u5176\u4ED6\u95EE\u9898\n\u8D8A\u5B8C\u6574\u7684\u63CF\u8FF0\uFF0C\u6211\u8D8A\u7CBE\u786E",
                    // 消息内容
                    type: 0,
                    // 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
                    state: 0
                  }]; // 将获取到的消息数据合并到消息数组中
                  _this12.talkList = [].concat(data, (0, _toConsumableArray2.default)(_this12.talkList));
                  // 数据挂载后执行，不懂的请自行阅读 Vue.js 文档对 Vue.nextTick 函数说明。
                  // 设置当前滚动的位置
                  _this12.setPageScrollTo();
                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
        return function get() {
          return _ref.apply(this, arguments);
        };
      }();
      get();
    },
    // 设置页面滚动位置
    setPageScrollTo: function setPageScrollTo() {
      var _this13 = this;
      this.$nextTick(function () {
        var selector = "#msg-".concat(_this13.talkList.length - 1);
        var view = uni.createSelectorQuery().in(_this13).select(selector);
        view.boundingClientRect(function (res) {
          uni.pageScrollTo({
            scrollTop: res.top - 30,
            // -30 为多显示出大半个消息的高度，示意上面还有信息。
            duration: 0
          });
        }).exec();
      });
    },
    // 发送信息
    send: function send() {
      var _this14 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var that, integral, messages, res;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                that = _this14;
                if (that.vuex_user) {
                  _context12.next = 4;
                  break;
                }
                that.loginShow = true;
                return _context12.abrupt("return");
              case 4:
                if (that.content) {
                  _context12.next = 7;
                  break;
                }
                uni.showToast({
                  title: '请输入有效的内容',
                  icon: 'none'
                });
                return _context12.abrupt("return");
              case 7:
                if (!(_this14.chatIntegral > 0)) {
                  _context12.next = 14;
                  break;
                }
                integral = _this14.vuex_user.integral;
                if (!(integral < _this14.chatIntegral)) {
                  _context12.next = 14;
                  break;
                }
                _this14.show = true;
                _this14.downShow = true;
                _this14.downTitle = "<p style='font-weight: 550;font-size: 16px;'>提问需要 " + _this14.chatIntegral + " 积分</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + integral + "</span>积分，无法发起提问，快去赚积分吧~</p>";
                return _context12.abrupt("return");
              case 14:
                that.talkList.push({
                  content: that.content,
                  // 消息内容
                  type: 1,
                  // 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
                  state: 1
                });
                that.talkList.push({
                  content: null,
                  // 消息内容
                  type: 2,
                  // 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
                  state: 0
                });
                _this14.$forceUpdate();
                // 设置当前滚动的位置
                _this14.setPageScrollTo();
                messages = that.talkList.filter(function (item) {
                  return item.state == 1;
                });
                messages = messages.map(function (item) {
                  return {
                    content: item.content,
                    role: item.type == 1 ? 'user' : 'assistant'
                  };
                });
                that.content = '';
                _context12.next = 23;
                return uniCloud.callFunction({
                  name: 'openai',
                  data: {
                    messages: messages,
                    channel: that.channel,
                    appcode: that.appcode,
                    userId: that.vuex_user._id
                  }
                });
              case 23:
                res = _context12.sent;
                if (res.result.success) {
                  that.getUser();
                  that.talkList[that.talkList.length - 1] = {
                    content: res.result.content,
                    // 消息内容
                    type: 0,
                    // 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
                    state: 1
                  };
                  _this14.$forceUpdate();
                  // 设置当前滚动的位置
                  _this14.setPageScrollTo();
                } else {
                  uni.showToast({
                    title: res.result.msg,
                    icon: 'none'
                  });
                  that.talkList[that.talkList.length - 2].state = 0;
                  that.talkList[that.talkList.length - 1] = {
                    content: res.result.msg,
                    // 消息内容
                    type: 0,
                    // 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
                    state: 0
                  };
                }
              case 25:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 30)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 214:
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./duihua.vue?vue&type=style&index=0&lang=scss& */ 215);
/* harmony import */ var _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Downloads_Google_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_duihua_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 215:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lo/Documents/HBuilderProjects/【全新升级】火爆全网的OpenAI ChatGPT 智能对话、问答、聊天机器人/main/duihua/duihua.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[208,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/main/duihua/duihua.js.map
(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*******************************!*\
  !*** D:/CCLqr/douyin/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 31));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** D:/CCLqr/douyin/pages.json ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*********************************************************!*\
  !*** D:/CCLqr/douyin/pages/index/index.vue?mpType=page ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZLO0FBQzdLLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************************************************************!*\
  !*** D:/CCLqr/douyin/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    kaiVideoSwiper: __webpack_require__(/*! @/components/kai-video-swiper/kai-video-swiper.nvue */ 5)
      .default
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("kai-video-swiper", {
        ref: "swiper",
        attrs: {
          cover: true,
          timingFunction: "ease",
          preview: true,
          progressTime: 10,
          _i: 1
        },
        on: {
          setVideoList: function($event) {
            return _vm.addData($event, true)
          }
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/kai-video-swiper.nvue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kai-video-swiper.nvue?vue&type=template&id=2432c21a&scoped=true& */ 6);\n/* harmony import */ var _kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kai-video-swiper.nvue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2432c21a\",\n  null,\n  false,\n  _kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/kai-video-swiper/kai-video-swiper.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQzZLO0FBQzdLLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4va2FpLXZpZGVvLXN3aXBlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0MzJjMjFhJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4va2FpLXZpZGVvLXN3aXBlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9rYWktdmlkZW8tc3dpcGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjQzMmMyMWFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9rYWktdmlkZW8tc3dpcGVyL2thaS12aWRlby1zd2lwZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/kai-video-swiper.nvue?vue&type=template&id=2432c21a&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./kai-video-swiper.nvue?vue&type=template&id=2432c21a&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_template_id_2432c21a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/kai-video-swiper.nvue?vue&type=template&id=2432c21a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: _vm._$s(1, "sc", "view-box"),
          style: _vm._$s(1, "s", _vm.viewTopLength),
          attrs: { _i: 1 }
        },
        [
          _c(
            "div",
            {
              staticClass: _vm._$s(2, "sc", "video-box"),
              style: _vm._$s(2, "s", _vm.itemViewTopLength0),
              attrs: { _i: 2 }
            },
            [
              _c("video", {
                style: _vm._$s(3, "s", _vm.fillScreen),
                attrs: {
                  src: _vm._$s(3, "a-src", _vm.videoInfo_0.src),
                  autoplay: _vm._$s(3, "a-autoplay", _vm.my_false),
                  loop: _vm._$s(3, "a-loop", _vm.my_true),
                  "play-strategy": _vm._$s(
                    3,
                    "a-play-strategy",
                    _vm.playStrategy
                  ),
                  codec: _vm._$s(3, "a-codec", _vm.codec),
                  controls: _vm._$s(3, "a-controls", _vm.my_false),
                  "enable-play-gesture": _vm._$s(
                    3,
                    "a-enable-play-gesture",
                    _vm.my_true
                  ),
                  objectFit: _vm._$s(
                    3,
                    "a-objectFit",
                    _vm.videoInfo_0.objectFit
                      ? _vm.videoInfo_0.objectFit
                      : _vm.objectFit
                  ),
                  "show-fullscreen-btn": _vm._$s(
                    3,
                    "a-show-fullscreen-btn",
                    _vm.my_false
                  ),
                  "enable-progress-gesture": _vm._$s(
                    3,
                    "a-enable-progress-gesture",
                    _vm.my_false
                  ),
                  "show-play-btn": _vm._$s(3, "a-show-play-btn", _vm.my_false),
                  "show-progress": _vm._$s(3, "a-show-progress", _vm.my_false),
                  id: "video_id_0",
                  _i: 3
                },
                on: {
                  timeupdate: function($event) {
                    return _vm.timeupdate(0, $event)
                  },
                  ended: function($event) {
                    return _vm.ended(1)
                  },
                  play: function($event) {
                    return _vm.playing(0)
                  }
                }
              }),
              _vm._$s(4, "i", !_vm.videoInfo_0.flag)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(4, "sc", "cover-view-stop"),
                      style: _vm._$s(4, "s", _vm.stopIcon),
                      attrs: { _i: 4 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          5,
                          "sc",
                          "iconfont cover-view-stop-text"
                        ),
                        attrs: { _i: 5 }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(6, "i", _vm.cover && _vm.videoInfo_0.coverStatus)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(6, "sc", "video-image"),
                      style: _vm._$s(6, "s", _vm.fillScreen),
                      attrs: { _i: 6 }
                    },
                    [
                      _c("cover-image", {
                        style: _vm._$s(7, "s", _vm.fillScreen),
                        attrs: {
                          mode: _vm._$s(
                            7,
                            "a-mode",
                            _vm.videoInfo_0.mode
                              ? _vm.videoInfo_0.mode
                              : _vm.mode
                          ),
                          src: _vm._$s(7, "a-src", _vm.videoInfo_0.coverUrl),
                          _i: 7
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(8, "i", !_vm.cover && _vm.videoInfo_0.coverStatus)
                ? _c("cover-view", {
                    staticClass: _vm._$s(8, "sc", "video-image-mask"),
                    style: _vm._$s(8, "s", _vm.fillScreen),
                    attrs: { _i: 8 }
                  })
                : _vm._e(),
              _c("div", {
                staticClass: _vm._$s(9, "sc", "video-action"),
                attrs: { _i: 9 },
                on: {
                  touchstart: function($event) {
                    $event.stopPropagation()
                    return _vm.videotouchstart($event)
                  },
                  touchmove: function($event) {
                    $event.stopPropagation()
                    return _vm.videotochmove($event)
                  },
                  touchend: function($event) {
                    $event.stopPropagation()
                    return _vm.videotouchend($event)
                  },
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.videoClick($event)
                  }
                }
              }),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(10, "sc", "cover-view-left"),
                  attrs: { _i: 10 }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(11, "sc", "view-left-text"),
                      attrs: { _i: 11 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          11,
                          "t0-0",
                          _vm._s(_vm.videoInfo_0.expert.nickName)
                        )
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(12, "sc", "view-left-text-content"),
                      attrs: { _i: 12 }
                    },
                    [
                      _vm._$s(13, "i", _vm.videoInfo_0.description)
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                13,
                                "sc",
                                "text-content-text"
                              ),
                              attrs: { _i: 13 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  13,
                                  "t0-0",
                                  _vm._s(_vm.videoInfo_0.description)
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._$s(14, "i", _vm.videoInfo_1.dubbedText)
                    ? _c("view", [
                        _c("text", {
                          staticClass: _vm._$s(
                            15,
                            "sc",
                            "iconfont view-left-icon"
                          ),
                          attrs: { _i: 15 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              16,
                              "sc",
                              "view-left-dubbedText"
                            ),
                            attrs: { _i: 16 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  17,
                                  "sc",
                                  "view-left-dubbedText-text"
                                ),
                                style: _vm._$s(17, "s", {
                                  transform:
                                    "translateX(" + _vm.translateX + "px)"
                                }),
                                attrs: { _i: 17 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    17,
                                    "t0-0",
                                    _vm._s(_vm.videoInfo_1.dubbedText)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._$s(18, "i", _vm.videoInfo_0.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(18, "sc", "text-content-advert"),
                          attrs: { _i: 18 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              19,
                              "sc",
                              "text-content-advert-text"
                            ),
                            attrs: { _i: 19 }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._$s(20, "i", _vm.videoInfo_0.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(20, "sc", "seedetails"),
                          attrs: { _i: 20 },
                          on: {
                            click: function($event) {
                              return _vm.tabDetail(0)
                            }
                          }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(21, "sc", "seedetails-text"),
                            attrs: { _i: 21 }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(22, "sc", "cover-view-right"),
                  attrs: { _i: 22 }
                },
                [
                  _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(23, "sc", "cover-view-right-head"),
                      attrs: { _i: 23 }
                    },
                    [
                      _c("cover-image", {
                        staticClass: _vm._$s(24, "sc", "avater"),
                        attrs: {
                          src: _vm._$s(
                            24,
                            "a-src",
                            _vm.videoInfo_0.expert.faceUrl
                          ),
                          _i: 24
                        },
                        on: {
                          click: function($event) {
                            return _vm.tabHead(0)
                          }
                        }
                      }),
                      _vm._$s(25, "i", !_vm.videoInfo_0.isFollow)
                        ? _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                25,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 25 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(0)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    26,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 26 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      27,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 27 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      28,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 28 }
                                  })
                                ]
                              )
                            ]
                          )
                        : _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                29,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 29 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(0)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    30,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 30 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      31,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 31 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      32,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 32 }
                                  })
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(
                      33,
                      "sc",
                      "iconfont iconfont-size-heat "
                    ),
                    class: _vm._$s(
                      33,
                      "c",
                      _vm.videoInfo_0.isLove ? "red-heat" : "white-heat"
                    ),
                    attrs: { _i: 33 },
                    on: {
                      click: function($event) {
                        return _vm.tabLove(0)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(34, "sc", "right-text"),
                      attrs: { _i: 34 }
                    },
                    [
                      _vm._v(
                        _vm._$s(34, "t0-0", _vm._s(_vm.videoInfo_0.loveNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(35, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 35 },
                    on: {
                      click: function($event) {
                        return _vm.tabComment(0)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(36, "sc", "right-text"),
                      attrs: { _i: 36 }
                    },
                    [
                      _vm._v(
                        _vm._$s(36, "t0-0", _vm._s(_vm.videoInfo_0.commentNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(37, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 37 },
                    on: {
                      click: function($event) {
                        return _vm.tabShare(0)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(38, "sc", "right-text"),
                      attrs: { _i: 38 }
                    },
                    [
                      _vm._v(
                        _vm._$s(38, "t0-0", _vm._s(_vm.videoInfo_0.shareNum))
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "div",
            {
              staticClass: _vm._$s(39, "sc", "video-box"),
              style: _vm._$s(39, "s", _vm.itemViewTopLength1),
              attrs: { _i: 39 }
            },
            [
              _c("video", {
                style: _vm._$s(40, "s", _vm.fillScreen),
                attrs: {
                  src: _vm._$s(40, "a-src", _vm.videoInfo_1.src),
                  autoplay: _vm._$s(40, "a-autoplay", _vm.my_false),
                  loop: _vm._$s(40, "a-loop", _vm.my_true),
                  "play-strategy": _vm._$s(
                    40,
                    "a-play-strategy",
                    _vm.playStrategy
                  ),
                  codec: _vm._$s(40, "a-codec", _vm.codec),
                  controls: _vm._$s(40, "a-controls", _vm.my_false),
                  "enable-play-gesture": _vm._$s(
                    40,
                    "a-enable-play-gesture",
                    _vm.my_true
                  ),
                  objectFit: _vm._$s(
                    40,
                    "a-objectFit",
                    _vm.videoInfo_1.objectFit
                      ? _vm.videoInfo_1.objectFit
                      : _vm.objectFit
                  ),
                  "show-fullscreen-btn": _vm._$s(
                    40,
                    "a-show-fullscreen-btn",
                    _vm.my_false
                  ),
                  "enable-progress-gesture": _vm._$s(
                    40,
                    "a-enable-progress-gesture",
                    _vm.my_false
                  ),
                  "show-play-btn": _vm._$s(40, "a-show-play-btn", _vm.my_false),
                  "show-progress": _vm._$s(40, "a-show-progress", _vm.my_false),
                  id: "video_id_1",
                  _i: 40
                },
                on: {
                  timeupdate: function($event) {
                    return _vm.timeupdate(1, $event)
                  },
                  ended: function($event) {
                    return _vm.ended(2)
                  },
                  play: function($event) {
                    return _vm.playing(1)
                  }
                }
              }),
              _vm._$s(41, "i", !_vm.videoInfo_1.flag)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(41, "sc", "cover-view-stop"),
                      style: _vm._$s(41, "s", _vm.stopIcon),
                      attrs: { _i: 41 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          42,
                          "sc",
                          "iconfont cover-view-stop-text"
                        ),
                        attrs: { _i: 42 }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(43, "i", _vm.cover && _vm.videoInfo_1.coverStatus)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(43, "sc", "video-image"),
                      style: _vm._$s(43, "s", _vm.fillScreen),
                      attrs: { _i: 43 }
                    },
                    [
                      _c("cover-image", {
                        style: _vm._$s(44, "s", _vm.fillScreen),
                        attrs: {
                          mode: _vm._$s(
                            44,
                            "a-mode",
                            _vm.videoInfo_1.mode
                              ? _vm.videoInfo_1.mode
                              : _vm.mode
                          ),
                          src: _vm._$s(44, "a-src", _vm.videoInfo_1.coverUrl),
                          _i: 44
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(45, "i", !_vm.cover && _vm.videoInfo_1.coverStatus)
                ? _c("cover-view", {
                    staticClass: _vm._$s(45, "sc", "video-image-mask"),
                    style: _vm._$s(45, "s", _vm.fillScreen),
                    attrs: { _i: 45 }
                  })
                : _vm._e(),
              _c("div", {
                staticClass: _vm._$s(46, "sc", "video-action"),
                attrs: { _i: 46 },
                on: {
                  touchstart: _vm.videotouchstart,
                  touchmove: _vm.videotochmove,
                  touchend: _vm.videotouchend,
                  click: _vm.videoClick
                }
              }),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(47, "sc", "cover-view-left"),
                  attrs: { _i: 47 }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(48, "sc", "view-left-text"),
                      attrs: { _i: 48 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          48,
                          "t0-0",
                          _vm._s(_vm.videoInfo_1.expert.nickName)
                        )
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(49, "sc", "view-left-text-content"),
                      attrs: { _i: 49 }
                    },
                    [
                      _vm._$s(50, "i", _vm.videoInfo_1.description)
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                50,
                                "sc",
                                "text-content-text"
                              ),
                              attrs: { _i: 50 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  50,
                                  "t0-0",
                                  _vm._s(_vm.videoInfo_1.description)
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._$s(51, "i", _vm.videoInfo_1.dubbedText)
                    ? _c("view", [
                        _c("text", {
                          staticClass: _vm._$s(
                            52,
                            "sc",
                            "iconfont view-left-icon"
                          ),
                          attrs: { _i: 52 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              53,
                              "sc",
                              "view-left-dubbedText"
                            ),
                            attrs: { _i: 53 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  54,
                                  "sc",
                                  "view-left-dubbedText-text"
                                ),
                                style: _vm._$s(54, "s", {
                                  transform:
                                    "translateX(" + _vm.translateX + "px)"
                                }),
                                attrs: { _i: 54 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    54,
                                    "t0-0",
                                    _vm._s(_vm.videoInfo_1.dubbedText)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._$s(55, "i", _vm.videoInfo_1.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(55, "sc", "text-content-advert"),
                          attrs: { _i: 55 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              56,
                              "sc",
                              "text-content-advert-text"
                            ),
                            attrs: { _i: 56 }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._$s(57, "i", _vm.videoInfo_1.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(57, "sc", "seedetails"),
                          attrs: { _i: 57 },
                          on: {
                            click: function($event) {
                              return _vm.tabDetail(1)
                            }
                          }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(58, "sc", "seedetails-text"),
                            attrs: { _i: 58 }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(59, "sc", "cover-view-right"),
                  attrs: { _i: 59 }
                },
                [
                  _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(60, "sc", "cover-view-right-head"),
                      attrs: { _i: 60 }
                    },
                    [
                      _c("cover-image", {
                        staticClass: _vm._$s(61, "sc", "avater"),
                        attrs: {
                          src: _vm._$s(
                            61,
                            "a-src",
                            _vm.videoInfo_1.expert.faceUrl
                          ),
                          _i: 61
                        },
                        on: {
                          click: function($event) {
                            return _vm.tabHead(1)
                          }
                        }
                      }),
                      _vm._$s(62, "i", !_vm.videoInfo_1.isFollow)
                        ? _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                62,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 62 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(1)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    63,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 63 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      64,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 64 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      65,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 65 }
                                  })
                                ]
                              )
                            ]
                          )
                        : _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                66,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 66 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(1)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    67,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 67 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      68,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 68 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      69,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 69 }
                                  })
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(
                      70,
                      "sc",
                      "iconfont iconfont-size-heat "
                    ),
                    class: _vm._$s(
                      70,
                      "c",
                      _vm.videoInfo_1.isLove ? "red-heat" : "white-heat"
                    ),
                    attrs: { _i: 70 },
                    on: {
                      click: function($event) {
                        return _vm.tabLove(1)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(71, "sc", "right-text"),
                      attrs: { _i: 71 }
                    },
                    [
                      _vm._v(
                        _vm._$s(71, "t0-0", _vm._s(_vm.videoInfo_1.loveNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(72, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 72 },
                    on: {
                      click: function($event) {
                        return _vm.tabComment(1)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(73, "sc", "right-text"),
                      attrs: { _i: 73 }
                    },
                    [
                      _vm._v(
                        _vm._$s(73, "t0-0", _vm._s(_vm.videoInfo_1.commentNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(74, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 74 },
                    on: {
                      click: function($event) {
                        return _vm.tabShare(1)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(75, "sc", "right-text"),
                      attrs: { _i: 75 }
                    },
                    [
                      _vm._v(
                        _vm._$s(75, "t0-0", _vm._s(_vm.videoInfo_1.shareNum))
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "div",
            {
              staticClass: _vm._$s(76, "sc", "video-box"),
              style: _vm._$s(76, "s", _vm.itemViewTopLength2),
              attrs: { _i: 76 }
            },
            [
              _c("video", {
                style: _vm._$s(77, "s", _vm.fillScreen),
                attrs: {
                  src: _vm._$s(77, "a-src", _vm.videoInfo_2.src),
                  autoplay: _vm._$s(77, "a-autoplay", _vm.my_false),
                  loop: _vm._$s(77, "a-loop", _vm.my_true),
                  "play-strategy": _vm._$s(
                    77,
                    "a-play-strategy",
                    _vm.playStrategy
                  ),
                  codec: _vm._$s(77, "a-codec", _vm.codec),
                  controls: _vm._$s(77, "a-controls", _vm.my_false),
                  "enable-play-gesture": _vm._$s(
                    77,
                    "a-enable-play-gesture",
                    _vm.my_true
                  ),
                  objectFit: _vm._$s(
                    77,
                    "a-objectFit",
                    _vm.videoInfo_2.objectFit
                      ? _vm.videoInfo_2.objectFit
                      : _vm.objectFit
                  ),
                  "show-fullscreen-btn": _vm._$s(
                    77,
                    "a-show-fullscreen-btn",
                    _vm.my_false
                  ),
                  "enable-progress-gesture": _vm._$s(
                    77,
                    "a-enable-progress-gesture",
                    _vm.my_false
                  ),
                  "show-play-btn": _vm._$s(77, "a-show-play-btn", _vm.my_false),
                  "show-progress": _vm._$s(77, "a-show-progress", _vm.my_false),
                  id: "video_id_2",
                  _i: 77
                },
                on: {
                  timeupdate: function($event) {
                    return _vm.timeupdate(2, $event)
                  },
                  ended: function($event) {
                    return _vm.ended(2)
                  },
                  play: function($event) {
                    return _vm.playing(2)
                  }
                }
              }),
              _vm._$s(78, "i", !_vm.videoInfo_2.flag)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(78, "sc", "cover-view-stop"),
                      style: _vm._$s(78, "s", _vm.stopIcon),
                      attrs: { _i: 78 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          79,
                          "sc",
                          "iconfont cover-view-stop-text"
                        ),
                        attrs: { _i: 79 }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(80, "i", _vm.cover && _vm.videoInfo_2.coverStatus)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(80, "sc", "video-image"),
                      style: _vm._$s(80, "s", _vm.fillScreen),
                      attrs: { _i: 80 }
                    },
                    [
                      _c("cover-image", {
                        style: _vm._$s(81, "s", _vm.fillScreen),
                        attrs: {
                          mode: _vm._$s(
                            81,
                            "a-mode",
                            _vm.videoInfo_2.mode
                              ? _vm.videoInfo_2.mode
                              : _vm.mode
                          ),
                          src: _vm._$s(81, "a-src", _vm.videoInfo_2.coverUrl),
                          _i: 81
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(82, "i", !_vm.cover && _vm.videoInfo_2.coverStatus)
                ? _c("cover-view", {
                    staticClass: _vm._$s(82, "sc", "video-image-mask"),
                    style: _vm._$s(82, "s", _vm.fillScreen),
                    attrs: { _i: 82 }
                  })
                : _vm._e(),
              _c("div", {
                staticClass: _vm._$s(83, "sc", "video-action"),
                attrs: { _i: 83 },
                on: {
                  touchstart: _vm.videotouchstart,
                  touchmove: _vm.videotochmove,
                  touchend: _vm.videotouchend,
                  click: _vm.videoClick
                }
              }),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(84, "sc", "cover-view-left"),
                  attrs: { _i: 84 }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(85, "sc", "view-left-text"),
                      attrs: { _i: 85 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          85,
                          "t0-0",
                          _vm._s(_vm.videoInfo_2.expert.nickName)
                        )
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(86, "sc", "view-left-text-content"),
                      attrs: { _i: 86 }
                    },
                    [
                      _vm._$s(87, "i", _vm.videoInfo_2.description)
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                87,
                                "sc",
                                "text-content-text"
                              ),
                              attrs: { _i: 87 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  87,
                                  "t0-0",
                                  _vm._s(_vm.videoInfo_2.description)
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._$s(88, "i", _vm.videoInfo_2.dubbedText)
                    ? _c("view", [
                        _c("text", {
                          staticClass: _vm._$s(
                            89,
                            "sc",
                            "iconfont view-left-icon"
                          ),
                          attrs: { _i: 89 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              90,
                              "sc",
                              "view-left-dubbedText"
                            ),
                            attrs: { _i: 90 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  91,
                                  "sc",
                                  "view-left-dubbedText-text"
                                ),
                                style: _vm._$s(91, "s", {
                                  transform:
                                    "translateX(" + _vm.translateX + "px)"
                                }),
                                attrs: { _i: 91 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    91,
                                    "t0-0",
                                    _vm._s(_vm.videoInfo_2.dubbedText)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._$s(92, "i", _vm.videoInfo_2.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(92, "sc", "text-content-advert"),
                          attrs: { _i: 92 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              93,
                              "sc",
                              "text-content-advert-text"
                            ),
                            attrs: { _i: 93 }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._$s(94, "i", _vm.videoInfo_2.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(94, "sc", "seedetails"),
                          attrs: { _i: 94 },
                          on: {
                            click: function($event) {
                              return _vm.tabDetail(2)
                            }
                          }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(95, "sc", "seedetails-text"),
                            attrs: { _i: 95 }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(96, "sc", "cover-view-right"),
                  attrs: { _i: 96 }
                },
                [
                  _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(97, "sc", "cover-view-right-head"),
                      attrs: { _i: 97 }
                    },
                    [
                      _c("cover-image", {
                        staticClass: _vm._$s(98, "sc", "avater"),
                        attrs: {
                          src: _vm._$s(
                            98,
                            "a-src",
                            _vm.videoInfo_2.expert.faceUrl
                          ),
                          _i: 98
                        },
                        on: {
                          click: function($event) {
                            return _vm.tabHead(2)
                          }
                        }
                      }),
                      _vm._$s(99, "i", !_vm.videoInfo_2.isFollow)
                        ? _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                99,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 99 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(2)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    100,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 100 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      101,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 101 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      102,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 102 }
                                  })
                                ]
                              )
                            ]
                          )
                        : _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                103,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 103 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(2)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    104,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 104 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      105,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 105 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      106,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 106 }
                                  })
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(
                      107,
                      "sc",
                      "iconfont iconfont-size-heat "
                    ),
                    class: _vm._$s(
                      107,
                      "c",
                      _vm.videoInfo_2.isLove ? "red-heat" : "white-heat"
                    ),
                    attrs: { _i: 107 },
                    on: {
                      click: function($event) {
                        return _vm.tabLove(2)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(108, "sc", "right-text"),
                      attrs: { _i: 108 }
                    },
                    [
                      _vm._v(
                        _vm._$s(108, "t0-0", _vm._s(_vm.videoInfo_2.loveNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(109, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 109 },
                    on: {
                      click: function($event) {
                        return _vm.tabComment(2)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(110, "sc", "right-text"),
                      attrs: { _i: 110 }
                    },
                    [
                      _vm._v(
                        _vm._$s(110, "t0-0", _vm._s(_vm.videoInfo_2.commentNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(111, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 111 },
                    on: {
                      click: function($event) {
                        return _vm.tabShare(2)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(112, "sc", "right-text"),
                      attrs: { _i: 112 }
                    },
                    [
                      _vm._v(
                        _vm._$s(112, "t0-0", _vm._s(_vm.videoInfo_2.shareNum))
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "div",
            {
              staticClass: _vm._$s(113, "sc", "video-box"),
              style: _vm._$s(113, "s", _vm.itemViewTopLength3),
              attrs: { _i: 113 }
            },
            [
              _c("video", {
                style: _vm._$s(114, "s", _vm.fillScreen),
                attrs: {
                  src: _vm._$s(114, "a-src", _vm.videoInfo_3.src),
                  autoplay: _vm._$s(114, "a-autoplay", _vm.my_false),
                  loop: _vm._$s(114, "a-loop", _vm.my_true),
                  "play-strategy": _vm._$s(
                    114,
                    "a-play-strategy",
                    _vm.playStrategy
                  ),
                  codec: _vm._$s(114, "a-codec", _vm.codec),
                  controls: _vm._$s(114, "a-controls", _vm.my_false),
                  "enable-play-gesture": _vm._$s(
                    114,
                    "a-enable-play-gesture",
                    _vm.my_true
                  ),
                  objectFit: _vm._$s(
                    114,
                    "a-objectFit",
                    _vm.videoInfo_3.objectFit
                      ? _vm.videoInfo_3.objectFit
                      : _vm.objectFit
                  ),
                  "show-fullscreen-btn": _vm._$s(
                    114,
                    "a-show-fullscreen-btn",
                    _vm.my_false
                  ),
                  "enable-progress-gesture": _vm._$s(
                    114,
                    "a-enable-progress-gesture",
                    _vm.my_false
                  ),
                  "show-play-btn": _vm._$s(
                    114,
                    "a-show-play-btn",
                    _vm.my_false
                  ),
                  "show-progress": _vm._$s(
                    114,
                    "a-show-progress",
                    _vm.my_false
                  ),
                  id: "video_id_3",
                  _i: 114
                },
                on: {
                  timeupdate: function($event) {
                    return _vm.timeupdate(3, $event)
                  },
                  ended: function($event) {
                    return _vm.ended(3)
                  },
                  play: function($event) {
                    return _vm.playing(3)
                  }
                }
              }),
              _vm._$s(115, "i", !_vm.videoInfo_3.flag)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(115, "sc", "cover-view-stop"),
                      style: _vm._$s(115, "s", _vm.stopIcon),
                      attrs: { _i: 115 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          116,
                          "sc",
                          "iconfont cover-view-stop-text"
                        ),
                        attrs: { _i: 116 }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(117, "i", _vm.cover && _vm.videoInfo_3.coverStatus)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(117, "sc", "video-image"),
                      style: _vm._$s(117, "s", _vm.fillScreen),
                      attrs: { _i: 117 }
                    },
                    [
                      _c("cover-image", {
                        style: _vm._$s(118, "s", _vm.fillScreen),
                        attrs: {
                          mode: _vm._$s(
                            118,
                            "a-mode",
                            _vm.videoInfo_3.mode
                              ? _vm.videoInfo_3.mode
                              : _vm.mode
                          ),
                          src: _vm._$s(118, "a-src", _vm.videoInfo_3.coverUrl),
                          _i: 118
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(119, "i", !_vm.cover && _vm.videoInfo_3.coverStatus)
                ? _c("cover-view", {
                    staticClass: _vm._$s(119, "sc", "video-image-mask"),
                    style: _vm._$s(119, "s", _vm.fillScreen),
                    attrs: { _i: 119 }
                  })
                : _vm._e(),
              _c("div", {
                staticClass: _vm._$s(120, "sc", "video-action"),
                attrs: { _i: 120 },
                on: {
                  touchstart: _vm.videotouchstart,
                  touchmove: _vm.videotochmove,
                  touchend: _vm.videotouchend,
                  click: _vm.videoClick
                }
              }),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(121, "sc", "cover-view-left"),
                  attrs: { _i: 121 }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(122, "sc", "view-left-text"),
                      attrs: { _i: 122 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          122,
                          "t0-0",
                          _vm._s(_vm.videoInfo_3.expert.nickName)
                        )
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(123, "sc", "view-left-text-content"),
                      attrs: { _i: 123 }
                    },
                    [
                      _vm._$s(124, "i", _vm.videoInfo_3.description)
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                124,
                                "sc",
                                "text-content-text"
                              ),
                              attrs: { _i: 124 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  124,
                                  "t0-0",
                                  _vm._s(_vm.videoInfo_3.description)
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._$s(125, "i", _vm.videoInfo_3.dubbedText)
                    ? _c("view", [
                        _c("text", {
                          staticClass: _vm._$s(
                            126,
                            "sc",
                            "iconfont view-left-icon"
                          ),
                          attrs: { _i: 126 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              127,
                              "sc",
                              "view-left-dubbedText"
                            ),
                            attrs: { _i: 127 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  128,
                                  "sc",
                                  "view-left-dubbedText-text"
                                ),
                                style: _vm._$s(128, "s", {
                                  transform:
                                    "translateX(" + _vm.translateX + "px)"
                                }),
                                attrs: { _i: 128 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    128,
                                    "t0-0",
                                    _vm._s(_vm.videoInfo_3.dubbedText)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._$s(129, "i", _vm.videoInfo_3.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            129,
                            "sc",
                            "text-content-advert"
                          ),
                          attrs: { _i: 129 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              130,
                              "sc",
                              "text-content-advert-text"
                            ),
                            attrs: { _i: 130 }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._$s(131, "i", _vm.videoInfo_3.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(131, "sc", "seedetails"),
                          attrs: { _i: 131 },
                          on: {
                            click: function($event) {
                              return _vm.tabDetail(3)
                            }
                          }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(132, "sc", "seedetails-text"),
                            attrs: { _i: 132 }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(133, "sc", "cover-view-right"),
                  attrs: { _i: 133 }
                },
                [
                  _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(134, "sc", "cover-view-right-head"),
                      attrs: { _i: 134 }
                    },
                    [
                      _c("cover-image", {
                        staticClass: _vm._$s(135, "sc", "avater"),
                        attrs: {
                          src: _vm._$s(
                            135,
                            "a-src",
                            _vm.videoInfo_3.expert.faceUrl
                          ),
                          _i: 135
                        },
                        on: {
                          click: function($event) {
                            return _vm.tabHead(3)
                          }
                        }
                      }),
                      _vm._$s(136, "i", !_vm.videoInfo_3.isFollow)
                        ? _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                136,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 136 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(3)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    137,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 137 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      138,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 138 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      139,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 139 }
                                  })
                                ]
                              )
                            ]
                          )
                        : _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                140,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 140 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(3)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    141,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 141 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      142,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 142 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      143,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 143 }
                                  })
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(
                      144,
                      "sc",
                      "iconfont iconfont-size-heat "
                    ),
                    class: _vm._$s(
                      144,
                      "c",
                      _vm.videoInfo_3.isLove ? "red-heat" : "white-heat"
                    ),
                    attrs: { _i: 144 },
                    on: {
                      click: function($event) {
                        return _vm.tabLove(3)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(145, "sc", "right-text"),
                      attrs: { _i: 145 }
                    },
                    [
                      _vm._v(
                        _vm._$s(145, "t0-0", _vm._s(_vm.videoInfo_3.loveNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(146, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 146 },
                    on: {
                      click: function($event) {
                        return _vm.tabComment(3)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(147, "sc", "right-text"),
                      attrs: { _i: 147 }
                    },
                    [
                      _vm._v(
                        _vm._$s(147, "t0-0", _vm._s(_vm.videoInfo_3.commentNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(148, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 148 },
                    on: {
                      click: function($event) {
                        return _vm.tabShare(3)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(149, "sc", "right-text"),
                      attrs: { _i: 149 }
                    },
                    [
                      _vm._v(
                        _vm._$s(149, "t0-0", _vm._s(_vm.videoInfo_3.shareNum))
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "div",
            {
              staticClass: _vm._$s(150, "sc", "video-box"),
              style: _vm._$s(150, "s", _vm.itemViewTopLength4),
              attrs: { _i: 150 }
            },
            [
              _c("video", {
                style: _vm._$s(151, "s", _vm.fillScreen),
                attrs: {
                  src: _vm._$s(151, "a-src", _vm.videoInfo_4.src),
                  autoplay: _vm._$s(151, "a-autoplay", _vm.my_false),
                  loop: _vm._$s(151, "a-loop", _vm.my_true),
                  "play-strategy": _vm._$s(
                    151,
                    "a-play-strategy",
                    _vm.playStrategy
                  ),
                  codec: _vm._$s(151, "a-codec", _vm.codec),
                  controls: _vm._$s(151, "a-controls", _vm.my_false),
                  "enable-play-gesture": _vm._$s(
                    151,
                    "a-enable-play-gesture",
                    _vm.my_true
                  ),
                  objectFit: _vm._$s(
                    151,
                    "a-objectFit",
                    _vm.videoInfo_4.objectFit
                      ? _vm.videoInfo_4.objectFit
                      : _vm.objectFit
                  ),
                  "show-fullscreen-btn": _vm._$s(
                    151,
                    "a-show-fullscreen-btn",
                    _vm.my_false
                  ),
                  "enable-progress-gesture": _vm._$s(
                    151,
                    "a-enable-progress-gesture",
                    _vm.my_false
                  ),
                  "show-play-btn": _vm._$s(
                    151,
                    "a-show-play-btn",
                    _vm.my_false
                  ),
                  "show-progress": _vm._$s(
                    151,
                    "a-show-progress",
                    _vm.my_false
                  ),
                  id: "video_id_4",
                  _i: 151
                },
                on: {
                  timeupdate: function($event) {
                    return _vm.timeupdate(4, $event)
                  },
                  ended: function($event) {
                    return _vm.ended(4)
                  },
                  play: function($event) {
                    return _vm.playing(4)
                  }
                }
              }),
              _vm._$s(152, "i", !_vm.videoInfo_4.flag)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(152, "sc", "cover-view-stop"),
                      style: _vm._$s(152, "s", _vm.stopIcon),
                      attrs: { _i: 152 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          153,
                          "sc",
                          "iconfont cover-view-stop-text"
                        ),
                        attrs: { _i: 153 }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(154, "i", _vm.cover && _vm.videoInfo_4.coverStatus)
                ? _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(154, "sc", "video-image"),
                      style: _vm._$s(154, "s", _vm.fillScreen),
                      attrs: { _i: 154 }
                    },
                    [
                      _c("cover-image", {
                        style: _vm._$s(155, "s", _vm.fillScreen),
                        attrs: {
                          mode: _vm._$s(
                            155,
                            "a-mode",
                            _vm.videoInfo_4.mode
                              ? _vm.videoInfo_4.mode
                              : _vm.mode
                          ),
                          src: _vm._$s(155, "a-src", _vm.videoInfo_4.coverUrl),
                          _i: 155
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._$s(156, "i", !_vm.cover && _vm.videoInfo_4.coverStatus)
                ? _c("cover-view", {
                    staticClass: _vm._$s(156, "sc", "video-image-mask"),
                    style: _vm._$s(156, "s", _vm.fillScreen),
                    attrs: { _i: 156 }
                  })
                : _vm._e(),
              _c("div", {
                staticClass: _vm._$s(157, "sc", "video-action"),
                attrs: { _i: 157 },
                on: {
                  touchstart: _vm.videotouchstart,
                  touchmove: _vm.videotochmove,
                  touchend: _vm.videotouchend,
                  click: _vm.videoClick
                }
              }),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(158, "sc", "cover-view-left"),
                  attrs: { _i: 158 }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(159, "sc", "view-left-text"),
                      attrs: { _i: 159 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          159,
                          "t0-0",
                          _vm._s(_vm.videoInfo_4.expert.nickName)
                        )
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(160, "sc", "view-left-text-content"),
                      attrs: { _i: 160 }
                    },
                    [
                      _vm._$s(161, "i", _vm.videoInfo_4.description)
                        ? _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                161,
                                "sc",
                                "text-content-text"
                              ),
                              attrs: { _i: 161 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  161,
                                  "t0-0",
                                  _vm._s(_vm.videoInfo_4.description)
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._$s(162, "i", _vm.videoInfo_4.dubbedText)
                    ? _c("view", [
                        _c("text", {
                          staticClass: _vm._$s(
                            163,
                            "sc",
                            "iconfont view-left-icon"
                          ),
                          attrs: { _i: 163 }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              164,
                              "sc",
                              "view-left-dubbedText"
                            ),
                            attrs: { _i: 164 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  165,
                                  "sc",
                                  "view-left-dubbedText-text"
                                ),
                                style: _vm._$s(165, "s", {
                                  transform:
                                    "translateX(" + _vm.translateX + "px)"
                                }),
                                attrs: { _i: 165 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    165,
                                    "t0-0",
                                    _vm._s(_vm.videoInfo_4.dubbedText)
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._$s(166, "i", _vm.videoInfo_4.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            166,
                            "sc",
                            "text-content-advert"
                          ),
                          attrs: { _i: 166 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(
                              167,
                              "sc",
                              "text-content-advert-text"
                            ),
                            attrs: { _i: 167 }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._$s(168, "i", _vm.videoInfo_4.advert)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(168, "sc", "seedetails"),
                          attrs: { _i: 168 },
                          on: {
                            click: function($event) {
                              return _vm.tabDetail(4)
                            }
                          }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(169, "sc", "seedetails-text"),
                            attrs: { _i: 169 }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _c(
                "cover-view",
                {
                  staticClass: _vm._$s(170, "sc", "cover-view-right"),
                  attrs: { _i: 170 }
                },
                [
                  _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(171, "sc", "cover-view-right-head"),
                      attrs: { _i: 171 }
                    },
                    [
                      _c("cover-image", {
                        staticClass: _vm._$s(172, "sc", "avater"),
                        attrs: {
                          src: _vm._$s(
                            172,
                            "a-src",
                            _vm.videoInfo_4.expert.faceUrl
                          ),
                          _i: 172
                        },
                        on: {
                          click: function($event) {
                            return _vm.tabHead(4)
                          }
                        }
                      }),
                      _vm._$s(173, "i", !_vm.videoInfo_4.isFollow)
                        ? _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                173,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 173 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(4)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    174,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 174 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      175,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 175 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      176,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 176 }
                                  })
                                ]
                              )
                            ]
                          )
                        : _c(
                            "cover-view",
                            {
                              staticClass: _vm._$s(
                                177,
                                "sc",
                                "cover-right-follow"
                              ),
                              attrs: { _i: 177 },
                              on: {
                                click: function($event) {
                                  return _vm.tabFollow(4)
                                }
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    178,
                                    "sc",
                                    "right-follow-box"
                                  ),
                                  attrs: { _i: 178 }
                                },
                                [
                                  _c("view", {
                                    staticClass: _vm._$s(
                                      179,
                                      "sc",
                                      "right-follow-bg"
                                    ),
                                    attrs: { _i: 179 }
                                  }),
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      180,
                                      "sc",
                                      "iconfont right-follow"
                                    ),
                                    attrs: { _i: 180 }
                                  })
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(
                      181,
                      "sc",
                      "iconfont iconfont-size-heat "
                    ),
                    class: _vm._$s(
                      181,
                      "c",
                      _vm.videoInfo_4.isLove ? "red-heat" : "white-heat"
                    ),
                    attrs: { _i: 181 },
                    on: {
                      click: function($event) {
                        return _vm.tabLove(4)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(182, "sc", "right-text"),
                      attrs: { _i: 182 }
                    },
                    [
                      _vm._v(
                        _vm._$s(182, "t0-0", _vm._s(_vm.videoInfo_4.loveNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(183, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 183 },
                    on: {
                      click: function($event) {
                        return _vm.tabComment(4)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(184, "sc", "right-text"),
                      attrs: { _i: 184 }
                    },
                    [
                      _vm._v(
                        _vm._$s(184, "t0-0", _vm._s(_vm.videoInfo_4.commentNum))
                      )
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(185, "sc", "iconfont iconfont-size"),
                    attrs: { _i: 185 },
                    on: {
                      click: function($event) {
                        return _vm.tabShare(4)
                      }
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(186, "sc", "right-text"),
                      attrs: { _i: 186 }
                    },
                    [
                      _vm._v(
                        _vm._$s(186, "t0-0", _vm._s(_vm.videoInfo_4.shareNum))
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._$s(187, "i", _vm.videoFlag)
            ? [
                _vm._$s(
                  188,
                  "i",
                  _vm.showProgress &&
                    _vm.moveView &&
                    _vm.progress > 1 &&
                    _vm.showOther
                )
                  ? _c(
                      "cover-view",
                      {
                        staticClass: _vm._$s(188, "sc", "progress-bar-box"),
                        style: _vm._$s(188, "s", {
                          width: _vm.pointMove
                            ? _vm.barWidth
                            : _vm.pointLeft + "px"
                        }),
                        attrs: { _i: 188 }
                      },
                      [
                        _c("cover-view", {
                          staticClass: _vm._$s(189, "sc", "progress-bar"),
                          attrs: { _i: 189 }
                        }),
                        _c("cover-view", {
                          staticClass: _vm._$s(190, "sc", "progress-bar-point"),
                          attrs: { _i: 190 }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._$s(
                  191,
                  "i",
                  _vm.showProgress &&
                    _vm.moveView &&
                    _vm.progress > 1 &&
                    _vm.showOther
                )
                  ? _c(
                      "cover-view",
                      {
                        staticClass: _vm._$s(191, "sc", "progress-bar-box"),
                        style: _vm._$s(191, "s", {
                          width: _vm.winWidth + "px"
                        }),
                        attrs: { _i: 191 }
                      },
                      [
                        _c("cover-view", {
                          staticClass: _vm._$s(192, "sc", "progress-bar-bg"),
                          attrs: { _i: 192 }
                        })
                      ]
                    )
                  : _vm._e()
              ]
            : [
                _vm._$s(
                  194,
                  "i",
                  _vm.showProgress &&
                    _vm.moveView &&
                    _vm.progress > 1 &&
                    _vm.showOther
                )
                  ? _c(
                      "cover-view",
                      {
                        staticClass: _vm._$s(
                          194,
                          "sc",
                          "progress-bar-box-active"
                        ),
                        style: _vm._$s(194, "s", {
                          width: _vm.pointMove
                            ? _vm.barWidth
                            : _vm.pointLeft + "px"
                        }),
                        attrs: { _i: 194 }
                      },
                      [
                        _c("cover-view", {
                          staticClass: _vm._$s(
                            195,
                            "sc",
                            "progress-bar-active"
                          ),
                          attrs: { _i: 195 }
                        }),
                        _c("cover-view", {
                          staticClass: _vm._$s(
                            196,
                            "sc",
                            "progress-bar-point-active"
                          ),
                          attrs: { _i: 196 }
                        })
                      ]
                    )
                  : _vm._e()
              ]
        ],
        2
      ),
      _vm._$s(197, "i", _vm.showProgress)
        ? _c("div", {
            staticClass: _vm._$s(197, "sc", "move-point"),
            style: _vm._$s(197, "s", {
              left: _vm.pointMove ? _vm.barWidth : _vm.pointLeft + "px"
            }),
            attrs: { _i: 197 },
            on: {
              touchstart: _vm.progressTouchstart,
              touchmove: _vm.progressTochmove,
              touchend: _vm.progressTouchend
            }
          })
        : _vm._e(),
      _c("comment", {
        ref: "refComment",
        attrs: { commentStatus: _vm.commentStatus, _i: 198 },
        on: {
          mask: _vm.hide,
          tapCommentLove: function($event) {
            return _vm.tapCommentLove($event)
          },
          send: function($event) {
            return _vm.send($event)
          },
          setCommentList: function($event) {
            return _vm.setCommentList($event)
          }
        }
      }),
      _c("share", {
        ref: "refShare",
        attrs: { shareStatus: _vm.shareStatus, _i: 199 },
        on: {
          mask: _vm.hide,
          share: function($event) {
            return _vm.tapShare($event)
          }
        }
      }),
      _c("top-text", {
        ref: "refTopText",
        attrs: { _i: 200 },
        on: { live: _vm.tabLive, search: _vm.tabSearch, active: _vm.tabActive }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!**************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/kai-video-swiper.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./kai-video-swiper.nvue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kai_video_swiper_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFsQixDQUFnQiwrbUJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2thaS12aWRlby1zd2lwZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2thaS12aWRlby1zd2lwZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/kai-video-swiper.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _comment = _interopRequireDefault(__webpack_require__(/*! ./components/comment.nvue */ 10));\nvar _share = _interopRequireDefault(__webpack_require__(/*! ./components/share.nvue */ 16));\nvar _topText = _interopRequireDefault(__webpack_require__(/*! ./components/top-text.nvue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}\nvar slidingStatus = false;\nvar startPageY, endPageY;\nvar musicTimer = null;\nvar videoPlayingStatus = false;\nvar initVideoInfo = {\n  expert: {},\n  src: \"\",\n  coverStatus: true,\n  cover: false,\n  nickName: \"昵称\",\n  detail: \"描述\",\n  loveNum: 0,\n  commentNum: 0,\n  shareNum: 0,\n  dubbedText: \"优美音乐\" };var _default =\n\n{\n  components: {\n    comment: _comment.default,\n    share: _share.default,\n    topText: _topText.default },\n\n  props: {\n    cover: {\n      type: Boolean,\n      default: false },\n\n    preview: {\n      type: Boolean,\n      default: false },\n\n    timingFunction: {\n      type: String,\n      default: \"linear\" },\n\n    progressTime: {\n      type: Number,\n      default: 10 } },\n\n\n  data: function data() {\n    return {\n      progress: 0,\n      moveView: true,\n      showProgress: false,\n      showOther: true,\n      commentStatus: false,\n      shareStatus: false,\n      translateX: '10',\n      my_true: true,\n      my_false: false,\n      boxHeight: 0,\n      objectFit: \"fill\", //视频表现形式 可参考video组件的object-fit属性 contain：包含，fill：填充，cover：覆盖\n      mode: \"scaleToFill\", //封面图缩放模式 可参考image组件的mode属性\n      winWidth: 1,\n      winHeight: 1,\n      videoIndex: 0,\n      viewTop: 0,\n      viewTopPostion: 0,\n      videoList: [],\n      videoListLength: 0,\n      itemViewTop0: 0,\n      itemViewTop1: 0,\n      itemViewTop2: 0,\n      itemViewTop3: 0,\n      itemViewTop4: 0,\n      videoInfo_0: initVideoInfo,\n      videoInfo_1: initVideoInfo,\n      videoInfo_2: initVideoInfo,\n      videoInfo_3: initVideoInfo,\n      videoInfo_4: initVideoInfo,\n      topViewStatus: false,\n      playStrategy: 2,\n      codec: 'hardware',\n      time: 1,\n      videotouchstartTimestamp: 0,\n      videotouchendTimestamp: 0,\n      videoFlag: true,\n      pointLeftPosition: 0,\n      pointLeft: 0,\n      pointStart: 0,\n      pointEnd: 0,\n      pointMove: true };\n\n  },\n  beforeCreate: function beforeCreate() {\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"iconfont\",\n      'src': \"url('https://at.alicdn.com/t/font_2751880_q0v3w2s8zds.ttf?t=1629251162076') format('truetype')\" });\n\n  },\n  created: function created() {\n    plus.screen.lockOrientation(\"portrait-primary\");\n    this.__init();\n  },\n  computed: {\n    viewTopLength: function viewTopLength() {\n      return \"height:\".concat(this.boxHeight, \"px;top:\").concat(this.viewTop, \"px;\");\n    },\n    fillScreen: function fillScreen() {\n      var style = \"height:\".concat(this.winHeight, \"px;width:\").concat(this.winWidth, \"px;\");\n      return style;\n    },\n    itemViewTopLength0: function itemViewTopLength0() {\n      return \"height:\".concat(this.winHeight, \"px;top:\").concat(this.itemViewTop0, \"px;\");\n    },\n    itemViewTopLength1: function itemViewTopLength1() {\n      return \"height:\".concat(this.winHeight, \"px;top:\").concat(this.itemViewTop1, \"px;\");\n    },\n    itemViewTopLength2: function itemViewTopLength2() {\n      return \"height:\".concat(this.winHeight, \"px;top:\").concat(this.itemViewTop2, \"px;\");\n    },\n    itemViewTopLength3: function itemViewTopLength3() {\n      return \"height:\".concat(this.winHeight, \"px;top:\").concat(this.itemViewTop3, \"px;\");\n    },\n    itemViewTopLength4: function itemViewTopLength4() {\n      return \"height:\".concat(this.winHeight, \"px;top:\").concat(this.itemViewTop4, \"px;\");\n    },\n    barWidth: function barWidth() {\n      var width = 0;\n      if (this.time) {\n        if (this.pointMove) {\n          width = parseInt(this.progress / this.time * parseInt(this.winWidth));\n          this.pointLeft = width;\n          this.pointLeftPosition = width;\n        }\n      }\n      return \"\".concat(width, \"px\");\n    } },\n\n  methods: {\n    __init: function __init() {\n      this.getSystemInfo();\n    },\n    previewVideo: function previewVideo(index, list) {\n      if (!Array.isArray(list)) {\n        uni.navigateBack({\n          delta: 1 });\n\n        return;\n      }\n      if (list.length == 0) {\n        uni.navigateBack({\n          delta: 1 });\n\n        return;\n      }\n      this.videoList = list;\n      this.videoIndex = index;\n      this.videoListLength = list.length;\n      if (this.videoIndex > 1 && this.videoIndex < this.videoListLength - 2) {\n        var a = -3;\n        for (var i = 0; i < 5; i++) {\n          a++;\n          if (this.videoList[this.videoIndex + a]) {\n            this['videoInfo_' + (this.videoIndex + a) % 5] = this.videoList[this.videoIndex + a];\n          }\n        }\n        this.previewSetHeight(1);\n      } else if (this.videoListLength < 6) {\n        for (var _i = 0; _i < 5; _i++) {\n          if (this.videoList[_i]) {\n            this['videoInfo_' + _i] = this.videoList[_i];\n          }\n        }\n        this.previewSetHeight(2);\n      } else if (this.videoIndex > this.videoListLength - 3) {\n        var _a = -6;\n        for (var _i2 = 0; _i2 < 5; _i2++) {\n          _a++;\n          if (this.videoList[this.videoListLength + _a]) {\n            this['videoInfo_' + (this.videoListLength + _a) % 5] = this.videoList[this.videoListLength + _a];\n          }\n        }\n        this.previewSetHeight(3);\n      } else if (this.videoIndex < 2) {\n        for (var _i3 = 0; _i3 < 5; _i3++) {\n          if (this.videoList[_i3]) {\n            this['videoInfo_' + _i3] = this.videoList[_i3];\n          }\n        }\n        this.previewSetHeight(4);\n      }\n    },\n    previewSetHeight: function previewSetHeight(tab) {\n      var _this = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.winWidth = res.windowWidth;\n          _this.winHeight = res.windowHeight;\n\n          _this.boxHeight = res.windowHeight * _this.videoListLength;\n          _this.viewTop = -res.windowHeight * _this.videoIndex;\n          _this.viewTopPostion = -res.windowHeight * _this.videoIndex;\n          switch (tab) {\n            case 1:\n              _this['itemViewTop' + (_this.videoIndex - 2) % 5] = res.windowHeight * (_this.\n              videoIndex - 2);\n              _this['itemViewTop' + (_this.videoIndex - 1) % 5] = res.windowHeight * (_this.\n              videoIndex - 1);\n              _this['itemViewTop' + _this.videoIndex % 5] = res.windowHeight * _this.\n              videoIndex;\n              _this['itemViewTop' + (_this.videoIndex + 1) % 5] = res.windowHeight * (_this.\n              videoIndex + 1);\n              _this['itemViewTop' + (_this.videoIndex + 2) % 5] = res.windowHeight * (_this.\n              videoIndex + 2);\n              break;\n            case 2:\n              _this.itemViewTop0 = 0;\n              _this.itemViewTop1 = res.windowHeight * 1;\n              _this.itemViewTop2 = res.windowHeight * 2;\n              _this.itemViewTop3 = res.windowHeight * 3;\n              _this.itemViewTop4 = res.windowHeight * 4;\n\n              break;\n            case 3:\n              _this['itemViewTop' + (_this.videoListLength - 5) % 5] = res.windowHeight * (_this.\n              videoListLength - 5);\n              _this['itemViewTop' + (_this.videoListLength - 4) % 5] = res.windowHeight * (_this.\n              videoListLength - 4);\n              _this['itemViewTop' + (_this.videoListLength - 3) % 5] = res.windowHeight * (_this.\n              videoListLength - 3);\n              _this['itemViewTop' + (_this.videoListLength - 2) % 5] = res.windowHeight * (_this.\n              videoListLength - 2);\n              _this['itemViewTop' + (_this.videoListLength - 1) % 5] = res.windowHeight * (_this.\n              videoListLength - 1);\n              break;\n            case 4:\n              _this.itemViewTop0 = 0;\n              _this.itemViewTop1 = res.windowHeight;\n              _this.itemViewTop2 = res.windowHeight * 2;\n              _this.itemViewTop3 = res.windowHeight * 3;\n              _this.itemViewTop4 = res.windowHeight * 4;\n              break;}\n\n          setTimeout(function () {\n            _this.playVideo(_this.videoIndex % 5, true);\n          }, 500);\n        } });\n\n    },\n    stop: function stop() {\n      this.stopVideo(this.videoIndex % 5, true);\n      clearInterval(musicTimer);\n    },\n    init: function init(list) {var _this2 = this;\n      if (this.preview) return;\n      this.videoList = list;\n      this.videoListLength = this.videoList.length;\n      this.boxHeight = this.videoListLength * this.winHeight;\n      for (var i = 0; i < 5; i++) {\n        if (this.videoList[i]) {\n          this['videoInfo_' + i] = this.videoList[i];\n        }\n      }\n      setTimeout(function () {\n        _this2.playVideo(0);\n      }, 500);\n    },\n    tabLive: function tabLive() {\n      var item = this.videoList[this.videoIndex];\n      this.$emit('tapLive', item);\n    },\n    tabSearch: function tabSearch() {\n      this.$emit('tapSearch');\n    },\n    tabActive: function tabActive(num) {\n      this.$refs.refComment.changeData();\n      this.$emit('tapActive', num);\n    },\n    setRecommendNum: function setRecommendNum(num) {\n      this.$refs.refTopText.setRecommendNum(num);\n    },\n    setPlaceNum: function setPlaceNum(num) {\n      this.$refs.refTopText.setPlaceNum(num);\n    },\n    setFollowNum: function setFollowNum(num) {\n      this.$refs.refTopText.setFollowNum(num);\n    },\n    setPlace: function setPlace(place) {\n      this.$refs.refTopText.setPlace(place);\n    },\n    topShow: function topShow(status) {\n      if (status) {\n        this.topViewStatus = true;\n      } else {\n        this.topViewStatus = false;\n      }\n      this.$refs.refTopText.topShow(status);\n    },\n    showLive: function showLive(status) {\n      this.$refs.refTopText.showLive(status);\n    },\n    tabHead: function tabHead() {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"tapHead\", item);\n    },\n    tabFollow: function tabFollow() {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"tapFollow\", item);\n    },\n    tabLove: function tabLove(i) {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"tapLove\", item);\n    },\n    tabComment: function tabComment() {\n      this.showOther = false;\n      var item = this.videoList[this.videoIndex];\n      this.commentStatus = true;\n      this.$emit(\"tapComment\", item);\n    },\n    tabShare: function tabShare() {\n      this.showOther = false;\n      this.shareStatus = true;\n    },\n    tapShare: function tapShare(e) {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"tapShare\", {\n        video: item,\n        type: e });\n\n    },\n    tabDetail: function tabDetail() {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"tapDetail\", item);\n    },\n    tapCommentLove: function tapCommentLove(e) {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"tapCommentLove\", {\n        comment: e,\n        video: item });\n\n    },\n    send: function send(e) {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"send\", {\n        text: e,\n        video: item });\n\n    },\n    setCommentList: function setCommentList(e) {\n      var item = this.videoList[this.videoIndex];\n      this.$emit(\"setCommentList\", {\n        comment: e,\n        video: item });\n\n    },\n    frontAddData: function frontAddData(item) {\n      this.$refs.refComment.frontAddData(item);\n    },\n    commentInit: function commentInit(arrlist, check) {\n      var item = this.videoList[this.videoIndex];\n      this.$refs.refComment.init(arrlist, check);\n    },\n    changeCommentLove: function changeCommentLove() {\n      this.$refs.refComment.changeCommentLove();\n    },\n    sendOver: function sendOver() {\n      this.$refs.refComment.sendOver();\n    },\n    setCommentData: function setCommentData(arrlist, check) {\n      this.$refs.refComment.setCommentData(arrlist, check);\n    },\n    setTabBarHeight: function setTabBarHeight(height) {\n      this.$refs.refComment.setTabBarHeight(height);\n    },\n    changeLove: function changeLove() {\n      this.videoList[this.videoIndex].isLove = !this.videoList[this.videoIndex].isLove;\n      if (this.videoList[this.videoIndex].isLove) {\n        this.videoList[this.videoIndex].loveNum++;\n        return;\n      }\n      this.videoList[this.videoIndex].loveNum--;\n    },\n    changeFollow: function changeFollow() {\n      this.videoList[this.videoIndex].isFollow = !this.videoList[this.videoIndex].isFollow;\n    },\n    setShareFriend: function setShareFriend(data) {\n      this.$refs.refShare.setFriend(data);\n    },\n    setShareType: function setShareType(data) {\n      this.$refs.refShare.setType(data);\n    },\n    setShareAction: function setShareAction(data) {\n      this.$refs.refShare.setAction(data);\n    },\n    hide: function hide() {\n      this.showOther = true;\n      this.commentStatus = false;\n      this.shareStatus = false;\n    },\n    progressTouchstart: function progressTouchstart(e) {\n      this.pointMove = false;\n      this.pointStart = e.changedTouches[0].screenX;\n    },\n    progressTochmove: function progressTochmove(e) {\n      var sliding = e.changedTouches[0].screenX - this.pointStart + this.pointLeftPosition;\n      var minWidth = parseInt(1 / parseInt(this.time) * this.winWidth);\n      var maxWidth = parseInt((parseInt(this.time) - 1) / parseInt(this.time) * this.winWidth);\n      if (sliding < minWidth) {\n        this.pointLeft = minWidth;\n        this.progress = minWidth;\n      } else if (sliding > maxWidth) {\n        this.pointLeft = maxWidth;\n        this.progress = maxWidth;\n      } else {\n        this.pointLeft = sliding;\n      }\n    },\n    progressTouchend: function progressTouchend(e) {\n      this.pointLeftPosition = this.pointLeft;\n      var s = parseInt(parseInt(this.pointLeft) / this.winWidth * parseInt(this.time));\n      var i = this.videoIndex % 5;\n      this.progress = s;\n      uni.createVideoContext(\"video_id_\" + i, this).seek(s);\n      uni.createVideoContext(\"video_id_\" + i, this).play();\n      this.pointMove = true;\n    },\n    videoClick: function videoClick() {\n      var num = this.videoIndex % 5;\n      if (this[\"videoInfo_\" + num].flag) {\n        this.stopVideo(num, true);\n      } else {\n        this.playVideo(num, true);\n      }\n    },\n    videotouchstart: function videotouchstart(e) {\n      this.videotouchendTimestamp = this.videotouchstartTimestamp;\n      this.videotouchstartTimestamp = e.timestamp;\n      if (this.videotouchstartTimestamp - this.videotouchendTimestamp < 500) return;\n      if (slidingStatus) return;\n      startPageY = e.changedTouches[0].screenY;\n    },\n    videotochmove: function videotochmove(e) {\n      if (this.videotouchstartTimestamp - this.videotouchendTimestamp < 500) return;\n      if (slidingStatus) return;\n      endPageY = e.changedTouches[0].screenY;\n      var sliding = endPageY - startPageY;\n      if (sliding > 20 || sliding < -20) {\n        this.moveView = false;\n      } else {\n        this.moveView = true;\n      }\n      if (this.videoIndex == 0 && sliding > 50) {\n        this.viewTop = 50;\n      } else if (this.videoIndex == this.videoListLength - 1 && sliding < 0) {\n        this.viewTop = this.viewTopPostion;\n      } else {\n        this.viewTop = this.viewTopPostion + sliding;\n      }\n    },\n    videotouchend: function videotouchend(e) {\n      if (this.videotouchstartTimestamp - this.videotouchendTimestamp < 500) return;\n      if (slidingStatus) return;\n      this.moveView = true;\n      endPageY = e.changedTouches[0].screenY;\n      var sliding = endPageY - startPageY;\n      // console.log(\"sliding\",sliding)\n      if (sliding >= -40 && sliding < 0 || sliding <= 40 && sliding > 0) {\n        slidingStatus = true;\n        this.moveView = true;\n        this.videoSlidingReset(sliding);\n        return;\n      }\n      //上滑\n      if (sliding < -30) {\n        slidingStatus = true;\n        if (this.videoIndex == this.videoListLength - 1) {\n          this.videoSlidingReset(sliding);\n          uni.showToast({\n            title: \"这是最后一个视频\",\n            icon: \"none\" });\n\n          return;\n        }\n        this.moveView = false;\n        this.$refs.refComment.changeData();\n        this.videoSlidingToTop(sliding);\n        return;\n      }\n      //下滑\n      if (sliding > 30) {\n        slidingStatus = true;\n        if (this.videoIndex == 0) {\n          this.videoSlidingReset(sliding);\n          this.$emit('refresh');\n          return;\n        }\n        this.moveView = false;\n        this.$refs.refComment.changeData();\n        this.videoSlidingToBottom(sliding);\n      }\n    },\n    // 向上滑动动画\n    videoSlidingToTop: function videoSlidingToTop(sliding) {var _this3 = this;\n      this.stopVideo(this.videoIndex % 5);\n      if (this.videoIndex != this.videoListLength - 1) {\n        this.videoIndex++;\n      }\n      var item = this.videoList[this.videoIndex];\n      this.$emit('change', {\n        position: 'top',\n        video: item,\n        index: this.videoIndex });\n\n      //每次刷到了数组最后第四个视频，就给videoList 添加数据\n      if (this.videoIndex == this.videoListLength - 4) {\n        this.setVideo();\n      }\n      if (this.videoListLength > 5) {\n        this.sortItemView(sliding);\n      }\n      this.viewTopPostion = this.viewTopPostion - this.winHeight;\n      setTimeout(function () {\n        _this3.playVideo(_this3.videoIndex % 5);\n      }, 5);\n      if (this.timingFunction !== \"linear\" && this.timingFunction !== \"ease\") {\n        this.timingFunction = \"linear\";\n      }\n      var s, ss;\n      switch (this.timingFunction) {\n        case \"linear\":\n          s = 3;\n          ss = 35;\n          break;\n        case \"ease\":\n          s = 15;\n          ss = 20;\n          break;}\n\n      var timer = setInterval(function () {\n        _this3.viewTop = _this3.viewTop - ss;\n        if (_this3.viewTop < _this3.viewTopPostion + 10) {\n          _this3.viewTop = _this3.viewTopPostion;\n          clearInterval(timer);\n          slidingStatus = false;\n          _this3.slidingCallback();\n        }\n        if (_this3.timingFunction == \"ease\") {\n          s--;\n          if (s < 3) {\n            s = 3;\n          }\n          ss++;\n          if (ss > 35) {\n            ss = 35;\n          }\n        }\n      }, s);\n    },\n    // 向下滑动动画\n    videoSlidingToBottom: function videoSlidingToBottom(sliding) {var _this4 = this;\n      this.stopVideo(this.videoIndex % 5);\n      if (this.videoIndex != 0) {\n        this.videoIndex--;\n      }\n      var item = this.videoList[this.videoIndex];\n      this.$emit('change', {\n        position: 'bottom',\n        video: item,\n        index: this.videoIndex });\n\n      if (this.videoListLength > 5) {\n        this.sortItemView(sliding);\n      }\n      this.viewTopPostion = this.viewTopPostion + this.winHeight;\n      setTimeout(function () {\n        _this4.playVideo(_this4.videoIndex % 5);\n      }, 5);\n      if (this.timingFunction !== \"linear\" && this.timingFunction !== \"ease\") {\n        this.timingFunction = \"linear\";\n      }\n      var s, ss;\n      switch (this.timingFunction) {\n        case \"linear\":\n          s = 3;\n          ss = 35;\n          break;\n        case \"ease\":\n          s = 15;\n          ss = 20;\n          break;}\n\n      var timer = setInterval(function () {\n        _this4.viewTop = _this4.viewTop + ss;\n        if (_this4.viewTop > _this4.viewTopPostion - 10) {\n          _this4.viewTop = _this4.viewTopPostion;\n          clearInterval(timer);\n          slidingStatus = false;\n          _this4.slidingCallback();\n        }\n        if (_this4.timingFunction == \"ease\") {\n          s--;\n          if (s < 3) {\n            s = 3;\n          }\n          ss++;\n          if (ss > 35) {\n            ss = 35;\n          }\n        }\n      }, s);\n    },\n\n    // 如果滑动的小，就恢复到原位置\n    videoSlidingReset: function videoSlidingReset(sliding) {\n      this.viewTop = this.viewTopPostion;\n      slidingStatus = false;\n    },\n    getSystemInfo: function getSystemInfo() {\n      var _this = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.winWidth = res.windowWidth;\n          _this.winHeight = res.windowHeight;\n          var p = uni.upx2px(150);\n          _this.stopIcon = \"left:\".concat((res.windowWidth - p) / 2, \"px;top:\").concat((res.windowHeight - p) / 2, \"px;\");\n          if (this.preview) return;\n          _this.itemViewTop1 = res.windowHeight;\n          _this.itemViewTop2 = res.windowHeight * 2;\n          _this.itemViewTop3 = res.windowHeight * 3;\n          _this.itemViewTop4 = res.windowHeight * 4;\n          _this.boxHeight = res.windowHeight * 5;\n        } });\n\n    },\n\n    slidingCallback: function slidingCallback() {\n      this.progress = 0;\n    },\n    //滑动组件排序\n    sortItemView: function sortItemView(silding) {\n      // 向上滑动\n      if (silding < 0) {\n        if (this.videoIndex > 2 && this.videoIndex < this.videoListLength - 2) {\n          var i = (this.videoIndex - 3) % 5;\n          this[\"itemViewTop\" + i] = this[\"itemViewTop\" + i] + this.winHeight * 5;\n          this['videoInfo_' + i] = this.videoList[this.videoIndex + 2];\n        }\n        return;\n      }\n      // 向下滑动\n      if (silding > 0) {\n        if (this.videoIndex > 1 && this.videoIndex < this.videoListLength - 3) {\n          var _i4 = (this.videoIndex + 3) % 5;\n          this[\"itemViewTop\" + _i4] = this[\"itemViewTop\" + _i4] - this.winHeight * 5;\n          this['videoInfo_' + _i4] = this.videoList[this.videoIndex - 2];\n        }\n      }\n    },\n    playVideo: function playVideo(num, control) {var _this5 = this;\n      videoPlayingStatus = true;\n      this[\"videoInfo_\" + num].flag = true;\n      var t = this.preview ? 350 : 400;\n      setTimeout(function () {\n        uni.createVideoContext(\"video_id_\" + num, _this5).play();\n      }, t);\n      clearInterval(musicTimer);\n      this.translateX = 10;\n      this.animateTranslateX(num);\n      this.videoFlag = true;\n    },\n    stopVideo: function stopVideo(num, control) {var _this6 = this;\n      if (!control) {\n        this['videoInfo_' + num].coverStatus = true;\n        setTimeout(function () {\n          _this6['videoInfo_' + num].coverStatus = true;\n        }, 600);\n        uni.createVideoContext(\"video_id_\" + num, this).stop();\n      } else {\n        uni.createVideoContext(\"video_id_\" + num, this).pause();\n      }\n      this.translateX = 10;\n      clearInterval(musicTimer);\n      this[\"videoInfo_\" + num].flag = false;\n      this.videoFlag = false;\n    },\n    setVideo: function setVideo() {\n      // let pageNo = parseInt(this.videoListLength / 5) + 2\n      this.$emit('setVideoList', {\n        item: this.videoList[this.videoIndex] });\n\n    },\n    setVideoData: function setVideoData(list) {\n      this.videoList = [].concat(_toConsumableArray(this.videoList), _toConsumableArray(list));\n      this.videoListLength = this.videoList.length;\n      this.boxHeight = this.videoListLength * this.winHeight;\n    },\n    playing: function playing(i) {var _this7 = this;\n      setTimeout(function () {\n        _this7['videoInfo_' + i].coverStatus = false;\n        _this7.moveView = true;\n        slidingStatus = false;\n      }, 600);\n    },\n    timeupdate: function timeupdate(i, e) {var _this8 = this;\n      if (videoPlayingStatus) {\n        slidingStatus = false;\n        videoPlayingStatus = false;\n        setTimeout(function () {\n          _this8['videoInfo_' + i].coverStatus = false;\n          _this8.moveView = true;\n        }, 200);\n      }\n      this[\"videoInfo_\" + i].flag = true;\n      this.videoFlag = true;\n      if (e.detail.duration >= this.progressTime) {\n        this.time = e.detail.duration;\n        this.progress = e.detail.currentTime;\n        this.showProgress = true;\n      } else {\n        this.showProgress = false;\n      }\n    },\n    ended: function ended() {\n      this.progress = 0;\n    },\n    animateTranslateX: function animateTranslateX(i) {var _this9 = this;\n      var num = this['videoInfo_' + i].dubbedText.length * 9;\n      musicTimer = setInterval(function () {\n        _this9.translateX--;\n        if (_this9.translateX == -(num + 20)) {\n          _this9.translateX = num;\n        }\n      }, 100);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9rYWktdmlkZW8tc3dpcGVyL2thaS12aWRlby1zd2lwZXIubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMFlBO0FBQ0E7QUFDQSxpRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQURBO0FBRUEsU0FGQTtBQUdBLG1CQUhBO0FBSUEsY0FKQTtBQUtBLGdCQUxBO0FBTUEsY0FOQTtBQU9BLFlBUEE7QUFRQSxlQVJBO0FBU0EsYUFUQTtBQVVBLG9CQVZBLEc7O0FBWUE7QUFDQTtBQUNBLDZCQURBO0FBRUEseUJBRkE7QUFHQSw2QkFIQSxFQURBOztBQU1BO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBREE7O0FBS0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBTEE7O0FBU0E7QUFDQSxrQkFEQTtBQUVBLHVCQUZBLEVBVEE7O0FBYUE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBYkEsRUFOQTs7O0FBd0JBLE1BeEJBLGtCQXdCQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxvQkFGQTtBQUdBLHlCQUhBO0FBSUEscUJBSkE7QUFLQSwwQkFMQTtBQU1BLHdCQU5BO0FBT0Esc0JBUEE7QUFRQSxtQkFSQTtBQVNBLHFCQVRBO0FBVUEsa0JBVkE7QUFXQSx1QkFYQSxFQVdBO0FBQ0EseUJBWkEsRUFZQTtBQUNBLGlCQWJBO0FBY0Esa0JBZEE7QUFlQSxtQkFmQTtBQWdCQSxnQkFoQkE7QUFpQkEsdUJBakJBO0FBa0JBLG1CQWxCQTtBQW1CQSx3QkFuQkE7QUFvQkEscUJBcEJBO0FBcUJBLHFCQXJCQTtBQXNCQSxxQkF0QkE7QUF1QkEscUJBdkJBO0FBd0JBLHFCQXhCQTtBQXlCQSxnQ0F6QkE7QUEwQkEsZ0NBMUJBO0FBMkJBLGdDQTNCQTtBQTRCQSxnQ0E1QkE7QUE2QkEsZ0NBN0JBO0FBOEJBLDBCQTlCQTtBQStCQSxxQkEvQkE7QUFnQ0EsdUJBaENBO0FBaUNBLGFBakNBO0FBa0NBLGlDQWxDQTtBQW1DQSwrQkFuQ0E7QUFvQ0EscUJBcENBO0FBcUNBLDBCQXJDQTtBQXNDQSxrQkF0Q0E7QUF1Q0EsbUJBdkNBO0FBd0NBLGlCQXhDQTtBQXlDQSxxQkF6Q0E7O0FBMkNBLEdBcEVBO0FBcUVBLGNBckVBLDBCQXFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDZHQUZBOztBQUlBLEdBM0VBO0FBNEVBLFNBNUVBLHFCQTRFQTtBQUNBO0FBQ0E7QUFDQSxHQS9FQTtBQWdGQTtBQUNBLGlCQURBLDJCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsY0FKQSx3QkFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUEsc0JBUkEsZ0NBUUE7QUFDQTtBQUNBLEtBVkE7QUFXQSxzQkFYQSxnQ0FXQTtBQUNBO0FBQ0EsS0FiQTtBQWNBLHNCQWRBLGdDQWNBO0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxzQkFqQkEsZ0NBaUJBO0FBQ0E7QUFDQSxLQW5CQTtBQW9CQSxzQkFwQkEsZ0NBb0JBO0FBQ0E7QUFDQSxLQXRCQTtBQXVCQSxZQXZCQSxzQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpDQSxFQWhGQTs7QUFtSEE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZ0JBSkEsd0JBSUEsS0FKQSxFQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVRBLE1BU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJEQTtBQXNEQSxvQkF0REEsNEJBc0RBLEdBdERBLEVBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQSxHQUNBLENBREE7QUFFQTtBQUNBLHdCQURBLEdBQ0EsQ0FEQTtBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLHdCQURBLEdBQ0EsQ0FEQTtBQUVBO0FBQ0Esd0JBREEsR0FDQSxDQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBREEsR0FDQSxDQURBO0FBRUE7QUFDQSw2QkFEQSxHQUNBLENBREE7QUFFQTtBQUNBLDZCQURBLEdBQ0EsQ0FEQTtBQUVBO0FBQ0EsNkJBREEsR0FDQSxDQURBO0FBRUE7QUFDQSw2QkFEQSxHQUNBLENBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQXZDQTs7QUF5Q0E7QUFDQTtBQUNBLFdBRkEsRUFFQSxHQUZBO0FBR0EsU0FwREE7O0FBc0RBLEtBOUdBO0FBK0dBLFFBL0dBLGtCQStHQTtBQUNBO0FBQ0E7QUFDQSxLQWxIQTtBQW1IQSxRQW5IQSxnQkFtSEEsSUFuSEEsRUFtSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQWhJQTtBQWlJQSxXQWpJQSxxQkFpSUE7QUFDQTtBQUNBO0FBQ0EsS0FwSUE7QUFxSUEsYUFySUEsdUJBcUlBO0FBQ0E7QUFDQSxLQXZJQTtBQXdJQSxhQXhJQSxxQkF3SUEsR0F4SUEsRUF3SUE7QUFDQTtBQUNBO0FBQ0EsS0EzSUE7QUE0SUEsbUJBNUlBLDJCQTRJQSxHQTVJQSxFQTRJQTtBQUNBO0FBQ0EsS0E5SUE7QUErSUEsZUEvSUEsdUJBK0lBLEdBL0lBLEVBK0lBO0FBQ0E7QUFDQSxLQWpKQTtBQWtKQSxnQkFsSkEsd0JBa0pBLEdBbEpBLEVBa0pBO0FBQ0E7QUFDQSxLQXBKQTtBQXFKQSxZQXJKQSxvQkFxSkEsS0FySkEsRUFxSkE7QUFDQTtBQUNBLEtBdkpBO0FBd0pBLFdBeEpBLG1CQXdKQSxNQXhKQSxFQXdKQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9KQTtBQWdLQSxZQWhLQSxvQkFnS0EsTUFoS0EsRUFnS0E7QUFDQTtBQUNBLEtBbEtBO0FBbUtBLFdBbktBLHFCQW1LQTtBQUNBO0FBQ0E7QUFDQSxLQXRLQTtBQXVLQSxhQXZLQSx1QkF1S0E7QUFDQTtBQUNBO0FBQ0EsS0ExS0E7QUEyS0EsV0EzS0EsbUJBMktBLENBM0tBLEVBMktBO0FBQ0E7QUFDQTtBQUNBLEtBOUtBO0FBK0tBLGNBL0tBLHdCQStLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwTEE7QUFxTEEsWUFyTEEsc0JBcUxBO0FBQ0E7QUFDQTtBQUNBLEtBeExBO0FBeUxBLFlBekxBLG9CQXlMQSxDQXpMQSxFQXlMQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGVBRkE7O0FBSUEsS0EvTEE7QUFnTUEsYUFoTUEsdUJBZ01BO0FBQ0E7QUFDQTtBQUNBLEtBbk1BO0FBb01BLGtCQXBNQSwwQkFvTUEsQ0FwTUEsRUFvTUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxtQkFGQTs7QUFJQSxLQTFNQTtBQTJNQSxRQTNNQSxnQkEyTUEsQ0EzTUEsRUEyTUE7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLG1CQUZBOztBQUlBLEtBak5BO0FBa05BLGtCQWxOQSwwQkFrTkEsQ0FsTkEsRUFrTkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxtQkFGQTs7QUFJQSxLQXhOQTtBQXlOQSxnQkF6TkEsd0JBeU5BLElBek5BLEVBeU5BO0FBQ0E7QUFDQSxLQTNOQTtBQTROQSxlQTVOQSx1QkE0TkEsT0E1TkEsRUE0TkEsS0E1TkEsRUE0TkE7QUFDQTtBQUNBO0FBQ0EsS0EvTkE7QUFnT0EscUJBaE9BLCtCQWdPQTtBQUNBO0FBQ0EsS0FsT0E7QUFtT0EsWUFuT0Esc0JBbU9BO0FBQ0E7QUFDQSxLQXJPQTtBQXNPQSxrQkF0T0EsMEJBc09BLE9BdE9BLEVBc09BLEtBdE9BLEVBc09BO0FBQ0E7QUFDQSxLQXhPQTtBQXlPQSxtQkF6T0EsMkJBeU9BLE1Bek9BLEVBeU9BO0FBQ0E7QUFDQSxLQTNPQTtBQTRPQSxjQTVPQSx3QkE0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5QQTtBQW9QQSxnQkFwUEEsMEJBb1BBO0FBQ0E7QUFDQSxLQXRQQTtBQXVQQSxrQkF2UEEsMEJBdVBBLElBdlBBLEVBdVBBO0FBQ0E7QUFDQSxLQXpQQTtBQTBQQSxnQkExUEEsd0JBMFBBLElBMVBBLEVBMFBBO0FBQ0E7QUFDQSxLQTVQQTtBQTZQQSxrQkE3UEEsMEJBNlBBLElBN1BBLEVBNlBBO0FBQ0E7QUFDQSxLQS9QQTtBQWdRQSxRQWhRQSxrQkFnUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXBRQTtBQXFRQSxzQkFyUUEsOEJBcVFBLENBclFBLEVBcVFBO0FBQ0E7QUFDQTtBQUNBLEtBeFFBO0FBeVFBLG9CQXpRQSw0QkF5UUEsQ0F6UUEsRUF5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBdFJBO0FBdVJBLG9CQXZSQSw0QkF1UkEsQ0F2UkEsRUF1UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL1JBO0FBZ1NBLGNBaFNBLHdCQWdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXZTQTtBQXdTQSxtQkF4U0EsMkJBd1NBLENBeFNBLEVBd1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOVNBO0FBK1NBLGlCQS9TQSx5QkErU0EsQ0EvU0EsRUErU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBaFVBO0FBaVVBLGlCQWpVQSx5QkFpVUEsQ0FqVUEsRUFpVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExV0E7QUEyV0E7QUFDQSxxQkE1V0EsNkJBNFdBLE9BNVdBLEVBNFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxtQkFGQTtBQUdBLDhCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLENBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWxCQSxFQWtCQSxDQWxCQTtBQW1CQSxLQW5hQTtBQW9hQTtBQUNBLHdCQXJhQSxnQ0FxYUEsT0FyYUEsRUFxYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLG1CQUZBO0FBR0EsOEJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLENBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWxCQSxFQWtCQSxDQWxCQTtBQW1CQSxLQXhkQTs7QUEwZEE7QUFDQSxxQkEzZEEsNkJBMmRBLE9BM2RBLEVBMmRBO0FBQ0E7QUFDQTtBQUNBLEtBOWRBO0FBK2RBLGlCQS9kQSwyQkErZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWkE7O0FBY0EsS0EvZUE7O0FBaWZBLG1CQWpmQSw2QkFpZkE7QUFDQTtBQUNBLEtBbmZBO0FBb2ZBO0FBQ0EsZ0JBcmZBLHdCQXFmQSxPQXJmQSxFQXFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZnQkE7QUF3Z0JBLGFBeGdCQSxxQkF3Z0JBLEdBeGdCQSxFQXdnQkEsT0F4Z0JBLEVBd2dCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsQ0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuaEJBO0FBb2hCQSxhQXBoQkEscUJBb2hCQSxHQXBoQkEsRUFvaEJBLE9BcGhCQSxFQW9oQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0E7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxpQkE7QUFtaUJBLFlBbmlCQSxzQkFtaUJBO0FBQ0E7QUFDQTtBQUNBLDZDQURBOztBQUdBLEtBeGlCQTtBQXlpQkEsZ0JBemlCQSx3QkF5aUJBLElBemlCQSxFQXlpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdpQkE7QUE4aUJBLFdBOWlCQSxtQkE4aUJBLENBOWlCQSxFQThpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxHQUpBO0FBS0EsS0FwakJBO0FBcWpCQSxjQXJqQkEsc0JBcWpCQSxDQXJqQkEsRUFxakJBLENBcmpCQSxFQXFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsR0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLEtBdmtCQTtBQXdrQkEsU0F4a0JBLG1CQXdrQkE7QUFDQTtBQUNBLEtBMWtCQTtBQTJrQkEscUJBM2tCQSw2QkEya0JBLENBM2tCQSxFQTJrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLEVBS0EsR0FMQTtBQU1BLEtBbmxCQSxFQW5IQSxFIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ2aWV3LWJveFwiIDpzdHlsZT1cInZpZXdUb3BMZW5ndGhcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInZpZGVvLWJveFwiIDpzdHlsZT1cIml0ZW1WaWV3VG9wTGVuZ3RoMFwiPlxyXG5cdFx0XHRcdDx2aWRlbyA6c3JjPVwidmlkZW9JbmZvXzAuc3JjXCIgOnN0eWxlPVwiZmlsbFNjcmVlblwiIDphdXRvcGxheT1cIm15X2ZhbHNlXCIgOmxvb3A9XCJteV90cnVlXCIgXHJcblx0XHRcdFx0XHQ6cGxheS1zdHJhdGVneT1cInBsYXlTdHJhdGVneVwiIDpjb2RlYz1cImNvZGVjXCJcclxuXHRcdFx0XHRcdDpjb250cm9scz1cIm15X2ZhbHNlXCIgOmVuYWJsZS1wbGF5LWdlc3R1cmU9XCJteV90cnVlXCIgOm9iamVjdEZpdD1cInZpZGVvSW5mb18wLm9iamVjdEZpdD92aWRlb0luZm9fMC5vYmplY3RGaXQ6b2JqZWN0Rml0XCJcclxuXHRcdFx0XHRcdDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwibXlfZmFsc2VcIiA6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJteV9mYWxzZVwiIEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZSgwLCRldmVudClcIlxyXG5cdFx0XHRcdFx0QGVuZGVkPSdlbmRlZCgxKScgOnNob3ctcGxheS1idG49XCJteV9mYWxzZVwiIDpzaG93LXByb2dyZXNzPVwibXlfZmFsc2VcIiBpbml0aWFsLXRpbWU9XCIxXCJcclxuXHRcdFx0XHRcdGlkPSd2aWRlb19pZF8wJyBAcGxheT1cInBsYXlpbmcoMClcIj5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCIhdmlkZW9JbmZvXzAuZmxhZ1wiIDpzdHlsZT1cInN0b3BJY29uXCIgIGNsYXNzPVwiY292ZXItdmlldy1zdG9wXCIgPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBjb3Zlci12aWV3LXN0b3AtdGV4dFwiPiYjeGU2MGI7PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cImNvdmVyICYmIHZpZGVvSW5mb18wLmNvdmVyU3RhdHVzXCIgOnN0eWxlPVwiZmlsbFNjcmVlblwiIGNsYXNzPVwidmlkZW8taW1hZ2VcIj5cclxuXHRcdFx0XHRcdDxjb3Zlci1pbWFnZSA6bW9kZT1cInZpZGVvSW5mb18wLm1vZGU/dmlkZW9JbmZvXzAubW9kZTptb2RlXCIgOnNyYz1cInZpZGVvSW5mb18wLmNvdmVyVXJsXCIgIDpzdHlsZT1cImZpbGxTY3JlZW5cIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cIiFjb3ZlciAmJiB2aWRlb0luZm9fMC5jb3ZlclN0YXR1c1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiBjbGFzcz1cInZpZGVvLWltYWdlLW1hc2tcIj5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2aWRlby1hY3Rpb25cIiBAdG91Y2hzdGFydC5zdG9wPSd2aWRlb3RvdWNoc3RhcnQnIEB0b3VjaG1vdmUuc3RvcD1cInZpZGVvdG9jaG1vdmVcIlxyXG5cdFx0XHRcdFx0QHRvdWNoZW5kLnN0b3A9J3ZpZGVvdG91Y2hlbmQnIEBjbGljay5zdG9wPVwidmlkZW9DbGlja1wiPjwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctbGVmdFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dFwiPkB7e3ZpZGVvSW5mb18wLmV4cGVydC5uaWNrTmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb250ZW50LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJ2aWRlb0luZm9fMC5kZXNjcmlwdGlvblwiPnt7dmlkZW9JbmZvXzAuZGVzY3JpcHRpb259fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIiB2LWlmPVwidmlkZW9JbmZvXzEuZHViYmVkVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHZpZXctbGVmdC1pY29uXCI+JiN4ZTYwMDs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlldy1sZWZ0LWR1YmJlZFRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpZXctbGVmdC1kdWJiZWRUZXh0LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwie3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWB9XCI+e3t2aWRlb0luZm9fMS5kdWJiZWRUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50LWFkdmVydFwiIHYtaWY9XCJ2aWRlb0luZm9fMC5hZHZlcnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQtYWR2ZXJ0LXRleHRcIj7lub/lkYo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlZWRldGFpbHNcIiBAY2xpY2s9XCJ0YWJEZXRhaWwoMClcIiB2LWlmPVwidmlkZW9JbmZvXzAuYWR2ZXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VlZGV0YWlscy10ZXh0XCI+5p+l55yL6K+m5oOFPjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LXJpZ2h0LWhlYWRcIj5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwiYXZhdGVyXCIgOnNyYz1cInZpZGVvSW5mb18wLmV4cGVydC5mYWNlVXJsXCIgQGNsaWNrPVwidGFiSGVhZCgwKVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItcmlnaHQtZm9sbG93XCIgdi1pZj1cIiF2aWRlb0luZm9fMC5pc0ZvbGxvd1wiIEBjbGljaz1cInRhYkZvbGxvdygwKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1mb2xsb3ctYmdcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHJpZ2h0LWZvbGxvd1wiPiYjeGU2MGQ7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXJpZ2h0LWZvbGxvd1wiIHYtZWxzZSBAY2xpY2s9XCJ0YWJGb2xsb3coMClcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJnXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCByaWdodC1mb2xsb3dcIj4mI3hlNjllOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRhYkxvdmUoMClcIiA6Y2xhc3M9XCJ2aWRlb0luZm9fMC5pc0xvdmU/J3JlZC1oZWF0Jzond2hpdGUtaGVhdCdcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImljb25mb250IGljb25mb250LXNpemUtaGVhdCBcIj4mI3hlNjRlOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7dmlkZW9JbmZvXzAubG92ZU51bX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGFiQ29tbWVudCgwKVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmZvbnQtc2l6ZVwiPiYjeGU2N2M7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3t2aWRlb0luZm9fMC5jb21tZW50TnVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0YWJTaGFyZSgwKVwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbmZvbnQtc2l6ZVwiPiYjeGU2MzM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3t2aWRlb0luZm9fMC5zaGFyZU51bX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmlkZW8tYm94XCIgOnN0eWxlPVwiaXRlbVZpZXdUb3BMZW5ndGgxXCI+XHJcblxyXG5cdFx0XHRcdDx2aWRlbyA6c3JjPVwidmlkZW9JbmZvXzEuc3JjXCIgOnN0eWxlPVwiZmlsbFNjcmVlblwiIDphdXRvcGxheT1cIm15X2ZhbHNlXCIgOmxvb3A9XCJteV90cnVlXCJcclxuXHRcdFx0XHRcdDpwbGF5LXN0cmF0ZWd5PVwicGxheVN0cmF0ZWd5XCIgOmNvZGVjPVwiY29kZWNcIlxyXG5cdFx0XHRcdFx0OmNvbnRyb2xzPVwibXlfZmFsc2VcIiA6ZW5hYmxlLXBsYXktZ2VzdHVyZT1cIm15X3RydWVcIiA6b2JqZWN0Rml0PVwidmlkZW9JbmZvXzEub2JqZWN0Rml0P3ZpZGVvSW5mb18xLm9iamVjdEZpdDpvYmplY3RGaXRcIlxyXG5cdFx0XHRcdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJteV9mYWxzZVwiIDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cIm15X2ZhbHNlXCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlKDEsJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRAZW5kZWQ9J2VuZGVkKDIpJyA6c2hvdy1wbGF5LWJ0bj1cIm15X2ZhbHNlXCIgOnNob3ctcHJvZ3Jlc3M9XCJteV9mYWxzZVwiIGluaXRpYWwtdGltZT1cIjFcIlxyXG5cdFx0XHRcdFx0aWQ9J3ZpZGVvX2lkXzEnIEBwbGF5PVwicGxheWluZygxKVwiPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cIiF2aWRlb0luZm9fMS5mbGFnXCIgOnN0eWxlPVwic3RvcEljb25cIiBjbGFzcz1cImNvdmVyLXZpZXctc3RvcFwiID5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgY292ZXItdmlldy1zdG9wLXRleHRcIj4mI3hlNjBiOzwvdGV4dD5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCJjb3ZlciAmJiB2aWRlb0luZm9fMS5jb3ZlclN0YXR1c1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcblx0XHRcdFx0XHQ8Y292ZXItaW1hZ2UgOm1vZGU9XCJ2aWRlb0luZm9fMS5tb2RlP3ZpZGVvSW5mb18xLm1vZGU6bW9kZVwiIDpzcmM9XCJ2aWRlb0luZm9fMS5jb3ZlclVybFwiIDpzdHlsZT1cImZpbGxTY3JlZW5cIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cIiFjb3ZlciAmJiB2aWRlb0luZm9fMS5jb3ZlclN0YXR1c1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiBjbGFzcz1cInZpZGVvLWltYWdlLW1hc2tcIj5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2aWRlby1hY3Rpb25cIiBAdG91Y2hzdGFydD0ndmlkZW90b3VjaHN0YXJ0JyBAdG91Y2htb3ZlPVwidmlkZW90b2NobW92ZVwiXHJcblx0XHRcdFx0XHRAdG91Y2hlbmQ9J3ZpZGVvdG91Y2hlbmQnIEBjbGljaz1cInZpZGVvQ2xpY2tcIj48L2Rpdj5cclxuXHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LWxlZnRcIj5cclxuXHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpZXctbGVmdC10ZXh0XCI+QHt7dmlkZW9JbmZvXzEuZXhwZXJ0Lm5pY2tOYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZXctbGVmdC10ZXh0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQtdGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0di1pZj1cInZpZGVvSW5mb18xLmRlc2NyaXB0aW9uXCI+e3t2aWRlb0luZm9fMS5kZXNjcmlwdGlvbn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiIHYtaWY9XCJ2aWRlb0luZm9fMS5kdWJiZWRUZXh0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgdmlldy1sZWZ0LWljb25cIj4mI3hlNjAwOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWV3LWxlZnQtZHViYmVkVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlldy1sZWZ0LWR1YmJlZFRleHQtdGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCJ7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYH1cIj57e3ZpZGVvSW5mb18xLmR1YmJlZFRleHR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQtYWR2ZXJ0XCIgdi1pZj1cInZpZGVvSW5mb18xLmFkdmVydFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtY29udGVudC1hZHZlcnQtdGV4dFwiPuW5v+WRijwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VlZGV0YWlsc1wiIEBjbGljaz1cInRhYkRldGFpbCgxKVwiIHYtaWY9XCJ2aWRlb0luZm9fMS5hZHZlcnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWVkZXRhaWxzLXRleHRcIj7mn6XnnIvor6bmg4U+PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LXJpZ2h0LWhlYWRcIj5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwiYXZhdGVyXCIgOnNyYz1cInZpZGVvSW5mb18xLmV4cGVydC5mYWNlVXJsXCIgQGNsaWNrPVwidGFiSGVhZCgxKVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItcmlnaHQtZm9sbG93XCIgdi1pZj1cIiF2aWRlb0luZm9fMS5pc0ZvbGxvd1wiIEBjbGljaz1cInRhYkZvbGxvdygxKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1mb2xsb3ctYmdcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHJpZ2h0LWZvbGxvd1wiPiYjeGU2MGQ7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXJpZ2h0LWZvbGxvd1wiIHYtZWxzZSBAY2xpY2s9XCJ0YWJGb2xsb3coMSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJnXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCByaWdodC1mb2xsb3dcIj4mI3hlNjllOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0YWJMb3ZlKDEpXCIgOmNsYXNzPVwidmlkZW9JbmZvXzEuaXNMb3ZlPydyZWQtaGVhdCc6J3doaXRlLWhlYXQnXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplLWhlYXQgXCI+JiN4ZTY0ZTs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb18xLmxvdmVOdW19fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRhYkNvbW1lbnQoMSlcIiBjbGFzcz1cImljb25mb250IGljb25mb250LXNpemVcIj4mI3hlNjdjOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7dmlkZW9JbmZvXzEuY29tbWVudE51bX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGFiU2hhcmUoMSlcIiBjbGFzcz1cImljb25mb250IGljb25mb250LXNpemVcIj4mI3hlNjMzOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7dmlkZW9JbmZvXzEuc2hhcmVOdW19fTwvdGV4dD5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInZpZGVvLWJveFwiIDpzdHlsZT1cIml0ZW1WaWV3VG9wTGVuZ3RoMlwiPlxyXG5cdFx0XHRcdDx2aWRlbyA6c3JjPVwidmlkZW9JbmZvXzIuc3JjXCIgOnN0eWxlPVwiZmlsbFNjcmVlblwiIDphdXRvcGxheT1cIm15X2ZhbHNlXCIgOmxvb3A9XCJteV90cnVlXCJcclxuXHRcdFx0XHRcdDpwbGF5LXN0cmF0ZWd5PVwicGxheVN0cmF0ZWd5XCIgOmNvZGVjPVwiY29kZWNcIlxyXG5cdFx0XHRcdFx0OmNvbnRyb2xzPVwibXlfZmFsc2VcIiA6ZW5hYmxlLXBsYXktZ2VzdHVyZT1cIm15X3RydWVcIiA6b2JqZWN0Rml0PVwidmlkZW9JbmZvXzIub2JqZWN0Rml0P3ZpZGVvSW5mb18yLm9iamVjdEZpdDpvYmplY3RGaXRcIlxyXG5cdFx0XHRcdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJteV9mYWxzZVwiIDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cIm15X2ZhbHNlXCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlKDIsJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRAZW5kZWQ9J2VuZGVkKDIpJyA6c2hvdy1wbGF5LWJ0bj1cIm15X2ZhbHNlXCIgOnNob3ctcHJvZ3Jlc3M9XCJteV9mYWxzZVwiIGluaXRpYWwtdGltZT1cIjFcIlxyXG5cdFx0XHRcdFx0aWQ9J3ZpZGVvX2lkXzInIEBwbGF5PVwicGxheWluZygyKVwiPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cIiF2aWRlb0luZm9fMi5mbGFnXCIgY2xhc3M9XCJjb3Zlci12aWV3LXN0b3BcIiA6c3R5bGU9XCJzdG9wSWNvblwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBjb3Zlci12aWV3LXN0b3AtdGV4dFwiPiYjeGU2MGI7PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cImNvdmVyICYmIHZpZGVvSW5mb18yLmNvdmVyU3RhdHVzXCIgOnN0eWxlPVwiZmlsbFNjcmVlblwiIGNsYXNzPVwidmlkZW8taW1hZ2VcIj5cclxuXHRcdFx0XHRcdDxjb3Zlci1pbWFnZSA6bW9kZT1cInZpZGVvSW5mb18yLm1vZGU/dmlkZW9JbmZvXzIubW9kZTptb2RlXCIgIDpzcmM9XCJ2aWRlb0luZm9fMi5jb3ZlclVybFwiICA6c3R5bGU9XCJmaWxsU2NyZWVuXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCIhY292ZXIgJiYgdmlkZW9JbmZvXzIuY292ZXJTdGF0dXNcIiA6c3R5bGU9XCJmaWxsU2NyZWVuXCIgY2xhc3M9XCJ2aWRlby1pbWFnZS1tYXNrXCI+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmlkZW8tYWN0aW9uXCIgQHRvdWNoc3RhcnQ9J3ZpZGVvdG91Y2hzdGFydCcgQHRvdWNobW92ZT1cInZpZGVvdG9jaG1vdmVcIlxyXG5cdFx0XHRcdFx0QHRvdWNoZW5kPSd2aWRlb3RvdWNoZW5kJyBAY2xpY2s9XCJ2aWRlb0NsaWNrXCI+PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1sZWZ0XCI+XHJcblxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dFwiPkB7e3ZpZGVvSW5mb18yLmV4cGVydC5uaWNrTmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb250ZW50LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJ2aWRlb0luZm9fMi5kZXNjcmlwdGlvblwiPnt7dmlkZW9JbmZvXzIuZGVzY3JpcHRpb259fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIiB2LWlmPVwidmlkZW9JbmZvXzIuZHViYmVkVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHZpZXctbGVmdC1pY29uXCI+JiN4ZTYwMDs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlldy1sZWZ0LWR1YmJlZFRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpZXctbGVmdC1kdWJiZWRUZXh0LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwie3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWB9XCI+e3t2aWRlb0luZm9fMi5kdWJiZWRUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50LWFkdmVydFwiIHYtaWY9XCJ2aWRlb0luZm9fMi5hZHZlcnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQtYWR2ZXJ0LXRleHRcIj7lub/lkYo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlZWRldGFpbHNcIiBAY2xpY2s9XCJ0YWJEZXRhaWwoMilcIiB2LWlmPVwidmlkZW9JbmZvXzIuYWR2ZXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VlZGV0YWlscy10ZXh0XCI+5p+l55yL6K+m5oOFPjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctcmlnaHRcIj5cclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodC1oZWFkXCI+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImF2YXRlclwiIDpzcmM9XCJ2aWRlb0luZm9fMi5leHBlcnQuZmFjZVVybFwiIEBjbGljaz1cInRhYkhlYWQoMilcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXJpZ2h0LWZvbGxvd1wiIHYtaWY9XCIhdmlkZW9JbmZvXzIuaXNGb2xsb3dcIiBAY2xpY2s9XCJ0YWJGb2xsb3coMilcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJnXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCByaWdodC1mb2xsb3dcIj4mI3hlNjBkOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci1yaWdodC1mb2xsb3dcIiB2LWVsc2UgQGNsaWNrPVwidGFiRm9sbG93KDIpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1mb2xsb3ctYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1iZ1wiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgcmlnaHQtZm9sbG93XCI+JiN4ZTY5ZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGFiTG92ZSgyKVwiIDpjbGFzcz1cInZpZGVvSW5mb18yLmlzTG92ZT8ncmVkLWhlYXQnOid3aGl0ZS1oZWF0J1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvbmZvbnQgaWNvbmZvbnQtc2l6ZS1oZWF0IFwiPiYjeGU2NGU7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3t2aWRlb0luZm9fMi5sb3ZlTnVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0YWJDb21tZW50KDIpXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTY3Yzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb18yLmNvbW1lbnROdW19fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRhYlNoYXJlKDIpXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTYzMzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb18yLnNoYXJlTnVtfX08L3RleHQ+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ2aWRlby1ib3hcIiA6c3R5bGU9XCJpdGVtVmlld1RvcExlbmd0aDNcIj5cclxuXHRcdFx0XHQ8dmlkZW8gOnNyYz1cInZpZGVvSW5mb18zLnNyY1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiA6YXV0b3BsYXk9XCJteV9mYWxzZVwiIDpsb29wPVwibXlfdHJ1ZVwiXHJcblx0XHRcdFx0XHQ6cGxheS1zdHJhdGVneT1cInBsYXlTdHJhdGVneVwiIDpjb2RlYz1cImNvZGVjXCJcclxuXHRcdFx0XHRcdDpjb250cm9scz1cIm15X2ZhbHNlXCIgOmVuYWJsZS1wbGF5LWdlc3R1cmU9XCJteV90cnVlXCIgOm9iamVjdEZpdD1cInZpZGVvSW5mb18zLm9iamVjdEZpdD92aWRlb0luZm9fMy5vYmplY3RGaXQ6b2JqZWN0Rml0XCJcclxuXHRcdFx0XHRcdDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwibXlfZmFsc2VcIiA6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJteV9mYWxzZVwiIEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZSgzLCRldmVudClcIlxyXG5cdFx0XHRcdFx0QGVuZGVkPSdlbmRlZCgzKScgOnNob3ctcGxheS1idG49XCJteV9mYWxzZVwiIDpzaG93LXByb2dyZXNzPVwibXlfZmFsc2VcIiBpbml0aWFsLXRpbWU9XCIxXCJcclxuXHRcdFx0XHRcdGlkPSd2aWRlb19pZF8zJyBAcGxheT1cInBsYXlpbmcoMylcIj5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCIhdmlkZW9JbmZvXzMuZmxhZ1wiIGNsYXNzPVwiY292ZXItdmlldy1zdG9wXCIgOnN0eWxlPVwic3RvcEljb25cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgY292ZXItdmlldy1zdG9wLXRleHRcIj4mI3hlNjBiOzwvdGV4dD5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCJjb3ZlciAmJiB2aWRlb0luZm9fMy5jb3ZlclN0YXR1c1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcblx0XHRcdFx0XHQ8Y292ZXItaW1hZ2UgOm1vZGU9XCJ2aWRlb0luZm9fMy5tb2RlP3ZpZGVvSW5mb18zLm1vZGU6bW9kZVwiICA6c3JjPVwidmlkZW9JbmZvXzMuY292ZXJVcmxcIiA6c3R5bGU9XCJmaWxsU2NyZWVuXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCIhY292ZXIgJiYgdmlkZW9JbmZvXzMuY292ZXJTdGF0dXNcIiA6c3R5bGU9XCJmaWxsU2NyZWVuXCIgY2xhc3M9XCJ2aWRlby1pbWFnZS1tYXNrXCI+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmlkZW8tYWN0aW9uXCIgQHRvdWNoc3RhcnQ9J3ZpZGVvdG91Y2hzdGFydCcgQHRvdWNobW92ZT1cInZpZGVvdG9jaG1vdmVcIlxyXG5cdFx0XHRcdFx0QHRvdWNoZW5kPSd2aWRlb3RvdWNoZW5kJyBAY2xpY2s9XCJ2aWRlb0NsaWNrXCI+PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1sZWZ0XCI+XHJcblxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dFwiPkB7e3ZpZGVvSW5mb18zLmV4cGVydC5uaWNrTmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb250ZW50LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJ2aWRlb0luZm9fMy5kZXNjcmlwdGlvblwiPnt7dmlkZW9JbmZvXzMuZGVzY3JpcHRpb259fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIiB2LWlmPVwidmlkZW9JbmZvXzMuZHViYmVkVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHZpZXctbGVmdC1pY29uXCI+JiN4ZTYwMDs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlldy1sZWZ0LWR1YmJlZFRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpZXctbGVmdC1kdWJiZWRUZXh0LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwie3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWB9XCI+e3t2aWRlb0luZm9fMy5kdWJiZWRUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50LWFkdmVydFwiIHYtaWY9XCJ2aWRlb0luZm9fMy5hZHZlcnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQtYWR2ZXJ0LXRleHRcIj7lub/lkYo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlZWRldGFpbHNcIiBAY2xpY2s9XCJ0YWJEZXRhaWwoMylcIiB2LWlmPVwidmlkZW9JbmZvXzMuYWR2ZXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VlZGV0YWlscy10ZXh0XCI+5p+l55yL6K+m5oOFPjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctcmlnaHRcIj5cclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodC1oZWFkXCI+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImF2YXRlclwiIDpzcmM9XCJ2aWRlb0luZm9fMy5leHBlcnQuZmFjZVVybFwiIEBjbGljaz1cInRhYkhlYWQoMylcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXJpZ2h0LWZvbGxvd1wiIHYtaWY9XCIhdmlkZW9JbmZvXzMuaXNGb2xsb3dcIiBAY2xpY2s9XCJ0YWJGb2xsb3coMylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJnXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCByaWdodC1mb2xsb3dcIj4mI3hlNjBkOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci1yaWdodC1mb2xsb3dcIiB2LWVsc2UgQGNsaWNrPVwidGFiRm9sbG93KDMpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1mb2xsb3ctYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1iZ1wiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgcmlnaHQtZm9sbG93XCI+JiN4ZTY5ZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGFiTG92ZSgzKVwiIDpjbGFzcz1cInZpZGVvSW5mb18zLmlzTG92ZT8ncmVkLWhlYXQnOid3aGl0ZS1oZWF0J1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvbmZvbnQgaWNvbmZvbnQtc2l6ZS1oZWF0IFwiPiYjeGU2NGU7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3t2aWRlb0luZm9fMy5sb3ZlTnVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0YWJDb21tZW50KDMpXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTY3Yzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb18zLmNvbW1lbnROdW19fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRhYlNoYXJlKDMpXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTYzMzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb18zLnNoYXJlTnVtfX08L3RleHQ+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ2aWRlby1ib3hcIiA6c3R5bGU9XCJpdGVtVmlld1RvcExlbmd0aDRcIj5cclxuXHRcdFx0XHQ8dmlkZW8gOnNyYz1cInZpZGVvSW5mb180LnNyY1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiA6YXV0b3BsYXk9XCJteV9mYWxzZVwiIDpsb29wPVwibXlfdHJ1ZVwiXHJcblx0XHRcdFx0XHQ6cGxheS1zdHJhdGVneT1cInBsYXlTdHJhdGVneVwiIDpjb2RlYz1cImNvZGVjXCJcclxuXHRcdFx0XHRcdDpjb250cm9scz1cIm15X2ZhbHNlXCIgOmVuYWJsZS1wbGF5LWdlc3R1cmU9XCJteV90cnVlXCIgOm9iamVjdEZpdD1cInZpZGVvSW5mb180Lm9iamVjdEZpdD92aWRlb0luZm9fNC5vYmplY3RGaXQ6b2JqZWN0Rml0XCJcclxuXHRcdFx0XHRcdDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwibXlfZmFsc2VcIiA6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJteV9mYWxzZVwiIEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZSg0LCRldmVudClcIlxyXG5cdFx0XHRcdFx0QGVuZGVkPSdlbmRlZCg0KScgOnNob3ctcGxheS1idG49XCJteV9mYWxzZVwiIDpzaG93LXByb2dyZXNzPVwibXlfZmFsc2VcIiBpbml0aWFsLXRpbWU9XCIxXCJcclxuXHRcdFx0XHRcdGlkPSd2aWRlb19pZF80JyBAcGxheT1cInBsYXlpbmcoNClcIj5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCIhdmlkZW9JbmZvXzQuZmxhZ1wiIGNsYXNzPVwiY292ZXItdmlldy1zdG9wXCIgOnN0eWxlPVwic3RvcEljb25cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgY292ZXItdmlldy1zdG9wLXRleHRcIj4mI3hlNjBiOzwvdGV4dD5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCJjb3ZlciAmJiB2aWRlb0luZm9fNC5jb3ZlclN0YXR1c1wiIDpzdHlsZT1cImZpbGxTY3JlZW5cIiBjbGFzcz1cInZpZGVvLWltYWdlXCI+XHJcblx0XHRcdFx0XHQ8Y292ZXItaW1hZ2UgOm1vZGU9XCJ2aWRlb0luZm9fNC5tb2RlP3ZpZGVvSW5mb180Lm1vZGU6bW9kZVwiICA6c3JjPVwidmlkZW9JbmZvXzQuY292ZXJVcmxcIiAgOnN0eWxlPVwiZmlsbFNjcmVlblwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyB2LWlmPVwiIWNvdmVyICYmIHZpZGVvSW5mb180LmNvdmVyU3RhdHVzXCIgOnN0eWxlPVwiZmlsbFNjcmVlblwiIGNsYXNzPVwidmlkZW8taW1hZ2UtbWFza1wiPlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInZpZGVvLWFjdGlvblwiIEB0b3VjaHN0YXJ0PSd2aWRlb3RvdWNoc3RhcnQnIEB0b3VjaG1vdmU9XCJ2aWRlb3RvY2htb3ZlXCJcclxuXHRcdFx0XHRcdEB0b3VjaGVuZD0ndmlkZW90b3VjaGVuZCcgQGNsaWNrPVwidmlkZW9DbGlja1wiPjwvZGl2PlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1sZWZ0XCI+XHJcblxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dFwiPkB7e3ZpZGVvSW5mb180LmV4cGVydC5uaWNrTmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWV3LWxlZnQtdGV4dC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1jb250ZW50LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCJ2aWRlb0luZm9fNC5kZXNjcmlwdGlvblwiPnt7dmlkZW9JbmZvXzQuZGVzY3JpcHRpb259fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIiB2LWlmPVwidmlkZW9JbmZvXzQuZHViYmVkVGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHZpZXctbGVmdC1pY29uXCI+JiN4ZTYwMDs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlldy1sZWZ0LWR1YmJlZFRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInZpZXctbGVmdC1kdWJiZWRUZXh0LXRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwie3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWB9XCI+e3t2aWRlb0luZm9fNC5kdWJiZWRUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50LWFkdmVydFwiIHYtaWY9XCJ2aWRlb0luZm9fNC5hZHZlcnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWNvbnRlbnQtYWR2ZXJ0LXRleHRcIj7lub/lkYo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlZWRldGFpbHNcIiBAY2xpY2s9XCJ0YWJEZXRhaWwoNClcIiB2LWlmPVwidmlkZW9JbmZvXzQuYWR2ZXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VlZGV0YWlscy10ZXh0XCI+5p+l55yL6K+m5oOFPjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctcmlnaHRcIj5cclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodC1oZWFkXCI+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImF2YXRlclwiIDpzcmM9XCJ2aWRlb0luZm9fNC5leHBlcnQuZmFjZVVybFwiIEBjbGljaz1cInRhYkhlYWQoNClcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXJpZ2h0LWZvbGxvd1wiIHYtaWY9XCIhdmlkZW9JbmZvXzQuaXNGb2xsb3dcIiBAY2xpY2s9XCJ0YWJGb2xsb3coNClcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmlnaHQtZm9sbG93LWJnXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCByaWdodC1mb2xsb3dcIj4mI3hlNjBkOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci1yaWdodC1mb2xsb3dcIiB2LWVsc2UgQGNsaWNrPVwidGFiRm9sbG93KDQpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyaWdodC1mb2xsb3ctYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0LWZvbGxvdy1iZ1wiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgcmlnaHQtZm9sbG93XCI+JiN4ZTY5ZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGFiTG92ZSg0KVwiIDpjbGFzcz1cInZpZGVvSW5mb180LmlzTG92ZT8ncmVkLWhlYXQnOid3aGl0ZS1oZWF0J1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvbmZvbnQgaWNvbmZvbnQtc2l6ZS1oZWF0IFwiPiYjeGU2NGU7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3t2aWRlb0luZm9fNC5sb3ZlTnVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0YWJDb21tZW50KDQpXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTY3Yzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb180LmNvbW1lbnROdW19fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cInRhYlNoYXJlKDQpXCIgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTYzMzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e3ZpZGVvSW5mb180LnNoYXJlTnVtfX08L3RleHQ+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwidmlkZW9GbGFnXCI+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cInNob3dQcm9ncmVzcyAmJiBtb3ZlVmlldyAmJiBwcm9ncmVzcz4xICYmIHNob3dPdGhlclwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyLWJveFwiIDpzdHlsZT1cInt3aWR0aDpwb2ludE1vdmUgPyBiYXJXaWR0aCA6IHBvaW50TGVmdCsncHgnfVwiID5cclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCI+PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJwcm9ncmVzcy1iYXItcG9pbnRcIj48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCJzaG93UHJvZ3Jlc3MgJiYgbW92ZVZpZXcgJiYgcHJvZ3Jlc3M+MSAmJiBzaG93T3RoZXJcIiBjbGFzcz1cInByb2dyZXNzLWJhci1ib3hcIiA6c3R5bGU9XCJ7d2lkdGg6d2luV2lkdGgrJ3B4J31cIiA+XHJcblx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInByb2dyZXNzLWJhci1iZ1wiPjwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cInNob3dQcm9ncmVzcyAmJiBtb3ZlVmlldyAmJiBwcm9ncmVzcz4xICYmIHNob3dPdGhlclwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyLWJveC1hY3RpdmVcIiA6c3R5bGU9XCJ7d2lkdGg6cG9pbnRNb3ZlID8gYmFyV2lkdGggOiBwb2ludExlZnQrJ3B4J31cIiA+XHJcblx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInByb2dyZXNzLWJhci1hY3RpdmVcIj48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInByb2dyZXNzLWJhci1wb2ludC1hY3RpdmVcIj48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHYtaWY9XCJzaG93UHJvZ3Jlc3NcIiBAdG91Y2hzdGFydD0ncHJvZ3Jlc3NUb3VjaHN0YXJ0JyBAdG91Y2htb3ZlPVwicHJvZ3Jlc3NUb2NobW92ZVwiXHJcblx0XHRcdFx0QHRvdWNoZW5kPSdwcm9ncmVzc1RvdWNoZW5kJyBjbGFzcz1cIm1vdmUtcG9pbnRcIiA6c3R5bGU9XCJ7bGVmdDpwb2ludE1vdmUgPyBiYXJXaWR0aCA6IHBvaW50TGVmdCsncHgnfVwiID48L2Rpdj5cclxuXHRcdDxjb21tZW50IHJlZj1cInJlZkNvbW1lbnRcIiA6Y29tbWVudFN0YXR1cz1cImNvbW1lbnRTdGF0dXNcIiBAbWFzaz1cImhpZGVcIiBAdGFwQ29tbWVudExvdmU9XCJ0YXBDb21tZW50TG92ZSgkZXZlbnQpXCJcclxuXHRcdFx0QHNlbmQ9XCJzZW5kKCRldmVudClcIiBAc2V0Q29tbWVudExpc3Q9XCJzZXRDb21tZW50TGlzdCgkZXZlbnQpXCI+PC9jb21tZW50PlxyXG5cdFx0PHNoYXJlIHJlZj1cInJlZlNoYXJlXCIgOnNoYXJlU3RhdHVzPVwic2hhcmVTdGF0dXNcIiBAbWFzaz1cImhpZGVcIiBAc2hhcmU9XCJ0YXBTaGFyZSgkZXZlbnQpXCI+PC9zaGFyZT5cclxuXHRcdDx0b3AtdGV4dCByZWY9XCJyZWZUb3BUZXh0XCIgQGxpdmU9XCJ0YWJMaXZlXCIgQHNlYXJjaD1cInRhYlNlYXJjaFwiIEBhY3RpdmU9XCJ0YWJBY3RpdmVcIj48L3RvcC10ZXh0PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbXBvbmVudHMvY29tbWVudC5udnVlJ1xyXG5cdGltcG9ydCBzaGFyZSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmUubnZ1ZSdcclxuXHRpbXBvcnQgdG9wVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdG9wLXRleHQubnZ1ZSdcclxuXHR2YXIgc2xpZGluZ1N0YXR1cyA9IGZhbHNlO1xyXG5cdHZhciBzdGFydFBhZ2VZLCBlbmRQYWdlWTtcclxuXHRsZXQgbXVzaWNUaW1lciA9IG51bGw7XHJcblx0bGV0IHZpZGVvUGxheWluZ1N0YXR1cyA9IGZhbHNlXHJcblx0bGV0IGluaXRWaWRlb0luZm8gPSB7XHJcblx0XHRleHBlcnQ6IHt9LFxyXG5cdFx0c3JjOiBcIlwiLFxyXG5cdFx0Y292ZXJTdGF0dXM6IHRydWUsXHJcblx0XHRjb3ZlcjogZmFsc2UsXHJcblx0XHRuaWNrTmFtZTogXCLmmLXnp7BcIixcclxuXHRcdGRldGFpbDogXCLmj4/ov7BcIixcclxuXHRcdGxvdmVOdW06IDAsXHJcblx0XHRjb21tZW50TnVtOiAwLFxyXG5cdFx0c2hhcmVOdW06IDAsXHJcblx0XHRkdWJiZWRUZXh0OiBcIuS8mOe+jumfs+S5kFwiXHJcblx0fVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Y29tbWVudCxcclxuXHRcdFx0c2hhcmUsXHJcblx0XHRcdHRvcFRleHRcclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRjb3Zlcjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJldmlldzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltaW5nRnVuY3Rpb246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogXCJsaW5lYXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9ncmVzc1RpbWU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMTBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cHJvZ3Jlc3M6IDAsXHJcblx0XHRcdFx0bW92ZVZpZXc6IHRydWUsXHJcblx0XHRcdFx0c2hvd1Byb2dyZXNzOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93T3RoZXI6IHRydWUsXHJcblx0XHRcdFx0Y29tbWVudFN0YXR1czogZmFsc2UsXHJcblx0XHRcdFx0c2hhcmVTdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHRcdHRyYW5zbGF0ZVg6ICcxMCcsXHJcblx0XHRcdFx0bXlfdHJ1ZTogdHJ1ZSxcclxuXHRcdFx0XHRteV9mYWxzZTogZmFsc2UsXHJcblx0XHRcdFx0Ym94SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdG9iamVjdEZpdDogXCJmaWxsXCIsIC8v6KeG6aKR6KGo546w5b2i5byPIOWPr+WPguiAg3ZpZGVv57uE5Lu255qEb2JqZWN0LWZpdOWxnuaApyBjb250YWlu77ya5YyF5ZCr77yMZmlsbO+8muWhq+WFhe+8jGNvdmVy77ya6KaG55uWXHJcblx0XHRcdFx0bW9kZTogXCJzY2FsZVRvRmlsbFwiLCAvL+WwgemdouWbvue8qeaUvuaooeW8jyDlj6/lj4LogINpbWFnZee7hOS7tueahG1vZGXlsZ7mgKdcclxuXHRcdFx0XHR3aW5XaWR0aDogMSxcclxuXHRcdFx0XHR3aW5IZWlnaHQ6IDEsXHJcblx0XHRcdFx0dmlkZW9JbmRleDogMCxcclxuXHRcdFx0XHR2aWV3VG9wOiAwLFxyXG5cdFx0XHRcdHZpZXdUb3BQb3N0aW9uOiAwLFxyXG5cdFx0XHRcdHZpZGVvTGlzdDogW10sXHJcblx0XHRcdFx0dmlkZW9MaXN0TGVuZ3RoOiAwLFxyXG5cdFx0XHRcdGl0ZW1WaWV3VG9wMDogMCxcclxuXHRcdFx0XHRpdGVtVmlld1RvcDE6IDAsXHJcblx0XHRcdFx0aXRlbVZpZXdUb3AyOiAwLFxyXG5cdFx0XHRcdGl0ZW1WaWV3VG9wMzogMCxcclxuXHRcdFx0XHRpdGVtVmlld1RvcDQ6IDAsXHJcblx0XHRcdFx0dmlkZW9JbmZvXzA6IGluaXRWaWRlb0luZm8sXHJcblx0XHRcdFx0dmlkZW9JbmZvXzE6IGluaXRWaWRlb0luZm8sXHJcblx0XHRcdFx0dmlkZW9JbmZvXzI6IGluaXRWaWRlb0luZm8sXHJcblx0XHRcdFx0dmlkZW9JbmZvXzM6IGluaXRWaWRlb0luZm8sXHJcblx0XHRcdFx0dmlkZW9JbmZvXzQ6IGluaXRWaWRlb0luZm8sXHJcblx0XHRcdFx0dG9wVmlld1N0YXR1czogZmFsc2UsXHJcblx0XHRcdFx0cGxheVN0cmF0ZWd5OiAyLFxyXG5cdFx0XHRcdGNvZGVjOiAnaGFyZHdhcmUnLFxyXG5cdFx0XHRcdHRpbWU6IDEsXHJcblx0XHRcdFx0dmlkZW90b3VjaHN0YXJ0VGltZXN0YW1wOiAwLFxyXG5cdFx0XHRcdHZpZGVvdG91Y2hlbmRUaW1lc3RhbXA6IDAsXHJcblx0XHRcdFx0dmlkZW9GbGFnOiB0cnVlLFxyXG5cdFx0XHRcdHBvaW50TGVmdFBvc2l0aW9uOiAwLFxyXG5cdFx0XHRcdHBvaW50TGVmdDogMCxcclxuXHRcdFx0XHRwb2ludFN0YXJ0OiAwLFxyXG5cdFx0XHRcdHBvaW50RW5kOiAwLFxyXG5cdFx0XHRcdHBvaW50TW92ZTp0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlQ3JlYXRlKCkge1xyXG5cdFx0XHR2YXIgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxyXG5cdFx0XHRcdCdzcmMnOiBcInVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8yNzUxODgwX3EwdjN3MnM4emRzLnR0Zj90PTE2MjkyNTExNjIwNzYnKSBmb3JtYXQoJ3RydWV0eXBlJylcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJwb3J0cmFpdC1wcmltYXJ5XCIpXHJcblx0XHRcdHRoaXMuX19pbml0KClcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR2aWV3VG9wTGVuZ3RoKCkge1xyXG5cdFx0XHRcdHJldHVybiBgaGVpZ2h0OiR7dGhpcy5ib3hIZWlnaHR9cHg7dG9wOiR7dGhpcy52aWV3VG9wfXB4O2BcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmlsbFNjcmVlbigpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSBgaGVpZ2h0OiR7dGhpcy53aW5IZWlnaHR9cHg7d2lkdGg6JHt0aGlzLndpbldpZHRofXB4O2BcclxuXHRcdFx0XHRyZXR1cm4gc3R5bGVcclxuXHRcdFx0fSxcclxuXHRcdFx0aXRlbVZpZXdUb3BMZW5ndGgwKCkge1xyXG5cdFx0XHRcdHJldHVybiBgaGVpZ2h0OiR7dGhpcy53aW5IZWlnaHR9cHg7dG9wOiR7dGhpcy5pdGVtVmlld1RvcDB9cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpdGVtVmlld1RvcExlbmd0aDEoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGBoZWlnaHQ6JHt0aGlzLndpbkhlaWdodH1weDt0b3A6JHt0aGlzLml0ZW1WaWV3VG9wMX1weDtgXHJcblx0XHRcdH0sXHJcblx0XHRcdGl0ZW1WaWV3VG9wTGVuZ3RoMigpIHtcclxuXHRcdFx0XHRyZXR1cm4gYGhlaWdodDoke3RoaXMud2luSGVpZ2h0fXB4O3RvcDoke3RoaXMuaXRlbVZpZXdUb3AyfXB4O2BcclxuXHRcdFx0fSxcclxuXHRcdFx0aXRlbVZpZXdUb3BMZW5ndGgzKCkge1xyXG5cdFx0XHRcdHJldHVybiBgaGVpZ2h0OiR7dGhpcy53aW5IZWlnaHR9cHg7dG9wOiR7dGhpcy5pdGVtVmlld1RvcDN9cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpdGVtVmlld1RvcExlbmd0aDQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGBoZWlnaHQ6JHt0aGlzLndpbkhlaWdodH1weDt0b3A6JHt0aGlzLml0ZW1WaWV3VG9wNH1weDtgXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhcldpZHRoKCkge1xyXG5cdFx0XHRcdGxldCB3aWR0aCA9IDBcclxuXHRcdFx0XHRpZiAodGhpcy50aW1lKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5wb2ludE1vdmUpIHtcclxuXHRcdFx0XHRcdFx0d2lkdGggPSBwYXJzZUludCh0aGlzLnByb2dyZXNzIC8gdGhpcy50aW1lICogcGFyc2VJbnQodGhpcy53aW5XaWR0aCkpXHJcblx0XHRcdFx0XHRcdHRoaXMucG9pbnRMZWZ0ID0gd2lkdGhcclxuXHRcdFx0XHRcdFx0dGhpcy5wb2ludExlZnRQb3NpdGlvbiA9IHdpZHRoXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBgJHt3aWR0aH1weGBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0X19pbml0KCkge1xyXG5cdFx0XHRcdHRoaXMuZ2V0U3lzdGVtSW5mbygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHByZXZpZXdWaWRlbyhpbmRleCwgbGlzdCkge1xyXG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChsaXN0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBsaXN0XHJcblx0XHRcdFx0dGhpcy52aWRlb0luZGV4ID0gaW5kZXhcclxuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXHJcblx0XHRcdFx0aWYgKHRoaXMudmlkZW9JbmRleCA+IDEgJiYgdGhpcy52aWRlb0luZGV4IDwgdGhpcy52aWRlb0xpc3RMZW5ndGggLSAyKSB7XHJcblx0XHRcdFx0XHRsZXQgYSA9IC0zXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRhKytcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleCArIGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpc1sndmlkZW9JbmZvXycgKyAodGhpcy52aWRlb0luZGV4ICsgYSkgJSA1XSA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleCArIGFdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMucHJldmlld1NldEhlaWdodCgxKVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy52aWRlb0xpc3RMZW5ndGggPCA2KSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy52aWRlb0xpc3RbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzWyd2aWRlb0luZm9fJyArIGldID0gdGhpcy52aWRlb0xpc3RbaV1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5wcmV2aWV3U2V0SGVpZ2h0KDIpXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvSW5kZXggPiAodGhpcy52aWRlb0xpc3RMZW5ndGggLSAzKSkge1xyXG5cdFx0XHRcdFx0bGV0IGEgPSAtNlxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0YSsrXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvTGlzdExlbmd0aCArIGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpc1sndmlkZW9JbmZvXycgKyAodGhpcy52aWRlb0xpc3RMZW5ndGggKyBhKSAlIDVdID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0xpc3RMZW5ndGggKyBhXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnByZXZpZXdTZXRIZWlnaHQoMylcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudmlkZW9JbmRleCA8IDIpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnZpZGVvTGlzdFtpXSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXNbJ3ZpZGVvSW5mb18nICsgaV0gPSB0aGlzLnZpZGVvTGlzdFtpXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnByZXZpZXdTZXRIZWlnaHQoNClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHByZXZpZXdTZXRIZWlnaHQodGFiKSB7XHJcblx0XHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0X3RoaXMud2luV2lkdGggPSByZXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHRcdF90aGlzLndpbkhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRfdGhpcy5ib3hIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0ICogX3RoaXMudmlkZW9MaXN0TGVuZ3RoXHJcblx0XHRcdFx0XHRcdF90aGlzLnZpZXdUb3AgPSAtcmVzLndpbmRvd0hlaWdodCAqIF90aGlzLnZpZGVvSW5kZXhcclxuXHRcdFx0XHRcdFx0X3RoaXMudmlld1RvcFBvc3Rpb24gPSAtcmVzLndpbmRvd0hlaWdodCAqIF90aGlzLnZpZGVvSW5kZXhcclxuXHRcdFx0XHRcdFx0c3dpdGNoICh0YWIpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpc1snaXRlbVZpZXdUb3AnICsgKF90aGlzLnZpZGVvSW5kZXggLSAyKSAlIDVdID0gcmVzLndpbmRvd0hlaWdodCAqIChfdGhpc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQudmlkZW9JbmRleCAtIDIpXHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpc1snaXRlbVZpZXdUb3AnICsgKF90aGlzLnZpZGVvSW5kZXggLSAxKSAlIDVdID0gcmVzLndpbmRvd0hlaWdodCAqIChfdGhpc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQudmlkZW9JbmRleCAtIDEpXHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpc1snaXRlbVZpZXdUb3AnICsgKF90aGlzLnZpZGVvSW5kZXgpICUgNV0gPSByZXMud2luZG93SGVpZ2h0ICogX3RoaXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnZpZGVvSW5kZXhcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzWydpdGVtVmlld1RvcCcgKyAoX3RoaXMudmlkZW9JbmRleCArIDEpICUgNV0gPSByZXMud2luZG93SGVpZ2h0ICogKF90aGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdC52aWRlb0luZGV4ICsgMSlcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzWydpdGVtVmlld1RvcCcgKyAoX3RoaXMudmlkZW9JbmRleCArIDIpICUgNV0gPSByZXMud2luZG93SGVpZ2h0ICogKF90aGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdC52aWRlb0luZGV4ICsgMilcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wMCA9IDBcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wMSA9IHJlcy53aW5kb3dIZWlnaHQgKiAxXHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5pdGVtVmlld1RvcDIgPSByZXMud2luZG93SGVpZ2h0ICogMlxyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuaXRlbVZpZXdUb3AzID0gcmVzLndpbmRvd0hlaWdodCAqIDNcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wNCA9IHJlcy53aW5kb3dIZWlnaHQgKiA0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXNbJ2l0ZW1WaWV3VG9wJyArIChfdGhpcy52aWRlb0xpc3RMZW5ndGggLSA1KSAlIDVdID0gcmVzLndpbmRvd0hlaWdodCAqIChfdGhpc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQudmlkZW9MaXN0TGVuZ3RoIC0gNSlcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzWydpdGVtVmlld1RvcCcgKyAoX3RoaXMudmlkZW9MaXN0TGVuZ3RoIC0gNCkgJSA1XSA9IHJlcy53aW5kb3dIZWlnaHQgKiAoX3RoaXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnZpZGVvTGlzdExlbmd0aCAtIDQpXHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpc1snaXRlbVZpZXdUb3AnICsgKF90aGlzLnZpZGVvTGlzdExlbmd0aCAtIDMpICUgNV0gPSByZXMud2luZG93SGVpZ2h0ICogKF90aGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdC52aWRlb0xpc3RMZW5ndGggLSAzKVxyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXNbJ2l0ZW1WaWV3VG9wJyArIChfdGhpcy52aWRlb0xpc3RMZW5ndGggLSAyKSAlIDVdID0gcmVzLndpbmRvd0hlaWdodCAqIChfdGhpc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQudmlkZW9MaXN0TGVuZ3RoIC0gMilcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzWydpdGVtVmlld1RvcCcgKyAoX3RoaXMudmlkZW9MaXN0TGVuZ3RoIC0gMSkgJSA1XSA9IHJlcy53aW5kb3dIZWlnaHQgKiAoX3RoaXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnZpZGVvTGlzdExlbmd0aCAtIDEpXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5pdGVtVmlld1RvcDAgPSAwXHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5pdGVtVmlld1RvcDEgPSByZXMud2luZG93SGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5pdGVtVmlld1RvcDIgPSByZXMud2luZG93SGVpZ2h0ICogMlxyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuaXRlbVZpZXdUb3AzID0gcmVzLndpbmRvd0hlaWdodCAqIDNcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wNCA9IHJlcy53aW5kb3dIZWlnaHQgKiA0XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5wbGF5VmlkZW8oX3RoaXMudmlkZW9JbmRleCAlIDUsIHRydWUpXHJcblx0XHRcdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RvcCgpIHtcclxuXHRcdFx0XHR0aGlzLnN0b3BWaWRlbyh0aGlzLnZpZGVvSW5kZXggJSA1LCB0cnVlKVxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwobXVzaWNUaW1lcilcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdChsaXN0KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucHJldmlldykgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBsaXN0XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RMZW5ndGggPSB0aGlzLnZpZGVvTGlzdC5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5ib3hIZWlnaHQgPSB0aGlzLnZpZGVvTGlzdExlbmd0aCAqIHRoaXMud2luSGVpZ2h0XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZGVvTGlzdFtpXSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzWyd2aWRlb0luZm9fJyArIGldID0gdGhpcy52aWRlb0xpc3RbaV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXlWaWRlbygwKVxyXG5cdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiTGl2ZSgpIHtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd0YXBMaXZlJywgaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiU2VhcmNoKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3RhcFNlYXJjaCcpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhYkFjdGl2ZShudW0pIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZkNvbW1lbnQuY2hhbmdlRGF0YSgpXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndGFwQWN0aXZlJywgbnVtKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRSZWNvbW1lbmROdW0obnVtKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZUb3BUZXh0LnNldFJlY29tbWVuZE51bShudW0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFBsYWNlTnVtKG51bSkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmVG9wVGV4dC5zZXRQbGFjZU51bShudW0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEZvbGxvd051bShudW0pIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZlRvcFRleHQuc2V0Rm9sbG93TnVtKG51bSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0UGxhY2UocGxhY2UpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZlRvcFRleHQuc2V0UGxhY2UocGxhY2UpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvcFNob3coc3RhdHVzKSB7XHJcblx0XHRcdFx0aWYgKHN0YXR1cykge1xyXG5cdFx0XHRcdFx0dGhpcy50b3BWaWV3U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvcFZpZXdTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZlRvcFRleHQudG9wU2hvdyhzdGF0dXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dMaXZlKHN0YXR1cykge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmVG9wVGV4dC5zaG93TGl2ZShzdGF0dXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhYkhlYWQoKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdFx0dGhpcy4kZW1pdChcInRhcEhlYWRcIiwgaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiRm9sbG93KCkge1xyXG5cdFx0XHRcdGxldCBpdGVtID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJ0YXBGb2xsb3dcIiwgaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiTG92ZShpKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdFx0dGhpcy4kZW1pdChcInRhcExvdmVcIiwgaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiQ29tbWVudCgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dPdGhlciA9IGZhbHNlXHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdFx0dGhpcy5jb21tZW50U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJ0YXBDb21tZW50XCIsIGl0ZW0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhYlNoYXJlKCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd090aGVyID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLnNoYXJlU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXBTaGFyZShlKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdFx0dGhpcy4kZW1pdChcInRhcFNoYXJlXCIsIHtcclxuXHRcdFx0XHRcdHZpZGVvOiBpdGVtLFxyXG5cdFx0XHRcdFx0dHlwZTogZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhYkRldGFpbCgpIHtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwidGFwRGV0YWlsXCIsIGl0ZW0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhcENvbW1lbnRMb3ZlKGUpIHtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwidGFwQ29tbWVudExvdmVcIiwge1xyXG5cdFx0XHRcdFx0Y29tbWVudDogZSxcclxuXHRcdFx0XHRcdHZpZGVvOiBpdGVtXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VuZChlKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdFx0dGhpcy4kZW1pdChcInNlbmRcIiwge1xyXG5cdFx0XHRcdFx0dGV4dDogZSxcclxuXHRcdFx0XHRcdHZpZGVvOiBpdGVtXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Q29tbWVudExpc3QoZSkge1xyXG5cdFx0XHRcdGxldCBpdGVtID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJzZXRDb21tZW50TGlzdFwiLCB7XHJcblx0XHRcdFx0XHRjb21tZW50OiBlLFxyXG5cdFx0XHRcdFx0dmlkZW86IGl0ZW1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmcm9udEFkZERhdGEoaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmQ29tbWVudC5mcm9udEFkZERhdGEoaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tbWVudEluaXQoYXJybGlzdCwgY2hlY2spIHtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF1cclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZkNvbW1lbnQuaW5pdChhcnJsaXN0LCBjaGVjaylcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlQ29tbWVudExvdmUoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZDb21tZW50LmNoYW5nZUNvbW1lbnRMb3ZlKClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VuZE92ZXIoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZDb21tZW50LnNlbmRPdmVyKClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Q29tbWVudERhdGEoYXJybGlzdCwgY2hlY2spIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZkNvbW1lbnQuc2V0Q29tbWVudERhdGEoYXJybGlzdCwgY2hlY2spXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFRhYkJhckhlaWdodChoZWlnaHQpe1xyXG5cdFx0XHQgICAgdGhpcy4kcmVmcy5yZWZDb21tZW50LnNldFRhYkJhckhlaWdodChoZWlnaHQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZUxvdmUoKSB7XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XS5pc0xvdmUgPSAhdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XS5pc0xvdmVcclxuXHRcdFx0XHRpZiAodGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XS5pc0xvdmUpIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF0ubG92ZU51bSsrXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XS5sb3ZlTnVtLS1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlRm9sbG93KCkge1xyXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF0uaXNGb2xsb3cgPSAhdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XS5pc0ZvbGxvd1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRTaGFyZUZyaWVuZChkYXRhKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZTaGFyZS5zZXRGcmllbmQoZGF0YSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0U2hhcmVUeXBlKGRhdGEpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZlNoYXJlLnNldFR5cGUoZGF0YSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0U2hhcmVBY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmU2hhcmUuc2V0QWN0aW9uKGRhdGEpXHJcblx0XHRcdH0sXHJcblx0XHRcdGhpZGUoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93T3RoZXIgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5jb21tZW50U3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLnNoYXJlU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvZ3Jlc3NUb3VjaHN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50TW92ZSA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy5wb2ludFN0YXJ0ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YXHJcblx0XHRcdH0sXHJcblx0XHRcdHByb2dyZXNzVG9jaG1vdmUoZSkge1xyXG5cdFx0XHRcdGxldCBzbGlkaW5nID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YIC0gdGhpcy5wb2ludFN0YXJ0ICsgdGhpcy5wb2ludExlZnRQb3NpdGlvblxyXG5cdFx0XHRcdGxldCBtaW5XaWR0aCA9IHBhcnNlSW50KDEgLyBwYXJzZUludCh0aGlzLnRpbWUpICogdGhpcy53aW5XaWR0aClcclxuXHRcdFx0XHRsZXQgbWF4V2lkdGggPSBwYXJzZUludCggKHBhcnNlSW50KHRoaXMudGltZSkgLSAxKSAvIHBhcnNlSW50KHRoaXMudGltZSkgKiB0aGlzLndpbldpZHRoKVxyXG5cdFx0XHRcdGlmKHNsaWRpbmcgPCBtaW5XaWR0aCkge1xyXG5cdFx0XHRcdFx0dGhpcy5wb2ludExlZnQgPSBtaW5XaWR0aFxyXG5cdFx0XHRcdFx0dGhpcy5wcm9ncmVzcyA9IG1pbldpZHRoXHJcblx0XHRcdFx0fSBlbHNlIGlmKHNsaWRpbmcgPiBtYXhXaWR0aCl7XHJcblx0XHRcdFx0XHR0aGlzLnBvaW50TGVmdCA9IG1heFdpZHRoXHJcblx0XHRcdFx0XHR0aGlzLnByb2dyZXNzID0gbWF4V2lkdGhcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5wb2ludExlZnQgPSBzbGlkaW5nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9ncmVzc1RvdWNoZW5kKGUpIHtcclxuXHRcdFx0XHR0aGlzLnBvaW50TGVmdFBvc2l0aW9uID0gdGhpcy5wb2ludExlZnRcclxuXHRcdFx0XHRsZXQgcyA9IHBhcnNlSW50KHBhcnNlSW50KHRoaXMucG9pbnRMZWZ0KSAvIHRoaXMud2luV2lkdGggKiBwYXJzZUludCh0aGlzLnRpbWUpKVxyXG5cdFx0XHRcdGxldCBpID0gdGhpcy52aWRlb0luZGV4ICUgNVxyXG5cdFx0XHRcdHRoaXMucHJvZ3Jlc3MgPSBzXHJcblx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dChcInZpZGVvX2lkX1wiICsgaSwgdGhpcykuc2VlayhzKVxyXG5cdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoXCJ2aWRlb19pZF9cIiArIGksIHRoaXMpLnBsYXkoKVxyXG5cdFx0XHRcdHRoaXMucG9pbnRNb3ZlID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2aWRlb0NsaWNrKCkge1xyXG5cdFx0XHRcdGxldCBudW0gPSB0aGlzLnZpZGVvSW5kZXggJSA1XHJcblx0XHRcdFx0aWYgKHRoaXNbXCJ2aWRlb0luZm9fXCIgKyBudW1dLmZsYWcpIHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcFZpZGVvKG51bSwgdHJ1ZSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5VmlkZW8obnVtLCB0cnVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW90b3VjaHN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnZpZGVvdG91Y2hlbmRUaW1lc3RhbXAgPSB0aGlzLnZpZGVvdG91Y2hzdGFydFRpbWVzdGFtcFxyXG5cdFx0XHRcdHRoaXMudmlkZW90b3VjaHN0YXJ0VGltZXN0YW1wID0gZS50aW1lc3RhbXBcclxuXHRcdFx0XHRpZigodGhpcy52aWRlb3RvdWNoc3RhcnRUaW1lc3RhbXAgLSB0aGlzLnZpZGVvdG91Y2hlbmRUaW1lc3RhbXApIDwgNTAwKSByZXR1cm5cclxuXHRcdFx0XHRpZiAoc2xpZGluZ1N0YXR1cykgcmV0dXJuXHJcblx0XHRcdFx0c3RhcnRQYWdlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW90b2NobW92ZShlKSB7XHJcblx0XHRcdFx0aWYoKHRoaXMudmlkZW90b3VjaHN0YXJ0VGltZXN0YW1wIC0gdGhpcy52aWRlb3RvdWNoZW5kVGltZXN0YW1wKSA8IDUwMCkgcmV0dXJuXHJcblx0XHRcdFx0aWYgKHNsaWRpbmdTdGF0dXMpIHJldHVyblxyXG5cdFx0XHRcdGVuZFBhZ2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cdFx0XHRcdGxldCBzbGlkaW5nID0gZW5kUGFnZVkgLSBzdGFydFBhZ2VZXHJcblx0XHRcdFx0aWYgKHNsaWRpbmcgPiAyMCB8fCBzbGlkaW5nIDwgLTIwKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vdmVWaWV3ID0gZmFsc2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlVmlldyA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMudmlkZW9JbmRleCA9PSAwICYmIHNsaWRpbmcgPiA1MCkge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3VG9wID0gNTBcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudmlkZW9JbmRleCA9PSB0aGlzLnZpZGVvTGlzdExlbmd0aCAtIDEgJiYgc2xpZGluZyA8IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudmlld1RvcCA9IHRoaXMudmlld1RvcFBvc3Rpb25cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3VG9wID0gdGhpcy52aWV3VG9wUG9zdGlvbiArIHNsaWRpbmdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvdG91Y2hlbmQoZSkge1xyXG5cdFx0XHRcdGlmKCh0aGlzLnZpZGVvdG91Y2hzdGFydFRpbWVzdGFtcCAtIHRoaXMudmlkZW90b3VjaGVuZFRpbWVzdGFtcCkgPCA1MDApIHJldHVyblxyXG5cdFx0XHRcdGlmIChzbGlkaW5nU3RhdHVzKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLm1vdmVWaWV3ID0gdHJ1ZVxyXG5cdFx0XHRcdGVuZFBhZ2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cdFx0XHRcdGxldCBzbGlkaW5nID0gZW5kUGFnZVkgLSBzdGFydFBhZ2VZXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJzbGlkaW5nXCIsc2xpZGluZylcclxuXHRcdFx0XHRpZiAoKHNsaWRpbmcgPj0gLTQwICYmIHNsaWRpbmcgPCAwKSB8fCAoc2xpZGluZyA8PSA0MCAmJiBzbGlkaW5nID4gMCkpIHtcclxuXHRcdFx0XHRcdHNsaWRpbmdTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0XHR0aGlzLm1vdmVWaWV3ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb1NsaWRpbmdSZXNldChzbGlkaW5nKVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v5LiK5ruRXHJcblx0XHRcdFx0aWYgKHNsaWRpbmcgPCAtMzApIHtcclxuXHRcdFx0XHRcdHNsaWRpbmdTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0XHRpZiAodGhpcy52aWRlb0luZGV4ID09IHRoaXMudmlkZW9MaXN0TGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvU2xpZGluZ1Jlc2V0KHNsaWRpbmcpXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIui/meaYr+acgOWQjuS4gOS4quinhumikVwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlVmlldyA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLnJlZkNvbW1lbnQuY2hhbmdlRGF0YSgpXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvU2xpZGluZ1RvVG9wKHNsaWRpbmcpXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly/kuIvmu5FcclxuXHRcdFx0XHRpZiAoc2xpZGluZyA+IDMwKSB7XHJcblx0XHRcdFx0XHRzbGlkaW5nU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMudmlkZW9JbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9TbGlkaW5nUmVzZXQoc2xpZGluZylcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgncmVmcmVzaCcpXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlVmlldyA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLnJlZkNvbW1lbnQuY2hhbmdlRGF0YSgpXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvU2xpZGluZ1RvQm90dG9tKHNsaWRpbmcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlkJHkuIrmu5HliqjliqjnlLtcclxuXHRcdFx0dmlkZW9TbGlkaW5nVG9Ub3Aoc2xpZGluZykge1xyXG5cdFx0XHRcdHRoaXMuc3RvcFZpZGVvKHRoaXMudmlkZW9JbmRleCAlIDUpXHJcblx0XHRcdFx0aWYgKHRoaXMudmlkZW9JbmRleCAhPSB0aGlzLnZpZGVvTGlzdExlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9JbmRleCsrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBpdGVtID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAndG9wJyxcclxuXHRcdFx0XHRcdHZpZGVvOiBpdGVtLFxyXG5cdFx0XHRcdFx0aW5kZXg6IHRoaXMudmlkZW9JbmRleFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly/mr4/mrKHliLfliLDkuobmlbDnu4TmnIDlkI7nrKzlm5vkuKrop4bpopHvvIzlsLHnu5l2aWRlb0xpc3Qg5re75Yqg5pWw5o2uXHJcblx0XHRcdFx0aWYgKHRoaXMudmlkZW9JbmRleCA9PSAodGhpcy52aWRlb0xpc3RMZW5ndGggLSA0KSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRWaWRlbygpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLnZpZGVvTGlzdExlbmd0aCA+IDUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc29ydEl0ZW1WaWV3KHNsaWRpbmcpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudmlld1RvcFBvc3Rpb24gPSB0aGlzLnZpZXdUb3BQb3N0aW9uIC0gdGhpcy53aW5IZWlnaHRcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheVZpZGVvKHRoaXMudmlkZW9JbmRleCAlIDUpXHJcblx0XHRcdFx0fSwgNSlcclxuXHRcdFx0XHRpZih0aGlzLnRpbWluZ0Z1bmN0aW9uIT09XCJsaW5lYXJcIiAmJiB0aGlzLnRpbWluZ0Z1bmN0aW9uIT09XCJlYXNlXCIpe1xyXG5cdFx0XHRcdFx0dGhpcy50aW1pbmdGdW5jdGlvbj1cImxpbmVhclwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBzLHNzXHJcblx0XHRcdFx0c3dpdGNoICh0aGlzLnRpbWluZ0Z1bmN0aW9uKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwibGluZWFyXCI6XHJcblx0XHRcdFx0XHRcdHMgPSAzXHJcblx0XHRcdFx0XHRcdHNzID0gMzVcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgXCJlYXNlXCI6XHJcblx0XHRcdFx0XHRcdHMgPSAxNVxyXG5cdFx0XHRcdFx0XHRzcyA9IDIwXHJcblx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3VG9wID0gdGhpcy52aWV3VG9wIC0gc3NcclxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZXdUb3AgPCAodGhpcy52aWV3VG9wUG9zdGlvbiArIDEwKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdUb3BQb3N0aW9uXHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpXHJcblx0XHRcdFx0XHRcdHNsaWRpbmdTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnNsaWRpbmdDYWxsYmFjaygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLnRpbWluZ0Z1bmN0aW9uID09IFwiZWFzZVwiKXtcclxuXHRcdFx0XHRcdFx0cy0tXHJcblx0XHRcdFx0XHRcdGlmIChzIDwgMykge1xyXG5cdFx0XHRcdFx0XHRcdHMgPSAzXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0c3MrK1xyXG5cdFx0XHRcdFx0XHRpZiAoc3MgPiAzNSkge1xyXG5cdFx0XHRcdFx0XHRcdHNzID0gMzVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHMpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWQkeS4i+a7keWKqOWKqOeUu1xyXG5cdFx0XHR2aWRlb1NsaWRpbmdUb0JvdHRvbShzbGlkaW5nKSB7XHJcblx0XHRcdFx0dGhpcy5zdG9wVmlkZW8odGhpcy52aWRlb0luZGV4ICUgNSlcclxuXHRcdFx0XHRpZiAodGhpcy52aWRlb0luZGV4ICE9IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9JbmRleC0tXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBpdGVtID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYm90dG9tJyxcclxuXHRcdFx0XHRcdHZpZGVvOiBpdGVtLFxyXG5cdFx0XHRcdFx0aW5kZXg6IHRoaXMudmlkZW9JbmRleFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHRoaXMudmlkZW9MaXN0TGVuZ3RoID4gNSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zb3J0SXRlbVZpZXcoc2xpZGluZylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aWV3VG9wUG9zdGlvbiA9IHRoaXMudmlld1RvcFBvc3Rpb24gKyB0aGlzLndpbkhlaWdodFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5VmlkZW8odGhpcy52aWRlb0luZGV4ICUgNSlcclxuXHRcdFx0XHR9LCA1KVxyXG5cdFx0XHRcdGlmKHRoaXMudGltaW5nRnVuY3Rpb24hPT1cImxpbmVhclwiICYmIHRoaXMudGltaW5nRnVuY3Rpb24hPT1cImVhc2VcIiApe1xyXG5cdFx0XHRcdFx0dGhpcy50aW1pbmdGdW5jdGlvbj1cImxpbmVhclwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBzLHNzXHJcblx0XHRcdFx0c3dpdGNoICh0aGlzLnRpbWluZ0Z1bmN0aW9uKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwibGluZWFyXCI6XHJcblx0XHRcdFx0XHRcdHMgPSAzXHJcblx0XHRcdFx0XHRcdHNzID0gMzVcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgXCJlYXNlXCI6XHJcblx0XHRcdFx0XHRcdHMgPSAxNVxyXG5cdFx0XHRcdFx0XHRzcyA9IDIwXHJcblx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3VG9wID0gdGhpcy52aWV3VG9wICsgc3NcclxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZXdUb3AgPiAodGhpcy52aWV3VG9wUG9zdGlvbiAtIDEwKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdUb3BQb3N0aW9uXHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpXHJcblx0XHRcdFx0XHRcdHNsaWRpbmdTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnNsaWRpbmdDYWxsYmFjaygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLnRpbWluZ0Z1bmN0aW9uID09IFwiZWFzZVwiKXtcclxuXHRcdFx0XHRcdFx0cy0tXHJcblx0XHRcdFx0XHRcdGlmIChzIDwgMykge1xyXG5cdFx0XHRcdFx0XHRcdHMgPSAzXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0c3MrK1xyXG5cdFx0XHRcdFx0XHRpZiAoc3MgPiAzNSkge1xyXG5cdFx0XHRcdFx0XHRcdHNzID0gMzVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHMpXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDlpoLmnpzmu5HliqjnmoTlsI/vvIzlsLHmgaLlpI3liLDljp/kvY3nva5cclxuXHRcdFx0dmlkZW9TbGlkaW5nUmVzZXQoc2xpZGluZykge1xyXG5cdFx0XHRcdHRoaXMudmlld1RvcCA9IHRoaXMudmlld1RvcFBvc3Rpb25cclxuXHRcdFx0XHRzbGlkaW5nU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0U3lzdGVtSW5mbygpIHtcclxuXHRcdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy53aW5XaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdFx0X3RoaXMud2luSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdFx0bGV0IHAgPSB1bmkudXB4MnB4KDE1MClcclxuXHRcdFx0XHRcdFx0X3RoaXMuc3RvcEljb24gPSBgbGVmdDokeyhyZXMud2luZG93V2lkdGggLSBwKS8yfXB4O3RvcDokeyhyZXMud2luZG93SGVpZ2h0IC0gcCkvMn1weDtgXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnByZXZpZXcpIHJldHVyblxyXG5cdFx0XHRcdFx0XHRfdGhpcy5pdGVtVmlld1RvcDEgPSByZXMud2luZG93SGVpZ2h0XHJcblx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wMiA9IHJlcy53aW5kb3dIZWlnaHQgKiAyXHJcblx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wMyA9IHJlcy53aW5kb3dIZWlnaHQgKiAzXHJcblx0XHRcdFx0XHRcdF90aGlzLml0ZW1WaWV3VG9wNCA9IHJlcy53aW5kb3dIZWlnaHQgKiA0XHJcblx0XHRcdFx0XHRcdF90aGlzLmJveEhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgKiA1XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzbGlkaW5nQ2FsbGJhY2soKSB7XHJcblx0XHRcdFx0dGhpcy5wcm9ncmVzcyA9IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mu5Hliqjnu4Tku7bmjpLluo9cclxuXHRcdFx0c29ydEl0ZW1WaWV3KHNpbGRpbmcpIHtcclxuXHRcdFx0XHQvLyDlkJHkuIrmu5HliqhcclxuXHRcdFx0XHRpZiAoc2lsZGluZyA8IDApIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZGVvSW5kZXggPiAyICYmIHRoaXMudmlkZW9JbmRleCA8IHRoaXMudmlkZW9MaXN0TGVuZ3RoIC0gMikge1xyXG5cdFx0XHRcdFx0XHRsZXQgaSA9ICh0aGlzLnZpZGVvSW5kZXggLSAzKSAlIDVcclxuXHRcdFx0XHRcdFx0dGhpc1tcIml0ZW1WaWV3VG9wXCIgKyBpXSA9IHRoaXNbXCJpdGVtVmlld1RvcFwiICsgaV0gKyB0aGlzLndpbkhlaWdodCAqIDVcclxuXHRcdFx0XHRcdFx0dGhpc1sndmlkZW9JbmZvXycgKyBpXSA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleCArIDJdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5ZCR5LiL5ruR5YqoXHJcblx0XHRcdFx0aWYgKHNpbGRpbmcgPiAwKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy52aWRlb0luZGV4ID4gMSAmJiB0aGlzLnZpZGVvSW5kZXggPCB0aGlzLnZpZGVvTGlzdExlbmd0aCAtIDMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGkgPSAodGhpcy52aWRlb0luZGV4ICsgMykgJSA1XHJcblx0XHRcdFx0XHRcdHRoaXNbXCJpdGVtVmlld1RvcFwiICsgaV0gPSB0aGlzW1wiaXRlbVZpZXdUb3BcIiArIGldIC0gdGhpcy53aW5IZWlnaHQgKiA1XHJcblx0XHRcdFx0XHRcdHRoaXNbJ3ZpZGVvSW5mb18nICsgaV0gPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXggLSAyXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheVZpZGVvKG51bSwgY29udHJvbCkge1xyXG5cdFx0XHRcdHZpZGVvUGxheWluZ1N0YXR1cyA9IHRydWVcclxuXHRcdFx0XHR0aGlzW1widmlkZW9JbmZvX1wiICsgbnVtXS5mbGFnID0gdHJ1ZVxyXG5cdFx0XHRcdGxldCB0ID0gdGhpcy5wcmV2aWV3ID8gMzUwIDogNDAwXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dChcInZpZGVvX2lkX1wiICsgbnVtLCB0aGlzKS5wbGF5KClcclxuXHRcdFx0XHR9LHQpXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtdXNpY1RpbWVyKVxyXG5cdFx0XHRcdHRoaXMudHJhbnNsYXRlWCA9IDEwXHJcblx0XHRcdFx0dGhpcy5hbmltYXRlVHJhbnNsYXRlWChudW0pXHJcblx0XHRcdFx0dGhpcy52aWRlb0ZsYWcgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0b3BWaWRlbyhudW0sIGNvbnRyb2wpIHtcclxuXHRcdFx0XHRpZiAoIWNvbnRyb2wpIHtcclxuXHRcdFx0XHRcdHRoaXNbJ3ZpZGVvSW5mb18nICsgbnVtXS5jb3ZlclN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0dGhpc1sndmlkZW9JbmZvXycgKyBudW1dLmNvdmVyU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdFx0fSw2MDApXHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KFwidmlkZW9faWRfXCIgKyBudW0sIHRoaXMpLnN0b3AoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KFwidmlkZW9faWRfXCIgKyBudW0sIHRoaXMpLnBhdXNlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50cmFuc2xhdGVYID0gMTBcclxuXHRcdFx0XHRjbGVhckludGVydmFsKG11c2ljVGltZXIpXHJcblx0XHRcdFx0dGhpc1tcInZpZGVvSW5mb19cIiArIG51bV0uZmxhZyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy52aWRlb0ZsYWcgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRWaWRlbygpIHtcclxuXHRcdFx0XHQvLyBsZXQgcGFnZU5vID0gcGFyc2VJbnQodGhpcy52aWRlb0xpc3RMZW5ndGggLyA1KSArIDJcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdzZXRWaWRlb0xpc3QnLCB7XHJcblx0XHRcdFx0XHRpdGVtOiB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0VmlkZW9EYXRhKGxpc3QpIHtcclxuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IFsuLi50aGlzLnZpZGVvTGlzdCwgLi4ubGlzdF1cclxuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdExlbmd0aCA9IHRoaXMudmlkZW9MaXN0Lmxlbmd0aFxyXG5cdFx0XHRcdHRoaXMuYm94SGVpZ2h0ID0gdGhpcy52aWRlb0xpc3RMZW5ndGggKiB0aGlzLndpbkhlaWdodFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5aW5nKGkpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXNbJ3ZpZGVvSW5mb18nICsgaV0uY292ZXJTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlVmlldyA9IHRydWVcclxuXHRcdFx0XHRcdHNsaWRpbmdTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdH0sIDYwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZXVwZGF0ZShpLGUpIHtcclxuXHRcdFx0XHRpZih2aWRlb1BsYXlpbmdTdGF0dXMpIHtcclxuXHRcdFx0XHRcdHNsaWRpbmdTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dmlkZW9QbGF5aW5nU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzWyd2aWRlb0luZm9fJyArIGldLmNvdmVyU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlVmlldyA9IHRydWVcclxuXHRcdFx0XHRcdH0sIDIwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpc1tcInZpZGVvSW5mb19cIiArIGldLmZsYWcgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy52aWRlb0ZsYWcgPSB0cnVlXHJcblx0XHRcdFx0aWYoZS5kZXRhaWwuZHVyYXRpb24gPj0gdGhpcy5wcm9ncmVzc1RpbWUpIHtcclxuXHRcdFx0XHRcdHRoaXMudGltZSA9IGUuZGV0YWlsLmR1cmF0aW9uXHJcblx0XHRcdFx0XHR0aGlzLnByb2dyZXNzID0gZS5kZXRhaWwuY3VycmVudFRpbWVcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1Byb2dyZXNzID0gdHJ1ZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dQcm9ncmVzcyA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbmRlZCgpIHtcclxuXHRcdFx0XHR0aGlzLnByb2dyZXNzID0gMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbmltYXRlVHJhbnNsYXRlWChpKSB7XHJcblx0XHRcdFx0bGV0IG51bSA9IHRoaXNbJ3ZpZGVvSW5mb18nICsgaV0uZHViYmVkVGV4dC5sZW5ndGggKiA5XHJcblx0XHRcdFx0bXVzaWNUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNsYXRlWC0tXHJcblx0XHRcdFx0XHRpZiAodGhpcy50cmFuc2xhdGVYID09IC0obnVtICsgMjApKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJhbnNsYXRlWCA9IG51bVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDEwMClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC52aWV3LWJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnZpZGVvLWJveCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR6LWluZGV4OiAyMDAwO1xyXG5cdH1cclxuXHJcblx0LnZpZGVvLXNpemUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQudmlkZW8taW1hZ2Uge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0ei1pbmRleDogMjAwMTtcclxuXHR9XHJcblxyXG5cdC52aWRlby1pbWFnZS1tYXNrIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDIwMDE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnZpZGVvLWFjdGlvbiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiAyMDA4O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctbGVmdCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRtYXJnaW4tbGVmdDogMjJycHg7XHJcblx0XHR3aWR0aDogNTU2cnB4O1xyXG5cdFx0Ym90dG9tOiA0M3B4O1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC52aWV3LWxlZnQtdGV4dCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cclxuXHQudmlldy1sZWZ0LXRleHQtY29udGVudCB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA3MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWNvbnRlbnQtdGV4dCB7XHJcblx0XHRjb2xvcjogI2VlZTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmVzOiAyO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0LnZpZXctbGVmdC1pY29uIHtcclxuXHRcdGNvbG9yOiAjZWVlO1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0LnZpZXctbGVmdC1kdWJiZWRUZXh0IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQudmlldy1sZWZ0LWR1YmJlZFRleHQtdGV4dCB7XHJcblx0XHRjb2xvcjogI2QwZDFkNTtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWNvbnRlbnQtYWR2ZXJ0IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHR3aWR0aDogNTQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1NnJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWNvbnRlbnQtYWR2ZXJ0LXRleHQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQ4MHJweDtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlcjogMXB4ICNGRkZGRkYgc29saWQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuc2VlZGV0YWlscyB7XHJcblx0XHR3aWR0aDogNTQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1NnJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDE3MCwgMjAxLCAwLjgpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5zZWVkZXRhaWxzLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICNmYWZiZmY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNTZycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jb3Zlci12aWV3LXN0b3Age1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRoZWlnaHQ6IDIwMHJweDtcclxuXHR9XHJcblx0XHJcblx0LmNvdmVyLXZpZXctc3RvcC10ZXh0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHotaW5kZXg6IDk5OTk7XHJcblx0XHRjb2xvcjogI2YzZjNmMztcclxuXHRcdG9wYWNpdHk6IDAuNjtcclxuXHRcdGZvbnQtc2l6ZTogMTUwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY292ZXItdmlldy1yaWdodCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDIzcHg7XHJcblx0XHRyaWdodDogMTVycHg7XHJcblx0XHR3aWR0aDogOTJycHg7XHJcblx0XHRoZWlnaHQ6IDc4MHJweDtcclxuXHRcdHotaW5kZXg6IDk5OTk7XHJcblx0fVxyXG5cclxuXHQuY292ZXItdmlldy1yaWdodC1oZWFkIHtcclxuXHRcdGhlaWdodDogMTMwcnB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHR9XHJcblxyXG5cdC5hdmF0ZXIge1xyXG5cdFx0d2lkdGg6IDkycnB4O1xyXG5cdFx0aGVpZ2h0OiA5MnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNhYWE7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdH1cclxuXHJcblx0Lmljb25mb250IHtcclxuXHRcdGZvbnQtZmFtaWx5OiBpY29uZm9udDtcclxuXHR9XHJcblxyXG5cdC5jb3Zlci1yaWdodC1mb2xsb3cge1xyXG5cdFx0bWFyZ2luLXRvcDogLTIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5yaWdodC1mb2xsb3ctYm94IHtcclxuXHRcdHdpZHRoOiA0NXJweDtcclxuXHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmlnaHQtZm9sbG93LWJnIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHR3aWR0aDogMzNycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5yaWdodC1mb2xsb3cge1xyXG5cdFx0Y29sb3I6ICNGMjUwMTE7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTM5cnB4O1xyXG5cdH1cclxuXHJcblx0Lmljb25mb250LXNpemUtaGVhdCB7XHJcblx0XHRtYXJnaW4tdG9wOiA0OHJweDtcclxuXHRcdGZvbnQtc2l6ZTogOTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQud2hpdGUtaGVhdCB7XHJcblx0XHRjb2xvcjogI2VlZTtcclxuXHR9XHJcblxyXG5cdC5yZWQtaGVhdCB7XHJcblx0XHRjb2xvcjogI0ZGMUIwMDtcclxuXHR9XHJcblxyXG5cdC5pY29uZm9udC1zaXplLW11c2ljIHtcclxuXHRcdG1hcmdpbi10b3A6IDU3cnB4O1xyXG5cdFx0Y29sb3I6ICM2NjY2NjY7XHJcblx0XHRmb250LXNpemU6IDkycnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lmljb25mb250LXNpemUge1xyXG5cdFx0bWFyZ2luLXRvcDogNDBycHg7XHJcblx0XHRjb2xvcjogI2VlZTtcclxuXHRcdGZvbnQtc2l6ZTogNzBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucmlnaHQtdGV4dCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LnByb2dyZXNzLWJhciB7XHJcblx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM4NDgxN2U7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuXHRcclxuXHQucHJvZ3Jlc3MtYmFyLXBvaW50IHtcclxuXHRcdHdpZHRoOiAzcHg7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzNiZGJiO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0ycHg7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cdFxyXG5cdC5wcm9ncmVzcy1iYXItYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAzcHg7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDBweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LnByb2dyZXNzLWJhci1iZyB7XHJcblx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3MTZlNmM7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0b3BhY2l0eTogMC4zO1xyXG5cdH1cclxuXHRcclxuXHQucHJvZ3Jlc3MtYmFyLWJnLWFjdGl2ZSB7XHJcblx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3MTZlNmM7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0b3BhY2l0eTogMC4zO1xyXG5cdH1cclxuXHRcclxuXHQucHJvZ3Jlc3MtYmFyLWJveC1hY3RpdmUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQucHJvZ3Jlc3MtYmFyLWFjdGl2ZSB7XHJcblx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkZWQ4ZDY7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHRcclxuXHQucHJvZ3Jlc3MtYmFyLXBvaW50LWFjdGl2ZSB7XHJcblx0XHR3aWR0aDogNnB4O1xyXG5cdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2RlZDhkNjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG5cdH1cclxuXHRcclxuXHQubW92ZS1wb2ludCB7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHRcdGhlaWdodDogMjVweDtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTk5O1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwcHg7XHJcblx0fVxyXG5cclxuXHQuYmctd2hpdGUge1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7ICovXHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/comment.nvue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.nvue?vue&type=template&id=01632690&scoped=true& */ 11);\n/* harmony import */ var _comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.nvue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"01632690\",\n  null,\n  false,\n  _comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/kai-video-swiper/components/comment.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDNEQ7QUFDTDs7O0FBR3ZEO0FBQ2dMO0FBQ2hMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbW1lbnQubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTYzMjY5MCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbW1lbnQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29tbWVudC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAxNjMyNjkwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMva2FpLXZpZGVvLXN3aXBlci9jb21wb25lbnRzL2NvbW1lbnQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**********************************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/comment.nvue?vue&type=template&id=01632690&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./comment.nvue?vue&type=template&id=01632690&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_template_id_01632690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/components/comment.nvue?vue&type=template&id=01632690&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.commentStatus)
    ? _c(
        "cover-view",
        {
          staticClass: _vm._$s(0, "sc", "box"),
          style: _vm._$s(0, "s", {
            width: _vm.winWidth + "px",
            height: _vm.winHeight + "px"
          }),
          attrs: { _i: 0 }
        },
        [
          _c("div", {
            staticClass: _vm._$s(1, "sc", "mask"),
            style: _vm._$s(1, "s", { width: _vm.winWidth + "px" }),
            attrs: { _i: 1 },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.onMask()
              },
              touchstart: function($event) {
                $event.stopPropagation()
                return _vm.a($event)
              },
              touchmove: function($event) {
                $event.stopPropagation()
                return _vm.b($event)
              },
              touchend: function($event) {
                $event.stopPropagation()
                return _vm.c($event)
              }
            }
          }),
          _c(
            "cover-view",
            {
              staticClass: _vm._$s(2, "sc", "comment-box"),
              style: _vm._$s(2, "s", {
                height: (_vm.winHeight / 10) * 7 + "px"
              }),
              attrs: { _i: 2 },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.e($event)
                }
              }
            },
            [
              _c("div", {
                staticClass: _vm._$s(3, "sc", "top"),
                attrs: { _i: 3 }
              }),
              _c(
                "div",
                { staticClass: _vm._$s(4, "sc", "bottom"), attrs: { _i: 4 } },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$s(5, "sc", "py-1  a-center"),
                      attrs: { _i: 5 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(6, "sc", "text-white"),
                        attrs: { _i: 6 }
                      })
                    ]
                  ),
                  _c(
                    "scroll-view",
                    {
                      staticClass: _vm._$s(7, "sc", "flex-1"),
                      attrs: {
                        "scroll-top": _vm._$s(
                          7,
                          "a-scroll-top",
                          _vm.scrollToTop
                        ),
                        _i: 7
                      },
                      on: { scrolltolower: _vm.onLoading }
                    },
                    [
                      _vm._l(_vm._$s(8, "f", { forItems: _vm.list }), function(
                        item,
                        index,
                        $20,
                        $30
                      ) {
                        return _c(
                          "div",
                          {
                            key: _vm._$s(8, "f", { forIndex: $20, key: index }),
                            staticClass: _vm._$s(
                              "8-" + $30,
                              "sc",
                              "py-1 flex-column"
                            ),
                            attrs: { _i: "8-" + $30 }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: _vm._$s(
                                  "9-" + $30,
                                  "sc",
                                  "py-2 flex-row"
                                ),
                                attrs: { _i: "9-" + $30 }
                              },
                              [
                                _c("image", {
                                  staticClass: _vm._$s(
                                    "10-" + $30,
                                    "sc",
                                    "rounded-circle ml-2"
                                  ),
                                  attrs: {
                                    src: _vm._$s(
                                      "10-" + $30,
                                      "a-src",
                                      item.userInfo.faceUrl
                                    ),
                                    _i: "10-" + $30
                                  }
                                }),
                                _c(
                                  "div",
                                  {
                                    staticClass: _vm._$s(
                                      "11-" + $30,
                                      "sc",
                                      "flex-1  flex-column mx-1"
                                    ),
                                    attrs: { _i: "11-" + $30 }
                                  },
                                  [
                                    _c(
                                      "text",
                                      {
                                        staticClass: _vm._$s(
                                          "12-" + $30,
                                          "sc",
                                          "text-light-muted"
                                        ),
                                        attrs: { _i: "12-" + $30 }
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            "12-" + $30,
                                            "t0-0",
                                            _vm._s(item.userInfo.nickName)
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: _vm._$s(
                                      "13-" + $30,
                                      "sc",
                                      " a-center"
                                    ),
                                    attrs: { _i: "13-" + $30 }
                                  },
                                  [
                                    _c("text", {
                                      staticClass: _vm._$s(
                                        "14-" + $30,
                                        "sc",
                                        "iconfont iconfont-size-heat "
                                      ),
                                      class: _vm._$s(
                                        "14-" + $30,
                                        "c",
                                        item.isLove ? "red-heat" : "white-heat"
                                      ),
                                      attrs: { _i: "14-" + $30 },
                                      on: {
                                        click: function($event) {
                                          return _vm.tapLove(item, index)
                                        }
                                      }
                                    }),
                                    _c(
                                      "text",
                                      {
                                        staticClass: _vm._$s(
                                          "15-" + $30,
                                          "sc",
                                          "text-light-muted"
                                        ),
                                        attrs: { _i: "15-" + $30 }
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            "15-" + $30,
                                            "t0-0",
                                            _vm._s(item.num)
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _c("div", [
                              _c(
                                "text",
                                {
                                  staticClass: _vm._$s(
                                    "17-" + $30,
                                    "sc",
                                    "text-white mt-1"
                                  ),
                                  attrs: { _i: "17-" + $30 }
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "17-" + $30,
                                      "t0-0",
                                      _vm._s(item.text)
                                    )
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      }),
                      _vm._$s(18, "i", _vm.noData)
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$s(18, "sc", "pt-3 a-center"),
                              attrs: { _i: 18 }
                            },
                            [
                              _c(
                                "text",
                                {
                                  staticClass: _vm._$s(19, "sc", "text-muted"),
                                  attrs: { _i: 19 }
                                },
                                [
                                  _vm._v(
                                    _vm._$s(19, "t0-0", _vm._s(_vm.loadingText))
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    2
                  ),
                  _c(
                    "cover-view",
                    {
                      staticClass: _vm._$s(20, "sc", "bg-dark px-1 j-center"),
                      attrs: { _i: 20 },
                      on: { click: _vm.showKey }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(21, "sc", "text-light-muted "),
                        attrs: { _i: 21 }
                      })
                    ]
                  ),
                  _vm._$s(22, "i", _vm.focusStatus)
                    ? _c("cover-view", {
                        staticClass: _vm._$s(22, "sc", "mask1"),
                        style: _vm._$s(22, "s", { width: _vm.winWidth + "px" }),
                        attrs: { _i: 22 },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.onMask()
                          },
                          touchstart: function($event) {
                            $event.stopPropagation()
                            return _vm.a($event)
                          },
                          touchmove: function($event) {
                            $event.stopPropagation()
                            return _vm.b($event)
                          },
                          touchend: function($event) {
                            $event.stopPropagation()
                            return _vm.c($event)
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._$s(23, "i", _vm.focusStatus)
                    ? _c("cover-view", {
                        staticClass: _vm._$s(23, "sc", "mask2"),
                        style: _vm._$s(23, "s", {
                          width: _vm.winWidth + "px",
                          height: _vm.keyHeightMask - _vm.tabBar + "px"
                        }),
                        attrs: { _i: 23 }
                      })
                    : _vm._e(),
                  _vm._$s(24, "i", _vm.focusStatus)
                    ? _c(
                        "cover-view",
                        {
                          staticClass: _vm._$s(
                            24,
                            "sc",
                            "j-center flex-row  bg-dark input-box"
                          ),
                          style: _vm._$s(24, "s", {
                            bottom: _vm.keyHeight - _vm.tabBar + "px"
                          }),
                          attrs: { _i: 24 }
                        },
                        [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.text,
                                expression: "text"
                              }
                            ],
                            staticClass: _vm._$s(
                              25,
                              "sc",
                              "flex-1 px-1  bg-dark text-light-muted text-top"
                            ),
                            attrs: {
                              focus: _vm._$s(25, "a-focus", _vm.focusStatus),
                              placeholder: _vm._$s(
                                25,
                                "a-placeholder",
                                _vm.placeholder
                              ),
                              _i: 25
                            },
                            domProps: {
                              value: _vm._$s(25, "v-model", _vm.text)
                            },
                            on: {
                              focus: _vm.focus,
                              blur: _vm.blur,
                              keyboardheightchange: _vm.keyboardheightchange,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.text = $event.target.value
                              }
                            }
                          }),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$s(
                                26,
                                "sc",
                                "j-center a-center px-1 mx-1 bg-primary rounded"
                              ),
                              attrs: { _i: 26 },
                              on: { click: _vm.send }
                            },
                            [_c("text")]
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!****************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/comment.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./comment.nvue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comment_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdsQixDQUFnQixzbUJBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21tZW50Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21tZW50Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/components/comment.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    commentStatus: {\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {\n      list: [],\n      text: null,\n      noData: false,\n      loadingShow: false,\n      loadingText: '没有更多评论了',\n      focusStatus: false,\n      placeholder: \"说点什么吧\",\n      winWidth: 0,\n      winHeight: 0,\n      commentIndex: 0,\n      initStatus: false,\n      videoId: null,\n      keyHeight: 0,\n      keyHeightMask: 0,\n      showStatus: false,\n      scrollToTop: 0,\n      tabBar: 0 };\n\n  },\n  created: function created() {var _this = this;\n    this.getSystemInfo();\n    var h = uni.getStorageSync('keyHeight');\n    if (!h || h == '' || h < 300) {\n      uni.onKeyboardHeightChange(function (res) {\n        _this.keyHeight = res.height;\n        _this.keyHeightMask = res.height;\n        uni.setStorageSync('keyHeight', res.height);\n        uni.setStorageSync('keyHeightMask', _this.keyHeightMask);\n        uni.offKeyboardHeightChange(function () {\n        });\n      });\n    }\n  },\n  methods: {\n    getSystemInfo: function getSystemInfo() {\n      var that = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          that.winWidth = res.windowWidth;\n          that.winHeight = res.windowHeight;\n        } });\n\n    },\n    setTabBarHeight: function setTabBarHeight(h) {\n      this.tabBar = h;\n    },\n    showKey: function showKey() {\n      var h = uni.getStorageSync('keyHeight');\n      var m = uni.getStorageSync('keyHeightMask');\n      if (h) {\n        this.keyHeight = h;\n        this.keyHeightMask = m;\n      }\n      this.focusStatus = true;\n    },\n    hideKey: function hideKey() {\n      this.focusStatus = false;\n      uni.hideKeyboard();\n    },\n    sendOver: function sendOver() {\n      this.text = \"\";\n      this.hideKey();\n    },\n    send: function send() {var _this2 = this;\n      if (this.text == '') {\n        uni.showToast({\n          title: '内容不能为空',\n          icon: 'none' });\n\n        return;\n      }\n      this.$emit(\"send\", this.text);\n      this.scrollToTop = 0;\n      setTimeout(function () {\n        _this2.scrollToTop = 2;\n      }, 100);\n    },\n\n    focus: function focus() {\n      this.focusStatus = true;\n    },\n    blur: function blur() {\n      this.focusStatus = false;\n    },\n    lower: function lower() {\n\n    },\n    // 上拉加载事件\n    onLoading: function onLoading() {\n      if (this.noData) return;\n      if (!this.initStatus) return;\n      this.$emit('setCommentList');\n    },\n    init: function init(arrlist, check) {\n      this.initStatus = true;\n      this.list = arrlist;\n      if (check) {\n        this.noData = true;\n      }\n    },\n    changeData: function changeData() {\n      this.videoId = null;\n      this.list = [];\n      this.initStatus = false;\n      this.noData = false;\n    },\n    setCommentData: function setCommentData(arrlist, check) {\n      if (Array.isArray(arrlist)) {\n        this.list = [].concat(_toConsumableArray(this.list), _toConsumableArray(arrlist));\n      }\n      if (check) {\n        this.noData = true;\n      }\n    },\n    frontAddData: function frontAddData(item) {\n      this.list.unshift(item);\n    },\n    tapLove: function tapLove(item, index) {\n      this.commentIndex = index;\n      this.$emit(\"tapCommentLove\", item);\n    },\n    changeCommentLove: function changeCommentLove() {\n      this.list[this.commentIndex].isLove = !this.list[this.commentIndex].isLove;\n      if (this.list[this.commentIndex].isLove) {\n        this.list[this.commentIndex].num++;\n        return;\n      }\n      this.list[this.commentIndex].num--;\n    },\n    onMask: function onMask() {\n      if (this.focusStatus) {\n        this.hideKey();\n        return;\n      }\n      this.$emit('mask');\n    },\n    keyboardheightchange: function keyboardheightchange(e) {\n      if (e.detail.height < 10) {\n        this.hideKey();\n      }\n      if (e.detail.height > 300) {\n        this.keyHeight = e.detail.height;\n        this.keyHeightMask = e.detail.height + 50;\n      }\n    },\n    a: function a() {},\n    b: function b() {},\n    c: function c() {},\n    d: function d() {},\n    e: function e() {} } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9rYWktdmlkZW8tc3dpcGVyL2NvbXBvbmVudHMvY29tbWVudC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFEQSxFQURBOzs7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSxjQURBO0FBRUEsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLHdCQUpBO0FBS0EsNEJBTEE7QUFNQSx3QkFOQTtBQU9BLDBCQVBBO0FBUUEsaUJBUkE7QUFTQSxrQkFUQTtBQVVBLHFCQVZBO0FBV0EsdUJBWEE7QUFZQSxtQkFaQTtBQWFBLGtCQWJBO0FBY0Esc0JBZEE7QUFlQSx1QkFmQTtBQWdCQSxvQkFoQkE7QUFpQkEsZUFqQkE7O0FBbUJBLEdBM0JBO0FBNEJBLFNBNUJBLHFCQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBREE7QUFFQSxPQVBBO0FBUUE7QUFDQSxHQXpDQTtBQTBDQTtBQUNBLGlCQURBLDJCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkE7O0FBTUEsS0FUQTtBQVVBLG1CQVZBLDJCQVVBLENBVkEsRUFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLFdBYkEscUJBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckJBO0FBc0JBLFdBdEJBLHFCQXNCQTtBQUNBO0FBQ0E7QUFDQSxLQXpCQTtBQTBCQSxZQTFCQSxzQkEwQkE7QUFDQTtBQUNBO0FBQ0EsS0E3QkE7QUE4QkEsUUE5QkEsa0JBOEJBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsc0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQTNDQTs7QUE2Q0EsU0E3Q0EsbUJBNkNBO0FBQ0E7QUFDQSxLQS9DQTtBQWdEQSxRQWhEQSxrQkFnREE7QUFDQTtBQUNBLEtBbERBO0FBbURBLFNBbkRBLG1CQW1EQTs7QUFFQSxLQXJEQTtBQXNEQTtBQUNBLGFBdkRBLHVCQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0RBO0FBNERBLFFBNURBLGdCQTREQSxPQTVEQSxFQTREQSxLQTVEQSxFQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxFQTtBQW1FQSxjQW5FQSx3QkFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEVBO0FBeUVBLGtCQXpFQSwwQkF5RUEsT0F6RUEsRUF5RUEsS0F6RUEsRUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhGQTtBQWlGQSxnQkFqRkEsd0JBaUZBLElBakZBLEVBaUZBO0FBQ0E7QUFDQSxLQW5GQTtBQW9GQSxXQXBGQSxtQkFvRkEsSUFwRkEsRUFvRkEsS0FwRkEsRUFvRkE7QUFDQTtBQUNBO0FBQ0EsS0F2RkE7QUF3RkEscUJBeEZBLCtCQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0ZBO0FBZ0dBLFVBaEdBLG9CQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRHQTtBQXVHQSx3QkF2R0EsZ0NBdUdBLENBdkdBLEVBdUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9HQTtBQWdIQSxLQWhIQSxlQWdIQSxFQWhIQTtBQWlIQSxLQWpIQSxlQWlIQSxFQWpIQTtBQWtIQSxLQWxIQSxlQWtIQSxFQWxIQTtBQW1IQSxLQW5IQSxlQW1IQSxFQW5IQTtBQW9IQSxLQXBIQSxlQW9IQSxFQXBIQSxFQTFDQSxFIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxjb3Zlci12aWV3IGNsYXNzPVwiYm94XCIgdi1pZj1cImNvbW1lbnRTdGF0dXNcIiA6c3R5bGU9XCJ7d2lkdGg6d2luV2lkdGgrJ3B4JyxoZWlnaHQ6d2luSGVpZ2h0KydweCd9XCI+XHJcblx0XHQ8ZGl2IEBjbGljay5zdG9wPVwib25NYXNrKClcIiBjbGFzcz1cIm1hc2tcIiA6c3R5bGU9XCJ7d2lkdGg6d2luV2lkdGgrJ3B4J31cIiBAdG91Y2hzdGFydC5zdG9wPSdhJyBAdG91Y2htb3ZlLnN0b3A9XCJiXCJcclxuXHRcdFx0QHRvdWNoZW5kLnN0b3A9J2MnPjwvZGl2PlxyXG5cdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb21tZW50LWJveFwiIDpzdHlsZT1cIntoZWlnaHQ6d2luSGVpZ2h0LzEwKjcrJ3B4J31cIiBAY2xpY2suc3RvcD1cImVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRvcFwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInB5LTEgIGEtY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBycHg7XCI+6K+E6K66PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyBAc2Nyb2xsdG9sb3dlcj1cIm9uTG9hZGluZ1wiIDpzY3JvbGwtdG9wPSdzY3JvbGxUb1RvcCcgc2Nyb2xsLXdpdGgtYW5pbWF0aW9uIHNjcm9sbC15IGNsYXNzPVwiZmxleC0xXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInB5LTEgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInB5LTIgZmxleC1yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udXNlckluZm8uZmFjZVVybFwiIG1vZGU9XCJcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIG1sLTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNTBycHg7aGVpZ2h0OiA1MHJweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LTEgIGZsZXgtY29sdW1uIG14LTFcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC1saWdodC1tdXRlZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAzMHJweDtcIj57e2l0ZW0udXNlckluZm8ubmlja05hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiIGEtY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogMTIwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwidGFwTG92ZShpdGVtLGluZGV4KVwiIDpjbGFzcz1cIml0ZW0uaXNMb3ZlPydyZWQtaGVhdCc6J3doaXRlLWhlYXQnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplLWhlYXQgXCI+JiN4ZTY0ZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtbGlnaHQtbXV0ZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjRycHg7XCI+e3tpdGVtLm51bX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMTBycHg7bWFyZ2luLXJpZ2h0OiAxMDBycHg7bWFyZ2luLXRvcDogLTYwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBtdC0xXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcnB4O1wiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJub0RhdGFcIiBjbGFzcz1cInB0LTMgYS1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogNzBweDt3aWR0aDo3NTBycHhcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LW11dGVkXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcnB4O1wiPnt7bG9hZGluZ1RleHR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgQGNsaWNrPVwic2hvd0tleVwiIGNsYXNzPVwiYmctZGFyayBweC0xIGotY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDYwcnB4O1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LWxpZ2h0LW11dGVkIFwiIHN0eWxlPVwiZm9udC1zaXplOiAyNHJweDtcIj7or7Tngrnku4DkuYjlkKd+fjwvdGV4dD5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cImZvY3VzU3RhdHVzXCIgQGNsaWNrLnN0b3A9XCJvbk1hc2soKVwiIGNsYXNzPVwibWFzazFcIiA6c3R5bGU9XCJ7d2lkdGg6d2luV2lkdGgrJ3B4J31cIlxyXG5cdFx0XHRcdFx0QHRvdWNoc3RhcnQuc3RvcD0nYScgQHRvdWNobW92ZS5zdG9wPVwiYlwiIEB0b3VjaGVuZC5zdG9wPSdjJz48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgdi1pZj1cImZvY3VzU3RhdHVzXCIgY2xhc3M9XCJtYXNrMlwiIDpzdHlsZT1cInt3aWR0aDp3aW5XaWR0aCsncHgnLGhlaWdodDprZXlIZWlnaHRNYXNrLXRhYkJhcisncHgnfVwiPlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyB2LWlmPVwiZm9jdXNTdGF0dXNcIiBjbGFzcz1cImotY2VudGVyIGZsZXgtcm93ICBiZy1kYXJrIGlucHV0LWJveFwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7Ym90dG9tOmtleUhlaWdodC10YWJCYXIrJ3B4J31cIj5cclxuXHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImZsZXgtMSBweC0xICBiZy1kYXJrIHRleHQtbGlnaHQtbXV0ZWQgdGV4dC10b3BcIiB2LW1vZGVsPVwidGV4dFwiIDpmb2N1cz1cImZvY3VzU3RhdHVzXCJcclxuXHRcdFx0XHRcdFx0OmFkanVzdC1wb3NpdGlvbj1cImZhbHNlXCIgQGZvY3VzPVwiZm9jdXNcIiBAYmx1cj1cImJsdXJcIiBjdXJzb3Itc3BhY2luZz1cIjFcIiBzaG93LWNvbmZpcm0tYmFyPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAzMHJweDtoZWlnaHQ6MTUwcnB4O1wiIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCIgQGtleWJvYXJkaGVpZ2h0Y2hhbmdlPVwia2V5Ym9hcmRoZWlnaHRjaGFuZ2VcIj48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImotY2VudGVyIGEtY2VudGVyIHB4LTEgbXgtMSBiZy1wcmltYXJ5IHJvdW5kZWRcIiBzdHlsZT1cImhlaWdodDogNTBycHg7bWFyZ2luLXRvcDogOTBycHg7XCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwic2VuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjRkZGQUU4O2ZvbnQtc2l6ZTogMjVycHg7XCI+5Y+R6YCBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvY292ZXItdmlldz5cclxuXHQ8L2NvdmVyLXZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGNvbW1lbnRTdGF0dXM6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxpc3Q6IFtdLFxyXG5cdFx0XHRcdHRleHQ6IG51bGwsXHJcblx0XHRcdFx0bm9EYXRhOiBmYWxzZSxcclxuXHRcdFx0XHRsb2FkaW5nU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0bG9hZGluZ1RleHQ6ICfmsqHmnInmm7TlpJror4TorrrkuoYnLFxyXG5cdFx0XHRcdGZvY3VzU3RhdHVzOiBmYWxzZSxcclxuXHRcdFx0XHRwbGFjZWhvbGRlcjogXCLor7Tngrnku4DkuYjlkKdcIixcclxuXHRcdFx0XHR3aW5XaWR0aDogMCxcclxuXHRcdFx0XHR3aW5IZWlnaHQ6IDAsXHJcblx0XHRcdFx0Y29tbWVudEluZGV4OiAwLFxyXG5cdFx0XHRcdGluaXRTdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHRcdHZpZGVvSWQ6IG51bGwsXHJcblx0XHRcdFx0a2V5SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGtleUhlaWdodE1hc2s6IDAsXHJcblx0XHRcdFx0c2hvd1N0YXR1czogZmFsc2UsXHJcblx0XHRcdFx0c2Nyb2xsVG9Ub3A6IDAsXHJcblx0XHRcdFx0dGFiQmFyOiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldFN5c3RlbUluZm8oKVxyXG5cdFx0XHRsZXQgaCA9IHVuaS5nZXRTdG9yYWdlU3luYygna2V5SGVpZ2h0JylcclxuXHRcdFx0aWYgKCFoIHx8IGggPT0gJycgfHwgaDwzMDApIHtcclxuXHRcdFx0XHR1bmkub25LZXlib2FyZEhlaWdodENoYW5nZShyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5rZXlIZWlnaHQgPSByZXMuaGVpZ2h0XHJcblx0XHRcdFx0XHR0aGlzLmtleUhlaWdodE1hc2sgPSByZXMuaGVpZ2h0XHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2tleUhlaWdodCcsIHJlcy5oZWlnaHQpXHJcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2tleUhlaWdodE1hc2snLCB0aGlzLmtleUhlaWdodE1hc2spXHJcblx0XHRcdFx0XHR1bmkub2ZmS2V5Ym9hcmRIZWlnaHRDaGFuZ2UoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0U3lzdGVtSW5mbygpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQud2luV2lkdGggPSByZXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHRcdHRoYXQud2luSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0VGFiQmFySGVpZ2h0KGgpe1xyXG5cdFx0XHQgIHRoaXMudGFiQmFyID0gaCAgXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dLZXkoKSB7XHJcblx0XHRcdFx0bGV0IGggPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2tleUhlaWdodCcpXHJcblx0XHRcdFx0bGV0IG0gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2tleUhlaWdodE1hc2snKVxyXG5cdFx0XHRcdGlmIChoKSB7XHJcblx0XHRcdFx0XHR0aGlzLmtleUhlaWdodCA9IGhcclxuXHRcdFx0XHRcdHRoaXMua2V5SGVpZ2h0TWFzayA9IG1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5mb2N1c1N0YXR1cyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZUtleSgpIHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VuZE92ZXIoKSB7XHJcblx0XHRcdFx0dGhpcy50ZXh0ID0gXCJcIlxyXG5cdFx0XHRcdHRoaXMuaGlkZUtleSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmQoKSB7XHJcblx0XHRcdFx0aWYodGhpcy50ZXh0ID09ICcnKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+WGheWuueS4jeiDveS4uuepuicsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJzZW5kXCIsIHRoaXMudGV4dClcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFRvVG9wID0gMFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsVG9Ub3AgPSAyXHJcblx0XHRcdFx0fSwxMDApXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmb2N1cygpIHtcclxuXHRcdFx0XHR0aGlzLmZvY3VzU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRibHVyKCkge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb3dlcigpIHtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4iuaLieWKoOi9veS6i+S7tlxyXG5cdFx0XHRvbkxvYWRpbmcoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubm9EYXRhKSByZXR1cm5cclxuXHRcdFx0XHRpZiAoIXRoaXMuaW5pdFN0YXR1cykgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnc2V0Q29tbWVudExpc3QnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0KGFycmxpc3QsIGNoZWNrKSB7XHJcblx0XHRcdFx0dGhpcy5pbml0U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMubGlzdCA9IGFycmxpc3RcclxuXHRcdFx0XHRpZiAoY2hlY2spIHtcclxuXHRcdFx0XHRcdHRoaXMubm9EYXRhID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlRGF0YSgpIHtcclxuXHRcdFx0XHR0aGlzLnZpZGVvSWQgPSBudWxsXHJcblx0XHRcdFx0dGhpcy5saXN0ID0gW11cclxuXHRcdFx0XHR0aGlzLmluaXRTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMubm9EYXRhID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Q29tbWVudERhdGEoYXJybGlzdCwgY2hlY2spIHtcclxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhcnJsaXN0KSkge1xyXG5cdFx0XHRcdFx0dGhpcy5saXN0ID0gWy4uLnRoaXMubGlzdCwgLi4uYXJybGlzdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGNoZWNrKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5vRGF0YSA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZyb250QWRkRGF0YShpdGVtKSB7XHJcblx0XHRcdFx0dGhpcy5saXN0LnVuc2hpZnQoaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFwTG92ZShpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudEluZGV4ID0gaW5kZXhcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwidGFwQ29tbWVudExvdmVcIiwgaXRlbSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlQ29tbWVudExvdmUoKSB7XHJcblx0XHRcdFx0dGhpcy5saXN0W3RoaXMuY29tbWVudEluZGV4XS5pc0xvdmUgPSAhdGhpcy5saXN0W3RoaXMuY29tbWVudEluZGV4XS5pc0xvdmVcclxuXHRcdFx0XHRpZiAodGhpcy5saXN0W3RoaXMuY29tbWVudEluZGV4XS5pc0xvdmUpIHtcclxuXHRcdFx0XHRcdHRoaXMubGlzdFt0aGlzLmNvbW1lbnRJbmRleF0ubnVtKytcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmxpc3RbdGhpcy5jb21tZW50SW5kZXhdLm51bS0tXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uTWFzaygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mb2N1c1N0YXR1cykge1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlS2V5KClcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdtYXNrJylcclxuXHRcdFx0fSxcclxuXHRcdFx0a2V5Ym9hcmRoZWlnaHRjaGFuZ2UoZSl7XHJcblx0XHRcdFx0aWYoZS5kZXRhaWwuaGVpZ2h0IDwgMTApe1xyXG5cdFx0XHRcdCAgICB0aGlzLmhpZGVLZXkoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihlLmRldGFpbC5oZWlnaHQ+MzAwKXtcclxuXHRcdFx0XHRcdHRoaXMua2V5SGVpZ2h0ID0gZS5kZXRhaWwuaGVpZ2h0XHJcblx0XHRcdFx0XHR0aGlzLmtleUhlaWdodE1hc2sgPSBlLmRldGFpbC5oZWlnaHQgKyA1MFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YSgpIHt9LFxyXG5cdFx0XHRiKCkge30sXHJcblx0XHRcdGMoKSB7fSxcclxuXHRcdFx0ZCgpIHt9LFxyXG5cdFx0XHRlKCkge31cclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiAxMDAwMDtcclxuXHR9XHJcblxyXG5cdC5tYXNrIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDEwMDAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHJcblx0Lm1hc2sxIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDEwMDA0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdH1cclxuXHJcblx0Lm1hc2syIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDEwMDA1O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5jb21tZW50LWJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0ei1pbmRleDogMTAwMDI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cclxuXHQuaWNvbmZvbnQge1xyXG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xyXG5cdH1cclxuXHJcblx0Lmljb25mb250LXNpemUtaGVhdCB7XHJcblx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LndoaXRlLWhlYXQge1xyXG5cdFx0Y29sb3I6ICNlZWU7XHJcblx0fVxyXG5cclxuXHQucmVkLWhlYXQge1xyXG5cdFx0Y29sb3I6ICNGRjFCMDA7XHJcblx0fVxyXG5cclxuXHQudG9wIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0XHRvcGFjaXR5OiAwLjE7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmJvdHRvbS10aXRsZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHR9XHJcblxyXG5cdC50ZXh0LXRvcCB7XHJcblx0XHRwYWRkaW5nLXRvcDogMTBycHg7XHJcblx0fVxyXG5cclxuXHQubG9hZGluZyB7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHR3aWR0aDogMjBweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnB5LTEge1xyXG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdC5hLWNlbnRlciB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRleHQtd2hpdGUge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQudGV4dC1saWdodC1tdXRlZCB7XHJcblx0XHRjb2xvcjogI0IyQjJCMiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZsZXgtMSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LmZsZXgtY29sdW1uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZmxleC1yb3cge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5weS0yIHtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cclxuXHQucm91bmRlZC1jaXJjbGUge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5yb3VuZGVkIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR9XHJcblxyXG5cdC5tbC0yIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1yLTEge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lm14LTEge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubXQtMSB7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnB0LTMge1xyXG5cdFx0cGFkZGluZy10b3A6IDMwcHg7XHJcblx0fVxyXG5cclxuXHQucHgtMSB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnRleHQtbXV0ZWQge1xyXG5cdFx0Y29sb3I6ICM2Yzc1N2Q7XHJcblx0fVxyXG5cclxuXHQuai1jZW50ZXIge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYmctZGFyayB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG5cdH1cclxuXHJcblx0LmJnLXByaW1hcnkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1ib3gge1xyXG5cdFx0aGVpZ2h0OiAxNTBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!*************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/share.nvue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.nvue?vue&type=template&id=357d5910&scoped=true& */ 17);\n/* harmony import */ var _share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share.nvue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"357d5910\",\n  null,\n  false,\n  _share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/kai-video-swiper/components/share.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDs7O0FBR3JEO0FBQ2dMO0FBQ2hMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NoYXJlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzU3ZDU5MTAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaGFyZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGFyZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM1N2Q1OTEwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMva2FpLXZpZGVvLXN3aXBlci9jb21wb25lbnRzL3NoYXJlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/share.nvue?vue&type=template&id=357d5910&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./share.nvue?vue&type=template&id=357d5910&scoped=true& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_template_id_357d5910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 18 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/components/share.nvue?vue&type=template&id=357d5910&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.shareStatus)
    ? _c(
        "div",
        {
          staticClass: _vm._$s(0, "sc", "box"),
          style: _vm._$s(0, "s", {
            width: _vm.winWidth + "px",
            height: _vm.winHeight + "px"
          }),
          attrs: { _i: 0 }
        },
        [
          _c("div", {
            staticClass: _vm._$s(1, "sc", "mask"),
            style: _vm._$s(1, "s", { width: _vm.winWidth + "px" }),
            attrs: { _i: 1 },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.onMask()
              },
              touchstart: function($event) {
                $event.stopPropagation()
                return _vm.a($event)
              },
              touchmove: function($event) {
                $event.stopPropagation()
                return _vm.b($event)
              },
              touchend: function($event) {
                $event.stopPropagation()
                return _vm.c($event)
              }
            }
          }),
          _c(
            "div",
            {
              staticClass: _vm._$s(2, "sc", "share-box"),
              attrs: { _i: 2 },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.e($event)
                }
              }
            },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "title"),
                attrs: { _i: 3 }
              }),
              _c(
                "scroll-view",
                { staticClass: _vm._$s(4, "sc", "scroll"), attrs: { _i: 4 } },
                _vm._l(_vm._$s(5, "f", { forItems: _vm.friendData }), function(
                  item,
                  index,
                  $20,
                  $30
                ) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(5, "f", { forIndex: $20, key: index }),
                      staticClass: _vm._$s("5-" + $30, "sc", "scroll-item"),
                      attrs: { _i: "5-" + $30 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(
                          "6-" + $30,
                          "sc",
                          "scroll-item-image"
                        ),
                        attrs: {
                          src: _vm._$s("6-" + $30, "a-src", item.src),
                          _i: "6-" + $30
                        },
                        on: {
                          click: function($event) {
                            return _vm.share(item)
                          }
                        }
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(
                            "7-" + $30,
                            "sc",
                            "scroll-item-text"
                          ),
                          attrs: { _i: "7-" + $30 }
                        },
                        [_vm._v(_vm._$s("7-" + $30, "t0-0", _vm._s(item.name)))]
                      )
                    ]
                  )
                }),
                0
              ),
              _c("text", {
                staticClass: _vm._$s(8, "sc", "title"),
                attrs: { _i: 8 }
              }),
              _c(
                "scroll-view",
                { staticClass: _vm._$s(9, "sc", "scroll"), attrs: { _i: 9 } },
                _vm._l(_vm._$s(10, "f", { forItems: _vm.shareData }), function(
                  item,
                  index,
                  $21,
                  $31
                ) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(10, "f", { forIndex: $21, key: index }),
                      staticClass: _vm._$s("10-" + $31, "sc", "scroll-item"),
                      attrs: { _i: "10-" + $31 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(
                          "11-" + $31,
                          "sc",
                          "scroll-item-image"
                        ),
                        attrs: {
                          src: _vm._$s("11-" + $31, "a-src", item.src),
                          _i: "11-" + $31
                        },
                        on: {
                          click: function($event) {
                            return _vm.share(item)
                          }
                        }
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(
                            "12-" + $31,
                            "sc",
                            "scroll-item-text"
                          ),
                          attrs: { _i: "12-" + $31 }
                        },
                        [
                          _vm._v(
                            _vm._$s("12-" + $31, "t0-0", _vm._s(item.name))
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
              ),
              _c(
                "scroll-view",
                {
                  staticClass: _vm._$s(13, "sc", "scroll border-top"),
                  attrs: { _i: 13 }
                },
                _vm._l(_vm._$s(14, "f", { forItems: _vm.actionData }), function(
                  item,
                  index,
                  $22,
                  $32
                ) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(14, "f", { forIndex: $22, key: index }),
                      staticClass: _vm._$s("14-" + $32, "sc", "scroll-item"),
                      attrs: { _i: "14-" + $32 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          "15-" + $32,
                          "sc",
                          "scroll-item-image-box"
                        ),
                        attrs: { _i: "15-" + $32 }
                      }),
                      _c("image", {
                        staticClass: _vm._$s(
                          "16-" + $32,
                          "sc",
                          "scroll-item-bg-image"
                        ),
                        attrs: {
                          src: _vm._$s("16-" + $32, "a-src", item.src),
                          _i: "16-" + $32
                        },
                        on: {
                          click: function($event) {
                            return _vm.share(item)
                          }
                        }
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(
                            "17-" + $32,
                            "sc",
                            "scroll-item-text"
                          ),
                          attrs: { _i: "17-" + $32 }
                        },
                        [
                          _vm._v(
                            _vm._$s("17-" + $32, "t0-0", _vm._s(item.name))
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 19 */
/*!**************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/share.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./share.nvue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNsQixDQUFnQixvbUJBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGFyZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hhcmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/components/share.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    shareStatus: {\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {\n      winWidth: 0,\n      winHeight: 0,\n      friendData: [{\n        src: '/static/video-images/s1.png',\n        name: '贝贝' },\n\n      {\n        src: '/static/video-images/s2.png',\n        name: '静静' },\n\n      {\n        src: '/static/video-images/s3.png',\n        name: '欢欢' },\n\n      {\n        src: '/static/video-images/s4.png',\n        name: '莹莹' },\n\n      {\n        src: '/static/video-images/s5.png',\n        name: '妮妮' },\n\n      {\n        src: '/static/video-images/s6.png',\n        name: '微微' },\n\n      {\n        src: '/static/video-images/s7.png',\n        name: '思思' },\n\n      {\n        src: '/static/video-images/s8.png',\n        name: '甜甜' },\n\n      {\n        src: '/static/video-images/s9.png',\n        name: '露露' },\n\n      {\n        src: '/static/video-images/s10.png',\n        name: '花花' }],\n\n\n      shareData: [{\n        src: '/static/video-images/ss-1.png',\n        name: '微信' },\n\n      {\n        src: '/static/video-images/ss-2.png',\n        name: '朋友圈' },\n\n      {\n        src: '/static/video-images/ss-3.png',\n        name: 'QQ空间' },\n\n      {\n        src: '/static/video-images/ss-4.png',\n        name: 'QQ' },\n\n      {\n        src: '/static/video-images/ss-5.png',\n        name: '微博' }],\n\n\n      actionData: [{\n        src: '/static/video-images/sss-1.png',\n        name: '举报' },\n\n      {\n        src: '/static/video-images/sss-2.png',\n        name: '保存至相册' },\n\n      {\n        src: '/static/video-images/sss-3.png',\n        name: '收藏' },\n\n      {\n        src: '/static/video-images/sss-4.png',\n        name: '不感兴趣' },\n\n      {\n        src: '/static/video-images/sss-5.png',\n        name: '复制链接' },\n\n      {\n        src: '/static/video-images/sss-6.png',\n        name: '二维码' }] };\n\n\n\n\n  },\n  created: function created() {\n    this.getSystemInfo();\n  },\n  methods: {\n    getSystemInfo: function getSystemInfo() {\n      var that = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          that.winWidth = res.windowWidth;\n          that.winHeight = res.windowHeight;\n        } });\n\n    },\n    onMask: function onMask() {\n      this.$emit('mask');\n    },\n    share: function share(e) {\n      this.$emit('share', e);\n    },\n    setFriend: function setFriend(data) {\n      this.friendData = data;\n    },\n    setType: function setType(data) {\n      this.shareData = data;\n    },\n    setAction: function setAction(data) {\n      this.actionData = data;\n    },\n    a: function a() {},\n    b: function b() {},\n    c: function c() {},\n    d: function d() {},\n    e: function e() {} } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9rYWktdmlkZW8tc3dpcGVyL2NvbXBvbmVudHMvc2hhcmUubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQURBLEVBREE7OztBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsa0JBRkE7QUFHQTtBQUNBLDBDQURBO0FBRUEsa0JBRkE7O0FBSUE7QUFDQSwwQ0FEQTtBQUVBLGtCQUZBLEVBSkE7O0FBUUE7QUFDQSwwQ0FEQTtBQUVBLGtCQUZBLEVBUkE7O0FBWUE7QUFDQSwwQ0FEQTtBQUVBLGtCQUZBLEVBWkE7O0FBZ0JBO0FBQ0EsMENBREE7QUFFQSxrQkFGQSxFQWhCQTs7QUFvQkE7QUFDQSwwQ0FEQTtBQUVBLGtCQUZBLEVBcEJBOztBQXdCQTtBQUNBLDBDQURBO0FBRUEsa0JBRkEsRUF4QkE7O0FBNEJBO0FBQ0EsMENBREE7QUFFQSxrQkFGQSxFQTVCQTs7QUFnQ0E7QUFDQSwwQ0FEQTtBQUVBLGtCQUZBLEVBaENBOztBQW9DQTtBQUNBLDJDQURBO0FBRUEsa0JBRkEsRUFwQ0EsQ0FIQTs7O0FBNENBO0FBQ0EsNENBREE7QUFFQSxrQkFGQTs7QUFJQTtBQUNBLDRDQURBO0FBRUEsbUJBRkEsRUFKQTs7QUFRQTtBQUNBLDRDQURBO0FBRUEsb0JBRkEsRUFSQTs7QUFZQTtBQUNBLDRDQURBO0FBRUEsa0JBRkEsRUFaQTs7QUFnQkE7QUFDQSw0Q0FEQTtBQUVBLGtCQUZBLEVBaEJBLENBNUNBOzs7QUFpRUE7QUFDQSw2Q0FEQTtBQUVBLGtCQUZBOztBQUlBO0FBQ0EsNkNBREE7QUFFQSxxQkFGQSxFQUpBOztBQVFBO0FBQ0EsNkNBREE7QUFFQSxrQkFGQSxFQVJBOztBQVlBO0FBQ0EsNkNBREE7QUFFQSxvQkFGQSxFQVpBOztBQWdCQTtBQUNBLDZDQURBO0FBRUEsb0JBRkEsRUFoQkE7O0FBb0JBO0FBQ0EsNkNBREE7QUFFQSxtQkFGQSxFQXBCQSxDQWpFQTs7Ozs7QUE0RkEsR0FwR0E7QUFxR0EsU0FyR0EscUJBcUdBO0FBQ0E7QUFDQSxHQXZHQTtBQXdHQTtBQUNBLGlCQURBLDJCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkE7O0FBTUEsS0FUQTtBQVVBLFVBVkEsb0JBVUE7QUFDQTtBQUNBLEtBWkE7QUFhQSxTQWJBLGlCQWFBLENBYkEsRUFhQTtBQUNBO0FBQ0EsS0FmQTtBQWdCQSxhQWhCQSxxQkFnQkEsSUFoQkEsRUFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLFdBbkJBLG1CQW1CQSxJQW5CQSxFQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsYUF0QkEscUJBc0JBLElBdEJBLEVBc0JBO0FBQ0E7QUFDQSxLQXhCQTtBQXlCQSxLQXpCQSxlQXlCQSxFQXpCQTtBQTBCQSxLQTFCQSxlQTBCQSxFQTFCQTtBQTJCQSxLQTNCQSxlQTJCQSxFQTNCQTtBQTRCQSxLQTVCQSxlQTRCQSxFQTVCQTtBQTZCQSxLQTdCQSxlQTZCQSxFQTdCQSxFQXhHQSxFIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJib3hcIiB2LWlmPVwic2hhcmVTdGF0dXNcIiA6c3R5bGU9XCJ7d2lkdGg6d2luV2lkdGgrJ3B4JyxoZWlnaHQ6d2luSGVpZ2h0KydweCd9XCI+XHJcblx0XHQ8ZGl2IEBjbGljay5zdG9wPVwib25NYXNrKClcIiBjbGFzcz1cIm1hc2tcIiA6c3R5bGU9XCJ7d2lkdGg6d2luV2lkdGgrJ3B4J31cIiBAdG91Y2hzdGFydC5zdG9wPSdhJyBAdG91Y2htb3ZlLnN0b3A9XCJiXCJcclxuXHRcdCBAdG91Y2hlbmQuc3RvcD0nYyc+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwic2hhcmUtYm94XCIgQGNsaWNrLnN0b3A9XCJlXCI+XHJcblxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+56eB5L+h57uZPC90ZXh0PlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJzY3JvbGxcIiBzY3JvbGwteD1cInRydWVcIiBzY3JvbGwtbGVmdD1cIjBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbC1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZnJpZW5kRGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2Nyb2xsLWl0ZW0taW1hZ2VcIiA6c3JjPVwiaXRlbS5zcmNcIiBAY2xpY2s9XCJzaGFyZShpdGVtKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNjcm9sbC1pdGVtLXRleHRcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPuWIhuS6q+WIsDwvdGV4dD5cclxuXHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwic2Nyb2xsXCIgc2Nyb2xsLXg9XCJ0cnVlXCIgc2Nyb2xsLWxlZnQ9XCIwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzY3JvbGwtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHNoYXJlRGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwic2Nyb2xsLWl0ZW0taW1hZ2VcIiA6c3JjPVwiaXRlbS5zcmNcIiBAY2xpY2s9XCJzaGFyZShpdGVtKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNjcm9sbC1pdGVtLXRleHRcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwic2Nyb2xsIGJvcmRlci10b3BcIiBzY3JvbGwteD1cInRydWVcIiBzY3JvbGwtbGVmdD1cIjBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbC1pdGVtXCIgc3R5bGU9XCJcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBhY3Rpb25EYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbC1pdGVtLWltYWdlLWJveFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInNjcm9sbC1pdGVtLWJnLWltYWdlXCIgOnNyYz1cIml0ZW0uc3JjXCIgQGNsaWNrPVwic2hhcmUoaXRlbSlcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzY3JvbGwtaXRlbS10ZXh0XCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHNoYXJlU3RhdHVzOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3aW5XaWR0aDogMCxcclxuXHRcdFx0XHR3aW5IZWlnaHQ6IDAsXHJcblx0XHRcdFx0ZnJpZW5kRGF0YTogW3tcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvczEucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+i0nei0nSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogJy9zdGF0aWMvdmlkZW8taW1hZ2VzL3MyLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfpnZnpnZknXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zMy5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5qyi5qyiJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvczQucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+iOueiOuSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogJy9zdGF0aWMvdmlkZW8taW1hZ2VzL3M1LnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICflpq7lpq4nXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zNi5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5b6u5b6uJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvczcucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+aAneaAnSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogJy9zdGF0aWMvdmlkZW8taW1hZ2VzL3M4LnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfnlJznlJwnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zOS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn6Zyy6ZyyJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvczEwLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfoirHoirEnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0c2hhcmVEYXRhOiBbe1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zcy0xLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICflvq7kv6EnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zcy0yLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfmnIvlj4vlnIgnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zcy0zLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdRUeepuumXtCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogJy9zdGF0aWMvdmlkZW8taW1hZ2VzL3NzLTQucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ1FRJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvc3MtNS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5b6u5Y2aJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGFjdGlvbkRhdGE6IFt7XHJcblx0XHRcdFx0XHRcdHNyYzogJy9zdGF0aWMvdmlkZW8taW1hZ2VzL3Nzcy0xLnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkuL7miqUnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zc3MtMi5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5L+d5a2Y6Iez55u45YaMJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvc3NzLTMucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+aUtuiXjydcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNyYzogJy9zdGF0aWMvdmlkZW8taW1hZ2VzL3Nzcy00LnBuZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfkuI3mhJ/lhbTotqMnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzcmM6ICcvc3RhdGljL3ZpZGVvLWltYWdlcy9zc3MtNS5wbmcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5aSN5Yi26ZO+5o6lJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0c3JjOiAnL3N0YXRpYy92aWRlby1pbWFnZXMvc3NzLTYucG5nJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+S6jOe7tOeggSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0U3lzdGVtSW5mbygpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXRTeXN0ZW1JbmZvKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC53aW5XaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdFx0dGhhdC53aW5IZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbk1hc2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnbWFzaycpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlKGUpe1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3NoYXJlJyxlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRGcmllbmQoZGF0YSl7XHJcblx0XHRcdFx0dGhpcy5mcmllbmREYXRhPWRhdGFcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0VHlwZShkYXRhKXtcclxuXHRcdFx0XHR0aGlzLnNoYXJlRGF0YT1kYXRhXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEFjdGlvbihkYXRhKXtcclxuXHRcdFx0XHR0aGlzLmFjdGlvbkRhdGE9ZGF0YVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhKCkge30sXHJcblx0XHRcdGIoKSB7fSxcclxuXHRcdFx0YygpIHt9LFxyXG5cdFx0XHRkKCkge30sXHJcblx0XHRcdGUoKSB7fSxcclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiAxMDAwMDtcclxuXHR9XHJcblxyXG5cdC5tYXNrIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDEwMDAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHJcblx0LnNoYXJlLWJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzI2MjYyODtcclxuXHRcdHotaW5kZXg6IDEwMDAyO1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5zY3JvbGwge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuc2Nyb2xsLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5zY3JvbGwtaXRlbS1pbWFnZS1ib3h7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNzM3O1xyXG5cdH1cclxuXHQuc2Nyb2xsLWl0ZW0tYmctaW1hZ2V7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdC8qIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xyXG5cdFx0bWFyZ2luLXRvcDogLTQwcHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cdC5zY3JvbGwtaXRlbS1pbWFnZSB7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuc2Nyb2xsLWl0ZW0tdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI0NBQ0FDQTtcclxuXHR9XHJcblx0LmJvcmRlci10b3B7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjMzYzNjM2O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/top-text.nvue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-text.nvue?vue&type=template&id=83c1fc20&scoped=true& */ 22);\n/* harmony import */ var _top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-text.nvue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"83c1fc20\",\n  null,\n  false,\n  _top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/kai-video-swiper/components/top-text.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ2dMO0FBQ2hMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RvcC10ZXh0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNjMWZjMjAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90b3AtdGV4dC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90b3AtdGV4dC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgzYzFmYzIwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMva2FpLXZpZGVvLXN3aXBlci9jb21wb25lbnRzL3RvcC10ZXh0Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***********************************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/top-text.nvue?vue&type=template&id=83c1fc20&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./top-text.nvue?vue&type=template&id=83c1fc20&scoped=true& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_template_id_83c1fc20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/components/top-text.nvue?vue&type=template&id=83c1fc20&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._$s(1, "i", _vm.show)
      ? _c(
          "div",
          { staticClass: _vm._$s(1, "sc", "top-text"), attrs: { _i: 1 } },
          [
            _vm._$s(2, "i", _vm.place != "")
              ? _c(
                  "div",
                  {
                    staticClass: _vm._$s(2, "sc", "box"),
                    attrs: { _i: 2 },
                    on: {
                      click: function($event) {
                        return _vm.setActive(0)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: _vm._$s(3, "sc", "text-box"),
                        attrs: { _i: 3 }
                      },
                      [
                        _c(
                          "text",
                          {
                            class: _vm._$s(
                              4,
                              "c",
                              _vm.active == 0 ? "text-active" : "text"
                            ),
                            attrs: { _i: 4 }
                          },
                          [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.place)))]
                        ),
                        _c("text", {
                          class: _vm._$s(
                            5,
                            "c",
                            _vm.active == 0
                              ? "text-border-active"
                              : "text-border"
                          ),
                          attrs: { _i: 5 }
                        })
                      ]
                    ),
                    _vm._$s(6, "i", _vm.place_num != 0)
                      ? _c(
                          "div",
                          {
                            staticClass: _vm._$s(6, "sc", "num-box"),
                            attrs: { _i: 6 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(7, "sc", "num"),
                                attrs: { _i: 7 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(7, "t0-0", _vm._s(_vm.place_num))
                                )
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e(),
            _vm._$s(8, "i", _vm.place != "")
              ? _c(
                  "div",
                  {
                    staticClass: _vm._$s(8, "sc", "box-line"),
                    attrs: { _i: 8 }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(9, "sc", "text"),
                      attrs: { _i: 9 }
                    })
                  ]
                )
              : _vm._e(),
            _c(
              "div",
              {
                staticClass: _vm._$s(10, "sc", "box"),
                attrs: { _i: 10 },
                on: {
                  click: function($event) {
                    return _vm.setActive(1)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: _vm._$s(11, "sc", "text-box"),
                    attrs: { _i: 11 }
                  },
                  [
                    _c("text", {
                      class: _vm._$s(
                        12,
                        "c",
                        _vm.active == 1 ? "text-active" : "text"
                      ),
                      attrs: { _i: 12 }
                    }),
                    _c("text", {
                      class: _vm._$s(
                        13,
                        "c",
                        _vm.active == 1 ? "text-border-active" : "text-border"
                      ),
                      attrs: { _i: 13 }
                    })
                  ]
                ),
                _vm._$s(14, "i", _vm.follow_num != 0)
                  ? _c(
                      "div",
                      {
                        staticClass: _vm._$s(14, "sc", "num-box"),
                        attrs: { _i: 14 }
                      },
                      [
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(15, "sc", "num"),
                            attrs: { _i: 15 }
                          },
                          [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.follow_num)))]
                        )
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _c(
              "div",
              { staticClass: _vm._$s(16, "sc", "box-line"), attrs: { _i: 16 } },
              [
                _c("text", {
                  staticClass: _vm._$s(17, "sc", "text"),
                  attrs: { _i: 17 }
                })
              ]
            ),
            _c(
              "div",
              {
                staticClass: _vm._$s(18, "sc", "box"),
                attrs: { _i: 18 },
                on: {
                  click: function($event) {
                    return _vm.setActive(2)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: _vm._$s(19, "sc", "text-box"),
                    attrs: { _i: 19 }
                  },
                  [
                    _c("text", {
                      class: _vm._$s(
                        20,
                        "c",
                        _vm.active == 2 ? "text-active" : "text"
                      ),
                      attrs: { _i: 20 }
                    }),
                    _c("text", {
                      class: _vm._$s(
                        21,
                        "c",
                        _vm.active == 2 ? "text-border-active" : "text-border"
                      ),
                      attrs: { _i: 21 }
                    })
                  ]
                ),
                _vm._$s(22, "i", _vm.recommend_num != 0)
                  ? _c(
                      "div",
                      {
                        staticClass: _vm._$s(22, "sc", "num-box"),
                        attrs: { _i: 22 }
                      },
                      [
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(23, "sc", "num"),
                            attrs: { _i: 23 }
                          },
                          [
                            _vm._v(
                              _vm._$s(23, "t0-0", _vm._s(_vm.recommend_num))
                            )
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._$s(24, "i", _vm.show && _vm.liveStatus)
      ? _c(
          "div",
          {
            staticClass: _vm._$s(24, "sc", "left-text"),
            attrs: { _i: 24 },
            on: { click: _vm.live }
          },
          [
            _c("text", {
              staticClass: _vm._$s(25, "sc", "iconfont iconfont-size"),
              attrs: { _i: 25 }
            })
          ]
        )
      : _vm._e(),
    _vm._$s(26, "i", _vm.show)
      ? _c(
          "div",
          {
            staticClass: _vm._$s(26, "sc", "right-text"),
            attrs: { _i: 26 },
            on: { click: _vm.search }
          },
          [
            _c("text", {
              staticClass: _vm._$s(27, "sc", "iconfont iconfont-size"),
              attrs: { _i: 27 }
            })
          ]
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!*****************************************************************************************************!*\
  !*** D:/CCLqr/douyin/components/kai-video-swiper/components/top-text.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./top-text.nvue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_text_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlsQixDQUFnQix1bUJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b3AtdGV4dC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9wLXRleHQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/components/kai-video-swiper/components/top-text.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      city: '',\n      place_num: 0,\n      follow_num: 0,\n      recommend_num: 0,\n      place: '',\n      active: 2,\n      show: false,\n      liveStatus: true };\n\n  },\n  methods: {\n    setRecommendNum: function setRecommendNum(num) {\n      this.recommend_num = num;\n    },\n    setPlaceNum: function setPlaceNum(num) {\n      this.place_num = num;\n    },\n    setFollowNum: function setFollowNum(num) {\n      this.follow_num = num;\n    },\n    setPlace: function setPlace(place) {\n      this.place = place;\n    },\n    topShow: function topShow(status) {\n      this.show = status;\n    },\n    showLive: function showLive(status) {\n      this.liveStatus = status;\n    },\n    setActive: function setActive(num) {\n      this.active = num;\n      this.$emit('active', num);\n    },\n    live: function live() {\n      this.$emit('live');\n    },\n    search: function search() {\n      this.$emit('search');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9rYWktdmlkZW8tc3dpcGVyL2NvbXBvbmVudHMvdG9wLXRleHQubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxrQkFGQTtBQUdBLG1CQUhBO0FBSUEsc0JBSkE7QUFLQSxlQUxBO0FBTUEsZUFOQTtBQU9BLGlCQVBBO0FBUUEsc0JBUkE7O0FBVUEsR0FaQTtBQWFBO0FBQ0EsbUJBREEsMkJBQ0EsR0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZUFKQSx1QkFJQSxHQUpBLEVBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxnQkFQQSx3QkFPQSxHQVBBLEVBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxZQVZBLG9CQVVBLEtBVkEsRUFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLFdBYkEsbUJBYUEsTUFiQSxFQWFBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBLFlBaEJBLG9CQWdCQSxNQWhCQSxFQWdCQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkEsYUFuQkEscUJBbUJBLEdBbkJBLEVBbUJBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBO0FBdUJBLFFBdkJBLGtCQXVCQTtBQUNBO0FBQ0EsS0F6QkE7QUEwQkEsVUExQkEsb0JBMEJBO0FBQ0E7QUFDQSxLQTVCQSxFQWJBLEUiLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxkaXYgdi1pZj1cInNob3dcIiBjbGFzcz1cInRvcC10ZXh0XCI+XHJcblx0XHRcdDxkaXYgdi1pZj1cInBsYWNlIT0nJ1wiIGNsYXNzPVwiYm94XCIgQGNsaWNrPVwic2V0QWN0aXZlKDApXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtYm94XCI+XHJcblx0XHRcdFx0ICAgIDx0ZXh0IDpjbGFzcz1cImFjdGl2ZSA9PSAwID8gJ3RleHQtYWN0aXZlJyA6ICd0ZXh0JyBcIj57e3BsYWNlfX08L3RleHQ+XHJcblx0XHRcdFx0ICAgIDx0ZXh0IDpjbGFzcz1cImFjdGl2ZSA9PSAwID8gJ3RleHQtYm9yZGVyLWFjdGl2ZSc6J3RleHQtYm9yZGVyJ1wiPjwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibnVtLWJveFwiIHYtaWY9XCJwbGFjZV9udW0hPTBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibnVtXCI+e3twbGFjZV9udW19fTwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgdi1pZj1cInBsYWNlIT0nJ1wiICBjbGFzcz1cImJveC1saW5lXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJveFwiIEBjbGljaz1cInNldEFjdGl2ZSgxKVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LWJveFwiPlxyXG5cdFx0XHRcdCAgICA8dGV4dCA6Y2xhc3M9XCJhY3RpdmUgPT0gMSA/ICd0ZXh0LWFjdGl2ZScgOiAndGV4dCcgXCI+5YWz5rOoPC90ZXh0PlxyXG5cdFx0XHRcdCAgICA8dGV4dCA6Y2xhc3M9XCJhY3RpdmUgPT0gMSA/ICd0ZXh0LWJvcmRlci1hY3RpdmUnOid0ZXh0LWJvcmRlcidcIj48L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm51bS1ib3hcIiB2LWlmPVwiZm9sbG93X251bSE9MFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJudW1cIiA+e3tmb2xsb3dfbnVtfX08L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYm94LWxpbmVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj48L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYm94XCIgQGNsaWNrPVwic2V0QWN0aXZlKDIpXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtYm94XCI+XHJcblx0XHRcdFx0ICAgIDx0ZXh0IDpjbGFzcz1cImFjdGl2ZSA9PSAyID8gJ3RleHQtYWN0aXZlJyA6ICd0ZXh0JyBcIj7mjqjojZA8L3RleHQ+XHJcblx0XHRcdFx0ICAgIDx0ZXh0IDpjbGFzcz1cImFjdGl2ZSA9PSAyID8gJ3RleHQtYm9yZGVyLWFjdGl2ZSc6J3RleHQtYm9yZGVyJ1wiPjwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibnVtLWJveFwiIHYtaWY9XCJyZWNvbW1lbmRfbnVtIT0wXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm51bVwiID57e3JlY29tbWVuZF9udW19fTwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgQGNsaWNrPVwibGl2ZVwiIHYtaWY9XCJzaG93ICYmIGxpdmVTdGF0dXNcIiAgY2xhc3M9XCJsZWZ0LXRleHRcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBpY29uZm9udC1zaXplXCI+JiN4ZTYwNTs8L3RleHQ+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgQGNsaWNrPVwic2VhcmNoXCIgIHYtaWY9XCJzaG93XCIgIGNsYXNzPVwicmlnaHQtdGV4dFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IGljb25mb250LXNpemVcIj4mI3hlNjEyOzwvdGV4dD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2l0eTonJyxcclxuXHRcdFx0XHRwbGFjZV9udW06IDAsXHJcblx0XHRcdFx0Zm9sbG93X251bTogMCxcclxuXHRcdFx0XHRyZWNvbW1lbmRfbnVtOiAwLFxyXG5cdFx0XHRcdHBsYWNlOicnLFxyXG5cdFx0XHRcdGFjdGl2ZToyLFxyXG5cdFx0XHRcdHNob3c6ZmFsc2UsXHJcblx0XHRcdFx0bGl2ZVN0YXR1czp0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0c2V0UmVjb21tZW5kTnVtKG51bSl7XHJcblx0XHRcdFx0dGhpcy5yZWNvbW1lbmRfbnVtID0gbnVtXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFBsYWNlTnVtKG51bSl7XHJcblx0XHRcdFx0dGhpcy5wbGFjZV9udW0gPSBudW1cclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Rm9sbG93TnVtKG51bSl7XHJcblx0XHRcdFx0dGhpcy5mb2xsb3dfbnVtID0gbnVtXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFBsYWNlKHBsYWNlKXtcclxuXHRcdFx0XHR0aGlzLnBsYWNlID0gcGxhY2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9wU2hvdyhzdGF0dXMpe1xyXG5cdFx0XHRcdHRoaXMuc2hvdyA9IHN0YXR1c1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93TGl2ZShzdGF0dXMpe1xyXG5cdFx0XHRcdHRoaXMubGl2ZVN0YXR1cyA9IHN0YXR1c1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRBY3RpdmUobnVtKXtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IG51bVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2FjdGl2ZScsbnVtKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaXZlKCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnbGl2ZScpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlYXJjaCgpe1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3NlYXJjaCcpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuaWNvbmZvbnQge1xyXG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xyXG5cdH1cclxuXHQudG9wLXRleHQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogNTBweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHotaW5kZXg6IDEwMDAxO1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYm94IHtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5ib3gtbGluZSB7XHJcblx0XHR3aWR0aDogM3JweDtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQudGV4dC1ib3h7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHQgICAgaGVpZ2h0OiA2MHJweDtcclxuXHR9XHJcblx0XHJcblx0LnRleHQge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdCAgICBoZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQudGV4dC1hY3RpdmUge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHQgICAgaGVpZ2h0OiA1MHJweDtcclxuXHR9XHJcblx0XHJcblx0LnRleHQtYm9yZGVyIHtcclxuXHQgICAgd2lkdGg6IDUwcnB4O1xyXG5cdCAgICBoZWlnaHQ6IDhycHg7XHJcblx0fVxyXG5cdFxyXG5cdC50ZXh0LWJvcmRlci1hY3RpdmUge1xyXG5cdCAgICBoZWlnaHQ6IDhycHg7XHJcblx0ICAgIHdpZHRoOiA1MHJweDtcclxuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5yaWdodC10ZXh0IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogNTBweDtcclxuXHRcdHJpZ2h0OiAyMHB4O1xyXG5cdFx0ei1pbmRleDogMTAwMDI7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5sZWZ0LXRleHQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiA1MHB4O1xyXG5cdFx0bGVmdDogMjBweDtcclxuXHRcdHotaW5kZXg6IDEwMDAyO1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxlZnQtdGV4dC1zdHlsZSB7XHJcblx0XHRjb2xvcjogI0ZBRkJGRjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0fVxyXG5cclxuXHQubnVtLWJveCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRjFCMDA7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubnVtIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHR9XHJcblx0Lmljb25mb250LXNpemUge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDUwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*********************************************************************************!*\
  !*** D:/CCLqr/douyin/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 27);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9sQixDQUFnQiw4bUJBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _kaiVideoSwiper = _interopRequireDefault(__webpack_require__(/*! @/components/kai-video-swiper/kai-video-swiper.nvue */ 5));\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/common/api.js */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { kaiVideoSwiper: _kaiVideoSwiper.default }, data: function data() {return { dataList: [] };}, onLoad: function onLoad() {this.addData();this.$refs.swiper.init(dataList); //初始化视频列表\n  }, methods: { addData: function addData() {var _this = this;(0, _api.default)().then(function (res) {\n        __f__(\"log\", res, \" at pages/index/index.vue:35\");\n        _this.dataList = res.data.data;\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 28)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJrYWlWaWRlb1N3aXBlciIsImRhdGEiLCJkYXRhTGlzdCIsIm9uTG9hZCIsImFkZERhdGEiLCIkcmVmcyIsInN3aXBlciIsImluaXQiLCJtZXRob2RzIiwidGhlbiIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBLGtGLDhGQWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFJZSxFQUNkQSxVQUFVLEVBQUUsRUFDWEMsY0FBYyxFQUFkQSx1QkFEVyxFQURFLEVBSWRDLElBSmMsa0JBSVAsQ0FDTixPQUFPLEVBQ05DLFFBQVEsRUFBRSxFQURKLEVBQVAsQ0FHQSxDQVJhLEVBU2RDLE1BVGMsb0JBU0wsQ0FDUixLQUFLQyxPQUFMLEdBQ0EsS0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxJQUFsQixDQUF1QkwsUUFBdkIsRUFGUSxDQUV5QjtBQUNqQyxHQVphLEVBYWRNLE9BQU8sRUFBRSxFQUNSSixPQURRLHFCQUNDLGtCQUNSLG9CQUFhSyxJQUFiLENBQWtCLFVBQUFDLEdBQUcsRUFBRztBQUN2QixxQkFBWUEsR0FBWjtBQUNBLGFBQUksQ0FBQ1IsUUFBTCxHQUFnQlEsR0FBRyxDQUFDVCxJQUFKLENBQVNBLElBQXpCO0FBQ0EsT0FIRDtBQUlBLEtBTk8sRUFiSyxFIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQga2FpVmlkZW9Td2lwZXIgZnJvbSAnQC9jb21wb25lbnRzL2thaS12aWRlby1zd2lwZXIva2FpLXZpZGVvLXN3aXBlci5udnVlJ1xuaW1wb3J0IHJhbmRvbUxpc3QgZnJvbSAnQC9jb21tb24vYXBpLmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7XG5cdFx0a2FpVmlkZW9Td2lwZXJcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YUxpc3Q6IFtdXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0dGhpcy5hZGREYXRhKClcblx0XHR0aGlzLiRyZWZzLnN3aXBlci5pbml0KGRhdGFMaXN0KSAvL+WIneWni+WMluinhumikeWIl+ihqFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YWRkRGF0YSgpe1xuXHRcdFx0cmFuZG9tTGlzdCgpLnRoZW4ocmVzID0+e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdHRoaXMuZGF0YUxpc3QgPSByZXMuZGF0YS5kYXRhXG5cdFx0XHR9KVxuXHRcdH0sXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 29 */
/*!*************************************!*\
  !*** D:/CCLqr/douyin/common/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.randomList = randomList;var _config = __webpack_require__(/*! ./config.js */ 30);\n\n\n// import 'weapp-cookie'\nvar time = Date.now();\n\n\n\nfunction randomList() {\n  return uni.request({\n    url: \"\".concat(_config.baseUrl, \"/randomList\"),\n    withCredentials: true,\n    method: 'GET' });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2FwaS5qcyJdLCJuYW1lcyI6WyJ0aW1lIiwiRGF0ZSIsIm5vdyIsInJhbmRvbUxpc3QiLCJ1bmkiLCJyZXF1ZXN0IiwidXJsIiwiYmFzZVVybCIsIndpdGhDcmVkZW50aWFscyIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6IjhGQUFBOzs7QUFHQTtBQUNBLElBQUlBLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVg7Ozs7QUFJTyxTQUFTQyxVQUFULEdBQXNCO0FBQzVCLFNBQU9DLEdBQUcsQ0FBQ0MsT0FBSixDQUFZO0FBQ2xCQyxPQUFHLFlBQUtDLGVBQUwsZ0JBRGU7QUFFbEJDLG1CQUFlLEVBQUUsSUFGQztBQUdsQkMsVUFBTSxFQUFFLEtBSFUsRUFBWixDQUFQOztBQUtBIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRiYXNlVXJsXHJcbn0gZnJvbSAnLi9jb25maWcuanMnO1xyXG4vLyBpbXBvcnQgJ3dlYXBwLWNvb2tpZSdcclxubGV0IHRpbWUgPSBEYXRlLm5vdygpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21MaXN0KCkge1xyXG5cdHJldHVybiB1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGAke2Jhc2VVcmx9L3JhbmRvbUxpc3RgLFxyXG5cdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG5cdFx0bWV0aG9kOiAnR0VUJ1xyXG5cdH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!****************************************!*\
  !*** D:/CCLqr/douyin/common/config.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.baseUrl = void 0; // export const baseUrl = 'http://localhost:3000';\n// tencent Cloud\nvar baseUrl = 'http://localhost:8201/douyin';exports.baseUrl = baseUrl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQTtBQUNPLElBQU1BLE9BQU8sR0FBRyw4QkFBaEIsQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbi8vIHRlbmNlbnQgQ2xvdWRcclxuZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MjAxL2RvdXlpbic7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*******************************!*\
  !*** D:/CCLqr/douyin/App.vue ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdUs7QUFDdkssZ0JBQWdCLHVMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!********************************************************!*\
  !*** D:/CCLqr/douyin/App.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 33);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/CCLqr/douyin/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 28)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);
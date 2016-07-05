"/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\texports: {},\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false\n/******/ \t\t};\n\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n\n\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t'use strict';\n\n\tvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n\tvar _react = __webpack_require__(1);\n\n\tvar _react2 = _interopRequireDefault(_react);\n\n\tvar _reactNative = __webpack_require__(2);\n\n\tfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n\tfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\tfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\n\tfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n\t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sample React Native App\n\t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/facebook/react-native\n\t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * \n\t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\tvar Project = function (_Component) {\n\t  _inherits(Project, _Component);\n\n\t  function Project() {\n\t    _classCallCheck(this, Project);\n\n\t    return _possibleConstructorReturn(this, Object.getPrototypeOf(Project).apply(this, arguments));\n\t  }\n\n\t  _createClass(Project, [{\n\t    key: 'render',\n\t    value: function render() {\n\t      return _react2.default.createElement(\n\t        _reactNative.View,\n\t        { style: styles.container },\n\t        _react2.default.createElement(\n\t          _reactNative.Text,\n\t          { style: styles.welcome },\n\t          'Welcome to React Native!'\n\t        ),\n\t        _react2.default.createElement(\n\t          _reactNative.Text,\n\t          { style: styles.instructions },\n\t          'To get started, edit index.ios.js'\n\t        ),\n\t        _react2.default.createElement(\n\t          _reactNative.Text,\n\t          { style: styles.instructions },\n\t          'Press Cmd+R to reload,',\n\t          '\\n',\n\t          'Cmd+D or shake for dev menu'\n\t        )\n\t      );\n\t    }\n\t  }]);\n\n\t  return Project;\n\t}(_react.Component);\n\n\tvar styles = _reactNative.StyleSheet.create({\n\t  container: {\n\t    flex: 1,\n\t    justifyContent: 'center',\n\t    alignItems: 'center',\n\t    backgroundColor: '#F5FCFF'\n\t  },\n\t  welcome: {\n\t    fontSize: 20,\n\t    textAlign: 'center',\n\t    margin: 10\n\t  },\n\t  instructions: {\n\t    textAlign: 'center',\n\t    color: '#333333',\n\t    marginBottom: 5\n\t  }\n\t});\n\n\t_reactNative.AppRegistry.registerComponent('App', function () {\n\t  return Project;\n\t});\n\n/***/ },\n/* 1 */\n/***/ function(module, exports) {\n\n\tmodule.exports = React;\n\n/***/ },\n/* 2 */\n/***/ function(module, exports) {\n\n\tmodule.exports = ReactNative;\n\n/***/ }\n/******/ ]);"
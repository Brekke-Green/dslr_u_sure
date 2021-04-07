/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


document.addEventListener("DOMContentLoaded", function () {
  var apertureSlider = document.getElementById("Aperture");
  var apertureRadius = apertureSlider.value;

  apertureSlider.oninput = function () {
    apertureRadius = this.value;
  };

  var Aperture = /*#__PURE__*/function () {
    function Aperture() {
      _classCallCheck(this, Aperture);

      this.x = 100;
      this.y = 300;
      this.radius = apertureRadius;
      this.color = 'black';
    }

    _createClass(Aperture, [{
      key: "drawAperture",
      value: function drawAperture(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }, {
      key: "update",
      value: function update(ctx) {
        this.radius = apertureRadius;
        this.drawAperture(ctx);
      }
    }]);

    return Aperture;
  }();

  var Outline = /*#__PURE__*/function () {
    function Outline() {
      _classCallCheck(this, Outline);

      this.x = 100;
      this.y = 300;
      this.lensRadius = 70;
      this.color = 'slategray';
    }

    _createClass(Outline, [{
      key: "drawLens",
      value: function drawLens(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.lensRadius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }, {
      key: "drawBarrel",
      value: function drawBarrel(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.lensRadius + 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.moveTo(this.x - 50, this.y - 50);
        ctx.lineTo(this.x - 50, this.y - 200);
        ctx.lineTo(this.x + 250, this.y - 200);
        ctx.lineTo(this.x + 250, this.y + 50);
        ctx.lineTo(this.x + 50, this.y + 50);
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.moveTo(this.x - 53, this.y - 53);
        ctx.lineTo(this.x, this.y - 106);
        ctx.lineTo(this.x + 106, this.y);
        ctx.lineTo(this.x + 53, this.y + 53);
        ctx.lineTo(this.x - 53, this.y - 53);
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + 53, this.y - 53, 75, 1 / 4 * Math.PI, 5 / 4 * Math.PI, true);
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fill();
      }
    }, {
      key: "drawOutline",
      value: function drawOutline(ctx) {
        this.drawBarrel(ctx);
        this.drawLens(ctx);
      }
    }]);

    return Outline;
  }();

  var CameraCanvasDisplay = /*#__PURE__*/function () {
    function CameraCanvasDisplay() {
      _classCallCheck(this, CameraCanvasDisplay);

      this.canvas = document.getElementById("camera-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.Aperture = new Aperture();
      this.animate = this.animate.bind(this);
      this.Outline = new Outline();
    }

    _createClass(CameraCanvasDisplay, [{
      key: "animate",
      value: function animate() {
        debugger;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.Outline.drawOutline(this.ctx);
        this.Aperture.update(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return CameraCanvasDisplay;
  }();

  var cameraCanvasDisplay = new CameraCanvasDisplay();
  debugger;
  cameraCanvasDisplay.animate();
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJBcGVydHVyZSIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0FwZXJ0dXJlIiwiT3V0bGluZSIsImxlbnNSYWRpdXMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3QmFycmVsIiwiZHJhd0xlbnMiLCJDYW1lcmFDYW52YXNEaXNwbGF5IiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImJpbmQiLCJjbGVhclJlY3QiLCJkcmF3T3V0bGluZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbWVyYUNhbnZhc0Rpc3BsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUtMLE9BQU4sQ0FBckI7QUFDSDtBQXRHMkM7O0FBQUE7QUFBQTs7QUF5R2hELE1BQUlNLG1CQUFtQixHQUFHLElBQUlYLG1CQUFKLEVBQTFCO0FBQ0E7QUFDQVcscUJBQW1CLENBQUNOLE9BQXBCO0FBQ0gsQ0E1R0QsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGxldCBhcGVydHVyZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBlcnR1cmVcIik7XG4gICAgbGV0IGFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVTbGlkZXIudmFsdWU7XG5cbiAgICBhcGVydHVyZVNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGFwZXJ0dXJlUmFkaXVzID0gdGhpcy52YWx1ZTtcbiAgICB9O1xuXG4gICAgY2xhc3MgQXBlcnR1cmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDMwMDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdBcGVydHVyZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5kcmF3QXBlcnR1cmUoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIE91dGxpbmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDMwMDtcbiAgICAgICAgICAgIHRoaXMubGVuc1JhZGl1cyA9IDcwO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9ICdzbGF0ZWdyYXknO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0xlbnMoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdCYXJyZWwoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMrNSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC01MCwgdGhpcy55LTUwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTUwLCB0aGlzLnktMjAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzI1MCwgdGhpcy55LTIwMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyNTAsIHRoaXMueSs1MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCs1MCwgdGhpcy55KzUwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC01MywgdGhpcy55LTUzKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnktMTA2KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzEwNiwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzUzLCB0aGlzLnkrNTMpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtNTMsIHRoaXMueS01Myk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngrNTMsIHRoaXMueS01MywgNzUsICgxLzQpICogTWF0aC5QSSwgKDUvNCkqTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdPdXRsaW5lKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3QmFycmVsKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdMZW5zKGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBDYW1lcmFDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtZXJhLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuQXBlcnR1cmUgPSBuZXcgQXBlcnR1cmU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5BcGVydHVyZS51cGRhdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IGNhbWVyYUNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhQ2FudmFzRGlzcGxheTtcbiAgICBkZWJ1Z2dlclxuICAgIGNhbWVyYUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
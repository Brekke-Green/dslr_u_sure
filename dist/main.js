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

  var shutterSlider = document.getElementById("Shutter-Speed");
  var shutterRadius = shutterSlider.value;

  shutterSlider.oninput = function () {
    shutterRadius = this.value;
  };

  var Aperture = /*#__PURE__*/function () {
    function Aperture() {
      _classCallCheck(this, Aperture);

      this.x = 150;
      this.y = 250;
      this.radius = apertureRadius;
      this.color = "#24311B";
    }

    _createClass(Aperture, [{
      key: "drawAperture",
      value: function drawAperture(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.strokeStyle = "#A2A56E";
        ctx.stroke();
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

      this.x = 150;
      this.y = 250;
      this.lensRadius = 70;
      this.color = '#0F1211';
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
        ctx.moveTo(this.x - 80, this.y + 10);
        ctx.lineTo(this.x - 80, this.y - 180);
        ctx.lineTo(this.x + 205, this.y - 170);
        ctx.lineTo(this.x + 205, this.y + 30);
        ctx.lineTo(this.x - 80, this.y + 10);
        ctx.lineTo(this.x - 80, this.y - 180);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#D6D6D4";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 80, this.y - 180);
        ctx.lineTo(this.x - 50, this.y - 190);
        ctx.lineTo(this.x + 235, this.y - 180);
        ctx.lineTo(this.x + 205, this.y - 170);
        ctx.lineTo(this.x - 80, this.y - 180);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#ADABA7";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x + 235, this.y - 180);
        ctx.lineTo(this.x + 235, this.y + 20);
        ctx.lineTo(this.x + 205, this.y + 30);
        ctx.lineTo(this.x + 205, this.y - 170);
        ctx.lineTo(this.x + 235, this.y - 180);
        ctx.lineTo(this.x + 235, this.y + 20);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#908F90";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 53, this.y - 53);
        ctx.lineTo(this.x, this.y - 106);
        ctx.lineTo(this.x + 106, this.y);
        ctx.lineTo(this.x + 53, this.y + 53);
        ctx.lineTo(this.x - 53, this.y - 53);
        ctx.strokeStyle = "#1F2021";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#1F2021";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.lensRadius + 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#4A4A4A";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + 53, this.y - 53, 75, 1 / 4 * Math.PI, 5 / 4 * Math.PI, true);
        ctx.strokeStyle = "darkslategray";
        ctx.stroke();
        ctx.fillStyle = "#1F2021";
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
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.Outline.drawOutline(this.ctx);
        this.Aperture.update(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return CameraCanvasDisplay;
  }();

  var cameraCanvasDisplay = new CameraCanvasDisplay();
  cameraCanvasDisplay.animate();

  var Plane = /*#__PURE__*/function () {
    function Plane() {
      _classCallCheck(this, Plane);

      this.x = 240;
      this.y = 320;
      this.radius = 80;
    }

    _createClass(Plane, [{
      key: "drawFuselage",
      value: function drawFuselage(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius - 20, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#091017";
        ctx.fill();
      }
    }, {
      key: "drawPropeller",
      value: function drawPropeller(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x - 160, this.y - 20);
        ctx.lineTo(this.x - 160, this.y + 20);
        ctx.lineTo(this.x + 160, this.y + 20);
        ctx.lineTo(this.x + 160, this.y - 20);
        ctx.lineTo(this.x - 160, this.y - 20);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "darkslategray";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 160, this.y - 20);
        ctx.lineTo(this.x - 160, this.y + 20);
        ctx.lineTo(this.x - 145, this.y + 20);
        ctx.lineTo(this.x - 145, this.y - 20);
        ctx.lineTo(this.x - 160, this.y - 20);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x + 160, this.y - 20);
        ctx.lineTo(this.x + 160, this.y + 20);
        ctx.lineTo(this.x + 145, this.y + 20);
        ctx.lineTo(this.x + 145, this.y - 20);
        ctx.lineTo(this.x + 160, this.y - 20);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
      }
    }, {
      key: "rotateProp",
      value: function rotateProp(ctx) {
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 12);
        ctx.translate(-this.x, -this.y);
        this.drawPropeller(ctx);
      }
    }]);

    return Plane;
  }();

  var PlaneCanvasDisplay = /*#__PURE__*/function () {
    function PlaneCanvasDisplay() {
      _classCallCheck(this, PlaneCanvasDisplay);

      this.canvas = document.getElementById("plane-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.Plane = new Plane();
      this.animate = this.animate.bind(this); // this.Outline = new Outline;
    }

    _createClass(PlaneCanvasDisplay, [{
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height); // this.drawGrass(this.ctx);
        // this.drawSky(this.ctx);
        // this.Outline.drawOutline(this.ctx);

        this.Plane.drawFuselage(this.ctx); // this.Plane.rotateProp(this.ctx);
        // requestAnimationFrame(this.animate);
      }
    }]);

    return PlaneCanvasDisplay;
  }();

  var PropellerCanvasDisplay = /*#__PURE__*/function () {
    function PropellerCanvasDisplay() {
      _classCallCheck(this, PropellerCanvasDisplay);

      this.canvas = document.getElementById("propeller-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.Plane = new Plane();
      this.animate = this.animate.bind(this); // this.Outline = new Outline;
    }

    _createClass(PropellerCanvasDisplay, [{
      key: "animate",
      value: function animate() {
        // this.ctx.fillstyle = "rgba(200,200,200, 0.5)"
        this.ctx.clearRect(0, 0, this.width, this.height); // this.drawGrass(this.ctx);
        // this.drawSky(this.ctx);
        // this.Outline.drawOutline(this.ctx);
        // this.Plane.drawFuselage(this.ctx);
        // this.Plane.drawPropeller(this.ctx);

        this.Plane.rotateProp(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return PropellerCanvasDisplay;
  }();

  var LiveCanvasDisplay = /*#__PURE__*/function () {
    function LiveCanvasDisplay() {
      _classCallCheck(this, LiveCanvasDisplay);

      this.canvas = document.getElementById("background-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.apertureRadius = apertureRadius;
      this.animate = this.animate.bind(this); // this.Outline = new Outline;
    }

    _createClass(LiveCanvasDisplay, [{
      key: "drawGrass",
      value: function drawGrass(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.width, this.height);
        ctx.lineTo(this.width, this.height - 180);
        ctx.lineTo(this.width - this.width, this.height - 180);
        ctx.lineTo(this.width - this.width, this.height);
        ctx.lineTo(this.width, this.height);
        ctx.strokeStyle = "darkgreen";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "green";
        ctx.fill();
      }
    }, {
      key: "drawSky",
      value: function drawSky(ctx) {
        var x = 240;
        var y = 100;
        ctx.beginPath();
        ctx.moveTo(this.width, this.height - 180);
        ctx.lineTo(this.width, this.height - this.height);
        ctx.lineTo(this.width - this.width, this.height - this.height);
        ctx.lineTo(this.width - this.width, this.height - 180);
        ctx.lineTo(this.width, this.height - 180);
        ctx.strokeStyle = "lightskyblue";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "deepskyblue";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
        ctx.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
        ctx.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
        ctx.moveTo(x + 200, y + 60);
        ctx.lineTo(x, y + 60);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }, {
      key: "update",
      value: function update(ctx) {
        this.apertureRadius = "".concat(apertureRadius / 25, "px");
        ctx.filter = "blur(".concat(this.apertureRadius, ")");
        this.drawSky(ctx);
        this.drawGrass(ctx);
      }
    }, {
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height); // this.drawGrass(this.ctx);
        // this.drawSky(this.ctx);

        this.update(this.ctx); // this.Outline.drawOutline(this.ctx);
        // this.Plane.drawFuselage(this.ctx);
        // this.Plane.rotateProp(this.ctx);

        requestAnimationFrame(this.animate);
      }
    }]);

    return LiveCanvasDisplay;
  }();

  var liveCanvasDisplay = new LiveCanvasDisplay();
  liveCanvasDisplay.animate();
  var planeCanvasDisplay = new PlaneCanvasDisplay();
  planeCanvasDisplay.animate();
  var propellerCanvasDisplay = new PropellerCanvasDisplay();
  propellerCanvasDisplay.animate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzaHV0dGVyU2xpZGVyIiwic2h1dHRlclJhZGl1cyIsIkFwZXJ0dXJlIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRyYXdBcGVydHVyZSIsIk91dGxpbmUiLCJsZW5zUmFkaXVzIiwibW92ZVRvIiwibGluZVRvIiwiZHJhd0JhcnJlbCIsImRyYXdMZW5zIiwiQ2FtZXJhQ2FudmFzRGlzcGxheSIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGUiLCJiaW5kIiwiY2xlYXJSZWN0IiwiZHJhd091dGxpbmUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW1lcmFDYW52YXNEaXNwbGF5IiwiUGxhbmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3UHJvcGVsbGVyIiwiUGxhbmVDYW52YXNEaXNwbGF5IiwiZHJhd0Z1c2VsYWdlIiwiUHJvcGVsbGVyQ2FudmFzRGlzcGxheSIsInJvdGF0ZVByb3AiLCJMaXZlQ2FudmFzRGlzcGxheSIsImZpbHRlciIsImRyYXdTa3kiLCJkcmF3R3Jhc3MiLCJsaXZlQ2FudmFzRGlzcGxheSIsInBsYW5lQ2FudmFzRGlzcGxheSIsInByb3BlbGxlckNhbnZhc0Rpc3BsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QjtBQUNILENBNVZELEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBsZXQgYXBlcnR1cmVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwZXJ0dXJlXCIpO1xuICAgIGxldCBhcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlU2xpZGVyLnZhbHVlO1xuXG4gICAgYXBlcnR1cmVTbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcGVydHVyZVJhZGl1cyA9IHRoaXMudmFsdWU7XG4gICAgfTtcblxuICAgIGxldCBzaHV0dGVyU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaHV0dGVyLVNwZWVkXCIpO1xuICAgIGxldCBzaHV0dGVyUmFkaXVzID0gc2h1dHRlclNsaWRlci52YWx1ZTtcblxuICAgIHNodXR0ZXJTbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzaHV0dGVyUmFkaXVzID0gdGhpcy52YWx1ZTtcbiAgICB9O1xuXG4gICAgY2xhc3MgQXBlcnR1cmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCIjMjQzMTFCXCI7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3QXBlcnR1cmUoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjQTJBNTZFXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5kcmF3QXBlcnR1cmUoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIE91dGxpbmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgICAgIHRoaXMubGVuc1JhZGl1cyA9IDcwO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9ICcjMEYxMjExJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdMZW5zKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5sZW5zUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3QmFycmVsKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtODAsIHRoaXMueSsxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMDUsIHRoaXMueS0xNzApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjA1LCB0aGlzLnkrMzApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueSsxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRDZENkQ0XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC01MCwgdGhpcy55LTE5MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjA1LCB0aGlzLnktMTcwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNBREFCQTdcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMDUsIHRoaXMueSszMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMDUsIHRoaXMueS0xNzApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDhGOTBcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTUzLCB0aGlzLnktNTMpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueS0xMDYpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTA2LCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrNTMsIHRoaXMueSs1Myk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC01MywgdGhpcy55LTUzKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzFGMjAyMVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUYyMDIxXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMrNSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzRBNEE0QVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngrNTMsIHRoaXMueS01MywgNzUsICgxLzQpICogTWF0aC5QSSwgKDUvNCkqTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxRjIwMjFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3T3V0bGluZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0JhcnJlbChjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3TGVucyhjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgQ2FtZXJhQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbWVyYS1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLkFwZXJ0dXJlID0gbmV3IEFwZXJ0dXJlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5BcGVydHVyZS51cGRhdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IGNhbWVyYUNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhQ2FudmFzRGlzcGxheTtcbiAgICBjYW1lcmFDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcblxuICAgIGNsYXNzIFBsYW5lICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMjQwO1xuICAgICAgICAgICAgdGhpcy55ID0gMzIwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSA4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdGdXNlbGFnZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLTIwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDkxMDE3XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1Byb3BlbGxlcihjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTQ1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTQ1LCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54KzE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE0NSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE0NSwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAyMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm90YXRlUHJvcChjdHgpIHtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LnJvdGF0ZShNYXRoLlBJIC8gMTIpO1xuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1Byb3BlbGxlcihjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUGxhbmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmUtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QbGFuZSA9IG5ldyBQbGFuZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUHJvcGVsbGVyQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3BlbGxlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlBsYW5lID0gbmV3IFBsYW5lO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5maWxsc3R5bGUgPSBcInJnYmEoMjAwLDIwMCwyMDAsIDAuNSlcIlxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5kcmF3UHJvcGVsbGVyKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIExpdmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0dyYXNzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya2dyZWVuXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NreShjdHgpIHtcbiAgICAgICAgICAgIGxldCB4ID0gMjQwO1xuICAgICAgICAgICAgbGV0IHkgPSAxMDA7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LXRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJsaWdodHNreWJsdWVcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGVlcHNreWJsdWVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCwgeSwgNjAsIE1hdGguUEkgKiAwLjUsIE1hdGguUEkgKiAxLjUpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgNzAsIHkgLSA2MCwgNzAsIE1hdGguUEkgKiAxLCBNYXRoLlBJICogMS44NSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyAxNTIsIHkgLSA0NSwgNTAsIE1hdGguUEkgKiAxLjM3LCBNYXRoLlBJICogMS45MSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyAyMDAsIHksIDYwLCBNYXRoLlBJICogMS41LCBNYXRoLlBJICogMC41KTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIDIwMCwgeSArIDYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIDYwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBgJHthcGVydHVyZVJhZGl1cyAvIDI1fXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuYXBlcnR1cmVSYWRpdXN9KWA7XG4gICAgICAgICAgICB0aGlzLmRyYXdTa3koY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXNzKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3Jhc3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3U2t5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuY3R4KVxuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsaXZlQ2FudmFzRGlzcGxheSA9IG5ldyBMaXZlQ2FudmFzRGlzcGxheTtcbiAgICBsaXZlQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHBsYW5lQ2FudmFzRGlzcGxheSA9IG5ldyBQbGFuZUNhbnZhc0Rpc3BsYXk7XG4gICAgcGxhbmVDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgcHJvcGVsbGVyQ2FudmFzRGlzcGxheSA9IG5ldyBQcm9wZWxsZXJDYW52YXNEaXNwbGF5O1xuICAgIHByb3BlbGxlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
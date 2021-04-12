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
  var shutterValue = shutterSlider.value;

  shutterSlider.oninput = function () {
    shutterValue = this.value;
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
        ctx.lineTo(this.x + 215, this.y - 160);
        ctx.lineTo(this.x + 215, this.y + 40);
        ctx.lineTo(this.x - 80, this.y + 10);
        ctx.lineTo(this.x - 80, this.y - 180);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#D6D6D4";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 80, this.y - 180);
        ctx.lineTo(this.x - 60, this.y - 200);
        ctx.lineTo(this.x + 235, this.y - 180);
        ctx.lineTo(this.x + 215, this.y - 160);
        ctx.lineTo(this.x - 80, this.y - 180);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#ADABA7";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x + 235, this.y - 180);
        ctx.lineTo(this.x + 235, this.y + 20);
        ctx.lineTo(this.x + 215, this.y + 40);
        ctx.lineTo(this.x + 215, this.y - 160);
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
      this.alpha = shutterValue;
    }

    _createClass(Plane, [{
      key: "drawFuselage",
      value: function drawFuselage(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y - 68, this.radius - 40, 0, Math.PI * 2, true);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "silver";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.strokeStyle = "black";
        ctx.stroke();
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
      key: "drawWings",
      value: function drawWings(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + 5);
        ctx.lineTo(this.x + 240, this.y);
        ctx.lineTo(this.x + 240, this.y + 25);
        ctx.lineTo(this.x, this.y + 50);
        ctx.lineTo(this.x - 240, this.y + 25);
        ctx.lineTo(this.x - 240, this.y);
        ctx.lineTo(this.x, this.y + 5);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();
      }
    }, {
      key: "drawPropeller",
      value: function drawPropeller(ctx) {
        // horizontal
        ctx.beginPath();
        ctx.moveTo(this.x - 160, this.y - 20);
        ctx.lineTo(this.x - 160, this.y + 20);
        ctx.lineTo(this.x + 160, this.y + 20);
        ctx.lineTo(this.x + 160, this.y - 20);
        ctx.lineTo(this.x - 160, this.y - 20); // ctx.strokeStyle = "black"
        // ctx.stroke();

        ctx.closePath();
        ctx.fillStyle = "darkslategray";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 160, this.y - 20);
        ctx.lineTo(this.x - 160, this.y + 20);
        ctx.lineTo(this.x - 145, this.y + 20);
        ctx.lineTo(this.x - 145, this.y - 20);
        ctx.lineTo(this.x - 160, this.y - 20); // ctx.strokeStyle = "black"
        // ctx.stroke();

        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x + 160, this.y - 20);
        ctx.lineTo(this.x + 160, this.y + 20);
        ctx.lineTo(this.x + 145, this.y + 20);
        ctx.lineTo(this.x + 145, this.y - 20);
        ctx.lineTo(this.x + 160, this.y - 20); // ctx.strokeStyle = "black"
        // ctx.stroke();

        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill(); // vertical

        ctx.beginPath();
        ctx.moveTo(this.x - 20, this.y - 160);
        ctx.lineTo(this.x + 20, this.y - 160);
        ctx.lineTo(this.x + 20, this.y + 160);
        ctx.lineTo(this.x - 20, this.y + 160);
        ctx.lineTo(this.x - 20, this.y - 160); // ctx.strokeStyle = "black"
        // ctx.stroke();

        ctx.closePath();
        ctx.fillStyle = "darkslategray";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 20, this.y - 160);
        ctx.lineTo(this.x + 20, this.y - 160);
        ctx.lineTo(this.x + 20, this.y - 145);
        ctx.lineTo(this.x - 20, this.y - 145);
        ctx.lineTo(this.x - 20, this.y - 160); // ctx.strokeStyle = "black"
        // ctx.stroke();

        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x - 20, this.y + 160);
        ctx.lineTo(this.x + 20, this.y + 160);
        ctx.lineTo(this.x + 20, this.y + 145);
        ctx.lineTo(this.x - 20, this.y + 145);
        ctx.lineTo(this.x - 20, this.y + 160); // ctx.strokeStyle = "black"
        // ctx.stroke();

        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill(); // hub

        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "yellow";
        ctx.fill();
      }
    }, {
      key: "rotateProp",
      value: function rotateProp(ctx) {
        // ctx.clearRect(0,0,this.width,this.height);
        ctx.fillStyle = "rgba(255, 255, 0, 0.1)";
        ctx.fillRect(this.x - 160, this.y, 15, 40);
        this.shutterValue = shutterValue;
        this.shutterSpeed = "".concat(12 / this.shutterValue, "px");
        ctx.filter = "blur(".concat(this.shutterSpeed, ")");
        this.drawPropeller(ctx);
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / this.shutterValue);
        ctx.translate(-this.x, -this.y); // ctx.restore();
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

        this.Plane.drawWings(this.ctx);
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
      this.apertureRadius = apertureRadius;
      this.animate = this.animate.bind(this);
    }

    _createClass(PropellerCanvasDisplay, [{
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height); // this.ctx.fillStyle = "rgba(255, 255, 0, 0.1)"
        // this.ctx.fillRect(this.Plane.x-160, this.Plane.y, 15, 40);
        // this.drawGrass(this.ctx);
        // this.drawSky(this.ctx);
        // this.Outline.drawOutline(this.ctx);
        // this.Plane.drawFuselage(this.ctx);
        // this.Plane.drawPropeller(this.ctx);
        // ctx.save();

        this.Plane.rotateProp(this.ctx); // ctx.restore();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzaHV0dGVyU2xpZGVyIiwic2h1dHRlclZhbHVlIiwiQXBlcnR1cmUiLCJ4IiwieSIsInJhZGl1cyIsImNvbG9yIiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0FwZXJ0dXJlIiwiT3V0bGluZSIsImxlbnNSYWRpdXMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3QmFycmVsIiwiZHJhd0xlbnMiLCJDYW1lcmFDYW52YXNEaXNwbGF5IiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImJpbmQiLCJjbGVhclJlY3QiLCJkcmF3T3V0bGluZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbWVyYUNhbnZhc0Rpc3BsYXkiLCJQbGFuZSIsImFscGhhIiwiZmlsbFJlY3QiLCJzaHV0dGVyU3BlZWQiLCJmaWx0ZXIiLCJkcmF3UHJvcGVsbGVyIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUGxhbmVDYW52YXNEaXNwbGF5IiwiZHJhd1dpbmdzIiwiZHJhd0Z1c2VsYWdlIiwiUHJvcGVsbGVyQ2FudmFzRGlzcGxheSIsInJvdGF0ZVByb3AiLCJMaXZlQ2FudmFzRGlzcGxheSIsImRyYXdTa3kiLCJkcmF3R3Jhc3MiLCJsaXZlQ2FudmFzRGlzcGxheSIsInBsYW5lQ2FudmFzRGlzcGxheSIsInByb3BlbGxlckNhbnZhc0Rp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Q0g7QUFsYTJDOztBQUFBO0FBQUE7O0FBcWFoRCxNQUFJdUIsaUJBQWlCLEdBQUcsSUFBSUgsaUJBQUosRUFBeEI7QUFDQUcsbUJBQWlCLENBQUN2QixPQUFsQjtBQUNBLE1BQUl3QixrQkFBa0IsR0FBRyxJQUFJVCxrQkFBSixFQUF6QjtBQUNBUyxvQkFBa0IsQ0FBQ3hCLE9BQW5CO0FBQ0EsTUFBSXlCLHNCQUFzQixHQUFHLElBQUlQLHNCQUFKLEVBQTdCO0FBQ0FPLHdCQUFzQixDQUFDekIsT0FBdkI7QUFDSCxDQTNhRCxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGFwZXJ0dXJlU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcGVydHVyZVwiKTtcbiAgICBsZXQgYXBlcnR1cmVSYWRpdXMgPSBhcGVydHVyZVNsaWRlci52YWx1ZTtcblxuICAgIGFwZXJ0dXJlU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYXBlcnR1cmVSYWRpdXMgPSB0aGlzLnZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgc2h1dHRlclNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2h1dHRlci1TcGVlZFwiKTtcbiAgICBsZXQgc2h1dHRlclZhbHVlID0gc2h1dHRlclNsaWRlci52YWx1ZTtcblxuICAgIHNodXR0ZXJTbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzaHV0dGVyVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH07XG5cbiAgICBjbGFzcyBBcGVydHVyZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTUwO1xuICAgICAgICAgICAgdGhpcy55ID0gMjUwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcIiMyNDMxMUJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdBcGVydHVyZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNBMkE1NkVcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmRyYXdBcGVydHVyZShjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgT3V0bGluZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTUwO1xuICAgICAgICAgICAgdGhpcy55ID0gMjUwO1xuICAgICAgICAgICAgdGhpcy5sZW5zUmFkaXVzID0gNzA7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gJyMwRjEyMTEnO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0xlbnMoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdCYXJyZWwoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC04MCwgdGhpcy55KzEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueSs0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55KzEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNENkQ2RDRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTYwLCB0aGlzLnktMjAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0FEQUJBN1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55KzQwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzkwOEY5MFwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtNTMsIHRoaXMueS01Myk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55LTEwNik7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxMDYsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCs1MywgdGhpcy55KzUzKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTUzLCB0aGlzLnktNTMpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMUYyMDIxXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxRjIwMjFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMubGVuc1JhZGl1cys1LCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjNEE0QTRBXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCs1MywgdGhpcy55LTUzLCA3NSwgKDEvNCkgKiBNYXRoLlBJLCAoNS80KSpNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFGMjAyMVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdPdXRsaW5lKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3QmFycmVsKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdMZW5zKGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBDYW1lcmFDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtZXJhLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuQXBlcnR1cmUgPSBuZXcgQXBlcnR1cmU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLkFwZXJ0dXJlLnVwZGF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgY2FtZXJhQ2FudmFzRGlzcGxheSA9IG5ldyBDYW1lcmFDYW52YXNEaXNwbGF5O1xuICAgIGNhbWVyYUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuXG4gICAgY2xhc3MgUGxhbmUgIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAyNDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAzMjA7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IDgwO1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IHNodXR0ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdGdXNlbGFnZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnkgLSA2OCwgdGhpcy5yYWRpdXMtNDAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwic2lsdmVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLTIwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDkxMDE3XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1dpbmdzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSArIDUpXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCArIDI0MCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgMjQwLCB0aGlzLnkgKyAyNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55ICsgNTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggLSAyNDAsIHRoaXMueSArIDI1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54IC0gMjQwLCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSArIDUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3UHJvcGVsbGVyKGN0eCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE0NSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE0NSwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNDUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNDUsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gdmVydGljYWxcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJkYXJrc2xhdGVncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIGh1YlxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMjAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdGF0ZVByb3AoY3R4KSB7XG4gICAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDAsIDAuMSlcIlxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueC0xNjAsIHRoaXMueSwgMTUsIDQwKTtcbiAgICAgICAgICAgIHRoaXMuc2h1dHRlclZhbHVlID0gc2h1dHRlclZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaHV0dGVyU3BlZWQgPSBgJHsxMiAvIHRoaXMuc2h1dHRlclZhbHVlfXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuc2h1dHRlclNwZWVkfSlgO1xuICAgICAgICAgICAgdGhpcy5kcmF3UHJvcGVsbGVyKGN0eCk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoTWF0aC5QSSAvIHRoaXMuc2h1dHRlclZhbHVlKTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUGxhbmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmUtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QbGFuZSA9IG5ldyBQbGFuZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3V2luZ3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUHJvcGVsbGVyQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3BlbGxlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlBsYW5lID0gbmV3IFBsYW5lO1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMCwgMC4xKVwiXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLlBsYW5lLngtMTYwLCB0aGlzLlBsYW5lLnksIDE1LCA0MCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFzcyh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdTa3kodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd1Byb3BlbGxlcih0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIExpdmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0dyYXNzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya2dyZWVuXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NreShjdHgpIHtcbiAgICAgICAgICAgIGxldCB4ID0gMjQwO1xuICAgICAgICAgICAgbGV0IHkgPSAxMDA7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LXRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJsaWdodHNreWJsdWVcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGVlcHNreWJsdWVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCwgeSwgNjAsIE1hdGguUEkgKiAwLjUsIE1hdGguUEkgKiAxLjUpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgNzAsIHkgLSA2MCwgNzAsIE1hdGguUEkgKiAxLCBNYXRoLlBJICogMS44NSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyAxNTIsIHkgLSA0NSwgNTAsIE1hdGguUEkgKiAxLjM3LCBNYXRoLlBJICogMS45MSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyAyMDAsIHksIDYwLCBNYXRoLlBJICogMS41LCBNYXRoLlBJICogMC41KTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIDIwMCwgeSArIDYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIDYwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBgJHthcGVydHVyZVJhZGl1cyAvIDI1fXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuYXBlcnR1cmVSYWRpdXN9KWA7XG4gICAgICAgICAgICB0aGlzLmRyYXdTa3koY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXNzKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3Jhc3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3U2t5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuY3R4KVxuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsaXZlQ2FudmFzRGlzcGxheSA9IG5ldyBMaXZlQ2FudmFzRGlzcGxheTtcbiAgICBsaXZlQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHBsYW5lQ2FudmFzRGlzcGxheSA9IG5ldyBQbGFuZUNhbnZhc0Rpc3BsYXk7XG4gICAgcGxhbmVDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgcHJvcGVsbGVyQ2FudmFzRGlzcGxheSA9IG5ldyBQcm9wZWxsZXJDYW52YXNEaXNwbGF5O1xuICAgIHByb3BlbGxlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
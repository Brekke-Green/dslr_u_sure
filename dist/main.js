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
        this.shutterValue = shutterValue;
        debugger;
        this.drawPropeller(ctx);
        ctx.save();
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
      this.animate = this.animate.bind(this);
    }

    _createClass(PropellerCanvasDisplay, [{
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        this.ctx.fillRect(this.Plane.x - 160, this.Plane.y, 15, 40); // this.drawGrass(this.ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzaHV0dGVyU2xpZGVyIiwic2h1dHRlclZhbHVlIiwiQXBlcnR1cmUiLCJ4IiwieSIsInJhZGl1cyIsImNvbG9yIiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0FwZXJ0dXJlIiwiT3V0bGluZSIsImxlbnNSYWRpdXMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3QmFycmVsIiwiZHJhd0xlbnMiLCJDYW1lcmFDYW52YXNEaXNwbGF5IiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImJpbmQiLCJjbGVhclJlY3QiLCJkcmF3T3V0bGluZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbWVyYUNhbnZhc0Rpc3BsYXkiLCJQbGFuZSIsImFscGhhIiwiZHJhd1Byb3BlbGxlciIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQbGFuZUNhbnZhc0Rpc3BsYXkiLCJkcmF3V2luZ3MiLCJkcmF3RnVzZWxhZ2UiLCJQcm9wZWxsZXJDYW52YXNEaXNwbGF5IiwiZmlsbFJlY3QiLCJyb3RhdGVQcm9wIiwiTGl2ZUNhbnZhc0Rpc3BsYXkiLCJmaWx0ZXIiLCJkcmF3U2t5IiwiZHJhd0dyYXNzIiwibGl2ZUNhbnZhc0Rpc3BsYXkiLCJwbGFuZUNhbnZhc0Rpc3BsYXkiLCJwcm9wZWxsZXJDYW52YXNEaXNwbGF5Il0s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O0FBQ0FJLG1CQUFpQixDQUFDdkIsT0FBbEI7QUFDQSxNQUFJd0Isa0JBQWtCLEdBQUcsSUFBSVgsa0JBQUosRUFBekI7QUFDQVcsb0JBQWtCLENBQUN4QixPQUFuQjtBQUNBLE1BQUl5QixzQkFBc0IsR0FBRyxJQUFJVCxzQkFBSixFQUE3QjtBQUNBUyx3QkFBc0IsQ0FBQ3pCLE9BQXZCO0FBQ0gsQ0F6YUQsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGxldCBhcGVydHVyZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBlcnR1cmVcIik7XG4gICAgbGV0IGFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVTbGlkZXIudmFsdWU7XG5cbiAgICBhcGVydHVyZVNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGFwZXJ0dXJlUmFkaXVzID0gdGhpcy52YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHNodXR0ZXJTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNodXR0ZXItU3BlZWRcIik7XG4gICAgbGV0IHNodXR0ZXJWYWx1ZSA9IHNodXR0ZXJTbGlkZXIudmFsdWU7XG5cbiAgICBzaHV0dGVyU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2h1dHRlclZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9O1xuXG4gICAgY2xhc3MgQXBlcnR1cmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCIjMjQzMTFCXCI7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3QXBlcnR1cmUoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjQTJBNTZFXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5kcmF3QXBlcnR1cmUoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIE91dGxpbmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgICAgIHRoaXMubGVuc1JhZGl1cyA9IDcwO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9ICcjMEYxMjExJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdMZW5zKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5sZW5zUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3QmFycmVsKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtODAsIHRoaXMueSsxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnkrNDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueSsxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRDZENkQ0XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC02MCwgdGhpcy55LTIwMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNBREFCQTdcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueSs0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDhGOTBcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTUzLCB0aGlzLnktNTMpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueS0xMDYpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTA2LCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrNTMsIHRoaXMueSs1Myk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC01MywgdGhpcy55LTUzKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzFGMjAyMVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUYyMDIxXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMrNSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzRBNEE0QVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngrNTMsIHRoaXMueS01MywgNzUsICgxLzQpICogTWF0aC5QSSwgKDUvNCkqTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxRjIwMjFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3T3V0bGluZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0JhcnJlbChjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3TGVucyhjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgQ2FtZXJhQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbWVyYS1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLkFwZXJ0dXJlID0gbmV3IEFwZXJ0dXJlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5BcGVydHVyZS51cGRhdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IGNhbWVyYUNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhQ2FudmFzRGlzcGxheTtcbiAgICBjYW1lcmFDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcblxuICAgIGNsYXNzIFBsYW5lICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMjQwO1xuICAgICAgICAgICAgdGhpcy55ID0gMzIwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSA4MDtcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSBzaHV0dGVyVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3RnVzZWxhZ2UoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55IC0gNjgsIHRoaXMucmFkaXVzLTQwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInNpbHZlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cy0yMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzA5MTAxN1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdXaW5ncyhjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkgKyA1KVxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAyNDAsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCArIDI0MCwgdGhpcy55ICsgMjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSArIDUwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54IC0gMjQwLCB0aGlzLnkgKyAyNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCAtIDI0MCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkgKyA1KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1Byb3BlbGxlcihjdHgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJkYXJrc2xhdGVncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNDUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNDUsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngrMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTQ1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTQ1LCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIHZlcnRpY2FsXG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnkrMTQ1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnkrMTQ1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyBodWJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDIwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByb3RhdGVQcm9wKGN0eCkge1xuICAgICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnNodXR0ZXJWYWx1ZSA9IHNodXR0ZXJWYWx1ZTtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcm9wZWxsZXIoY3R4KTtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoTWF0aC5QSSAvIHRoaXMuc2h1dHRlclZhbHVlKTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUGxhbmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmUtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QbGFuZSA9IG5ldyBQbGFuZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3V2luZ3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUHJvcGVsbGVyQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3BlbGxlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlBsYW5lID0gbmV3IFBsYW5lO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSlcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5QbGFuZS54LTE2MCwgdGhpcy5QbGFuZS55LCAxNSwgNDApO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3Jhc3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3U2t5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdGdXNlbGFnZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdQcm9wZWxsZXIodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBMaXZlQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdHcmFzcyhjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImRhcmtncmVlblwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdTa3koY3R4KSB7XG4gICAgICAgICAgICBsZXQgeCA9IDI0MDtcbiAgICAgICAgICAgIGxldCB5ID0gMTAwO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LXRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC10aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwibGlnaHRza3libHVlXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRlZXBza3libHVlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDYwLCBNYXRoLlBJICogMC41LCBNYXRoLlBJICogMS41KTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCArIDcwLCB5IC0gNjAsIDcwLCBNYXRoLlBJICogMSwgTWF0aC5QSSAqIDEuODUpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgMTUyLCB5IC0gNDUsIDUwLCBNYXRoLlBJICogMS4zNywgTWF0aC5QSSAqIDEuOTEpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgMjAwLCB5LCA2MCwgTWF0aC5QSSAqIDEuNSwgTWF0aC5QSSAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHggKyAyMDAsIHkgKyA2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyA2MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYCR7YXBlcnR1cmVSYWRpdXMgLyAyNX1weGA7XG4gICAgICAgICAgICBjdHguZmlsdGVyID0gYGJsdXIoJHt0aGlzLmFwZXJ0dXJlUmFkaXVzfSlgO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2t5KGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFzcyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmN0eClcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdGdXNlbGFnZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLnJvdGF0ZVByb3AodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGl2ZUNhbnZhc0Rpc3BsYXkgPSBuZXcgTGl2ZUNhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBwbGFuZUNhbnZhc0Rpc3BsYXkgPSBuZXcgUGxhbmVDYW52YXNEaXNwbGF5O1xuICAgIHBsYW5lQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHByb3BlbGxlckNhbnZhc0Rpc3BsYXkgPSBuZXcgUHJvcGVsbGVyQ2FudmFzRGlzcGxheTtcbiAgICBwcm9wZWxsZXJDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbn0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
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
  var shutterNumber = 0;

  shutterSlider.oninput = function () {
    shutterValue = this.value;
    shutterNumber = this.value;
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

  var Shutter = /*#__PURE__*/function () {
    function Shutter() {
      _classCallCheck(this, Shutter);

      this.width = 470;
      this.height = 490;
      this.shutter = shutterValue;
      this.yTop = 350;
      this.yBottom = 350;
      this.yStart = 350;
      this.yEnd = 470;
      this.dY = 5;
      this.speed = 5;
      this.interval = 0;
      this.cycled = false;
    }

    _createClass(Shutter, [{
      key: "drawSensor",
      value: function drawSensor(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.width - 20, this.height - 20);
        ctx.lineTo(this.width - 20, this.height - 140);
        ctx.lineTo(this.width - 200, this.height - 140);
        ctx.lineTo(this.width - 200, this.height - 20);
        ctx.lineTo(this.width - 20, this.height - 20);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
      }
    }, {
      key: "drawTopCurtain",
      value: function drawTopCurtain(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.width - 20, this.height - 150);
        ctx.lineTo(this.width - 20, this.yTop);
        ctx.lineTo(this.width - 200, this.yTop);
        ctx.lineTo(this.width - 200, this.height - 150);
        ctx.lineTo(this.width - 20, this.height - 150);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }, {
      key: "drawBottomCurtain",
      value: function drawBottomCurtain(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.width - 20, this.height - 10);
        ctx.lineTo(this.width - 20, this.yBottom);
        ctx.lineTo(this.width - 200, this.yBottom);
        ctx.lineTo(this.width - 200, this.height - 10);
        ctx.lineTo(this.width - 20, this.height - 10);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }, {
      key: "update",
      value: function update(ctx) {
        this.dY = Math.floor(this.shutter / 3);

        if (this.cycled === false && this.yBottom < this.yEnd) {
          if (this.yBottom + this.dY > this.yEnd) {
            this.yBottom = this.yEnd;
          } else {
            this.yBottom += this.dY;
          }

          ;
        } else if (this.cycled === false && this.yBottom === this.yEnd) {
          if (this.yTop + this.dY > this.yEnd) {
            this.yTop = this.yEnd;
            this.cycled = true;
          } else {
            this.yTop += this.dY;
          }

          ;
        }

        if (this.cycled === true && this.yBottom > this.yStart) {
          if (this.yBottom - this.dY < this.yStart) {
            this.yBottom = this.yStart;
            this.yTop = this.yStart;
            this.cycled = false;
          } else {
            this.yBottom -= this.dY;
          }

          ;
        }

        if (this.yTop === this.yEnd && this.yBottom === this.yStart) {
          this.yTop = this.yStart;
          this.cycled = false;
        }

        this.drawSensor(ctx);
        this.drawTopCurtain(ctx);
        this.drawBottomCurtain(ctx);
      }
    }]);

    return Shutter;
  }();

  var CameraShutterCanvasDisplay = /*#__PURE__*/function () {
    function CameraShutterCanvasDisplay() {
      _classCallCheck(this, CameraShutterCanvasDisplay);

      this.canvas = document.getElementById("camera-shutter-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.Shutter = new Shutter();
      this.drawShutter();
      this.animate = this.animate.bind(this);
    }

    _createClass(CameraShutterCanvasDisplay, [{
      key: "drawShutter",
      value: function drawShutter() {
        this.Shutter.drawSensor(this.ctx);
        this.Shutter.drawTopCurtain(this.ctx);
        this.Shutter.drawBottomCurtain(this.ctx);
      }
    }, {
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height); // this.Shutter.drawSensor(this.ctx);
        // this.Shutter.drawTopCurtain(this.ctx);
        // this.Shutter.drawBottomCurtain(this.ctx);

        this.Shutter.shutter = shutterNumber;
        this.Shutter.update(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return CameraShutterCanvasDisplay;
  }();

  var cameraCanvasDisplay = new CameraCanvasDisplay();
  cameraCanvasDisplay.animate();
  var cameraShutterCanvasDisplay = new CameraShutterCanvasDisplay();
  cameraShutterCanvasDisplay.animate();

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
      }
    }, {
      key: "drawMountains",
      value: function drawMountains(ctx) {
        ctx.beginPath();
        ctx.moveTo(0, this.height - 180);
        ctx.lineTo(0, this.height - 260);
        ctx.lineTo(60, this.height - 320);
        ctx.lineTo(260, this.height - 180);
        ctx.lineTo(0, this.height - 180);
        ctx.strokeStyle = "darkgray";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "gray";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(60, this.height - 320);
        ctx.lineTo(20, this.height - 280);
        ctx.lineTo(40, this.height - 260);
        ctx.lineTo(60, this.height - 270);
        ctx.lineTo(100, this.height - 260);
        ctx.lineTo(120, this.height - 280);
        ctx.lineTo(60, this.height - 320);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }, {
      key: "update",
      value: function update(ctx) {
        this.apertureRadius = "".concat(apertureRadius / 25, "px");
        ctx.filter = "blur(".concat(this.apertureRadius, ")");
        this.drawSky(ctx);
        this.drawGrass(ctx);
        this.drawMountains(ctx);
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

  var LiveCloudCanvasDisplay = /*#__PURE__*/function () {
    function LiveCloudCanvasDisplay() {
      _classCallCheck(this, LiveCloudCanvasDisplay);

      this.canvas = document.getElementById("background-cloud-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.apertureRadius = apertureRadius;
      this.animate = this.animate.bind(this); // this.Outline = new Outline;
    }

    _createClass(LiveCloudCanvasDisplay, [{
      key: "drawCloud",
      value: function drawCloud(ctx) {
        var x = 240;
        var y = 100;
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
        this.apertureRadius = "".concat(apertureRadius / 50, "px");
        ctx.filter = "blur(".concat(this.apertureRadius, ")");
        this.drawCloud(ctx);
      }
    }, {
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.update(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return LiveCloudCanvasDisplay;
  }();

  var liveCanvasDisplay = new LiveCanvasDisplay();
  liveCanvasDisplay.animate();
  var liveCloudCanvasDisplay = new LiveCloudCanvasDisplay();
  liveCloudCanvasDisplay.animate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzaHV0dGVyU2xpZGVyIiwic2h1dHRlclZhbHVlIiwic2h1dHRlck51bWJlciIsIkFwZXJ0dXJlIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRyYXdBcGVydHVyZSIsIk91dGxpbmUiLCJsZW5zUmFkaXVzIiwibW92ZVRvIiwibGluZVRvIiwiZHJhd0JhcnJlbCIsImRyYXdMZW5zIiwiQ2FtZXJhQ2FudmFzRGlzcGxheSIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGUiLCJiaW5kIiwiY2xlYXJSZWN0IiwiZHJhd091dGxpbmUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJTaHV0dGVyIiwic2h1dHRlciIsInlUb3AiLCJ5Qm90dG9tIiwieVN0YXJ0IiwieUVuZCIsImRZIiwic3BlZWQiLCJpbnRlcnZhbCIsImN5Y2xlZCIsImZsb29yIiwiZHJhd1NlbnNvciIsImRyYXdUb3BDdXJ0YWluIiwiZHJhd0JvdHRvbUN1cnRhaW4iLCJDYW1lcmFTaHV0dGVyQ2FudmFzRGlzcGxheSIsImRyYXdTaHV0dGVyIiwiY2FtZXJhQ2FudmFzRGlzcGxheSIsImNhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5IiwiUGxhbmUiLCJhbHBoYSIsImZpbGxSZWN0Iiwic2h1dHRlclNwZWVkIiwiZmlsdGVyIiwiZHJhd1Byb3BlbGxlciIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBsYW5lQ2FudmFzRGlzcGxheSIsImRyYXdXaW5ncyIsImRyYXdGdXNlbGFnZSIsIlByb3BlbGxlckNhbnZhc0Rpc3BsYXkiLCJyb3RhdGVQcm9wIiwiTGl2ZUNhbnZhc0Rpc3BsYXkiLCJkcmF3U2t5IiwiZHJhd0dyYXNzIiwiZHJhd01vdW50YWlucyIsIkxpdmVDbG91ZENhbnZhc0Rpc3BsYXkiLCJkcmF3Q2xvdWQiLCJsaXZlQ2FudmFzRGlzcGxheSIsImxpdmVDbG91ZENhbnZhc0Rpc3BsYXkiLCJwbGFuZUNhbnZhc0Rpc3BsYXkiLCJwcm9wZWxsZXJDYW52YXNEaXNwbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUVoRCxNQUFJQyxjQUFjLEdB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S0ssTUFBTCxDQUFZLEtBQUsxQixHQUFqQjtBQUNBMkIsNkJBQXFCLENBQUMsS0FBS0wsT0FBTixDQUFyQjtBQUNIO0FBcmxCMkM7O0FBQUE7QUFBQTs7QUF3bEJoRCxNQUFJMkMsaUJBQWlCLEdBQUcsSUFBSU4saUJBQUosRUFBeEI7QUFDQU0sbUJBQWlCLENBQUMzQyxPQUFsQjtBQUNBLE1BQUk0QyxzQkFBc0IsR0FBRyxJQUFJSCxzQkFBSixFQUE3QjtBQUNBRyx3QkFBc0IsQ0FBQzVDLE9BQXZCO0FBQ0EsTUFBSTZDLGtCQUFrQixHQUFHLElBQUliLGtCQUFKLEVBQXpCO0FBQ0FhLG9CQUFrQixDQUFDN0MsT0FBbkI7QUFDQSxNQUFJOEMsc0JBQXNCLEdBQUcsSUFBSVgsc0JBQUosRUFBN0I7QUFDQVcsd0JBQXNCLENBQUM5QyxPQUF2QjtBQUNILENBaG1CRCxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGFwZXJ0dXJlU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcGVydHVyZVwiKTtcbiAgICBsZXQgYXBlcnR1cmVSYWRpdXMgPSBhcGVydHVyZVNsaWRlci52YWx1ZTtcblxuICAgIGFwZXJ0dXJlU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYXBlcnR1cmVSYWRpdXMgPSB0aGlzLnZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgc2h1dHRlclNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2h1dHRlci1TcGVlZFwiKTtcbiAgICBsZXQgc2h1dHRlclZhbHVlID0gc2h1dHRlclNsaWRlci52YWx1ZTtcbiAgICBsZXQgc2h1dHRlck51bWJlciA9IDA7XG5cbiAgICBzaHV0dGVyU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2h1dHRlclZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgc2h1dHRlck51bWJlciA9IHRoaXMudmFsdWU7XG4gICAgfTtcblxuICAgIGNsYXNzIEFwZXJ0dXJlIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxNTA7XG4gICAgICAgICAgICB0aGlzLnkgPSAyNTA7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwiIzI0MzExQlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0FwZXJ0dXJlKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI0EyQTU2RVwiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuZHJhd0FwZXJ0dXJlKGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBPdXRsaW5lIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxNTA7XG4gICAgICAgICAgICB0aGlzLnkgPSAyNTA7XG4gICAgICAgICAgICB0aGlzLmxlbnNSYWRpdXMgPSA3MDtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSAnIzBGMTIxMSc7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3TGVucyhjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMubGVuc1JhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0JhcnJlbChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTgwLCB0aGlzLnkrMTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55KzQwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnkrMTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0Q2RDZENFwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtODAsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtNjAsIHRoaXMueS0yMDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjQURBQkE3XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnkrNDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjOTA4RjkwXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC01MywgdGhpcy55LTUzKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnktMTA2KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzEwNiwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzUzLCB0aGlzLnkrNTMpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtNTMsIHRoaXMueS01Myk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMxRjIwMjFcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFGMjAyMVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5sZW5zUmFkaXVzKzUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM0QTRBNEFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54KzUzLCB0aGlzLnktNTMsIDc1LCAoMS80KSAqIE1hdGguUEksICg1LzQpKk1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJkYXJrc2xhdGVncmF5XCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUYyMDIxXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd091dGxpbmUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdCYXJyZWwoY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0xlbnMoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIENhbWVyYUNhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW1lcmEtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5BcGVydHVyZSA9IG5ldyBBcGVydHVyZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuQXBlcnR1cmUudXBkYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgU2h1dHRlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDcwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDQ5MDtcbiAgICAgICAgICAgIHRoaXMuc2h1dHRlciA9IHNodXR0ZXJWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMueVRvcCA9IDM1MDtcbiAgICAgICAgICAgIHRoaXMueUJvdHRvbSA9IDM1MDtcbiAgICAgICAgICAgIHRoaXMueVN0YXJ0ID0gMzUwO1xuICAgICAgICAgICAgdGhpcy55RW5kID0gNDcwO1xuICAgICAgICAgICAgdGhpcy5kWSA9IDU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAwO1xuICAgICAgICAgICAgdGhpcy5jeWNsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdTZW5zb3IoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMTQwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMuaGVpZ2h0LTE0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1RvcEN1cnRhaW4oY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTE1MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMueVRvcCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLnlUb3ApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy5oZWlnaHQtMTUwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMTUwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0JvdHRvbUN1cnRhaW4oY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMCwgdGhpcy55Qm90dG9tKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMueUJvdHRvbSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLmhlaWdodC0xMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTEwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5kWSA9IE1hdGguZmxvb3IodGhpcy5zaHV0dGVyIC8gMyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jeWNsZWQgPT09IGZhbHNlICYmIHRoaXMueUJvdHRvbSA8IHRoaXMueUVuZCkgeyBcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMueUJvdHRvbSArIHRoaXMuZFkpID4gdGhpcy55RW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueUJvdHRvbSA9IHRoaXMueUVuZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gKz0gdGhpcy5kWTtcbiAgICAgICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jeWNsZWQgPT09IGZhbHNlICYmIHRoaXMueUJvdHRvbSA9PT0gdGhpcy55RW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnlUb3AgKyB0aGlzLmRZKSA+IHRoaXMueUVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlUb3AgPSB0aGlzLnlFbmQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ljbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlUb3AgKz0gdGhpcy5kWTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3ljbGVkID09PSB0cnVlICYmIHRoaXMueUJvdHRvbSA+IHRoaXMueVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnlCb3R0b20gLSB0aGlzLmRZKSA8IHRoaXMueVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueUJvdHRvbSA9IHRoaXMueVN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlUb3AgPSB0aGlzLnlTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jeWNsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gLT0gdGhpcy5kWTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMueVRvcCA9PT0gdGhpcy55RW5kICYmIHRoaXMueUJvdHRvbSA9PT0gdGhpcy55U3RhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlUb3AgPSB0aGlzLnlTdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLmN5Y2xlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmF3U2Vuc29yKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdUb3BDdXJ0YWluKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdCb3R0b21DdXJ0YWluKGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBDYW1lcmFTaHV0dGVyQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbWVyYS1zaHV0dGVyLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlciA9IG5ldyBTaHV0dGVyO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2h1dHRlcigpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3U2h1dHRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci5kcmF3U2Vuc29yKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci5kcmF3VG9wQ3VydGFpbih0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIuZHJhd0JvdHRvbUN1cnRhaW4odGhpcy5jdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuU2h1dHRlci5kcmF3U2Vuc29yKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuU2h1dHRlci5kcmF3VG9wQ3VydGFpbih0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlNodXR0ZXIuZHJhd0JvdHRvbUN1cnRhaW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5TaHV0dGVyLnNodXR0ZXIgPSBzaHV0dGVyTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5TaHV0dGVyLnVwZGF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgY2FtZXJhQ2FudmFzRGlzcGxheSA9IG5ldyBDYW1lcmFDYW52YXNEaXNwbGF5O1xuICAgIGNhbWVyYUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBjYW1lcmFTaHV0dGVyQ2FudmFzRGlzcGxheSA9IG5ldyBDYW1lcmFTaHV0dGVyQ2FudmFzRGlzcGxheTtcbiAgICBjYW1lcmFTaHV0dGVyQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG5cbiAgICBjbGFzcyBQbGFuZSAge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDI0MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDMyMDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gODA7XG4gICAgICAgICAgICB0aGlzLmFscGhhID0gc2h1dHRlclZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0Z1c2VsYWdlKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSAtIDY4LCB0aGlzLnJhZGl1cy00MCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJzaWx2ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMtMjAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwOTEwMTdcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3V2luZ3MoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55ICsgNSlcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgMjQwLCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAyNDAsIHRoaXMueSArIDI1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkgKyA1MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCAtIDI0MCwgdGhpcy55ICsgMjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggLSAyNDAsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55ICsgNSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdQcm9wZWxsZXIoY3R4KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGhvcml6b250YWxcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTQ1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTQ1LCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54KzE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE0NSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE0NSwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbFxuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55KzE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55KzE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnktMTQ1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnktMTQ1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0yMCwgdGhpcy55KzE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55KzE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55KzE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55KzE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55KzE2MCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gaHViXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAyMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm90YXRlUHJvcChjdHgpIHtcbiAgICAgICAgICAgIC8vIGN0eC5jbGVhclJlY3QoMCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMCwgMC4xKVwiXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LTE2MCwgdGhpcy55LCAxNSwgNDApO1xuICAgICAgICAgICAgdGhpcy5zaHV0dGVyVmFsdWUgPSBzaHV0dGVyVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNodXR0ZXJTcGVlZCA9IGAkezEyIC8gdGhpcy5zaHV0dGVyVmFsdWV9cHhgO1xuICAgICAgICAgICAgY3R4LmZpbHRlciA9IGBibHVyKCR7dGhpcy5zaHV0dGVyU3BlZWR9KWA7XG4gICAgICAgICAgICB0aGlzLmRyYXdQcm9wZWxsZXIoY3R4KTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LnJvdGF0ZShNYXRoLlBJIC8gdGhpcy5zaHV0dGVyVmFsdWUpO1xuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgICAgICAgIC8vIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBQbGFuZUNhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZS1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlBsYW5lID0gbmV3IFBsYW5lO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3Jhc3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3U2t5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLlBsYW5lLmRyYXdXaW5ncyh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLlBsYW5lLmRyYXdGdXNlbGFnZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLnJvdGF0ZVByb3AodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBQcm9wZWxsZXJDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvcGVsbGVyLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuUGxhbmUgPSBuZXcgUGxhbmU7XG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAwLCAwLjEpXCJcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMuUGxhbmUueC0xNjAsIHRoaXMuUGxhbmUueSwgMTUsIDQwKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5kcmF3UHJvcGVsbGVyKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLlBsYW5lLnJvdGF0ZVByb3AodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgTGl2ZUNhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3R3Jhc3MoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JlZW5cIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3U2t5KGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC10aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImxpZ2h0c2t5Ymx1ZVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJkZWVwc2t5Ymx1ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdNb3VudGFpbnMoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDAsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMuaGVpZ2h0LTI2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCB0aGlzLmhlaWdodC0zMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygyNjAsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImRhcmtncmF5XCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oNjAsIHRoaXMuaGVpZ2h0LTMyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDIwLCB0aGlzLmhlaWdodC0yODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyg0MCwgdGhpcy5oZWlnaHQtMjYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oNjAsIHRoaXMuaGVpZ2h0LTI3MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDEwMCwgdGhpcy5oZWlnaHQtMjYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMTIwLCB0aGlzLmhlaWdodC0yODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyg2MCwgdGhpcy5oZWlnaHQtMzIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYCR7YXBlcnR1cmVSYWRpdXMgLyAyNX1weGA7XG4gICAgICAgICAgICBjdHguZmlsdGVyID0gYGJsdXIoJHt0aGlzLmFwZXJ0dXJlUmFkaXVzfSlgO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2t5KGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdHcmFzcyhjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3TW91bnRhaW5zKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3Jhc3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3U2t5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuY3R4KVxuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIExpdmVDbG91ZENhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWNsb3VkLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3Q2xvdWQoY3R4KSB7XG4gICAgICAgICAgICBsZXQgeCA9IDI0MDtcbiAgICAgICAgICAgIGxldCB5ID0gMTAwO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHgsIHksIDYwLCBNYXRoLlBJICogMC41LCBNYXRoLlBJICogMS41KTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCArIDcwLCB5IC0gNjAsIDcwLCBNYXRoLlBJICogMSwgTWF0aC5QSSAqIDEuODUpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgMTUyLCB5IC0gNDUsIDUwLCBNYXRoLlBJICogMS4zNywgTWF0aC5QSSAqIDEuOTEpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgMjAwLCB5LCA2MCwgTWF0aC5QSSAqIDEuNSwgTWF0aC5QSSAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHggKyAyMDAsIHkgKyA2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyA2MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYCR7YXBlcnR1cmVSYWRpdXMgLyA1MH1weGA7XG4gICAgICAgICAgICBjdHguZmlsdGVyID0gYGJsdXIoJHt0aGlzLmFwZXJ0dXJlUmFkaXVzfSlgO1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2xvdWQoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmN0eClcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGxpdmVDYW52YXNEaXNwbGF5ID0gbmV3IExpdmVDYW52YXNEaXNwbGF5O1xuICAgIGxpdmVDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgbGl2ZUNsb3VkQ2FudmFzRGlzcGxheSA9IG5ldyBMaXZlQ2xvdWRDYW52YXNEaXNwbGF5O1xuICAgIGxpdmVDbG91ZENhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBwbGFuZUNhbnZhc0Rpc3BsYXkgPSBuZXcgUGxhbmVDYW52YXNEaXNwbGF5O1xuICAgIHBsYW5lQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHByb3BlbGxlckNhbnZhc0Rpc3BsYXkgPSBuZXcgUHJvcGVsbGVyQ2FudmFzRGlzcGxheTtcbiAgICBwcm9wZWxsZXJDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbn0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
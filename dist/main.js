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
    cameraShutterCanvasDisplay.animate();
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
        this.dY = Math.floor(shutterValue / 6);

        if (this.cycled === false && this.yBottom < this.yEnd) {
          if (this.yBottom + this.dY > this.yEnd) {
            this.yBottom = this.yEnd;
          } else {
            this.yBottom += this.dY;
          }

          ;
        } else if (this.yBottom === this.yEnd) {
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

        this.Shutter.update(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return CameraShutterCanvasDisplay;
  }();

  var cameraCanvasDisplay = new CameraCanvasDisplay();
  cameraCanvasDisplay.animate();
  var cameraShutterCanvasDisplay = new CameraShutterCanvasDisplay(); // cameraShutterCanvasDisplay.animate();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzaHV0dGVyU2xpZGVyIiwic2h1dHRlclZhbHVlIiwiY2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkiLCJhbmltYXRlIiwiQXBlcnR1cmUiLCJ4IiwieSIsInJhZGl1cyIsImNvbG9yIiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0FwZXJ0dXJlIiwiT3V0bGluZSIsImxlbnNSYWRpdXMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3QmFycmVsIiwiZHJhd0xlbnMiLCJDYW1lcmFDYW52YXNEaXNwbGF5IiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYmluZCIsImNsZWFyUmVjdCIsImRyYXdPdXRsaW5lIiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU2h1dHRlciIsInNodXR0ZXIiLCJ5VG9wIiwieUJvdHRvbSIsInlTdGFydCIsInlFbmQiLCJkWSIsInNwZWVkIiwiaW50ZXJ2YWwiLCJjeWNsZWQiLCJmbG9vciIsImRyYXdTZW5zb3IiLCJkcmF3VG9wQ3VydGFpbiIsImRyYXdCb3R0b21DdXJ0YWluIiwiQ2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkiLCJkcmF3U2h1dHRlciIsImNhbWVyYUNhbnZhc0Rpc3BsYXkiLCJQbGFuZSIsImFscGhhIiwiZmlsbFJlY3QiLCJzaHV0dGVyU3BlZWQiLCJmaWx0ZXIiLCJkcmF3UHJvcGVsbGVyIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUGxhbmVDYW52YXNEaXNwbGF5IiwiZHJhd1dpbmdzIiwiZHJhd0Z1c2VsYWdlIiwiUHJvcGVsbGVyQ2FudmFzRGlzcGxheSIsInJvdGF0ZVByb3AiLCJMaXZlQ2FudmFzRGlzcGxheSIsImRyYXdTa3kiLCJkcmF3R3Jhc3MiLCJkcmF3TW91bnRhaW5zIiwiTGl2ZUNsb3VkQ2FudmFzRGlzcGxheSIsImRyYXdDbG91ZCIsImxpdmVDYW52YXNEaXNwbGF5IiwibGl2ZUNsb3VkQ2FudmFzRGlzcGxheSIsInBsYW5lQ2FudmFzRGlzcGxheSIsInByb3BlbGxlckNhbnZhc0Rpc3BsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUdBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhELE1BQUlDLGNBQWMsR0FBR0YsUUFBUSxDQUFDRyxj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QWEsb0JBQWtCLENBQUN2RSxPQUFuQjtBQUNBLE1BQUl3RSxzQkFBc0IsR0FBRyxJQUFJWCxzQkFBSixFQUE3QjtBQUNBVyx3QkFBc0IsQ0FBQ3hFLE9BQXZCO0FBQ0gsQ0ExbEJELEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBsZXQgYXBlcnR1cmVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwZXJ0dXJlXCIpO1xuICAgIGxldCBhcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlU2xpZGVyLnZhbHVlO1xuXG4gICAgYXBlcnR1cmVTbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcGVydHVyZVJhZGl1cyA9IHRoaXMudmFsdWU7XG4gICAgfTtcblxuICAgIGxldCBzaHV0dGVyU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaHV0dGVyLVNwZWVkXCIpO1xuICAgIGxldCBzaHV0dGVyVmFsdWUgPSBzaHV0dGVyU2xpZGVyLnZhbHVlO1xuXG4gICAgc2h1dHRlclNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNodXR0ZXJWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICB9O1xuXG4gICAgY2xhc3MgQXBlcnR1cmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCIjMjQzMTFCXCI7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3QXBlcnR1cmUoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjQTJBNTZFXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5kcmF3QXBlcnR1cmUoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIE91dGxpbmUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgICAgIHRoaXMubGVuc1JhZGl1cyA9IDcwO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9ICcjMEYxMjExJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdMZW5zKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5sZW5zUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3QmFycmVsKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtODAsIHRoaXMueSsxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnkrNDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueSsxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRDZENkQ0XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC04MCwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC02MCwgdGhpcy55LTIwMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjE1LCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNBREFCQTdcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueSs0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDhGOTBcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTUzLCB0aGlzLnktNTMpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueS0xMDYpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTA2LCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrNTMsIHRoaXMueSs1Myk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC01MywgdGhpcy55LTUzKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzFGMjAyMVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUYyMDIxXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMrNSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzRBNEE0QVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngrNTMsIHRoaXMueS01MywgNzUsICgxLzQpICogTWF0aC5QSSwgKDUvNCkqTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxRjIwMjFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3T3V0bGluZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0JhcnJlbChjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3TGVucyhjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgQ2FtZXJhQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbWVyYS1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLkFwZXJ0dXJlID0gbmV3IEFwZXJ0dXJlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5BcGVydHVyZS51cGRhdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBTaHV0dGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0NzA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNDkwO1xuICAgICAgICAgICAgdGhpcy5zaHV0dGVyID0gc2h1dHRlclZhbHVlO1xuICAgICAgICAgICAgdGhpcy55VG9wID0gMzUwO1xuICAgICAgICAgICAgdGhpcy55Qm90dG9tID0gMzUwO1xuICAgICAgICAgICAgdGhpcy55U3RhcnQgPSAzNTA7XG4gICAgICAgICAgICB0aGlzLnlFbmQgPSA0NzA7XG4gICAgICAgICAgICB0aGlzLmRZID0gNTtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA1O1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDA7XG4gICAgICAgICAgICB0aGlzLmN5Y2xlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NlbnNvcihjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xNDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy5oZWlnaHQtMTQwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMuaGVpZ2h0LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3VG9wQ3VydGFpbihjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMTUwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMCwgdGhpcy55VG9wKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMueVRvcCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLmhlaWdodC0xNTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xNTApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3Qm90dG9tQ3VydGFpbihjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLnlCb3R0b20pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy55Qm90dG9tKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMuaGVpZ2h0LTEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtMTApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmRZID0gTWF0aC5mbG9vcihzaHV0dGVyVmFsdWUgLyA2KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN5Y2xlZCA9PT0gZmFsc2UgJiYgdGhpcy55Qm90dG9tIDwgdGhpcy55RW5kKSB7IFxuICAgICAgICAgICAgICAgIGlmICgodGhpcy55Qm90dG9tICsgdGhpcy5kWSkgPiB0aGlzLnlFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55Qm90dG9tID0gdGhpcy55RW5kO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueUJvdHRvbSArPSB0aGlzLmRZO1xuICAgICAgICAgICAgICAgIH07IFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnlCb3R0b20gPT09IHRoaXMueUVuZCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55VG9wICsgdGhpcy5kWSkgPiB0aGlzLnlFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55RW5kO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN5Y2xlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wICs9IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN5Y2xlZCA9PT0gdHJ1ZSAmJiB0aGlzLnlCb3R0b20gPiB0aGlzLnlTdGFydCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55Qm90dG9tIC0gdGhpcy5kWSkgPCB0aGlzLnlTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gPSB0aGlzLnlTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55U3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ljbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55Qm90dG9tIC09IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB0aGlzLmRyYXdTZW5zb3IoY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RvcEN1cnRhaW4oY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0JvdHRvbUN1cnRhaW4oY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIENhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtZXJhLXNodXR0ZXItY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5TaHV0dGVyID0gbmV3IFNodXR0ZXI7XG4gICAgICAgICAgICB0aGlzLmRyYXdTaHV0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdTaHV0dGVyKCkge1xuICAgICAgICAgICAgdGhpcy5TaHV0dGVyLmRyYXdTZW5zb3IodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5TaHV0dGVyLmRyYXdUb3BDdXJ0YWluKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci5kcmF3Qm90dG9tQ3VydGFpbih0aGlzLmN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5TaHV0dGVyLmRyYXdTZW5zb3IodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5TaHV0dGVyLmRyYXdUb3BDdXJ0YWluKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuU2h1dHRlci5kcmF3Qm90dG9tQ3VydGFpbih0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIudXBkYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCBjYW1lcmFDYW52YXNEaXNwbGF5ID0gbmV3IENhbWVyYUNhbnZhc0Rpc3BsYXk7XG4gICAgY2FtZXJhQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IGNhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5ID0gbmV3IENhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5O1xuICAgIC8vIGNhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcblxuICAgIGNsYXNzIFBsYW5lICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMjQwO1xuICAgICAgICAgICAgdGhpcy55ID0gMzIwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSA4MDtcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSBzaHV0dGVyVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3RnVzZWxhZ2UoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55IC0gNjgsIHRoaXMucmFkaXVzLTQwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInNpbHZlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cy0yMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzA5MTAxN1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdXaW5ncyhjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkgKyA1KVxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyAyNDAsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCArIDI0MCwgdGhpcy55ICsgMjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSArIDUwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54IC0gMjQwLCB0aGlzLnkgKyAyNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCAtIDI0MCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkgKyA1KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1Byb3BlbGxlcihjdHgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJkYXJrc2xhdGVncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNDUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNDUsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngrMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTQ1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTQ1LCB0aGlzLnktMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMTYwLCB0aGlzLnktMjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIHZlcnRpY2FsXG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnktMTYwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIwLCB0aGlzLnkrMTQ1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnkrMTQ1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTIwLCB0aGlzLnkrMTYwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyBodWJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDIwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByb3RhdGVQcm9wKGN0eCkge1xuICAgICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAwLCAwLjEpXCJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngtMTYwLCB0aGlzLnksIDE1LCA0MCk7XG4gICAgICAgICAgICB0aGlzLnNodXR0ZXJWYWx1ZSA9IHNodXR0ZXJWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2h1dHRlclNwZWVkID0gYCR7MTIgLyB0aGlzLnNodXR0ZXJWYWx1ZX1weGA7XG4gICAgICAgICAgICBjdHguZmlsdGVyID0gYGJsdXIoJHt0aGlzLnNodXR0ZXJTcGVlZH0pYDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1Byb3BlbGxlcihjdHgpO1xuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgucm90YXRlKE1hdGguUEkgLyB0aGlzLnNodXR0ZXJWYWx1ZSk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgICAgICAgLy8gY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFBsYW5lQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5lLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuUGxhbmUgPSBuZXcgUGxhbmU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFzcyh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdTa3kodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuUGxhbmUuZHJhd1dpbmdzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFByb3BlbGxlckNhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9wZWxsZXItY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QbGFuZSA9IG5ldyBQbGFuZTtcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDAsIDAuMSlcIlxuICAgICAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QodGhpcy5QbGFuZS54LTE2MCwgdGhpcy5QbGFuZS55LCAxNSwgNDApO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3R3Jhc3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3U2t5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdGdXNlbGFnZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdQcm9wZWxsZXIodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuUGxhbmUucm90YXRlUHJvcCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBMaXZlQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdHcmFzcyhjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImRhcmtncmVlblwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdTa3koY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LXRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC10aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwibGlnaHRza3libHVlXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRlZXBza3libHVlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd01vdW50YWlucyhjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5oZWlnaHQtMjYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oNjAsIHRoaXMuaGVpZ2h0LTMyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDI2MCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya2dyYXlcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyg2MCwgdGhpcy5oZWlnaHQtMzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMjAsIHRoaXMuaGVpZ2h0LTI4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDQwLCB0aGlzLmhlaWdodC0yNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyg2MCwgdGhpcy5oZWlnaHQtMjcwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMTAwLCB0aGlzLmhlaWdodC0yNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygxMjAsIHRoaXMuaGVpZ2h0LTI4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCB0aGlzLmhlaWdodC0zMjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBgJHthcGVydHVyZVJhZGl1cyAvIDI1fXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuYXBlcnR1cmVSYWRpdXN9KWA7XG4gICAgICAgICAgICB0aGlzLmRyYXdTa3koY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyYXNzKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdNb3VudGFpbnMoY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFzcyh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdTa3kodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5jdHgpXG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgTGl2ZUNsb3VkQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtY2xvdWQtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdDbG91ZChjdHgpIHtcbiAgICAgICAgICAgIGxldCB4ID0gMjQwO1xuICAgICAgICAgICAgbGV0IHkgPSAxMDA7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCwgeSwgNjAsIE1hdGguUEkgKiAwLjUsIE1hdGguUEkgKiAxLjUpO1xuICAgICAgICAgICAgY3R4LmFyYyh4ICsgNzAsIHkgLSA2MCwgNzAsIE1hdGguUEkgKiAxLCBNYXRoLlBJICogMS44NSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyAxNTIsIHkgLSA0NSwgNTAsIE1hdGguUEkgKiAxLjM3LCBNYXRoLlBJICogMS45MSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyAyMDAsIHksIDYwLCBNYXRoLlBJICogMS41LCBNYXRoLlBJICogMC41KTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIDIwMCwgeSArIDYwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIDYwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBlcnR1cmVSYWRpdXMgPSBgJHthcGVydHVyZVJhZGl1cyAvIDUwfXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuYXBlcnR1cmVSYWRpdXN9KWA7XG4gICAgICAgICAgICB0aGlzLmRyYXdDbG91ZChjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuY3R4KVxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGl2ZUNhbnZhc0Rpc3BsYXkgPSBuZXcgTGl2ZUNhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBsaXZlQ2xvdWRDYW52YXNEaXNwbGF5ID0gbmV3IExpdmVDbG91ZENhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNsb3VkQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHBsYW5lQ2FudmFzRGlzcGxheSA9IG5ldyBQbGFuZUNhbnZhc0Rpc3BsYXk7XG4gICAgcGxhbmVDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgcHJvcGVsbGVyQ2FudmFzRGlzcGxheSA9IG5ldyBQcm9wZWxsZXJDYW52YXNEaXNwbGF5O1xuICAgIHByb3BlbGxlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
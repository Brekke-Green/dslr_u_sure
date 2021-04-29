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

  var apertureSettingFunction = function apertureSettingFunction(sliderValue) {
    switch (sliderValue) {
      case "55":
        return "F1.4";

      case "50":
        return "F2.0";

      case "45":
        return "F2.8";

      case "40":
        return "F4.0";

      case "35":
        return "F5.6";

      case "30":
        return "F8.0";

      case "25":
        return "F11.0";

      case "20":
        return "F14.0";

      case "15":
        return "F16.0";

      case "10":
        return "F18.0";

      case "5":
        return "F22.0";

      default:
        return 'broken';
    }
  };

  apertureSlider.oninput = function () {
    apertureRadius = this.value;
    document.getElementById("aperture-setting").innerHTML = apertureSettingFunction(this.value);
  };

  var shutterSlider = document.getElementById("Shutter-Speed");
  var shutterValue = shutterSlider.value;
  var shutterNumber = 0;

  var shutterSettingFunction = function shutterSettingFunction(sliderValue) {
    switch (sliderValue) {
      case "39":
        return "1/640";

      case "36":
        return "1/500";

      case "33":
        return "1/400";

      case "30":
        return "1/320";

      case "27":
        return "1/250";

      case "24":
        return "1/200";

      case "21":
        return "1/160";

      case "18":
        return "1/125";

      case "15":
        return "1/100";

      case "12":
        return "1/80";

      case "9":
        return "1/60";

      case "6":
        return "1/40";

      case "3":
        return "1/25";

      default:
        return 'broken';
    }
  };

  shutterSlider.oninput = function () {
    shutterValue = this.value;
    shutterNumber = this.value;
    document.getElementById("shutter-setting").innerHTML = shutterSettingFunction(this.value);
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

  var HudCanvasDisplay = /*#__PURE__*/function () {
    function HudCanvasDisplay() {
      _classCallCheck(this, HudCanvasDisplay);

      this.canvas = document.getElementById("hud-canvas");
      this.ctx = this.canvas.getContext('2d');
      this.width = 480;
      this.height = 500;
      this.apertureRadius = apertureRadius;
      this.animate = this.animate.bind(this); // this.Outline = new Outline;
    }

    _createClass(HudCanvasDisplay, [{
      key: "drawHud",
      value: function drawHud(ctx) {
        // crosshair
        ctx.beginPath();
        ctx.moveTo(Math.floor(this.width / 2), Math.floor(this.height / 2) - 20);
        ctx.lineTo(Math.floor(this.width / 2), Math.floor(this.height / 2) + 20);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(Math.floor(this.width / 2) - 20, Math.floor(this.height / 2));
        ctx.lineTo(Math.floor(this.width / 2) + 20, Math.floor(this.height / 2));
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath(); //bottom right corner

        ctx.beginPath();
        ctx.moveTo(this.width - 20, this.height - 60);
        ctx.lineTo(this.width - 20, this.height - 20);
        ctx.lineTo(this.width - 60, this.height - 20);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath(); //bottom left corner

        ctx.beginPath();
        ctx.moveTo(20, this.height - 60);
        ctx.lineTo(20, this.height - 20);
        ctx.lineTo(60, this.height - 20);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath(); //top right corner

        ctx.beginPath();
        ctx.moveTo(this.width - 20, 60);
        ctx.lineTo(this.width - 20, 20);
        ctx.lineTo(this.width - 60, 20);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath(); //top left corner

        ctx.beginPath();
        ctx.moveTo(20, 60);
        ctx.lineTo(20, 20);
        ctx.lineTo(60, 20);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
      }
    }, {
      key: "animate",
      value: function animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawHud(this.ctx);
        requestAnimationFrame(this.animate);
      }
    }]);

    return HudCanvasDisplay;
  }();

  var liveCanvasDisplay = new LiveCanvasDisplay();
  liveCanvasDisplay.animate();
  var liveCloudCanvasDisplay = new LiveCloudCanvasDisplay();
  liveCloudCanvasDisplay.animate();
  var planeCanvasDisplay = new PlaneCanvasDisplay();
  planeCanvasDisplay.animate();
  var propellerCanvasDisplay = new PropellerCanvasDisplay();
  propellerCanvasDisplay.animate();
  var hudCanvasDisplay = new HudCanvasDisplay();
  hudCanvasDisplay.animate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGVydHVyZVNsaWRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBlcnR1cmVSYWRpdXMiLCJ2YWx1ZSIsImFwZXJ0dXJlU2V0dGluZ0Z1bmN0aW9uIiwic2xpZGVyVmFsdWUiLCJvbmlucHV0IiwiaW5uZXJIVE1MIiwic2h1dHRlclNsaWRlciIsInNodXR0ZXJWYWx1ZSIsInNodXR0ZXJOdW1iZXIiLCJzaHV0dGVyU2V0dGluZ0Z1bmN0aW9uIiwiQXBlcnR1cmUiLCJ4IiwieSIsInJhZGl1cyIsImNvbG9yIiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0FwZXJ0dXJlIiwiT3V0bGluZSIsImxlbnNSYWRpdXMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3QmFycmVsIiwiZHJhd0xlbnMiLCJDYW1lcmFDYW52YXNEaXNwbGF5IiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImJpbmQiLCJjbGVhclJlY3QiLCJkcmF3T3V0bGluZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlNodXR0ZXIiLCJzaHV0dGVyIiwieVRvcCIsInlCb3R0b20iLCJ5U3RhcnQiLCJ5RW5kIiwiZFkiLCJzcGVlZCIsImludGVydmFsIiwiY3ljbGVkIiwiZmxvb3IiLCJkcmF3U2Vuc29yIiwiZHJhd1RvcEN1cnRhaW4iLCJkcmF3Qm90dG9tQ3VydGFpbiIsIkNhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5IiwiZHJhd1NodXR0ZXIiLCJjYW1lcmFDYW52YXNEaXNwbGF5IiwiY2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkiLCJQbGFuZSIsImFscGhhIiwiZmlsbFJlY3QiLCJzaHV0dGVyU3BlZWQiLCJmaWx0ZXIiLCJkcmF3UHJvcGVsbGVyIiwidHJhbnNsYXRlIiwicm90YXRlIiwiUGxhbmVDYW52YXNEaXNwbGF5IiwiZHJhd1dpbmdzIiwiZHJhd0Z1c2VsYWdlIiwiUHJvcGVsbGVyQ2FudmFzRGlzcGxheSIsInJvdGF0ZVByb3AiLCJMaXZlQ2FudmFzRGlzcGxheSIsImRyYXdTa3kiLCJkcmF3R3Jhc3MiLCJkcmF3TW91bnRhaW5zIiwiTGl2ZUNsb3VkQ2FudmFzRGlzcGxheSIsImRyYXdDbG91ZCIsIkh1ZENhbnZhc0Rpc3BsYXkiLCJkcmF3SHVkIiwibGl2ZUNhbnZhc0Rpc3BsYXkiLCJsaXZlQ2xvdWRDYW52YXNEaXNwbGF5IiwicGxhbmVDYW52YXNEaXNwbGF5IiwicHJvcGVsbGVyQ2FudmFzRGlzcGxheSIsImh1ZENhbnZhc0Rpc3BsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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WCxFQUFlLEVBQWY7QUFDQWQsV0FBRyxDQUFDSyxXQUFKLEdBQWtCLE9BQWxCO0FBQ0FMLFdBQUcsQ0FBQ00sTUFBSjtBQUNBTixXQUFHLENBQUNPLFNBQUo7QUFDSDtBQXJ0QjJDO0FBQUE7QUFBQSxhQXV0QjVDLG1CQUFVO0FBQ04sYUFBS1AsR0FBTCxDQUFTd0IsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLSixLQUE5QixFQUFxQyxLQUFLQyxNQUExQztBQUNBLGFBQUs2QyxPQUFMLENBQWEsS0FBS2xFLEdBQWxCO0FBQ0EyQiw2QkFBcUIsQ0FBQyxLQUFLTCxPQUFOLENBQXJCO0FBQ0g7QUEzdEIyQzs7QUFBQTtBQUFBOztBQTh0QmhELE1BQUk2QyxpQkFBaUIsR0FBRyxJQUFJUixpQkFBSixFQUF4QjtBQUNBUSxtQkFBaUIsQ0FBQzdDLE9BQWxCO0FBQ0EsTUFBSThDLHNCQUFzQixHQUFHLElBQUlMLHNCQUFKLEVBQTdCO0FBQ0FLLHdCQUFzQixDQUFDOUMsT0FBdkI7QUFDQSxNQUFJK0Msa0JBQWtCLEdBQUcsSUFBSWYsa0JBQUosRUFBekI7QUFDQWUsb0JBQWtCLENBQUMvQyxPQUFuQjtBQUNBLE1BQUlnRCxzQkFBc0IsR0FBRyxJQUFJYixzQkFBSixFQUE3QjtBQUNBYSx3QkFBc0IsQ0FBQ2hELE9BQXZCO0FBQ0EsTUFBSWlELGdCQUFnQixHQUFHLElBQUlOLGdCQUFKLEVBQXZCO0FBQ0FNLGtCQUFnQixDQUFDakQsT0FBakI7QUFDSCxDQXh1QkQsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIFxuICAgIGxldCBhcGVydHVyZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBlcnR1cmVcIik7XG4gICAgbGV0IGFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVTbGlkZXIudmFsdWU7XG5cbiAgICBjb25zdCBhcGVydHVyZVNldHRpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCI1NVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYxLjRcIjtcbiAgICAgICAgICAgIGNhc2UgXCI1MFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYyLjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCI0NVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYyLjhcIjtcbiAgICAgICAgICAgIGNhc2UgXCI0MFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkY0LjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIzNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkY1LjZcIjtcbiAgICAgICAgICAgIGNhc2UgXCIzMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkY4LjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIyNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYxMS4wXCI7XG4gICAgICAgICAgICBjYXNlIFwiMjBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGMTQuMFwiO1xuICAgICAgICAgICAgY2FzZSBcIjE1XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRjE2LjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIxMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYxOC4wXCI7XG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYyMi4wXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnYnJva2VuJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFwZXJ0dXJlU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYXBlcnR1cmVSYWRpdXMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwZXJ0dXJlLXNldHRpbmdcIikuaW5uZXJIVE1MID0gYXBlcnR1cmVTZXR0aW5nRnVuY3Rpb24odGhpcy52YWx1ZSk7XG4gICAgfTtcblxuICAgIGxldCBzaHV0dGVyU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaHV0dGVyLVNwZWVkXCIpO1xuICAgIGxldCBzaHV0dGVyVmFsdWUgPSBzaHV0dGVyU2xpZGVyLnZhbHVlO1xuICAgIGxldCBzaHV0dGVyTnVtYmVyID0gMDtcblxuICAgIGNvbnN0IHNodXR0ZXJTZXR0aW5nRnVuY3Rpb24gPSBmdW5jdGlvbihzbGlkZXJWYWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiMzlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzY0MFwiO1xuICAgICAgICAgICAgY2FzZSBcIjM2XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS81MDBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIzM1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvNDAwXCI7XG4gICAgICAgICAgICBjYXNlIFwiMzBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzMyMFwiO1xuICAgICAgICAgICAgY2FzZSBcIjI3XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS8yNTBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIyNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvMjAwXCI7XG4gICAgICAgICAgICBjYXNlIFwiMjFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzE2MFwiO1xuICAgICAgICAgICAgY2FzZSBcIjE4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS8xMjVcIjtcbiAgICAgICAgICAgIGNhc2UgXCIxNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvMTAwXCI7XG4gICAgICAgICAgICBjYXNlIFwiMTJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzgwXCI7XG4gICAgICAgICAgICBjYXNlIFwiOVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvNjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS80MFwiO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzI1XCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnYnJva2VuJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2h1dHRlclNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNodXR0ZXJWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHNodXR0ZXJOdW1iZXIgPSB0aGlzLnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNodXR0ZXItc2V0dGluZ1wiKS5pbm5lckhUTUwgPSBzaHV0dGVyU2V0dGluZ0Z1bmN0aW9uKHRoaXMudmFsdWUpO1xuICAgIH07XG5cbiAgICBjbGFzcyBBcGVydHVyZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTUwO1xuICAgICAgICAgICAgdGhpcy55ID0gMjUwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcIiMyNDMxMUJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdBcGVydHVyZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNBMkE1NkVcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmRyYXdBcGVydHVyZShjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgT3V0bGluZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTUwO1xuICAgICAgICAgICAgdGhpcy55ID0gMjUwO1xuICAgICAgICAgICAgdGhpcy5sZW5zUmFkaXVzID0gNzA7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gJyMwRjEyMTEnO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0xlbnMoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdCYXJyZWwoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC04MCwgdGhpcy55KzEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueSs0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55KzEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNENkQ2RDRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTYwLCB0aGlzLnktMjAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0FEQUJBN1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55KzQwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzkwOEY5MFwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtNTMsIHRoaXMueS01Myk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55LTEwNik7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxMDYsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCs1MywgdGhpcy55KzUzKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTUzLCB0aGlzLnktNTMpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMUYyMDIxXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxRjIwMjFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMubGVuc1JhZGl1cys1LCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjNEE0QTRBXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCs1MywgdGhpcy55LTUzLCA3NSwgKDEvNCkgKiBNYXRoLlBJLCAoNS80KSpNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFGMjAyMVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdPdXRsaW5lKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3QmFycmVsKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdMZW5zKGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBDYW1lcmFDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtZXJhLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuQXBlcnR1cmUgPSBuZXcgQXBlcnR1cmU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLkFwZXJ0dXJlLnVwZGF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFNodXR0ZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ3MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA0OTA7XG4gICAgICAgICAgICB0aGlzLnNodXR0ZXIgPSBzaHV0dGVyVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnlUb3AgPSAzNTA7XG4gICAgICAgICAgICB0aGlzLnlCb3R0b20gPSAzNTA7XG4gICAgICAgICAgICB0aGlzLnlTdGFydCA9IDM1MDtcbiAgICAgICAgICAgIHRoaXMueUVuZCA9IDQ3MDtcbiAgICAgICAgICAgIHRoaXMuZFkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDU7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gMDtcbiAgICAgICAgICAgIHRoaXMuY3ljbGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3U2Vuc29yKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTE0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLmhlaWdodC0xNDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy5oZWlnaHQtMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdUb3BDdXJ0YWluKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xNTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLnlUb3ApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy55VG9wKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMuaGVpZ2h0LTE1MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTE1MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdCb3R0b21DdXJ0YWluKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMueUJvdHRvbSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLnlCb3R0b20pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy5oZWlnaHQtMTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuZFkgPSBNYXRoLmZsb29yKHRoaXMuc2h1dHRlciAvIDMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3ljbGVkID09PSBmYWxzZSAmJiB0aGlzLnlCb3R0b20gPCB0aGlzLnlFbmQpIHsgXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnlCb3R0b20gKyB0aGlzLmRZKSA+IHRoaXMueUVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gPSB0aGlzLnlFbmQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55Qm90dG9tICs9IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3ljbGVkID09PSBmYWxzZSAmJiB0aGlzLnlCb3R0b20gPT09IHRoaXMueUVuZCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55VG9wICsgdGhpcy5kWSkgPiB0aGlzLnlFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55RW5kO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN5Y2xlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wICs9IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN5Y2xlZCA9PT0gdHJ1ZSAmJiB0aGlzLnlCb3R0b20gPiB0aGlzLnlTdGFydCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55Qm90dG9tIC0gdGhpcy5kWSkgPCB0aGlzLnlTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gPSB0aGlzLnlTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55U3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ljbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55Qm90dG9tIC09IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnlUb3AgPT09IHRoaXMueUVuZCAmJiB0aGlzLnlCb3R0b20gPT09IHRoaXMueVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55U3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jeWNsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhd1NlbnNvcihjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VG9wQ3VydGFpbihjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3VydGFpbihjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgQ2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW1lcmEtc2h1dHRlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIgPSBuZXcgU2h1dHRlcjtcbiAgICAgICAgICAgIHRoaXMuZHJhd1NodXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NodXR0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIuZHJhd1NlbnNvcih0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIuZHJhd1RvcEN1cnRhaW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5TaHV0dGVyLmRyYXdCb3R0b21DdXJ0YWluKHRoaXMuY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyB0aGlzLlNodXR0ZXIuZHJhd1NlbnNvcih0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlNodXR0ZXIuZHJhd1RvcEN1cnRhaW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5TaHV0dGVyLmRyYXdCb3R0b21DdXJ0YWluKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci5zaHV0dGVyID0gc2h1dHRlck51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci51cGRhdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IGNhbWVyYUNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhQ2FudmFzRGlzcGxheTtcbiAgICBjYW1lcmFDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgY2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXk7XG4gICAgY2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuXG4gICAgY2xhc3MgUGxhbmUgIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAyNDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAzMjA7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IDgwO1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IHNodXR0ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdGdXNlbGFnZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnkgLSA2OCwgdGhpcy5yYWRpdXMtNDAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwic2lsdmVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLTIwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDkxMDE3XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1dpbmdzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSArIDUpXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCArIDI0MCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgMjQwLCB0aGlzLnkgKyAyNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55ICsgNTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggLSAyNDAsIHRoaXMueSArIDI1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54IC0gMjQwLCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSArIDUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3UHJvcGVsbGVyKGN0eCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE0NSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE0NSwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNDUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNDUsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gdmVydGljYWxcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJkYXJrc2xhdGVncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIGh1YlxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMjAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdGF0ZVByb3AoY3R4KSB7XG4gICAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDAsIDAuMSlcIlxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueC0xNjAsIHRoaXMueSwgMTUsIDQwKTtcbiAgICAgICAgICAgIHRoaXMuc2h1dHRlclZhbHVlID0gc2h1dHRlclZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaHV0dGVyU3BlZWQgPSBgJHsxMiAvIHRoaXMuc2h1dHRlclZhbHVlfXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuc2h1dHRlclNwZWVkfSlgO1xuICAgICAgICAgICAgdGhpcy5kcmF3UHJvcGVsbGVyKGN0eCk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoTWF0aC5QSSAvIHRoaXMuc2h1dHRlclZhbHVlKTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUGxhbmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmUtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QbGFuZSA9IG5ldyBQbGFuZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3V2luZ3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUHJvcGVsbGVyQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3BlbGxlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlBsYW5lID0gbmV3IFBsYW5lO1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMCwgMC4xKVwiXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLlBsYW5lLngtMTYwLCB0aGlzLlBsYW5lLnksIDE1LCA0MCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFzcyh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdTa3kodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd1Byb3BlbGxlcih0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIExpdmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0dyYXNzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya2dyZWVuXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NreShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LXRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJsaWdodHNreWJsdWVcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGVlcHNreWJsdWVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3TW91bnRhaW5zKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygwLCB0aGlzLmhlaWdodC0yNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyg2MCwgdGhpcy5oZWlnaHQtMzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMjYwLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygwLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDYwLCB0aGlzLmhlaWdodC0zMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygyMCwgdGhpcy5oZWlnaHQtMjgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oNDAsIHRoaXMuaGVpZ2h0LTI2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCB0aGlzLmhlaWdodC0yNzApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygxMDAsIHRoaXMuaGVpZ2h0LTI2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDEyMCwgdGhpcy5oZWlnaHQtMjgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oNjAsIHRoaXMuaGVpZ2h0LTMyMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGAke2FwZXJ0dXJlUmFkaXVzIC8gMjV9cHhgO1xuICAgICAgICAgICAgY3R4LmZpbHRlciA9IGBibHVyKCR7dGhpcy5hcGVydHVyZVJhZGl1c30pYDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1NreShjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3R3Jhc3MoY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd01vdW50YWlucyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmN0eClcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdGdXNlbGFnZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLnJvdGF0ZVByb3AodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBMaXZlQ2xvdWRDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1jbG91ZC1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0Nsb3VkKGN0eCkge1xuICAgICAgICAgICAgbGV0IHggPSAyNDA7XG4gICAgICAgICAgICBsZXQgeSA9IDEwMDtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCA2MCwgTWF0aC5QSSAqIDAuNSwgTWF0aC5QSSAqIDEuNSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyA3MCwgeSAtIDYwLCA3MCwgTWF0aC5QSSAqIDEsIE1hdGguUEkgKiAxLjg1KTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCArIDE1MiwgeSAtIDQ1LCA1MCwgTWF0aC5QSSAqIDEuMzcsIE1hdGguUEkgKiAxLjkxKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCArIDIwMCwgeSwgNjAsIE1hdGguUEkgKiAxLjUsIE1hdGguUEkgKiAwLjUpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4ICsgMjAwLCB5ICsgNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgNjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGAke2FwZXJ0dXJlUmFkaXVzIC8gNTB9cHhgO1xuICAgICAgICAgICAgY3R4LmZpbHRlciA9IGBibHVyKCR7dGhpcy5hcGVydHVyZVJhZGl1c30pYDtcbiAgICAgICAgICAgIHRoaXMuZHJhd0Nsb3VkKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5jdHgpXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIEh1ZENhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodWQtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdIdWQoY3R4KSB7XG4gICAgICAgICAgICAvLyBjcm9zc2hhaXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oTWF0aC5mbG9vcih0aGlzLndpZHRoLzIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0LzIpLTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oTWF0aC5mbG9vcih0aGlzLndpZHRoLzIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0LzIpKzIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKE1hdGguZmxvb3IodGhpcy53aWR0aC8yKS0yMCwgTWF0aC5mbG9vcih0aGlzLmhlaWdodC8yKSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKE1hdGguZmxvb3IodGhpcy53aWR0aC8yKSsyMCwgTWF0aC5mbG9vcih0aGlzLmhlaWdodC8yKSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAvL2JvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtNjAsIHRoaXMuaGVpZ2h0LTIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIC8vYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDIwLCB0aGlzLmhlaWdodC02MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAvL3RvcCByaWdodCBjb3JuZXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCAyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtNjAsIDIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIC8vdG9wIGxlZnQgY29ybmVyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDIwLCA2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDIwLCAyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCAyMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdIdWQodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGl2ZUNhbnZhc0Rpc3BsYXkgPSBuZXcgTGl2ZUNhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBsaXZlQ2xvdWRDYW52YXNEaXNwbGF5ID0gbmV3IExpdmVDbG91ZENhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNsb3VkQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHBsYW5lQ2FudmFzRGlzcGxheSA9IG5ldyBQbGFuZUNhbnZhc0Rpc3BsYXk7XG4gICAgcGxhbmVDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgcHJvcGVsbGVyQ2FudmFzRGlzcGxheSA9IG5ldyBQcm9wZWxsZXJDYW52YXNEaXNwbGF5O1xuICAgIHByb3BlbGxlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBodWRDYW52YXNEaXNwbGF5ID0gbmV3IEh1ZENhbnZhc0Rpc3BsYXk7XG4gICAgaHVkQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
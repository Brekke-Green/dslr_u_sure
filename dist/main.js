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
  var modal = document.getElementById("modal");
  var modalScreen = document.getElementById("modal-screen");
  var button = document.getElementById("button");
  var close = document.getElementById("close");

  button.onclick = function () {
    modal.style.display = "block";
  };

  close.onclick = function () {
    modal.style.display = "none";
  };

  modalScreen.onclick = function () {
    modal.style.display = "none";
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwibW9kYWxTY3JlZW4iLCJidXR0b24iLCJjbG9zZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJhcGVydHVyZVNsaWRlciIsImFwZXJ0dXJlUmFkaXVzIiwidmFsdWUiLCJhcGVydHVyZVNldHRpbmdGdW5jdGlvbiIsInNsaWRlclZhbHVlIiwib25pbnB1dCIsImlubmVySFRNTCIsInNodXR0ZXJTbGlkZXIiLCJzaHV0dGVyVmFsdWUiLCJzaHV0dGVyTnVtYmVyIiwic2h1dHRlclNldHRpbmdGdW5jdGlvbiIsIkFwZXJ0dXJlIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImRyYXdBcGVydHVyZSIsIk91dGxpbmUiLCJsZW5zUmFkaXVzIiwibW92ZVRvIiwibGluZVRvIiwiZHJhd0JhcnJlbCIsImRyYXdMZW5zIiwiQ2FtZXJhQ2FudmFzRGlzcGxheSIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGUiLCJiaW5kIiwiY2xlYXJSZWN0IiwiZHJhd091dGxpbmUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJTaHV0dGVyIiwic2h1dHRlciIsInlUb3AiLCJ5Qm90dG9tIiwieVN0YXJ0IiwieUVuZCIsImRZIiwic3BlZWQiLCJpbnRlcnZhbCIsImN5Y2xlZCIsImZsb29yIiwiZHJhd1NlbnNvciIsImRyYXdUb3BDdXJ0YWluIiwiZHJhd0JvdHRvbUN1cnRhaW4iLCJDYW1lcmFTaHV0dGVyQ2FudmFzRGlzcGxheSIsImRyYXdTaHV0dGVyIiwiY2FtZXJhQ2FudmFzRGlzcGxheSIsImNhbWVyYVNodXR0ZXJDYW52YXNEaXNwbGF5IiwiUGxhbmUiLCJhbHBoYSIsImZpbGxSZWN0Iiwic2h1dHRlclNwZWVkIiwiZmlsdGVyIiwiZHJhd1Byb3BlbGxlciIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIlBsYW5lQ2FudmFzRGlzcGxheSIsImRyYXdXaW5ncyIsImRyYXdGdXNlbGFnZSIsIlByb3BlbGxlckNhbnZhc0Rpc3BsYXkiLCJyb3RhdGVQcm9wIiwiTGl2ZUNhbnZhc0Rpc3BsYXkiLCJkcmF3U2t5IiwiZHJhd0dyYXNzIiwiZHJhd01vdW50YWlucyIsIkxpdmVDbG91ZENhbnZhc0Rpc3BsYXkiLCJkcmF3Q2xvdWQiLCJIdWRDYW52YXNEaXNwbGF5IiwiZHJhd0h1ZCIsImxpdmVDYW52YXNEaXNwbGF5IiwibGl2ZUNsb3VkQ2FudmFzRGlzcGxheSIsInBsYW5lQ2FudmFzRGlzcGxheSIsInByb3BlbGxlckNhbnZhc0Rpc3BsYXkiLCJodWRDYW52YXNEaXNwbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJC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QUcsSUFBSVIsaUJBQUosRUFBeEI7QUFDQVEsbUJBQWlCLENBQUM3QyxPQUFsQjtBQUNBLE1BQUk4QyxzQkFBc0IsR0FBRyxJQUFJTCxzQkFBSixFQUE3QjtBQUNBSyx3QkFBc0IsQ0FBQzlDLE9BQXZCO0FBQ0EsTUFBSStDLGtCQUFrQixHQUFHLElBQUlmLGtCQUFKLEVBQXpCO0FBQ0FlLG9CQUFrQixDQUFDL0MsT0FBbkI7QUFDQSxNQUFJZ0Qsc0JBQXNCLEdBQUcsSUFBSWIsc0JBQUosRUFBN0I7QUFDQWEsd0JBQXNCLENBQUNoRCxPQUF2QjtBQUNBLE1BQUlpRCxnQkFBZ0IsR0FBRyxJQUFJTixnQkFBSixFQUF2QjtBQUNBTSxrQkFBZ0IsQ0FBQ2pELE9BQWpCO0FBQ0gsQ0F6dkJELEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gICAgY29uc3QgbW9kYWxTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXNjcmVlblwiKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcbiAgICBcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIG1vZGFsU2NyZWVuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIGxldCBhcGVydHVyZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBlcnR1cmVcIik7XG4gICAgbGV0IGFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVTbGlkZXIudmFsdWU7XG5cbiAgICBjb25zdCBhcGVydHVyZVNldHRpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCI1NVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYxLjRcIjtcbiAgICAgICAgICAgIGNhc2UgXCI1MFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYyLjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCI0NVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYyLjhcIjtcbiAgICAgICAgICAgIGNhc2UgXCI0MFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkY0LjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIzNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkY1LjZcIjtcbiAgICAgICAgICAgIGNhc2UgXCIzMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkY4LjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIyNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYxMS4wXCI7XG4gICAgICAgICAgICBjYXNlIFwiMjBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGMTQuMFwiO1xuICAgICAgICAgICAgY2FzZSBcIjE1XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRjE2LjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIxMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYxOC4wXCI7XG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkYyMi4wXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnYnJva2VuJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFwZXJ0dXJlU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYXBlcnR1cmVSYWRpdXMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwZXJ0dXJlLXNldHRpbmdcIikuaW5uZXJIVE1MID0gYXBlcnR1cmVTZXR0aW5nRnVuY3Rpb24odGhpcy52YWx1ZSk7XG4gICAgfTtcblxuICAgIGxldCBzaHV0dGVyU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaHV0dGVyLVNwZWVkXCIpO1xuICAgIGxldCBzaHV0dGVyVmFsdWUgPSBzaHV0dGVyU2xpZGVyLnZhbHVlO1xuICAgIGxldCBzaHV0dGVyTnVtYmVyID0gMDtcblxuICAgIGNvbnN0IHNodXR0ZXJTZXR0aW5nRnVuY3Rpb24gPSBmdW5jdGlvbihzbGlkZXJWYWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiMzlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzY0MFwiO1xuICAgICAgICAgICAgY2FzZSBcIjM2XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS81MDBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIzM1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvNDAwXCI7XG4gICAgICAgICAgICBjYXNlIFwiMzBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzMyMFwiO1xuICAgICAgICAgICAgY2FzZSBcIjI3XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS8yNTBcIjtcbiAgICAgICAgICAgIGNhc2UgXCIyNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvMjAwXCI7XG4gICAgICAgICAgICBjYXNlIFwiMjFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzE2MFwiO1xuICAgICAgICAgICAgY2FzZSBcIjE4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS8xMjVcIjtcbiAgICAgICAgICAgIGNhc2UgXCIxNVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvMTAwXCI7XG4gICAgICAgICAgICBjYXNlIFwiMTJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzgwXCI7XG4gICAgICAgICAgICBjYXNlIFwiOVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEvNjBcIjtcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMS80MFwiO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLzI1XCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnYnJva2VuJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2h1dHRlclNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNodXR0ZXJWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHNodXR0ZXJOdW1iZXIgPSB0aGlzLnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNodXR0ZXItc2V0dGluZ1wiKS5pbm5lckhUTUwgPSBzaHV0dGVyU2V0dGluZ0Z1bmN0aW9uKHRoaXMudmFsdWUpO1xuICAgIH07XG5cbiAgICBjbGFzcyBBcGVydHVyZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTUwO1xuICAgICAgICAgICAgdGhpcy55ID0gMjUwO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBhcGVydHVyZVJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcIiMyNDMxMUJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdBcGVydHVyZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNBMkE1NkVcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmRyYXdBcGVydHVyZShjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgT3V0bGluZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTUwO1xuICAgICAgICAgICAgdGhpcy55ID0gMjUwO1xuICAgICAgICAgICAgdGhpcy5sZW5zUmFkaXVzID0gNzA7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gJyMwRjEyMTEnO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0xlbnMoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmxlbnNSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdCYXJyZWwoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC04MCwgdGhpcy55KzEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueSs0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC04MCwgdGhpcy55KzEwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNENkQ2RDRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTgwLCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTYwLCB0aGlzLnktMjAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMTUsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtODAsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0FEQUJBN1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngrMjM1LCB0aGlzLnktMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIzNSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55KzQwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54KzIxNSwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMzUsIHRoaXMueS0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjM1LCB0aGlzLnkrMjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzkwOEY5MFwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtNTMsIHRoaXMueS01Myk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55LTEwNik7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxMDYsIHRoaXMueSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCs1MywgdGhpcy55KzUzKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTUzLCB0aGlzLnktNTMpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMUYyMDIxXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxRjIwMjFcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMubGVuc1JhZGl1cys1LCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjNEE0QTRBXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCs1MywgdGhpcy55LTUzLCA3NSwgKDEvNCkgKiBNYXRoLlBJLCAoNS80KSpNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya3NsYXRlZ3JheVwiO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFGMjAyMVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdPdXRsaW5lKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3QmFycmVsKGN0eCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdMZW5zKGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBDYW1lcmFDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtZXJhLWNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ4MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA1MDA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuQXBlcnR1cmUgPSBuZXcgQXBlcnR1cmU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLkFwZXJ0dXJlLnVwZGF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFNodXR0ZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGg9IDQ3MDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0PSA0OTA7XG4gICAgICAgICAgICB0aGlzLnNodXR0ZXIgPSBzaHV0dGVyVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnlUb3AgPSAzNTA7XG4gICAgICAgICAgICB0aGlzLnlCb3R0b20gPSAzNTA7XG4gICAgICAgICAgICB0aGlzLnlTdGFydCA9IDM1MDtcbiAgICAgICAgICAgIHRoaXMueUVuZCA9IDQ3MDtcbiAgICAgICAgICAgIHRoaXMuZFkgPSA1O1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDU7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gMDtcbiAgICAgICAgICAgIHRoaXMuY3ljbGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3U2Vuc29yKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTE0MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLmhlaWdodC0xNDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy5oZWlnaHQtMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdUb3BDdXJ0YWluKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xNTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLnlUb3ApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy55VG9wKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC0yMDAsIHRoaXMuaGVpZ2h0LTE1MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMuaGVpZ2h0LTE1MCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdCb3R0b21DdXJ0YWluKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAsIHRoaXMueUJvdHRvbSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtMjAwLCB0aGlzLnlCb3R0b20pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwMCwgdGhpcy5oZWlnaHQtMTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0xMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgICAgIHRoaXMuZFkgPSBNYXRoLmZsb29yKHRoaXMuc2h1dHRlciAvIDMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3ljbGVkID09PSBmYWxzZSAmJiB0aGlzLnlCb3R0b20gPCB0aGlzLnlFbmQpIHsgXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnlCb3R0b20gKyB0aGlzLmRZKSA+IHRoaXMueUVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gPSB0aGlzLnlFbmQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55Qm90dG9tICs9IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3ljbGVkID09PSBmYWxzZSAmJiB0aGlzLnlCb3R0b20gPT09IHRoaXMueUVuZCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55VG9wICsgdGhpcy5kWSkgPiB0aGlzLnlFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55RW5kO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN5Y2xlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wICs9IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN5Y2xlZCA9PT0gdHJ1ZSAmJiB0aGlzLnlCb3R0b20gPiB0aGlzLnlTdGFydCkge1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy55Qm90dG9tIC0gdGhpcy5kWSkgPCB0aGlzLnlTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnlCb3R0b20gPSB0aGlzLnlTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55U3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ljbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55Qm90dG9tIC09IHRoaXMuZFk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnlUb3AgPT09IHRoaXMueUVuZCAmJiB0aGlzLnlCb3R0b20gPT09IHRoaXMueVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy55VG9wID0gdGhpcy55U3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jeWNsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhd1NlbnNvcihjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3VG9wQ3VydGFpbihjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3VydGFpbihjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgQ2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW1lcmEtc2h1dHRlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIgPSBuZXcgU2h1dHRlcjtcbiAgICAgICAgICAgIHRoaXMuZHJhd1NodXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NodXR0ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIuZHJhd1NlbnNvcih0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLlNodXR0ZXIuZHJhd1RvcEN1cnRhaW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5TaHV0dGVyLmRyYXdCb3R0b21DdXJ0YWluKHRoaXMuY3R4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyB0aGlzLlNodXR0ZXIuZHJhd1NlbnNvcih0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlNodXR0ZXIuZHJhd1RvcEN1cnRhaW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5TaHV0dGVyLmRyYXdCb3R0b21DdXJ0YWluKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci5zaHV0dGVyID0gc2h1dHRlck51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuU2h1dHRlci51cGRhdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IGNhbWVyYUNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhQ2FudmFzRGlzcGxheTtcbiAgICBjYW1lcmFDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgY2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkgPSBuZXcgQ2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXk7XG4gICAgY2FtZXJhU2h1dHRlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuXG4gICAgY2xhc3MgUGxhbmUgIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAyNDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAzMjA7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IDgwO1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IHNodXR0ZXJWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdGdXNlbGFnZShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnkgLSA2OCwgdGhpcy5yYWRpdXMtNDAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwic2lsdmVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLTIwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDkxMDE3XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1dpbmdzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSArIDUpXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCArIDI0MCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgMjQwLCB0aGlzLnkgKyAyNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55ICsgNTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggLSAyNDAsIHRoaXMueSArIDI1KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54IC0gMjQwLCB0aGlzLnkpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSArIDUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3UHJvcGVsbGVyKGN0eCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0xNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRhcmtzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE0NSwgdGhpcy55KzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE0NSwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LTE2MCwgdGhpcy55LTIwKTtcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNDUsIHRoaXMueSsyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNDUsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsxNjAsIHRoaXMueS0yMCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gdmVydGljYWxcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueS0xNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJkYXJrc2xhdGVncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCsyMCwgdGhpcy55LTE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE0NSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueC0yMCwgdGhpcy55LTE2MCk7XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngrMjAsIHRoaXMueSsxNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNDUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngtMjAsIHRoaXMueSsxNjApO1xuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIGh1YlxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMjAsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdGF0ZVByb3AoY3R4KSB7XG4gICAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDAsIDAuMSlcIlxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueC0xNjAsIHRoaXMueSwgMTUsIDQwKTtcbiAgICAgICAgICAgIHRoaXMuc2h1dHRlclZhbHVlID0gc2h1dHRlclZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaHV0dGVyU3BlZWQgPSBgJHsxMiAvIHRoaXMuc2h1dHRlclZhbHVlfXB4YDtcbiAgICAgICAgICAgIGN0eC5maWx0ZXIgPSBgYmx1cigke3RoaXMuc2h1dHRlclNwZWVkfSlgO1xuICAgICAgICAgICAgdGhpcy5kcmF3UHJvcGVsbGVyKGN0eCk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoTWF0aC5QSSAvIHRoaXMuc2h1dHRlclZhbHVlKTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUGxhbmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmUtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QbGFuZSA9IG5ldyBQbGFuZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lID0gbmV3IE91dGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUuZHJhd091dGxpbmUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3V2luZ3ModGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5kcmF3RnVzZWxhZ2UodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUHJvcGVsbGVyQ2FudmFzRGlzcGxheSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3BlbGxlci1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLlBsYW5lID0gbmV3IFBsYW5lO1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMCwgMC4xKVwiXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLlBsYW5lLngtMTYwLCB0aGlzLlBsYW5lLnksIDE1LCA0MCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdHcmFzcyh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRyYXdTa3kodGhpcy5jdHgpO1xuICAgICAgICAgICAgLy8gdGhpcy5PdXRsaW5lLmRyYXdPdXRsaW5lKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd0Z1c2VsYWdlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuUGxhbmUuZHJhd1Byb3BlbGxlcih0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5QbGFuZS5yb3RhdGVQcm9wKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIExpdmVDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0dyYXNzKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LTE4MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZGFya2dyZWVuXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd1NreShjdHgpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtMTgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQtdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLXRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LXRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy53aWR0aC10aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJsaWdodHNreWJsdWVcIlxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZGVlcHNreWJsdWVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkcmF3TW91bnRhaW5zKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygwLCB0aGlzLmhlaWdodC0yNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyg2MCwgdGhpcy5oZWlnaHQtMzIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMjYwLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygwLCB0aGlzLmhlaWdodC0xODApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJkYXJrZ3JheVwiXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmF5XCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDYwLCB0aGlzLmhlaWdodC0zMjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygyMCwgdGhpcy5oZWlnaHQtMjgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oNDAsIHRoaXMuaGVpZ2h0LTI2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCB0aGlzLmhlaWdodC0yNzApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygxMDAsIHRoaXMuaGVpZ2h0LTI2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDEyMCwgdGhpcy5oZWlnaHQtMjgwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oNjAsIHRoaXMuaGVpZ2h0LTMyMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGAke2FwZXJ0dXJlUmFkaXVzIC8gMjV9cHhgO1xuICAgICAgICAgICAgY3R4LmZpbHRlciA9IGBibHVyKCR7dGhpcy5hcGVydHVyZVJhZGl1c30pYDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1NreShjdHgpO1xuICAgICAgICAgICAgdGhpcy5kcmF3R3Jhc3MoY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd01vdW50YWlucyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd0dyYXNzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZHJhd1NreSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmN0eClcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZS5kcmF3T3V0bGluZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLmRyYXdGdXNlbGFnZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYW5lLnJvdGF0ZVByb3AodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBMaXZlQ2xvdWRDYW52YXNEaXNwbGF5IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1jbG91ZC1jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoPSA0ODA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodD0gNTAwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwZXJ0dXJlUmFkaXVzID0gYXBlcnR1cmVSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuT3V0bGluZSA9IG5ldyBPdXRsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhd0Nsb3VkKGN0eCkge1xuICAgICAgICAgICAgbGV0IHggPSAyNDA7XG4gICAgICAgICAgICBsZXQgeSA9IDEwMDtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh4LCB5LCA2MCwgTWF0aC5QSSAqIDAuNSwgTWF0aC5QSSAqIDEuNSk7XG4gICAgICAgICAgICBjdHguYXJjKHggKyA3MCwgeSAtIDYwLCA3MCwgTWF0aC5QSSAqIDEsIE1hdGguUEkgKiAxLjg1KTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCArIDE1MiwgeSAtIDQ1LCA1MCwgTWF0aC5QSSAqIDEuMzcsIE1hdGguUEkgKiAxLjkxKTtcbiAgICAgICAgICAgIGN0eC5hcmMoeCArIDIwMCwgeSwgNjAsIE1hdGguUEkgKiAxLjUsIE1hdGguUEkgKiAwLjUpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4ICsgMjAwLCB5ICsgNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgNjApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKGN0eCkge1xuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGAke2FwZXJ0dXJlUmFkaXVzIC8gNTB9cHhgO1xuICAgICAgICAgICAgY3R4LmZpbHRlciA9IGBibHVyKCR7dGhpcy5hcGVydHVyZVJhZGl1c30pYDtcbiAgICAgICAgICAgIHRoaXMuZHJhd0Nsb3VkKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5jdHgpXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIEh1ZENhbnZhc0Rpc3BsYXkge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodWQtY2FudmFzXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aD0gNDgwO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQ9IDUwMDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hcGVydHVyZVJhZGl1cyA9IGFwZXJ0dXJlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLk91dGxpbmUgPSBuZXcgT3V0bGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdIdWQoY3R4KSB7XG4gICAgICAgICAgICAvLyBjcm9zc2hhaXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oTWF0aC5mbG9vcih0aGlzLndpZHRoLzIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0LzIpLTIwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oTWF0aC5mbG9vcih0aGlzLndpZHRoLzIpLCBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0LzIpKzIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKE1hdGguZmxvb3IodGhpcy53aWR0aC8yKS0yMCwgTWF0aC5mbG9vcih0aGlzLmhlaWdodC8yKSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKE1hdGguZmxvb3IodGhpcy53aWR0aC8yKSsyMCwgTWF0aC5mbG9vcih0aGlzLmhlaWdodC8yKSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAvL2JvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgdGhpcy5oZWlnaHQtNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtNjAsIHRoaXMuaGVpZ2h0LTIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIC8vYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDIwLCB0aGlzLmhlaWdodC02MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDIwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCB0aGlzLmhlaWdodC0yMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAvL3RvcCByaWdodCBjb3JuZXJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy53aWR0aC0yMCwgNjApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLTIwLCAyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGgtNjAsIDIwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIC8vdG9wIGxlZnQgY29ybmVyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDIwLCA2MCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDIwLCAyMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDYwLCAyMCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdIdWQodGhpcy5jdHgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGl2ZUNhbnZhc0Rpc3BsYXkgPSBuZXcgTGl2ZUNhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBsaXZlQ2xvdWRDYW52YXNEaXNwbGF5ID0gbmV3IExpdmVDbG91ZENhbnZhc0Rpc3BsYXk7XG4gICAgbGl2ZUNsb3VkQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG4gICAgbGV0IHBsYW5lQ2FudmFzRGlzcGxheSA9IG5ldyBQbGFuZUNhbnZhc0Rpc3BsYXk7XG4gICAgcGxhbmVDYW52YXNEaXNwbGF5LmFuaW1hdGUoKTtcbiAgICBsZXQgcHJvcGVsbGVyQ2FudmFzRGlzcGxheSA9IG5ldyBQcm9wZWxsZXJDYW52YXNEaXNwbGF5O1xuICAgIHByb3BlbGxlckNhbnZhc0Rpc3BsYXkuYW5pbWF0ZSgpO1xuICAgIGxldCBodWRDYW52YXNEaXNwbGF5ID0gbmV3IEh1ZENhbnZhc0Rpc3BsYXk7XG4gICAgaHVkQ2FudmFzRGlzcGxheS5hbmltYXRlKCk7XG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
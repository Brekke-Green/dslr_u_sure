import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    
    const modal = document.getElementById("modal");
    const modalScreen = document.getElementById("modal-screen")
    const button = document.getElementById("button");
    const close = document.getElementById("close");
    
    button.onclick = function() {
        modal.style.display = "block";
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    modalScreen.onclick = function() {
        modal.style.display = "none";
    }

    let apertureSlider = document.getElementById("Aperture");
    let apertureRadius = apertureSlider.value;

    const apertureSettingFunction = function(sliderValue) {
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
                return 'broken'
        }
    }
    
    apertureSlider.oninput = function() {
        apertureRadius = this.value;
        document.getElementById("aperture-setting").innerHTML = apertureSettingFunction(this.value);
    };

    let shutterSlider = document.getElementById("Shutter-Speed");
    let shutterValue = shutterSlider.value;
    let shutterNumber = 0;

    const shutterSettingFunction = function(sliderValue) {
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
                return 'broken'
        }
    }

    shutterSlider.oninput = function() {
        shutterValue = this.value;
        shutterNumber = this.value;
        document.getElementById("shutter-setting").innerHTML = shutterSettingFunction(this.value);
    };

    class Aperture {
        constructor() {
            this.x = 150;
            this.y = 250;
            this.radius = apertureRadius;
            this.color = "#24311B";
        }

        drawAperture(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.strokeStyle = "#A2A56E";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update(ctx) {
            this.radius = apertureRadius;
            this.drawAperture(ctx);
        }
    }

    class Outline {
        constructor() {
            this.x = 150;
            this.y = 250;
            this.lensRadius = 70;
            this.color = '#0F1211';
        }

        drawLens(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.lensRadius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        drawBarrel(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.x-80, this.y+10);
            ctx.lineTo(this.x-80, this.y-180);
            ctx.lineTo(this.x+215, this.y-160);
            ctx.lineTo(this.x+215, this.y+40);
            ctx.lineTo(this.x-80, this.y+10);
            ctx.lineTo(this.x-80, this.y-180);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "#D6D6D4";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x-80, this.y-180);
            ctx.lineTo(this.x-60, this.y-200);
            ctx.lineTo(this.x+235, this.y-180);
            ctx.lineTo(this.x+215, this.y-160);
            ctx.lineTo(this.x-80, this.y-180);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "#ADABA7";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x+235, this.y-180);
            ctx.lineTo(this.x+235, this.y+20);
            ctx.lineTo(this.x+215, this.y+40);
            ctx.lineTo(this.x+215, this.y-160);
            ctx.lineTo(this.x+235, this.y-180);
            ctx.lineTo(this.x+235, this.y+20);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "#908F90";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x-53, this.y-53);
            ctx.lineTo(this.x, this.y-106);
            ctx.lineTo(this.x+106, this.y);
            ctx.lineTo(this.x+53, this.y+53);
            ctx.lineTo(this.x-53, this.y-53);
            ctx.strokeStyle = "#1F2021"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "#1F2021";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.lensRadius+5, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "#4A4A4A";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x+53, this.y-53, 75, (1/4) * Math.PI, (5/4)*Math.PI, true);
            ctx.strokeStyle = "darkslategray";
            ctx.stroke();
            ctx.fillStyle = "#1F2021";
            ctx.fill();
        }

        drawOutline(ctx) {
            this.drawBarrel(ctx);
            this.drawLens(ctx);
        }
    }

    class CameraCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("camera-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.Aperture = new Aperture;
            this.animate = this.animate.bind(this);
            this.Outline = new Outline;
        }
        
        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.Outline.drawOutline(this.ctx);
            this.Aperture.update(this.ctx);
            requestAnimationFrame(this.animate);
        }
    }

    class Shutter {
        constructor() {
            this.width= 470;
            this.height= 490;
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

        drawSensor(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.width-20, this.height-20);
            ctx.lineTo(this.width-20, this.height-140);
            ctx.lineTo(this.width-200, this.height-140);
            ctx.lineTo(this.width-200, this.height-20);
            ctx.lineTo(this.width-20, this.height-20);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "black";
            ctx.fill();
        }

        drawTopCurtain(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.width-20, this.height-150);
            ctx.lineTo(this.width-20, this.yTop);
            ctx.lineTo(this.width-200, this.yTop);
            ctx.lineTo(this.width-200, this.height-150);
            ctx.lineTo(this.width-20, this.height-150);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
        }

        drawBottomCurtain(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.width-20, this.height-10);
            ctx.lineTo(this.width-20, this.yBottom);
            ctx.lineTo(this.width-200, this.yBottom);
            ctx.lineTo(this.width-200, this.height-10);
            ctx.lineTo(this.width-20, this.height-10);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
        }

        update(ctx) {
            this.dY = Math.floor(this.shutter / 3);
            if (this.cycled === false && this.yBottom < this.yEnd) { 
                if ((this.yBottom + this.dY) > this.yEnd) {
                    this.yBottom = this.yEnd;
                } else {
                    this.yBottom += this.dY;
                }; 
            } else if (this.cycled === false && this.yBottom === this.yEnd) {
                if ((this.yTop + this.dY) > this.yEnd) {
                    this.yTop = this.yEnd;
                    this.cycled = true;
                } else {
                    this.yTop += this.dY;
                };
            }
            if (this.cycled === true && this.yBottom > this.yStart) {
                if ((this.yBottom - this.dY) < this.yStart) {
                    this.yBottom = this.yStart;
                    this.yTop = this.yStart;
                    this.cycled = false;
                } else {
                    this.yBottom -= this.dY;
                };
            }
            if (this.yTop === this.yEnd && this.yBottom === this.yStart) {
                this.yTop = this.yStart;
                this.cycled = false;
            }
            this.drawSensor(ctx);
            this.drawTopCurtain(ctx);
            this.drawBottomCurtain(ctx);
        }
    }

    class CameraShutterCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("camera-shutter-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.Shutter = new Shutter;
            this.drawShutter();
            this.animate = this.animate.bind(this);
        }

        drawShutter() {
            this.Shutter.drawSensor(this.ctx);
            this.Shutter.drawTopCurtain(this.ctx);
            this.Shutter.drawBottomCurtain(this.ctx);
        }
        
        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            // this.Shutter.drawSensor(this.ctx);
            // this.Shutter.drawTopCurtain(this.ctx);
            // this.Shutter.drawBottomCurtain(this.ctx);
            this.Shutter.shutter = shutterNumber;
            this.Shutter.update(this.ctx);
            requestAnimationFrame(this.animate);
        }
    }
    
    let cameraCanvasDisplay = new CameraCanvasDisplay;
    cameraCanvasDisplay.animate();
    let cameraShutterCanvasDisplay = new CameraShutterCanvasDisplay;
    cameraShutterCanvasDisplay.animate();

    class Plane  {
        constructor() {
            this.x = 240;
            this.y = 320;
            this.radius = 80;
            this.alpha = shutterValue;
        }

        drawFuselage(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y - 68, this.radius-40, 0, Math.PI * 2, true);
            ctx.strokeStyle = "black"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "silver";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.strokeStyle = "black"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius-20, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "#091017";
            ctx.fill();
        }

        drawWings(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + 5)
            ctx.lineTo(this.x + 240, this.y);
            ctx.lineTo(this.x + 240, this.y + 25);
            ctx.lineTo(this.x, this.y + 50);
            ctx.lineTo(this.x - 240, this.y + 25);
            ctx.lineTo(this.x - 240, this.y);
            ctx.lineTo(this.x, this.y + 5);
            ctx.strokeStyle = "black"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
        }

        drawPropeller(ctx) {
            
            // horizontal
            ctx.beginPath();
            ctx.moveTo(this.x-160, this.y-20);
            ctx.lineTo(this.x-160, this.y+20);
            ctx.lineTo(this.x+160, this.y+20);
            ctx.lineTo(this.x+160, this.y-20);
            ctx.lineTo(this.x-160, this.y-20);
            // ctx.strokeStyle = "black"
            // ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "darkslategray";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x-160, this.y-20);
            ctx.lineTo(this.x-160, this.y+20);
            ctx.lineTo(this.x-145, this.y+20);
            ctx.lineTo(this.x-145, this.y-20);
            ctx.lineTo(this.x-160, this.y-20);
            // ctx.strokeStyle = "black"
            // ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x+160, this.y-20);
            ctx.lineTo(this.x+160, this.y+20);
            ctx.lineTo(this.x+145, this.y+20);
            ctx.lineTo(this.x+145, this.y-20);
            ctx.lineTo(this.x+160, this.y-20);
            // ctx.strokeStyle = "black"
            // ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();

            // vertical

            ctx.beginPath();
            ctx.moveTo(this.x-20, this.y-160);
            ctx.lineTo(this.x+20, this.y-160);
            ctx.lineTo(this.x+20, this.y+160);
            ctx.lineTo(this.x-20, this.y+160);
            ctx.lineTo(this.x-20, this.y-160);
            // ctx.strokeStyle = "black"
            // ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "darkslategray";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x-20, this.y-160);
            ctx.lineTo(this.x+20, this.y-160);
            ctx.lineTo(this.x+20, this.y-145);
            ctx.lineTo(this.x-20, this.y-145);
            ctx.lineTo(this.x-20, this.y-160);
            // ctx.strokeStyle = "black"
            // ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x-20, this.y+160);
            ctx.lineTo(this.x+20, this.y+160);
            ctx.lineTo(this.x+20, this.y+145);
            ctx.lineTo(this.x-20, this.y+145);
            ctx.lineTo(this.x-20, this.y+160);
            // ctx.strokeStyle = "black"
            // ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();

            // hub
            ctx.beginPath();
            ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();
        }

        rotateProp(ctx) {
            // ctx.clearRect(0,0,this.width,this.height);
            ctx.fillStyle = "rgba(255, 255, 0, 0.1)"
            ctx.fillRect(this.x-160, this.y, 15, 40);
            this.shutterValue = shutterValue;
            this.shutterSpeed = `${12 / this.shutterValue}px`;
            ctx.filter = `blur(${this.shutterSpeed})`;
            this.drawPropeller(ctx);
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.PI / this.shutterValue);
            ctx.translate(-this.x, -this.y);
            // ctx.restore();
        }
    }

    class PlaneCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("plane-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.Plane = new Plane;
            this.animate = this.animate.bind(this);
            // this.Outline = new Outline;
        }

        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            // this.drawGrass(this.ctx);
            // this.drawSky(this.ctx);
            // this.Outline.drawOutline(this.ctx);
            this.Plane.drawWings(this.ctx);
            this.Plane.drawFuselage(this.ctx);
            // this.Plane.rotateProp(this.ctx);
            // requestAnimationFrame(this.animate);
        }
    }

    class PropellerCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("propeller-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.Plane = new Plane;
            this.apertureRadius = apertureRadius;
            this.animate = this.animate.bind(this);
        }

        animate() {
            this.ctx.clearRect(0,0,this.width,this.height);
            // this.ctx.fillStyle = "rgba(255, 255, 0, 0.1)"
            // this.ctx.fillRect(this.Plane.x-160, this.Plane.y, 15, 40);
            // this.drawGrass(this.ctx);
            // this.drawSky(this.ctx);
            // this.Outline.drawOutline(this.ctx);
            // this.Plane.drawFuselage(this.ctx);
            // this.Plane.drawPropeller(this.ctx);
            // ctx.save();
            this.Plane.rotateProp(this.ctx);
            // ctx.restore();
            requestAnimationFrame(this.animate);
        }
    }

    class LiveCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("background-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.apertureRadius = apertureRadius;
            this.animate = this.animate.bind(this);
            // this.Outline = new Outline;
        }

        drawGrass(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.width, this.height);
            ctx.lineTo(this.width, this.height-180);
            ctx.lineTo(this.width-this.width, this.height-180);
            ctx.lineTo(this.width-this.width, this.height);
            ctx.lineTo(this.width, this.height);
            ctx.strokeStyle = "darkgreen"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "green";
            ctx.fill();
        }

        drawSky(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.width, this.height-180);
            ctx.lineTo(this.width, this.height-this.height);
            ctx.lineTo(this.width-this.width, this.height-this.height);
            ctx.lineTo(this.width-this.width, this.height-180);
            ctx.lineTo(this.width, this.height-180);
            ctx.strokeStyle = "lightskyblue"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "deepskyblue";
            ctx.fill();
        }

        drawMountains(ctx) {
            ctx.beginPath();
            ctx.moveTo(0, this.height-180);
            ctx.lineTo(0, this.height-260);
            ctx.lineTo(60, this.height-320);
            ctx.lineTo(260, this.height-180);
            ctx.lineTo(0, this.height-180);
            ctx.strokeStyle = "darkgray"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "gray";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(60, this.height-320);
            ctx.lineTo(20, this.height-280);
            ctx.lineTo(40, this.height-260);
            ctx.lineTo(60, this.height-270);
            ctx.lineTo(100, this.height-260);
            ctx.lineTo(120, this.height-280);
            ctx.lineTo(60, this.height-320);
            ctx.strokeStyle = "white"
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
        }

        update(ctx) {
            this.apertureRadius = `${apertureRadius / 25}px`;
            ctx.filter = `blur(${this.apertureRadius})`;
            this.drawSky(ctx);
            this.drawGrass(ctx);
            this.drawMountains(ctx);
        }
        
        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            // this.drawGrass(this.ctx);
            // this.drawSky(this.ctx);
            this.update(this.ctx)
            // this.Outline.drawOutline(this.ctx);
            // this.Plane.drawFuselage(this.ctx);
            // this.Plane.rotateProp(this.ctx);
            requestAnimationFrame(this.animate);
        }
    }

    class LiveCloudCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("background-cloud-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.apertureRadius = apertureRadius;
            this.animate = this.animate.bind(this);
            // this.Outline = new Outline;
        }

        drawCloud(ctx) {
            let x = 240;
            let y = 100;

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
            ctx.fill()
        }

        update(ctx) {
            this.apertureRadius = `${apertureRadius / 50}px`;
            ctx.filter = `blur(${this.apertureRadius})`;
            this.drawCloud(ctx);
        }
        
        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.update(this.ctx)
            requestAnimationFrame(this.animate);
        }
    }

    class HudCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("hud-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.apertureRadius = apertureRadius;
            this.animate = this.animate.bind(this);
            // this.Outline = new Outline;
        }

        drawHud(ctx) {
            // crosshair
            ctx.beginPath();
            ctx.moveTo(Math.floor(this.width/2), Math.floor(this.height/2)-20);
            ctx.lineTo(Math.floor(this.width/2), Math.floor(this.height/2)+20);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(Math.floor(this.width/2)-20, Math.floor(this.height/2));
            ctx.lineTo(Math.floor(this.width/2)+20, Math.floor(this.height/2));
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();

            //bottom right corner
            ctx.beginPath();
            ctx.moveTo(this.width-20, this.height-60);
            ctx.lineTo(this.width-20, this.height-20);
            ctx.lineTo(this.width-60, this.height-20);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();

            //bottom left corner
            ctx.beginPath();
            ctx.moveTo(20, this.height-60);
            ctx.lineTo(20, this.height-20);
            ctx.lineTo(60, this.height-20);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();

            //top right corner
            ctx.beginPath();
            ctx.moveTo(this.width-20, 60);
            ctx.lineTo(this.width-20, 20);
            ctx.lineTo(this.width-60, 20);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();

            //top left corner
            ctx.beginPath();
            ctx.moveTo(20, 60);
            ctx.lineTo(20, 20);
            ctx.lineTo(60, 20);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();
        }

        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.drawHud(this.ctx);
            requestAnimationFrame(this.animate);
        }
    }

    let liveCanvasDisplay = new LiveCanvasDisplay;
    liveCanvasDisplay.animate();
    let liveCloudCanvasDisplay = new LiveCloudCanvasDisplay;
    liveCloudCanvasDisplay.animate();
    let planeCanvasDisplay = new PlaneCanvasDisplay;
    planeCanvasDisplay.animate();
    let propellerCanvasDisplay = new PropellerCanvasDisplay;
    propellerCanvasDisplay.animate();
    let hudCanvasDisplay = new HudCanvasDisplay;
    hudCanvasDisplay.animate();
});


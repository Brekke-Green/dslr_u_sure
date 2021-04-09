import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    
    let apertureSlider = document.getElementById("Aperture");
    let apertureRadius = apertureSlider.value;

    apertureSlider.oninput = function() {
        apertureRadius = this.value;
    };

    let shutterSlider = document.getElementById("Shutter-Speed");
    let shutterValue = shutterSlider.value;

    shutterSlider.oninput = function() {
        shutterValue = this.value;
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
    
    let cameraCanvasDisplay = new CameraCanvasDisplay;
    cameraCanvasDisplay.animate();

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
            this.shutterValue = shutterValue;
            debugger
            this.drawPropeller(ctx);
            ctx.save();
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
            this.animate = this.animate.bind(this);
        }

        animate() {
            this.ctx.clearRect(0,0,this.width,this.height);

            this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
            this.ctx.fillRect(this.Plane.x-160, this.Plane.y, 15, 40);
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
            let x = 240;
            let y = 100;

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
            this.apertureRadius = `${apertureRadius / 25}px`;
            ctx.filter = `blur(${this.apertureRadius})`;
            this.drawSky(ctx);
            this.drawGrass(ctx);
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

    let liveCanvasDisplay = new LiveCanvasDisplay;
    liveCanvasDisplay.animate();
    let planeCanvasDisplay = new PlaneCanvasDisplay;
    planeCanvasDisplay.animate();
    let propellerCanvasDisplay = new PropellerCanvasDisplay;
    propellerCanvasDisplay.animate();
});


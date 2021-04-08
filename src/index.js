import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    
    let apertureSlider = document.getElementById("Aperture");
    let apertureRadius = apertureSlider.value;

    apertureSlider.oninput = function() {
        apertureRadius = this.value;
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
            ctx.lineTo(this.x+205, this.y-170);
            ctx.lineTo(this.x+205, this.y+30);
            ctx.lineTo(this.x-80, this.y+10);
            ctx.lineTo(this.x-80, this.y-180);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "#D6D6D4";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x-80, this.y-180);
            ctx.lineTo(this.x-50, this.y-190);
            ctx.lineTo(this.x+235, this.y-180);
            ctx.lineTo(this.x+205, this.y-170);
            ctx.lineTo(this.x-80, this.y-180);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "#ADABA7";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.x+235, this.y-180);
            ctx.lineTo(this.x+235, this.y+20);
            ctx.lineTo(this.x+205, this.y+30);
            ctx.lineTo(this.x+205, this.y-170);
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
        }

        drawFucilage(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius-20, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "darkslategray";
            ctx.fill();
        }

        drawPropeller(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();

            // ctx.beginPath();
            // ctx.arc(this.x, this.y, this.radius-20, 0, Math.PI * 2, true);
            // ctx.closePath();
            // ctx.fillStyle = "darkslategray";
            // ctx.fill();
        }
    }

    class LiveCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("live-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.Plane = new Plane;
            // this.animate = this.animate.bind(this);
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
        
        animate() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.drawGrass(this.ctx);
            this.drawSky(this.ctx);
            // this.Outline.drawOutline(this.ctx);
            this.Plane.drawFucilage(this.ctx);
            this.Plane.drawPropeller(this.ctx);

            // requestAnimationFrame(this.animate);
        }
    }

    let liveCanvasDisplay = new LiveCanvasDisplay;
    liveCanvasDisplay.animate();
});


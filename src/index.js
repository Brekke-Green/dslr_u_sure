import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    
    let apertureSlider = document.getElementById("Aperture");
    let apertureRadius = apertureSlider.value;

    apertureSlider.oninput = function() {
        apertureRadius = this.value;
    };

    class Aperture {
        constructor() {
            this.x = 100;
            this.y = 300;
            this.radius = apertureRadius;
            this.color = 'black';
        }

        drawAperture(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
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
            this.x = 100;
            this.y = 300;
            this.lensRadius = 70;
            this.color = 'slategray';
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
            ctx.arc(this.x, this.y, this.lensRadius+5, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = 'black';
            ctx.fill();

            ctx.moveTo(this.x-50, this.y-50);
            ctx.lineTo(this.x-50, this.y-200);
            ctx.lineTo(this.x+250, this.y-200);
            ctx.lineTo(this.x+250, this.y+50);
            ctx.lineTo(this.x+50, this.y+50);
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.fill();

            ctx.moveTo(this.x-53, this.y-53);
            ctx.lineTo(this.x, this.y-106);
            ctx.lineTo(this.x+106, this.y);
            ctx.lineTo(this.x+53, this.y+53);
            ctx.lineTo(this.x-53, this.y-53);
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x+53, this.y-53, 75, (1/4) * Math.PI, (5/4)*Math.PI, true);
            ctx.stroke();
            ctx.fillStyle = "black";
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
            debugger
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.Outline.drawOutline(this.ctx);
            this.Aperture.update(this.ctx);
            requestAnimationFrame(this.animate);
        }
    }
    
    let cameraCanvasDisplay = new CameraCanvasDisplay;
    debugger
    cameraCanvasDisplay.animate();
});


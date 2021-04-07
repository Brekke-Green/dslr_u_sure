import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    
    let apertureSlider = document.getElementById("Aperture");
    let apertureRadius = apertureSlider.value;

    apertureSlider.oninput = function() {
        apertureRadius = this.value;
    };

    class Ball {
        constructor() {
            this.x = 100;
            this.y = 100;
            this.radius = apertureRadius;
            this.color = 'black';
        }

        drawLive(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update(ctx) {
            this.radius = apertureRadius;
            this.drawLive(ctx);
        }
    }

    class ApertureCanvasDisplay {
        constructor() {
            this.canvas = document.getElementById("live-canvas");
            this.ctx = this.canvas.getContext('2d');
            this.width= 480;
            this.height= 500;        
            this.Ball = new Ball;
            this.animate = this.animate.bind(this);
        }
        
        animate() {
            debugger
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.Ball.update(this.ctx);
            requestAnimationFrame(this.animate);
        }
    }
    
    let apertureCanvasDisplay = new ApertureCanvasDisplay;
    debugger
    apertureCanvasDisplay.animate();
});


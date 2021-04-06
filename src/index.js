import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    
    let apertureSlider = document.getElementById("Aperture");
    let apertureRadius = apertureSlider.value;
    
    // Update the current slider value (each time you drag the slider handle)
    // slider.oninput = function() {
    //   output.innerHTML = this.value;
    // }
    
    let liveCanvas = document.getElementById("live-canvas");
    let ctx = liveCanvas.getContext('2d');
    // let photoCanvas = document.getElementById("photo-canvas");
    // let ctx2 = photoCanvas.getContext('2d');

    class Ball {
        constructor() {
            this.x = 100;
            this.y = 100;
            this.radius = apertureRadius;
            this.color = 'blue';
        }

        drawLive() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    
    // let ball2 = {
    //     x: 100,
    //     y: 100,
    //     radius: apertureRadius,
    //     color: 'blue',
    //     drawPhoto: () => {
    //         ctx2.beginPath();
    //         ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    //         ctx2.closePath();
    //         ctx2.fillStyle = this.color;
    //         ctx2.fill();
    //     }
    // };
    

    let ball = new Ball;
    ball.drawLive();  
    // ball2.drawPhoto();

    requestAnimationFrame(ball.drawLive);

});


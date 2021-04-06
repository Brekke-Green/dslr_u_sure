import "./styles/index.scss";


document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpack is working");
    let canvas = document.getElementById("app-canvas");
    let ctx = canvas.getContext('2d');

    let ball = {
        x: 100,
        y: 100,
        radius: 25,
        color: 'blue',
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    
    ball.draw();

});
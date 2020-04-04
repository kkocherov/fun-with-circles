function Graphics(context) {
    return {
        drawCircle(circle) {
            context.beginPath();
            context.arc(circle.position.x, circle.position.y, circle.radius, 0, 2 * Math.PI);
            context.stroke();
        },

        drawVector(from, to) {
            context.beginPath();
            context.moveTo(from.x, from.y);
            context.lineTo(to.x, to.y);
            context.stroke();
        },

        renderScene(circles, gunFrom, gunTo) {
            context.canvas.width = window.innerWidth;
            context.canvas.height = window.innerHeight;

            for (let i = 0; i < circles.length; i++) {
                this.drawCircle(circles[i]);
            }

            this.drawVector(gunFrom, gunTo);
        }
    }
}
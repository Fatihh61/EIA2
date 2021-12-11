"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Cloud {
        startingPosition;
        size;
        translateX;
        translateY;
        velocity;
        gradient;
        path;
        constructor() {
            this.startingPosition = new L09_Herbstwiese.Vector(550, 100);
            this.size = new L09_Herbstwiese.Vector(200, 75);
            this.velocity = new L09_Herbstwiese.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            let offset = new L09_Herbstwiese.Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.startingPosition.add(offset);
            console.log(this.startingPosition);
            if (this.startingPosition.x < 0) {
                this.startingPosition.x += L09_Herbstwiese.crc2.canvas.width;
            }
            if (this.startingPosition.x > L09_Herbstwiese.crc2.canvas.width) {
                this.startingPosition.x -= L09_Herbstwiese.crc2.canvas.width;
            }
        }
        draw() {
            //console.log("wolke zeichnen");
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L09_Herbstwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Herbstwiese.crc2.save();
            L09_Herbstwiese.crc2.translate(this.startingPosition.x, this.startingPosition.y);
            L09_Herbstwiese.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_Herbstwiese.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random()) * this.size.y;
                L09_Herbstwiese.crc2.translate(x, y);
                L09_Herbstwiese.crc2.fill(particle);
                L09_Herbstwiese.crc2.restore();
            }
            L09_Herbstwiese.crc2.restore();
        }
    }
    L09_Herbstwiese.Cloud = Cloud;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Cloud.js.map
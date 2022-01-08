"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Cloud extends L10_HerbstwiesePolymorphie.Moveable {
        size;
        constructor() {
            super(550, 100);
            this.size = new L10_HerbstwiesePolymorphie.Vector(200, 75);
        }
        moveCloud() {
            super.move(1 / 50, 0);
        }
        draw() {
            //console.log("wolke zeichnen");
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L10_HerbstwiesePolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_HerbstwiesePolymorphie.crc2.save();
            L10_HerbstwiesePolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_HerbstwiesePolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random()) * this.size.y;
                L10_HerbstwiesePolymorphie.crc2.translate(x, y);
                L10_HerbstwiesePolymorphie.crc2.fill(particle);
                L10_HerbstwiesePolymorphie.crc2.restore();
            }
            L10_HerbstwiesePolymorphie.crc2.restore();
        }
    }
    L10_HerbstwiesePolymorphie.Cloud = Cloud;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Cloud.js.map
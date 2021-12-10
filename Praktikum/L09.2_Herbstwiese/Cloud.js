"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Cloud {
        position;
        translateX;
        translateY;
        velocity;
        gradient;
        path;
        constructor(_startingPositionX, _startingPositionY, _translateX, _translateY, _gradient, _path) {
            this.position = new L09_Herbstwiese.Vector(_startingPositionX, _startingPositionY);
            this.velocity = new L09_Herbstwiese.Vector(0, 0);
            this.velocity.random(100, 200);
            this.translateX = _translateX;
            this.translateY = _translateY;
            this.gradient = _gradient;
            this.path = _path;
        }
        move(_timeslice) {
            let offset = new L09_Herbstwiese.Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position);
            if (this.position.x < 0) {
                this.position.x += L09_Herbstwiese.crc2.canvas.width;
            }
            if (this.position.x > L09_Herbstwiese.crc2.canvas.width) {
                this.position.x -= L09_Herbstwiese.crc2.canvas.width;
            }
        }
        draw() {
            //Gradient für die Wolkenpartikel
            let gradient = L09_Herbstwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, 50);
            gradient.addColorStop(0, "hsla(243, 0%, 100%, 1)");
            gradient.addColorStop(1, "hsla(243, 0%, 100%, 0.1)");
            let cloudsPath = new Path2D();
            for (let i = 100; i > 0; i--) {
                let numbX = Math.random() * 100 + 650;
                let numbY = Math.random() * 100 + 50;
                let translateX = Math.random() * (-4.5) + (-3.5);
                let translateY = Math.random() * (-0.2);
                L09_Herbstwiese.crc2.save();
                this.path.arc(this.position.x, this.position.y, 15, 0, 2 * Math.PI);
                L09_Herbstwiese.crc2.beginPath();
                L09_Herbstwiese.crc2.fillStyle = this.gradient;
                L09_Herbstwiese.crc2.translate(this.translateX, this.translateY);
                L09_Herbstwiese.crc2.fill(this.path);
                L09_Herbstwiese.crc2.stroke();
                L09_Herbstwiese.crc2.closePath();
                L09_Herbstwiese.crc2.restore();
            }
        }
    }
    L09_Herbstwiese.Cloud = Cloud;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Cloud.js.map
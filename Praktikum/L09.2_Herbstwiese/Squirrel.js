"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Squirrel {
        position;
        velocity;
        constructor() {
            this.position = new L09_Herbstwiese.Vector(Math.random() * L09_Herbstwiese.crc2.canvas.width, Math.random() * 100 + 450);
            this.velocity = new L09_Herbstwiese.Vector(0, 0);
            this.velocity.randomForSquirrel(100, 200);
        }
        move(_timeslice) {
            console.log("MoveMethode");
            let offset = new L09_Herbstwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L09_Herbstwiese.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L09_Herbstwiese.crc2.canvas.height;
            }
            if (this.position.x > L09_Herbstwiese.crc2.canvas.width) {
                this.position.x -= L09_Herbstwiese.crc2.canvas.width;
            }
            if (this.position.y > L09_Herbstwiese.crc2.canvas.height) {
                this.position.y -= L09_Herbstwiese.crc2.canvas.height;
            }
        }
        draw() {
            L09_Herbstwiese.crc2.save();
            //let positionXSquirrel: number = Math.random() * 800;
            //let positionYSquirrel: number = Math.random() * 100 + 450;
            //Schwanz
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            //crc2.arc(positionXSquirrel - 30, positionYSquirrel + 12, 5, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            //Arm2
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            //Bein2
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            //Körper
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            //Kopf
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "black";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            //Arm1
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            //Bein1
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            //crc2.ellipse(positionXSquirrel + 12, positionYSquirrel + 50, 10, 4, Math.PI / -10, 0, 2 * Math.PI);
            L09_Herbstwiese.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            L09_Herbstwiese.crc2.restore();
        }
    }
    L09_Herbstwiese.Squirrel = Squirrel;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Squirrel.js.map
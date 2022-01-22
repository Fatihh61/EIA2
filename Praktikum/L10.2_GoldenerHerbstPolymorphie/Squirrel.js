"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Squirrel extends L10_HerbstwiesePolymorphie.Moveable {
        hitbox = 1.0;
        constructor() {
            super(Math.random() * L10_HerbstwiesePolymorphie.crc2.canvas.width, Math.random() * 100 + 450);
            this.velocity.randomForSquirrel(100, 200);
        }
        // moveSquirrel(): void {
        //     super.move(1 / 180, 0);
        // }
        draw() {
            L10_HerbstwiesePolymorphie.crc2.save();
            //let positionXSquirrel: number = Math.random() * 800;
            //let positionYSquirrel: number = Math.random() * 100 + 450;
            //Schwanz
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            //crc2.arc(positionXSquirrel - 30, positionYSquirrel + 12, 5, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            //Arm2
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            //Bein2
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            //Körper
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            //Kopf
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "black";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            //Arm1
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            //Bein1
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            //crc2.ellipse(positionXSquirrel + 12, positionYSquirrel + 50, 10, 4, Math.PI / -10, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            L10_HerbstwiesePolymorphie.crc2.restore();
        }
        changePosition(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        isHitFromCage(_hotspot) {
            let hitsize = this.hitbox;
            let difference = L10_HerbstwiesePolymorphie.Vector.getDifference(_hotspot, this.position);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L10_HerbstwiesePolymorphie.Squirrel = Squirrel;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Squirrel.js.map
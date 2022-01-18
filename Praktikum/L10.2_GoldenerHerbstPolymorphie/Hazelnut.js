"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Hazelnut extends L10_HerbstwiesePolymorphie.Moveable {
        constructor(_x, _y) {
            super(_x, _y);
            this.velocity.random(0, 0);
        }
        draw() {
            L10_HerbstwiesePolymorphie.crc2.save();
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            L10_HerbstwiesePolymorphie.crc2.fillStyle = "black";
            L10_HerbstwiesePolymorphie.crc2.fill();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            L10_HerbstwiesePolymorphie.crc2.restore();
        }
    }
    L10_HerbstwiesePolymorphie.Hazelnut = Hazelnut;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Hazelnut.js.map
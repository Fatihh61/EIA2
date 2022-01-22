"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Cage {
        positionX;
        positionY;
        constructor(_x, _y) {
            this.positionX = _x;
            this.positionY = _y;
        }
        draw() {
            // crc2.save();
            // crc2.beginPath();
            // crc2.moveTo(_positionX, _positionY);
            // crc2.lineTo(_positionX, _positionY + 50);
            // crc2.lineTo(_positionX + 100, _positionY + 50);
            // crc2.lineTo(_positionX + 100, _positionY);
            // crc2.moveTo(_positionX - 100, _positionY);
            // crc2.strokeStyle = "black";
            // crc2.lineWidth = 5;
            // crc2.stroke();
            // crc2.closePath();
            // crc2.restore();
            L10_HerbstwiesePolymorphie.crc2.save();
            L10_HerbstwiesePolymorphie.crc2.beginPath();
            L10_HerbstwiesePolymorphie.crc2.moveTo(this.positionX, this.positionY);
            L10_HerbstwiesePolymorphie.crc2.lineTo(this.positionX, this.positionY + 50);
            L10_HerbstwiesePolymorphie.crc2.lineTo(this.positionX + 100, this.positionY + 50);
            L10_HerbstwiesePolymorphie.crc2.lineTo(this.positionX + 100, this.positionY);
            L10_HerbstwiesePolymorphie.crc2.moveTo(this.positionX - 100, this.positionY);
            L10_HerbstwiesePolymorphie.crc2.strokeStyle = "black";
            L10_HerbstwiesePolymorphie.crc2.lineWidth = 5;
            L10_HerbstwiesePolymorphie.crc2.stroke();
            L10_HerbstwiesePolymorphie.crc2.closePath();
            L10_HerbstwiesePolymorphie.crc2.restore();
        }
    }
    L10_HerbstwiesePolymorphie.Cage = Cage;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Cage.js.map
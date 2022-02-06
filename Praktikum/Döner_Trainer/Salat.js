"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Salat extends Döner_Trainer.Vegetable {
        constructor() {
            super();
        }
        draw(_x, _y) {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.strokeStyle = "white";
            Döner_Trainer.crc2.fillStyle = "green";
            Döner_Trainer.crc2.arc(_x, _y, 8, 0, Math.PI * 2);
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Salat = Salat;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Salat.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Mais extends Döner_Trainer.Vegetable {
        constructor() {
            super();
        }
        draw(_x, _y) {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.strokeStyle = "black";
            Döner_Trainer.crc2.fillStyle = "yellow";
            Döner_Trainer.crc2.arc(_x, _y, 3, 0, Math.PI * 2);
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Mais = Mais;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Mais.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Salad extends Döner_Trainer.Vegetable {
        constructor() {
            super();
        }
        draw(_x, _y) {
            // crc2.save();
            // crc2.beginPath();
            // crc2.lineWidth = 2;
            // crc2.strokeStyle = "white";
            // crc2.fillStyle = "green";
            // crc2.arc(_x, _y, 8, 0, Math.PI * 2)
            // crc2.stroke();
            // crc2.fill();
            // crc2.closePath();
            // crc2.restore();  
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.fillStyle = "green";
            Döner_Trainer.crc2.strokeStyle = "black";
            Döner_Trainer.crc2.strokeRect(_x, _y, 75, 119);
            Döner_Trainer.crc2.fillRect(_x, _y, 75, 119);
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Salad = Salad;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Salad.js.map
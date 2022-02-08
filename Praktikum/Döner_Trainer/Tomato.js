"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Tomato extends Döner_Trainer.Vegetable {
        constructor(_ingredientsamount, _resourceAmount) {
            super();
            this.ingredientsAmount = _ingredientsamount;
            this.resourceAmount = _resourceAmount;
        }
        draw() {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.fillStyle = "red";
            Döner_Trainer.crc2.strokeStyle = "black";
            Döner_Trainer.crc2.strokeRect(200, 353, 75, 119);
            Döner_Trainer.crc2.fillRect(200, 353, 75, 119);
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Tomato = Tomato;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Tomato.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Salad extends Döner_Trainer.Vegetable {
        constructor(_ingredientsamount, _resourceAmount) {
            super();
            this.ingredientsAmount = _ingredientsamount;
            this.resourceAmount = _resourceAmount;
        }
        draw() {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 2;
            Döner_Trainer.crc2.fillStyle = "green";
            Döner_Trainer.crc2.strokeStyle = "black";
            Döner_Trainer.crc2.strokeRect(400, 353, 75, 119);
            Döner_Trainer.crc2.fillRect(400, 353, 75, 119);
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Salad = Salad;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Salad.js.map
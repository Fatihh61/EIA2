"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Human {
        position;
        velocity;
        state;
        constructor(_x, _y) {
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw() {
            //Körper des Smiley
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.lineWidth = 3;
            Döner_Trainer.crc2.fillStyle = "#ffd90f";
            Döner_Trainer.crc2.strokeStyle = "black";
            Döner_Trainer.crc2.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2);
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.closePath();
            //Linkes Auge des Smiley
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.fillStyle = "black";
            Döner_Trainer.crc2.arc(this.position.x - 8, this.position.y - 8, 5, 0, Math.PI * 2);
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
            //Rechtes Auge des Smiley
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.fillStyle = "black";
            Döner_Trainer.crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, Math.PI * 2);
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
            //Mund des Smiley
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.fillStyle = "black";
            Döner_Trainer.crc2.moveTo(this.position.x - 5, this.position.y + 8);
            Döner_Trainer.crc2.lineTo(this.position.x + 5, this.position.y + 8);
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.stroke();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore;
        }
    }
    Döner_Trainer.Human = Human;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Human.js.map
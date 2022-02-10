"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Human {
        position;
        velocity;
        motivation;
        state;
        constructor(_x, _y, _motivation) {
            this.motivation = _motivation;
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            // this.velocity.random(100, 200);
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
            if (this.motivation >= 66) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = 'black';
                Döner_Trainer.crc2.arc(this.position.x, this.position.y + 5, 5, 0, -1 * Math.PI);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            else if (this.motivation >= 33 && this.motivation < 66) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.fillStyle = "black";
                Döner_Trainer.crc2.moveTo(this.position.x - 5, this.position.y + 8);
                Döner_Trainer.crc2.lineTo(this.position.x + 5, this.position.y + 8);
                Döner_Trainer.crc2.fill();
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            else if (this.motivation <= 33) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = 'black';
                Döner_Trainer.crc2.lineWidth = 2;
                Döner_Trainer.crc2.arc(this.position.x, this.position.y + 5, 5, 0, -1 * Math.PI, true);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            // //Mund des Smiley
            // crc2.save();
            // crc2.beginPath();
            // crc2.fillStyle = "black";
            // crc2.moveTo(this.position.x - 5, this.position.y + 8)
            // crc2.lineTo(this.position.x + 5, this.position.y + 8)
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();
            // crc2.restore;
        }
    }
    Döner_Trainer.Human = Human;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Human.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Human {
        position;
        velocity;
        mood;
        state;
        constructor(_x, _y, _mood) {
            this.mood = _mood;
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
            if (this.mood > 0) {
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
            }
            else if (this.mood <= 0) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.fillStyle = "black";
                Döner_Trainer.crc2.moveTo(this.position.x - 12, this.position.y - 12);
                Döner_Trainer.crc2.lineTo(this.position.x - 7, this.position.y - 7);
                Döner_Trainer.crc2.moveTo(this.position.x - 12, this.position.y - 7);
                Döner_Trainer.crc2.lineTo(this.position.x - 7, this.position.y - 12);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
                //Rechtes Auge des Smiley
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.fillStyle = "black";
                Döner_Trainer.crc2.moveTo(this.position.x + 12, this.position.y - 12);
                Döner_Trainer.crc2.lineTo(this.position.x + 7, this.position.y - 7);
                Döner_Trainer.crc2.moveTo(this.position.x + 12, this.position.y - 7);
                Döner_Trainer.crc2.lineTo(this.position.x + 7, this.position.y - 12);
                // crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, Math.PI * 2)
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            //Mund des Smiley
            if (this.mood >= 66) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.arc(this.position.x, this.position.y + 5, 5, 0, -1 * Math.PI);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            else if (this.mood >= 33 && this.mood < 66) {
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
            else if (this.mood <= 33 && this.mood > 0) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.lineWidth = 2;
                Döner_Trainer.crc2.arc(this.position.x, this.position.y + 5, 5, 0, -1 * Math.PI, true);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            else if (this.mood <= 0) {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.fillStyle = "black";
                Döner_Trainer.crc2.lineWidth = 2;
                Döner_Trainer.crc2.arc(this.position.x, this.position.y + 5, 5, 0, Math.PI * 2);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.fill();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += Döner_Trainer.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Döner_Trainer.crc2.canvas.height;
            }
            if (this.position.x > Döner_Trainer.crc2.canvas.width) {
                this.position.x -= Döner_Trainer.crc2.canvas.width;
            }
            if (this.position.y > Döner_Trainer.crc2.canvas.height) {
                this.position.y -= Döner_Trainer.crc2.canvas.height;
            }
        }
    }
    Döner_Trainer.Human = Human;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Human.js.map
namespace Döner_Trainer {

    export class Human {

        public position: Vector;
        public velocity: Vector;
        public mood: number;

        constructor(_mood: number) {

            this.mood = _mood;
        }

        public draw(): void {

            //Körper des Smiley
            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 3;
            crc2.fillStyle = "#ffd90f";
            crc2.strokeStyle = "black";
            crc2.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //Linkes Auge des Smiley

            if (this.mood > 0) {

                crc2.save();

                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.position.x - 8, this.position.y - 8, 5, 0, Math.PI * 2);
                crc2.fill();
                crc2.closePath();

                crc2.restore();

                //Rechtes Auge des Smiley
                crc2.save();

                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, Math.PI * 2);
                crc2.fill();
                crc2.closePath();

                crc2.restore();




            } else if (this.mood <= 0) {

                crc2.save();

                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.moveTo(this.position.x - 12, this.position.y - 12);
                crc2.lineTo(this.position.x - 7, this.position.y - 7);
                crc2.moveTo(this.position.x - 12, this.position.y - 7);
                crc2.lineTo(this.position.x - 7, this.position.y - 12);
                crc2.stroke();
                crc2.closePath();

                crc2.restore();

                //Rechtes Auge des Smiley
                crc2.save();

                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.moveTo(this.position.x + 12, this.position.y - 12);
                crc2.lineTo(this.position.x + 7, this.position.y - 7);
                crc2.moveTo(this.position.x + 12, this.position.y - 7);
                crc2.lineTo(this.position.x + 7, this.position.y - 12);
                // crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, Math.PI * 2)
                crc2.stroke();
                crc2.closePath();

                crc2.restore();

            }


            //Mund des Smiley
            if (this.mood >= 66) {

                crc2.save();

                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.arc(this.position.x, this.position.y + 5, 5, 0, -1 * Math.PI);
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            } else if (this.mood >= 33 && this.mood < 66) {

                crc2.save();

                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.moveTo(this.position.x - 5, this.position.y + 8);
                crc2.lineTo(this.position.x + 5, this.position.y + 8);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            } else if (this.mood <= 33 && this.mood > 0) {

                crc2.save();

                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.lineWidth = 2;
                crc2.arc(this.position.x, this.position.y + 5, 5, 0, -1 * Math.PI, true);
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            } else if (this.mood <= 0) {

                crc2.save();

                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.lineWidth = 2;
                crc2.arc(this.position.x, this.position.y + 5, 5, 0, Math.PI * 2);
                crc2.stroke();
                crc2.fill();
                crc2.closePath();

                crc2.restore();
            }
        }
    }
}
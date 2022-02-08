namespace Döner_Trainer {

    export class Human {

        position: Vector;
        velocity: Vector;
        state: number;

        constructor(_x: number, _y: number) {

            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);


        }

        draw(): void {

            //Körper des Smiley
            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 3;
            crc2.fillStyle = "#ffd90f";
            crc2.strokeStyle = "black";
            crc2.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2)
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //Linkes Auge des Smiley
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x -8, this.position.y - 8, 5, 0, Math.PI * 2)
            crc2.fill();
            crc2.closePath();

            crc2.restore();

            //Rechtes Auge des Smiley
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, Math.PI * 2)
            crc2.fill();
            crc2.closePath();

            crc2.restore();

            //Mund des Smiley
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(this.position.x - 5, this.position.y + 8)
            crc2.lineTo(this.position.x + 5, this.position.y + 8)
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore;
        }
    }
}
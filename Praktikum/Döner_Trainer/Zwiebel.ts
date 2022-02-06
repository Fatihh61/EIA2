namespace Döner_Trainer {

    export class Zwiebel extends Vegetable {

        constructor() {

            super()
        }

        draw(_x: number, _y: number): void {

            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.fillStyle = "violet";
            crc2.arc(_x, _y, 6, 0, Math.PI * 2)
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.restore();            
        }
    }








}
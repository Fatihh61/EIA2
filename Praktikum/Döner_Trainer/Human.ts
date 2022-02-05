namespace Döner_Trainer {

    export class Human {

        public position: Vector;
        velocity: Vector;
        state: number;

        constructor() {


        }

        draw(_x: number, _y: number): void {

            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 3;
            crc2.fillStyle = "#ffd90f";
            crc2.strokeStyle = "black";
            crc2.arc(_x, _y, 20, 0, Math.PI * 2)
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x -8, _y - 8, 5, 0, Math.PI * 2)
            crc2.fill();
            crc2.closePath();

            crc2.restore();

            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 8, _y - 8, 5, 0, Math.PI * 2)
            crc2.fill();
            crc2.closePath();

            crc2.restore();

            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(_x - 5, _y + 8)
            crc2.lineTo(_x + 5, _y + 8)
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore;
        }



    }













}
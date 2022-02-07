namespace Döner_Trainer {

    export class Salad extends Vegetable {

        constructor() {

            super()
        }

        draw(_x: number, _y: number): void {

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
            
            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.fillStyle = "green";
            crc2.strokeStyle = "black";
            crc2.strokeRect(_x, _y, 75, 119);
            crc2.fillRect(_x, _y, 75, 119);
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
    }
}
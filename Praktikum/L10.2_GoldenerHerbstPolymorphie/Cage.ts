namespace L10_HerbstwiesePolymorphie {

    export class Cage {

        positionX: number;
        positionY: number;

        constructor(_x: number, _y: number) {

            this.positionX = _x;
            this.positionY = _y;
        }

        public draw(): void {

            // crc2.save();
            // crc2.beginPath();
            // crc2.moveTo(_positionX, _positionY);
            // crc2.lineTo(_positionX, _positionY + 50);
            // crc2.lineTo(_positionX + 100, _positionY + 50);
            // crc2.lineTo(_positionX + 100, _positionY);
            // crc2.moveTo(_positionX - 100, _positionY);
            // crc2.strokeStyle = "black";
            // crc2.lineWidth = 5;
            // crc2.stroke();
            // crc2.closePath();
            // crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.positionX, this.positionY);
            crc2.lineTo(this.positionX, this.positionY + 50);
            crc2.lineTo(this.positionX + 100, this.positionY + 50);
            crc2.lineTo(this.positionX + 100, this.positionY);
            crc2.moveTo(this.positionX - 100, this.positionY);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }

    }

}
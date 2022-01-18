namespace L10_HerbstwiesePolymorphie {

    export class Hazelnut extends Moveable {

        constructor(_x: number, _y: number) {

            super(_x, _y);

            this.velocity.random(0, 0);
        }

        public draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

    }

}
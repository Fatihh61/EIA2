namespace L10_HerbstwiesePolymorphie {

    export class Leaf extends Moveable {
        
        private color: string;
        private type: number;

        constructor(_color: string, _type: number) {

            super(Math.random() * crc2.canvas.width, 0);
            
            this.velocity.randomForLeaf(100, 50);
            this.color = _color;
            this.type = _type;

        }

        public move(): void {

            super.move(1 / 50, this.velocity.y);
        }


        public draw(): void {
            this.typeOfLeaf(this.type, this.color, this.position.x, this.position.y);
        }

        private typeOfLeaf(_typeOfLeaf: number, _colorOfLeaf: string, _positionX: number, _positionY: number): void {

            crc2.fillStyle = _colorOfLeaf;


            switch (_typeOfLeaf) {
                case 1:
                    drawLeaf1();
                    break;
                default:
                    drawLeaf2();
            }

            function drawLeaf1(): void {

                crc2.save();

                crc2.beginPath();
                crc2.ellipse(_positionX, _positionY, 8, 20, 10, 10, 20);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }

            function drawLeaf2(): void {

                crc2.save();

                crc2.beginPath();
                crc2.moveTo(_positionX, _positionY);
                crc2.lineTo(_positionX, _positionY - 20);
                crc2.lineTo(_positionX - 30, _positionY - 20);
                crc2.lineTo(_positionX - 10, _positionY - 30);
                crc2.lineTo(_positionX - 20, _positionY - 40);
                crc2.lineTo(_positionX - 30, _positionY - 50);
                crc2.lineTo(_positionX - 5, _positionY - 40);
                crc2.lineTo(_positionX + 5, _positionY - 60);
                crc2.lineTo(_positionX + 15, _positionY - 40);
                crc2.lineTo(_positionX + 40, _positionY - 50);
                crc2.lineTo(_positionX + 20, _positionY - 30);
                crc2.lineTo(_positionX + 30, _positionY - 20);
                crc2.lineTo(_positionX, _positionY - 20);
                crc2.fillStyle = _colorOfLeaf;
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }

        }
    }
}
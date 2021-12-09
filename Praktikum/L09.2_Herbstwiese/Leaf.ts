namespace L09_Herbstwiese {

    export class Leaf {

        position: Vector;
        positionXOfLeaf: number;
        positionYOfLeaf: number;
        positionXOfLeafAsVector: Vector;
        rotateLeaf: number;
        velocity: Vector;
        type: number;
        sizeOfLeaf: number;
        color: string;

        constructor(_positionXOfLeaf: number, _positionYOfLeaf: number, /*_positionXOfLeafAsVector: Vector,*/ _rotateLeaf: number, _color: string) {

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.positionXOfLeaf = _positionXOfLeaf;
            this.positionYOfLeaf = _positionYOfLeaf;
            this.rotateLeaf = _rotateLeaf;
            this.color = _color;
            //this.positionXOfLeafAsVector = _positionXOfLeafAsVector;
            //this.positionXOfLeafAsVector = new Vector (Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
        }

        move(_timeslice: number): void {

            console.log("MoveMethode");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            console.log(this.position);
            

            if (this.position.x < 0) {

                this.position.x += crc2.canvas.width;
            }

            if (this.position.y < 0) {

                this.position.y += crc2.canvas.height;
            }

            if (this.position.x > crc2.canvas.width) {

                this.position.x -= crc2.canvas.width;
            }

            if (this.position.y > crc2.canvas.height) {

                this.position.y -= crc2.canvas.height;
            }
        }

        draw(): void {

            //console.log("Hallo");
            

            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.rotate(this.rotateLeaf * Math.PI / 180);
            crc2.ellipse(this.positionXOfLeaf, this.positionYOfLeaf, 8, 20, 10, 10, 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }

        changeDirection(_timeslice: number): void {

            console.log("Hallo");
        }
    }








}
namespace L09_Herbstwiese {

    export class Leaf {

        position: Vector;
        velocity: Vector;
        type: number;
        sizeOfLeaf: number;
        color: string;

        constructor(_color: string) {

            this.position = new Vector(/*Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height*/Math.random() * crc2.canvas.width, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.randomLeaf(100, 200);

            this.color = _color;
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
            
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.ellipse(this.position.x, this.position.y, 8, 20, 10, 10, 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
    }








}
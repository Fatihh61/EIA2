namespace L09_Herbstwiese {

    export class Squirrel {

        position: Vector;
        velocity: Vector;
        type: number;
        sizeOfLeaf: number;
        color: string;

        constructor() {
            this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * 100 + 450);
            this.velocity = new Vector(0, 0);
            this.velocity.randomForSquirrel(100, 200);
        }

        move(_timeslice: number): void {
            console.log("MoveMethode");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

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

            //let positionXSquirrel: number = Math.random() * 800;
            //let positionYSquirrel: number = Math.random() * 100 + 450;

            //Schwanz
            crc2.beginPath();
            crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            //crc2.arc(positionXSquirrel - 30, positionYSquirrel + 12, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Arm2
            crc2.beginPath();
            crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Bein2
            crc2.beginPath();
            crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Körper
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Arm1
            crc2.beginPath();
            crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Bein1
            crc2.beginPath();
            crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            //crc2.ellipse(positionXSquirrel + 12, positionYSquirrel + 50, 10, 4, Math.PI / -10, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }







    }

}
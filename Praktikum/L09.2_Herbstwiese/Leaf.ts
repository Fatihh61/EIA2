namespace L09_Herbstwiese {

    export class Leaf {

        position: Vector;
        velocity: Vector;
        type: number;
        sizeOfLeaf: number;

        /*constructor(_positionOfLeaf: Vector) {

            this.sizeOfLeaf = _sizeOfLeaf;
        }*/


        move(_timeslice: number): void {

            console.log("Hallo");


        }

        draw(): void {

            for (let i: number = 0; i < 70; i++) {

                crc2.save();

                let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
                let positionYOfLeaf: number = Math.random() * crc2.canvas.height;

                let randomRotate: number = Math.random() * 180;

                console.log(positionXOfLeaf);
                console.log(positionYOfLeaf);

                crc2.beginPath();
                crc2.fillStyle = "#e38e00";
                crc2.rotate(randomRotate * Math.PI / 180);
                crc2.ellipse(positionXOfLeaf, positionYOfLeaf, 8, 20, 10, 10, 20);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();


                crc2.restore();
            }



        }

        changeDirection(_timeslice: number): void {

            console.log("Hallo");


        }
    }








}
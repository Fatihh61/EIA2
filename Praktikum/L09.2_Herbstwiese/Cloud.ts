namespace L09_Herbstwiese {

    export class Cloud {

        position: Vector;
        translateX: number;
        translateY: number;
        velocity: Vector;
        gradient: CanvasGradient;
        path: Path2D;

        constructor(_startingPositionX: number, _startingPositionY: number, _translateX: number, _translateY: number, _gradient: CanvasGradient, _path: Path2D) {

            this.position = new Vector(_startingPositionX, _startingPositionY);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.translateX = _translateX;
            this.translateY = _translateY;
            this.gradient = _gradient;
            this.path = _path;
        }


        move(_timeslice: number): void {


            let offset: Vector = new Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);

            console.log(this.position);


            if (this.position.x < 0) {

                this.position.x += crc2.canvas.width;
            }

            if (this.position.x > crc2.canvas.width) {

                this.position.x -= crc2.canvas.width;
            }
        }

        draw(): void {

            //Gradient für die Wolkenpartikel
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 50);

            gradient.addColorStop(0, "hsla(243, 0%, 100%, 1)");
            gradient.addColorStop(1, "hsla(243, 0%, 100%, 0.1)");

            let cloudsPath: Path2D = new Path2D();

            for (let i: number = 100; i > 0; i--) {

                let numbX: number = Math.random() * 100 + 650;
                let numbY: number = Math.random() * 100 + 50;
                let translateX: number = Math.random() * (-4.5) + (-3.5);
                let translateY: number = Math.random() * (-0.2);

                crc2.save();

                this.path.arc(this.position.x, this.position.y, 15, 0, 2 * Math.PI);
                crc2.beginPath();
                crc2.fillStyle = this.gradient;
                crc2.translate(this.translateX, this.translateY);
                crc2.fill(this.path);
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }

        }
    }
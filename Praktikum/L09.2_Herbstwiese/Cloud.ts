namespace L09_Herbstwiese {

    export class Cloud {

        startingPosition: Vector;
        size: Vector;
        translateX: number;
        translateY: number;
        velocity: Vector;
        gradient: CanvasGradient;
        path: Path2D;

        constructor(/*_startingPositionX: number, _startingPositionY: number, _translateX: number, _translateY: number, _gradient: CanvasGradient, _path: Path2D*/) {

            this.startingPosition = new Vector(550, 100);
            this.size = new Vector (200, 75);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {


            let offset: Vector = new Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.startingPosition.add(offset);

            console.log(this.startingPosition);

            if (this.startingPosition.x < 0) {

                this.startingPosition.x += crc2.canvas.width;
            }

            if (this.startingPosition.x > crc2.canvas.width) {

                this.startingPosition.x -= crc2.canvas.width;
            }
        }

        draw(): void {

            //console.log("wolke zeichnen");

            let nParticles: number = 30;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(this.startingPosition.x, this.startingPosition.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random()) * this.size.y;
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }

}
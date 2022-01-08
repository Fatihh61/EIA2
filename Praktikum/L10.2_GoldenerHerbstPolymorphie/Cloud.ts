namespace L10_HerbstwiesePolymorphie {

    export class Cloud extends Moveable {

        size: Vector;

        constructor() {

            super(550, 100);
            this.size = new Vector (200, 75);

        }

        moveCloud(): void {

            super.move(1 / 50, 0);
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
            crc2.translate(this.position.x, this.position.y);
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
namespace Döner_Trainer {

    export class Employee extends Human {

        constructor(_x: number, _y: number) {
            super(100);

            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.set(100, 0);
        }

        public draw(): void {
            super.draw();
        }

        public takePosition(_x: number, _y: number): void {

            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;

                this.mood -= 5;
            } else {
                console.log("Keine Energie mehr");
            }


        }

        public takeNap(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;

            this.mood = 100;
        }

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}
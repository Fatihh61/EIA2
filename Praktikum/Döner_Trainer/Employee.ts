namespace Döner_Trainer {

    export class Employee extends Human {

        currentActivity: string;

        constructor() {

            super(Math.random() * 150 + 400, Math.random() * 135 + 125, 100);
            // this.mood = _mood;





        }

        draw(): void {

            super.draw();

        }


        takeOrder(_x: number, _y: number): void {

            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;
            } else {
                console.log("Keine Energie mehr");
            }

        }

        buyResources(_x: number, _y: number): void {

            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;
            } else {
                console.log("Keine Energie mehr");
            }
        }

        takeNap(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;

            this.mood = 100;

            

        }

        cutKebab(_x: number, _y: number): void {

            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;
            } else {
                console.log("Keine Energie mehr");
            }
        }

        fillResources(_x: number, _y: number): void {

            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;
            } else {
                console.log("Keine Energie mehr");
            }
        }

        prepareResource(_x: number, _y: number): void {

            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;
            } else {
                console.log("Keine Energie mehr");
            }
        }
    }








}
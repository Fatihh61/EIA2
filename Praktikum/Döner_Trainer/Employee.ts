namespace Döner_Trainer {

    export class Employee extends Human {

        currentActivity: string;

        constructor() {

            super(Math.random() * 150 + 400, Math.random() * 135 + 125);





        }

        draw(): void {
            
            super.draw();
            
        }


        takeOrder(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;
        }

        buyResources(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;
        }

        takeNap(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;
        }

        cutKebab(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;
        }

        fillResources(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;
        }

        prepareResource(_x: number, _y: number): void {

            this.position.x = _x;
            this.position.y = _y;
        }
    }








}
namespace Döner_Trainer {

    export class Employee extends Human {

        currentActivity: string;

        constructor() {

            super()





        }

        draw(_x: number, _y: number): void {

            super.draw(_x, _y);
            
        }


        takeOrder(): void {

            console.log("takeOrder in Employee");
        }

        buyRessources(): void {

            console.log("buyRessources in Employee");
        }

        takeNap(): void {


            console.log("takeNap in Employee");
        }

        fillRessources(): void {

            console.log("fillRessources in Employee");
        }
    }








}
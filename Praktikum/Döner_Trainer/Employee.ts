namespace Döner_Trainer {

    export class Employee extends Human {

        currentActivity: string;

        constructor() {

            super()





        }

        draw(): void {

            super.draw(Math.random() * 275 + 175, Math.random() * 135 + 125)
            
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
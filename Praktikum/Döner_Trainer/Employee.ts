namespace Döner_Trainer {

    export class Employee extends BeingHuman {

        constructor() {

            super(5, 5)





        }

        draw(): void {
            
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
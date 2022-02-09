namespace Döner_Trainer {

    export class Customer extends Human {

        satisfaction: string;

        constructor() {

            super(85, 555);
        }

        draw(): void {

            super.draw();
            
        }

        orderMeal(): void {

            console.log("orderMeal in Customer");
        }
    }








}
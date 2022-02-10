namespace Döner_Trainer {

    export class Customer extends Human {

        satisfaction: string;

        constructor() {

            super(Math.random() * 400 + 200, 555, 100);
        }

        draw(): void {

            super.draw();
            
        }

        orderMeal(): void {

            console.log("orderMeal in Customer");
        }
    }








}
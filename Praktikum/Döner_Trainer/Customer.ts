namespace Döner_Trainer {

    export class Customer extends Human {

        satisfaction: string;
        customerOrderUlan: string [] = [];
        ingredientsArrayUlan: string [] = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
        breadArrayUlan: string[] = ["döner", "yufka", "lahmacun"];

        constructor() {

            super(Math.random() * 400 + 200, 555, 100);
        }

        draw(): void {

            super.draw();

        }

        orderMeal(): void {

            console.log("orderMeal in Customer");

            let randomNumberForLoop: number = Math.floor(Math.random() * 5);
            console.log(randomNumberForLoop);

            this.customerOrderUlan.push(this.breadArrayUlan[Math.floor(Math.random() * 3)]);

            for (let i: number = 0; i <= randomNumberForLoop; i++) {

                let randomNumberForIngredients: number = Math.floor(Math.random() * 5);
                console.log(randomNumberForIngredients);
                if (this.ingredientsArrayUlan.length > randomNumberForIngredients) {
                    this.customerOrderUlan.push(this.ingredientsArrayUlan[randomNumberForIngredients]);
                    // _zwischenArray.push(_ingredientsArray[randomNumberForIngredients]);
                    this.ingredientsArrayUlan.splice(randomNumberForIngredients, 1);
                    console.log(this.customerOrderUlan);
                    console.log(this.ingredientsArrayUlan);
                    
                }   
            }
            
        }
    }








}
namespace Döner_Trainer {

    export class Customer extends Human {

        satisfaction: string;
        customerSubclassOrder: string [] = [];
        ingredientsSubclassArray: string [] = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
        breadSubclassArray: string[] = ["döner", "yufka", "lahmacun"];

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

            this.customerSubclassOrder.push(this.breadSubclassArray[Math.floor(Math.random() * 3)]);

            for (let i: number = 0; i <= randomNumberForLoop; i++) {

                let randomNumberForIngredients: number = Math.floor(Math.random() * 5);
                console.log(randomNumberForIngredients);
                if (this.ingredientsSubclassArray.length > randomNumberForIngredients) {
                    this.customerSubclassOrder.push(this.ingredientsSubclassArray[randomNumberForIngredients]);
                    // _zwischenArray.push(_ingredientsArray[randomNumberForIngredients]);
                    this.ingredientsSubclassArray.splice(randomNumberForIngredients, 1);
                    console.log(this.customerSubclassOrder);
                    console.log(this.ingredientsSubclassArray);
                    
                }   
            }
            
        }
    }








}
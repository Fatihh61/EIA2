namespace Döner_Trainer {

    export class Customer extends Human {

        satisfaction: string;

        constructor() {

            super(Math.random() * 400 + 200, 555, 100);
        }

        draw(): void {

            super.draw();

        }

        orderMeal(_customerOrder: string [], _breadArray: string [], _ingredientsArray: string [], _zwischenArray: string []): void {

            console.log("orderMeal in Customer");

            let randomNumberForLoop: number = Math.floor(Math.random() * 5);
            console.log(randomNumberForLoop);

            _customerOrder.push(_breadArray[Math.floor(Math.random() * 3)]);

            for (let i: number = 0; i <= randomNumberForLoop; i++) {

                let randomNumberForIngredients: number = Math.floor(Math.random() * 5);
                console.log(randomNumberForIngredients);
                if (_ingredientsArray.length > randomNumberForIngredients) {
                    _customerOrder.push(_ingredientsArray[randomNumberForIngredients]);
                    _zwischenArray.push(_ingredientsArray[randomNumberForIngredients]);
                    _ingredientsArray.splice(randomNumberForIngredients, 1);
                    console.log(_customerOrder);
                }   
            }
            // console.log(_customerOrder);
            // _ingredientsArray = _ingredientsArray.concat(zwischenArray);
            // console.log(_ingredientsArray);
            // zwischenArray = [];
            // console.log(zwischenArray);
        }
    }








}
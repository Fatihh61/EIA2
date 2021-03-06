namespace Döner_Trainer {

    export abstract class Vegetable {

        public ingredientsAmount: number;
        public resourceAmount: number;

        constructor() {

            // console.log("Constructor");
        }

        abstract draw(): void;

        public subtractVegetable(_vegetable: Vegetable): void {

            _vegetable.ingredientsAmount -= 5;
        }

        public fillVegetable(_vegetable: Vegetable, _ingredientAmount: number): void {

            _vegetable.ingredientsAmount = _ingredientAmount;

            _vegetable.resourceAmount -= 25;

        }
    }
}
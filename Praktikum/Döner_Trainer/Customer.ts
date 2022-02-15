namespace Döner_Trainer {

    export class Customer extends Human {

        public customerSubclassOrder: string[] = [];
        private ingredientsSubclassArray: string[] = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
        private breadSubclassArray: string[] = ["döner", "yufka", "lahmacun"];

        constructor(_x: number, _y: number) {
            super(100);

            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.set(25, 0);
        }

        public draw(): void {
            super.draw();
        }

        public orderMeal(): void {

            let randomNumberForLoop: number = Math.floor(Math.random() * 5);
            console.log(randomNumberForLoop);

            this.customerSubclassOrder.push(this.breadSubclassArray[Math.floor(Math.random() * 3)]);

            for (let i: number = 0; i <= randomNumberForLoop; i++) {

                let randomNumberForIngredients: number = Math.floor(Math.random() * 5);
                console.log(randomNumberForIngredients);
                if (this.ingredientsSubclassArray.length > randomNumberForIngredients) {
                    this.customerSubclassOrder.push(this.ingredientsSubclassArray[randomNumberForIngredients]);
                    this.ingredientsSubclassArray.splice(randomNumberForIngredients, 1);
                    console.log(this.customerSubclassOrder);
                    console.log(this.ingredientsSubclassArray);
                }
            }

        }

        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 100) {

                this.position.x += 10;
                this.velocity.set(10, 0);
                this.velocity.scale(5);
            }

            if (this.position.x > 700) {


                this.position.x -= 10;
                this.velocity.set(-10, 0);
                this.velocity.scale(5);
            }
        }

    }
}
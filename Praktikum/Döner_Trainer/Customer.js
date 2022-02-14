"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        customerSubclassOrder = [];
        ingredientsSubclassArray = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
        breadSubclassArray = ["döner", "yufka", "lahmacun"];
        constructor(_x, _y) {
            super(100);
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            this.velocity.set(25, 0);
            // this.velocity.random(100, 200);
            // this.position = new Vector(_x, _y);
            // this.velocity = new Vector(0, 0);
            // this.velocity.random(100, 200);
        }
        draw() {
            super.draw();
        }
        orderMeal() {
            let randomNumberForLoop = Math.floor(Math.random() * 5);
            console.log(randomNumberForLoop);
            this.customerSubclassOrder.push(this.breadSubclassArray[Math.floor(Math.random() * 3)]);
            for (let i = 0; i <= randomNumberForLoop; i++) {
                let randomNumberForIngredients = Math.floor(Math.random() * 5);
                console.log(randomNumberForIngredients);
                if (this.ingredientsSubclassArray.length > randomNumberForIngredients) {
                    this.customerSubclassOrder.push(this.ingredientsSubclassArray[randomNumberForIngredients]);
                    this.ingredientsSubclassArray.splice(randomNumberForIngredients, 1);
                    console.log(this.customerSubclassOrder);
                    console.log(this.ingredientsSubclassArray);
                }
            }
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
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
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map
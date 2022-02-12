"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        satisfaction;
        customerOrderUlan = [];
        ingredientsArrayUlan = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
        breadArrayUlan = ["döner", "yufka", "lahmacun"];
        constructor() {
            super(Math.random() * 400 + 200, 555, 100);
        }
        draw() {
            super.draw();
        }
        orderMeal() {
            console.log("orderMeal in Customer");
            let randomNumberForLoop = Math.floor(Math.random() * 5);
            console.log(randomNumberForLoop);
            this.customerOrderUlan.push(this.breadArrayUlan[Math.floor(Math.random() * 3)]);
            for (let i = 0; i <= randomNumberForLoop; i++) {
                let randomNumberForIngredients = Math.floor(Math.random() * 5);
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
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map
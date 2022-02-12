"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        satisfaction;
        customerSubclassOrder = [];
        ingredientsSubclassArray = ["zwiebel", "mais", "salat", "rotkraut", "tomate"];
        breadSubclassArray = ["döner", "yufka", "lahmacun"];
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
            this.customerSubclassOrder.push(this.breadSubclassArray[Math.floor(Math.random() * 3)]);
            for (let i = 0; i <= randomNumberForLoop; i++) {
                let randomNumberForIngredients = Math.floor(Math.random() * 5);
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
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map
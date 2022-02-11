"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        satisfaction;
        constructor() {
            super(Math.random() * 400 + 200, 555, 100);
        }
        draw() {
            super.draw();
        }
        orderMeal(_customerOrder, _breadArray, _ingredientsArray, _zwischenArray) {
            console.log("orderMeal in Customer");
            let randomNumberForLoop = Math.floor(Math.random() * 5);
            console.log(randomNumberForLoop);
            _customerOrder.push(_breadArray[Math.floor(Math.random() * 3)]);
            for (let i = 0; i <= randomNumberForLoop; i++) {
                let randomNumberForIngredients = Math.floor(Math.random() * 5);
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
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map
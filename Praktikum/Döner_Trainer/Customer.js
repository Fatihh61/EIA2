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
        orderMeal() {
            console.log("orderMeal in Customer");
        }
    }
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        satisfaction;
        constructor(_x, _y) {
            super();
        }
        draw() {
        }
        orderMeal() {
            console.log("orderMeal in Customer");
        }
    }
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Employee extends Döner_Trainer.BeingHuman {
        constructor() {
            super(5, 5);
        }
        draw() {
        }
        takeOrder() {
            console.log("takeOrder in Employee");
        }
        buyRessources() {
            console.log("buyRessources in Employee");
        }
        takeNap() {
            console.log("takeNap in Employee");
        }
        fillRessources() {
            console.log("fillRessources in Employee");
        }
    }
    Döner_Trainer.Employee = Employee;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Employee.js.map
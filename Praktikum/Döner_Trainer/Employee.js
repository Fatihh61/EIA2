"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Employee extends Döner_Trainer.Human {
        currentActivity;
        constructor() {
            super();
        }
        draw(_x, _y) {
            super.draw(_x, _y);
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
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Employee extends Döner_Trainer.Human {
        currentActivity;
        constructor() {
            super(Math.random() * 150 + 400, Math.random() * 135 + 125);
        }
        draw() {
            super.draw();
        }
        takeOrder(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        buyResources(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        takeNap(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        cutKebab(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        fillResources(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        prepareResource(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
    }
    Döner_Trainer.Employee = Employee;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Employee.js.map
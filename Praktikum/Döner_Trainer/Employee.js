"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Employee extends Döner_Trainer.Human {
        // motivation: number
        currentActivity;
        constructor() {
            super(Math.random() * 150 + 400, Math.random() * 135 + 125, 100);
            // this.motivation = _motivation;
        }
        draw() {
            super.draw();
        }
        takeOrder(_x, _y) {
            if (this.motivation > 0) {
                this.position.x = _x;
                this.position.y = _y;
            }
            else {
                console.log("Keine Energie mehr");
            }
        }
        buyResources(_x, _y) {
            if (this.motivation > 0) {
                this.position.x = _x;
                this.position.y = _y;
            }
            else {
                console.log("Keine Energie mehr");
            }
        }
        takeNap(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
        cutKebab(_x, _y) {
            if (this.motivation > 0) {
                this.position.x = _x;
                this.position.y = _y;
            }
            else {
                console.log("Keine Energie mehr");
            }
        }
        fillResources(_x, _y) {
            if (this.motivation > 0) {
                this.position.x = _x;
                this.position.y = _y;
            }
            else {
                console.log("Keine Energie mehr");
            }
        }
        prepareResource(_x, _y) {
            if (this.motivation > 0) {
                this.position.x = _x;
                this.position.y = _y;
            }
            else {
                console.log("Keine Energie mehr");
            }
        }
    }
    Döner_Trainer.Employee = Employee;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Employee.js.map
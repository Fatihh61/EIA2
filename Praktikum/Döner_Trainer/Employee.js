"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Employee extends Döner_Trainer.Human {
        constructor(_x, _y) {
            super(100);
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            this.velocity.set(100, 0);
        }
        draw() {
            super.draw();
        }
        takePosition(_x, _y) {
            if (this.mood > 0) {
                this.position.x = _x;
                this.position.y = _y;
                this.mood -= 5;
            }
            else {
                console.log("Keine Energie mehr");
            }
        }
        takeNap(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
            this.mood = 100;
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    Döner_Trainer.Employee = Employee;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Employee.js.map
"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addEnd) {
            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            console.log(direction);
            console.log(length);
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    Döner_Trainer.Vector = Vector;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Vector.js.map
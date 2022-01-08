"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
            //this.x = _x;
            //this.y = _y;
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
        randomForLeaf(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            console.log(direction);
            console.log(length);
            this.set(Math.cos(1), Math.sin(1));
            this.scale(length);
        }
        randomForSquirrel(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            console.log(direction);
            console.log(length);
            this.set(Math.cos(1), Math.sin(0));
            this.scale(length);
        }
    }
    L10_HerbstwiesePolymorphie.Vector = Vector;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Vector.js.map
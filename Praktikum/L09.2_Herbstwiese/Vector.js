"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
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
    }
    L09_Herbstwiese.Vector = Vector;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Vector.js.map
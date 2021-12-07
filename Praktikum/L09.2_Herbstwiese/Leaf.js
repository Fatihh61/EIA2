"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Leaf {
        position;
        velocity;
        type;
        sizeOfLeaf;
        constructor(_sizeOfLeaf) {
            this.sizeOfLeaf = _sizeOfLeaf;
        }
        move() {
            console.log("Hallo");
        }
        draw() {
            console.log("Hallo");
        }
    }
    L09_Herbstwiese.Leaf = Leaf;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Leaf.js.map
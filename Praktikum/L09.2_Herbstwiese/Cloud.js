"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Cloud {
        position;
        startingPosition;
        constructor(_startingPosition) {
            this.startingPosition = _startingPosition;
        }
        move(_timeslice) {
            console.log("Hallo");
        }
        draw() {
            console.log("Hallo");
        }
    }
    L09_Herbstwiese.Cloud = Cloud;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Cloud.js.map
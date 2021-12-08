"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Leaf {
        position;
        velocity;
        type;
        sizeOfLeaf;
        /*constructor(_positionOfLeaf: Vector) {

            this.sizeOfLeaf = _sizeOfLeaf;
        }*/
        move(_timeslice) {
            console.log("Hallo");
        }
        draw() {
            for (let i = 0; i < 70; i++) {
                L09_Herbstwiese.crc2.save();
                let positionXOfLeaf = Math.random() * L09_Herbstwiese.crc2.canvas.width;
                let positionYOfLeaf = Math.random() * L09_Herbstwiese.crc2.canvas.height;
                let randomRotate = Math.random() * 180;
                console.log(positionXOfLeaf);
                console.log(positionYOfLeaf);
                L09_Herbstwiese.crc2.beginPath();
                L09_Herbstwiese.crc2.fillStyle = "#e38e00";
                L09_Herbstwiese.crc2.rotate(randomRotate * Math.PI / 180);
                L09_Herbstwiese.crc2.ellipse(positionXOfLeaf, positionYOfLeaf, 8, 20, 10, 10, 20);
                L09_Herbstwiese.crc2.fill();
                L09_Herbstwiese.crc2.stroke();
                L09_Herbstwiese.crc2.closePath();
                L09_Herbstwiese.crc2.restore();
            }
        }
        changeDirection(_timeslice) {
            console.log("Hallo");
        }
    }
    L09_Herbstwiese.Leaf = Leaf;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Leaf.js.map
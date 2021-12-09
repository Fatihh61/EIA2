"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Leaf {
        position;
        positionXOfLeaf;
        positionYOfLeaf;
        positionXOfLeafAsVector;
        rotateLeaf;
        velocity;
        type;
        sizeOfLeaf;
        color;
        constructor(_positionXOfLeaf, _positionYOfLeaf, /*_positionXOfLeafAsVector: Vector,*/ _rotateLeaf, _color) {
            this.position = new L09_Herbstwiese.Vector(0, 0);
            this.velocity = new L09_Herbstwiese.Vector(0, 0);
            this.velocity.random(100, 200);
            this.positionXOfLeaf = _positionXOfLeaf;
            this.positionYOfLeaf = _positionYOfLeaf;
            this.rotateLeaf = _rotateLeaf;
            this.color = _color;
            //this.positionXOfLeafAsVector = _positionXOfLeafAsVector;
            //this.positionXOfLeafAsVector = new Vector (Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
        }
        move(_timeslice) {
            console.log("MoveMethode");
            let offset = new L09_Herbstwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position);
            if (this.position.x < 0) {
                this.position.x += L09_Herbstwiese.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L09_Herbstwiese.crc2.canvas.height;
            }
            if (this.position.x > L09_Herbstwiese.crc2.canvas.width) {
                this.position.x -= L09_Herbstwiese.crc2.canvas.width;
            }
            if (this.position.y > L09_Herbstwiese.crc2.canvas.height) {
                this.position.y -= L09_Herbstwiese.crc2.canvas.height;
            }
        }
        draw() {
            //console.log("Hallo");
            L09_Herbstwiese.crc2.save();
            L09_Herbstwiese.crc2.beginPath();
            L09_Herbstwiese.crc2.fillStyle = this.color;
            L09_Herbstwiese.crc2.rotate(this.rotateLeaf * Math.PI / 180);
            L09_Herbstwiese.crc2.ellipse(this.positionXOfLeaf, this.positionYOfLeaf, 8, 20, 10, 10, 20);
            L09_Herbstwiese.crc2.fill();
            L09_Herbstwiese.crc2.stroke();
            L09_Herbstwiese.crc2.closePath();
            L09_Herbstwiese.crc2.restore();
        }
        changeDirection(_timeslice) {
            console.log("Hallo");
        }
    }
    L09_Herbstwiese.Leaf = Leaf;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Leaf.js.map
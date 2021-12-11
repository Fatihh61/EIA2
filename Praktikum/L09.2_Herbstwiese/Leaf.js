"use strict";
var L09_Herbstwiese;
(function (L09_Herbstwiese) {
    class Leaf {
        position;
        velocity;
        type;
        color;
        constructor(_color, _type) {
            this.position = new L09_Herbstwiese.Vector(Math.random() * L09_Herbstwiese.crc2.canvas.width, 0);
            this.velocity = new L09_Herbstwiese.Vector(0, 0);
            this.velocity.randomForLeaf(100, 200);
            this.color = _color;
            this.type = _type;
        }
        move(_timeslice) {
            console.log("MoveMethode");
            let offset = new L09_Herbstwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
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
        drawLeaf() {
            this.typeOfLeaf(this.type, this.color, this.position.x, this.position.y);
        }
        typeOfLeaf(_typeOfLeaf, _colorOfLeaf, _positionX, _positionY) {
            L09_Herbstwiese.crc2.fillStyle = _colorOfLeaf;
            switch (_typeOfLeaf) {
                case 1:
                    drawLeaf1();
                    break;
                default:
                    drawLeaf2();
            }
            function drawLeaf1() {
                L09_Herbstwiese.crc2.save();
                L09_Herbstwiese.crc2.beginPath();
                L09_Herbstwiese.crc2.ellipse(_positionX, _positionY, 8, 20, 10, 10, 20);
                L09_Herbstwiese.crc2.fill();
                L09_Herbstwiese.crc2.stroke();
                L09_Herbstwiese.crc2.closePath();
                L09_Herbstwiese.crc2.restore();
            }
            function drawLeaf2() {
                L09_Herbstwiese.crc2.save();
                L09_Herbstwiese.crc2.beginPath();
                L09_Herbstwiese.crc2.moveTo(_positionX, _positionY);
                L09_Herbstwiese.crc2.lineTo(_positionX, _positionY - 20);
                L09_Herbstwiese.crc2.lineTo(_positionX - 30, _positionY - 20);
                L09_Herbstwiese.crc2.lineTo(_positionX - 10, _positionY - 30);
                L09_Herbstwiese.crc2.lineTo(_positionX - 20, _positionY - 40);
                L09_Herbstwiese.crc2.lineTo(_positionX - 30, _positionY - 50);
                L09_Herbstwiese.crc2.lineTo(_positionX - 5, _positionY - 40);
                L09_Herbstwiese.crc2.lineTo(_positionX + 5, _positionY - 60);
                L09_Herbstwiese.crc2.lineTo(_positionX + 15, _positionY - 40);
                L09_Herbstwiese.crc2.lineTo(_positionX + 40, _positionY - 50);
                L09_Herbstwiese.crc2.lineTo(_positionX + 20, _positionY - 30);
                L09_Herbstwiese.crc2.lineTo(_positionX + 30, _positionY - 20);
                L09_Herbstwiese.crc2.lineTo(_positionX, _positionY - 20);
                L09_Herbstwiese.crc2.fillStyle = _colorOfLeaf;
                L09_Herbstwiese.crc2.fill();
                L09_Herbstwiese.crc2.stroke();
                L09_Herbstwiese.crc2.closePath();
                L09_Herbstwiese.crc2.restore();
            }
        }
    }
    L09_Herbstwiese.Leaf = Leaf;
})(L09_Herbstwiese || (L09_Herbstwiese = {}));
//# sourceMappingURL=Leaf.js.map
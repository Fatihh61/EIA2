"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Leaf extends L10_HerbstwiesePolymorphie.Moveable {
        color;
        type;
        constructor(_color, _type) {
            super(Math.random() * L10_HerbstwiesePolymorphie.crc2.canvas.width, 0);
            this.velocity.randomForLeaf(100, 50);
            this.color = _color;
            this.type = _type;
        }
        move() {
            super.move(1 / 50, this.velocity.y);
        }
        draw() {
            this.typeOfLeaf(this.type, this.color, this.position.x, this.position.y);
        }
        typeOfLeaf(_typeOfLeaf, _colorOfLeaf, _positionX, _positionY) {
            L10_HerbstwiesePolymorphie.crc2.fillStyle = _colorOfLeaf;
            switch (_typeOfLeaf) {
                case 1:
                    drawLeaf1();
                    break;
                default:
                    drawLeaf2();
            }
            function drawLeaf1() {
                L10_HerbstwiesePolymorphie.crc2.save();
                L10_HerbstwiesePolymorphie.crc2.beginPath();
                L10_HerbstwiesePolymorphie.crc2.ellipse(_positionX, _positionY, 8, 20, 10, 10, 20);
                L10_HerbstwiesePolymorphie.crc2.fill();
                L10_HerbstwiesePolymorphie.crc2.stroke();
                L10_HerbstwiesePolymorphie.crc2.closePath();
                L10_HerbstwiesePolymorphie.crc2.restore();
            }
            function drawLeaf2() {
                L10_HerbstwiesePolymorphie.crc2.save();
                L10_HerbstwiesePolymorphie.crc2.beginPath();
                L10_HerbstwiesePolymorphie.crc2.moveTo(_positionX, _positionY);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX, _positionY - 20);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX - 30, _positionY - 20);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX - 10, _positionY - 30);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX - 20, _positionY - 40);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX - 30, _positionY - 50);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX - 5, _positionY - 40);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX + 5, _positionY - 60);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX + 15, _positionY - 40);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX + 40, _positionY - 50);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX + 20, _positionY - 30);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX + 30, _positionY - 20);
                L10_HerbstwiesePolymorphie.crc2.lineTo(_positionX, _positionY - 20);
                L10_HerbstwiesePolymorphie.crc2.fillStyle = _colorOfLeaf;
                L10_HerbstwiesePolymorphie.crc2.fill();
                L10_HerbstwiesePolymorphie.crc2.stroke();
                L10_HerbstwiesePolymorphie.crc2.closePath();
                L10_HerbstwiesePolymorphie.crc2.restore();
            }
        }
    }
    L10_HerbstwiesePolymorphie.Leaf = Leaf;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Leaf.js.map
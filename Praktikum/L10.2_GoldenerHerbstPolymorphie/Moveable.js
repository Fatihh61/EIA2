"use strict";
var L10_HerbstwiesePolymorphie;
(function (L10_HerbstwiesePolymorphie) {
    class Moveable {
        velocity;
        position;
        constructor(_x, _y) {
            this.position = new L10_HerbstwiesePolymorphie.Vector(_x, _y);
            this.velocity = new L10_HerbstwiesePolymorphie.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice, _y) {
            let offset = new L10_HerbstwiesePolymorphie.Vector(this.velocity.x, _y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L10_HerbstwiesePolymorphie.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L10_HerbstwiesePolymorphie.crc2.canvas.height;
            }
            if (this.position.x > L10_HerbstwiesePolymorphie.crc2.canvas.width) {
                this.position.x -= L10_HerbstwiesePolymorphie.crc2.canvas.width;
            }
            if (this.position.y > L10_HerbstwiesePolymorphie.crc2.canvas.height) {
                this.position.y -= L10_HerbstwiesePolymorphie.crc2.canvas.height;
            }
        }
    }
    L10_HerbstwiesePolymorphie.Moveable = Moveable;
})(L10_HerbstwiesePolymorphie || (L10_HerbstwiesePolymorphie = {}));
//# sourceMappingURL=Moveable.js.map
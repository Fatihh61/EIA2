"use strict";
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    class Cow extends L10_OldMacDonaldsHeritage.Animal {
        animalRace = ["Miltank", "Stier", "Bulle", "Ochse"];
        constructor() {
            super("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh", 20);
        }
        doSpecialActionCow() {
            return super.doSpecialAction("Kuh legt sich schlafen");
        }
        chooseRaceForCow() {
            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }
    }
    L10_OldMacDonaldsHeritage.Cow = Cow;
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Cow.js.map
"use strict";
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    class Lion extends L10_OldMacDonaldsHeritage.Animal {
        animalRace = ["Escanor", "Löwe", "Panther", "Jaguar"];
        constructor() {
            super("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah", 1);
        }
        doSpecialActionLion() {
            return super.doSpecialAction("Löwe geht auf die Jagd");
        }
        chooseRaceForLion() {
            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }
    }
    L10_OldMacDonaldsHeritage.Lion = Lion;
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Lion.js.map
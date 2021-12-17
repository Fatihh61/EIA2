"use strict";
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    class Cat extends L10_OldMacDonaldsHeritage.Animal {
        animalRace = ["Mauzi", "Sphynx", "Faltohrkatze", "Waldkatze"];
        constructor() {
            super("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu", 5);
        }
        doSpecialActionCat() {
            return super.doSpecialAction("Katze schläft");
        }
        chooseRaceForCat() {
            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }
    }
    L10_OldMacDonaldsHeritage.Cat = Cat;
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Cat.js.map
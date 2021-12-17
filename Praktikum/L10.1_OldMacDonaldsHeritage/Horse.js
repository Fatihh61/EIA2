"use strict";
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    class Horse extends L10_OldMacDonaldsHeritage.Animal {
        animalRace = ["Apolo", "Flash", "Bold", "Pegasus"];
        constructor() {
            super("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü", 20);
        }
        doSpecialActionHorse() {
            return super.doSpecialAction("Pferd galoppiert");
        }
        chooseRaceForHorse() {
            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }
    }
    L10_OldMacDonaldsHeritage.Horse = Horse;
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Horse.js.map
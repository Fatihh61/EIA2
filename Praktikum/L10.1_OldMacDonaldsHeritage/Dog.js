"use strict";
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    class Dog extends L10_OldMacDonaldsHeritage.Animal {
        animalRace = ["Dalmatiner", "Bulldogge", "Schäferhund", "Pudel"];
        constructor() {
            super("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff", 10);
        }
        doSpecialActionDog() {
            return super.doSpecialAction("Hund geht alleine Gassi");
        }
        chooseRaceForDog() {
            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }
    }
    L10_OldMacDonaldsHeritage.Dog = Dog;
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Dog.js.map
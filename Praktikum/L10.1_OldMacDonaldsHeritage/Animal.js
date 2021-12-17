"use strict";
var L10_OldMacDonaldsHeritage;
(function (L10_OldMacDonaldsHeritage) {
    class Animal {
        name;
        animalType;
        food;
        eatenAmount;
        foodRation;
        animalSound;
        raceOfAnimal;
        constructor(_name, _animalType, _food, _eatenAmount, _foodRation, _animalSound, _lesserRatio) {
            this.name = _name;
            this.animalType = _animalType;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.foodRation = _foodRation;
            this.animalSound = _animalSound;
        }
        eat() {
            let eating = `${this.food}: ${this.foodRation} kg`;
            return (eating);
        }
        sing() {
            let lyrics = `Meine Rasse ist: ${this.raceOfAnimal}. Ich heiße ${this.name} und bin ${this.animalType}. Ich esse gerne ${this.eatenAmount} kg ${this.food} und mache dabei ${this.animalSound}.  `;
            return (lyrics);
        }
        doSpecialAction(_specialActionForEachAnimal) {
            let specialAction = _specialActionForEachAnimal;
            return (specialAction);
        }
        chooseRaceForAnimal(_raceOfAnimal) {
            let raceIsChoosed = this.raceOfAnimal = _raceOfAnimal;
            return (raceIsChoosed);
        }
    }
    L10_OldMacDonaldsHeritage.Animal = Animal;
})(L10_OldMacDonaldsHeritage || (L10_OldMacDonaldsHeritage = {}));
//# sourceMappingURL=Animal.js.map
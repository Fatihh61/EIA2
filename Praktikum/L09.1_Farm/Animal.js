"use strict";
var L09_Farm;
(function (L09_Farm) {
    class Animal {
        name;
        animalType;
        food;
        eatenAmount;
        foodRatio;
        animalSound;
        constructor(_name, _animalType, _food, _eatenAmount, _foodRatio, _animalSound) {
            this.name = _name;
            this.animalType = _animalType;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.animalSound = _animalSound;
            this.foodRatio = _foodRatio;
        }
        eat() {
            let eating = `${this.food}: ${this.foodRatio} kg`;
            return (eating);
        }
        sing() {
            let lyrics = `Ich heiße ${this.name} und bin ${this.animalType}. Ich esse gerne ${this.eatenAmount} kg ${this.food} und mache dabei ${this.animalSound}.  `;
            return (lyrics);
        }
    }
    L09_Farm.Animal = Animal;
})(L09_Farm || (L09_Farm = {}));
//# sourceMappingURL=Animal.js.map
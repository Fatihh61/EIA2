"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Vegetable {
        ingredientsAmount;
        resourceAmount;
        constructor() {
            // console.log("Constructor");
        }
        subtractVegetable(_vegetable) {
            _vegetable.ingredientsAmount -= 5;
        }
        fillVegetable(_vegetable, _ingredientAmount) {
            _vegetable.ingredientsAmount = _ingredientAmount;
            _vegetable.resourceAmount -= 25;
        }
    }
    Döner_Trainer.Vegetable = Vegetable;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=Vegetable.js.map
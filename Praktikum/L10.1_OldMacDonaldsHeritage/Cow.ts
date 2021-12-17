namespace L10_OldMacDonaldsHeritage {

    export class Cow extends Animal {

        animalRace: string [] = ["Miltank", "Stier", "Bulle", "Ochse"];

        constructor() {

            super("Milka", "eine Kuh", "Graß", 20, 300, "muuuuuuuuuuh", 20);
        }

        doSpecialActionCow(): string {
            return super.doSpecialAction("Kuh legt sich schlafen");
        }

        chooseRaceForCow(): string {

            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }


    }
}
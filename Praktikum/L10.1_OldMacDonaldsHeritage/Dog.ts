namespace L10_OldMacDonaldsHeritage {

    export class Dog extends Animal {

        animalRace: string [] = ["Dalmatiner", "Bulldogge", "Schäferhund", "Pudel"];

        constructor() {

            super("Crack", "ein Hund", "Fleisch", 10, 250, "wuuuuuuuuuff", 10);
        }

        doSpecialActionDog(): string {
            return super.doSpecialAction("Hund geht alleine Gassi");
        }

        chooseRaceForDog(): string {

            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }


    }
}
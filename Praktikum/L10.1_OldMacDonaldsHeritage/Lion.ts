namespace L10_OldMacDonaldsHeritage {

    export class Lion extends Animal {

        
        animalRace: string[] = ["Escanor", "Löwe", "Panther", "Jaguar"];

        constructor() {

            super("Memphis", "ein Löwe", "Vegan", 1, 100, "wrooooooaaaaaaaaaah", 1);
        }

        doSpecialActionLion(): string {
            return super.doSpecialAction("Löwe geht auf die Jagd");
        }

        chooseRaceForLion(): string {

            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }
    }
}
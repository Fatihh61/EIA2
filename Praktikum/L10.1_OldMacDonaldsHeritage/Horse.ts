namespace L10_OldMacDonaldsHeritage {

    export class Horse extends Animal {

        animalRace: string [] = ["Apolo", "Flash", "Bold", "Pegasus"];

        constructor() {

            super("Pony", "ein Pferd", "Heu", 20, 300, "yahüüüüüüüüüüüüüüü", 20);
        }

        doSpecialActionHorse(): string {
            return super.doSpecialAction("Pferd galoppiert");
        }

        chooseRaceForHorse(): string {

            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }


    }
}
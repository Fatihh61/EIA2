namespace L10_OldMacDonaldsHeritage {

    export class Cat extends Animal {

        animalRace: string [] = ["Mauzi", "Sphynx", "Faltohrkatze", "Waldkatze"];

        constructor() {

            super("Gilbert", "eine Katze", "Whiskas", 5, 100, "miaaaaauuuuu", 5);
        }

        doSpecialActionCat(): string {
            return super.doSpecialAction("Katze schläft");
        }

        chooseRaceForCat(): string {

            return super.chooseRaceForAnimal(this.animalRace[Math.floor(Math.random() * 3)]);
        }


    }
}
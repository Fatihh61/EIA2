namespace L10_OldMacDonaldsHeritage {

    export class Animal {

        name: string;
        animalType: string;
        food: string;
        eatenAmount: number;
        foodRation: number;
        animalSound: string;
        raceOfAnimal: string;

        constructor(_name: string, _animalType: string, _food: string, _eatenAmount: number, _foodRation: number, _animalSound: string, _lesserRatio: number) {

            this.name = _name;
            this.animalType = _animalType;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.foodRation = _foodRation;
            this.animalSound = _animalSound;
        }

        eat(): string {

            let eating: string = `${this.food}: ${this.foodRation} kg`;

            return (eating);
        }

        sing(): string {

            let lyrics: string = `Meine Rasse ist: ${this.raceOfAnimal}. Ich heiße ${this.name} und bin ${this.animalType}. Ich esse gerne ${this.eatenAmount} kg ${this.food} und mache dabei ${this.animalSound}.  `;

            return (lyrics);
        }

        doSpecialAction(_specialActionForEachAnimal: string): string {

            let specialAction: string = _specialActionForEachAnimal;

            return(specialAction);
        }

        chooseRaceForAnimal(_raceOfAnimal: string): string {

            let raceIsChoosed: string = this.raceOfAnimal = _raceOfAnimal;

            return(raceIsChoosed);
        }
    }
}
namespace L09_Farm {

    export class Animal {

        name: string;
        animalType: string;
        food: string;
        eatenAmount: number;
        foodRatio: number;
        animalSound: string;
        lesserRatio: number;



        constructor (_name: string, _animalType: string, _food: string, _eatenAmount: number, _foodRatio: number, _animalSound: string, _lesserRatio: number) {

            this.name = _name;
            this.animalType = _animalType;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.foodRatio = _foodRatio;
            this.animalSound = _animalSound;
            //this.foodRatio -= _lesserRatio;
            
            
        }

        eat() {

            let eating: string = `${this.food}: ${this.foodRatio} kg`;

            return (eating);
            
        }

        sing() {

            let lyrics: string = `Ich heiße ${this.name} und bin ${this.animalType}. Ich esse gerne ${this.eatenAmount} kg ${this.food} und mache dabei ${this.animalSound}.  `;

            return(lyrics);

          
        }

        lessRatio() {

            let lessRatio: number = this.foodRatio - this.lesserRatio;

            return(lessRatio);


        }



    }
















}
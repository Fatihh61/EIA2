namespace Döner_Trainer {

    export abstract class Vegetable {

        position: number;
        ressourceAmount: number;

        constructor() {


        }

        abstract draw(_x: number, _y: number): void;
    }
}
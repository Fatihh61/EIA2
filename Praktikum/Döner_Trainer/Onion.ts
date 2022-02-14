namespace Döner_Trainer {

    export class Onion extends Vegetable {

        constructor(_ingredientsamount: number, _resourceAmount: number) {

            super();

            this.ingredientsAmount = _ingredientsamount;
            this.resourceAmount = _resourceAmount;
        }

        public draw(): void {

 
            crc2.save();

            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.fillStyle = "#a476cf";
            crc2.strokeStyle = "black";
            crc2.strokeRect(600, 353, 75, 119);
            crc2.fillRect(600, 353, 75, 119);
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
        
    }
}
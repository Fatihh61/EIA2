namespace Döner_Trainer {


    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);



    function handleLoad(_event: Event): void {

        console.log("Hallo");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.save();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "black";
        crc2.strokeRect(0, 0, 800, 600);
        crc2.restore();


        drawKebabHouse();
    }


    function drawKebabHouse(): void {



        //Rechteck innerhalb der Küche
        crc2.save();

        crc2.lineWidth = 4;
        crc2.strokeRect(200, 100, 500, 250);
        crc2.strokeStyle = "black";
        
        crc2.restore();



        //Theke
        crc2.save();

        crc2.moveTo(700, 100);
        crc2.lineTo(800, 100);
        crc2.moveTo(700, 350);
        crc2.lineTo(800, 350);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();

        crc2.restore();



        //Theke
        crc2.save();

        crc2.lineWidth = 4;
        crc2.strokeRect(0, 350, 800, 125);
        crc2.strokeStyle = "black";

        crc2.restore();



        //Dönerspieß

        crc2.save();

        crc2.lineWidth = 4;
        crc2.fillStyle = "darkbrown";
        // crc2.ellipse(100, 225, 30, 30, 0, 0, 2 * Math.PI);
        crc2.arc(100, 225, 30, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();



        //Behälter für Ersatzzutaten

        let positionOfErsatzbehälter: number = 0;
        let numberAdditionErsatzbehälter: number = 100;

        for (let i: number = 0; i <= 4; i++) {
            crc2.save();

            crc2.lineWidth = 2;
            crc2.strokeRect(225 + positionOfErsatzbehälter, 25, 50, 50);

            positionOfErsatzbehälter += numberAdditionErsatzbehälter;            
            crc2.restore();
        } 



        //Behälter für Zutaten
        crc2.save();

        let positionOfBehälter: number = 0;
        let numberAdditionBehälter: number = 100;

        for (let i: number = 0; i <= 4; i++) {
            
            crc2.save();

            crc2.lineWidth = 2;
            crc2.ellipse(245 + positionOfBehälter, 415, 15, 30, 0, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            

            positionOfBehälter += numberAdditionBehälter;
         
            crc2.restore();
            
        } 
    }
}
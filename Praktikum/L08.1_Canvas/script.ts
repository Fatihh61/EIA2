namespace L08_CanvasAufgabe {

    //!!!!!!! In HandleLoad befinden sich mehrere Funktionen, die zufällige Objekte kreieren!!!!!!!!!!!!!!!!!!!!!!!!//


    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {


        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.fillStyle = "blue";
        crc2.fillRect(0, 0, 1300, 600);


        //drawRandomObjects();
        //drawRectangle();
        //drawMiniCircles();
        drawRandom();


    }


    function drawRectangle(): void {



        for (let i: number = 0; i < 100; i++) {

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 200;

            





            crc2.transform(1, 0.5, -0.5, 1, 500, 30);
            crc2.fillStyle = randomColor;
            crc2.scale(0.5, 0.5);
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);

            crc2.transform(1, 0.5, -0.5, 1, 60, 30);
            crc2.fillStyle = randomColor;
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);

            crc2.transform(1, 0.5, -0.5, 1, 60, 30);
            crc2.fillStyle = randomColor;
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);

            crc2.transform(1, 0.5, -0.5, 1, 60, 30);
            crc2.fillStyle = randomColor;
            crc2.fillRect(randomNumberX, randomNumberY, 250, 100);



        }


    }


    function drawRandomObjects(): void {

        let arrayWidth: number[] = [100, 200, 300, 400, 500, 600];
        let arrayHeight: number[] = [100, 200, 300, 400, 500, 600];


        for (let i: number = 75; i > 0; i--) {

            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 600;

            let randomNumberXCircle: number = Math.random() * 1000;
            let randomNumberYCircle: number = Math.random() * 600;

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke: string = "#" + Math.floor(Math.random() * 16777215).toString(16);

            

            crc2.beginPath();
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.moveTo(randomNumberX, randomNumberY);
            crc2.lineTo(randomNumberX, randomNumberY + 70);
            crc2.lineTo(randomNumberX + 80, randomNumberY + 35);
            crc2.closePath();
            crc2.lineWidth = 4;
            crc2.scale(1.1, 1.1);
            crc2.stroke();
            crc2.fill();
            
            

            crc2.beginPath();
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.arc(randomNumberXCircle, randomNumberYCircle, 50, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

    }

    function drawRandom(): void {

        let arrayWidth: number[] = [100, 200, 300, 400, 500, 600];
        let arrayHeight: number[] = [100, 200, 300, 400, 500, 600];

        crc2.save();

        for (let i: number = 40; i > 0; i--) {

            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 600;

            let randomNumberXCircle: number = Math.random() * 1000;
            let randomNumberYCircle: number = Math.random() * 600;

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke: string = "#" + Math.floor(Math.random() * 16777215).toString(16);


            
            

            crc2.beginPath();
            crc2.fillRect(0, 0, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 0, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            

           
        }

        crc2.restore();
        crc2.save();

        for (let i: number = 40; i > 0; i--) {

            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 600;

            let randomNumberXCircle: number = Math.random() * 1000;
            let randomNumberYCircle: number = Math.random() * 600;

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke: string = "#" + Math.floor(Math.random() * 16777215).toString(16);

            debugger;

            

            crc2.beginPath();
            crc2.fillRect(0, 150, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 150, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            
        }

        crc2.restore();

        crc2.restore();
        crc2.save();

        for (let i: number = 40; i > 0; i--) {

            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 600;

            let randomNumberXCircle: number = Math.random() * 1000;
            let randomNumberYCircle: number = Math.random() * 600;

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke: string = "#" + Math.floor(Math.random() * 16777215).toString(16);

            debugger;

            

            crc2.beginPath();
            crc2.fillRect(0, 300, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 300, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            
        }

        crc2.restore();

        for (let i: number = 40; i > 0; i--) {

            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 600;

            let randomNumberXCircle: number = Math.random() * 1000;
            let randomNumberYCircle: number = Math.random() * 600;

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke: string = "#" + Math.floor(Math.random() * 16777215).toString(16);

            debugger;

            

            crc2.beginPath();
            crc2.fillRect(0, 450, 200, 150);
            crc2.translate(50, 0);
            crc2.fillRect(0, 450, 200, 150);
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            
        }

        crc2.restore();



    }


    function drawMiniCircles(): void {

        let arrayWidth: number[] = [100, 200, 300, 400, 500, 600];
        let arrayHeight: number[] = [100, 200, 300, 400, 500, 600];

        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.fillRect(320, 100, 600, 450);
        crc2.closePath();


        for (let i: number = 150; i > 0; i--) {

            let randomNumberX: number = Math.random() * 1000;
            let randomNumberY: number = Math.random() * 600;
            let randomNumberScale: number;
            let randomNumberCircleX: number = Math.random() * 450;
            let randomNumberCircleY: number = Math.random() * 350;

            let numbX: number = randomNumberCircleX + 400;
            let numbY: number = randomNumberCircleY + 150;

            let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let randomColorStroke: string = "#" + Math.floor(Math.random() * 16777215).toString(16);


            //debugger;

            crc2.beginPath();
            crc2.fillStyle = randomColor;
            crc2.strokeStyle = randomColorStroke;
            crc2.arc(numbX, numbY, 50, 0, 2 * Math.PI);
            crc2.lineWidth = 4;
            crc2.fill();
            crc2.scale(1, 1);
            crc2.stroke();
            crc2.closePath();
        }

    }










    /*
    crc3.beginPath();
    //Arc erstellt Bogen/Kurven, x/y = x/y Koordinate für Zentrum des Zirkels, r = Radius des Zirkels (also Größe), sAngle = Startwinkel, eAngle = Endwinkel
    crc3.arc(180, 50, 30, 20, 5 * Math.PI);
    //Beendet den begonnen Pfad und verbindet Startpunkt mit Endpunkt
    crc3.closePath();
    //Zeichnet Kontur des Pfades
    crc3.stroke();
    */

    /*
 
    crc3.beginPath();
    crc3.arc(300, 200, 50, 0, 2 * Math.PI);
    crc3.fillStyle = "#006400";
    crc3.stroke();
    crc3.closePath();
 
    */






}
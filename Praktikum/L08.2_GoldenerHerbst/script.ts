namespace L08_GoldenerHerbst {

    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let golden: number = 0.62;

    function handleLoad(): void {

        //Canvas Element Zugriff
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Goldener Schnitt
        let horizone: number = crc2.canvas.height * golden;

        //Startposition für den ersten Berg
        let startPointofFirstMountainX: number = Math.random() * (-50) - 80;





        drawBackGround();
        drawCloud();
        drawMountains(startPointofFirstMountainX, horizone);
        //drawTree(0, horizone - 50);
        //drawField(0, horizone + 150);
    }


    function drawBackGround(): void {

        //Gradient für den gesamten Hintergrund
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }



    function drawCloud(): void {

        //Path2D für die Wolkenpartikel
        let clouds: Path2D = new Path2D();

        //Gradient für die Wolkenpartikel
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 50);

        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.07)");

        crc2.save();


        for (let i: number = 30; i > 0; i--) {

            let numbX: number = Math.random() * 100 + 650;
            let numbY: number = Math.random() * 100 + 50;
            let translateX: number = Math.random() * (-4.5) + (-3.5);
            let translateY: number = Math.random() * (-0.2);



            clouds.arc(numbX, numbY, 15, 0, 2 * Math.PI);

            crc2.beginPath();
            crc2.fillStyle = gradient;
            crc2.translate(translateX, translateY);
            crc2.fill(clouds);
            crc2.stroke();
            crc2.closePath();
        }

        crc2.restore();
    }


    function drawMountains(_startPointFirstMountainX: number, _horizoneY: number): void {

        //Gradient für die Berge
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, _horizoneY);
        gradient.addColorStop(0, "lightgrey");
        gradient.addColorStop(1, "black");

        let x: number = 0;
        


        debugger;


        crc2.save();

        //Beginn der Zeichnung für die Berge
        crc2.beginPath();
        crc2.moveTo(_startPointFirstMountainX, _horizoneY);

        for (let i: number = 8; i > 0; i--) {

            
            //Zufällige Zahl für Zeichnung in X und Y Richtung
            let drawLineRandomX: number = Math.random() * crc2.canvas.width;
            let drawLineRandomY: number = Math.random() * 50 + 150;

            x += drawLineRandomX;

            /*do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = - _min - Math.random() * (_max - _min);
    
                crc2.lineTo(x, y);
    
            } while (x < crc2.canvas.width);
            */

            console.log(drawLineRandomX);
            console.log(drawLineRandomY);

            crc2.strokeStyle = "grey";
            crc2.lineWidth = 5;
            crc2.lineTo(drawLineRandomX, drawLineRandomY);
            crc2.lineTo(drawLineRandomX + 150, _horizoneY);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.stroke();
            
        }
        crc2.closePath();
        crc2.restore();
    }



    function drawTree(_startPositionX: number, _startPositionY: number): void {

        crc2.save();

        crc2.fillStyle = "brown";
        crc2.fillRect(_startPositionX + 100, _startPositionY, 20, 70);

        crc2.restore();

        crc2.save();

        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "black";
        crc2.moveTo(_startPositionX + 100, _startPositionY);
        crc2.lineTo(-10, 0);
        crc2.lineTo(10, 20);
        crc2.lineTo(5, 20);
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }



    function drawField(_startPositionX: number, _startPositionY: number): void {

        crc2.save();

        crc2.fillStyle = "green";
        crc2.fillRect(_startPositionX, _startPositionY, 800, 78);

        crc2.restore();
    }

















}
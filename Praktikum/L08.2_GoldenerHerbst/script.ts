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

        let randomFirstTreeX: number = Math.random() * 100;





        drawBackGround();
        drawCloud();
        drawMountains(startPointofFirstMountainX, horizone);
        //drawTree(0, horizone - 50);
        drawTree2(randomFirstTreeX, horizone + 50);
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

            console.log(translateX);
            console.log(translateY);





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
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 150, 0, _horizoneY);
        gradient.addColorStop(1, "grey");
        gradient.addColorStop(0, "white");

        let x: number = 0;
        let drawLineRandomX: number = 0;



        //debugger;


        crc2.save();

        //Beginn der Zeichnung für die Berge


        for (let i: number = 8; i > 0; i--) {


            //Zufällige Zahl für Zeichnung in X und Y Richtung
            drawLineRandomX = Math.random() * 50 + 100;
            let drawLineRandomY: number = Math.random() * 80 + 50;

            x += drawLineRandomX;



            console.log(drawLineRandomX);
            console.log(drawLineRandomY);

            crc2.beginPath();
            crc2.moveTo(_startPointFirstMountainX, _horizoneY);
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 2;
            crc2.lineTo(x - 50, drawLineRandomY);
            crc2.lineTo(x + 150, _horizoneY);
            crc2.fillStyle = gradient;
            crc2.fill();


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
        crc2.strokeStyle = "green";
        crc2.moveTo(_startPositionX + 100, _startPositionY);
        crc2.lineTo(-10, 0);
        crc2.lineTo(10, 20);
        crc2.lineTo(5, 20);
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();

        crc2.restore();
    }



    function drawField(_startPositionX: number, _startPositionY: number): void {

        crc2.save();

        crc2.fillStyle = "green";
        crc2.fillRect(_startPositionX, _startPositionY, 800, 78);

        crc2.restore();
    }



    function drawTree2(_startPositionX: number, _startPositionY: number): void {

        let treeTrunkX: number = 25;
        let treeTrunkY: number = 50;
        let treeBushX: number = 12.5;
        let treeBushX2: number = 25;
        let treeBushX3: number = 37.5;
        let treeBushX4: number = 50;
        let treeBushY: number = 50;
        let treeBushY2: number = 75;

        let xAdd: number = 0;
        let drawRandomTreeOnX: number;




        crc2.save

        /*
        crc2.beginPath();
        crc2.moveTo(_startPositionX, _startPositionY);
        console.log(_startPositionX, _startPositionY);
        crc2.lineTo(_startPositionX + treeTrunkX, _startPositionY);
        crc2.lineTo(_startPositionX + treeTrunkX, _startPositionY - treeTrunkY);
        crc2.lineTo(_startPositionX, _startPositionY - treeTrunkY);
        crc2.lineTo(_startPositionX, _startPositionY);
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();



        crc2.beginPath();
        crc2.moveTo(_startPositionX, _startPositionY - treeTrunkY);
        crc2.lineTo(_startPositionX - treeBushX2, _startPositionY - treeBushY);
        crc2.lineTo(_startPositionX - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
        crc2.lineTo(_startPositionX + treeBushX4, _startPositionY - treeBushY);
        crc2.lineTo(_startPositionX + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.stroke();
        */
        for (let i: number = 0; i < 5; i++) {

            drawRandomTreeOnX = Math.random() * 50 + 70;

            xAdd += drawRandomTreeOnX;

            console.log(drawRandomTreeOnX);
            console.log(xAdd);
            

            crc2.beginPath();
            crc2.moveTo(_startPositionX, _startPositionY);
            console.log(_startPositionX, _startPositionY);
            crc2.lineTo(_startPositionX + treeTrunkX, _startPositionY);
            crc2.lineTo(_startPositionX + treeTrunkX, _startPositionY - treeTrunkY);
            crc2.lineTo(_startPositionX, _startPositionY - treeTrunkY);
            crc2.lineTo(_startPositionX, _startPositionY);
            crc2.stroke();
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();



            crc2.beginPath();
            crc2.moveTo(_startPositionX, _startPositionY - treeTrunkY);
            crc2.lineTo(_startPositionX - treeBushX2, _startPositionY - treeBushY);
            crc2.lineTo(_startPositionX - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            crc2.lineTo(_startPositionX + treeBushX4, _startPositionY - treeBushY);
            crc2.lineTo(_startPositionX + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.stroke();


        }


        /*
        crc2.lineTo(_startPositionX + treeTrunkX, _startPositionY - 50);
        crc2.lineTo(_startPositionX + treeTrunkX + treeTrunkX, _startPositionY - 50);
        crc2.lineTo(_startPositionX + treeTrunkX - treeBushX , _startPositionY - 50 - treeBushY);
        //Hälfte des Baumes fertig
        crc2.lineTo(_startPositionX + treeTrunkX - treeBushX2 , _startPositionY - 50);
        crc2.stroke();
        */
        crc2.restore;




    }

















}
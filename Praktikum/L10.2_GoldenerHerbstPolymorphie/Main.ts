/*
Aufgabe: <Aufgabe 11.1_GoldenerHerbstAdvanced>
Name: <Fatih Temiz>
Matrikel-Nummer: <26825>
Datum: <15.01.2022>
Quellen: Eyüp Öcal, David Eichler (Konzept)
*/



//Das mit der Teleportation des Eichhörnchen konnte ich leider nicht lösen

namespace L10_HerbstwiesePolymorphie {

    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    let golden: number = 0.62;

    let moveables: Moveable[] = [];
    let squirrelArray: Squirrel[] = [];
    let nutArray: Hazelnut[] = [];
    let positionArray: number[] = [];

    let isPressed: boolean = false;

    let cloudAsSubclass: Cloud;
    let hazelnutObject: Hazelnut;

    let squirrelAsSubclass: Squirrel;

    let imgDataBackground: ImageData;
    let imgDataSun: ImageData;
    let imgDataSunNight: ImageData;
    let imgDataMountains: ImageData;
    let imgDataTree: ImageData;

    


    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Goldener Schnitt
        let horizone: number = crc2.canvas.height * golden;

        //Startposition für den ersten Berg
        let startPointofFirstMountainX: number = Math.random() * (-50) - 80;

        drawBackground();
        drawSun(150, 150);
        createCloud();
        drawMountains(startPointofFirstMountainX, horizone);
        drawTree(horizone + 50);
        createSquirrel();
        createLeaf();

        canvas.addEventListener("mousedown", createHazelnut);


        window.setInterval(update, 20);

        drawSunNight(150, 150);

        document.addEventListener("keypress", changeSun);
    }

    function drawBackground(): void {

        //Gradient für den gesamten Hintergrund
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        gradient.addColorStop(0, "#87CEFF");
        gradient.addColorStop(.5, "#87CEFF");
        gradient.addColorStop(.7, "green");
        gradient.addColorStop(1, "hsla(38, 100%, 37%, 0.76)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        imgDataBackground = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_positionX: number, _positionY: number): void {
        let r1: number = 30;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        imgDataSun = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawMountains(_startPointFirstMountainX: number, _horizoneY: number): void {

        //Gradient für die Berge
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 150, 0, _horizoneY);
        gradient.addColorStop(1, "grey");
        gradient.addColorStop(0, "white");

        let x: number = 0;
        let drawLineRandomX: number = 0;

        crc2.save();

        for (let i: number = 8; i > 0; i--) {


            //Zufällige Zahl für Zeichnung in X und Y Richtung
            drawLineRandomX = Math.random() * 50 + 100;
            let drawLineRandomY: number = Math.random() * 80 + 50;

            x += drawLineRandomX;

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
        imgDataMountains = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawTree(_startPositionY: number): void {

        let treeTrunkX: number = 25;
        let treeTrunkY: number = 50;
        let treeBushX2: number = 25;
        let treeBushX3: number = 37.5;
        let treeBushX4: number = 50;
        let treeBushY: number = 50;
        let treeBushY2: number = 75;

        let xAdd: number = 0;
        let drawRandomTreeOnX: number;

        let _treeDistanceFromEachOther: number = 0;
        let distanceAdd: number;

        let randomColor: number;

        crc2.save();

        for (let i: number = 0; i < 15; i++) {

            drawRandomTreeOnX = Math.random() * 50 + 70;

            xAdd += drawRandomTreeOnX;

            distanceAdd = Math.random() * 20 + 30;
            _treeDistanceFromEachOther += distanceAdd;

            randomColor = Math.random() * 70 + 30;

            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeTrunkX, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther, _startPositionY);
            crc2.stroke();
            crc2.fillStyle = "hsla(21, 100%, 23%, 1)";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(xAdd - _treeDistanceFromEachOther, _startPositionY - treeTrunkY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther - treeBushX2 + treeBushX3, _startPositionY - treeBushY - treeBushY2);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4, _startPositionY - treeBushY);
            crc2.lineTo(xAdd - _treeDistanceFromEachOther + treeBushX4 - treeBushX4, _startPositionY - treeBushY);
            crc2.fillStyle = "hsla(123," + randomColor + "100%, 18%, 1)";
            crc2.fill();
            crc2.stroke();
        }
        crc2.restore();
        imgDataTree = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function createLeaf(): void {

        for (let i: number = 0; i < 20; i++) {

            let colors: string[] = ["brown", "orange"];
            let randomNumberForColor: number = Math.floor(Math.random() * 2);
            let randomLeafType: number = Math.floor(Math.random() * 2);

            let leaf: Leaf = new Leaf(colors[randomNumberForColor], randomLeafType);
            moveables.push(leaf);
            //leaf.draw();
        }
    }

    function createCloud(): void {
        cloudAsSubclass = new Cloud();
        moveables.push(cloudAsSubclass);
    }

    function createHazelnut(_event: MouseEvent): void {

        let positionX: number = _event.clientX;
        let positionY: number = _event.clientY;
        positionArray.push(positionX);
        positionArray.push(positionY);

        hazelnutObject = new Hazelnut(_event.clientX, _event.clientY);
        moveables.push(hazelnutObject);
        nutArray.push(hazelnutObject);
        console.log(nutArray);
        // createSquirrel();


        if (squirrelArray.length == nutArray.length) {

            for (let i: number = 0; i <= positionArray.length; i++) {

                squirrelAsSubclass.changePosition(positionArray[0], positionArray[1]);
                // squirrelAsSubclass.position.x = positionArray[i];
                console.log(squirrelAsSubclass.position.x);
                i++;
                // squirrelAsSubclass.position.y = positionArray[i];
                console.log(squirrelAsSubclass.position.y);
            }
        }


    }

    function createSquirrel(): void {

        squirrelAsSubclass = new Squirrel;
        moveables.push(squirrelAsSubclass);
        squirrelArray.push(squirrelAsSubclass);
        // squirrelArray.splice(1, 1);
        console.log(squirrelArray);


        // if (squirrelArray.length == nutArray.length) {

        //     for (let i: number = 0; i <= positionArray.length; i++) {

        //         squirrelAsSubclass.changePosition(positionArray[0], positionArray[1]);
        //         // squirrelAsSubclass.position.x = positionArray[i];
        //         console.log(squirrelAsSubclass.position.x);
        //         i++;
        //         // squirrelAsSubclass.position.y = positionArray[i];
        //         console.log(squirrelAsSubclass.position.y);
        //     }
        // }

    }

    function drawSunNight(_positionX: number, _positionY: number): void {

        if (isPressed == true) {
            let r1: number = 30;
            let r2: number = 120;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "HSLA(30, 100%, 50%, 0)");
            crc2.save();
            crc2.translate(_positionX, _positionY);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            imgDataSunNight = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }

    function update(): void {

        if (isPressed == false) {
            crc2.putImageData(imgDataBackground, 0, 0);
            crc2.putImageData(imgDataSun, 0, 0);
            crc2.putImageData(imgDataMountains, 0, 0);
            crc2.putImageData(imgDataTree, 0, 0);
            //crc2.putImageData(imgDataHazelnut, 0, 0);
            console.log("Ist noch bei false");
            
        } else if (isPressed == true) {
            crc2.putImageData(imgDataBackground, 0, 0);
            // drawSunNight(150, 150);
            crc2.putImageData(imgDataSunNight, 0, 0);
            crc2.putImageData(imgDataMountains, 0, 0);
            crc2.putImageData(imgDataTree, 0, 0);
            console.log("Gewechselt auf true");
            //drawSunNight(150, 150);
        }

        for (let i: number = 0; i < moveables.length; i++) {
            moveables[i].move(1 / 50, 0);
            moveables[i].draw();
        }
    }

    function changeSun(_event: KeyboardEvent): void {
        isPressed = true;
        console.log("isPressed = true");
    }
}
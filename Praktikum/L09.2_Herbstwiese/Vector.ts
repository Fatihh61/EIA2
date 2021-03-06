namespace L09_Herbstwiese {

    export class Vector {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {

            this.set(_x, _y);
            //this.x = _x;
            //this.y = _y;
        }


        set(_x: number, _y: number): void {

            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {

            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addEnd: Vector): void {

            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            console.log(direction);
            console.log(length);
            
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        randomForLeaf(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            console.log(direction);
            console.log(length);
            
            this.set(Math.cos(1), Math.sin(1));
            this.scale(length);
        }

        randomForSquirrel(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            console.log(direction);
            console.log(length);
            
            this.set(Math.cos(1), Math.sin(0));
            this.scale(length);
        }
    }








}
namespace L10_HerbstwiesePolymorphie {

    export class Vector {

        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {

            this.set(_x, _y);
            //this.x = _x;
            //this.y = _y;
        }

        static getDifference(_v0: Vector, _v1: Vector): Vector {
            let vector: Vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
            return vector;
        }


        public set(_x: number, _y: number): void {

            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {

            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addEnd: Vector): void {

            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }

        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;
            
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        public randomForLeaf(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            
            this.set(Math.cos(1), Math.sin(1));
            this.scale(length);
        }

        public randomForSquirrel(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            
            this.set(Math.cos(1), Math.sin(0));
            this.scale(length);
        }

        copy(): Vector {

            return new Vector(this.x, this.y);
        }
    }








}
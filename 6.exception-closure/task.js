function parseCount(value) {

if (Number.isNaN(Number.parseFloat(value))){ 
       throw new Error ('Невалидное значение');
        }
        return parseFloat(Number(value));
}

function validateCount(value) {
try {
    return parseCount(value);  
} catch (Error) {
    return Error;
} 

}


class Triangle {
    constructor (sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            throw new Error ('Треугольник с такими сторонами не существует');
        } 
    }
    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    get area() {
        let p = this.perimeter / 2;
        return Number((Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC)).toFixed(3)));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
    return new Triangle(sideA, sideB, sideC);
} catch (Error) {
    return {
        get perimeter () {return 'Ошибка! Треугольник не существует'},
        get area () {return 'Ошибка! Треугольник не существует'}
    }
}
}
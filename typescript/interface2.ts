interface Calculator {
    add(x: number, y: number): void;
    sub(x: number, y: number): void;
}

interface SciCalculator extends Calculator {
    square(x: number): void;
}
class Calc implements SciCalculator {
    add = (x: number, y: number) => {
        console.log(x + y);
    }
    sub = (x: number, y: number) => {
        console.log(x - y);
    }
    square = (x: number) => {
        console.log(x * x);
    }
}
function performOperation(calc: SciCalculator, x: number, y: number) {

    calc.add(x, y);
    calc.sub(x, y);
    calc.square(x);
}

performOperation(new Calc(), 50, 20);


class Calci {
    constructor(public calc: SciCalculator) { }
    CalciApp = (x: number, y: number, opr: string) => {
        if (opr == "A") {
            this.calc.add(x, y);
        }
        if (opr == "S") {
            this.calc.sub(x, y);
        }
        else {
            this.calc.square(x);
        }
    }

}

var calci: Calci = new Calci(new Calc());
calci.CalciApp(50, 30, "A");
calci.CalciApp(60, 50, "S");
calci.CalciApp(25, 0, "Sq");
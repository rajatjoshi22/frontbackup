var Calc = /** @class */ (function () {
    function Calc() {
        this.add = function (x, y) {
            console.log(x + y);
        };
        this.sub = function (x, y) {
            console.log(x - y);
        };
        this.square = function (x) {
            console.log(x * x);
        };
    }
    return Calc;
}());
function performOperation(calc, x, y) {
    calc.add(x, y);
    calc.sub(x, y);
    calc.square(x);
}
performOperation(new Calc(), 50, 20);
var Calci = /** @class */ (function () {
    function Calci(calc) {
        var _this = this;
        this.calc = calc;
        this.CalciApp = function (x, y, opr) {
            if (opr == "A") {
                _this.calc.add(x, y);
            }
            if (opr == "S") {
                _this.calc.sub(x, y);
            }
            else {
                _this.calc.square(x);
            }
        };
    }
    return Calci;
}());
var calci = new Calci(new Calc());
calci.CalciApp(50, 30, "A");
calci.CalciApp(60, 50, "S");
calci.CalciApp(25, 0, "Sq");

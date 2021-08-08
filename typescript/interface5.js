var createShape = function (shape) {
    shape.printArea();
};
var Rectengle = /** @class */ (function () {
    function Rectengle(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.printArea = function () {
            console.log("area of rectengle :" + (_this.x * _this.y));
        };
    }
    return Rectengle;
}());
createShape(new Rectengle(10, 20));
var square = {
    x: 40,
    y: 80,
    printArea: function () { console.log("area of square :" + (this.x * this.x)); }
};
console.log(square.x);
createShape(square);

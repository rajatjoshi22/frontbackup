var Stud = /** @class */ (function () {
    function Stud() {
    }
    Object.defineProperty(Stud.prototype, "studName", {
        get: function () {
            return this._studName;
        },
        set: function (name) {
            this._studName = name;
        },
        enumerable: false,
        configurable: true
    });
    //our custom method
    Stud.prototype.setStud = function (name) {
        this._studName = name;
    };
    Stud.prototype.move = function () {
        console.log("hi");
    };
    return Stud;
}());
var stud1 = new Stud();
stud1.studName = "Rajat";
console.log(stud1.studName);
stud1.move();

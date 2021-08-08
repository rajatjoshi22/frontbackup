var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model) {
        var _this = this;
        this.brand = brand;
        this.model = model;
        this.getBrand = function () {
            return _this.brand;
        };
    }
    return Vehicle;
}());
var Accessories = /** @class */ (function () {
    function Accessories(aac1, acc2) {
        this.aac1 = aac1;
        this.acc2 = acc2;
    }
    Accessories.prototype.getAccessories = function () {
        console.log(this.aac1 + " " + this.acc2);
    };
    return Accessories;
}());
var MyDetails = /** @class */ (function () {
    function MyDetails(brand, model, aac1, acc2) {
        this.brand = brand;
        this.model = model;
        this.aac1 = aac1;
        this.acc2 = acc2;
    }
    MyDetails.prototype.getBrand = function () {
        return "Bajaj";
    };
    MyDetails.prototype.getAccessories = function () {
        console.log(this.aac1 + " " + this.acc2);
    };
    MyDetails.prototype.getMileage = function () { };
    return MyDetails;
}());
var details = new MyDetails("Samsung", "A70s", "charger", "earphone");
console.log(details.getBrand());
details.getAccessories();
details.getMileage();

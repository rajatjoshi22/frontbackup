var Mobile = /** @class */ (function () {
    function Mobile(brand, model, price, os) {
        var _this = this;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.os = os;
        this.showDetails = function () {
            console.log("brand: " + _this.brand + " || model: " + _this.model + " || price:" + _this.price + " || os:" + _this.os);
        };
        this.printAccessories = function () {
            var accessories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                accessories[_i] = arguments[_i];
            }
            accessories.forEach(function (accessory) {
                console.log(accessory);
            });
        };
    }
    return Mobile;
}());
var mobile1 = new Mobile("Samsung", "A50s", 21000, "android");
var mobile2 = new Mobile("Apple", "Iphone12", 122000);
mobile1.showDetails();
mobile2.showDetails();
mobile1.printAccessories("charger", "earphone");
mobile2.printAccessories("Kuch nahi milega");

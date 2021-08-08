var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("roaming around");
    };
    Animal.prototype.printName = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.color = color;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log("making cat sound");
        console.log("cat of color " + this.color);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, bread) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.bread = bread;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log("making dog sound");
    };
    Dog.prototype.printBread = function () {
        console.log(this.name + " id of bread " + this.bread);
    };
    return Dog;
}(Animal));
var cat = new Cat("Tom", "Grey");
var dog = new Dog("Jack", "rotwiller");
cat.makeSound();
cat.move();
cat.printName();
dog.makeSound();
dog.move();
dog.printName();
var dog2 = dog;
dog2.printBread();

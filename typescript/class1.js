var MyStudent = /** @class */ (function () {
    function MyStudent(name, mobile, city, company, age) {
        var _this = this;
        if (company === void 0) { company = "ABC"; }
        this.name = name;
        this.mobile = mobile;
        this.city = city;
        this.company = company;
        this.age = age;
        this.printDetails = function () {
            console.log(_this.name + " is from " + _this.city);
            console.log("" + _this.age);
        };
        this.showHobbies = function () {
            var hobbies = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                hobbies[_i] = arguments[_i];
            }
            hobbies.forEach(function (hobby) {
                console.log(hobby);
            });
        };
    }
    return MyStudent;
}());
var student1 = new MyStudent("Rajat", 9411671384, "Delhi", "", 20);
student1.printDetails();
student1.showHobbies("sports", "coding");
var student2 = new MyStudent("Rajat", 9411671384);
student2.printDetails();
student2.showHobbies("cricket", "volley ball", "football");

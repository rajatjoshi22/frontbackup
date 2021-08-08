var Employees = /** @class */ (function () {
    function Employees(name, mobile, city, salary, company, age) {
        this.name = name;
        this.mobile = mobile;
        this.city = city;
        this.salary = salary;
        this.company = company;
        this.age = age;
    }
    Employees.prototype.printDetails = function () {
        console.log(this.name + " is from " + this.city);
        console.log("" + this.age);
    };
    Employees.prototype.calcBonus = function () {
        console.log("bonus is::", (this.salary * 0.75));
    };
    return Employees;
}());
var employee = new Employees("rajat", 123456, "Delhi", 24000);
employee.printDetails();
console.log(employee.mobile);
var employee2 = employee;
employee2.calcBonus();

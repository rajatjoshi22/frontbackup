var message = "Hello World";
console.log(message);
var value;
value = "Ram";
console.log("Welcome", value);
console.log(typeof (value));
value = 200;
console.log("val", value);
console.log(typeof (value));
var msg = "hello";
console.log(typeof (msg));
///functions in ts
function calculator(num1, num2) {
    return num1 + num2;
}
console.log(calculator(10, 30));
function greet(name) {
    return "Great Day" + name;
}
var greeter = function (msg) {
    return msg;
};
console.log(greeter("different world game!!!!!"));
console.log(greet("Rajat"));
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
function adddSquareNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sqtSum = 0;
    for (var num = 0; num < numbers.length; num++) {
        sqtSum += numbers[num] * numbers[num];
    }
    console.log(sqtSum);
}
function mutipleByHundered() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var hunSum = 0;
    numbers.forEach(function (number) {
        hunSum += number * 100;
    });
    console.log(hunSum);
}
function printDetails(name, city) {
    if (city === void 0) { city = "delhi"; }
    console.log("name" + name);
    console.log("city" + city);
}
printDetails("Rajat");
addNumbers(10, 67, 56, 44);
adddSquareNumbers(25, 67, 56, 90);
mutipleByHundered(777, 999);

function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([10, 20, 30, 40]);
var myStrArr = getArray(["Rajat", "Prashant", "keon"]);
myNumArr.push(1300);
myStrArr.push("Eon");
// myNumArr.push("Hi");
// myStrArr.push(500);
myNumArr.forEach(function (number) {
    console.log(number);
});
myStrArr.forEach(function (name) {
    if (name.charAt(1) == "a") {
        console.log(name);
    }
});

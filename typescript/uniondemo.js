var printDetails = function (value) {
    if (typeof (value) == "string") {
        console.log("welcome ", value);
    }
    else {
        var num = value * value;
        console.log("Square is: ", num);
    }
};
printDetails("Rajat");
printDetails(20);
var printValues = function (val) {
    if (Array.isArray(val)) {
        console.log("print array:" + val);
        console.log.apply(console, val);
    }
    if (typeof (val) == "object") {
        console.log("printing object :", val);
    }
};
printValues(['raj', 'Raju']);
console.log({ name: "Rajat", city: "Delhi" });

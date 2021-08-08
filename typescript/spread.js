var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var myarr = [1, 2, 3, 4, 5];
var newarr = __spreadArray(__spreadArray([], myarr), [7, 8, 9]);
for (var _i = 0, newarr_1 = newarr; _i < newarr_1.length; _i++) {
    var i = newarr_1[_i];
    console.log(i);
}
var student = { name: "Rajat", age: 22 };
var details = { mobile: 941167, city: "Delhi" };
var newStudent = __assign(__assign({}, student), details);
var newemployee = __assign(__assign(__assign({}, student), details), { salary: 25000.0 });
console.log(newemployee);
for (var j in newStudent) {
    console.log(j, newStudent[j]);
}

/// <reference path="Productspace.ts"/>
var Productspaceone;
(function (Productspaceone) {
    var Product = /** @class */ (function () {
        function Product(itemName, quantity, cost) {
            var _this = this;
            this.itemName = itemName;
            this.quantity = quantity;
            this.cost = cost;
            this.findTotal = function () {
                console.log("billing details");
                return (_this.quantity * _this.cost);
            };
        }
        return Product;
    }());
    Productspaceone.Product = Product;
    var Stud = /** @class */ (function () {
        function Stud(coursefee, count) {
            var _this = this;
            this.coursefee = coursefee;
            this.count = count;
            this.findTotal = function () {
                console.log("billing course");
                return (_this.coursefee * _this.count);
            };
        }
        return Stud;
    }());
    Productspaceone.Stud = Stud;
})(Productspaceone || (Productspaceone = {}));
/// <reference path="Productspace.ts"/>
var Productspaceone;
(function (Productspaceone) {
    var Sports = /** @class */ (function () {
        function Sports(score, matches) {
            var _this = this;
            this.score = score;
            this.matches = matches;
            this.findTotal = function () {
                console.log("total for matches");
                return (_this.score * _this.matches);
            };
        }
        return Sports;
    }());
    Productspaceone.Sports = Sports;
})(Productspaceone || (Productspaceone = {}));
/// <reference path="Productspace.ts"/>
/// <reference path="Prodspaceone.ts"/>
/// <reference path="Prodspacetwo.ts"/>
function printBillingDetails(billing) {
    console.log('/////////////////');
    console.log(billing.findTotal());
}
var product = new Productspaceone.Product("mobile", 50, 25000);
printBillingDetails(product);
var student = new Productspaceone.Stud(22000, 5);
printBillingDetails(student);
var sport = new Productspaceone.Sports(263, 21);
printBillingDetails(sport);

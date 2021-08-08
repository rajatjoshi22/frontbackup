/// <reference path="Productspace.ts"/>
/// <reference path="Prodspaceone.ts"/>
/// <reference path="Prodspacetwo.ts"/>

function printBillingDetails(billing:ProductSpace.Billinginfo){
console.log('/////////////////');
console.log(billing.findTotal());

}

let product:ProductSpace.Billinginfo=new Productspaceone.Product("mobile",50,25000);
printBillingDetails(product);

let student:ProductSpace.Billinginfo=new Productspaceone.Stud(22000,5);
printBillingDetails(student);

let sport:ProductSpace.Billinginfo=new Productspaceone.Sports(263,21);
printBillingDetails(sport);
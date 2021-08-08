/// <reference path="Productspace.ts"/>
namespace Productspaceone{
    export class Product implements ProductSpace.Billinginfo{
        constructor(public itemName:string,public quantity:number,public cost:number){}
        findTotal=()=>{
            console.log("billing details");
          return (this.quantity*this.cost);
        }
    }

    export class Stud implements ProductSpace.Billinginfo{
        constructor(public coursefee:number,public count:number ){}
        findTotal=()=>{
            console.log("billing course");
           return (this.coursefee*this.count);
        }
    }
}
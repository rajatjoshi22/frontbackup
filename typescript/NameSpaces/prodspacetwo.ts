/// <reference path="Productspace.ts"/>
namespace Productspaceone{
    export class Sports implements ProductSpace.Billinginfo{
        constructor(public score:number,public matches:number){}
        findTotal=()=>{
            console.log("total for matches");
            return (this.score*this.matches);
        }
    }
}
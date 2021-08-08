class Vehicle{
    constructor(public brand:string,public model:string ){


    }

    getBrand=():string=>{
     return this.brand;
    }
}
class Accessories{
    constructor(public aac1:string,public acc2:string ){

       
    }
    getAccessories():void{
     console.log(this.aac1+" "+this.acc2);
    }
}

interface IDetails extends Vehicle,Accessories{
    getMileage:()=>void;
}

class MyDetails implements IDetails{
    constructor(public brand:string,public model:string,public aac1:string,public acc2:string){}
 getBrand(){
     return "Bajaj";
 }   
 getAccessories(){
    console.log(this.aac1+" "+this.acc2);
 }
 getMileage(){}
}

var details:IDetails=new MyDetails("Samsung","A70s","charger","earphone");
console.log(details.getBrand());
details.getAccessories();
details.getMileage();

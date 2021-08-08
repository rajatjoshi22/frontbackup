interface Person{
name:string;
mobile:number;
city:string;
age?:number;
printDetails():void;
}

class Employees implements Person{
constructor(
    public name:string,
    public mobile:number,
    public city:string,
    public salary:number,
    public company?:string,
    public age?:number
){

}

printDetails(){
    console.log(`${this.name} is from ${this.city}`);
    console.log(`${this.age}`);
}

calcBonus(){
    console.log("bonus is::",(this.salary*0.75));
}
}

var employee:Person=new Employees("rajat",123456,"Delhi",24000);
employee.printDetails();
console.log(employee.mobile);
var employee2=employee as Employees;
employee2.calcBonus();

class Employee{
    constructor(public name:string,public city:string){

    }
    print=()=>{
        console.log('welcome');
    }
}

class Manager extends Employee{
    constructor(public name:string,public city:string,public salary:number){
        super(name,city);
    }
    print=()=>{
        console.log("Hello");
    }

    show(msg:string){
        console.log("hello" ,msg);
    }
}


const emp:Employee=new Manager("Ram","Bangalore",15000);
emp.print();
console.log(emp instanceof Employee);
console.log(emp instanceof Manager);
const mgr=emp as Manager;
mgr.print();
mgr.show("Its a new Day,Its a new world!!!!");

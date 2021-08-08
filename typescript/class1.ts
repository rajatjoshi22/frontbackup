class MyStudent{
   constructor(
    public name:string,
    public mobile:number,
    public city?:string,
    public company:string="ABC",
    public age?:number
    
    ){

   }
 

 printDetails=()=>{
    console.log(`${this.name} is from ${this.city}`);
    console.log(`${this.age}`); 
   }

 showHobbies=(...hobbies:string[])=>{
    hobbies.forEach((hobby)=>{
     console.log(hobby);
    })
 }  
}

const student1:MyStudent=new MyStudent("Rajat",9411671384,"Delhi","",20);
student1.printDetails();
student1.showHobbies("sports","coding");
const student2:MyStudent=new MyStudent("Rajat",9411671384);
student2.printDetails();
student2.showHobbies("cricket","volley ball","football");
abstract class Animal{
    constructor(
 public name:string

    ){}
move(){
    console.log("roaming around");
}
abstract makeSound():void;
printName(){
    console.log(this.name);
}
}

class Cat extends Animal{
    constructor(public name:string
        ,public color:string){
         super(name);
    }
    makeSound(){
        console.log("making cat sound");
        console.log(`cat of color ${this.color}`);
    }
}
class Dog extends Animal{
    constructor(public name:string,public bread:string){
        super(name);
   }
    makeSound(){
        console.log("making dog sound");
    }
    printBread(){
     console.log(`${this.name} id of bread ${this.bread}`);
    }
}




const cat:Animal=new Cat("Tom","Grey");
const dog:Animal=new Dog("Jack","rotwiller");
cat.makeSound();
cat.move();
cat.printName();
dog.makeSound();
dog.move();
dog.printName();
let dog2=dog as Dog;
dog2.printBread();

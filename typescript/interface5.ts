interface Shaper{
    x:number;
    y:number;
    z?:number;
    printArea:()=>void;
}

var createShape=(shape:Shaper)=>{
 shape.printArea();
}
class Rectengle implements Shaper{
    constructor(public x:number,public y:number,public z?:number){}
    printArea=()=>{
        console.log("area of rectengle :"+(this.x*this.y));
    }
}
createShape(new Rectengle(10,20));

var square={
    x:40,
    y:80,
    printArea:function(){ console.log("area of square :" +(this.x*this.x))}
    

}
console.log(square.x);
createShape(square);
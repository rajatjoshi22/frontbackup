var message:string="Hello World";
console.log(message);

var value:string|number
value="Ram";
console.log("Welcome",value);
console.log(typeof(value));

value=200;
console.log("val",value);
console.log(typeof(value));


var msg:any="hello";
console.log(typeof(msg));



///functions in ts
function calculator(num1:number,num2:number):number{
    return num1+num2;
}
console.log(calculator(10,30));

function greet(name:string):string{
    return "Great Day"+name;
}

let greeter=(msg:string)=>{
    return msg;
}

console.log(greeter("different world game!!!!!"));
console.log(greet("Rajat"));




function addNumbers(...nums:number[]):void{
var sum=0;
for(var i=0;i<nums.length;i++){
    sum+=nums[i];
}
console.log(sum);
}



function adddSquareNumbers(...numbers:number[]):void{
    var sqtSum=0;
    for(var num=0;num<numbers.length;num++){
        sqtSum+=numbers[num]*numbers[num];
    }
    console.log(sqtSum);
}

function mutipleByHundered(...numbers:number[]):void{
    var hunSum=0;
   numbers.forEach((number)=>{
       hunSum+=number*100;
   })
    console.log(hunSum);
}

function printDetails(name:string,city:string="delhi"){

    console.log("name"+name);
    console.log("city"+city);
}

printDetails("Rajat");
addNumbers(10,67,56,44);
adddSquareNumbers(25,67,56,90);
mutipleByHundered(777,999);
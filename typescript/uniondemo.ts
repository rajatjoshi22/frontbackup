var printDetails=(value:number|string):void=>{
if(typeof(value)=="string")
{
 console.log("welcome ",value);
}else{
var num=value*value;
console.log("Square is: ",num);

}
}

printDetails("Rajat");
printDetails(20);



let printValues=(val:string[]|string|Object):void=>{
    if(Array.isArray(val)){
        console.log("print array:"+val);
        console.log(...val);
    }
    if(typeof(val)=="object"){
        console.log("printing object :",val);
    }
}
printValues(['raj','Raju']);
console.log({name:"Rajat",city:"Delhi"});
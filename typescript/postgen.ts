function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}


let myNumArr=getArray([10,20,30,40]);
let myStrArr=getArray(["Rajat","Prashant","keon"]);

myNumArr.push(1300);
myStrArr.push("Eon");

// myNumArr.push("Hi");
// myStrArr.push(500);

myNumArr.forEach((number)=>{
    console.log(number);
})
myStrArr.forEach(name=>{
    if(name.charAt(1)=="a"){
        console.log(name);
    }
})
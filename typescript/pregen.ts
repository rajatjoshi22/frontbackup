function getArray1(items : any[] ) : any[] {
    return new Array().concat(items);
}
let myNumArr1 = getArray1([100, 200, 300]);
let myStrArr1 = getArray1(["Hello", "World"]);
myNumArr1.push(400); // OK
myStrArr1.push("Hello TypeScript"); // OK
myNumArr1.push("Hi"); // allows any type
myStrArr1.push(500); // OK
console.log(myNumArr1); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr1); // ["Hello", "World", "Hello TypeScript", 500]
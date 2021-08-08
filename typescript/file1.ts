export var greeting="hello world";

export function greet(){
    console.log('exported');
    ownMsg();
}
function ownMsg(){
    console.log("This function will not be exported");
}

export class Product{
    constructor(public itemName:string,public price:number){};
productInfo=()=>{
    console.log(`${this.itemName} id of price ${this.price}`);
}

}
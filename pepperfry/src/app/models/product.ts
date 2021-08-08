import { Brand } from "./brand";
import { Type } from "./type";

export class Product {
    constructor(
        public productName:string,
        public price:number,
        public type:Type,
        public brand:Brand,
        public description:string,
        public imagePath:string,
        public ratings:number
    ){}
}

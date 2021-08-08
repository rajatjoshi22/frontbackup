import { Menu } from "./menu";

export class Hotel {
    constructor(
        public hotelName:string,
        public hotelId:number,
        public imagepath:string,
        public cost:string,
        public ratings:number,
        public location:string,
        public menu:Menu[]
    ){}
}

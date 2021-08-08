import { Address } from "./address";


export class User {
    constructor(
        public loginId:string,
        public password:string,
        public userName:string,
        public mobileNumber:number,
        public address:Address
    ){
        
    }
}

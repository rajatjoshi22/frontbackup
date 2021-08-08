import { User } from "../user/models/user";
import { Movie } from "./movie";

export class Order {
constructor(
    public user:User,
    public movie:Movie,
    public ticketCount:number,
    public paymentMode:string,
    public totalPrice:number
){

}
}

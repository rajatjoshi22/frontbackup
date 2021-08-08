
import { Theatre } from "./theatre";

export class Movie {
    constructor(
        public movieName:string,
        public ratings:number,
        public movieId:number,
        public language:string,
        public genre:string,
        public imagePath:string,
        public ageCriteria:string,
        public description:string,
        public duration:string,
        public director:string,
        public actor:string,
        public actress:string,
        public day:string,
        public price:number,
        public theatre:Theatre
    ){}
}

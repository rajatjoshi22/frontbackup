export class Movie {
    constructor(
        public title:string,
        public language:string,
        public genre:string,
        public date:Date,
        public cost:number,
        public duration?:string

    ){}
}

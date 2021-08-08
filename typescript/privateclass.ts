class Stud{
    private _studName:string;
    get studName():string{
        return this._studName;
    }
    set studName(name:string){
        this._studName=name;
    }


    //our custom method
    setStud(name:string){
       this._studName=name;
    }


    move(){
        console.log("hi");
    }

}

let stud1:Stud=new Stud();
stud1.studName="Rajat";
console.log(stud1.studName);
stud1.move();



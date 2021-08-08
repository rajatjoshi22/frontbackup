var calAlphabate=(...value:string[]):void=>{
    var acount=0;
    var bcount=0;
    console.log(value);
    for(var i in value){
        if(value[i]=="a"){
         acount=acount+1;
        }
        if(value[i]=="b"){
            bcount=bcount+1;
        }
    }

    console.log("No of a :"+acount);
    console.log("No of b :"+bcount);
}

calAlphabate("a","a","b","b","a","b","b","a");
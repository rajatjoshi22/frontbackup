var myarr:number[]=[1,2,3,4,5];
var newarr:number[]=[...myarr,7,8,9];
for(var i of newarr){
    console.log(i);
}

var student={name:"Rajat",age:22};
var details={mobile:941167,city:"Delhi"};

var newStudent={...student,...details};
var newemployee={...student,...details,salary:25000.0};
console.log(newemployee);
for(var j in newStudent){
    console.log(j,newStudent[j]);
}
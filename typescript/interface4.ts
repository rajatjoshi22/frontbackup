//union types
interface Mobille {
    charging: ()=>void;
    call: ()=>void;
}
interface Laptop {
    charging: ()=>void;
    work: ()=>void;
}
// class that implements Mobile
class mymobile implements Mobille{
    charging = ()=>console.log('charging in class');
    call = ()=>console.log('calling in class');
}

class mylaptop implements Laptop{
    charging=()=>console.log("laptop charging in class");
    work=()=>console.log("laptop workking in class");
}

// // function returns mob/laptop
// function gadgetDet(): Mobille  {
//     console.log('gadgets');
//     return new mymobile();
// }
// const mobb:any  = gadgetDet();
// mobb.charging();
// mobb.call();
// // an object that has similar properties
// var mobObj = {
//     name:'a',
//     charging:()=>console.log('charging in obj'),
//     call:()=>console.log('calling in obj')
// }
// function gadgetObjDet(): Mobille  {
//     console.log('gadgets in Obj');
//     return mobObj;
// }
// const mobb1:any  = gadgetObjDet();
// mobb1.charging();
// mobb1.call();
// function gadgetObjDetails(): Mobille {
//     console.log('gadgets');
//     return ({
//       charging: ()=>console.log('charging in anony object'),
//       call: ()=>console.log('calling in anony object')
//     });
// }
// const mobb2:any  = gadgetObjDetails();
// mobb2.charging();
// mobb2.call();


    
var mob1={
    charging :()=>console.log('charging in class'),
    call :()=>console.log('calling in class')
}
var lap1={
    charging:()=>console.log("laptop charging in class"),
    work:()=>console.log("laptop workking in class")
}
function showGadgets(choice:string):Mobille|Laptop{
    console.log("show gadgets");
    if(choice=="l"){
        return  lap1;
    }else{
        return mob1;
    }

}

var obj:any=showGadgets("l");
obj.charging();
obj.work();
var obj2:any=showGadgets("M");
obj2.charging();
obj2.call();
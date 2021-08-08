// class that implements Mobile
var mymobile = /** @class */ (function () {
    function mymobile() {
        this.charging = function () { return console.log('charging in class'); };
        this.call = function () { return console.log('calling in class'); };
    }
    return mymobile;
}());
var mylaptop = /** @class */ (function () {
    function mylaptop() {
        this.charging = function () { return console.log("laptop charging in class"); };
        this.work = function () { return console.log("laptop workking in class"); };
    }
    return mylaptop;
}());
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
var mob1 = {
    charging: function () { return console.log('charging in class'); },
    call: function () { return console.log('calling in class'); }
};
var lap1 = {
    charging: function () { return console.log("laptop charging in class"); },
    work: function () { return console.log("laptop workking in class"); }
};
function showGadgets(choice) {
    console.log("show gadgets");
    if (choice == "l") {
        return lap1;
    }
    else {
        return mob1;
    }
}
var obj = showGadgets("l");
obj.charging();
obj.work();
var obj2 = showGadgets("M");
obj2.charging();
obj2.call();

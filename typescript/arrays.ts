var num=new Number(100);
var str=new String("Rajat");
console.log(num);
console.log(str);

var names:string[]=['Ram','Raju'];

var alpha=new Array('a','b','c','d');
alpha[10]='f';
console.log(alpha[7]);
console.log(alpha.length);

var nums:number[]=new Array(4);
nums[9]=90;
console.log(nums.length);
console.log(nums[9]);
console.log(nums[7]);

var numm:number[]=[10,20];
var [a,b]=numm;
var [a,b,c]=numm;
var [m]=numm;
console.log(a);
console.log(b);
console.log(c);
console.log(m);
for(let j in alpha){
    console.log(j,alpha[j]);
}
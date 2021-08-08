var num = new Number(100);
var str = new String("Rajat");
console.log(num);
console.log(str);
var names = ['Ram', 'Raju'];
var alpha = new Array('a', 'b', 'c', 'd');
alpha[10] = 'f';
console.log(alpha[7]);
console.log(alpha.length);
var nums = new Array(4);
nums[9] = 90;
console.log(nums.length);
console.log(nums[9]);
console.log(nums[7]);
var numm = [10, 20];
var a = numm[0], b = numm[1];
var a = numm[0], b = numm[1], c = numm[2];
var m = numm[0];
console.log(a);
console.log(b);
console.log(c);
console.log(m);
for (var j in alpha) {
    console.log(j, alpha[j]);
}

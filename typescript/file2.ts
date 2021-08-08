import {greet,greeting,Product} from "./file1";
console.log(greeting);
greet();
var prod:Product=new Product("Mobile Phone",130000);
prod.productInfo();

import * as trial from "./file1";
console.log(trial.greeting);
trial.greet();
var product:trial.Product=new trial.Product("Laptop",35000);
product.productInfo();


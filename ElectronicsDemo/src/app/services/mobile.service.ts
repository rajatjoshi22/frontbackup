import { Injectable } from '@angular/core';
import { Mobile } from '../models/mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
// public mobiles:Mobile[]=
// num=15
  constructor() { }
  getAllMobiles():Mobile[]{
    // console.log(this.num)
    // console.log(this.mobiles);
    return [
      new Mobile("A50s","Samsung",4,128,'../assets/images/m1.jpg',"Exynos 7 Quad 7570",21000),
      new Mobile("A70s","Samsung",6,128,'../assets/images/m2.jpg',"Exynos 7 Quad 7578",17000),
      new Mobile("S50","Samsung",8,256,'../assets/images/m3.jpg',"Exynos 7 Octa 7580",23000),
      new Mobile("S50s","Samsung",4,256,'../assets/images/m4.jpg','Exynos 7 Octa 7580',27000),
      new Mobile("S7","Samsung",8,128,'../assets/images/m5.jpg','Exynos 7872',55000),
      new Mobile("Iphone 11","Apple",8,256,'../assets/images/m6.jpg','Apple M1',121000)
    ]
  }
}

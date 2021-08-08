import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, gender:string): any {

    if(gender=='male'){
      return "Mr." +value;
    }else if(gender=='female'){
      return "Mrs." +value;
    }
    return value;
  }

}

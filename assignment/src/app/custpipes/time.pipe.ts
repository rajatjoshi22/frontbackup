import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, condition:string): any {
    if(condition=='t'){
    return value.getHours()+":"+value.getMinutes()+":"+value.getSeconds();
  }
  else if(condition=="d"){
    return value.getDate()+":"+(value.getMonth()+1)+":"+value.getFullYear();
  }
  return value;
}

}

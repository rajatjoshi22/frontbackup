import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addpipe'
})
export class AddpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value+".00";
  }

}

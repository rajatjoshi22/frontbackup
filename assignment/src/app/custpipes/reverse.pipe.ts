import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
   public revstr=[]
  transform(value: string, ...args: any[]): any {
    this.revstr=[]
    length=value.length-1;
    for(let index=length;index>=0;index--){
      this.revstr.push(value[index]);
    }
    return this.revstr.join('');
  }

}

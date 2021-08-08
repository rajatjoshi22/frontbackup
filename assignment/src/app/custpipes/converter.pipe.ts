import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  public hours
  public minutes
  
  transform(value: number, ...args: any[]): any {
    
    this.hours=Math.floor(value/60);
    this.minutes=value%60;
    return this.hours+"hr"+this.minutes+"min";
  }

}

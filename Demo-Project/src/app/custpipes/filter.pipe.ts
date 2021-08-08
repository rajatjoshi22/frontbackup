import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(valueArray: any,propertyName:string,filterChoice:string): any {
   if(filterChoice===''){
     return valueArray
   }
   
    const newCourseArray=[];
    for(const course of valueArray){
      if(course[propertyName]==filterChoice){
       newCourseArray.push(course);
      }
    }
    return newCourseArray;
  }

}

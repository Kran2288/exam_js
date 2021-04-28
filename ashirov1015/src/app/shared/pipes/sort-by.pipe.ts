import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(students: {id: number; group: string; surname: string}[], sortType: string): any[] {
    let student = students;
    switch(sortType) {
      case 'higherId':
        student = student.sort((a,b)=>(a.id>b.id ? 1: -1));
        break;
      case 'lowerId':
        student = student.sort((a,b)=>(a.id<b.id ? 1: -1));
        break;
      case 'higherSurname':
        student = student.sort((a,b)=>b.surname.localeCompare(a.surname))
        break;
      case 'lowerSurname':
        student = student.sort((a,b)=>a.surname.localeCompare(b.surname))
        break;
    }
    return students;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsfilter'
})
export class StudentsfilterPipe implements PipeTransform {

  transform(students:{surname: string,group: string}[], searchStr: string): any[] {
    let str = searchStr.split(' ');
    if(str[0]&&!str[1]) {
      return students.filter(
        student=>!student.surname.toLocaleLowerCase().indexOf(str[0].toLocaleLowerCase())||
        !student.group.indexOf(str[0])
      )
    }
    if (str[0]&&str[1]) {
      let filteredStudents = students.filter(
        student => student.surname.toLowerCase().indexOf(str[0].toLowerCase()) !== -1||
        student.group.indexOf(str[0]) !== -1

      );
      return filteredStudents.filter(
        student=>
          student.surname.toLowerCase().indexOf(str[1].toLowerCase()) !== -1||
          student.group.toLowerCase().indexOf(str[1].toLowerCase()) !== -1
      )
    }

    return students;
  }

}

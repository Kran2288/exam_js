import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(students: {course: number}[], course: number): any[] {
    return students.filter(student=>student.course==course);
  }

}

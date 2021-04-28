import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyStudent } from '../models/student.model';
import { StudentsDataBase } from '../services/students.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: number = 1;
  students: MyStudent[] = [];
  sortType = 'lowerSurname';
  instruments: boolean = false;
  searchSrt: string = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private studentsDatabase: StudentsDataBase
  ) {
    this.activatedRouter.params.subscribe(params => {
      this.course = params.course
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  sortForm: FormGroup = new FormGroup({
    sortType: new FormControl(1),
  })
  currentInstrument() {
    let sortFor ;
    this.sortType = this.sortForm.value.sortType
    return sortFor;
  }

  getAge(date: string) {
    let a = new Date(date);
    let b = new Date();
    let date_diff = b.getTime() - a.getTime();
    let age = Math.floor(date_diff/1000/60/60/24/365);
    return age;
  }

  editThisStudent(student: MyStudent) {
    if (student.edit) {
      student.edit = false;
      this.editStudent(student.id, student);
      this.getData();
      this.getData();
    } else {
      student.edit = true;
    }
  }

  deleteThisStudent(id: number) {
    this.deleteStudent(id);
    this.getData();
    this.getData();
  }

  async deleteStudent(id:number) {
    try {
      await this.studentsDatabase.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
  }

  async editStudent(id: number, student: MyStudent) {
    try {
      await this.studentsDatabase.putOneById(id, student);
    } catch (error) {
      console.error(error);
    }
  }

  async getData() {
    try {
      this.students = await this.studentsDatabase.getAll();
    } catch (error) {
      console.error(error);
    }
  }
}

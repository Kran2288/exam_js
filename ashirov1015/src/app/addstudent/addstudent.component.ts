import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyStudent } from '../models/student.model';
import { StudentsDataBase } from '../services/students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  name: string = '';
  surname: string = '';
  patronymic: string = '';
  phone: string = '';
  date: any = '';
  course = 1;
  group: string = '';
  students: MyStudent[] = [];
  newStudent: any = {};
  // mask = [
  //   '+',
  //   '7',
  //   '(',
  //   /[1-9]/,
  //   /\d/,
  //   /\d/,
  //   ')',
  //   '-',
  //   /\d/,
  //   /\d/,
  //   /\d/,
  //   '-',
  //   /\d/,
  //   /\d/,
  //   /\d/,
  //   /\d/,
  // ];

  constructor(private studentsDatabase: StudentsDataBase, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }
  addForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required,]),
    date: new FormControl('', Validators.required),
    patronymic: new FormControl(''),
    group: new FormControl('', Validators.required),
    course: new FormControl(1),
  });
  addStudent() {
    let id = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 0;
    this.newStudent = {
      id: id,
      name: this.addForm.value.name,
      surname: this.addForm.value.surname,
      patronymic: this.addForm.value.patronymic,
      phone: this.addForm.value.phone,
      email: this.addForm.value.email,
      date: new Date(this.addForm.value.date).toJSON(),
      course: this.addForm.value.course,
      group: this.addForm.value.group,
      edit: false,
    };
    this.students.push(this.newStudent);
    this.postNewStudent(this.newStudent);
    this.router.navigate(['./'])
  }
  async getData() {
    try {
      this.students = await this.studentsDatabase.getAll();
    } catch (error) {
      console.error(error);
    }
  }
  async postNewStudent(worker: MyStudent) {
    try {
      await this.studentsDatabase.postOne(worker);
    } catch (err) {
      console.log(err);
    }
  }
}

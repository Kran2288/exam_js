import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { CourseComponent } from './course/course.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
  },{
    path: 'course/:course',
    component: CourseComponent,
  }, {
    path: 'addstudent',
    component: AddstudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

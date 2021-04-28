import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CourseComponent } from './course/course.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { InformationComponent } from './information/information.component';
import { CoursePipe } from './shared/pipes/course.pipe';
import { SortByPipe } from './shared/pipes/sort-by.pipe';
import { StudentsfilterPipe } from './shared/pipes/studentsfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    AddstudentComponent,
    InformationComponent,
    CoursePipe,
    SortByPipe,
    StudentsfilterPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})

export class AppModule { }

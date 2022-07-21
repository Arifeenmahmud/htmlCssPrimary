import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsService } from './authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { XyzComponent } from './xyz/xyz.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { FormsComponent } from './forms/forms.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    InputFormatDirective,
    ZippyComponent,
    FormsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    // CoursesService
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

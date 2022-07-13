import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h1>{{title}}</h1> 
   <p>details courses</p>
   <button class="btn btn-primary" (click)="onSave()">Save</button>
   <input (keyup)="onKeyUp()" />
    <!-- <input #email (keyup.enter)="onKeyUp(email.value)" /> -->


    <ul>
        <li *ngFor="let course of courses"> {{course}} </li>
    </ul>    
    `


})


export class CoursesComponent {
    title = 'New Angular Courses Practice';
    courses = ['Course 1', 'Course 2', 'Course 3'];
    constructor() {
        // this.courses = ['Course 1', 'Course 2', 'Course 3'];
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
    onKeyUp() {
        console.log('Key up event');
    }

    // onKeyUp(email: string) {
    //     console.log(email + ' entered');
    // }
    onSave() {
        console.log('Save button clicked');
        // document.write('Save button clicked');
    }

}

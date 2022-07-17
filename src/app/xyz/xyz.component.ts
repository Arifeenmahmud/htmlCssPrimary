import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }

  ];
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  // onRemove(course : any) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }
  onChange(course: any) {
    course.name = 'UPDATED';
  }
  

}



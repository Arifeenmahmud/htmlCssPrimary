import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }

  courses : any;

  loadCourses() {
    this.courses= [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
  
    ];
  }
  
  serverCreationStatus = 'no server was created!';
  serverName = 'TestServer Write something to change the this text';
  servers = ['TestServer 1', 'TestServer 2'];


  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! ' + this.serverName;
    }
    onUpdateServerName(event: any){
      this.serverName = 'Server name was changed to ' + event.target.value;
      // this.serverName = event.target.value;
    }

}

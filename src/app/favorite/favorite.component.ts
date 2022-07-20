import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    alert('You have clicked the button!');
  }
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John'
    }
  }
  
  title = 'Favorite';
  canSave = true;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title = 'Component communication';
  counter = 5;
  message = 'Hey this is a message';


  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter ++
  }

  decrement(){
    this.counter --;
  }

}

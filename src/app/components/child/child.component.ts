import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() count:number = 0;
  @Input() message:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
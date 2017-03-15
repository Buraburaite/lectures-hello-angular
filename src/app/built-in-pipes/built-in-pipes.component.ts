import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  myName: string = 'Nizar';
  myDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.myDate.setDate(this.myDate.getDate() + 1);
    this.myDate = new Date(this.myDate);
  }

}

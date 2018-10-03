import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [`p {color: red}`]
})
export class ChildComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

}
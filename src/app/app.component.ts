import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  blah: string = 'Eat my shorts, bitch!';

  constructor() {
    console.log('TODO: set class "active" on selected client (pink border)');
  }

  ngOnInit() {

  }

}
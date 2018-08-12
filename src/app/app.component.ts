import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Angular';


  pressed = false;
  onPressed = (pressed) => {
    this.pressed = pressed;
    console.log('app');
  }



}

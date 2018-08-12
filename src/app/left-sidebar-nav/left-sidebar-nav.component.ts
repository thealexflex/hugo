import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-sidebar-nav',
  templateUrl: './left-sidebar-nav.component.html',
  styleUrls: ['./left-sidebar-nav.component.css']
})
export class LeftSidebarNavComponent {

  @Output()

  message: boolean = false;

  constructor() { }

  toggleMainFullSize() {
    this.message = !this.message;
    console.log(this.message);

  }

};

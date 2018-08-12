import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  message: boolean = false;

  toggleMainFullSize($event) {
    this.message = $event
    console.log(this.message);
  }




  // ngOnInit() {
  //   this.message = false;
  // }


  //   ngOnInit () {  }

  //   toggle() {
  //     this.show = !this.show;

  //     // CHANGE THE NAME OF THE BUTTON.
  //     if(this.show)  
  //       this.buttonName = "Hide";
  //     else
  //       this.buttonName = "Show";
  //   }
  // }


  // mainFullSize = false;
  // onPressed = (mainFullSize) => {
  //   // this.mainFullSize = !this.mainFullSize;
  //   this.mainFullSize = mainFullSize;
}
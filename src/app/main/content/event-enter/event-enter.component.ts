import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'event-enter',
  templateUrl: './event-enter.component.html',
  styleUrls: ['./event-enter.component.css']

})
export class EventEnterComponent implements OnInit {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup1 = this.formBuilder.group({
      OneCtrl: ['', Validators.required]
    })
    this.formGroup2 = this.formBuilder.group({
      TwoCtrl: ['', Validators.required]
    })

    this.formGroup3 = this.formBuilder.group({
      ThreeCtrl: ['', Validators.required]
    })


    // saveEditable(value) {
    //   //call to http service
    //   console.log(value);

  }
}
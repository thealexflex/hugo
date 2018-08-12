import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {

    citiesControls = new FormArray([
        '',
        '',
        '',
        '',
        '',
    ].map(city => new FormControl(city)));

}

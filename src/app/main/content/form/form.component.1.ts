import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {

    accidentForm1 = [
        // { 'firstname': 'Hugo' },
        // { 'secondname': 'Goldstein' }
        // { 'persontype': 'Contractor' }
        // { 'department': 'Sales' }
        1, 2, 3, 4, 5
    ];

    accidentForm2 = [
        '',
        'Second Name',
        '8',
        '9',
        '10',
    ];

    accidentFormOptions: SortablejsOptions = {
        group: 'accidentFormControlGroup1'
    };




    // citiesControls1 = new FormArray([
    //     { id: 1, 'label': 'Form Element 1', 'input': '<input', type: 'text', 'name': 'Hugo Goldstein' },
    //     { id: 2, 'label': 'Form Element 2', type: 'text', 'name': 'Dick Anus' },
    //     { id: 3, 'label': 'Form Element 3', type: 'text', 'name': 'Poois Magan' },
    //     { id: 4, 'label': 'Form Element 4', type: 'text', 'name': 'Flex Edwards' }

    // ]);

    // citiesControls2 = new FormArray([
    //     { id: 1, 'label': 'Form Element 1', 'input': '<input', type: 'text', 'name': 'Hugo Goldstein' },
    //     { id: 2, 'label': 'Form Element 2', type: 'text', 'name': 'Dick Anus' },
    //     { id: 3, 'label': 'Form Element 3', type: 'text', 'name': 'Poois Magan' },
    //     { id: 4, 'label': 'Form Element 4', type: 'text', 'name': 'Flex Edwards' }

    // ]);

    // .map(city => new FormControl(city)));

};





import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard-grid-item',
  inputs: ['dashboard'],
  templateUrl: './dashboard-grid-item.component.html',
  styleUrls: ['./dashboard-grid-item.component.css']
})



export class DashboardGridItemComponent {

  @Input()
  dashType;


  @Input()
  dashItem;


  @Input()
  dashClass;
}
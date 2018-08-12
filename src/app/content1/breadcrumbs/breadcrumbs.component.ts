import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  public Breadcrumb1: string = "Home";
  public Breadcrumb2: string = "SomeLocation";
  public Breadcrumb3: string = "AnotherLocationWithALongName";
  public PageName: string = "PageName";

}


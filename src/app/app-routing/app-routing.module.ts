import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// IMPORT ALL REQUIRED PLACES
import { BlankPageComponent } from "../main/content/blank-page/blank-page.component"
import { DashboardComponent } from "../main/content/dashboard/dashboard.component";
import { Dashboard2Component } from "../main/content/dashboard2/dashboard2.component";
import { DashboardGridComponent } from '../main/content/dashboard-grid/dashboard-grid.component';
import { FormComponent } from "../main/content/form/form.component"
import { DetailsComponent } from "../main/content/details/details.component";
import { EventEnterComponent } from "../main/content/event-enter/event-enter.component"
import { DefaultPageComponent } from "../main/content/default-page/default-page.component"
import { TaskManagerComponent } from "../main/content/task-manager/task-manager.component"

const routes: Routes = [
  { path: 'home', component: BlankPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'dashboardgrid', component: DashboardGridComponent },
  { path: 'form', component: FormComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'evententer', component: EventEnterComponent },
  { path: 'test', component: DefaultPageComponent },
  { path: 'task-manager', component: TaskManagerComponent },
  // { path: 'form', component: FormComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

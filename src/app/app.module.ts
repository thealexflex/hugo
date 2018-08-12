import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';



import { SortablejsModule } from 'angular-sortablejs';






import {
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  // MatButtonModule,
  // MatButtonToggleModule,
  // MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatGridListModule,
  // MatIconModule,
  // MatInputModule,
  // MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  // MatSelectModule,
  // MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatStepperModule,
  // MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  // MatTooltipModule,
  // MatTreeModule,
  // MatFormFieldModule,
} from '@angular/material';



import { AppComponent } from './app.component';
import { LoaderWrapperComponent } from '././loader-wrapper/loader-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarNavComponent } from './left-sidebar-nav/left-sidebar-nav.component';
import { RightSidebarNavComponent } from './right-sidebar-nav/right-sidebar-nav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './main/content/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './main/content/dashboard/dashboard.component';
import { BlankPageComponent } from './main/content/blank-page/blank-page.component';
import { Dashboard2Component } from './main/content/dashboard2/dashboard2.component';
import { DashboardGridComponent } from './main/content/dashboard-grid/dashboard-grid.component';
import { GridsterModule } from 'angular-gridster2';
import { MainComponent } from './main/main.component';
import { DashboardGridItemComponent } from './main/content/dashboard-grid/dashboard-grid-item/dashboard-grid-item.component';
import { DashboardGridAddItemComponent } from './main/content/dashboard-grid/dashboard-grid-add-item/dashboard-grid-add-item.component';
// import { Form2Component } from './content/form2/form.component';
// import { ListItemsComponent } from './content/form2/list-items.component'
import { FormComponent } from './main/content/form/form.component'


import { DetailsComponent } from './main/content/details/details.component';
import { EventEnterComponent } from './main/content/event-enter/event-enter.component';
// import { ContenteditableDirective } from 'ng-contenteditable';



import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { NavbarComponent } from './navbar/navbar.component';
import { DefaultPageComponent } from './main/content/default-page/default-page.component';
import { PageHeaderComponent } from './main/content/page-header/page-header.component';
import { PageNavbarComponent } from './main/content/page-navbar/page-navbar.component';
import { TaskManagerComponent } from './main/content/task-manager/task-manager.component';
// import { Subscription } from 'rxjs';
// import { InlineEditComponent } from './inline-edit/inline-edit.component';
// import { InlineEditModule } from '@savantly/ngx-inline-edit';


@NgModule({
  declarations: [
    AppComponent,
    LoaderWrapperComponent,
    HeaderComponent,
    LeftSidebarNavComponent,
    RightSidebarNavComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    BlankPageComponent,
    Dashboard2Component,
    DashboardGridComponent,
    MainComponent,
    DashboardGridItemComponent,
    DashboardGridAddItemComponent,
    FormComponent,
    DetailsComponent,
    EventEnterComponent,
    NavbarComponent,
    DefaultPageComponent,
    PageHeaderComponent,
    PageNavbarComponent,
    TaskManagerComponent,
    // InlineEditComponent,
    //Form2Component,
    // ListItemsComponent,
    // ContenteditableDirective




  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    SortablejsModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    InlineEditorModule,
    // InlineEditModule
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    // MatFormFieldModule,
  ],
  exports: [
    LoaderWrapperComponent,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    // MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGridAddItemComponent } from './dashboard-grid-add-item.component';

describe('DashboardGridAddItemComponent', () => {
  let component: DashboardGridAddItemComponent;
  let fixture: ComponentFixture<DashboardGridAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGridAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGridAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGridItemComponent } from './dashboard-grid-item.component';

describe('DashboardGridItemComponent', () => {
  let component: DashboardGridItemComponent;
  let fixture: ComponentFixture<DashboardGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarNavComponent } from './right-sidebar-nav.component';

describe('RightSidebarNavComponent', () => {
  let component: RightSidebarNavComponent;
  let fixture: ComponentFixture<RightSidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSidebarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

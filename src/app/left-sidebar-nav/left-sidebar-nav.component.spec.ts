import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarNavComponent } from './left-sidebar-nav.component';

describe('LeftSidebarNavComponent', () => {
  let component: LeftSidebarNavComponent;
  let fixture: ComponentFixture<LeftSidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidebarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

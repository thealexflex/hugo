import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEnterComponent } from './event-enter.component';

describe('EventEnterComponent', () => {
  let component: EventEnterComponent;
  let fixture: ComponentFixture<EventEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

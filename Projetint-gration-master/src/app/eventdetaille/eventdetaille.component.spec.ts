import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailleComponent } from './eventdetaille.component';

describe('EventdetailleComponent', () => {
  let component: EventdetailleComponent;
  let fixture: ComponentFixture<EventdetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventdetailleComponent]
    });
    fixture = TestBed.createComponent(EventdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

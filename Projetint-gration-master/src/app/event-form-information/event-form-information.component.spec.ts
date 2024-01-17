import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormInformationComponent } from './event-form-information.component';

describe('EventFormInformationComponent', () => {
  let component: EventFormInformationComponent;
  let fixture: ComponentFixture<EventFormInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventFormInformationComponent]
    });
    fixture = TestBed.createComponent(EventFormInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

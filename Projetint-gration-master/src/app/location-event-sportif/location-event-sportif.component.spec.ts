import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEventSportifComponent } from './location-event-sportif.component';

describe('LocationEventSportifComponent', () => {
  let component: LocationEventSportifComponent;
  let fixture: ComponentFixture<LocationEventSportifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationEventSportifComponent]
    });
    fixture = TestBed.createComponent(LocationEventSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

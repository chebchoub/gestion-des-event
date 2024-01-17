import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEventConfirenceComponent } from './location-event-confirence.component';

describe('LocationEventConfirenceComponent', () => {
  let component: LocationEventConfirenceComponent;
  let fixture: ComponentFixture<LocationEventConfirenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationEventConfirenceComponent]
    });
    fixture = TestBed.createComponent(LocationEventConfirenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEventArtistiquesComponent } from './location-event-artistiques.component';

describe('LocationEventArtistiquesComponent', () => {
  let component: LocationEventArtistiquesComponent;
  let fixture: ComponentFixture<LocationEventArtistiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationEventArtistiquesComponent]
    });
    fixture = TestBed.createComponent(LocationEventArtistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

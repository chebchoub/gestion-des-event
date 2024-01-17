import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventComponent } from './allevent.component';

describe('AlleventComponent', () => {
  let component: AlleventComponent;
  let fixture: ComponentFixture<AlleventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlleventComponent]
    });
    fixture = TestBed.createComponent(AlleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

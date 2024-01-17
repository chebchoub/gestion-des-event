import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventdetail2Component } from './eventdetail2.component';

describe('Eventdetail2Component', () => {
  let component: Eventdetail2Component;
  let fixture: ComponentFixture<Eventdetail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eventdetail2Component]
    });
    fixture = TestBed.createComponent(Eventdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

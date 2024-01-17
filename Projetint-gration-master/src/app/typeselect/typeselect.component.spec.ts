import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeselectComponent } from './typeselect.component';

describe('TypeselectComponent', () => {
  let component: TypeselectComponent;
  let fixture: ComponentFixture<TypeselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeselectComponent]
    });
    fixture = TestBed.createComponent(TypeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddatosComponent } from './carddatos.component';

describe('CarddatosComponent', () => {
  let component: CarddatosComponent;
  let fixture: ComponentFixture<CarddatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarddatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

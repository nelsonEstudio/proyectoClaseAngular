import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractVehiculoComponent } from './caract-vehiculo.component';

describe('CaractVehiculoComponent', () => {
  let component: CaractVehiculoComponent;
  let fixture: ComponentFixture<CaractVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaractVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

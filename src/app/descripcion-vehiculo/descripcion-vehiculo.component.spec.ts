import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionVehiculoComponent } from './descripcion-vehiculo.component';

describe('DescripcionVehiculoComponent', () => {
  let component: DescripcionVehiculoComponent;
  let fixture: ComponentFixture<DescripcionVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

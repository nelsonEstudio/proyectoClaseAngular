import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivoIngresaComponent } from './form-reactivo-ingresa.component';

describe('FormReactivoIngresaComponent', () => {
  let component: FormReactivoIngresaComponent;
  let fixture: ComponentFixture<FormReactivoIngresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReactivoIngresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactivoIngresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

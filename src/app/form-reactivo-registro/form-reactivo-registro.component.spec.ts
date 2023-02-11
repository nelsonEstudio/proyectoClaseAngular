import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivoRegistroComponent } from './form-reactivo-registro.component';

describe('FormReactivoRegistroComponent', () => {
  let component: FormReactivoRegistroComponent;
  let fixture: ComponentFixture<FormReactivoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReactivoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactivoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

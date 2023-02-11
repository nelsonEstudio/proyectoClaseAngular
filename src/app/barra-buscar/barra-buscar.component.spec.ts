import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBuscarComponent } from './barra-buscar.component';

describe('BarraBuscarComponent', () => {
  let component: BarraBuscarComponent;
  let fixture: ComponentFixture<BarraBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

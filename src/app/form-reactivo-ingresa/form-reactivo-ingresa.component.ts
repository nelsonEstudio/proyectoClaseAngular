import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo-ingresa',
  templateUrl: './form-reactivo-ingresa.component.html',
  styleUrls: ['./form-reactivo-ingresa.component.css']
})
export class FormReactivoIngresaComponent {

  ingresaForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.ingresaForm = this.fb.group({
        correo: ["", Validators.required],
        contrasena: ["", Validators.required],
        leidoautorizo: [Boolean, Validators.required]
      })
     }
  get form() {
    return this.ingresaForm.controls
  }

  onSubmit(){
    console.log('enviado', this.ingresaForm)
  }

}

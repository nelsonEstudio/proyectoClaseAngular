import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo-registro',
  templateUrl: './form-reactivo-registro.component.html',
  styleUrls: ['./form-reactivo-registro.component.css']
})
export class FormReactivoRegistroComponent {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["",Validators.required],
      celular: [Number,Validators.required],
      correo: ["", Validators.required],
      contrasena: ["", Validators.required],
      leidoautorizo: [Boolean, Validators.required]
    })
   }
get form() {
  return this.registroForm.controls
}

onSubmit(){
  console.log('enviado', this.registroForm)
}



}

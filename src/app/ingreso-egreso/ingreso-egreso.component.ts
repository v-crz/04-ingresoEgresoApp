import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: []
})
export class IngresoEgresoComponent implements OnInit {
  ingresoForm!: FormGroup; //Formulario reactivo
  tipo: string = 'ingreso';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.ingresoForm = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required]
    });
  }

  guardar(){
    if(this.ingresoForm.invalid){
      return;
    }
    console.log(this.ingresoForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: []
})
export class IngresoEgresoComponent implements OnInit {
  ingresoForm!: FormGroup; //Formulario reactivo
  tipo: string = 'ingreso';

  constructor(
    private fb: FormBuilder,
    private ingresoEgresoService: IngresoEgresoService
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

    const {descripcion, monto} = this.ingresoForm.value;

    const ingresoEgreso = new IngresoEgreso(descripcion, monto, this.tipo);

    this.ingresoEgresoService.crearIngresoEgreso(ingresoEgreso)
    .then(() => {
      this.ingresoForm.reset();
      Swal.fire('Registro creado', descripcion, 'success');
    })
    .catch( err => Swal.fire('Error', err.message, 'error'));
  }
}

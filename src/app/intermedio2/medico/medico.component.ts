import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor(
    public medicoService: MedicoService
  ) { }

  ngOnInit() {
  }

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this.medicoService.gteMedico()
      .subscribe((medicos: any[]) => this.medicos = medicos);
  }

}

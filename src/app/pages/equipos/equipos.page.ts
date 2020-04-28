import { ResponsableService } from './../../services/responsable.service';
import { ClienteService } from './../../services/cliente.service';
import { EquiposService } from './../../services/equipos.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  usuarios: any[] = [];
  clientes: any[] = [];
  responsables: any[] = [];

  equipo = {
    idEquipo: '',
    marca: '',
    modelo: '',
    numSerie: '',
    fechaCalibracion: '',
    proximaCalibracion: '',
    descripcion: '',
    cliente: '',
    responsable: ''
  };

  constructor(private _equiposService: EquiposService, private _clienteService: ClienteService, 
              private _responsableService: ResponsableService) { 
    this.traerClientes();
    this.traerresponsables();
  }

  ngOnInit() {
  }


  crearEquipo() {
    console.log(this.equipo.fechaCalibracion);
    this._equiposService.crearEquipo(this.equipo).subscribe(data => {console.log(data); });
  }

  traerClientes() {
    this._clienteService.getClients().subscribe((data: any) => {
      this.clientes = data.empresas;
      console.log(this.clientes);
    });
  }

  traerresponsables() {
    this._responsableService.getResponsable().subscribe((data: any) => {
      this.responsables = data.responsables;
      console.log(this.responsables);
    });
  }

}

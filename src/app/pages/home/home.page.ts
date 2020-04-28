import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clientes: any[] = [];

  constructor(private _clienteService: ClienteService) {
    this.getClient();
  }


  getClient() {
    this._clienteService.getClients().subscribe((data: any) => {
      this.clientes = data.empresas;
      console.log(this.clientes);
    });
  }

}

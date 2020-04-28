import { ClienteService } from './../../services/cliente.service';
import { ResponsableService } from './../../services/responsable.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.page.html',
  styleUrls: ['./responsable.page.scss'],
})
export class ResponsablePage implements OnInit {

  clientes: any[] = [];

  responsable = {
    nombre: '',
    apellidos: '',
    empresa: ''
  };

  constructor(private _resposableService: ResponsableService, private _clienteService: ClienteService,
              private alertCtrl: AlertController) {
    this.traerEmpresas();
   }

  ngOnInit() {
  }

  traerEmpresas() {
    this._clienteService.getClients().subscribe((data: any) => {
      this.clientes = data.empresas;
      console.log(this.clientes);
    });
  }

  async agregarResponsable() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Responsable!',
      message: `<strong>${this.responsable.nombre}</strong>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            const creado = this._resposableService.createResponsable(this.responsable).subscribe(data => console.log(data));
          }
        }
      ]
    });

    await alert.present();
  }



}

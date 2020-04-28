import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  cliente = {
    nombre: '',
    descripcion: '',
    estado: '',
    municipio: '',
    colonia: '',
    calle: '',
    numero: 0,
    cp: 0
  };

  clientes: any[] = [];

  constructor(private _clienteService: ClienteService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async createClient() {
    const alert = await this.alertCtrl.create({
      header: 'Deseas Agregar este Cliente!',
      message: `<strong>${this.cliente.nombre}</strong>`,
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
            const creado = await this._clienteService.createClient(this.cliente).subscribe(data => console.log(data));
          }
        }
      ]
    });

    await alert.present();
  }

  crear() {
    this._clienteService.createClient(this.cliente).subscribe(data => console.log(data));
  }

}

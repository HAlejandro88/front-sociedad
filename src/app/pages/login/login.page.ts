import { Component, OnInit } from '@angular/core';
import { UiService } from './../../services/ui.service';
import { AuthService } from './../../services/auth.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    username: '',
    password: ''
  };

  constructor(private authSerice: AuthService, private navCtrl: NavController, private uiService: UiService) { }

  ngOnInit() {
    localStorage.clear();
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) { return; }
    const valido = await this.authSerice.login(this.loginUser.username, this.loginUser.password);

    if (valido) {
      this.navCtrl.navigateRoot('/home', {animated: true});
    } else {
      this.uiService.alertaInformativa('Usuario o contraseña invalidos');
    }
  }

}

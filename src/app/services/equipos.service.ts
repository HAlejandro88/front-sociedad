import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  getEquipos() {
    return this.http.get(`${URL}/equipos`);
  }

  crearEquipo(body) {
    return this.http.post(`${URL}/equipos/crear`, body);
  }
}

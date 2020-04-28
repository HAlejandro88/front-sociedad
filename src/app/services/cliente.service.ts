import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public http: HttpClient) { }

  getClients() {
    return this.http.get(`${URL}/empresas`);
  }


  createClient(body) {
    return this.http.post(`${URL}/empresas/crear`, body);
  }


  updateClient() {}

  deleteClient() {}
}

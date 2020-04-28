import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(public http: HttpClient) { }

  getResponsable() {
    return this.http.get(`${URL}/responsable`);
  }

  createResponsable(body) {
    return this.http.post(`${URL}/responsable/crear`, body);
  }

  especific(id) {
    return this.http.get(`${URL}/responsable/${id}`);
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Usuario } from 'app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }
  get(url: string) {
    return this.http.get(environment.API_URL + url);
  }

  post(url: string, data: any) {
    url = environment.API_URL + url;
    return this.http.post(url, data);
  }

  postt(usuario: Usuario) {
    return this.http.post(`${environment.API_URL}/users`, usuario)
  }

  update(url: string, data: any) {
    url = environment.API_URL + url;
    return this.http.put(url, data);
  }

}

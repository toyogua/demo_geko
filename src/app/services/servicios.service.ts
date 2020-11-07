import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( private http: HttpClient) { }

  fetchServicios(): Observable<any[]>{
    return this.http.get<any[]>(ENDPOINT);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from '../../models/novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NovoUsuario): Observable<any> {
    return this.httpClient.post('http://localhost:62964/api/Customer', newUser);
  }

  // userExists() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token.service';
import { Usuario } from '../../models/usuario';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  // subject: observable que consegue pegar e enviar informações (duas vias)
  // o behavior subject guarda o estado (envia o ultimo dado que estava nele)
  private userSubject = new BehaviorSubject<Usuario>({});

  private decodeJWT() {
    const token = this.tokenService.getToken();
    const usuario = jwt_decode(token) as Usuario;

    // todo mundo que se inscreveu nesse serviço recebe esse usuário quando essa linha é executada
    this.userSubject.next(usuario);
  }

  // metodo que retorna o usuário sem que seja retornado o subject para que elementos externos não manipulem o estado dele
  getUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}

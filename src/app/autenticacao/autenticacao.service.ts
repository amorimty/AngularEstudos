import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private userService: UsuarioService
  ) {}

  private url = 'http://localhost:62964/api/Customer/login';

  autenticar(email: string, password: string) {
    return this.httpClient
      .post(
        this.url,
        {
          email: email,
          password: password,
        },
        { observe: 'response' } // pega o header alem do objeto só
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}

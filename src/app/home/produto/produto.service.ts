import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private httpClient: HttpClient) {}

  getProduct(id: string): Observable<Produto> {
    return this.httpClient.get<Produto>(`http://localhost:62964/api/Product/${id}`);
  }
}

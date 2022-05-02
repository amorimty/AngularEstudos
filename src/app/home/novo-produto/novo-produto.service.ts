import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoProduto } from 'src/app/models/novo-produto';

@Injectable({
  providedIn: 'root',
})
export class NovoProdutoService {
  constructor(private httpClient: HttpClient) {}

  registerNewProduct(newProduct: NovoProduto): Observable<any> {
    return this.httpClient.post('http://localhost:62964/api/Product', newProduct);
  }
}

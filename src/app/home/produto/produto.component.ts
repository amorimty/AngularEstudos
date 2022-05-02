import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  constructor(private productService: ProdutoService) {}

  idProduct = '';
  product: Produto = {};

  getProduct() {
    this.productService.getProduct(this.idProduct).subscribe({
      next: (product: Produto) => {
        console.table(product);
        this.product = product;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {}
}

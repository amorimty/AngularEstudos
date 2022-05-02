import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoProduto } from 'src/app/models/novo-produto';
import { NovoProdutoService } from './novo-produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private newProductService: NovoProdutoService,
    private router: Router
  ) {}

  newProductForm!: FormGroup;

  registerNewProduct() {
    if (this.newProductForm.valid) {
      const newProduct = this.newProductForm.getRawValue() as NovoProduto;
      newProduct.active = true;
      this.newProductService.registerNewProduct(newProduct).subscribe({
        next: () => {
          // this.router.navigate(['produto']);
          console.log("deu certo");
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnInit(): void {
    this.newProductForm = this.formBuilder.group({
      active: [''],
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      idCategory: ['', [Validators.required]],
    });
  }
}

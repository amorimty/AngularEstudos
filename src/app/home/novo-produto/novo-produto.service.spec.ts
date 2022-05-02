import { TestBed } from '@angular/core/testing';

import { NovoProdutoService } from './novo-produto.service';

describe('NovoProdutoService', () => {
  let service: NovoProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

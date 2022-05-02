import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'novo-usuario', component: NovoUsuarioComponent },
      { path: 'produto', component: ProdutoComponent },
      { path: 'novo-produto', component: NovoProdutoComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from '../../models/novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NovoUsuarioService,
    private router: Router
  ) {}

  newUserForm!: FormGroup;

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NovoUsuario;
      this.newUserService.registerNewUser(newUser).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: [''],
      }
    );
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IAuthCredentials } from '../../models/auth-credentials';
import { AuthService } from '../../services/authService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private formBuilder = inject(FormBuilder);

  private authService = inject(AuthService);

  private toastrService = inject(ToastrService);

  private router = inject(Router);

  public formLogin: FormGroup = new FormGroup({})

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  
  login() {
    const authCredentials = this.formLogin.value as IAuthCredentials;

    this.authService.login(authCredentials).then( () => {
      this.toastrService.success(
        'Logeado',
        'Exito'
      );
      this.router.navigateByUrl('register');
    }, error => {
      console.log(error)
      this.toastrService.error(
        'El usuario no existe o la contraseña es incorrecta',
        'Error'
      );
    })
  }
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { FormsModule, ReactiveFormsModule,FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from '../../../models/login-request';


@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  private loginService = inject(LoginService);
  private formBuilder = inject(FormBuilder);
  loginForm: FormGroup;


  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(){
    this.loginService.login(
      new LoginRequest(
        this.loginForm.value.email, 
        this.loginForm.value.password
      )
    ).subscribe(value => {
      console.log(value);
    });
  }
}

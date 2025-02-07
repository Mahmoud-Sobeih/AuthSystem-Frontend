import { Component, inject } from '@angular/core';
import { SignupService } from '../../../services/signup.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupRequest } from '../../../models/signup-request';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  private signupService = inject(SignupService);
  private formBuilder = inject(FormBuilder);
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  signup() {
    this.signupService.signup(
      new SignupRequest(
        this.signupForm.value.username,
        this.signupForm.value.email,
        this.signupForm.value.password
      )
    ).subscribe(value => {
      console.log(value);
    })
  }

}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToogleFormsService } from 'src/shared/services/toogle-forms.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  signInForm!: FormGroup;
  logInForm!: FormGroup;
  isSigninFormOpened: boolean = false;
  isloginFormOpened: boolean = false;
  isHamMenuOpen: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toggleFormsService: ToogleFormsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toggleFormsService.booleanValueS$.subscribe((valueS) => {
      this.isSigninFormOpened = valueS;
    });
    this.toggleFormsService.booleanValueL$.subscribe((valueL) => {
      this.isloginFormOpened = valueL;
    });
    this.toggleFormsService.hamMenuBooleanValue$.subscribe((hamMenuValue) => {
      this.isHamMenuOpen = hamMenuValue;
      this.isSigninFormOpened = false;
      this.isloginFormOpened = false;
    });

    this.SigninFormFunction();
    this.loginFormFunction();
  }

  openSigninForm() {
    this.isSigninFormOpened = !this.isSigninFormOpened;
    if (this.isSigninFormOpened === true) {
      this.isloginFormOpened = false;
    }
  }

  openLoginForm() {
    this.isloginFormOpened = !this.isloginFormOpened;
    if (this.isloginFormOpened === true) {
      this.isSigninFormOpened = false;
    }
  }

  SigninFormFunction() {
    this.signInForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required, Validators.length > 4],
    });
  }

  loginFormFunction() {
    this.logInForm = this.fb.group({
      name: [null, Validators.required],
      password: [null, Validators.required, Validators.length > 4],
    });
  }

  closeFormsOnButton() {
    this.isSigninFormOpened = false;
    this.isloginFormOpened = false;
    this.toggleFormsService.updateFormStateToFalse(this.isSigninFormOpened);
    this.toggleFormsService.updateFormStateToFalse(this.isloginFormOpened);
  }

  onSignInSubmit() {
    console.log(this.signInForm.value);
    console.log(this.signInForm);
    this.router.navigate(['/home']);
  }

  onlogInSubmit() {
    console.log(this.logInForm.value);
    this.router.navigate(['/home']);
  }
}

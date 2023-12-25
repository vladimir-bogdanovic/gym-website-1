import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    private toggleFormsService: ToogleFormsService
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
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.length > 4],
    });
  }

  loginFormFunction() {
    this.logInForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required, Validators.length > 4],
    });
  }

  closeFormsOnButton() {
    this.isSigninFormOpened = false;
    this.isloginFormOpened = false;
    this.toggleFormsService.updateFormStateToFalse(this.isSigninFormOpened);
    this.toggleFormsService.updateFormStateToFalse(this.isloginFormOpened);
  }

  onSignInSubmit() {
    console.log('im pepega');
  }

  onlogInSubmit() {
    console.log('asdasdasd');
  }
}

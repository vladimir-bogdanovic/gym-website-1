import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'header',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isHamMenuOpen = false;
  signInForm!: FormGroup;
  isSignInVisible = false;

  openMenu() {
    this.isHamMenuOpen = !this.isHamMenuOpen;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.length > 4],
    });
  }

  openSignInForm() {
    this.isSignInVisible = !this.isSignInVisible;
  }
}

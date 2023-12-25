import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {} from '@angular/forms';
import { ToogleFormsService } from '../services/toogle-forms.service';

@Component({
  standalone: true,
  selector: 'header',
  imports: [NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isHamMenuOpen = false;
  togglingFormSignin = false;
  togglingFormLogin = false;

  constructor(private toggleFormsService: ToogleFormsService) {}

  ngOnInit(): void {
    this.toggleFormsService.closeFormButton$.subscribe((value: boolean) => {
      this.togglingFormSignin = value;
      this.togglingFormLogin = value;
    });
  }

  updateToggleValueSignin() {
    this.togglingFormSignin = !this.togglingFormSignin;
    this.toggleFormsService.updateBooleanValueS(this.togglingFormSignin);
  }

  updateToggleValueLogin() {
    this.togglingFormLogin = !this.togglingFormLogin;
    this.toggleFormsService.updateBooleanValueL(this.togglingFormLogin);
  }

  updateHamMenuBooleanValue() {
    this.isHamMenuOpen = !this.isHamMenuOpen;
    this.toggleFormsService.updateHamMenuBooleanValue(this.isHamMenuOpen);
  }
}

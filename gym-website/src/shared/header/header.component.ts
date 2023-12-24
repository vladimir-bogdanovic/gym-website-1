import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {} from '@angular/forms';
import { ToogleFormsService } from '../services/toogle-forms.service';

@Component({
  standalone: true,
  selector: 'header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHamMenuOpen = false;
  togglingFormSignin = false;
  togglingFormLogin = false;

  constructor(private toggleFormsService: ToogleFormsService) {}

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

import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {} from '@angular/forms';
import { ToogleFormsService } from '../services/toogle-forms.service';
import { Router, NavigationEnd } from '@angular/router';

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
  authNavigation = true;
  websiteNavigation = false;

  constructor(
    private toggleFormsService: ToogleFormsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toggleFormsService.closeFormButton$.subscribe((value: boolean) => {
      this.togglingFormSignin = value;
      this.togglingFormLogin = value;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavigationBar();
      }
    });
    this.togglingFormSignin = false;
    this.togglingFormLogin = false;
  }

  updateNavigationBar() {
    const currentRoute = this.router.url;
    console.log(currentRoute);

    if (currentRoute === '/' || currentRoute === '/welcome') {
      this.authNavigation = true;
      this.websiteNavigation = false;
      this.togglingFormSignin = false;
      this.togglingFormLogin = false;
    } else if (currentRoute === '/home') {
      this.authNavigation = false;
      this.websiteNavigation = true;
    }
  }

  updateHamMenu() {
    this.isHamMenuOpen = !this.isHamMenuOpen;
    this.toggleFormsService.updateHamMenuBooleanValue(this.isHamMenuOpen);
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

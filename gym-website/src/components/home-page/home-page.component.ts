import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/shared/services/api.service';
import { ToogleFormsService } from 'src/shared/services/toogle-forms.service';

@Component({
  standalone: true,
  imports: [NgIf, NgFor],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isHamMenuOpen = false;

  constructor(
    private toggleFormsService: ToogleFormsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toggleFormsService.hamMenuBooleanValue$.subscribe((value: boolean) => {
      this.isHamMenuOpen = value;
    });
  }

  goToPrograms() {
    this.router.navigate(['programs']);
  }

  goToExercises() {
    this.router.navigate(['exercises']);
  }
}

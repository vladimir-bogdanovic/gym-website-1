import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/shared/services/api.service';
import { ToogleFormsService } from 'src/shared/services/toogle-forms.service';
import { SingleExercise } from 'src/shared/types/types';

@Component({
  standalone: true,
  imports: [NgIf, NgFor],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isHamMenuOpen = false;
  difficuylty = '';
  beginnerExerData!: SingleExercise[];

  constructor(
    private toggleFormsService: ToogleFormsService,
    private apiService: APIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toggleFormsService.hamMenuBooleanValue$.subscribe((value: boolean) => {
      this.isHamMenuOpen = value;
    });
  }

  updateExerDiffValue(value: string) {
    this.difficuylty = value;
    this.apiService
      .getDifficulty(this.difficuylty)
      .subscribe((data: SingleExercise[]) => {
        console.log(data);
        this.beginnerExerData = data;
      });
  }

  goToExerciseDdetails(name: string) {
    console.log(name);
    this.apiService
      .getExerciseByName(name)
      .subscribe((data: SingleExercise) => {
        console.log(data);
      });
  }
}

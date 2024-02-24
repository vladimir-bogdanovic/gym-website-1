import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/shared/services/api.service';
import { ToogleFormsService } from 'src/shared/services/toogle-forms.service';
import { ExerciseDetails } from 'src/shared/types/types';

@Component({
  standalone: true,
  imports: [NgIf, NgFor],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isHamMenuOpen = false;
  gymExercises!: ExerciseDetails[];

  constructor(
    private toggleFormsService: ToogleFormsService,
    private apiService: APIService
  ) {}

  ngOnInit(): void {
    this.toggleFormsService.hamMenuBooleanValue$.subscribe((value: boolean) => {
      this.isHamMenuOpen = value;

      this.apiService.testingNewAPi().subscribe((data: ExerciseDetails[]) => {
        console.log(data);
        this.gymExercises = data;
      });
    });
  }
}

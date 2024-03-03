import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { APIService } from 'src/shared/services/api.service';
import { ExerciseDetails } from 'src/shared/types/types';

@Component({
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgClass],
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.css'],
})
export class ExercisesPageComponent implements OnInit {
  searchForm!: FormGroup;
  allExercises!: ExerciseDetails[];
  muscleGroupExercises!: ExerciseDetails[];
  isFilterMenuOpen: boolean = false;
  isFilterSubmenuOpen: boolean = false;

  constructor(
    private apiService: APIService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchParametars: [''],
    });
    this.apiService.getFitnessData().subscribe((data: ExerciseDetails[]) => {
      this.allExercises = data;
      this.searchForm
        .get('searchParametars')
        ?.valueChanges.pipe(debounceTime(400))
        .subscribe((value: string) => {
          this.allExercises = data.filter((data: ExerciseDetails) => {
            const lowerCaseData = data.WorkOut.toLowerCase();
            const lowerCaseValue = value.toLowerCase();
            return lowerCaseData.includes(lowerCaseValue);
          });
        });
    });
  }

  toggleMenu() {
    this.isFilterMenuOpen = !this.isFilterMenuOpen;
  }

  toggleSubmenu() {
    this.isFilterSubmenuOpen = !this.isFilterSubmenuOpen;
    console.log(this.isFilterSubmenuOpen);
  }

  filterByLevelDiff() {
    this.apiService.getFitnessData().subscribe;
  }

  getMuscleGroup(mouscleGroup: string) {
    this.apiService
      .getMuscleGroupExercises(mouscleGroup)
      .subscribe((data: ExerciseDetails[]) => {
        this.muscleGroupExercises = data;
      });
  }
}

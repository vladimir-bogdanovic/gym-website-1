import { LowerCasePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { APIService } from 'src/shared/services/api.service';
import { ExerciseDetails } from 'src/shared/types/types';

@Component({
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.css'],
})
export class ExercisesPageComponent implements OnInit {
  searchForm!: FormGroup;
  allExercises!: ExerciseDetails[];

  constructor(
    private apiService: APIService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchParametars: [''],
    });

    this.searchForm
      .get('searchParametars')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.apiService
          .getFitnessData()
          .subscribe((data: ExerciseDetails[]) => {
            this.allExercises = data.filter((data: ExerciseDetails) => {
              console.log(data.Muscles);
              const lowerCaseData = data.WorkOut.toLowerCase();
              const lowerCaseValue = value.toLowerCase();

              return lowerCaseData.includes(lowerCaseValue);
            });
          });
      });
  }
}

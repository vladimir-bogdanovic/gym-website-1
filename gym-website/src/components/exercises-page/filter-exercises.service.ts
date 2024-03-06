import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ExerciseDetails } from 'src/shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class FilterExercisesService {
  constructor() {}

  testSerachInput(data: ExerciseDetails[], searchForm: FormGroup) {
    searchForm
      .get('searchParametars')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((value: string) => {
        return data.filter((data: ExerciseDetails) => {
          const lowerCaseData = data.WorkOut.toLowerCase();
          const lowerCaseValue = value.toLowerCase();

          return lowerCaseData.includes(lowerCaseValue);
        });
      });
  }
}

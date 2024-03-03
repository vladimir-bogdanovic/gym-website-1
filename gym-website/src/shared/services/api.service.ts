import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseDetails } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiKey = '4cc4689d64msh39dc780535d2a72p1dde8bjsnb5394e68e33a';
  private baseAPI = 'https://work-out-api1.p.rapidapi.com/search';

  headers = new HttpHeaders({
    'X-RapidAPI-Key': this.apiKey,
    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getFitnessData(): Observable<ExerciseDetails[]> {
    return this.http.get<ExerciseDetails[]>(this.baseAPI, {
      headers: this.headers,
    });
  }

  getMuscleGroupExercises(muscleGroup: string): Observable<ExerciseDetails[]> {
    return this.http.get<ExerciseDetails[]>(
      `${this.baseAPI}?Muscles=${muscleGroup}`,
      {
        headers: this.headers,
      }
    );
  }
}

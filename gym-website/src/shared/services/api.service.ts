import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleExercise } from '../types/types';
import { apiUrl } from '../types/url';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiKey = '1uRw6/d4qG8qnzkFSkooCw==y47iL45c9pCfRS8J';
  private difficulty = apiUrl.exercisesDifficulty;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Api-Key': `${this.apiKey}`,
  });

  constructor(private http: HttpClient) {}

  // getMusleGroupExercises(): Observable<any> {
  //   const url = `${this.muscleGroupURL}=biceps`;
  //   return this.http.get(url, { headers: this.headers });
  // }

  getDifficulty(chooseDifficulty: string): Observable<SingleExercise[]> {
    const url = `${this.difficulty}${chooseDifficulty}`;
    return this.http.get<SingleExercise[]>(url, { headers: this.headers });
  }
}

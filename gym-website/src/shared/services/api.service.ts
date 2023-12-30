import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle';
  private apiKey = '1uRw6/d4qG8qnzkFSkooCw==y47iL45c9pCfRS8J';

  constructor(private http: HttpClient) {}

  makeApiRequest(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': `${this.apiKey}`,
    });

    const url = `${this.apiUrl}=biceps`;

    return this.http.get(url, { headers });
  }
}

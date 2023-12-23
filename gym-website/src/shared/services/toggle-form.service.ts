import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleFormService {
  private toggleForms = new BehaviorSubject<boolean>(false);

  toggleForms$ = this.toggleForms.asObservable();
}

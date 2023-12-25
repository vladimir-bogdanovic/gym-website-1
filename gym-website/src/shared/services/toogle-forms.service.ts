import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToogleFormsService {
  private booleanSourceS = new BehaviorSubject<boolean>(false);
  booleanValueS$ = this.booleanSourceS.asObservable();

  updateBooleanValueS(value: boolean) {
    this.booleanSourceS.next(value);
  }

  private booleanSourceL = new BehaviorSubject<boolean>(false);
  booleanValueL$ = this.booleanSourceL.asObservable();

  updateBooleanValueL(value: boolean) {
    this.booleanSourceL.next(value);
  }

  private hamMenuBooleanCheck = new BehaviorSubject<boolean>(false);
  hamMenuBooleanValue$ = this.hamMenuBooleanCheck.asObservable();

  updateHamMenuBooleanValue(value: boolean) {
    this.hamMenuBooleanCheck.next(value);
  }

  private closeFormButton = new BehaviorSubject<boolean>(false);
  closeFormButton$ = this.closeFormButton.asObservable();

  updateFormStateToFalse(value: boolean) {
    this.closeFormButton.next(value);
  }
}

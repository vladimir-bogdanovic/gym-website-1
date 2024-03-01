import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsPageComponent } from './programs-page.component';

describe('ProgramsPageComponent', () => {
  let component: ProgramsPageComponent;
  let fixture: ComponentFixture<ProgramsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToogleFormsService } from 'src/shared/services/toogle-forms.service';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isHamMenuOpen = false;

  constructor(private toggleFormsService: ToogleFormsService) {}

  ngOnInit(): void {
    this.toggleFormsService.hamMenuBooleanValue$.subscribe((value: boolean) => {
      this.isHamMenuOpen = value;
    });
  }
}

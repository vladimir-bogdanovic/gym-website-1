import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomePageComponent,
  WelcomePageComponent,
  PageNotFoundComponent,
} from 'src/components';
import { ExercisesPageComponent } from 'src/components/exercises-page/exercises-page.component';
import { ProgramsPageComponent } from 'src/components/programs-page/programs-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'programs',
    component: ProgramsPageComponent,
  },
  {
    path: 'exercises',
    component: ExercisesPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomePageComponent,
  WelcomePageComponent,
  PageNotFoundComponent,
} from 'src/components';

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
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

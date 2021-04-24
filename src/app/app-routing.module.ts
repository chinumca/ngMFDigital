import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {
  path:  'Digital/Home',
  component:  HomeComponent
  },
  {
  path:  'Digital/About',
  component:  AboutComponent
  },
  {
    path: '',
    redirectTo: 'Digital/Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'Digital/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

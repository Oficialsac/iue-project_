import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'predictions', loadChildren: () => import('./predictions/predictions.module').then(m => m.PredictionsModule)},
  {path: 'training', loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)},
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }

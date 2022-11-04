import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './allstudents/allstudents.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AuthGuard } from './guards/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [ 
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path: 'createstudent',component:CreatestudentComponent},
    {path: 'allstudents',component:AllstudentsComponent}

  ]},
  {path: '',component:LoginComponent},
  {path: '**',component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

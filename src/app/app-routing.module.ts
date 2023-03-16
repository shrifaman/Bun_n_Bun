import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin_login',component:AdminLoginComponent},
  {path:'employee_eogin',component:EmployeeLoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

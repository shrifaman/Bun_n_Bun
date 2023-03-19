import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'order',component:OrderComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin_login',component:AdminLoginComponent},
  {path:'employee_eogin',component:EmployeeLoginComponent},
  {path:'customer_eogin',component:CustomerComponent},
  {path:'login',component:DashboardComponent},
  {path:'emp',component:EmployeeDashboardComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

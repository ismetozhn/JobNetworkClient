import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './admin/components/users/users.module';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LoginComponent } from './ui/components/login/login.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      {
        path: "users", loadChildren: () => import("./admin/components/users/users.module").then(module => module.UsersModule)
      },
      {
        path: "jobapplications", loadChildren: () => import("./admin/components/jobapplications/jobapplications.module").then(module => module.JobapplicationsModule)
      },
      {
        path: "jobposts", loadChildren: () => import("./admin/components/jobposts/jobposts.module").then(module => module.JobpostsModule)
      },
   
    ]
  },
     { path: "", component: HomeComponent },
      {path:"jobposts", loadChildren:()=> import("./ui/components/jobposts/jobposts.module").then(module=> module.JobpostsModule)},
      {path:"login", loadChildren:()=> import("./ui/components/login/login.module").then(module=> module.LoginModule)},
      {path:"register", loadChildren:()=> import("./ui/components/register/register.module").then(module=> module.RegisterModule)}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

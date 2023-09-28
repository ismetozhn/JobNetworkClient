import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobpostsModule } from './jobposts/jobposts.module';
import { JobapplicationsModule } from './jobapplications/jobapplications.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';






@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    JobpostsModule,
    JobapplicationsModule,
    UsersModule,
    DashboardModule,
    
    
  ]
})
export class ComponentsModule { }

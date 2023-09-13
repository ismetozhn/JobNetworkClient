import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobpostsModule } from './jobposts/jobposts.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';




@NgModule({
  declarations: [
    
  
    
  ],
  imports: [
    CommonModule,
    JobpostsModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class ComponentsModule { }

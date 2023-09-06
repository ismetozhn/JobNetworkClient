import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobpostsComponent } from './jobposts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JobpostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"", component:JobpostsComponent
    }])
  ]
})
export class JobpostsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobpostsComponent } from './jobposts.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    JobpostsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"", component:JobpostsComponent
    }])
  ]
})
export class JobpostsModule { }

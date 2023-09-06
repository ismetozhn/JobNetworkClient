import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobapplicationsComponent } from './jobapplications.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JobapplicationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:"", component:JobapplicationsComponent}
    ])
  ]
})
export class JobapplicationsModule { }

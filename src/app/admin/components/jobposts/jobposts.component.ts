import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateJobPost } from 'src/app/contracts/create_jobpost';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-jobposts',
  templateUrl: './jobposts.component.html',
  styleUrls: ['./jobposts.component.scss']
})
export class JobpostsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService){
    super(spinner)
  }
    ngOnInit(): void {
      this.showSpinner(SpinnerType.BallScaleMultiple)


      this.httpClientService.get({
        controller:"jobposts"
       }).subscribe(data=> console.log(data))
    }


    @ViewChild(ListComponent) listComponents: ListComponent;
    createdJobPost(createdJobPost: CreateJobPost){
      this.listComponents.getJobPosts();
    }
    

}

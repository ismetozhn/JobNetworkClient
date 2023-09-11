import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../../base/base.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateJobPost } from 'src/app/contracts/create_jobpost';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

import { JobpostsService } from 'src/app/services/common/models/jobposts.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent  extends BaseComponent implements OnInit {
  constructor(private jobpostsService: JobpostsService,private alertify:AlertifyService, spinner: NgxSpinnerService,toastr: ToastrService){
super(spinner)
  }
  ngOnInit(): void {
    
  }
  @Output() createdJobPost: EventEmitter<CreateJobPost> = new EventEmitter();

  // @Output()fileUploadOptions: Partial<FileUploadOptions>={
  //   action:"upload",
  //   controller:"jobposts",
  //   explanation:"Resimleri sürükleyin veya seçin...",
  //   isAdminPage:true,
  //   accept:".png,.jpg, .pdf"
    
  // };


  create(title:HTMLInputElement,companyName:HTMLInputElement,description:HTMLInputElement,startDate:HTMLInputElement,endDate:HTMLInputElement,imagePath:HTMLInputElement,jobTypeId:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom);
    const createJobPost:CreateJobPost=new CreateJobPost();
    createJobPost.title=title.value;
    createJobPost.companyName=companyName.value;
    createJobPost.description=description.value;
    createJobPost.startDate=startDate.value;
    createJobPost.endDate=endDate.value;
    createJobPost.imagePath=imagePath.value;
    createJobPost.jobTypeId=parseInt(jobTypeId.value);

  

    this.jobpostsService.create(createJobPost,()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("İlan yayınlanmıştır.",{
        dismissOthers:true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdJobPost.emit(createJobPost);
    }, errorMessage=>{
      this.alertify.message(errorMessage,{
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      });
    });
     
    
    
  
  }
}
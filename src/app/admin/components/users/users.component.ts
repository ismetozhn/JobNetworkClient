import { CreateJobPost } from 'src/app/contracts/create_jobpost';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { HttpClientService } from './../../../services/common/http-client.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { JobpostsService } from 'src/app/services/common/models/jobposts.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit{
  constructor(private jobpostsService: JobpostsService,private alertify:AlertifyService, spinner: NgxSpinnerService,toastr: ToastrService){
    super(spinner)
      }
      ngOnInit(): void {
        
      }
      @Output() createdJobPost: EventEmitter<CreateJobPost> = new EventEmitter();
    
      
    
    
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
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ListJobpost } from 'src/app/contracts/list_jobpost';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { JobpostsService } from 'src/app/services/common/models/jobposts.service';
declare var $:any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(private jobpostsService: JobpostsService,spinner: NgxSpinnerService,private alertifyService:AlertifyService){
    super(spinner)
  }
  

  displayedColumns: string[] = ['title', 'companyName', 'description','createdDate','updatedDate','edit','delete'];
  dataSource: MatTableDataSource<ListJobpost> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // async getJobPosts(){
  //   this.showSpinner(SpinnerType.BallAtom)
  //   const allJobPosts:{totalCount: number; jobposts: ListJobpost[]}=await this.jobpostsService.read(this.paginator ?this.paginator.pageIndex :0,this.paginator?this.paginator.pageSize : 5,()=> this.hideSpinner(SpinnerType.BallAtom),errorMessage=> this.alertifyService.message(errorMessage,{
  //     dismissOthers:true,
  //     messageType:MessageType.Error,
  //     position:Position.TopLeft
  //   }))

  //   this.dataSource= new MatTableDataSource<ListJobpost>(allJobPosts.jobposts);
  //   this.paginator.length=allJobPosts.totalCount;
   
  // }


  async getJobPosts() {
    this.showSpinner(SpinnerType.BallAtom);
    const allJobPosts: {totalCount:number; jobPosts:ListJobpost[] }= await  this.jobpostsService.read(this.paginator? this.paginator.pageIndex:0, this.paginator? this.paginator.pageSize:5, ()=> this.hideSpinner(SpinnerType.BallAtom), errorMessage=> this.alertifyService.message(errorMessage,{
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      }))
      this.dataSource= new  MatTableDataSource<ListJobpost>(allJobPosts.jobPosts);
      this.paginator.length= allJobPosts.totalCount;
  
   }

  //  delete(id,event){
    
  //   const img: HTMLImageElement=event.srcElement;
  //    $(img.parentElement.parentElement).fadeOut(2000)
  //   }


  async pageChanged(){
    await this.getJobPosts();
  }

  async ngOnInit()  {
    await this.getJobPosts();
  }

}

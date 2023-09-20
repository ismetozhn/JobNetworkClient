import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { HttpClientService } from './../../../services/common/http-client.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit{
  constructor(spinner: NgxSpinnerService, private httpClientService : HttpClientService){
    super(spinner);
  }
  ngOnInit(): void {
   
      this.showSpinner(SpinnerType.BallAtom);


    //  this.httpClientService.get({
    //   controller:"users"
    //  }).subscribe(data=> console.log(data))

     

    //   this.httpClientService.post(
    //   {controller:"jobposts"
    //  },{
    //    userTypeId:2,
    //    name:"Kerem",
    //    surname:"Yörük",
    //    email:"ssss",
    //    password:"abaa",
    //    contactnumber:"53987714",
    //    cv:"CV9"
    //  }).subscribe();
     

  //  this.httpClientService.put({
  //   controller:"jobposts",
  //  },{
  //   id:6,
  //   name:"Ali",
  //   surname:"Morcan",
  //   email:"ssss",
  //   password:"abaaffss",
  //   contactnumber:"5398771477",
  //   cv:"CV10"
  //  }).subscribe();
      
    //  this.httpClientService.delete({
    //   controller:"jobposts"
    //  }, "7")
    //  .subscribe();
    // 
  }

  
}

import { Observable, firstValueFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateJobPost } from 'src/app/contracts/create_jobpost';
import { ListJobpost } from 'src/app/contracts/list_jobpost';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobpostsService {

  constructor(private httpClientService:HttpClientService) { }


  // create(jobPost: CreateJobPost, succesCallBack?: any){
  //   this.httpClientService.post({
  //     controller:"jobposts"
  //   },jobPost)
  //   .subscribe(result =>{
  //     succesCallBack();

  //   });
  // }


  create(jobPost: CreateJobPost, successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=> void) {
    this.httpClientService.post({
      controller:"JobPosts"
    },jobPost)
    .subscribe(result =>{
      successCallBack();

      

    },(errorResponse: HttpErrorResponse,
    )=>{
     const _error:Array<{key:string,value:Array<string>}>= errorResponse.error;
     let message="";
     _error.forEach((v,index)=>{
      v.value.forEach((_v,_index)=>{
        message+=`${_v}<br>`;
      });
     });
     errorCallBack(message);

    });
  }

  // async read(page:number=0, size: number=5,successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void): Promise<{totalCount: number; jobposts: ListJobpost[]}>{
  //   const promiseData: Promise<{totalCount: number; jobposts: ListJobpost[]}>=this.httpClientService.get<{totalCount: number; jobposts: ListJobpost[]}>({
  //     controller:"jobposts",
  //     queryString:`page=${page}&size=${size}`

  //   }).toPromise();

  //   promiseData.then(d=> successCallBack())
  //   .catch((errorResponse: HttpErrorResponse)=>errorCallBack(errorResponse.message))

  //   return await promiseData;
  // }

  async read(page:number= 0, size: number=5, succesCallBack?: ()=> void, errorCallBack?: (errorMessage: string)=> void): Promise<{totalCount:number; jobPosts:ListJobpost[] }> {
    const promiseData: Promise<{totalCount:number; jobPosts:ListJobpost[] }> = this.httpClientService.get<{totalCount:number; jobPosts:ListJobpost[] }>({
       controller:"jobposts",
       queryString:`page=${page}&size=${size}`
     }).toPromise();
 
     promiseData.then(d => succesCallBack())
     .catch((errorResponse: HttpErrorResponse)=>errorCallBack(errorResponse.message))
 
     return await promiseData;
   }


   async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "jobposts",
    }, id);

    await firstValueFrom(deleteObservable);
  }
  }




 
  

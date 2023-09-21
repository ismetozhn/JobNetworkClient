import { Observable, firstValueFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateJobPost } from 'src/app/contracts/create_jobpost';
import { ListJobpost } from 'src/app/contracts/list_jobpost';
import { HttpErrorResponse } from '@angular/common/http';
import { ListJobPostsImage } from 'src/app/contracts/list_jobpost_image';


@Injectable({
  providedIn: 'root'
})
export class JobpostsService {

  constructor(private httpClientService: HttpClientService) { }

  create(jobPost: CreateJobPost, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "JobPosts"
    }, jobPost)
      .subscribe(result => {
        successCallBack();



      }, (errorResponse: HttpErrorResponse,
      ) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);

      });
  }

  async read(page: number = 0, size: number = 5, succesCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalJobPostCount: number; jobPosts: ListJobpost[] }> {
    const promiseData: Promise<{ totalJobPostCount: number; jobPosts: ListJobpost[] }> = this.httpClientService.get<{ totalJobPostCount: number; jobPosts: ListJobpost[] }>({
      controller: "jobposts",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => succesCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }


  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "jobposts",
    }, id);

    await firstValueFrom(deleteObservable);
  }


  async readImages(id: string, succesCallBack?: () => void): Promise<ListJobPostsImage[]> {
    const getObservable: Observable<ListJobPostsImage[]> = this.httpClientService.get<ListJobPostsImage[]>({
      action: "GetImages",
      controller: "jobposts"
    }, id);

    const images: ListJobPostsImage[] = await firstValueFrom(getObservable);
    succesCallBack();

    return images;

  }

  async deleteImage(id: string, imageId: string, succesCallBack?: () => void) {
    const deleteObservable = this.httpClientService.delete({
      action: "deletejobpostimage",
      controller: "jobposts",
      queryString: `imageId=${imageId}`
    }, id)

    await firstValueFrom(deleteObservable);
    succesCallBack();

  }

  async changeShowcaseImage(imageId: string, jobPostId: string, successCallBack?: () => void): Promise<void> {
    const changeShowCaseImageObservable = this.httpClientService.get({
      controller: "jobposts",
      action: "ChangeShowCaseImage",
      queryString: `imageId=${imageId}&jobPostId=${jobPostId}`
    });
    await firstValueFrom(changeShowCaseImageObservable);
    successCallBack();
  }
}







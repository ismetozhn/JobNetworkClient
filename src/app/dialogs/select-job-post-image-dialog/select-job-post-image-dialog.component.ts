import { Component, Inject, Output, OnInit } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { JobpostsService } from 'src/app/services/common/models/jobposts.service';
import { ListJobPostsImage } from 'src/app/contracts/list_jobpost_image';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { MatCard } from '@angular/material/card';
import { DialogService } from 'src/app/services/common/dialog.service';
import { DeleteDialogComponent, DeleteState } from '../delete-dialog/delete-dialog.component';

declare var $: any

@Component({
  selector: 'app-select-job-post-image-dialog',
  templateUrl: './select-job-post-image-dialog.component.html',
  styleUrls: ['./select-job-post-image-dialog.component.scss']
})
export class SelectJobPostImageDialogComponent extends BaseDialog<SelectJobPostImageDialogComponent>
implements OnInit {

  constructor(dialogRef: MatDialogRef<SelectJobPostImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectJobPostImageState | string,
    private jobpostsService: JobpostsService,
    private spinner: NgxSpinnerService,
    private dialogService: DialogService
    ){
    super(dialogRef)
  }


  

  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg, .gif",
    action:"upload",
    controller:"jobposts",
    explanation : "İlan resmini seçin veya buraya sürükleyin...",
    isAdminPage: true,
    queryString:`id=${this.data}`
  };

  images: ListJobPostsImage[];

   async ngOnInit() {
    this.spinner.show(SpinnerType.BallAtom);
   this.images = await this.jobpostsService.readImages(this.data as string, () => this.spinner.hide(SpinnerType.BallAtom));
  }

  async deleteImage(imageId: string, event: any) {

    this.dialogService.openDialog({
      componentType: DeleteDialogComponent,
      data: DeleteState.Yes,
      afterClosed: async () => {
        this.spinner.show(SpinnerType.BallAtom)
        await this.jobpostsService.deleteImage(this.data as string, imageId, () => {
          this.spinner.hide(SpinnerType.BallAtom);
          var card = $(event.srcElement).parent().parent();
          debugger;
          card.fadeOut(500);
        });
      }
    })
  }
}

export enum SelectJobPostImageState{
  Close
}

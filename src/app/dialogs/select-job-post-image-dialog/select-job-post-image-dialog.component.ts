import { Component, Inject, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-select-job-post-image-dialog',
  templateUrl: './select-job-post-image-dialog.component.html',
  styleUrls: ['./select-job-post-image-dialog.component.scss']
})
export class SelectJobPostImageDialogComponent extends BaseDialog<SelectJobPostImageDialogComponent> {

  constructor(dialogRef: MatDialogRef<SelectJobPostImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectJobPostImageState | string
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

}


export enum SelectJobPostImageState{
  Close
}

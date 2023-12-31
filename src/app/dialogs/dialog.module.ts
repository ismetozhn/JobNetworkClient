import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SelectJobPostImageDialogComponent } from './select-job-post-image-dialog/select-job-post-image-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import {MatBadgeModule} from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    
    SelectJobPostImageDialogComponent,
        
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FileUploadModule,
    MatCardModule,
    FormsModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule
    
  ]
})
export class DialogModule { }

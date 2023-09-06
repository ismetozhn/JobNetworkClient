import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { DialogService } from 'src/app/services/common/dialog.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { JobpostsService } from 'src/app/services/common/models/jobposts.service';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
   private element:ElementRef,
   private _renderer: Renderer2,
   private jobPostService : JobpostsService,
   private spinner: NgxSpinnerService,
   public dialog: MatDialog,
   private dialogService:DialogService
  ) {
    const img= _renderer.createElement("img");
    img.setAttribute("src","../../../../../assets/delete.png");
    img.setAttribute("style","cursor: pointer;");
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement, img);

   }

   @Input() id: string;
   @Output() callback: EventEmitter<any> = new EventEmitter();

   @HostListener("click")
   async onclick() {

    this.dialogService.openDialog({
      componentType:DeleteDialogComponent,
    data:DeleteState.Yes,
    afterClosed:async () => {
     
      const td: HTMLTableCellElement = this.element.nativeElement;
      await this.jobPostService.delete(this.id);
      $(td.parentElement).animate({
        opacity: 0,
        left: "+=50",
        height: "toogle"
      }, 700, () => {
        this.callback.emit();
      });
    }
    
  })

  //  openDialog(afterClosed:any): void {
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     width:'250px',
  //     data: DeleteState.Yes,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if( result== DeleteState.Yes){
  //       afterClosed();
  //     }
  //   });
  // }

}}
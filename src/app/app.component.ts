import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { Position } from './services/admin/alertify.service';
declare var alertify: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JobNetworkClient';

  constructor(private toastrService:CustomToastrService){
   // toastrService.message("Welcome to mypage","OZHN",ToastrMessageType.Info,ToastrPosition.TopCenter)
   // toastrService.message("IM heree","OZHN",ToastrMessageType.Error,ToastrPosition.TopCenter)

  //  toastrService.message("Hoş","Geldiniz",{
  //   messageType: ToastrMessageType.Info,
  //   position: ToastrPosition.TopCenter
  //  });

  }

  
}



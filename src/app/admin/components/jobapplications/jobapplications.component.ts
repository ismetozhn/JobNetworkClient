import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-jobapplications',
  templateUrl: './jobapplications.component.html',
  styleUrls: ['./jobapplications.component.scss']
})
export class JobapplicationsComponent extends BaseComponent implements OnInit{
  constructor(spinner:NgxSpinnerService){
    super(spinner)
  }
    ngOnInit(): void {
      this.showSpinner(SpinnerType.BallAtom)
    }

}

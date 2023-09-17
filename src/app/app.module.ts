import { LoginComponent } from './ui/components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./admin/layout/layout.module";
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base/base.component';
import { DeleteDirective } from './directives/admin/delete.directive';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { FileUploadComponent } from './services/common/file-upload/file-upload.component';
import { FileUploadDialogComponent } from './dialogs/file-upload-dialog/file-upload-dialog.component';
import { JwtModule } from '@auth0/angular-jwt';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';




@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
     
        
        
      
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        UiModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => localStorage.getItem("accessToken"),
                allowedDomains:["localhost:7250"]
            }
        }),
        SocialLoginModule,
        GoogleSigninButtonModule
       
        
    ],
    providers: [
      { provide: "baseUrl", useValue: "https://localhost:7250/api", multi: true },
      {
        provide: "SocialAuthServiceConfig",
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider("1094843503318-1it6qtd89scle6en0o2kuufsa381nvu8.apps.googleusercontent.com")
            }
          ],
          onError: err => console.log(err)
        } as SocialAuthServiceConfig
      }
],
    bootstrap: [AppComponent]
 
})
export class AppModule { }

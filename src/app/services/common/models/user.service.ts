import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateUser } from '../../../contracts/users/create-user';
import { User } from '../../../entities/user';
import { HttpClientService } from '../http-client.service';
import { Token } from 'src/app/contracts/token/token';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClientService: HttpClientService, private toastrService: CustomToastrService) { }

  async create(user: User): Promise<CreateUser> {
    const observable: Observable<CreateUser | User> = this.httpClientService.post<CreateUser | User>({
      controller: "users"
    }, user);

    return await firstValueFrom(observable) as CreateUser;
  }

  async login(email: string, password: string, callbackFunction?: () => void): Promise<any> {
    const observable: Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
      controller: "users",
      action: "login"
    }, { email, password })

    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
    if(tokenResponse)
      {
        localStorage.setItem("accessToken", tokenResponse.token.accessToken);
        

        this.toastrService.message("Kullanıcı girişi başarıyla sağlanmıştır.","Giriş Başarılı",{
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        })
      }
    callbackFunction();
  }
}
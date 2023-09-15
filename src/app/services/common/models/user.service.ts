import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateUser } from '../../../contracts/users/create-user';
import { User } from '../../../entities/user';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClientService: HttpClientService) { }

  async create(user: User): Promise<CreateUser> {
    const observable: Observable<CreateUser | User> = this.httpClientService.post<CreateUser | User>({
      controller: "users"
    }, user);

    return await firstValueFrom(observable) as CreateUser;
  }

  async login(email: string, password: string, callbackFunction?: () => void): Promise<void> {
    const observable: Observable<any> = this.httpClientService.post({
      controller: "users",
      action: "login"
    }, { email, password })

    await firstValueFrom(observable);
    callbackFunction();
  }
}
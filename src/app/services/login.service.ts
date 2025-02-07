import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'http://localhost:8080/auth/';

  constructor(private http : HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse>{    
    return this.http.post<LoginResponse>(this.url + 'login', request);
  }
}

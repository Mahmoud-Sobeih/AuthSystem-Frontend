import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupRequest } from '../models/signup-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string = "http://localhost:8080/auth/";

  constructor(private http : HttpClient) { }

  signup(request: SignupRequest): Observable<string>{
    return this.http.post<string>(this.url + "signup", request, {responseType: 'text' as 'json'});
  }
}

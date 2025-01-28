import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '../utils/apiUrls';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  loginService(email: string, password: string) { 
    const sendObj = {
      email: email,
      password: password
    }
    return this.http.post<IUser>(apiUrls.login, sendObj)
  }


}



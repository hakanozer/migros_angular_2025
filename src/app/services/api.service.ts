import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '../utils/apiUrls';
import { IUser } from '../models/IUser';
import { IProduct, IProductDetail } from '../models/IProduct';
import { ICustomer } from '../models/ICustomer';

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

  productService( page: number, per_page: number ){
    return this.http.get<IProduct>(apiUrls.products + '?page=' + page + '&per_page=' + per_page)
  }

  singleProductService ( pid: string ) {
    return this.http.get<IProductDetail>(apiUrls.products + '/' + pid)
  }

  allUsers() {
    var token = '';
    const stToken = localStorage.getItem('token')
    if (stToken){
      token = stToken
    }
    const header = {
      'Authorization': 'Bearer ' + token
    }
    return this.http.get<ICustomer>(apiUrls.allUsers+ '?page=' + 1 + '&per_page=' + 30, {headers: header})
  }


}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { signUp } from '../DataType';

@Injectable({
  providedIn: 'root'
})
export class SellerServices {
 constructor(private http:HttpClient){}
  userSignUp(data:signUp):any{
    console.warn("User signed up");
   return this.http.post('http://localhost:3000/seller', data);
  }
}

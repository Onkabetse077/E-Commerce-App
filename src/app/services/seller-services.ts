import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signUp } from '../DataType';

@Injectable({
  providedIn: 'root' // ✅ Makes the service available app-wide
})
export class SellerServices {
  constructor(private http: HttpClient) {}

  userSignUp(data: signUp): Observable<signUp> {
    return this.http.post<signUp>('http://localhost:3000/sellers', data);
  }
}

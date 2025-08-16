import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { signUp, Login } from '../DataType';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerServices {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  private isBrowser: boolean;
  private apiUrl = 'http://localhost:3000/sellers'; // ✅ match db.json

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) this.reloadSeller();
  }

  userSignUp(data: signUp): Observable<HttpResponse<signUp>> {
    return this.http.post<signUp>(
      this.apiUrl,
      data,
      { observe: 'response' }
    ).pipe(
      tap(result => {
        if (result && this.isBrowser && result.body) {
          localStorage.setItem('sellers', JSON.stringify(result.body));
          this.isSellerLoggedIn.next(true);
        }
      })
    );
  }

  userLogin(data: Login): Observable<HttpResponse<Login[]>> {
    return this.http.get<Login[]>(
      `${this.apiUrl}?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).pipe(
      tap(result => {
        if (result.body && result.body.length > 0 && this.isBrowser) {
          localStorage.setItem('sellers', JSON.stringify(result.body[0])); // store first match
          this.isSellerLoggedIn.next(true);
        } else {
          this.isSellerLoggedIn.next(false); // ✅ invalid login
        }
      })
    );
  }

  reloadSeller() {
    if (this.isBrowser) {
      const seller = localStorage.getItem('seller');
      if (seller) {
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['/seller-home']);
      }
    }
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('sellers');
      this.isSellerLoggedIn.next(false);
      this.router.navigate(['/seller-authentication']);
    }
  }
}

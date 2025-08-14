import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { signUp } from '../DataType';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerServices {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  private isBrowser: boolean;

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
      'http://localhost:3000/sellers',
      data,
      { observe: 'response' }
    ).pipe(
      tap(result => {
        if (result && this.isBrowser) {
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.isSellerLoggedIn.next(true);
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
      localStorage.removeItem('seller');
      this.isSellerLoggedIn.next(false);
      this.router.navigate(['/seller-authentication']);
    }
  }
}

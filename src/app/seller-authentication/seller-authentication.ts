import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { SellerServices } from '../services/seller-services';
import { signUp } from '../DataType';

@Component({
  selector: 'app-seller-authentication',
  standalone: true, // ✅ Required for standalone components
  imports: [
    FormsModule,
    HttpClientModule // ✅ Import here for HttpClient to work
  ],
  templateUrl: './seller-authentication.html',
  styleUrls: ['./seller-authentication.css']
})
export class SellerAuthentication {
  constructor(private seller: SellerServices, private router: Router) {}

  signUp(data: signUp): void {
    this.seller.userSignUp(data).subscribe((result: signUp) => {
      console.warn(result);
      if (result) {
        this.router.navigate(['/seller-home']);
      }
    });
    console.warn('User signed up');
  }
}

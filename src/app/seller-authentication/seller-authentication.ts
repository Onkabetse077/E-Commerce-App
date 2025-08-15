import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SellerServices } from '../services/seller-services';
import { signUp } from '../DataType';
import { NgIf } from '@angular/common';
import { Login } from '../DataType';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-seller-authentication',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf, NgClass],
  templateUrl: './seller-authentication.html',
  styleUrls: ['./seller-authentication.css']
})
export class SellerAuthentication {
  constructor(private seller: SellerServices, private router: Router) {}
  showLogin = true;

  signUp(data: signUp): void {
    this.seller.userSignUp(data).subscribe({
      next: (result) => {
        if (result.body) this.router.navigate(['/seller-home']);
      },
      error: (err) => {
        console.error('Sign-up failed:', err);
        alert('Sign-up failed. Please try again.');
      }
    });
  }
  login(data: Login): void {
    this.seller.userLogin(data).subscribe({
      next: (result) => {
        if (result.body) this.router.navigate(['/seller-home']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Sign-up failed. Please try again.');
      }
    });
  }
}

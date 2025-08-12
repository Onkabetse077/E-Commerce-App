import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-seller-authentication',
  imports: [
    FormsModule
  ],
  templateUrl: './seller-authentication.html',
  styleUrl: './seller-authentication.css'
})
export class SellerAuthentication {
  signUp(data:object){
    console.warn(data)
  }
}

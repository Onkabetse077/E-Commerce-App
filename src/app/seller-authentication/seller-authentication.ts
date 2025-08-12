import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SellerServices } from '../services/seller-services';
import { HttpClientModule } from '@angular/common/http';
import {signUp} from '../DataType';
import {Router} from '@angular/router';




@Component({
  selector: 'app-seller-authentication',
  imports: [
    FormsModule,HttpClientModule
  ],
  templateUrl: './seller-authentication.html',
  styleUrl: './seller-authentication.css'
})
export class SellerAuthentication {

  constructor(private seller: SellerServices,private router: Router) { }

  signUp(data:signUp):void{
   this.seller.userSignUp(data).subscribe((result:signUp)=>{
      console.warn(result);
      if(result){
        this.router.navigate(['/seller-home']);
      }
   });
    console.warn("User signed up");
  }
}

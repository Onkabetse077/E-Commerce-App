import { Routes } from '@angular/router';
import {Home} from './home/home';
import {SellerAuthentication} from './seller-authentication/seller-authentication';
import { SellerHome } from './seller-home/seller-home';
//import { HttpClientModule } from '@angular/common/http';



export const routes: Routes = [
  {
    component:Home,
    path:'',
  },{
    component:SellerAuthentication,
    path:'seller-authentication',
  },{
    component:SellerHome,
    path:'seller-home',
  }
];

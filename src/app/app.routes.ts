import { Routes } from '@angular/router';
import {Home} from './home/home';
import {SellerAuthentication} from './seller-authentication/seller-authentication';
import { SellerHome } from './seller-home/seller-home';
import {sellerAuthenticationGuard} from './authentication-guard';



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
    canActivate: [sellerAuthenticationGuard]
  },{ path: '**',
    redirectTo: '/seller-authentication'
   }
];

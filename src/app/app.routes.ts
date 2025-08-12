import { Routes } from '@angular/router';
import {Home} from './home/home';
import {SellerAuthentication} from './seller-authentication/seller-authentication';



export const routes: Routes = [
  {
    component:Home,
    path:'',
  },{
    component:SellerAuthentication,
    path:'seller-authentication',
  }
];

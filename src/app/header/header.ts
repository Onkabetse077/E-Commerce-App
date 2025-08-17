import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuType= 'Default';
constructor(private route:Router) {
}
ngOnInit() {
  this.route.events.subscribe((data:any) => {
    if (data.url) {
      console.warn(data.url);
      if(localStorage.getItem('seller') && data.url.includes('seller')){
        console.log('This is Seller Area');
        this.menuType='Seller';
      }else{
        console.warn("Outside Seller Area");
        this.menuType='Default';
      }
    }

  })
}
}


import { Component, OnInit } from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  menuType:string ='default';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isSellerLoggedIn = localStorage.getItem('seller');

        if (isSellerLoggedIn && event.url.startsWith('/seller')) {
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.menuType = 'default';
    this.router.navigate(['/']); // back to Home after logout
  }
}

import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SellerServices } from './services/seller-services';

export const sellerAuthenticationGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerServices);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const loggedIn = sellerService.isSellerLoggedIn.value || !!localStorage.getItem('seller');

    if (loggedIn) return true;

    router.navigate(['/seller-authentication']);
    return false;
  }

  return false; // SSR: block route
};

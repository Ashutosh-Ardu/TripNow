import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const revAuthGuard: CanActivateFn = (route, state) => {

  const _router = inject(Router)
  let isLoggedIn = localStorage.getItem('isLoggedIn')


  if(isLoggedIn == 'true'){
    alert('Already Logged In')
    _router.navigate(['/booking'])
    return false
  }

  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  let isLoggedIn = localStorage.getItem('isLoggedIn')


  if(isLoggedIn == 'false'){
    alert('Please Log In')
    _router.navigate(['/login'])
    return false
  }
  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  let isLoggedIn = localStorage.getItem('isLoggedIn')
  // let isLoggedIn = window.isLoggedIn

  if(isLoggedIn == 'false'){
    alert('Please reserve a package first!!')
    _router.navigate(['/packages'])
    return false  
  }
  return true;
};

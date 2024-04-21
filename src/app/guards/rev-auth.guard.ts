import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const revAuthGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  const toastr = inject(ToastrService)
  let isLoggedIn = localStorage.getItem('isLoggedIn')
  // let isLoggedIn = window.isLoggedIn
  
  
  if(isLoggedIn == 'true'){
    // _router.navigate(['/booking'])
    toastr.info('Already Logged In!','Guard Log');
    return false
  }

  return true;
};

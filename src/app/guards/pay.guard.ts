import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const payGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  const toastr = inject(ToastrService)
  let paid = localStorage.getItem('paid')
  // let paid = window.paid


  if(paid == 'false'){
    _router.navigate(['/packages'])
    toastr.info('Choose a Pacakge and Pay First!!','Guard Log');
    return false
  }

  return true;
};

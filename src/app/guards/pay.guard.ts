import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const payGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  let paid = localStorage.getItem('paid')


  if(paid == 'false'){
    alert('Pay First!!!')
    _router.navigate(['/booking'])
    return false
  }

  return true;
};

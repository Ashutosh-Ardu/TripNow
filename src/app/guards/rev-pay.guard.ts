import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const revPayGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  let paid = localStorage.getItem('paid')


  if(paid == 'true'){
    alert('Payment Complete!!!')
    _router.navigate(['/confirm'])
    return false
  }

  return true;
};

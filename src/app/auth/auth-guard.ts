import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const messageService = inject(MessageService);

  const token = localStorage.getItem('token'); // make sure this matches your storage key

  if (!token) {
    messageService.add({
      severity: 'warn',
      summary: 'Access Denied',
      detail: 'Please login to continue',
      life: 3000
    });

    router.navigate(['/']); // Redirect to landing page
    return false;
  }

  return true;
};

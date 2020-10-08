import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  confirm(message: string, okCallback: () => any): void {
    Swal.fire({
      title: message,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        okCallback();
      }
    });
  }

  success(message: string): void {
    this.fireMixin(message, 'success');
  }

  error(message: string): void {
    this.fireMixin(message, 'error');
  }

  warning(message: string): void {
    this.fireMixin(message, 'warning');
  }

  message(message: string): void {
    this.fireMixin(message, 'info');
  }

  private fireMixin(message: string, sweetAlertIcon: SweetAlertIcon): void {
    Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    }).fire({
      icon: sweetAlertIcon,
      title: message,
    });
  }
}

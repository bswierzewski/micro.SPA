import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

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
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  success(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.log(message);
  }

  warning(message: string): void {
    console.log(message);
  }

  message(message: string): void {
    console.log(message);
  }
}

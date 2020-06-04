import { Injectable } from '@angular/core';
import { Device } from '../_models/Device';
import { DeviceService } from '../_services/device.service';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DeviceListResolver implements Resolve<Device[]> {
    constructor(private deviceService: DeviceService, private route: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Device[]> {
        return this.deviceService.getDevices().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.route.navigate(['/dashboard']);
                return of(null);
            })
        );
    }
}
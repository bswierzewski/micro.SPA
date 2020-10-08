import { Component, OnInit } from '@angular/core';
import { Device, Registration } from 'src/app/shared/models';
import { DeviceService, RegistrationService } from 'src/app/core/services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit {
  displayedColumns: string[] = ['position', 'created', 'address', 'rssi'];
  device: Device;
  registrations$: Observable<Registration[]>;
  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private registrationService: RegistrationService
  ) {
    route.params.subscribe((params) => {
      if (params.id) {
        deviceService.getDevice(params.id).subscribe((next) => {
          this.device = next;
          this.registrations$ = registrationService.getRegistrations(next.address?.id);
        });
      }
    });
  }

  ngOnInit(): void {}
}

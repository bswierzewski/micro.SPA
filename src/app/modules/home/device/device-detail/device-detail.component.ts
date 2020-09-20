import { Component, OnInit } from '@angular/core';
import { Device, Registration } from 'src/app/shared/models';
import { DeviceService } from 'src/app/core/_services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit {
  displayedColumns: string[] = ['position'];
  device: Device;
  registrations$: Observable<Registration[]>;
  constructor(private route: ActivatedRoute, private deviceService: DeviceService) {
    route.params.subscribe((params) => {
      if (params.id) {
        deviceService.getDevice(params.id).subscribe((next) => {
          this.device = next;
        });
      }
    });
  }

  ngOnInit(): void {}
}

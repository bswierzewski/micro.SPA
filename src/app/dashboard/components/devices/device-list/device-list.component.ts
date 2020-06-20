import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/_services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  model: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevices().subscribe(next => {
      this.model = next;
    }, error => {
      console.log(error);
    });
  }

}

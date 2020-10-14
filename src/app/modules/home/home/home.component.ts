import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/core/services';
import { SocketService } from 'src/app/core/services/socket.service';
import { Device } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['time', 'bleAddress', 'macAddress', 'rssi'];
  devices = new Map();
  knowScanners: Device[];

  constructor(private socketService: SocketService, private deviceService: DeviceService) {
    this.deviceService.getDevices().subscribe((devices) => {
      this.knowScanners = devices;
    });

    socketService.connectSocket();

    socketService.psubscribe('*');

    socketService.getPMessages().subscribe((message) => {
      message.time = new Date().toLocaleTimeString();

      if (this.knowScanners.length > 0) {
        const index = this.knowScanners.findIndex((x) => x.addressLabel === message.macAddress);
        if (index > -1) {
          message.macAddress = this.knowScanners[index].name;
        }
      }

      if (this.knowScanners.length > 0) {
        const index = this.knowScanners.findIndex((x) => x.addressLabel === message.bleAddress);
        if (index > -1) {
          message.bleAddress = this.knowScanners[index].name;
        }
      }

      this.devices.set(message.bleAddress, message);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}

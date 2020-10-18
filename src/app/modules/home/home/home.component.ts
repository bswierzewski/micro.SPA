import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/core/services';
import { SocketService } from 'src/app/core/services/socket.service';
import { Device, SocketMessage } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['time', 'bleAddress', 'macAddress', 'rssi'];
  devices = new Map<string, SocketMessage>();
  knowScanners: Device[];

  constructor(private socketService: SocketService, private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe((devices) => {
      this.knowScanners = devices;
    });

    this.socketService.connectSocket();

    this.socketService.psubscribe('*');

    this.socketService.getPMessages().subscribe((message) => {
      message.time = new Date().toLocaleTimeString();

      if (this.knowScanners.length > 0) {
        const index = this.knowScanners.findIndex((x) => x.addressLabel === message.macAddress);
        if (index > -1) {
          message.macIcon = this.knowScanners[index].icon;
          message.macAddress = this.knowScanners[index].name;
        }
      }

      if (this.knowScanners.length > 0) {
        const index = this.knowScanners.findIndex((x) => x.addressLabel === message.bleAddress);
        if (index > -1) {
          message.bleIcon = this.knowScanners[index].icon;
          message.bleAddress = this.knowScanners[index].name;
        }
      }

      if (!this.devices.has(message.bleAddress) || Number(message.rssi) > -65) {
        this.devices.set(message.bleAddress, message);
      }
    });
  }

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}

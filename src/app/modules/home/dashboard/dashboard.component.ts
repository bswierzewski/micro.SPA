import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceListComponent } from './components/dialog-device-list.component';
import { DeviceDialogDataModel } from './components/DeviceDialogDataModel';
import { DeviceService, SocketService } from 'src/app/core/services';
import { SocketMessage, DeviceForList } from 'src/app/shared/models';

export interface DashboardDeviceModel {
  id: number;
  device?: DeviceForList;
  data: SocketMessage[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['time', 'bleAddress', 'rssi'];
  devices: DeviceForList[] = [];
  selectedDevices: DashboardDeviceModel[] = [];

  constructor(public dialog: MatDialog, private deviceService: DeviceService, private socketService: SocketService) {
    deviceService.getDevices().subscribe((data) => {
      this.devices = data;
    });

    socketService.connectSocket();

    socketService.getMessages().subscribe((message) => {
      message.time = new Date().toLocaleTimeString();

      const deviceIndex = this.selectedDevices.findIndex((x) => x.device.address === message.macAddress);

      if (deviceIndex > -1) {
        const lenght = this.selectedDevices[deviceIndex].data.unshift(message);

        if (lenght > 10) {
          this.selectedDevices[deviceIndex].data.pop();
        }

        this.selectedDevices[deviceIndex].data = this.selectedDevices[deviceIndex].data.slice();
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }

  remove(device: DeviceForList): void {
    if (device) {
      this.socketService.unsubscribe(device.address);
      this.selectedDevices = this.selectedDevices.filter((x) => x.id !== device.id);
    }
  }

  // Dialog with filter devices
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeviceListComponent, {
      data: {
        devices: this.devices,
        selectedDevices: this.selectedDevices?.map((x) => x.device),
      } as DeviceDialogDataModel,
    });

    dialogRef.afterClosed().subscribe((result: DeviceForList[]) => {
      if (result) {
        this.selectedDevices = [];
        result.forEach((device) => {
          this.socketService.subscribe(device.address);
          this.selectedDevices.push({
            id: device.id,
            device,
            data: [],
          } as DashboardDeviceModel);
        });
      }
    });
  }
}

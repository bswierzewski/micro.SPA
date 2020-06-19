import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/_services/device.service';
import { SocketService } from 'src/app/_services/socket.service';
import { Device } from 'src/app/_models/Device';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {

  id: number = 1;
  deviceList: Device[] = [];
  displayedColumns: string[] = ['id', 'position', 'name'];

  constructor(private deviceService: DeviceService, private socket: SocketService) { }

  ngOnInit() {
    this.socket.getMessages().subscribe(next => {
      const json = JSON.parse(next);
      const device: Device = {
        id: this.id++,
        created: new Date(),
        lastActivated: json.time,
        isActive: true,
        isArchival: true,
        kind: '',
        macAddress: json.address,
        name: '',
        photoUrl: '',
        role: ''
      };
      this.deviceList.push(device);
      this.deviceList = this.deviceList.filter(item => item.created >= new Date(Date.now() - 30000));
    });
  }
}

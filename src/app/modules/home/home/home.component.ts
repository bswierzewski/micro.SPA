import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketService } from 'src/app/core/_services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['time', 'name', 'address', 'rssi'];
  devices = new Map();

  constructor(private socketService: SocketService) {
    socketService.connectSocket();

    socketService.psubscribe('*');

    socketService.getPMessages().subscribe((message) => {
      message.time = new Date().toLocaleTimeString();

      this.devices.set(message.address, message);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}

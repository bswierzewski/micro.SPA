import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { SocketService } from 'src/app/_services/socket.service';
import { Message } from 'src/app/_models/Message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, AfterViewInit {

  constructor(private socketService: SocketService) { }

  tables = {};

  ngAfterViewInit(): void {

    this.socketService.connectSocket();

    // Subscrice pattern,
    // * - all channels
    this.socketService.psubscribe('*');

    // Get all messages
    this.socketService
      .getPMessages()
      .subscribe((message: string) => {

        const json = JSON.parse(message) as Message;

        json.time = new Date().toLocaleTimeString();

        if (this.tables[json.name] === undefined) {
          this.tables[json.name] = [];
        }

        this.tables[json.name].unshift(json);

        if (this.tables[json.name].length > 10) {
          this.tables[json.name].pop();
        }
      });
  }

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}


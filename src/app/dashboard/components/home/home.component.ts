import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { SocketService } from 'src/app/_services/socket.service';
import { Message } from 'src/app/_models/Message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  messages: Message[] = [];
  dataSource;

  ngOnInit(): void {
    this.socketService.sendMessage();
    this.socketService
      .getMessages()
      .subscribe((message: string) => {
        var json = JSON.parse(message) as Message;
        this.messages = [...this.messages, { address: json.address, name: json.name, rssi: json.rssi, time: json.time }];
        this.dataSource = this.messages;
      });
  }
  columns = [
    { columnDef: 'time', header: '#', cell: (element: any) => `${element.time}` },
    { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
    { columnDef: 'address', header: 'MacAddress', cell: (element: any) => `${element.address}` },
    { columnDef: 'rssi', header: 'Rssi', cell: (element: any) => `${element.rssi}` },
  ];

  displayedColumnsRegistration = this.columns.map(c => c.columnDef);
}


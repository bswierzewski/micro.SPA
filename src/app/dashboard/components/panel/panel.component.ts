import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/_services/socket.service';
import { Message } from 'src/app/_models/Message';
import { Device } from 'src/app/_models/Device';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  textButton = 'Subscribe';
  devices: Device[] = [];
  tables = {};

  ELEMENT_DATA: Device[] = [
    { name: '1', address: 'Hydrogen', subscribe: false },
    { name: '2', address: 'Helium', subscribe: false },
    { name: '3', address: 'Lithium', subscribe: false },
  ];

  constructor(private socketService: SocketService) { }

  toogleButton(button: any) {
    button.subscribe = !button.subscribe;

    if (button.subscribe) {
      this.subscribe(button.name);
    } else {
      this.unsubscribe(button.name);
    }
  }

  ngOnInit(): void {

    this.devices = this.ELEMENT_DATA;

    // Get all messages
    this.socketService
      .getMessages()
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

  subscribe(name: string) {
    this.socketService.subscribe(name);

    this.tables[name] = [];
  }

  unsubscribe(name: string) {
    this.socketService.unsubscribe(name);

    delete this.tables[name];

  }

}


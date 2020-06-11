import { Component, OnInit } from '@angular/core';
import { Device } from '../../../_models/Device';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../../../_services/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newMessage: string;
  messageList: string[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService
      .getMessages()
      .subscribe((message: string) => {
        if (this.messageList.length > 10) {
          this.messageList.splice(0, this.messageList.length);
        }
        this.messageList.push(message);
      });
  }
}

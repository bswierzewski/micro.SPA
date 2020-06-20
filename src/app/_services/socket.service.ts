import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '../_models/Message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) { }

  public getMessages = () => {

    this.socket.emit('subscribe', 'A4:CF:12:8D:16:78');

    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}

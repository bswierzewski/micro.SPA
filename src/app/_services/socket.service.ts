import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://socket.micro.io';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage() {
    this.socket.emit('psubscribe', '*');
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('pmessage', (message) => {
        observer.next(message);
      });
    });
  }
}

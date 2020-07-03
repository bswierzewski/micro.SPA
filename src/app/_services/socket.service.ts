import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() { }

  public connectSocket() {
    this.socket = io(environment.socketUrl, {
      transports: ['polling']
    });
  }

  public disconnectSocket() {
    this.socket.disconnect();
  }

  public subscribe(channel: string) {
    this.socket.emit('subscribe', channel);
  }

  public unsubscribe(channel: string) {
    this.socket.emit('unsubscribe', channel);
  }

  public psubscribe(pattern: string) {
    this.socket.emit('psubscribe', pattern);
  }

  public punsubscribe(pattern: string) {
    this.socket.emit('punsubscribe', pattern);
  }

  public getMessages = () => {
    return new Observable<string>(observer => {
      this.socket.on('message', message => {
        observer.next(message);
      });
    });
  }

  public getPMessages = () => {
    return new Observable<string>(observer => {
      this.socket.on('pmessage', message => {
        observer.next(message);
      });
    });
  }
}

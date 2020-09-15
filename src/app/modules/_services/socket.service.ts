import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;

  constructor() {}

  public connectSocket(): void {
    this.socket = io(environment.socketUrl, {
      transports: ['polling'],
    });
  }

  public disconnectSocket(): void {
    this.socket.disconnect();
  }

  public subscribe(channel: string): void {
    this.socket.emit('subscribe', channel);
  }

  public unsubscribe(channel: string): void {
    this.socket.emit('unsubscribe', channel);
  }

  public psubscribe(pattern: string): void {
    this.socket.emit('psubscribe', pattern);
  }

  public punsubscribe(pattern: string): void {
    this.socket.emit('punsubscribe', pattern);
  }

  public getMessages = () => {
    return new Observable<string>((observer) => {
      this.socket.on('message', (message: string) => {
        observer.next(message);
      });
    });
  };

  public getPMessages = () => {
    return new Observable<string>((observer) => {
      this.socket.on('pmessage', (message: string) => {
        observer.next(message);
      });
    });
  };
}

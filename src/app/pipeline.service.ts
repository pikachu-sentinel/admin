import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { History } from './history';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})

export class PipelineService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public histories$: BehaviorSubject<History[]> = new BehaviorSubject<History[]>([]);
  public states$: BehaviorSubject<State[]> = new BehaviorSubject<State[]>([]);

  constructor() { }

  socket = io('http://localhost:3000');

  public sendMessage(message: any) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };

  public getStates = () => {
    this.socket.on('getStates', (data) => {
      data.forEach((element: State, index: number) => {
        if (Date.now() - element.resp > 5000) {
          data[index].status_d = "Not Responding";
          data[index].status_s = "Not Responding";
        }
      });
      // console.log(data);
      this.states$.next(data);
    });

    return this.states$.asObservable();
  }

  public sendStates = () => {
    this.socket.emit('getStates');
  }

  public getHistories = () => {
    this.socket.on('getHistories', (data) => {
      this.histories$.next(data);
    });

    return this.histories$.asObservable();
  }
}
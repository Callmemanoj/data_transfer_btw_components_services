import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class InfosenderService {
  private teachermessage = new Subject<string>();
  teacherMessage$ = this.teachermessage.asObservable();
  constructor() {}

  sendMessage(message: any) {
    this.teachermessage.next(message);
  }
}

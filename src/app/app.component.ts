import { Component, VERSION } from '@angular/core';
import { InfosenderService } from './infosender.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private infosend: InfosenderService) {}
  greetings() {
    this.infosend.sendMessage('hellostudents');
  }
  calling() {
    this.infosend.sendMessage('Manoj come here');
  }
}

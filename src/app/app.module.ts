import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentsComponent } from './students/students.component';
import { InfosenderService } from './infosender.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StudentsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InfosenderService]
})
export class AppModule { }

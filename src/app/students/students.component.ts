import { Component, OnInit } from '@angular/core';
import { InfosenderService } from '../infosender.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  datafromappcomp: any;
  constructor(private infosend: InfosenderService) {}

  ngOnInit() {
    this.infosend.teacherMessage$.subscribe(
      (res: any) => {
        console.log(res);
        this.datafromappcomp = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}

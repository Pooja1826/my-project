import { Component, OnInit } from '@angular/core';
import {UserDataService} from 'src/app/services/user-data.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  emptyMsg ="No appointments available!";
  users:any;
  constructor(private userdata:UserDataService) {
    this.userdata.users().subscribe((data)=>{
      //console.warn("data",data);
      this.users=data;
    });
   }

  //constructor() { }

  ngOnInit(): void {
  }

}

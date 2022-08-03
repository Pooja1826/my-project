import { Component, OnInit } from '@angular/core';
import {UserDataService} from 'src/app/services/user-data.service';


@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {
  users:any;
  constructor(private userdata:UserDataService) {
    this.userdata.users().subscribe((data)=>{
      //console.warn("data",data);
      this.users=data;
    });
   }
   
   alert:boolean=false;
   show:boolean=false;
   showWeek(){
    this.show=true;
   }

   getUserFormData(data:any){
    this.userdata.saveUser(data).subscribe((result)=>{
      this.alert=true;
      //data.reset();
    })
    // this.userdata.reset({});
  }
  closeAlert(){
    this.alert=false;
  }
  

  ngOnInit(): void {
  }


}

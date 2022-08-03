import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  alert:boolean=false;
  constructor() { }

  saveFeedback(){
    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }

  ngOnInit(): void {
  }

}

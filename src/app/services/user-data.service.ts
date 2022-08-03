import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  reset(arg0: {}) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }
  url = "http://localhost:3000/users";
  users(){
    return this.http.get(this.url);
  }
  saveUser(data:any){
    return this.http.post(this.url,data);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public userData:any={
    username:"",
    password:"",
    remember:false,
  };
  ngOnInit(): void {
  }
  onLogin(){
    console.log("User Login Data:: ", this.userData);
  }
}

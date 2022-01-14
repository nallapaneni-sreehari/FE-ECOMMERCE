import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public otpVerified=true;
  public checkingOTP=false;
  public continents:any=["Asia", "Africa", "Australia", "America", "Arctic", "Antarctic","Asia", "Africa", "Australia", "America", "Arctic", "Antarctic"]
  public userData:any={
    name:"",
    email:"",
    password:"",
    continent:"",
    country:"",
    language:"",
    mobile:"",
    otp:"",
    terms:true
  };
  ngOnInit(): void {
  }
  checkOtp(){
    this.otpVerified = false;
    console.log("UserDaaata:::", this.userData)
  }

}

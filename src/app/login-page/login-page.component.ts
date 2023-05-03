import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  bankName="City Bank"
  data="Your Perfect Banking Partner"
  placeHolderData="Enter User ID"
  constructor(){}
  ngOnInit(): void {
    
  }

  login(){
    alert("login clicked")
  }

  unameChange(event:any){
      console.log(event.target.value);
      
  }
}

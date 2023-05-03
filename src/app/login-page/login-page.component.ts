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
  uname:any
  psw:any
  constructor(){}
  ngOnInit(): void {
    
  }

  login(a:any,b:any){
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname, this.psw);
    
    alert("login clicked")
  }


}

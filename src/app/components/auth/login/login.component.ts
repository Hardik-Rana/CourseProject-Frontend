import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { LoginDTO } from 'src/app/models/LoginDTO';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  showPassword:boolean=false;
  login:LoginDTO={
    email:'',
    password:''
  }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }

 

  OnLogin(){
    console.log(this.login)
  }
}

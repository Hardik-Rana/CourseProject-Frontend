import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    isLogin:boolean=true
  constructor(private router:Router){}

    NavigateLogin(){
      this.isLogin=!this.isLogin
     this.router.navigate(['courses']);
    }

    NavigateRegister(){
      this.router.navigate(['register'])
    }

    logout(){
      this.isLogin=!this.isLogin
      this.router.navigate(['']);
    }
}

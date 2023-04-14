import { Component, ViewChild ,OnInit} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { RegisterDTO } from 'src/app/models/RegisterDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  register:RegisterDTO={
    name:'',
    email:'',
    password:'',
    gender:'',
    IsAuthor:false
  }

  showPassword:boolean=false;
  
  @ViewChild('RegisterForm', { static: false }) RegisterForm!: NgForm;
  @ViewChild('password2') password2!: NgModel;
  
 
  ngOnInit(): void {
  }
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onRegister(){
    console.log(this.register)
  }

//   checkPasswordsMatch(){
//     if(this.RegisterForm.form.controls?.['password1'].value!=this.RegisterForm.form.controls?.['password2'].value){
//       this.RegisterForm.form.controls?.['password1'].setErrors({ NotMatch: true });
//       this.RegisterForm.form.controls?.['password2'].setErrors({ NotMatch: true });
//     }
//     else{
//       console.log(1)
//       this.RegisterForm.form.controls?.['password1'].setErrors(null);
//       this.RegisterForm.form.controls?.['password2'].setErrors(null);
//     }
//  }

}

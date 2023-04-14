import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CourseComponent } from './components/courses/course/course.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'courses',component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

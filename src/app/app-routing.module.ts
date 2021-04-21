import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPreferenceComponent } from './add-preference/add-preference.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:"login",component:LoginComponent},{path:"signup",component:SignupComponent},{path:"",component:HomeComponent},{path:"Changepassword",component:ChangepasswordComponent},{path:"editprofile",component:EditprofileComponent},{path:"Myaddress",component:MyaddressComponent},{path:"AddPreference",component:AddPreferenceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

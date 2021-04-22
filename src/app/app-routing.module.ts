import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPreferenceComponent } from './add-preference/add-preference.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:"login",component:LoginComponent},{path:"signup",component:SignupComponent},{path:"home",component:HomeComponent},{path:"Changepassword",component:ChangepasswordComponent},{path:"editprofile",component:EditprofileComponent},{path:"Myaddress",component:MyaddressComponent},{path:"AddPreference",component:AddPreferenceComponent},{ path: '**', component:HomeComponent  },{path:"",component:AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

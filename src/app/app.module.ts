import { ItemService } from './services/item.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import { AddPreferenceComponent } from './add-preference/add-preference.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {RatingModule} from 'ng-starrating';
import { ViewstoreComponent } from './viewstore/viewstore.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    SidenavComponent,
    AddPreferenceComponent,
    ChangepasswordComponent,
    MyaddressComponent,
    EditprofileComponent,
    ViewstoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase,'mff-angular-firebase'),
    AngularFirestoreModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    RatingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

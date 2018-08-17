// common modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// nebular
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbUserModule,
  NbButtonModule,
  NbBadgeModule,
  NbListModule,
  NbSpinnerModule,
} from '@nebular/theme';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// providers
import { DocumentService } from './providers/document.service';
import { AuthenticationService } from './providers/authentication.service';

// components
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';
import { DeviceComponent } from './pages/devices/device/device.component';
import { DeviceResolver } from './pages/devices/device/device.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DevicesComponent,
    MobilesComponent,
    MessagesComponent,
    LoginComponent,
    DeviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbInputModule,
    NbUserModule,
    NbButtonModule,
    NbBadgeModule,
    NbListModule,
    NbSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    NbSidebarService,
    AuthenticationService,
    DocumentService,
    DeviceResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';
import { DeviceComponent } from './pages/devices/device/device.component';
import { DeviceResolver } from './pages/devices/device/device.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'devices',
        component: DevicesComponent,
      },
      {
        path: 'devices/:id',
        component: DeviceComponent,
      },
      {
        path: 'mobiles',
        component: MobilesComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

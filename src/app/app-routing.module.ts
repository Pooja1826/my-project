import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaceAppointmentComponent } from './pages/place-appointment/place-appointment.component';
import { ViewAppointmentsComponent } from './pages/view-appointments/view-appointments.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'place-appointment',component:PlaceAppointmentComponent},
  {path:'view-appointments',component:ViewAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageComponent } from './package/package.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewComponent } from './review/review.component';

import { HomeComponent } from './home/home.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BookingComponent } from './booking/booking.component';
import { DemoComponent } from './demo/demo.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'packages', component: PackageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'review', component: ReviewComponent },
  // { path: 'package-details/:location', component: PackageDetailsComponent },
  { path: 'package-details/:id', component: PackageDetailsComponent },
  {path: "confirm", component: ConfirmComponent},
  {path: "booking", component: BookingComponent},
  {path: "demo", component: DemoComponent},
  {path: "payment", component: PaymentComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
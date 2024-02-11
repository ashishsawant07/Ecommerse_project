import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    component: SellerAuthComponent,
    path: 'seller-auth'
  },

  
  {
    component: SellerHomeComponent,
    path: 'seller-home',
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProdudDetailComponent } from './produd-detail/produd-detail.component';
import { RouteGaurdGuard } from './route-gaurd.guard';

const routes: Routes = [
  { path: '', component: LayoutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  {path:'cart',component:CartComponent,canActivate: [RouteGaurdGuard]},
  { path: 'card', component: CardComponent}, 
  { path: 'produdDetail/:title/:des/:img/:price', component: ProdudDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

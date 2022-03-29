import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import{AngularFireDatabaseModule}from '@angular/fire/compat/database';
import{ AngularFireModule}from '@angular/fire/compat';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatMenuModule} from '@angular/material/menu';
import { CartComponent } from './cart/cart.component';
import { ProdudDetailComponent } from './produd-detail/produd-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LayoutComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    ProdudDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    MatMenuModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment. firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

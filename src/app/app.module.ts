import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { NgswitchComponent } from './myContainer/ngswitch/ngswitch.component';
import { NgIfComponent } from './myContainer/ng-if/ng-if.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './page-not-found/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmeachineComponent } from './products/washingmeachine/washingmeachine.component';
import { MixerComponent } from './products/mixer/mixer.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    myContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    NgswitchComponent,
    NgIfComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PagenotfoundComponent,
    LaptopComponent,
    TvComponent,
    WashingmeachineComponent,
    MixerComponent,
    MobileComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

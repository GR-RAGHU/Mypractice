import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './page-not-found/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MixerComponent } from './products/mixer/mixer.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmeachineComponent } from './products/washingmeachine/washingmeachine.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products', children:[
    {path:'', component:ProductsComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'mixer',component:MixerComponent},
    {path:'mobile',component:MobileComponent},
    {path:'tv',component:TvComponent},
    {path:'washingmatchine',component:WashingmeachineComponent},

  ]},
  {path:'**',component:PagenotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

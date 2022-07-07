import { AnimateTimings } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-practice-app';
  public selectedtab:string="";
  constructor(private router:Router){
 this.selectedtab="home"
 this.selectedTab(this.selectedtab);
this.router.navigate(['/home']);
  }
  selectedTab(event:string){
this.selectedtab=event;

  }
}

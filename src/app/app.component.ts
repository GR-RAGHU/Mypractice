import { AnimateTimings } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-practice-app';
  public selectedtab:string;
  constructor(){
this.selectedtab="home"
  }
  selectedTab(event:string){
this.selectedtab=event;

  }
}

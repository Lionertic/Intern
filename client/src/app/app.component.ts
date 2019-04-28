import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isView:boolean=true;  
  constructor(private router:Router){
    this.isView=true;
  };
  title = 'client';
  change(){
    this.isView=false;
  }
}

import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  
  public isView:boolean=true;  

  title = 'client';
  change(cha:boolean){
    this.isView=cha;
  }
}
